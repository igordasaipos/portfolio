'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export type FAQItem = {
  question: string
  answer: string
}

export type FAQProps = {
  title?: string
  subtitle?: string
  items: FAQItem[]
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

export function FAQ({
  title = 'Frequently asked questions',
  subtitle = 'Everything you need to know',
  items,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
          <h2 className="mb-2 text-3xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            {title}
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={CONTAINER_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={ITEM_VARIANTS}
              className="overflow-hidden rounded-2xl bg-zinc-50/40 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-zinc-100/50 dark:hover:bg-zinc-900/50"
              >
                <span className="pr-4 font-semibold text-zinc-900 dark:text-zinc-50">
                  {item.question}
                </span>
                <span className="shrink-0">
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                  ) : (
                    <Plus className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                  )}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-zinc-600 dark:text-zinc-400">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
