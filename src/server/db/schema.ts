import { randomUUID } from "crypto";
import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const INITIAL_MOOD_ENTRY_OFFSET = 20;
export const DESCRIPTION_MAX_LENGTH = 256;

export const moods = sqliteTable("moods", {
  id: text("id", { length: 36 })
    .primaryKey()
    .$defaultFn(() => randomUUID()),
  mood: text("mood", {
    enum: ["joy", "sadness", "fear", "disgust", "anger"],
  }).notNull(),
  description: text("description", {
    length: DESCRIPTION_MAX_LENGTH,
  }).notNull(),
  moodOwnerId: text("mood_owner_id"),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch())`),
});

export const InsertMoodSchema = createInsertSchema(moods, {
  description: z.string().trim().max(DESCRIPTION_MAX_LENGTH).optional(),
});

export const CreateMoodSchema = z.object({
  mood: z.enum(["joy", "sadness", "fear", "disgust", "anger"], {
    errorMap: (error, ctx) => {
      switch (error.code) {
        case z.ZodIssueCode.invalid_enum_value:
          return {
            message: "You must specify how you feel",
          };
      }

      return { message: ctx.defaultError };
    },
  }),
  description: z
    .string()
    .trim()
    .max(DESCRIPTION_MAX_LENGTH, {
      message: `Description must be less than ${DESCRIPTION_MAX_LENGTH} characters`,
    })
    .optional(),
});
export type CreateMood = z.infer<typeof CreateMoodSchema>;

export const SelectMoodSchema = createSelectSchema(moods);
export type SelectMood = z.infer<typeof SelectMoodSchema>;
