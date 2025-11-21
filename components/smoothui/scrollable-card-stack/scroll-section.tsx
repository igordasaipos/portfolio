"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "motion/react";
import { type ScrollableCardStackProps } from "./index";

type ScrollSectionProps = Omit<ScrollableCardStackProps, 'items'> & {
  items: ScrollableCardStackProps['items'];
  sectionId?: string;
};

export function ScrollableCardStackSection({
  items,
  cardHeight = 400,
  perspective = 1200,
  className,
  sectionId = "projects-section",
}: ScrollSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isScrollingProgrammatically = useRef(false);

  const handleScroll = useCallback(() => {
    if (!sectionRef.current || isScrollingProgrammatically.current) return;

    const section = sectionRef.current;
    const rect = section.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Check if section is in viewport
    const sectionTop = rect.top;
    const sectionBottom = rect.bottom;

    // Section is fully visible and should lock scroll
    if (sectionTop <= 100 && sectionBottom >= viewportHeight - 100) {
      if (!isLocked) {
        setIsLocked(true);
        document.body.style.overflow = 'hidden';
      }

      return;
    }

    // Section is leaving viewport - unlock
    if (isLocked) {
      if (sectionTop > 100) {
        // Scrolling up away from section
        setIsLocked(false);
        document.body.style.overflow = '';
      } else if (sectionBottom < viewportHeight - 100) {
        // Scrolling down away from section
        setIsLocked(false);
        document.body.style.overflow = '';
      }
    }
  }, [isLocked]);

  const lastWheelTime = useRef(0);
  const wheelThrottle = 800; // Aumentado de 300ms para 800ms para ser mais lento

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (!isLocked || !sectionRef.current) return;

      e.preventDefault();
      e.stopPropagation();

      // Throttle scroll events para tornar mais suave
      const now = Date.now();
      if (now - lastWheelTime.current < wheelThrottle) {
        return;
      }
      lastWheelTime.current = now;

      const direction = e.deltaY > 0 ? 1 : -1;
      const newIndex = Math.max(0, Math.min(items.length - 1, currentIndex + direction));

      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);

        // Clear any existing timeout
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }

        // Set timeout for unlocking after last/first card
        scrollTimeoutRef.current = setTimeout(() => {
          if (newIndex === items.length - 1 && direction === 1) {
            // At last card, scrolling down - unlock and continue scroll
            setIsLocked(false);
            document.body.style.overflow = '';
            isScrollingProgrammatically.current = true;
            window.scrollBy({ top: 100, behavior: 'smooth' });
            setTimeout(() => {
              isScrollingProgrammatically.current = false;
            }, 100);
          } else if (newIndex === 0 && direction === -1) {
            // At first card, scrolling up - unlock and continue scroll
            setIsLocked(false);
            document.body.style.overflow = '';
            isScrollingProgrammatically.current = true;
            window.scrollBy({ top: -100, behavior: 'smooth' });
            setTimeout(() => {
              isScrollingProgrammatically.current = false;
            }, 100);
          }
        }, 600); // Aumentado de 300ms para 600ms
      } else {
        // Already at boundary, unlock immediately
        if ((newIndex === 0 && direction === -1) || (newIndex === items.length - 1 && direction === 1)) {
          setIsLocked(false);
          document.body.style.overflow = '';
          isScrollingProgrammatically.current = true;
          window.scrollBy({ top: direction * 100, behavior: 'smooth' });
          setTimeout(() => {
            isScrollingProgrammatically.current = false;
          }, 100);
        }
      }
    },
    [isLocked, currentIndex, items.length]
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      document.body.style.overflow = '';
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleScroll, handleWheel]);

  return (
    <div
      ref={sectionRef}
      id={sectionId}
      className="relative min-h-screen flex items-center justify-center"
      style={{
        scrollSnapAlign: isLocked ? 'start' : 'none',
      }}
    >
      <div className="w-full">
        <ScrollableCardStackControlled
          items={items}
          currentIndex={currentIndex}
          cardHeight={cardHeight}
          perspective={perspective}
          className={className}
        />
      </div>
    </div>
  );
}

