

'use client'

import { motion } from 'motion/react'
import { TextEffect } from '@/components/ui/text-effect'
import { GooeyText } from '@/components/ui/gooey-text'
import { Magnetic } from '@/components/ui/magnetic'
import { Spotlight } from '@/components/ui/spotlight'
import { ArrowRight, Sparkles } from 'lucide-react'

export type HeroProps = {
  title: string | string[]
  subtitle?: string
  description: string
  primaryAction?: {
    label: string
    href: string
    onClick?: () => void
  }
  secondaryAction?: {
    label: string
    href: string
    onClick?: () => void
  }
  badge?: string
  className?: string
}

const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
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
      ease: [0.22, 1, 0.36, 1],
    }
  },
}

export function Hero({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  badge,
  className = '',
}: HeroProps) {
  return (
    <motion.section
      className={`relative flex min-h-screen items-center justify-center px-6 py-32 md:py-40 ${className}`}
      variants={CONTAINER_VARIANTS}
      initial="hidden"
      animate="visible"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 text-center">
        {/* Badge */}
        {badge && (
          <motion.div
            variants={ITEM_VARIANTS}
            className="mb-8 flex justify-center"
          >
            <div className="relative overflow-hidden rounded-full bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30">
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={48}
              />
              <div className="relative rounded-full bg-white px-4 py-1.5 dark:bg-zinc-950">
                <div className="flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  <Sparkles className="h-3.5 w-3.5" />
                  {badge}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Subtitle */}
        {subtitle && (
          <motion.div variants={ITEM_VARIANTS}>
            <TextEffect
              per="word"
              preset="fade-in-blur"
              as="h2"
              className="mb-12 text-xl font-medium text-zinc-600 dark:text-zinc-400"
              speedReveal={1.5}
            >
              {subtitle}
            </TextEffect>
          </motion.div>
        )}

        {/* Title */}
        <motion.div variants={ITEM_VARIANTS}>
          {Array.isArray(title) ? (
            <GooeyText
              texts={title}
              morphTime={1.5}
              cooldownTime={2}
              className="mb-10 min-h-[140px] sm:min-h-[160px] md:min-h-[200px] overflow-visible"
              textClassName="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl md:text-7xl lg:text-8xl whitespace-nowrap"
            />
          ) : (
            <TextEffect
              per="word"
              preset="fade-in-blur"
              as="h1"
              className="mb-10 text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-7xl md:text-8xl"
              speedReveal={2}
            >
              {title}
            </TextEffect>
          )}
        </motion.div>

        {/* Description */}
        <motion.div variants={ITEM_VARIANTS}>
          <TextEffect
            per="word"
            preset="fade-in-blur"
            as="p"
            className="mx-auto mb-12 max-w-3xl text-xl text-zinc-600 dark:text-zinc-400 sm:text-2xl"
            speedReveal={2.5}
          >
            {description}
          </TextEffect>
        </motion.div>

        {/* Actions */}
        {(primaryAction || secondaryAction) && (
          <motion.div
            variants={ITEM_VARIANTS}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            {primaryAction && (
              <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
                <a
                  href={primaryAction.href}
                  onClick={primaryAction.onClick}
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
                >
                  <Spotlight
                    className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                    size={96}
                  />
                  <span className="relative flex items-center gap-2 rounded-full bg-zinc-900 px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200">
                    {primaryAction.label}
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </Magnetic>
            )}

            {secondaryAction && (
              <Magnetic springOptions={{ bounce: 0 }} intensity={0.2}>
                <a
                  href={secondaryAction.href}
                  onClick={secondaryAction.onClick}
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
                >
                  <Spotlight
                    className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                    size={96}
                  />
                  <span className="relative flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-medium text-zinc-900 transition-colors duration-200 hover:bg-zinc-100 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900">
                    {secondaryAction.label}
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </Magnetic>
            )}
          </motion.div>
        )}
      </div>

      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-zinc-200/40 via-zinc-100/20 to-transparent blur-3xl dark:from-zinc-800/40 dark:via-zinc-900/20" />
      </div>
    </motion.section>
  )
}
