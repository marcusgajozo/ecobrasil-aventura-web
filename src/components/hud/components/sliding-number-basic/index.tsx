"use client";

import { SlidingNumber } from "@/components/sliding-number";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function SlidingNumberBasic(props: { value: number }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value >= props.value) return;

    const interval = setInterval(() => {
      setValue(value + 1);
    }, 10);
    return () => clearInterval(interval);
  }, [value, props.value]);

  return (
    <motion.div
      initial={{ y: 0, fontSize: `${24}px` }}
      animate={{ y: 0, fontSize: `${24}px` }}
      transition={{
        ease: [1, 0, 0.35, 0.95],
        duration: 1.5,
        delay: 0.3,
      }}
      className="leading-none"
    >
      <div className="inline-flex items-center gap-1 font-primary text-4xl">
        <SlidingNumber value={value} />%
      </div>
    </motion.div>
  );
}
