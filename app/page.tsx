'use client'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
} from './data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

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

function ProjectVideo({ src }: ProjectVideoProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
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

export default function Personal() {
  return (
    <motion.main
      className="space-y-16"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
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
          {/* Figma */}
          <div className="flex items-center gap-2 rounded-xl bg-zinc-50/40 px-4 py-2.5 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
              <path d="M8 24C10.2091 24 12 22.2091 12 20V16H8C5.79086 16 4 17.7909 4 20C4 22.2091 5.79086 24 8 24Z" fill="#0ACF83"/>
              <path d="M4 12C4 9.79086 5.79086 8 8 8H12V16H8C5.79086 16 4 14.2091 4 12Z" fill="#A259FF"/>
              <path d="M4 4C4 1.79086 5.79086 0 8 0H12V8H8C5.79086 8 4 6.20914 4 4Z" fill="#F24E1E"/>
              <path d="M12 0H16C18.2091 0 20 1.79086 20 4C20 6.20914 18.2091 8 16 8H12V0Z" fill="#FF7262"/>
              <path d="M20 12C20 14.2091 18.2091 16 16 16C13.7909 16 12 14.2091 12 12C12 9.79086 13.7909 8 16 8C18.2091 8 20 9.79086 20 12Z" fill="#1ABCFE"/>
            </svg>
            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Figma</span>
          </div>

          {/* Lovable */}
          <div className="flex items-center gap-2 rounded-xl bg-zinc-50/40 px-4 py-2.5 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="11" fill="url(#lovable-gradient)"/>
              <path d="M7 12L10 15L17 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="lovable-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF6B6B"/>
                  <stop offset="1" stopColor="#FF8E8E"/>
                </linearGradient>
              </defs>
            </svg>
            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Lovable</span>
          </div>

          {/* Webflow */}
          <div className="flex items-center gap-2 rounded-xl bg-zinc-50/40 px-4 py-2.5 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
              <path d="M17.5 9.5C17.5 12.26 13.69 16 12 16C10.31 16 6.5 12.26 6.5 9.5C6.5 6.74 8.5 4.5 12 4.5C15.5 4.5 17.5 6.74 17.5 9.5Z" fill="#4353FF"/>
              <path d="M12 16C10.31 16 6.5 12.26 6.5 9.5H2C2 14.5 6 19.5 12 19.5C18 19.5 22 14.5 22 9.5H17.5C17.5 12.26 13.69 16 12 16Z" fill="#4353FF"/>
            </svg>
            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Webflow</span>
          </div>

          {/* WordPress */}
          <div className="flex items-center gap-2 rounded-xl bg-zinc-50/40 px-4 py-2.5 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="11" fill="#21759B"/>
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM3.5 12C3.5 11.12 3.65 10.28 3.92 9.5L8.85 21.92C5.82 20.82 3.5 16.76 3.5 12ZM12 20.5C11.15 20.5 10.33 20.38 9.56 20.15L12.69 11.35L15.92 20.02C15.95 20.1 15.99 20.17 16.03 20.24C14.82 20.42 13.43 20.5 12 20.5ZM13.56 8.65C14.23 8.62 14.84 8.54 14.84 8.54C15.44 8.47 15.37 7.62 14.77 7.65C14.77 7.65 13.01 7.77 11.89 7.77C10.84 7.77 9.06 7.65 9.06 7.65C8.46 7.62 8.39 8.5 8.99 8.54C8.99 8.54 9.56 8.62 10.16 8.65L11.73 13.12L9.56 19.65L6.04 8.65C6.71 8.62 7.32 8.54 7.32 8.54C7.92 8.47 7.85 7.62 7.25 7.65C7.25 7.65 5.49 7.77 4.37 7.77C4.17 7.77 3.93 7.77 3.67 7.76C5.38 5.07 8.47 3.5 12 3.5C14.67 3.5 17.08 4.59 18.85 6.36C18.81 6.36 18.77 6.35 18.73 6.35C17.68 6.35 16.94 7.2 16.94 8.12C16.94 8.92 17.43 9.58 17.95 10.35C18.35 10.98 18.82 11.77 18.82 12.92C18.82 13.72 18.52 14.65 18.11 15.85L17.18 18.92L13.56 8.65ZM16.43 20.92L19.6 11.35C20.23 9.85 20.42 8.65 20.42 7.62C20.42 7.32 20.4 7.05 20.37 6.8C21.03 8.22 21.5 9.85 21.5 12C21.5 15.77 19.58 19.08 16.43 20.92Z" fill="white"/>
            </svg>
            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">WordPress</span>
          </div>

          {/* Cursor */}
          <div className="flex items-center gap-2 rounded-xl bg-zinc-50/40 px-4 py-2.5 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="5" fill="black"/>
              <path d="M6 6L18 6L18 18L6 18L6 6Z" fill="white"/>
              <circle cx="12" cy="12" r="2" fill="black"/>
            </svg>
            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Cursor</span>
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Selected Projects</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <div key={project.name} className="space-y-2">
              <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                <ProjectVideo src={project.video} />
              </div>
              <div className="px-1">
                <a
                  className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                  href={project.link}
                  target="_blank"
                >
                  {project.name}
                  <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                </a>
                <p className="text-base text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

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
    </motion.main>
  )
}
