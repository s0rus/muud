import { type SelectMood } from "@/db/schema";
import dayjs from "dayjs";
import { motion } from "framer-motion";

type TimelineProps = {
  list: SelectMood[];
};

export function Timeline({ list }: TimelineProps) {
  return (
    <motion.ul className="flex w-full flex-col">
      {list.map((mood, idx, arr) => (
        <motion.li
          key={`${mood.description}__${mood.createdAt.toString()}__${mood.mood}`}
          className="flex h-full flex-row gap-4"
          layout
        >
          <motion.div className="flex min-w-36 flex-col items-end">
            <div className="flex items-center gap-2">
              <motion.span
                id="date"
                className="text-sm font-semibold tracking-tighter text-muted"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 + 0.3 }}
              >
                {dayjs(mood.createdAt).format("DD/MM/YYYY")}
              </motion.span>
              <motion.span
                id="dot"
                className="block min-h-4 min-w-4 rounded-full bg-secondary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: idx * 0.1 + 0.3,
                  type: "tween",
                  ease: "easeInOut",
                }}
              ></motion.span>
            </div>
            {idx !== arr.length - 1 && (
              <motion.span
                id="line"
                className="mr-[7px] block h-full w-0.5 flex-1 bg-secondary"
                // initial={{ opacity: 0, height: 0 }}
                // animate={{ opacity: 1, height: "100%" }}
                // transition={{ delay: idx * 0.2 + 0.3 }}
                initial={{ scaleY: 0, originY: 0 }}
                animate={{ scaleY: 1, originY: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 + 0.4 }}
              ></motion.span>
            )}
          </motion.div>
          <motion.div
            id="text"
            className="pb-8"
            initial={{ opacity: 0, y: -10, x: 0 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{
              delay: idx * 0.1 + 0.3,
              type: "tween",
              ease: "easeInOut",
            }}
          >
            {mood.description}
          </motion.div>
        </motion.li>
      ))}
    </motion.ul>
  );
}
