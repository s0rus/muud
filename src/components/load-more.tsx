"use client";

import { type SelectMood } from "@/server/db/schema";
import { getMoodEntries } from "@/server/queries";
import { useCallback, useEffect, useState, useTransition } from "react";
import { useInView } from "react-intersection-observer";
import { Timeline } from "./board/timeline";

export function LoadMore() {
  const [pending, startTransition] = useTransition();
  const [isAllDataFetched, setIsAllDataFetched] = useState(false);
  const [entries, setEntries] = useState<SelectMood[]>([]);
  const [offset, setOffset] = useState(20);
  const { ref, inView } = useInView();

  // const delay = (ms: number) =>
  //   new Promise((resolve) => setTimeout(resolve, ms));

  // TODO: something is wrong with the offset/limit and values disappear on optimistic update

  const loadMoreEntries = useCallback(() => {
    startTransition(async () => {
      const moreEntries = await getMoodEntries({
        offset: offset,
        limit: 10,
      });
      setIsAllDataFetched(moreEntries.isAllDataLoaded);

      setEntries((prevEntries: SelectMood[]) => [
        ...prevEntries,
        ...moreEntries.data,
      ]);
      setOffset((prevOffset) => prevOffset + 20);
    });
  }, [offset]);

  useEffect(() => {
    if (inView && !isAllDataFetched) {
      void loadMoreEntries();
    }
  }, [inView]);

  return (
    <>
      <Timeline
        entries={entries}
        pending={pending}
        isAllDataLoaded={isAllDataFetched}
      />
      <div
        className="col-span-1 flex items-center justify-center p-4 sm:col-span-2 md:col-span-3"
        ref={ref}
      ></div>
    </>
  );
}
