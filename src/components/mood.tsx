"use client";

import { type SelectMood } from "@/db/schema";
import { useOptimistic } from "react";
import { MoodForm } from "./mood-form";

export function Mood({ moodList }: { moodList: SelectMood[] }) {
  const [optimisticMoodList, addOptimisticMood] = useOptimistic(
    moodList,
    (state, newMood: SelectMood) => {
      return [...state, newMood];
    },
  );

  return (
    <>
      <div className="col-span-1">
        <MoodForm addOptimisticMood={addOptimisticMood} />
      </div>
      <div className="col-span-2">
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-4">
          {optimisticMoodList.map((mood) => (
            <div key={mood.id} className="bg-muted p-4">
              {mood.mood}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
