"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { useState } from "react";
export function DotMorphButton({ label, className = "", onClick, }) {
    const [isHovered, setIsHovered] = useState(false);
    return (_jsxs(Button, { className: `flex items-center gap-3 rounded-full border bg-background ${className}`, onClick: onClick, onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), type: "button", children: [_jsx(motion.span, { animate: isHovered
                    ? {
                        width: 12,
                        height: 28,
                        borderRadius: 999,
                    }
                    : {
                        width: 16,
                        height: 16,
                        borderRadius: 999,
                    }, className: "flex items-center justify-center", initial: false, style: {
                    background: "var(--color-brand)",
                    display: "inline-block",
                }, transition: {
                    type: "spring",
                    stiffness: 600,
                    damping: 22,
                } }), _jsx("span", { className: "select-none font-medium text-2xl text-foreground", children: label })] }));
}
export default DotMorphButton;
