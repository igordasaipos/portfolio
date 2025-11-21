'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
  TOOLS,
} from './data'

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type ProjectVideoProps = {
  src: string
}

function getYouTubeEmbedUrl(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  if (match && match[2].length === 11) {
    return `https://www.youtube.com/embed/${match[2]}?autoplay=1&mute=1&loop=1&playlist=${match[2]}&controls=0&modestbranding=1&playsinline=1`
  }
  return null
}

function isYouTubeUrl(url: string): boolean {
  return url.includes('youtube.com') || url.includes('youtu.be')
}

function ProjectVideo({ src }: ProjectVideoProps) {
  const isYouTube = isYouTubeUrl(src)
  const embedUrl = isYouTube ? getYouTubeEmbedUrl(src) : null
  const isImage = src.match(/\.(jpeg|jpg|png|gif|webp)$/i)

  if (isYouTube && embedUrl) {
    return (
      <iframe
        src={embedUrl}
        className="aspect-video w-full rounded-xl pointer-events-none"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    )
  }

  if (isImage) {
    return (
      <img
        src={src}
        alt="Project preview"
        className="aspect-video w-full rounded-xl object-cover pointer-events-none"
      />
    )
  }

  return (
    <video
      src={src}
      autoPlay
      loop
      muted
      playsInline
      className="aspect-video w-full rounded-xl pointer-events-none"
    />
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

function LoadingAnimation() {
  const texts = ["welcome", "I'm Igor"]
  const [currentIndex, setCurrentIndex] = useState(0)
  const displayTime = 1.2 // seconds for each text

  useEffect(() => {
    if (currentIndex < texts.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1)
      }, displayTime * 1000)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, texts.length])

  return (
    <motion.h1
      key={currentIndex}
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl md:text-6xl whitespace-nowrap"
    >
      {texts[currentIndex]}
    </motion.h1>
  )
}

