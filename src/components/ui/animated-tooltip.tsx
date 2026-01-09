"use client";

import React, { useState } from "react";
import {
    motion,
    useTransform,
    AnimatePresence,
    useMotionValue,
    useSpring,
} from "framer-motion";

type TooltipItem = {
    id: number;
    name: string;
    designation: string;
    image?: string;
    icon?: React.ReactNode;
};

export const AnimatedTooltip = ({
    items,
}: {
    items: TooltipItem[];
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const springConfig = { stiffness: 100, damping: 5 };
    const x = useMotionValue(0);

    const rotate = useSpring(
        useTransform(x, [-100, 100], [-45, 45]),
        springConfig
    );
    const translateX = useSpring(
        useTransform(x, [-100, 100], [-50, 50]),
        springConfig
    );

    const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
        const target = event.target as HTMLElement;
        const halfWidth = target.offsetWidth / 2;
        x.set(event.nativeEvent.offsetX - halfWidth);
    };

    return (
        <div className="flex flex-row flex-wrap items-center justify-center gap-4">
            {items.map((item) => (
                <div
                    className="relative group"
                    key={item.id}
                    onMouseEnter={() => setHoveredIndex(item.id)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence mode="popLayout">
                        {hoveredIndex === item.id && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 10,
                                    },
                                }}
                                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                                style={{
                                    translateX: translateX,
                                    rotate: rotate,
                                    whiteSpace: "nowrap",
                                }}
                                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-xl bg-[#191314] z-50 shadow-xl px-4 py-2"
                            >
                                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-[#ecf95a] to-transparent h-px " />
                                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-[#ecf95a] to-transparent h-px " />
                                <div className="font-bold text-white relative z-30 text-sm">
                                    {item.name}
                                </div>
                                <div className="text-white/60 text-xs">{item.designation}</div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <div
                        onMouseMove={handleMouseMove}
                        className="w-14 h-14 rounded-full bg-[#f4f4f4] flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110 hover:bg-[#ecf95a] border-2 border-white shadow-md"
                    >
                        {item.icon ? (
                            <div className="w-7 h-7 text-[#191314]">{item.icon}</div>
                        ) : item.image ? (
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full rounded-full object-cover"
                            />
                        ) : (
                            <div className="w-7 h-7 text-[#191314] font-bold text-lg flex items-center justify-center">
                                {item.name.charAt(0)}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};
