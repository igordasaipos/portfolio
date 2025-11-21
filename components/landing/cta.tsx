'use client'

import { motion } from 'motion/react'
import { Magnetic } from '@/components/ui/magnetic'
import { Spotlight } from '@/components/ui/spotlight'
import { ArrowRight } from 'lucide-react'

export type CTAProps = {
  title: string
  description: string
  primaryAction: {
    label: string
    href: string
  }
  secondaryAction?: {
    label: string
    href: string
  }
}

export function CTA({ title, description, primaryAction, secondaryAction }: CTAProps) {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
        >
          <Spotlight
            className="from-zinc-900 via-zinc-800 to-zinc-700 blur-3xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
            size={200}
          />
          <div className="relative rounded-[23px] bg-white p-12 text-center dark:bg-zinc-950">
            <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              {title}
            </h2>
            <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-400">
              {description}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
                <a
                  href={primaryAction.href}
                  className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-base font-medium text-white transition-all hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
                >
                  {primaryAction.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Magnetic>
              {secondaryAction && (
                <Magnetic springOptions={{ bounce: 0 }} intensity={0.2}>
                  <a
                    href={secondaryAction.href}
                    className="group inline-flex items-center gap-2 rounded-full bg-zinc-100 px-6 py-3 text-base font-medium text-zinc-900 transition-colors hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
                  >
                    {secondaryAction.label}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Magnetic>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
