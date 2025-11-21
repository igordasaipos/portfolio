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
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <defs>
          <filter id="gooey-threshold">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 18 -8"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop"/>
          </filter>
        </defs>
      </svg>

      <div className="flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            className={cn(
              "inline-block select-none text-center",
              "text-foreground",
              textClassName
            )}
            initial={{
              opacity: 0,
              filter: "blur(20px)",
              scale: 0.95,
              y: 20
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
              scale: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              filter: "blur(20px)",
              scale: 0.95,
              y: -20
            }}
            transition={{
              duration: morphTime,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              filter: "url(#gooey-threshold)"
            }}
          >
            {texts[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
