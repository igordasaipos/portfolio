import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, } from "motion/react";
import { useEffect, useState } from "react";
export function TextLoop({ children, className, interval = 2, transition = { duration: 0.3 }, variants, onIndexChange, trigger = true, mode = "popLayout", }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = Array.isArray(children) ? children : [children];
    useEffect(() => {
        if (!trigger)
            return;
        const intervalMs = interval * 1000;
        const timer = setInterval(() => {
            setCurrentIndex((current) => {
                const next = (current + 1) % items.length;
                onIndexChange?.(next);
                return next;
            });
        }, intervalMs);
        return () => clearInterval(timer);
    }, [items.length, interval, onIndexChange, trigger]);
    const motionVariants = {
        initial: { y: 20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: -20, opacity: 0 },
    };
    return (_jsx("div", { className: cn("relative inline-block whitespace-nowrap", className), children: _jsx(AnimatePresence, { mode: mode, initial: false, children: _jsx(motion.div, { initial: "initial", animate: "animate", exit: "exit", transition: transition, variants: variants || motionVariants, children: items[currentIndex] }, currentIndex) }) }));
}
