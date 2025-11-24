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

  const currentText = texts[currentIndex];
  const chars = currentText.split('');

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
        <div
          className={cn(
            "inline-block select-none text-center",
            "text-foreground",
            textClassName
          )}
          style={{
            filter: "url(#gooey-threshold)"
          }}
        >
          <AnimatePresence mode="wait">
            {chars.map((char, index) => (
              <motion.span
                key={`${currentIndex}-${index}`}
                className="inline-block"
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  y: 20
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  y: -20
                }}
                transition={{
                  duration: morphTime * 0.6,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
