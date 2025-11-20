import { AnimatedBackground } from "@/features/nim/components/AnimatedBackground";
import { TextLoop } from "@/features/nim/components/TextLoop";
import { NimTheme, useNimTheme } from "@/features/nim/theme/NimThemeProvider";
import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react";
import { JSX, useEffect, useState } from "react";

const THEME_OPTIONS: Array<{
  label: string;
  id: NimTheme;
  icon: JSX.Element;
}> = [
  {
    label: "Light",
    id: "light",
    icon: <SunIcon className="h-4 w-4" />,
  },
  {
    label: "Dark",
    id: "dark",
    icon: <MoonIcon className="h-4 w-4" />,
  },
  {
    label: "System",
    id: "system",
    icon: <MonitorIcon className="h-4 w-4" />,
  },
];

function ThemeSwitch() {
  const { theme, setTheme } = useNimTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatedBackground
      className="pointer-events-none rounded-lg bg-zinc-100 dark:bg-zinc-800"
      defaultValue={theme}
      transition={{
        type: "spring",
        bounce: 0,
        duration: 0.2,
      }}
      onValueChange={(id) => {
        if (id) {
          setTheme(id as NimTheme);
        }
      }}
    >
      {THEME_OPTIONS.map((themeOption) => (
        <button
          key={themeOption.id}
          className="inline-flex h-7 w-7 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50"
          type="button"
          aria-label={`Switch to ${themeOption.label} theme`}
          data-id={themeOption.id}
        >
          {themeOption.icon}
        </button>
      ))}
    </AnimatedBackground>
  );
}

export function NimFooter() {
  return (
    <footer className="mt-24 border-t border-zinc-100 px-0 py-4 dark:border-zinc-800">
      <div className="flex items-center justify-between">
        <a href="https://github.com/ibelick/nim" target="_blank" rel="noreferrer">
          <TextLoop className="text-xs text-zinc-500">
            {[
              <span key="item-1">© 2024 Nim.</span>,
              <span key="item-2">Built with Motion-Primitives.</span>,
            ]}
          </TextLoop>
        </a>
        <div className="text-xs text-zinc-400">
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  );
}

