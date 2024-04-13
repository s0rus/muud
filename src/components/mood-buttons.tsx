"use client";

import { CreateMoodSchema } from "@/db/schema";
import { MoodIcon, type Icon } from "./ui/icon";
import { ToggleGroupItem } from "./ui/toggle-group";

export function MoodButtons() {
  return Object.keys(CreateMoodSchema.shape.mood.enum).map((mood, idx) => {
    const Icon = MoodIcon[
      mood as keyof typeof CreateMoodSchema.shape.mood.enum
    ] as Icon;

    return (
      <ToggleGroupItem
        key={`${mood}_${idx}`}
        name="mood"
        value={mood}
        className="flex h-full flex-col items-center justify-center py-2 capitalize"
      >
        <Icon className="h-12 w-12 text-background" />
        {mood}
      </ToggleGroupItem>
    );
  });
}
