import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NimFooter } from "@/features/nim/components/Footer";
import { NimHeader } from "@/features/nim/components/Header";
import { AnimatedBackground } from "@/features/nim/components/AnimatedBackground";
import { Magnetic } from "@/features/nim/components/Magnetic";
import { MorphingDialog, MorphingDialogClose, MorphingDialogContainer, MorphingDialogContent, MorphingDialogTrigger, } from "@/features/nim/components/MorphingDialog";
import { Spotlight } from "@/features/nim/components/Spotlight";
import { NimThemeProvider } from "@/features/nim/theme/NimThemeProvider";
import { BLOG_POSTS, EMAIL, PROJECTS, SOCIAL_LINKS, WORK_EXPERIENCE, } from "@/features/nim/data";
import { XIcon } from "lucide-react";
import { motion } from "motion/react";
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
function ProjectVideo({ src }) {
    return (_jsxs(MorphingDialog, { transition: {
            type: "spring",
            bounce: 0,
            duration: 0.3,
        }, children: [_jsx(MorphingDialogTrigger, { children: _jsx("video", { src: src, autoPlay: true, loop: true, muted: true, playsInline: true, className: "aspect-video w-full cursor-zoom-in rounded-xl" }) }), _jsxs(MorphingDialogContainer, { children: [_jsx(MorphingDialogContent, { className: "relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50", children: _jsx("video", { src: src, autoPlay: true, loop: true, muted: true, playsInline: true, className: "aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]" }) }), _jsx(MorphingDialogClose, { className: "fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1", variants: {
                            initial: { opacity: 0 },
                            animate: {
                                opacity: 1,
                                transition: { delay: 0.3, duration: 0.1 },
                            },
                            exit: { opacity: 0, transition: { duration: 0 } },
                        }, children: _jsx(XIcon, { className: "h-5 w-5 text-zinc-500" }) })] })] }));
}
function MagneticSocialLink({ children, link, }) {
    return (_jsx(Magnetic, { springOptions: { bounce: 0 }, intensity: 0.3, children: _jsxs("a", { href: link, target: "_blank", rel: "noreferrer", className: "group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700", children: [children, _jsx("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "h-3 w-3", children: _jsx("path", { d: "M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }) })] }) }));
}
export function NimPage() {
    return (_jsx(NimThemeProvider, { children: _jsx("div", { className: "min-h-screen w-full bg-white text-black antialiased dark:bg-zinc-950 dark:text-white", children: _jsxs("div", { className: "relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20 pb-10", children: [_jsx(NimHeader, {}), _jsxs(motion.main, { className: "space-y-24", variants: VARIANTS_CONTAINER, initial: "hidden", animate: "visible", children: [_jsx(motion.section, { variants: VARIANTS_SECTION, transition: TRANSITION_SECTION, children: _jsx("div", { className: "flex-1", children: _jsx("p", { className: "text-zinc-600 dark:text-zinc-400", children: "Focused on creating intuitive and performant web experiences. Bridging the gap between design and development." }) }) }), _jsxs(motion.section, { variants: VARIANTS_SECTION, transition: TRANSITION_SECTION, children: [_jsx("h3", { className: "mb-5 text-lg font-medium", children: "Selected Projects" }), _jsx("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2", children: PROJECTS.map((project) => (_jsxs("div", { className: "space-y-2", children: [_jsx("div", { className: "relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50", children: _jsx(ProjectVideo, { src: project.video }) }), _jsxs("div", { className: "px-1", children: [_jsxs("a", { className: "font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50", href: project.link, target: "_blank", rel: "noreferrer", children: [project.name, _jsx("span", { className: "absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full" })] }), _jsx("p", { className: "text-base text-zinc-600 dark:text-zinc-400", children: project.description })] })] }, project.name))) })] }), _jsxs(motion.section, { variants: VARIANTS_SECTION, transition: TRANSITION_SECTION, children: [_jsx("h3", { className: "mb-5 text-lg font-medium", children: "Work Experience" }), _jsx("div", { className: "flex flex-col space-y-2", children: WORK_EXPERIENCE.map((job) => (_jsxs("a", { className: "relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30", href: job.link, target: "_blank", rel: "noreferrer", children: [_jsx(Spotlight, { className: "from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50", size: 64 }), _jsx("div", { className: "relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950", children: _jsxs("div", { className: "relative flex w-full flex-row justify-between", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-normal dark:text-zinc-100", children: job.title }), _jsx("p", { className: "text-zinc-500 dark:text-zinc-400", children: job.company })] }), _jsxs("p", { className: "text-zinc-600 dark:text-zinc-400", children: [job.start, " - ", job.end] })] }) })] }, job.id))) })] }), _jsxs(motion.section, { variants: VARIANTS_SECTION, transition: TRANSITION_SECTION, children: [_jsx("h3", { className: "mb-3 text-lg font-medium", children: "Blog" }), _jsx("div", { className: "flex flex-col space-y-0", children: _jsx(AnimatedBackground, { enableHover: true, className: "h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80", transition: {
                                                type: "spring",
                                                bounce: 0,
                                                duration: 0.2,
                                            }, children: BLOG_POSTS.map((post) => (_jsx("a", { className: "-mx-3 rounded-xl px-3 py-3", href: post.link, target: "_blank", rel: "noreferrer", "data-id": post.uid, children: _jsxs("div", { className: "flex flex-col space-y-1", children: [_jsx("h4", { className: "font-normal dark:text-zinc-100", children: post.title }), _jsx("p", { className: "text-zinc-500 dark:text-zinc-400", children: post.description })] }) }, post.uid))) }) })] }), _jsxs(motion.section, { variants: VARIANTS_SECTION, transition: TRANSITION_SECTION, children: [_jsx("h3", { className: "mb-5 text-lg font-medium", children: "Connect" }), _jsxs("p", { className: "mb-5 text-zinc-600 dark:text-zinc-400", children: ["Feel free to contact me at", " ", _jsx("a", { className: "underline dark:text-zinc-300", href: `mailto:${EMAIL}`, children: EMAIL })] }), _jsx("div", { className: "flex items-center justify-start space-x-3", children: SOCIAL_LINKS.map((link) => (_jsx(MagneticSocialLink, { link: link.link, children: link.label }, link.label))) })] })] }), _jsx(NimFooter, {})] }) }) }));
}