// Controlled version of ScrollableCardStack that accepts external index
function ScrollableCardStackControlled({
  items,
  currentIndex,
  cardHeight = 384,
  perspective = 1000,
  className,
}: ScrollableCardStackProps & { currentIndex: number }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const getCardTransform = useCallback(
    (index: number) => {
      const STACK_OFFSET = 8; // Offset visual para cada card na pilha
      const SCALE_DECREMENT = 0.02; // Redução de escala para cada card empilhado

      // Card 0 (primeiro) sempre fica visível por trás, no fundo
      if (index === 0) {
        return {
          y: 0,
          scale: 1,
          opacity: 1,
          blur: 0,
          zIndex: 1, // Sempre por trás de todos
        };
      }

      // Card atual (que está no topo da interação)
      if (index === currentIndex) {
        return {
          y: 0,
          scale: 1,
          opacity: 1,
          blur: 0,
          zIndex: 100, // No topo absoluto
        };
      }

      // Cards que já passaram (ficam empilhados sobre o card-1)
      if (index < currentIndex) {
        const stackPosition = currentIndex - index;
        return {
          y: -stackPosition * STACK_OFFSET, // Empilhados acima com offset
          scale: 1 - (stackPosition * SCALE_DECREMENT), // Ligeiramente menores
          opacity: 1,
          blur: 0,
          zIndex: 50 + index, // Empilhados entre card-1 e card atual
        };
      }

      // Cards futuros (ainda vão aparecer) - visíveis empilhados embaixo
      const futurePosition = index - currentIndex;
      return {
        y: futurePosition * STACK_OFFSET, // Empilhados abaixo com offset visual
        scale: 1 - (futurePosition * SCALE_DECREMENT), // Progressivamente menores
        opacity: 1, // Todos visíveis
        blur: 0,
        zIndex: 50 - futurePosition, // Mais abaixo na ordem z
      };
    },
    [currentIndex, items.length]
  );

  return (
    <section
      aria-atomic="true"
      aria-label="Scrollable card stack"
      aria-live="polite"
      className={className}
    >
      <div
        ref={containerRef}
        className="relative mx-auto h-fit w-fit min-w-[300px]"
        style={{
      minHeight: `${cardHeight + 100}px`,
      perspective: `${perspective}px`,
      perspectiveOrigin: "center 60%",
        }}
      >
        {items.map((item, i) => {
          const transform = getCardTransform(i);
          const isActive = i === currentIndex;

          return (
            <motion.div
              key={`card-${item.id}`}
              animate={{
                y: `calc(-50% + ${transform.y}px)`,
                scale: transform.scale,
                x: "-50%",
              }}
              className="absolute top-1/2 left-1/2 w-max max-w-[100vw] overflow-hidden rounded-2xl border bg-background shadow-lg"
              initial={false}
              style={{
                height: `${cardHeight}px`,
                zIndex: transform.zIndex,
                pointerEvents: isActive ? "auto" : "none",
                transformOrigin: "center center",
                willChange: "opacity, filter, transform",
                filter: `blur(${transform.blur}px)`,
                opacity: transform.opacity,
                transitionProperty: "opacity, filter",
                transitionDuration: "600ms",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                borderWidth: `${2 / transform.scale}px`,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 25,
                mass: 0.8,
              }}
            >
              <div
                className="flex aspect-16/10 w-full flex-col rounded-xl bg-background transition-all duration-200"
                style={{ height: `${cardHeight}px` }}
              >
                <div className="relative w-full flex-1 overflow-hidden">
                  <video
                    autoPlay
                    className="absolute inset-0 h-full w-full object-cover"
                    loop
                    muted
                    playsInline
                    src={item.video}
                    style={{ zIndex: 2 }}
                  />
                </div>

                <a
                  href={item.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex items-center justify-center gap-1 bg-background/95 p-3 text-decoration-none text-inherit backdrop-blur-sm transition-colors duration-200"
                >
                  <img
                    alt={`${item.name}'s avatar`}
                    className="mr-1 h-5 w-5 overflow-hidden rounded-full"
                    height={20}
                    src={item.avatar}
                    width={20}
                  />
                  <span className="font-medium text-foreground text-sm leading-none">
                    {item.name}
                  </span>
                  <span className="font-normal text-foreground/70 text-sm">
                    {item.handle}
                  </span>
                </a>
              </div>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
}
