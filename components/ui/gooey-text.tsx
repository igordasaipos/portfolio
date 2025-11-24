"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface GooeyTextProps {
  texts: string[];
  morphTime?: number;
  cooldownTime?: number;
  className?: string;
  textClassName?: string;
}

export function GooeyText({
  texts,
  morphTime = 1.5,
  cooldownTime = 2,
  className,
  textClassName
}: GooeyTextProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, (morphTime + cooldownTime) * 1000);

    return () => clearInterval(interval);
  }, [texts.length, morphTime, cooldownTime]);

  return (
    <div className={cn("relative", className)}>
      <div className="flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentIndex}
            className={cn(
              "text-foreground",
              textClassName
            )}
            initial={{
              opacity: 0,
              filter: "blur(8px)"
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)"
            }}
            exit={{
              opacity: 0,
              filter: "blur(8px)"
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            {texts[currentIndex]}
          </motion.h1>
        </AnimatePresence>
      </div>
    </div>
  );
}
