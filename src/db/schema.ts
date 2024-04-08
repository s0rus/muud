import { randomUUID } from "crypto";
import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const moods = sqliteTable("moods", {
  id: text("id", { length: 36 })
    .primaryKey()
    .$defaultFn(() => randomUUID()),
  mood: text("mood", {
    enum: ["joy", "sadness", "fear", "disgust", "anger"],
  }).notNull(),
  description: text("description"),
  moodOwnerId: text("mood_owner_id"),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch())`),
});

export const insertMoodSchema = createInsertSchema(moods);
export const selectMoodSchema = createSelectSchema(moods);
