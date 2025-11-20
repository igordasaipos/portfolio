"use client";

import { motion } from "motion/react";
import type { ElementType, ReactNode } from "react";

type AnimatedTextProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function AnimatedText({
  as: Tag = "span",
  children,
  className,
  delay = 0,
}: AnimatedTextProps) {
  return (
    <motion.div
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      initial={{ opacity: 0, filter: "blur(20px)", y: 20 }}
      transition={{
        type: "spring",
        bounce: 0.3,
        duration: 2,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      style={{ willChange: "filter, opacity, transform" }}
    >
      <Tag className={className}>{children}</Tag>
    </motion.div>
  );
}

