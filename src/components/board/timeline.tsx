"use client";

import { getMoodEntries } from "@/server/queries";
import { useInfiniteQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { InfiniteScroller } from "../infinite-scroller";

// TODO: Add animations to the timeline

export function Timeline() {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["mood-entries"],
    queryFn: ({ pageParam }) => getMoodEntries({ cursor: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  return (
    <>
      <ul className="flex w-full flex-col">
        <InfiniteScroller
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          loadingMessage={"Loading..."}
          endingMessage={"No more entries"}
        >
          {data?.pages.map((page) => {
            return page.data.map((entry, _idx) => (
              <li key={entry.id} className="flex h-full flex-row gap-4">
                <div className="flex min-w-36 flex-col items-end">
                  <div className="flex items-center gap-2">
                    <span
                      id="date"
                      className="text-sm font-semibold tracking-tighter text-muted"
                    >
                      {dayjs(entry.createdAt).format("DD/MM/YYYY")}
                    </span>
                    <span
                      id="dot"
                      className="block min-h-4 min-w-4 rounded-full bg-secondary"
                    ></span>
                  </div>
                  <span
                    id="line"
                    className="mr-[7px] block h-full w-0.5 flex-1 bg-secondary"
                  ></span>
                </div>
                <div id="text" className="pb-8">
                  {entry.description}
                </div>
              </li>
            ));
          })}
        </InfiniteScroller>
        {/* {isAllDataLoaded && (
          <li className="flex h-full flex-row gap-4">
            <div className="flex min-w-36 flex-col items-end">
              <div className="flex items-center gap-2">
                <span
                  id="date"
                  className="text-sm font-semibold tracking-tighter text-muted"
                >
                  The past is blurry
                </span>
                <div className="flex flex-col items-center gap-2">
                  <span
                    id="dot"
                    className="block min-h-4 min-w-4 rounded-full bg-secondary"
                  ></span>
                  <span
                    id="dot"
                    className="block min-h-3 min-w-3 rounded-full bg-secondary/50"
                  ></span>
                  <span
                    id="dot"
                    className="block min-h-2 min-w-2 rounded-full bg-secondary/20"
                  ></span>
                  <span
                    id="dot"
                    className="block min-h-1 min-w-1 rounded-full bg-secondary/10"
                  ></span>
                </div>
              </div>
            </div>
          </li>
        )} */}
      </ul>
      {/* {pending && (
        <div className="col-span-1 flex items-center justify-center p-4 sm:col-span-2 md:col-span-3">
          <Icon.loading className="animate-spin" />
        </div>
      )} */}
    </>
  );
}