export default function Personal() {
  const [isLoading, setIsLoading] = useState(true)
  const [showText, setShowText] = useState(false)
  const totalAnimationTime = 2 * 1.2 + 0.5 // 2 texts * 1.2s each + 0.5s buffer

  useEffect(() => {
    // Small delay before showing text
    const delayTimer = setTimeout(() => {
      setShowText(true)
    }, 300)

    // Hide loading screen after animation completes
    const hideTimer = setTimeout(() => {
      setIsLoading(false)
    }, (totalAnimationTime + 0.3) * 1000)

    return () => {
      clearTimeout(delayTimer)
      clearTimeout(hideTimer)
    }
  }, [totalAnimationTime])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-zinc-950"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {showText && <LoadingAnimation />}
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <main className="space-y-16">
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p className="text-zinc-600 dark:text-zinc-400">
            Focused on creating intuitive and performant web experiences.
            Bridging the gap between design and development.
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="grid grid-cols-4 gap-3 auto-rows-[120px]">
          {/* LinkedIn Card */}
          <a
            href={SOCIAL_LINKS.find(link => link.label === 'LinkedIn')?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative col-span-2 row-span-1 overflow-hidden rounded-2xl bg-zinc-50/40 p-6 ring-1 ring-zinc-200/50 ring-inset transition-all hover:bg-zinc-100/40 dark:bg-zinc-950/40 dark:ring-zinc-800/50 dark:hover:bg-zinc-900/40"
          >
            <div className="flex h-full items-center justify-between">
              <span className="text-base font-medium text-zinc-900 dark:text-zinc-100">LinkedIn</span>
              <svg className="h-5 w-5 text-zinc-600 dark:text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
          </a>

          {/* GitHub Card */}
          <a
            href={SOCIAL_LINKS.find(link => link.label === 'Github')?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative col-span-1 row-span-1 overflow-hidden rounded-2xl bg-zinc-50/40 p-6 ring-1 ring-zinc-200/50 ring-inset transition-all hover:bg-zinc-100/40 dark:bg-zinc-950/40 dark:ring-zinc-800/50 dark:hover:bg-zinc-900/40"
          >
            <div className="flex h-full flex-col justify-between">
              <svg className="h-5 w-5 text-zinc-600 dark:text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-sm text-zinc-600 dark:text-zinc-400">GitHub</span>
            </div>
          </a>

          {/* Instagram Card */}
          <a
            href={SOCIAL_LINKS.find(link => link.label === 'Instagram')?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative col-span-1 row-span-1 overflow-hidden rounded-2xl bg-zinc-50/40 p-6 ring-1 ring-zinc-200/50 ring-inset transition-all hover:bg-zinc-100/40 dark:bg-zinc-950/40 dark:ring-zinc-800/50 dark:hover:bg-zinc-900/40"
          >
            <div className="flex h-full flex-col justify-between">
              <svg className="h-5 w-5 text-zinc-600 dark:text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-sm text-zinc-600 dark:text-zinc-400">Instagram</span>
            </div>
          </a>

          {/* Twitter Card */}
          <a
            href={SOCIAL_LINKS.find(link => link.label === 'Twitter')?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative col-span-1 row-span-1 overflow-hidden rounded-2xl bg-zinc-50/40 p-6 ring-1 ring-zinc-200/50 ring-inset transition-all hover:bg-zinc-100/40 dark:bg-zinc-950/40 dark:ring-zinc-800/50 dark:hover:bg-zinc-900/40"
          >
            <div className="flex h-full flex-col justify-between">
              <svg className="h-5 w-5 text-zinc-600 dark:text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span className="text-sm text-zinc-600 dark:text-zinc-400">Twitter</span>
            </div>
          </a>

          {/* Contact CTA */}
          <a
            href={`mailto:${EMAIL}`}
            className="group relative col-span-3 row-span-1 overflow-hidden rounded-2xl bg-zinc-50/40 p-6 ring-1 ring-zinc-200/50 ring-inset transition-all hover:bg-zinc-100/40 dark:bg-zinc-950/40 dark:ring-zinc-800/50 dark:hover:bg-zinc-900/40"
          >
            <div className="flex h-full items-center justify-between">
              <div>
                <h3 className="text-base font-medium text-zinc-900 dark:text-zinc-100">Let&apos;s work together</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Get in touch for opportunities</p>
              </div>
              <svg className="h-5 w-5 text-zinc-600 transition-transform group-hover:translate-x-1 dark:text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </a>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-4 text-lg font-medium">Tools</h3>
        <div className="flex flex-wrap gap-3">
          {TOOLS.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center gap-2 rounded-xl bg-zinc-50/40 px-4 py-2.5 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50"
            >
              <i className={`${tool.icon} text-xl text-zinc-900 dark:text-zinc-100`}></i>
              <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </motion.section>

      <section className="relative mb-8">
        <h3 className="sticky mb-8 text-lg font-medium bg-white dark:bg-zinc-950 pb-2" style={{ top: '64px', zIndex: 0 }}>Selected Projects</h3>
        <div className="relative space-y-8">
          {PROJECTS.map((project, index) => (
            <a
              key={project.name}
              className="sticky block"
              style={{
                top: '120px',
                zIndex: index + 1,
              }}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200 ring-inset dark:bg-zinc-950 dark:ring-zinc-800 transition-transform hover:scale-[1.02]">
                <div className="relative overflow-hidden rounded-[15px]">
                  <ProjectVideo src={project.video} />
                  <div className="absolute inset-0 z-10 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-4 dark:bg-zinc-950 z-20">
                    <h3 className="font-base text-base font-[450] text-zinc-900 dark:text-zinc-50">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <a
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              key={job.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="font-normal dark:text-zinc-100">
                      {job.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {job.company}
                    </p>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {job.start} - {job.end}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Blog</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-xl px-3 py-3"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </main>
      )}
    </>
  )
}
