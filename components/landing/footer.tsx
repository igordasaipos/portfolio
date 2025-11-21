'use client'

import { motion } from 'motion/react'
import Link from 'next/link'

export type FooterLink = {
  label: string
  href: string
}

export type FooterSection = {
  title: string
  links: FooterLink[]
}

export type FooterProps = {
  logo?: string
  description?: string
  sections: FooterSection[]
  socialLinks?: FooterLink[]
  copyright?: string
}

export function Footer({
  logo = 'Company',
  description,
  sections,
  socialLinks,
  copyright,
}: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-200/50 py-12 px-6 dark:border-zinc-800/50">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="mb-3 text-xl font-bold text-zinc-900 dark:text-zinc-50">
                {logo}
              </h3>
              {description && (
                <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
                  {description}
                </p>
              )}
              {socialLinks && (
                <div className="flex gap-3">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          </div>

          {/* Links Sections */}
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="mb-3 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 border-t border-zinc-200/50 pt-8 dark:border-zinc-800/50"
        >
          <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
            {copyright || `© ${currentYear} ${logo}. All rights reserved.`}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
