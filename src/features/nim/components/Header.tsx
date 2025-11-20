import { TextEffect } from "@/features/nim/components/TextEffect";
import { motion } from "motion/react";

export function NimHeader() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <motion.img
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80"
          alt="Julien Nim"
          className="mb-3 h-16 w-16 rounded-full border border-zinc-200 object-cover shadow-sm dark:border-zinc-800"
          initial={{ opacity: 0, scale: 0.9, filter: "blur(12px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        <a
          href="#"
          className="font-medium text-black dark:text-white"
          aria-label="Home"
        >
          Igor
        </a>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Design Engineer
        </TextEffect>
      </div>
    </header>
  );
}

