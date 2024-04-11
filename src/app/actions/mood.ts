"use server";

import { db } from "@/db/db";
import { CreateMoodSchema, moods } from "@/db/schema";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

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
