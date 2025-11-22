'use client'
import { TextEffect } from '@/components/ui/text-effect'
import { TextLoop } from '@/components/ui/text-loop'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div
            initial={{ opacity: 0, filter: 'blur(12px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/igorpinheiro.png"
              alt="Igor Pinheiro"
              width={64}
              height={64}
              className="rounded-full object-cover"
            />
          </motion.div>
          <div className="flex flex-col">
            <Link href="/" className="font-medium text-black dark:text-white">
              <TextEffect
                as="span"
                preset="fade"
                per="char"
                delay={0.2}
              >
                Igor Pinheiro
              </TextEffect>
            </Link>
            <TextLoop className="text-zinc-600 dark:text-zinc-500">
              <span>Product Designer @ Saipos</span>
              <span>Sistemas para internet @ Unisinos</span>
            </TextLoop>
          </div>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2.5 rounded-xl hover:bg-zinc-100/40 dark:hover:bg-zinc-800/40 transition-all ring-1 ring-zinc-200/50 ring-inset dark:ring-zinc-800/50 hover:ring-zinc-300/50 dark:hover:ring-zinc-700/50"
          aria-label="Menu"
        >
          <svg className="w-5 h-5 text-zinc-900 dark:text-zinc-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: -20 }}
              transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute top-20 right-4 w-80 bg-white dark:bg-zinc-950 rounded-2xl p-1 ring-1 ring-zinc-200 dark:ring-zinc-800"
            >
              <div className="grid grid-cols-2 gap-3 p-4">
                {/* LinkedIn Card */}
                <a
                  href="https://www.linkedin.com/in/igorpinheirocc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative col-span-1 overflow-hidden rounded-xl bg-zinc-50/40 p-6 ring-1 ring-zinc-200/50 ring-inset transition-all hover:bg-zinc-100/40 dark:bg-zinc-950/40 dark:ring-zinc-800/50 dark:hover:bg-zinc-900/40"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex h-full flex-col justify-between gap-4">
                    <svg className="h-6 w-6 text-zinc-600 dark:text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">LinkedIn</span>
                  </div>
                </a>

                {/* Twitter Card */}
                <a
                  href="https://x.com/igorpinheirocc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative col-span-1 overflow-hidden rounded-xl bg-zinc-50/40 p-6 ring-1 ring-zinc-200/50 ring-inset transition-all hover:bg-zinc-100/40 dark:bg-zinc-950/40 dark:ring-zinc-800/50 dark:hover:bg-zinc-900/40"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex h-full flex-col justify-between gap-4">
                    <svg className="h-6 w-6 text-zinc-600 dark:text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Twitter</span>
                  </div>
                </a>

                {/* Contact CTA */}
                <a
                  href="mailto:your@email.com"
                  className="group relative col-span-2 overflow-hidden rounded-xl bg-zinc-50/40 p-6 ring-1 ring-zinc-200/50 ring-inset transition-all hover:bg-zinc-100/40 dark:bg-zinc-950/40 dark:ring-zinc-800/50 dark:hover:bg-zinc-900/40"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-medium text-zinc-900 dark:text-zinc-100">Let&apos;s work together</h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">Get in touch</p>
                    </div>
                    <svg className="h-5 w-5 text-zinc-600 transition-transform group-hover:translate-x-1 dark:text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
