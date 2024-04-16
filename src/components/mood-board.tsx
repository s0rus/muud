"use client";

import { type SelectMood } from "@/server/db/schema";
import { useOptimistic, useState } from "react";
import { Empty } from "./board/empty";
import { Timeline } from "./board/timeline";
import { MoodForm } from "./mood-form";

export function MoodBoard({
  initialMoodEntries,
}: {
  initialMoodEntries: SelectMood[];
}) {
  const [entires, setEntries] = useState<SelectMood[]>(initialMoodEntries);
  const [entryList, addEntry] = useOptimistic(
    entires,
    (state, newEntry: SelectMood) => {
      return [newEntry, ...state];
    },
  );

  return (
    <>
      <div className="col-span-1">
        <MoodForm addEntry={addEntry} />
      </div>
      <div className="col-span-2">
        {entryList.length > 0 ? (
          <Timeline entries={entryList} addEntry={setEntries} />
        ) : (
          <Empty />
        )}
      </div>
    </>
  );
}
