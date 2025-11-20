import { cn } from "@/lib/utils";
import { AnimatePresence, Transition, motion } from "motion/react";
import {
  Children,
  ReactElement,
  ReactNode,
  cloneElement,
  useEffect,
  useId,
  useState,
} from "react";

type ChildWithId = ReactElement<
  {
    "data-id": string;
    className?: string;
    children?: ReactNode;
  } & Record<string, unknown>
>;

export type AnimatedBackgroundProps = {
  children: ChildWithId | ChildWithId[];
  defaultValue?: string;
  onValueChange?: (newActiveId: string | null) => void;
  className?: string;
  transition?: Transition;
  enableHover?: boolean;
};

export function AnimatedBackground({
  children,
  defaultValue,
  onValueChange,
  className,
  transition,
  enableHover = false,
}: AnimatedBackgroundProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const uniqueId = useId();

  useEffect(() => {
    if (defaultValue !== undefined) {
      setActiveId(defaultValue);
    }
  }, [defaultValue]);

  const handleSetActiveId = (id: string | null) => {
    setActiveId(id);
    onValueChange?.(id);
  };

  return Children.map(children as ChildWithId[], (child, index) => {
    const childProps = child.props as ChildWithId["props"];
    const id = childProps["data-id"];

    const interactionProps = enableHover
      ? {
          onMouseEnter: () => handleSetActiveId(id),
          onMouseLeave: () => handleSetActiveId(null),
        }
      : {
          onClick: () => handleSetActiveId(id),
        };

    return cloneElement(
      child,
      {
        key: index,
        className: cn("relative inline-flex", childProps.className),
        "data-checked": activeId === id ? "true" : "false",
        ...interactionProps,
      },
      <>
        <AnimatePresence initial={false}>
          {activeId === id && (
            <motion.div
              layoutId={`background-${uniqueId}`}
              className={cn("absolute inset-0", className)}
              transition={transition}
              initial={{ opacity: defaultValue ? 1 : 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </AnimatePresence>
        <div className="z-10">{childProps.children}</div>
      </>,
    );
  });
}

