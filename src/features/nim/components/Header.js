import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TextEffect } from "@/features/nim/components/TextEffect";
export function NimHeader() {
    return (_jsx("header", { className: "mb-8 flex items-center justify-between", children: _jsxs("div", { children: [_jsx("a", { href: "#", className: "font-medium text-black dark:text-white", "aria-label": "Home", children: "Julien Nim" }), _jsx(TextEffect, { as: "p", preset: "fade", per: "char", className: "text-zinc-600 dark:text-zinc-500", delay: 0.5, children: "Design Engineer" })] }) }));
}
