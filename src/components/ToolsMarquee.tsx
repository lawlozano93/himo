"use client";

import { useEffect, useState } from "react";
import { ToolIcon } from "./ToolIcons";

interface Tool {
    name: string;
    icon: string;
}

interface ToolsMarqueeProps {
    tools: Tool[];
}

export default function ToolsMarquee({ tools }: ToolsMarqueeProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Create positions for scattered layout like Antigravity
    const getPosition = (index: number, total: number) => {
        const positions = [
            { x: 5, y: 60 },
            { x: 12, y: 40 },
            { x: 20, y: 55 },
            { x: 28, y: 25 },
            { x: 35, y: 50 },
            { x: 42, y: 35 },
            { x: 50, y: 60 },
            { x: 58, y: 30 },
            { x: 65, y: 55 },
            { x: 72, y: 40 },
            { x: 80, y: 20 },
            { x: 88, y: 45 },
        ];
        return positions[index % positions.length];
    };

    const getAnimationDelay = (index: number) => {
        return `${(index * 0.3) % 3}s`;
    };

    const getAnimationDuration = (index: number) => {
        const durations = [3, 3.5, 4, 4.5, 3.2, 3.8];
        return `${durations[index % durations.length]}s`;
    };

    return (
        <div className="relative h-48 md:h-64 w-full overflow-hidden">
            {tools.map((tool, index) => {
                const pos = getPosition(index, tools.length);
                return (
                    <div
                        key={tool.name}
                        className={`absolute transition-all duration-1000 ${mounted ? "opacity-100" : "opacity-0"
                            }`}
                        style={{
                            left: `${pos.x}%`,
                            top: `${pos.y}%`,
                            transform: "translate(-50%, -50%)",
                            animationDelay: getAnimationDelay(index),
                            animationDuration: getAnimationDuration(index),
                        }}
                    >
                        <div
                            className="group relative"
                            style={{
                                animation: `floatWave ${getAnimationDuration(index)} ease-in-out infinite`,
                                animationDelay: getAnimationDelay(index),
                            }}
                        >
                            {/* Circle background */}
                            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#f4f4f4] flex items-center justify-center hover:bg-[#ecf95a] transition-colors duration-300 cursor-pointer">
                                <div className="text-[#191314] w-6 h-6 md:w-7 md:h-7">
                                    <ToolIcon name={tool.icon} className="w-full h-full" />
                                </div>
                            </div>

                            {/* Tooltip on hover */}
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                                <span className="text-xs font-medium text-[#666666] whitespace-nowrap">
                                    {tool.name}
                                </span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
