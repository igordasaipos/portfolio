"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@repo/shadcn-ui/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
const menuItems = [
    { id: "features", name: "Features", href: "#link" },
    { id: "pricing", name: "Pricing", href: "#link" },
    { id: "about", name: "About", href: "#link" },
];
// Animation constants
const ANIMATION_DURATION = 0.2;
const STAGGER_DELAY = 0.05;
const EASE_OUT_QUART_X1 = 0.22;
const EASE_OUT_QUART_Y1 = 1;
const EASE_OUT_QUART_X2 = 0.36;
const EASE_OUT_QUART_Y2 = 1;
const EASE_OUT_QUART = [
    EASE_OUT_QUART_X1,
    EASE_OUT_QUART_Y1,
    EASE_OUT_QUART_X2,
    EASE_OUT_QUART_Y2,
];
const ROTATION_ANGLE = 180;
const SCALE_MIN = 0;
const SCALE_MAX = 1;
const TRANSLATE_Y_OFFSET = -10;
const TRANSLATE_X_OFFSET = -10;
export const HeroHeader = () => {
    const [menuState, setMenuState] = useState(false);
    return (_jsx("div", { className: "relative", children: _jsx("header", { children: _jsx("nav", { className: "absolute top-0 left-0 z-20 w-full transition-all duration-300", children: _jsx("div", { className: "mx-auto max-w-5xl px-6", children: _jsxs("div", { className: "relative flex flex-wrap items-center justify-between gap-6 py-6 transition-all duration-200 lg:gap-0", children: [_jsxs("div", { className: "flex w-full justify-between gap-6 lg:w-auto", children: [_jsxs("a", { "aria-label": "SmoothUI home", className: "flex items-center gap-2", href: "/", children: [_jsx("span", { className: "sr-only", children: "SmoothUI" }), _jsx("img", { alt: "SmoothUI logo", className: cn("h-6 w-auto", "dark:filter", "dark:invert"), height: 28, src: "/logo-smoothui.svg", width: 140 })] }), _jsx("button", { "aria-label": menuState === true ? "Close Menu" : "Open Menu", className: "-m-2.5 -mr-4 relative z-20 block cursor-pointer p-2.5 lg:hidden", onClick: () => setMenuState(!menuState), type: "button", children: _jsx(AnimatePresence, { mode: "wait", children: menuState ? (_jsx(motion.div, { animate: { opacity: 1, rotate: 0, scale: SCALE_MAX }, exit: {
                                                    opacity: 0,
                                                    rotate: -ROTATION_ANGLE,
                                                    scale: SCALE_MIN,
                                                }, initial: {
                                                    opacity: 0,
                                                    rotate: ROTATION_ANGLE,
                                                    scale: SCALE_MIN,
                                                }, transition: {
                                                    duration: ANIMATION_DURATION,
                                                    ease: EASE_OUT_QUART,
                                                }, children: _jsx(X, { className: "m-auto size-6" }) }, "close")) : (_jsx(motion.div, { animate: { opacity: 1, rotate: 0, scale: SCALE_MAX }, exit: {
                                                    opacity: 0,
                                                    rotate: ROTATION_ANGLE,
                                                    scale: SCALE_MIN,
                                                }, initial: {
                                                    opacity: 0,
                                                    rotate: -ROTATION_ANGLE,
                                                    scale: SCALE_MIN,
                                                }, transition: {
                                                    duration: ANIMATION_DURATION,
                                                    ease: EASE_OUT_QUART,
                                                }, children: _jsx(Menu, { className: "m-auto size-6" }) }, "menu")) }) }), _jsx("div", { className: "m-auto hidden size-fit lg:block", children: _jsx("ul", { className: "flex gap-1", children: menuItems.map((item) => (_jsx("li", { children: _jsx(Button, { asChild: true, size: "sm", variant: "ghost", children: _jsx("a", { className: "text-base", href: item.href, children: _jsx("span", { children: item.name }) }) }) }, item.id))) }) })] }), _jsx(AnimatePresence, { children: menuState && (_jsxs(motion.div, { animate: { opacity: 1, y: 0, scale: SCALE_MAX }, className: "mb-6 w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border bg-background p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent", exit: { opacity: 0, y: TRANSLATE_Y_OFFSET, scale: 0.95 }, initial: { opacity: 0, y: TRANSLATE_Y_OFFSET, scale: 0.95 }, transition: {
                                        duration: ANIMATION_DURATION,
                                        ease: EASE_OUT_QUART,
                                    }, children: [_jsx("div", { className: "lg:hidden", children: _jsx("ul", { className: "space-y-6 text-base", children: menuItems.map((item, index) => (_jsx(motion.li, { animate: { opacity: 1, x: 0 }, initial: { opacity: 0, x: TRANSLATE_X_OFFSET }, transition: {
                                                        delay: index * STAGGER_DELAY,
                                                        duration: ANIMATION_DURATION,
                                                        ease: EASE_OUT_QUART,
                                                    }, children: _jsx("a", { className: "block text-muted-foreground duration-150 hover:text-accent-foreground", href: item.href, onClick: () => setMenuState(false), children: _jsx("span", { children: item.name }) }) }, item.id))) }) }), _jsxs(motion.div, { animate: { opacity: 1, y: 0 }, className: "flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit", initial: { opacity: 0, y: 10 }, transition: {
                                                delay: menuItems.length * STAGGER_DELAY + STAGGER_DELAY,
                                                duration: ANIMATION_DURATION,
                                                ease: EASE_OUT_QUART,
                                            }, children: [_jsx(Button, { onClick: () => setMenuState(false), size: "sm", type: "button", variant: "ghost", children: _jsx("span", { children: "Login" }) }), _jsx(Button, { onClick: () => setMenuState(false), size: "sm", type: "button", children: _jsx("span", { children: "Sign Up" }) })] })] })) })] }) }) }) }) }));
};
