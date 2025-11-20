import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "motion/react";
const WaveText = ({ children, amplitude = 8, speed = 0.3, className = "", }) => (_jsx("span", { className: className, style: { display: "inline-block" }, children: children.split("").map((char, i) => (_jsx(motion.span, { animate: { y: [0, -amplitude, 0] }, style: { display: "inline-block" }, transition: {
            repeat: Number.POSITIVE_INFINITY,
            duration: speed * children.length,
            delay: i * speed,
            ease: "easeInOut",
        }, children: char === " " ? "\u00A0" : char }, `${i}-${char}`))) }));
export default WaveText;
