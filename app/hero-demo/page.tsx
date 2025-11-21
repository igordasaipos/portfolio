'use client'

import { Hero } from '@/components/ui/hero'
import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const EXAMPLES = [
  {
    id: 'default',
    title: 'Build amazing products',
    subtitle: 'Welcome to the future',
    description: 'Create beautiful, performant web experiences with modern tools and technologies. Ship faster, iterate quicker.',
    badge: 'New Product Launch',
    primaryAction: {
      label: 'Get Started',
      href: '#',
    },
    secondaryAction: {
      label: 'Learn More',
      href: '#',
    },
  },
  {
    id: 'minimal',
    title: 'Design meets development',
    description: 'Bridging the gap between beautiful design and performant code. Focused on creating intuitive user experiences.',
    primaryAction: {
      label: 'View Projects',
      href: '#',
    },
  },
  {
    id: 'with-badge',
    title: 'Ship products faster',
    subtitle: 'From idea to production',
    description: 'Modern development workflow with the tools you love. Build, test, and deploy with confidence.',
    badge: 'Now Available',
    primaryAction: {
      label: 'Start Building',
      href: '#',
    },
    secondaryAction: {
      label: 'See Documentation',
      href: '#',
    },
  },
]

const SECTION_VARIANTS = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.3,
    },
  },
}

export default function HeroDemoPage() {
  return (
    <div className="min-h-screen">
      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link
          href="/"
          className="group flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-900 ring-1 ring-zinc-200/50 transition-all hover:bg-zinc-50 dark:bg-zinc-950 dark:text-zinc-100 dark:ring-zinc-800/50 dark:hover:bg-zinc-900"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
      </motion.div>

      {/* Hero Examples */}
      <div className="space-y-0">
        {EXAMPLES.map((example, index) => (
          <div key={example.id} className="relative">
            <Hero {...example} />

            {/* Divider */}
            {index < EXAMPLES.length - 1 && (
              <div className="mx-auto max-w-4xl px-4">
                <div className="h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-800" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Code example section */}
      <motion.section
        variants={SECTION_VARIANTS}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-4xl px-4 py-20"
      >
        <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          How to use
        </h2>
        <div className="rounded-2xl bg-zinc-50/40 p-6 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
          <pre className="overflow-x-auto text-sm">
            <code className="text-zinc-800 dark:text-zinc-200">
{`import { Hero } from '@/components/ui/hero'

export default function MyPage() {
  return (
    <Hero
      badge="New Product Launch"
      subtitle="Welcome to the future"
      title="Build amazing products"
      description="Create beautiful, performant web experiences."
      primaryAction={{
        label: "Get Started",
        href: "#"
      }}
      secondaryAction={{
        label: "Learn More",
        href: "#"
      }}
    />
  )
}`}
            </code>
          </pre>
        </div>

        {/* Props documentation */}
        <div className="mt-8 space-y-4">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Props
          </h3>
          <div className="rounded-2xl bg-zinc-50/40 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
            <div className="divide-y divide-zinc-200/50 dark:divide-zinc-800/50">
              <PropRow
                name="title"
                type="string"
                required
                description="Main heading text"
              />
              <PropRow
                name="subtitle"
                type="string"
                description="Optional subtitle above the title"
              />
              <PropRow
                name="description"
                type="string"
                required
                description="Hero description text"
              />
              <PropRow
                name="badge"
                type="string"
                description="Optional badge text with icon"
              />
              <PropRow
                name="primaryAction"
                type="{ label: string, href: string, onClick?: () => void }"
                description="Primary call-to-action button"
              />
              <PropRow
                name="secondaryAction"
                type="{ label: string, href: string, onClick?: () => void }"
                description="Secondary call-to-action button"
              />
              <PropRow
                name="className"
                type="string"
                description="Additional CSS classes"
              />
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

function PropRow({
  name,
  type,
  required,
  description,
}: {
  name: string
  type: string
  required?: boolean
  description: string
}) {
  return (
    <div className="grid grid-cols-1 gap-2 p-4 sm:grid-cols-[150px,1fr]">
      <div>
        <code className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          {name}
        </code>
        {required && (
          <span className="ml-2 text-xs text-red-600 dark:text-red-400">
            required
          </span>
        )}
      </div>
      <div className="space-y-1">
        <code className="block text-xs text-zinc-600 dark:text-zinc-400">
          {type}
        </code>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      </div>
    </div>
  )
}
