import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { Children, cloneElement, useEffect, useId, useState, } from "react";
export function AnimatedBackground({ children, defaultValue, onValueChange, className, transition, enableHover = false, }) {
    const [activeId, setActiveId] = useState(null);
    const uniqueId = useId();
    useEffect(() => {
        if (defaultValue !== undefined) {
            setActiveId(defaultValue);
        }
    }, [defaultValue]);
    const handleSetActiveId = (id) => {
        setActiveId(id);
        onValueChange?.(id);
    };
    return Children.map(children, (child, index) => {
        const childProps = child.props;
        const id = childProps["data-id"];
        const interactionProps = enableHover
            ? {
                onMouseEnter: () => handleSetActiveId(id),
                onMouseLeave: () => handleSetActiveId(null),
            }
            : {
                onClick: () => handleSetActiveId(id),
            };
        return cloneElement(child, {
            key: index,
            className: cn("relative inline-flex", childProps.className),
            "data-checked": activeId === id ? "true" : "false",
            ...interactionProps,
        }, _jsxs(_Fragment, { children: [_jsx(AnimatePresence, { initial: false, children: activeId === id && (_jsx(motion.div, { layoutId: `background-${uniqueId}`, className: cn("absolute inset-0", className), transition: transition, initial: { opacity: defaultValue ? 1 : 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } })) }), _jsx("div", { className: "z-10", children: childProps.children })] }));
    });
}
