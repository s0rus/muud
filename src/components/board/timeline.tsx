import { type SelectMood } from "@/db/schema";
import dayjs from "dayjs";

type TimelineProps = {
  list: SelectMood[];
};

export function Timeline({ list }: TimelineProps) {
  return (
    <div className="flex w-full flex-col">
      {list.map((mood, idx, arr) => (
        <div key={mood.id} className="flex h-full flex-row gap-4">
          <div className="flex min-w-36 flex-col items-end">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-muted">
                {dayjs(mood.createdAt).format("DD/MM/YYYY")}
              </span>
              <span className="block min-h-4 min-w-4 rounded-full bg-secondary"></span>
            </div>
            {idx !== arr.length - 1 && (
              <span className="mr-[7px] block h-full w-0.5 flex-1 bg-secondary"></span>
            )}
          </div>
          <div className="pb-8">{mood.description}</div>
        </div>
      ))}
    </div>
  );
}
