import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import useClickOutside from "@/hooks/useClickOutside";
import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";
import { AnimatePresence, MotionConfig, motion, } from "motion/react";
import { createContext, useCallback, useContext, useEffect, useId, useMemo, useRef, useState, } from "react";
import { createPortal } from "react-dom";
const MorphingDialogContext = createContext(null);
function useMorphingDialog() {
    const context = useContext(MorphingDialogContext);
    if (!context) {
        throw new Error("useMorphingDialog must be used within a MorphingDialogProvider");
    }
    return context;
}
function MorphingDialogProvider({ children, transition, }) {
    const [isOpen, setIsOpen] = useState(false);
    const uniqueId = useId();
    const triggerRef = useRef(null);
    const contextValue = useMemo(() => ({
        isOpen,
        setIsOpen,
        uniqueId,
        triggerRef,
    }), [isOpen, uniqueId]);
    return (_jsx(MorphingDialogContext.Provider, { value: contextValue, children: _jsx(MotionConfig, { transition: transition, children: children }) }));
}
function MorphingDialog({ children, transition }) {
    return (_jsx(MorphingDialogProvider, { transition: transition, children: _jsx(MotionConfig, { transition: transition, children: children }) }));
}
function MorphingDialogTrigger({ children, className, style, triggerRef, }) {
    const { setIsOpen, isOpen, uniqueId } = useMorphingDialog();
    const handleClick = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen, setIsOpen]);
    const handleKeyDown = useCallback((event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setIsOpen(!isOpen);
        }
    }, [isOpen, setIsOpen]);
    return (_jsx(motion.div, { ref: triggerRef, layoutId: `dialog-${uniqueId}`, className: cn("relative cursor-pointer", className), onClick: handleClick, onKeyDown: handleKeyDown, style: style, role: "button", "aria-haspopup": "dialog", "aria-expanded": isOpen, "aria-controls": `motion-ui-morphing-dialog-content-${uniqueId}`, "aria-label": `Open dialog ${uniqueId}`, tabIndex: 0, children: children }));
}
function MorphingDialogContent({ children, className, style, }) {
    const { setIsOpen, isOpen, uniqueId, triggerRef } = useMorphingDialog();
    const containerRef = useRef(null);
    const [firstFocusableElement, setFirstFocusableElement] = useState(null);
    const [lastFocusableElement, setLastFocusableElement] = useState(null);
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
            if (event.key === "Tab") {
                if (!firstFocusableElement || !lastFocusableElement)
                    return;
                if (event.shiftKey) {
                    if (document.activeElement === firstFocusableElement) {
                        event.preventDefault();
                        lastFocusableElement.focus();
                    }
                }
                else if (document.activeElement === lastFocusableElement) {
                    event.preventDefault();
                    firstFocusableElement.focus();
                }
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [setIsOpen, firstFocusableElement, lastFocusableElement]);
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
            const focusableElements = containerRef.current?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            if (focusableElements && focusableElements.length > 0) {
                setFirstFocusableElement(focusableElements[0]);
                setLastFocusableElement(focusableElements[focusableElements.length - 1]);
                focusableElements[0].focus();
            }
        }
        else {
            document.body.classList.remove("overflow-hidden");
            triggerRef.current?.focus?.();
        }
    }, [isOpen, triggerRef]);
    useClickOutside(containerRef, () => {
        if (isOpen) {
            setIsOpen(false);
        }
    });
    return (_jsx(motion.div, { ref: containerRef, layoutId: `dialog-${uniqueId}`, className: cn("overflow-hidden", className), style: style, role: "dialog", "aria-modal": "true", "aria-labelledby": `motion-ui-morphing-dialog-title-${uniqueId}`, "aria-describedby": `motion-ui-morphing-dialog-description-${uniqueId}`, children: children }));
}
function MorphingDialogContainer({ children }) {
    const { isOpen, uniqueId } = useMorphingDialog();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);
    if (!mounted)
        return null;
    return createPortal(_jsx(AnimatePresence, { initial: false, mode: "sync", children: isOpen && (_jsxs(_Fragment, { children: [_jsx(motion.div, { className: "fixed inset-0 h-full w-full bg-white/40 backdrop-blur-sm dark:bg-black/40", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }, `backdrop-${uniqueId}`), _jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: children })] })) }), document.body);
}
function MorphingDialogTitle({ children, className, style, }) {
    const { uniqueId } = useMorphingDialog();
    return (_jsx(motion.div, { layoutId: `dialog-title-container-${uniqueId}`, className: className, style: style, layout: true, children: children }));
}
function MorphingDialogSubtitle({ children, className, style, }) {
    const { uniqueId } = useMorphingDialog();
    return (_jsx(motion.div, { layoutId: `dialog-subtitle-container-${uniqueId}`, className: className, style: style, children: children }));
}
function MorphingDialogDescription({ children, className, variants, disableLayoutAnimation, }) {
    const { uniqueId } = useMorphingDialog();
    return (_jsx(motion.div, { layoutId: disableLayoutAnimation
            ? undefined
            : `dialog-description-content-${uniqueId}`, variants: variants, className: className, initial: "initial", animate: "animate", exit: "exit", id: `dialog-description-${uniqueId}`, children: children }, `dialog-description-${uniqueId}`));
}
function MorphingDialogImage({ src, alt, className, style, }) {
    const { uniqueId } = useMorphingDialog();
    return (_jsx(motion.img, { src: src, alt: alt, className: cn(className), layoutId: `dialog-img-${uniqueId}`, style: style }));
}
function MorphingDialogClose({ children, className, variants, }) {
    const { setIsOpen, uniqueId } = useMorphingDialog();
    const handleClose = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);
    return (_jsx(motion.button, { onClick: handleClose, type: "button", "aria-label": "Close dialog", className: cn("absolute top-6 right-6", className), initial: "initial", animate: "animate", exit: "exit", variants: variants, children: children || _jsx(XIcon, { size: 24 }) }, `dialog-close-${uniqueId}`));
}
export { MorphingDialog, MorphingDialogClose, MorphingDialogContainer, MorphingDialogContent, MorphingDialogDescription, MorphingDialogImage, MorphingDialogSubtitle, MorphingDialogTitle, MorphingDialogTrigger, };
