'use client'

import { motion } from 'motion/react'
import { Spotlight } from '@/components/ui/spotlight'
import { LucideIcon } from 'lucide-react'

export type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

export type FeaturesProps = {
  title?: string
  subtitle?: string
  features: Feature[]
  layout?: 'grid' | 'list'
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

export function Features({
  title = 'Features',
  subtitle,
  features,
  layout = 'grid',
}: FeaturesProps) {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          {subtitle && (
            <p className="mb-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
              {subtitle}
            </p>
          )}
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            {title}
          </h2>
        </motion.div>

        <motion.div
          variants={CONTAINER_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={
            layout === 'grid'
              ? 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3'
              : 'flex flex-col gap-4'
          }
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={ITEM_VARIANTS}
              className="group relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={96}
              />
              <div className="relative h-full rounded-[15px] bg-white p-6 dark:bg-zinc-950">
                <div className="mb-4 inline-flex rounded-xl bg-zinc-100 p-3 dark:bg-zinc-900">
                  <feature.icon className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {feature.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
