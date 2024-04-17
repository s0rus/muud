import { type SelectMood } from "@/server/db/schema";
import dayjs from "dayjs";
import { Icon } from "../ui/icon";

type TimelineProps = {
  entries: SelectMood[];
  pending?: boolean;
  isAllDataLoaded?: boolean;
};

export function Timeline({
  entries,
  pending = false,
  isAllDataLoaded = false,
}: TimelineProps) {
  return (
    // <motion.ul className="flex w-full flex-col">
    //   {entries.map((entry, idx, arr) => (
    //     <motion.li
    //       key={`${entry.description}__${entry.createdAt.toString()}__${entry.mood}`}
    //       className="flex h-full flex-row gap-4"
    //       layout
    //     >
    //       <motion.div className="flex min-w-36 flex-col items-end">
    //         <div className="flex items-center gap-2">
    //           <motion.span
    //             id="date"
    //             className="text-sm font-semibold tracking-tighter text-muted"
    //             initial={{ opacity: 0, y: -10 }}
    //             animate={{ opacity: 1, y: 0 }}
    //             transition={{ delay: idx * 0.1 + 0.3 }}
    //           >
    //             {dayjs(entry.createdAt).format("DD/MM/YYYY")}
    //           </motion.span>
    //           <motion.span
    //             id="dot"
    //             className="block min-h-4 min-w-4 rounded-full bg-secondary"
    //             initial={{ opacity: 0 }}
    //             animate={{ opacity: 1 }}
    //             transition={{
    //               delay: idx * 0.1 + 0.3,
    //               type: "tween",
    //               ease: "easeInOut",
    //             }}
    //           ></motion.span>
    //         </div>
    //         {idx !== arr.length - 1 && (
    //           <motion.span
    //             id="line"
    //             className="mr-[7px] block h-full w-0.5 flex-1 bg-secondary"
    //             initial={{ scaleY: 0, originY: 0 }}
    //             animate={{ scaleY: 1, originY: 0 }}
    //             transition={{ duration: 0.3, delay: idx * 0.1 + 0.4 }}
    //           ></motion.span>
    //         )}
    //       </motion.div>
    //       <motion.div
    //         id="text"
    //         className="pb-8"
    //         initial={{ opacity: 0, y: -10, x: 0 }}
    //         animate={{ opacity: 1, y: 0, x: 0 }}
    //         transition={{
    //           delay: idx * 0.1 + 0.3,
    //           type: "tween",
    //           ease: "easeInOut",
    //         }}
    //       >
    //         {entry.description}
    //       </motion.div>
    //     </motion.li>
    //   ))}
    // </motion.ul>
    <>
      <ul className="flex w-full flex-col">
        {entries.map((entry, idx, arr) => (
          <li
            key={`${entry.description}__${entry.createdAt.toString()}__${entry.mood}`}
            className="flex h-full flex-row gap-4"
          >
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
        ))}
        {isAllDataLoaded && (
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
        )}
      </ul>
      {pending && (
        <div className="col-span-1 flex items-center justify-center p-4 sm:col-span-2 md:col-span-3">
          <Icon.loading className="animate-spin" />
        </div>
      )}
    </>
  );
}
