'use client'

import { motion } from 'motion/react'
import { Spotlight } from '@/components/ui/spotlight'
import Image from 'next/image'
import { Star } from 'lucide-react'

export type Testimonial = {
  name: string
  role: string
  company: string
  content: string
  avatar?: string
  rating?: number
}

export type TestimonialsProps = {
  title?: string
  subtitle?: string
  testimonials: Testimonial[]
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

export function Testimonials({
  title = 'Loved by teams worldwide',
  subtitle = 'See what our customers have to say',
  testimonials,
}: TestimonialsProps) {
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
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
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
                {testimonial.rating && (
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-zinc-900 text-zinc-900 dark:fill-zinc-100 dark:text-zinc-100"
                      />
                    ))}
                  </div>
                )}
                <p className="mb-6 text-zinc-700 dark:text-zinc-300">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  {testimonial.avatar && (
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  )}
                  <div>
                    <p className="font-semibold text-zinc-900 dark:text-zinc-50">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {testimonial.role} @ {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
