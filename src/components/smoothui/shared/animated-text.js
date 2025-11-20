"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "motion/react";
export function AnimatedText({ as: Tag = "span", children, className, delay = 0, }) {
    return (_jsx(motion.div, { animate: { opacity: 1, filter: "blur(0px)", y: 0 }, initial: { opacity: 0, filter: "blur(20px)", y: 20 }, transition: {
            type: "spring",
            bounce: 0.3,
            duration: 2,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94]
        }, style: { willChange: "filter, opacity, transform" }, children: _jsx(Tag, { className: className, children: children }) }));
}
