'use client'

import { motion } from 'motion/react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import { Check } from 'lucide-react'

export type PricingPlan = {
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  cta: {
    label: string
    href: string
  }
  popular?: boolean
}

export type PricingProps = {
  title?: string
  subtitle?: string
  plans: PricingPlan[]
}

const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export function Pricing({
  title = 'Simple, transparent pricing',
  subtitle = 'Choose the plan that fits your needs',
  plans,
}: PricingProps) {
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
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={ITEM_VARIANTS}
              className={`relative ${plan.popular ? 'lg:scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-zinc-900 px-4 py-1 text-xs font-medium text-white dark:bg-zinc-50 dark:text-zinc-900">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="group relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30">
                <Spotlight
                  className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                  size={128}
                />
                <div className="relative h-full rounded-[15px] bg-white p-8 dark:bg-zinc-950">
                  <h3 className="mb-2 text-xl font-bold text-zinc-900 dark:text-zinc-50">
                    {plan.name}
                  </h3>
                  <p className="mb-6 text-sm text-zinc-600 dark:text-zinc-400">
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="ml-2 text-zinc-600 dark:text-zinc-400">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <ul className="mb-8 space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 shrink-0 text-zinc-900 dark:text-zinc-100" />
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Magnetic springOptions={{ bounce: 0 }} intensity={0.2}>
                    <a
                      href={plan.cta.href}
                      className={`block w-full rounded-full py-3 text-center text-sm font-medium transition-colors ${
                        plan.popular
                          ? 'bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200'
                          : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800'
                      }`}
                    >
                      {plan.cta.label}
                    </a>
                  </Magnetic>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
