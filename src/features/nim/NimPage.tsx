import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AnimatedGroup } from "@/components/smoothui/shared/animated-group";
import { AnimatedText } from "@/components/smoothui/shared/animated-text";
import SiriOrb from "@/components/smoothui/siri-orb";
import WaveText from "@/components/smoothui/wave-text";
import { NimFooter } from "@/features/nim/components/Footer";
import { NimHeader } from "@/features/nim/components/Header";
import { AnimatedBackground } from "@/features/nim/components/AnimatedBackground";
import { Magnetic } from "@/features/nim/components/Magnetic";
import {
  MorphingDialog,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogTrigger,
} from "@/features/nim/components/MorphingDialog";
import { Spotlight } from "@/features/nim/components/Spotlight";
import { NimThemeProvider } from "@/features/nim/theme/NimThemeProvider";
import {
  BLOG_POSTS,
  EMAIL,
  PROJECTS,
  SOCIAL_LINKS,
  WORK_EXPERIENCE,
} from "@/features/nim/data";
import {
  ArrowUpRight,
  Briefcase,
  FileText,
  Heart,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
import { XIcon } from "lucide-react";
import { motion } from "motion/react";
import { ReactNode, useState } from "react";

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const TRANSITION_SECTION = {
  duration: 0.3,
};

type ProjectVideoProps = {
  src: string;
};

function ProjectVideo({ src }: ProjectVideoProps) {
  return (
    <MorphingDialog
      transition={{
        type: "spring",
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
          playsInline
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
            playsInline
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
  );
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: ReactNode;
  link: string;
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
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
  );
}

function BentoSection() {
  const [projectLikes, setProjectLikes] = useState<Record<number, number>>({
    0: 89,
    1: 92,
  });

  const socials = [
    {
      title: "GitHub",
      url: "github.com/igordasaipos",
      icon: Briefcase,
      color: "bg-slate-500/10 text-slate-700 hover:bg-slate-500/20",
    },
    {
      title: "LinkedIn",
      url: SOCIAL_LINKS[2].link.replace("https://", ""),
      icon: Linkedin,
      color: "bg-blue-500/10 text-blue-700 hover:bg-blue-500/20",
    },
  ];

  const recentProjects = PROJECTS.slice(0, 2).map((project, idx) => ({
    title: project.name,
    subtitle: project.description.substring(0, 30) + "...",
    likes: idx === 0 ? 89 : 92,
    image: `https://images.unsplash.com/photo-${idx === 0 ? "1556740749-887f6717d7e4" : "1507842217343-583bb7270b66"}?auto=format&fit=crop&w=900&q=80`,
    link: project.link,
  }));

  return (
    <motion.section
      className="mb-20 rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-6 shadow-xl shadow-slate-200/40 dark:border-zinc-900 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 dark:shadow-black/20"
      initial={{ opacity: 0, scale: 0.98, filter: "blur(12px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.div
        className="mb-8 rounded-3xl border border-white/60 bg-white/80 p-8 text-center shadow-lg backdrop-blur dark:border-white/5 dark:bg-white/5"
        initial={{ opacity: 0, filter: "blur(30px)", y: 30 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
      >
        <h2 className="mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-4xl font-bold text-transparent">
          Blur Effect Demo
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          Este texto inicia completamente desfocado (blur 30px) e gradualmente fica nítido
        </p>
        <p className="mt-2 text-sm text-slate-400">
          Recarregue a página (Cmd/Ctrl + R) para ver a animação novamente
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-12">
        <aside className="lg:col-span-4">
          <Card className="border-slate-200/60 shadow-lg shadow-slate-200/50 dark:border-white/5 dark:shadow-black/30">
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-6 text-center">
                <Avatar className="h-28 w-28 border-4 border-slate-100 shadow-xl">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=320&q=80"
                    alt="Profile"
                    className="object-cover"
                  />
                  <AvatarFallback>EA</AvatarFallback>
                </Avatar>
                <div className="space-y-3">
                  <AnimatedText
                    as="h3"
                    className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
                    delay={0.2}
                  >
                    Igor Pinheiro
                  </AnimatedText>
                  <AnimatedText
                    as="p"
                    className="text-slate-600 dark:text-slate-300"
                    delay={0.4}
                  >
                    Design Engineer
                  </AnimatedText>
                  <div>
                    <Badge variant="secondary" className="text-xs">
                      <WaveText amplitude={2} speed={0.2}>
                        Available for projects
                      </WaveText>
                    </Badge>
                  </div>
                </div>
                <div className="w-full space-y-3 border-t border-slate-100 pt-4 text-left text-sm">
                  {[
                    "Product Designer",
                    "Figma, Framer, UI/UX & IA Tips",
                    "Founder @versare.design",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-slate-400" />
                      <span className="text-slate-700 dark:text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <div className="flex items-center justify-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                    Blumenau, SC
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>

        <div className="space-y-6 lg:col-span-8">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-slate-200/60 shadow-lg shadow-slate-200/50 dark:border-white/5 dark:shadow-black/30">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-14 w-14 border-2 border-slate-100">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=200&q=80"
                      alt="Designer"
                    />
                    <AvatarFallback>JW</AvatarFallback>
                  </Avatar>
                  <AnimatedGroup className="space-y-1 text-base leading-relaxed text-slate-700 dark:text-slate-200" preset="blur-slide">
                    <p>
                      <span className="font-semibold text-slate-900 dark:text-white">Igor Pinheiro</span> is a
                    </p>
                    <p>design engineer focused on</p>
                    <p className="text-slate-500">creating intuitive and</p>
                    <p className="font-semibold text-slate-900 dark:text-white">performant experiences.</p>
                  </AnimatedGroup>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-slate-200/60 bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-lg shadow-slate-200/50 dark:border-white/5 dark:shadow-black/40">
              <CardContent className="relative flex h-full flex-col items-center justify-center space-y-4 p-6 text-center">
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <SiriOrb size="300px" animationDuration={15} />
                </div>
                <motion.div
                  className="relative z-10 text-3xl font-light text-slate-400"
                  initial={{ opacity: 0, filter: "blur(20px)", scale: 0.9 }}
                  animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                >
                  ∕∕∕∕
                </motion.div>
                <div className="relative z-10">
                  <AnimatedText as="h3" className="text-xl font-semibold" delay={0.4}>
                    Have a project in mind?
                  </AnimatedText>
                  <AnimatedText as="p" className="text-sm text-slate-400" delay={0.6}>
                    Let's work together
                  </AnimatedText>
                </div>
                <a
                  href={`mailto:${EMAIL}`}
                  className="relative z-10 inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-orange-600"
                >
                  <Mail className="h-4 w-4" />
                  {EMAIL}
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[Briefcase, FileText].map((Icon, idx) => (
              <Card
                key={idx}
                className="cursor-pointer border-slate-200/60 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:shadow-xl dark:border-white/5 dark:shadow-black/30"
              >
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {idx === 0 ? "Find Me" : "My Portfolio"}
                      </span>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-slate-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-slate-200/60 shadow-lg shadow-slate-200/50 dark:border-white/5 dark:shadow-black/30 md:col-span-2">
              <CardContent className="p-6">
                <AnimatedText
                  as="h3"
                  className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-white"
                  delay={0.1}
                >
                  Connect
                </AnimatedText>
                <div className="grid gap-3 sm:grid-cols-2">
                  {socials.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.title}
                        href={`https://${item.url}`}
                        target="_blank"
                        rel="noreferrer"
                        className={`flex items-center gap-3 rounded-xl border border-slate-200 p-4 transition-all duration-200 hover:shadow-md dark:border-white/5 ${item.color}`}
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold">{item.title}</p>
                          <p className="truncate text-xs opacity-70">{item.url}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200/60 bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-slate-200/50 dark:border-white/5 dark:shadow-black/40">
              <CardContent className="flex h-full flex-col justify-between p-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold">Behance</h3>
                  <button className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur-sm transition-colors duration-200 hover:bg-white/30">
                    Follow <Badge className="bg-white/30 text-white">234</Badge>
                  </button>
                </div>
                <div className="mt-4 flex -space-x-3">
                  {[1, 2, 3].map((id) => (
                    <div
                      key={id}
                      className="h-14 w-12 rounded-lg border-2 border-blue-500 bg-white/20 backdrop-blur-sm"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-slate-200/60 shadow-lg shadow-slate-200/50 dark:border-white/5 dark:shadow-black/30">
              <CardContent className="space-y-4 p-6">
                <AnimatedText
                  as="h3"
                  className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-white"
                  delay={0.1}
                >
                  Services
                </AnimatedText>
                <div className="space-y-3">
                  {["Budget Request", "Briefing Form"].map((label) => (
                    <a
                      key={label}
                      href="#"
                      className="group flex items-center justify-between rounded-xl border border-slate-200 p-4 transition-all duration-200 hover:border-slate-300 hover:shadow-md dark:border-white/10"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-100">
                          <FileText className="h-4 w-4 text-purple-600" />
                        </div>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                          {label}
                        </span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-slate-400 transition-colors duration-200 group-hover:text-slate-900" />
                    </a>
                  ))}
                </div>
                <div className="rounded-xl border border-emerald-200/50 bg-gradient-to-br from-emerald-50 to-teal-50 p-4 text-emerald-900 dark:border-emerald-500/20 dark:from-emerald-500/10 dark:to-teal-500/10 dark:text-emerald-200">
                  <p className="text-sm font-semibold">Blumenau, SC</p>
                  <p className="text-xs opacity-80">
                    Available for on-site and remote collaborations.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200/60 shadow-lg shadow-slate-200/50 dark:border-white/5 dark:shadow-black/30">
              <CardContent className="space-y-4 p-6">
                <AnimatedText
                  as="h3"
                  className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-white"
                  delay={0.1}
                >
                  Recent Work
                </AnimatedText>
                <div className="space-y-3">
                  {recentProjects.map((project, idx) => (
                    <a
                      key={project.title}
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex cursor-pointer items-center gap-4 rounded-xl border border-slate-200 p-3 transition-all duration-200 hover:border-slate-300 hover:shadow-md dark:border-white/10"
                      onClick={(e) => {
                        e.preventDefault();
                        setProjectLikes((prev) => ({
                          ...prev,
                          [idx]:
                            (prev[idx] ?? project.likes) + 1,
                        }));
                        setTimeout(() => window.open(project.link, "_blank"), 100);
                      }}
                    >
                      <div className="flex h-16 w-20 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-slate-100 shadow-sm">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="truncate text-sm font-semibold text-slate-900 dark:text-white">
                          {project.title}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {project.subtitle}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <Badge variant="secondary" className="gap-1 text-xs">
                            <Heart className="h-3 w-3" />
                            <span className="font-semibold tabular-nums">
                              {projectLikes[idx] ?? project.likes}
                            </span>
                          </Badge>
                          <span className="text-xs text-slate-400">Portfolio</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export function NimPage() {
  return (
    <NimThemeProvider>
      <div className="min-h-screen w-full bg-white text-black antialiased dark:bg-zinc-950 dark:text-white">
        <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20 pb-10">
          <NimHeader />
        </div>
        <div className="relative mx-auto w-full max-w-7xl flex-1 px-4 pb-10">
          <BentoSection />
        </div>
        <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pb-10">
          <motion.main
            className="space-y-24"
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
                        rel="noreferrer"
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
                    rel="noreferrer"
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
                    type: "spring",
                    bounce: 0,
                    duration: 0.2,
                  }}
                >
                  {BLOG_POSTS.map((post) => (
                    <a
                      key={post.uid}
                      className="-mx-3 rounded-xl px-3 py-3"
                      href={post.link}
                      target="_blank"
                      rel="noreferrer"
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
                    </a>
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
                Feel free to contact me at{" "}
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
        </div>
        <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pb-10">
          <NimFooter />
        </div>
      </div>
    </NimThemeProvider>
  );
}

