"use client";

import { type SelectMood } from "@/server/db/schema";
import { useOptimistic } from "react";
import { Empty } from "./board/empty";
import { Timeline } from "./board/timeline";
import { LoadMore } from "./load-more";
import { MoodForm } from "./mood-form";

export function MoodBoard({
  initialMoodEntries,
}: {
  initialMoodEntries: SelectMood[];
}) {
  const [optimisticEntryList, addOptimisticEntry] = useOptimistic(
    initialMoodEntries,
    (state, newEntry: SelectMood) => {
      return [newEntry, ...state];
    },
  );

  return (
    <>
      <div className="col-span-1">
        <MoodForm addOptimisticEntry={addOptimisticEntry} />
      </div>
      <div className="col-span-2">
        {optimisticEntryList.length > 0 ? (
          <>
            <Timeline entries={optimisticEntryList} />
            <LoadMore />
          </>
        ) : (
          <Empty />
        )}
      </div>
    </>
  );
}
