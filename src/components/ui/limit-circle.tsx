import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

export function LimitCircle({
  value,
  maxValue,
}: {
  value: number;
  maxValue: number;
}) {
  const percentage = Math.min(Math.max((value / maxValue) * 100, 0), 100);
  const circumference = 2 * Math.PI * 11;
  const strokeDashoffset = circumference * (1 - percentage / 100);

  return (
    <motion.div
      animate={value > 0 ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.2 }}
    >
      <svg width="24" height="24">
        <circle
          className="text-muted"
          cx="12"
          cy="12"
          r="10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          className={cn(
            value === maxValue ? "text-destructive" : "text-primary",
            "transition-colors",
          )}
          cx="12"
          cy="12"
          r="11"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90 12 12)"
        />
      </svg>
    </motion.div>
  );
}
