'use client'

import { motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

export type Stat = {
  value: string
  label: string
  suffix?: string
}

export type StatsProps = {
  stats: Stat[]
}

const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
    },
  },
}

function AnimatedNumber({ value, suffix = '' }: { value: string; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  // Extract numeric value
  const numericValue = parseInt(value.replace(/\D/g, ''))

  useEffect(() => {
    if (!ref.current || hasAnimated) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const increment = numericValue / steps
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= numericValue) {
              setCount(numericValue)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [numericValue, hasAnimated])

  return (
    <div ref={ref}>
      {count}
      {suffix}
    </div>
  )
}

export function Stats({ stats }: StatsProps) {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          variants={CONTAINER_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={ITEM_VARIANTS}
              className="text-center"
            >
              <div className="mb-2 text-4xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-5xl">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
