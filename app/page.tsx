'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import { GooeyText } from '@/components/ui/gooey-text'
import {
  Disclosure,
  DisclosureTrigger,
  DisclosureContent,
  useDisclosure
} from '@/components/motion-primitives/disclosure'
import {
  PROJECTS,
  WORK_EXPERIENCE,
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
  return (
    <GooeyText
      texts={["welcome", "I'm Igor"]}
      morphTime={1.2}
      cooldownTime={0.3}
      textClassName="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl md:text-6xl"
    />
  )
}

type WorkExperienceCardContentProps = {
  job: {
    title: string
    company: string
    start: string
    end: string
    link: string
    description?: string
  }
}

function WorkExperienceCardContent({ job }: WorkExperienceCardContentProps) {
  const { open } = useDisclosure()

  return (
    <div className="relative h-full w-full rounded-[15px] bg-white dark:bg-zinc-950">
      <DisclosureTrigger>
        <div className="relative flex w-full cursor-pointer flex-row items-start justify-between p-4">
          <div className="flex-1">
            <h4 className={`transition-all ${open ? 'font-semibold' : 'font-normal'} dark:text-zinc-100`}>
              {job.title}
            </h4>
            <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
              <a
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-1 inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
                onClick={(e) => e.stopPropagation()}
              >
                {job.company}
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
          </div>
          <div className="flex flex-col items-end gap-2">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {job.start} - {job.end}
            </p>
          </div>
        </div>
      </DisclosureTrigger>
      <DisclosureContent>
        {job.description && (
          <div className="border-t border-zinc-200 px-4 pb-4 pt-3 dark:border-zinc-800">
            <div className="space-y-3">
              {job.description.split('\n\n').map((section, index, arr) => (
                <div key={index} className="relative pl-6">
                  <>
                    <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                    {index < arr.length - 1 && (
                      <div className="absolute left-[3px] top-4 h-full w-[2px] bg-zinc-200 dark:bg-zinc-800" />
                    )}
                  </>
                  <div className="space-y-1">
                    {section.split('\n').map((line, lineIndex) => (
                      <p
                        key={lineIndex}
                        className={`text-sm ${
                          lineIndex === 0
                            ? 'font-medium text-zinc-900 dark:text-zinc-100'
                            : 'text-zinc-600 dark:text-zinc-400'
                        }`}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </DisclosureContent>
    </div>
  )
}

export default function Personal() {
  const [isLoading, setIsLoading] = useState(true)
  const [showText, setShowText] = useState(false)
  const [openDisclosureId, setOpenDisclosureId] = useState<string | null>(null)
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
          <h2 className="mb-3 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">About</h2>
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
        <h3 className="mb-4 text-lg font-medium">Tools</h3>
        <div className="flex flex-wrap gap-3">
          {TOOLS.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center gap-2 rounded-xl bg-zinc-50/40 px-4 py-2.5 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50"
            >
              {tool.iconType === 'svg' ? (
                <img
                  src={tool.icon}
                  alt={`${tool.name} icon`}
                  className="h-5 w-5"
                />
              ) : (
                <i className={`${tool.icon} text-xl text-zinc-900 dark:text-zinc-100`}></i>
              )}
              <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </motion.section>

      <section className="relative mb-8">
        <div className="relative space-y-8">
          {PROJECTS.map((project, index) => (
            <a
              key={project.name}
              className="sticky block"
              style={{
                top: '80px',
                zIndex: index + 1,
              }}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {index === 0 && (
                <h3 className="mb-4 text-lg font-medium">Selected Projects</h3>
              )}
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
            <Disclosure
              key={job.id}
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              open={openDisclosureId === job.id}
              onOpenChange={(open) => {
                setOpenDisclosureId(open ? job.id : null)
              }}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <WorkExperienceCardContent job={job} />
            </Disclosure>
          ))}
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
