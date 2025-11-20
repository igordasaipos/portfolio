"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";
const TENS_PLACE = 10;
const HUNDREDS_PLACE = 100;
const animateDigit = (prevElement, nextElement, isIncreasing) => {
    if (!prevElement) {
        return;
    }
    if (!nextElement) {
        return;
    }
    if (isIncreasing) {
        prevElement.classList.add("slide-out-up");
        nextElement.classList.add("slide-in-up");
    }
    else {
        prevElement.classList.add("slide-out-down");
        nextElement.classList.add("slide-in-down");
    }
    const handleAnimationEnd = () => {
        prevElement.classList.remove("slide-out-up", "slide-out-down");
        nextElement.classList.remove("slide-in-up", "slide-in-down");
        prevElement.removeEventListener("animationend", handleAnimationEnd);
    };
    prevElement.addEventListener("animationend", handleAnimationEnd);
};
const getTensValue = (num) => Math.floor(num / TENS_PLACE);
const getHundredsValue = (num) => Math.floor(num / HUNDREDS_PLACE);
export default function NumberFlow({ value: controlledValue, onChange, min = 0, max = 999, className = "", digitClassName = "", buttonClassName = "", }) {
    const [internalValue, setInternalValue] = useState(0);
    const [prevValue, setPrevValue] = useState(0);
    const value = controlledValue !== undefined ? controlledValue : internalValue;
    const prevValueRef = useRef(null);
    const nextValueRef = useRef(null);
    const prevValueTens = useRef(null);
    const nextValueTens = useRef(null);
    const prevValueHunds = useRef(null);
    const nextValueHunds = useRef(null);
    const setValue = (val) => {
        if (onChange) {
            onChange(val);
        }
        else {
            setInternalValue(val);
        }
    };
    const add = () => {
        if (value < max) {
            setPrevValue(value);
            setValue(value + 1);
        }
    };
    const subtract = () => {
        if (value > min) {
            setPrevValue(value);
            setValue(value - 1);
        }
    };
    useEffect(() => {
        if (prevValueRef.current && nextValueRef.current) {
            animateDigit(prevValueRef.current, nextValueRef.current, value > prevValue);
        }
        const currentTens = getTensValue(value);
        const prevTens = getTensValue(prevValue);
        if (prevValueTens.current &&
            nextValueTens.current &&
            currentTens !== prevTens) {
            animateDigit(prevValueTens.current, nextValueTens.current, currentTens > prevTens);
        }
        const currentHundreds = getHundredsValue(value);
        const prevHundreds = getHundredsValue(prevValue);
        if (prevValueHunds.current &&
            nextValueHunds.current &&
            currentHundreds !== prevHundreds) {
            animateDigit(prevValueHunds.current, nextValueHunds.current, currentHundreds > prevHundreds);
        }
    }, [value, prevValue]);
    return (_jsx("div", { className: cn("flex min-h-screen flex-col items-center justify-center gap-8", className), children: _jsxs("div", { className: "flex items-center gap-2 rounded-xl border bg-background p-4", children: [_jsxs("div", { className: cn("flex items-center gap-1", digitClassName), children: [_jsxs("div", { className: cn("relative h-16 w-12 overflow-hidden rounded-lg border bg-primary"), children: [_jsx("span", { className: "absolute inset-0 flex items-center justify-center font-semibold text-2xl text-foreground", ref: prevValueHunds, style: { transform: "translateY(-100%)" }, children: Math.floor(prevValue / HUNDREDS_PLACE) }), _jsx("span", { className: "absolute inset-0 flex items-center justify-center font-semibold text-2xl text-foreground", ref: nextValueHunds, style: { transform: "translateY(0%)" }, children: Math.floor(value / HUNDREDS_PLACE) })] }), _jsxs("div", { className: cn("relative h-16 w-12 overflow-hidden rounded-lg border bg-primary"), children: [_jsx("span", { className: "absolute inset-0 flex items-center justify-center font-semibold text-2xl text-foreground", ref: prevValueTens, style: { transform: "translateY(-100%)" }, children: Math.floor(prevValue / TENS_PLACE) % TENS_PLACE }), _jsx("span", { className: "absolute inset-0 flex items-center justify-center font-semibold text-2xl text-foreground", ref: nextValueTens, style: { transform: "translateY(0%)" }, children: Math.floor(value / TENS_PLACE) % TENS_PLACE })] }), _jsxs("div", { className: cn("relative h-16 w-12 overflow-hidden rounded-lg border bg-primary"), children: [_jsx("span", { className: "absolute inset-0 flex items-center justify-center font-semibold text-2xl text-foreground", ref: prevValueRef, style: { transform: "translateY(-100%)" }, children: prevValue % TENS_PLACE }), _jsx("span", { className: "absolute inset-0 flex items-center justify-center font-semibold text-2xl text-foreground", ref: nextValueRef, style: { transform: "translateY(0%)" }, children: value % TENS_PLACE })] })] }), _jsxs("div", { className: "flex flex-col gap-1", children: [_jsx("button", { "aria-label": "Increase number", className: cn("relative w-auto cursor-pointer overflow-hidden rounded-md border bg-background p-2 disabled:cursor-not-allowed disabled:opacity-50", buttonClassName), disabled: value >= max, onClick: add, type: "button", children: _jsx(Plus, { className: "h-3 w-3" }) }), _jsx("button", { "aria-label": "Decrease number", className: cn("relative w-auto cursor-pointer overflow-hidden rounded-md border bg-background p-2 disabled:cursor-not-allowed disabled:opacity-50", buttonClassName), disabled: value <= min, onClick: subtract, type: "button", children: _jsx(Minus, { className: "h-3 w-3" }) })] })] }) }));
}
