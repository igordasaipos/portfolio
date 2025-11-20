"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getAllPeople, getAvatarUrl } from "@smoothui/data";
import { Play } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
const AVATAR_SIZE = 96;
const EASING_X1 = 0.4;
const EASING_Y1 = 0.0;
const EASING_X2 = 0.2;
const EASING_Y2 = 1;
const getDefaultCards = () => {
    const people = getAllPeople();
    return [
        {
            id: 1,
            title: "Summer Opening",
            image: "https://res.cloudinary.com/dyzxnud9z/image/upload/w_400,ar_1:1,c_fill,g_auto/v1758210208/smoothui/summer-opening.webp",
            content: "Join us for the Summer Opening event, where we celebrate the start of a vibrant season filled with art and culture.",
            author: {
                name: people[0]?.name || "Eduardo Calvo",
                role: people[0]?.role || "CEO & Founder",
                image: getAvatarUrl(people[0]?.avatar || "", AVATAR_SIZE),
            },
        },
        {
            id: 2,
            title: "Fashion",
            image: "https://res.cloudinary.com/dyzxnud9z/image/upload/w_400,ar_1:1,c_fill,g_auto/v1758210208/smoothui/fashion.webp",
            content: "Explore the latest trends in fashion at our exclusive showcase, featuring renowned designers and unique styles.",
            author: {
                name: people[1]?.name || "Sarah Chen",
                role: people[1]?.role || "Head of Design",
                image: getAvatarUrl(people[1]?.avatar || "", AVATAR_SIZE),
            },
        },
        {
            id: 3,
            title: "Gallery Art",
            image: "https://res.cloudinary.com/dyzxnud9z/image/upload/w_400,ar_1:1,c_fill,g_auto/v1758210809/smoothui/galleryart.webp",
            content: "Immerse yourself in the world of art at our gallery, showcasing stunning pieces from emerging and established artists.",
            author: {
                name: people[2]?.name || "Marcus Johnson",
                role: people[2]?.role || "Lead Developer",
                image: getAvatarUrl(people[2]?.avatar || "", AVATAR_SIZE),
            },
        },
        {
            id: 4,
            title: "Dreams",
            image: "https://res.cloudinary.com/dyzxnud9z/image/upload/w_400,ar_1:1,c_fill,g_auto/v1758210809/smoothui/dreams.webp",
            content: "Join us on a journey through dreams, exploring the subconscious and the art of dreaming.",
            author: {
                name: people[3]?.name || "Emily Rodriguez",
                role: people[3]?.role || "Product Manager",
                image: getAvatarUrl(people[3]?.avatar || "", AVATAR_SIZE),
            },
        },
    ];
};
const smoothEasing = [EASING_X1, EASING_Y1, EASING_X2, EASING_Y2];
export default function ExpandableCards({ cards = getDefaultCards(), selectedCard: controlledSelected, onSelect, className = "", cardClassName = "", }) {
    const [internalSelected, setInternalSelected] = useState(null);
    const scrollRef = useRef(null);
    const selectedCard = controlledSelected !== undefined ? controlledSelected : internalSelected;
    useEffect(() => {
        if (scrollRef.current) {
            const scrollWidth = scrollRef.current.scrollWidth;
            const clientWidth = scrollRef.current.clientWidth;
            scrollRef.current.scrollLeft = (scrollWidth - clientWidth) / 2;
        }
    }, []);
    const handleCardClick = (id) => {
        if (selectedCard === id) {
            if (onSelect) {
                onSelect(null);
            }
            else {
                setInternalSelected(null);
            }
        }
        else {
            if (onSelect) {
                onSelect(id);
            }
            else {
                setInternalSelected(id);
            }
            // Center the clicked card in view
            const cardElement = document.querySelector(`[data-card-id="${id}"]`);
            if (cardElement) {
                cardElement.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "center",
                });
            }
        }
    };
    return (_jsx("div", { className: `flex w-full flex-col gap-4 overflow-scroll p-4 ${className}`, children: _jsx("div", { className: "scrollbar-hide mx-auto flex overflow-x-auto pt-4 pb-8", ref: scrollRef, style: {
                scrollSnapType: "x mandatory",
                scrollPaddingLeft: "20%",
            }, children: cards.map((card) => (_jsxs(motion.div, { animate: {
                    width: selectedCard === card.id ? "500px" : "200px",
                }, className: `relative mr-4 h-[300px] shrink-0 cursor-pointer overflow-hidden rounded-2xl border bg-background shadow-lg ${cardClassName}`, "data-card-id": card.id, layout: true, onClick: () => handleCardClick(card.id), style: {
                    scrollSnapAlign: "start",
                }, transition: {
                    duration: 0.5,
                    ease: smoothEasing,
                }, children: [_jsxs("div", { className: "relative h-full w-[200px]", children: [_jsx("img", { alt: card.title, className: "h-full w-full object-cover", height: 300, src: card.image || "/placeholder.svg", width: 200 }), _jsx("div", { className: "absolute inset-0 bg-black/20" }), _jsxs("div", { className: "absolute inset-0 flex flex-col justify-between p-6 text-white", children: [_jsx("h2", { className: "font-bold text-2xl", children: card.title }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("button", { "aria-label": "Play video", className: "flex h-12 w-12 items-center justify-center rounded-full bg-background/30 backdrop-blur-sm transition-transform hover:scale-110", type: "button", children: _jsx(Play, { className: "h-6 w-6 text-white" }) }), _jsx("span", { className: "font-medium text-sm", children: "Play video" })] })] })] }), _jsx(AnimatePresence, { mode: "popLayout", children: selectedCard === card.id && (_jsx(motion.div, { animate: { width: "300px", opacity: 1, filter: "blur(0px)" }, className: "absolute top-0 right-0 h-full bg-background", exit: { width: 0, opacity: 0, filter: "blur(5px)" }, initial: { width: 0, opacity: 0, filter: "blur(5px)" }, transition: {
                                duration: 0.5,
                                ease: smoothEasing,
                                opacity: { duration: 0.3, delay: 0.2 },
                            }, children: _jsxs(motion.div, { animate: { opacity: 1, x: 0, filter: "blur(0px)" }, className: "flex h-full flex-col justify-between p-8", exit: { opacity: 0, x: 20, filter: "blur(5px)" }, initial: { opacity: 0, x: 20, filter: "blur(5px)" }, transition: { delay: 0.4, duration: 0.3 }, children: [_jsx("p", { className: "text-primary-foreground text-sm", children: card.content }), card.author && (_jsxs("div", { className: "mt-4 flex items-center gap-3", children: [_jsx("div", { className: "h-12 w-12 overflow-hidden rounded-full border bg-primary", children: _jsx("img", { alt: card.author.name, className: "h-full w-full object-cover", height: 48, src: card.author.image, width: 48 }) }), _jsxs("div", { children: [_jsx("p", { className: "font-semibold text-foreground", children: card.author.name }), _jsx("p", { className: "text-primary-foreground text-xs", children: card.author.role })] })] }))] }) })) })] }, card.id))) }) }));
}
