import { randomUUID } from "crypto";
import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const moods = sqliteTable("moods", {
  id: text("id", { length: 36 })
    .primaryKey()
    .$defaultFn(() => randomUUID()),
  mood: text("mood", {
    enum: ["joy", "sadness", "fear", "disgust", "anger"],
  }).notNull(),
  description: text("description", { length: 256 }).notNull(),
  moodOwnerId: text("mood_owner_id"),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch())`),
});

export const InsertMoodSchema = createInsertSchema(moods, {
  description: z.string().trim().max(256).optional(),
});

export const CreateMoodSchema = z.object({
  mood: z.enum(["joy", "sadness", "fear", "disgust", "anger"], {
    required_error: "You must specify how you feel",
  }),
  description: z.string().trim().max(256).optional(),
});
export type CreateMood = z.infer<typeof CreateMoodSchema>;

export const SelectMoodSchema = createSelectSchema(moods);
export type SelectMood = z.infer<typeof SelectMoodSchema>;
