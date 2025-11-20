'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex flex-col items-start gap-2">
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
        <div>
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
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Product Designer @ Saipos
          </TextEffect>
        </div>
      </div>
    </header>
  )
}
