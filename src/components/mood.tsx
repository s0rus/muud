"use client";

import { type SelectMood } from "@/db/schema";
import { useOptimistic } from "react";
import { Empty } from "./board/empty";
import { Timeline } from "./board/timeline";
import { MoodForm } from "./mood-form";

export function Mood({ moodList }: { moodList: SelectMood[] }) {
  const [optimisticMoodList, addOptimisticMood] = useOptimistic(
    moodList,
    (state, newMood: SelectMood) => {
      return [newMood, ...state];
    },
  );

  return (
    <>
      <div className="col-span-1">
        <MoodForm addOptimisticMood={addOptimisticMood} />
      </div>
      <div className="col-span-2">
        {moodList.length > 0 ? (
          <Timeline list={optimisticMoodList} />
        ) : (
          <Empty />
        )}
      </div>
    </>
  );
}
