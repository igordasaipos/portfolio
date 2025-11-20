import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  AnimatedGroup,
} from "@/components/smoothui/shared/animated-group";
import { AnimatedText } from "@/components/smoothui/shared/animated-text";
import SiriOrb from "@/components/smoothui/siri-orb";
import WaveText from "@/components/smoothui/wave-text";
import { NimPage } from "@/features/nim/NimPage";
import {
  ArrowUpRight,
  Briefcase,
  FileText,
  Heart,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

function LegacyApp() {
  const [projectLikes, setProjectLikes] = useState({ 0: 89, 1: 92 });

  const socials = [
    {
      title: "WhatsApp",
      url: "api.whatsapp.com",
      icon: MessageCircle,
      color: "bg-emerald-500/10 text-emerald-700 hover:bg-emerald-500/20"
    },
    {
      title: "LinkedIn",
      url: "linkedin.com/in/yourprofile",
      icon: Linkedin,
      color: "bg-blue-500/10 text-blue-700 hover:bg-blue-500/20"
    },
  ];

  const projects = [
    {
      title: "Weather App UI/UX",
      subtitle: "Main screen design",
      likes: 89,
      image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Sign Up Page",
      subtitle: "DailyUI Challenge #001",
      likes: 92,
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100"
      initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Demo blur text para teste visual */}
        <motion.div
          className="mb-8 text-center p-8 bg-white/80 backdrop-blur rounded-2xl border border-slate-200 shadow-xl"
          initial={{ opacity: 0, filter: "blur(30px)", scale: 0.85, y: 30 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1, y: 0 }}
          transition={{
            duration: 2.5,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Blur Effect Demo
          </h1>
          <p className="text-xl text-slate-600">
            Este texto inicia completamente desfocado (blur 30px) e gradualmente fica nítido
          </p>
          <p className="text-sm text-slate-400 mt-2">
            Recarregue a página (Cmd/Ctrl + R) para ver a animação novamente
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Sidebar - Profile */}
          <aside className="lg:col-span-4">
            <Card className="sticky top-8 border-slate-200/60 shadow-lg shadow-slate-200/50">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center space-y-6">
                  <Avatar className="h-32 w-32 border-4 border-slate-100 shadow-xl">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=320&q=80"
                      alt="Profile"
                      className="object-cover"
                    />
                    <AvatarFallback>EA</AvatarFallback>
                  </Avatar>

                  <div className="space-y-3 w-full">
                    <AnimatedText
                      as="h1"
                      className="text-3xl font-bold tracking-tight text-slate-900"
                      delay={0.5}
                    >
                      Igor Pinheiro
                    </AnimatedText>
                    <AnimatedText
                      as="p"
                      className="text-slate-600 text-base"
                      delay={0.8}
                    >
                      Product Designer & Content Creator
                    </AnimatedText>
                    <motion.div
                      initial={{ opacity: 0, filter: "blur(12px)", y: 12 }}
                      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                      transition={{ type: "spring", bounce: 0.3, duration: 1.5, delay: 1.1 }}
                    >
                      <Badge variant="secondary" className="text-xs">
                        <WaveText amplitude={2} speed={0.2}>Available for projects</WaveText>
                      </Badge>
                    </motion.div>
                  </div>

                  <div className="w-full space-y-3 text-sm text-left border-t border-slate-100 pt-6">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-slate-400" />
                      <span className="text-slate-700">Product Designer</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-slate-400" />
                      <span className="text-slate-700">Figma, Framer, UI/UX & IA Tips</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-slate-400" />
                      <span className="text-slate-700">Founder @versare.design</span>
                    </div>
                  </div>

                  <div className="w-full pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
                      <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Blumenau, SC</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content - Bento Grid */}
          <main className="lg:col-span-8 space-y-6">
            {/* Row 1: Intro & Contact */}
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-slate-200/60 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-14 w-14 border-2 border-slate-100">
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=200&q=80"
                        alt="Designer"
                      />
                      <AvatarFallback>JW</AvatarFallback>
                    </Avatar>
                    <AnimatedGroup className="space-y-1 text-base leading-relaxed text-slate-700" preset="blur-slide">
                      <p>
                        <span className="font-semibold text-slate-900">Jenny Wilson</span> is a
                      </p>
                      <p>digital product designer</p>
                      <p className="text-slate-500">currently designing at</p>
                      <p className="font-semibold text-slate-900">Acme Corp.</p>
                    </AnimatedGroup>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200/60 shadow-lg shadow-slate-200/50 bg-gradient-to-br from-slate-900 to-slate-800 text-white hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full space-y-4 relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <SiriOrb size="300px" animationDuration={15} />
                  </div>
                  <motion.div
                    className="text-3xl font-light text-slate-400 relative z-10"
                    initial={{ opacity: 0, filter: "blur(20px)", scale: 0.9 }}
                    animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                    transition={{ type: "spring", bounce: 0.3, duration: 1.8, delay: 0.5 }}
                  >
                    ∕∕∕∕
                  </motion.div>
                  <div className="relative z-10">
                    <AnimatedText
                      as="h3"
                      className="text-xl font-semibold mb-1"
                      delay={0.8}
                    >
                      Have a project in mind?
                    </AnimatedText>
                    <AnimatedText
                      as="p"
                      className="text-sm text-slate-400"
                      delay={1.1}
                    >
                      Let's work together
                    </AnimatedText>
                  </div>
                  <a
                    href="mailto:hey@jenny.com"
                    className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-orange-600 transition-colors duration-200 relative z-10"
                  >
                    <Mail className="h-4 w-4" />
                    hey@jenny.com
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Row 2: Quick Links */}
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-slate-200/60 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-slate-300 transition-all duration-300 cursor-pointer group">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-200">
                        <Briefcase className="h-5 w-5" />
                      </div>
                      <span className="font-semibold text-slate-900">Find Me</span>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200/60 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-slate-300 transition-all duration-300 cursor-pointer group">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-200">
                        <FileText className="h-5 w-5" />
                      </div>
                      <span className="font-semibold text-slate-900">My Portfolio</span>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Row 3: Social & Behance */}
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-slate-200/60 shadow-lg shadow-slate-200/50 md:col-span-2">
                <CardContent className="p-6">
                  <AnimatedText
                    as="h3"
                    className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wide"
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
                          rel="noopener noreferrer"
                          className={`flex items-center gap-3 rounded-xl border border-slate-200 p-4 transition-all duration-200 hover:shadow-md ${item.color}`}
                        >
                          <div className="h-10 w-10 rounded-lg bg-white shadow-sm flex items-center justify-center">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-sm">{item.title}</p>
                            <p className="text-xs opacity-70 truncate">{item.url}</p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200/60 shadow-lg shadow-slate-200/50 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div className="space-y-3">
                    <h3 className="font-bold text-lg">Behance</h3>
                    <button className="flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-semibold hover:bg-white/30 transition-colors duration-200">
                      Follow <Badge className="bg-white/30">234</Badge>
                    </button>
                  </div>
                  <div className="flex -space-x-3 mt-4">
                    {[1, 2, 3].map((id) => (
                      <div
                        key={id}
                        className="h-14 w-12 rounded-lg bg-white/20 backdrop-blur-sm border-2 border-blue-500"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Row 4: Budget & Projects */}
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-slate-200/60 shadow-lg shadow-slate-200/50">
                <CardContent className="p-6 space-y-4">
                  <AnimatedText
                    as="h3"
                    className="font-semibold text-slate-900 text-sm uppercase tracking-wide"
                    delay={0.1}
                  >
                    Services
                  </AnimatedText>
                  <div className="space-y-3">
                    <a href="#" className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-200 group">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-lg bg-purple-100 flex items-center justify-center">
                          <FileText className="h-4 w-4 text-purple-600" />
                        </div>
                        <span className="text-sm font-medium text-slate-700">Budget Request</span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-slate-900 transition-colors duration-200" />
                    </a>
                    <a href="#" className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-200 group">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-lg bg-purple-100 flex items-center justify-center">
                          <FileText className="h-4 w-4 text-purple-600" />
                        </div>
                        <span className="text-sm font-medium text-slate-700">Briefing Form</span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-slate-900 transition-colors duration-200" />
                    </a>
                  </div>
                  <div className="rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200/50 p-4">
                    <p className="font-semibold text-sm text-emerald-900 mb-1">Blumenau, SC</p>
                    <p className="text-xs text-emerald-700/80">
                      Available for on-site and remote collaborations.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200/60 shadow-lg shadow-slate-200/50">
                <CardContent className="p-6 space-y-4">
                  <AnimatedText
                    as="h3"
                    className="font-semibold text-slate-900 text-sm uppercase tracking-wide"
                    delay={0.1}
                  >
                    Recent Work
                  </AnimatedText>
                  <div className="space-y-3">
                    {projects.map((project, idx) => (
                      <article
                        key={project.title}
                        className="flex items-center gap-4 p-3 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-200 group cursor-pointer"
                        onClick={() => {
                          setProjectLikes(prev => ({
                            ...prev,
                            [idx]: (prev[idx as keyof typeof prev] || project.likes) + 1
                          }));
                        }}
                      >
                        <div className="h-16 w-20 overflow-hidden rounded-lg bg-slate-100 flex-shrink-0 shadow-sm">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm text-slate-900 mb-0.5 truncate">
                            {project.title}
                          </h4>
                          <p className="text-xs text-slate-500 mb-2">{project.subtitle}</p>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="text-xs gap-1 hover:bg-pink-100 transition-colors">
                              <Heart className="h-3 w-3 fill-current group-hover:text-pink-600 transition-colors" />
                              <span className="font-semibold tabular-nums">
                                {projectLikes[idx as keyof typeof projectLikes] || project.likes}
                              </span>
                            </Badge>
                            <span className="text-xs text-slate-400">Behance</span>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </motion.div>
  );
}

function App() {
  if (typeof window !== "undefined" && window.location.pathname.startsWith("/nim")) {
    return <NimPage />;
  }

  return <LegacyApp />;
}

export default App;
