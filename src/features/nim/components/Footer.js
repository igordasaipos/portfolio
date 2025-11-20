import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AnimatedBackground } from "@/features/nim/components/AnimatedBackground";
import { TextLoop } from "@/features/nim/components/TextLoop";
import { useNimTheme } from "@/features/nim/theme/NimThemeProvider";
import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";
const THEME_OPTIONS = [
    {
        label: "Light",
        id: "light",
        icon: _jsx(SunIcon, { className: "h-4 w-4" }),
    },
    {
        label: "Dark",
        id: "dark",
        icon: _jsx(MoonIcon, { className: "h-4 w-4" }),
    },
    {
        label: "System",
        id: "system",
        icon: _jsx(MonitorIcon, { className: "h-4 w-4" }),
    },
];
function ThemeSwitch() {
    const { theme, setTheme } = useNimTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted)
        return null;
    return (_jsx(AnimatedBackground, { className: "pointer-events-none rounded-lg bg-zinc-100 dark:bg-zinc-800", defaultValue: theme, transition: {
            type: "spring",
            bounce: 0,
            duration: 0.2,
        }, onValueChange: (id) => {
            if (id) {
                setTheme(id);
            }
        }, children: THEME_OPTIONS.map((themeOption) => (_jsx("button", { className: "inline-flex h-7 w-7 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50", type: "button", "aria-label": `Switch to ${themeOption.label} theme`, "data-id": themeOption.id, children: themeOption.icon }, themeOption.id))) }));
}
export function NimFooter() {
    return (_jsx("footer", { className: "mt-24 border-t border-zinc-100 px-0 py-4 dark:border-zinc-800", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("a", { href: "https://github.com/ibelick/nim", target: "_blank", rel: "noreferrer", children: _jsx(TextLoop, { className: "text-xs text-zinc-500", children: [
                            _jsx("span", { children: "\u00A9 2024 Nim." }, "item-1"),
                            _jsx("span", { children: "Built with Motion-Primitives." }, "item-2"),
                        ] }) }), _jsx("div", { className: "text-xs text-zinc-400", children: _jsx(ThemeSwitch, {}) })] }) }));
}
