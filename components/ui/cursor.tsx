"use client"

import { useRef, useState, type HTMLAttributes } from "react"
import { motion, useMotionValue, useSpring } from "motion/react"

import { cn } from "@/lib/utils"

type HoverCursorProps = {
  size?: number
} & HTMLAttributes<HTMLDivElement>

export function HoverCursor({
  children,
  className,
  size = 140,
  ...props
}: HoverCursorProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 300, damping: 35 })
  const springY = useSpring(y, { stiffness: 300, damping: 35 })

  return (
    <div
      ref={ref}
      className={cn("relative h-full", className)}
      onMouseEnter={() => setIsActive(true)}
      onMouseMove={(event) => {
        const bounds = ref.current?.getBoundingClientRect()
        if (!bounds) return
        x.set(event.clientX - bounds.left)
        y.set(event.clientY - bounds.top)
      }}
      onMouseLeave={() => setIsActive(false)}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50 blur-2xl dark:bg-zinc-800/60"
        style={{
          left: springX,
          top: springY,
          width: size,
          height: size,
          opacity: isActive ? 1 : 0,
        }}
        aria-hidden
      />
      {children}
    </div>
  )
}
