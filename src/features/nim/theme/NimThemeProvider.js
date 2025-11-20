import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useMemo, useState, } from "react";
const STORAGE_KEY = "nim-theme";
const NimThemeContext = createContext(undefined);
function getSystemPreference() {
    if (typeof window === "undefined")
        return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}
function commitTheme(resolvedTheme) {
    if (typeof document === "undefined")
        return;
    if (resolvedTheme === "dark") {
        document.documentElement.classList.add("dark");
    }
    else {
        document.documentElement.classList.remove("dark");
    }
    document.documentElement.style.colorScheme = resolvedTheme;
}
export function NimThemeProvider({ children }) {
    const [theme, setThemeState] = useState("system");
    const [mounted, setMounted] = useState(false);
    const [systemTheme, setSystemTheme] = useState(getSystemPreference());
    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            setThemeState(stored);
        }
        setMounted(true);
    }, []);
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handler = () => {
            setSystemTheme(mediaQuery.matches ? "dark" : "light");
        };
        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }, []);
    const resolvedTheme = useMemo(() => {
        return theme === "system" ? systemTheme : theme;
    }, [theme, systemTheme]);
    useEffect(() => {
        if (!mounted)
            return;
        localStorage.setItem(STORAGE_KEY, theme);
    }, [theme, mounted]);
    useEffect(() => {
        commitTheme(resolvedTheme);
    }, [resolvedTheme]);
    const handleSetTheme = (nextTheme) => {
        setThemeState(nextTheme);
    };
    const value = useMemo(() => ({
        theme,
        resolvedTheme,
        setTheme: handleSetTheme,
    }), [theme, resolvedTheme]);
    return (_jsx(NimThemeContext.Provider, { value: value, children: children }));
}
export function useNimTheme() {
    const context = useContext(NimThemeContext);
    if (!context) {
        throw new Error("useNimTheme must be used within NimThemeProvider");
    }
    return context;
}
