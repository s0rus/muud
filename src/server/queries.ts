"use server";

import { db } from "@/server/db/db";
import { CreateMoodSchema, moods } from "@/server/db/schema";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import "server-only";

export type State = {
  errors?: Record<string, string[]>;
  message: string;
};

export async function createMoodEntry(data: unknown): Promise<State> {
  const parsed = CreateMoodSchema.safeParse(data);

  if (!parsed.success) {
    revalidatePath("/");
    return {
      errors: parsed.error.flatten().fieldErrors,
      message: "Whoops! Failed to create mood entry due to invalid data.",
    };
  }

  const { mood, description = "" } = parsed.data;
  const { userId } = auth();

  if (!userId) {
    return {
      message: "Unauthorized",
    };
  }

  try {
    await db.insert(moods).values({
      mood,
      description: description,
      moodOwnerId: userId,
      createdAt: new Date(),
    });

    return {
      message: "Mood entry has been added to your board.",
    };
  } catch (error) {
    return {
      message: "Database Error: Failed to add mood entry.",
    };
  } finally {
    revalidatePath("/");
  }
}

export async function getMoodEntries({
  offset,
  limit,
}: {
  offset?: number;
  limit?: number;
}) {
  const { userId } = auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  try {
    const moodList = await db.query.moods.findMany({
      offset,
      limit,
      where: (fields, { eq }) => eq(fields.moodOwnerId, userId),
      orderBy: (fields, { desc }) => desc(fields.createdAt),
    });

    return moodList;
  } catch (error) {
    throw new Error("Database Error: Failed to get mood entries.");
  }
}
