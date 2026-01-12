"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface HeroTool {
    name: string;
    image: string;
    usage: string;
}

const heroTools: HeroTool[] = [
    { name: "Figma", image: "/tools/figma.png", usage: "Design systems and wireframes" },
    { name: "Perplexity", image: "/tools/perplexity.png", usage: "Deep research and pattern discovery" },
    { name: "Claude", image: "/tools/claude.png", usage: "AI-assisted rapid coding" },
    { name: "Cursor", image: "/tools/cursor.png", usage: "Code editor with AI integration" },
    { name: "Antigravity", image: "/tools/antigravity.png", usage: "Vibe coding and rapid iteration" },
    { name: "Notion", image: "/tools/notion.png", usage: "Connect and sync systems" },
    { name: "Vercel", image: "/tools/vercel.png", usage: "Full-stack deployment" },
    { name: "GitHub", image: "/tools/github.png", usage: "Version control and CI/CD" },
    { name: "Supabase", image: "/tools/supabase.png", usage: "Backend, database, and storage" },
];

// Organic scattered positions - like the decorative floating icons
// Each position is carefully placed to avoid overlap with good spacing
interface IconConfig {
    x: number;
    y: number;
    size: "sm" | "md" | "lg";
    animation: "float" | "float-delayed" | "float-slow";
}

const iconConfigs: IconConfig[] = [
    { x: 18, y: 8, size: "md", animation: "float" },
    { x: 55, y: 5, size: "sm", animation: "float-delayed" },
    { x: 85, y: 12, size: "md", animation: "float-slow" },
    { x: 35, y: 28, size: "lg", animation: "float" },
    { x: 72, y: 32, size: "sm", animation: "float-delayed" },
    { x: 12, y: 50, size: "sm", animation: "float-slow" },
    { x: 50, y: 55, size: "md", animation: "float" },
    { x: 82, y: 58, size: "lg", animation: "float-delayed" },
    { x: 30, y: 82, size: "md", animation: "float-slow" },
];

const sizeClasses = {
    sm: "w-9 h-9",
    md: "w-11 h-11",
    lg: "w-12 h-12",
};

const iconSizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
};

// Get tooltip position class based on icon position to prevent overflow
function getTooltipPositionClass(x: number): string {
    if (x < 35) return "left-0";
    if (x > 65) return "right-0";
    return "left-1/2 -translate-x-1/2";
}

function getArrowPositionClass(x: number): string {
    if (x < 35) return "left-5";
    if (x > 65) return "right-5";
    return "left-1/2 -translate-x-1/2";
}

export default function MobileToolsFloating() {
    const [mounted, setMounted] = useState(false);
    const [activeTool, setActiveTool] = useState<number | null>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleTap = (index: number) => {
        setActiveTool(activeTool === index ? null : index);
    };

    return (
        <div className="absolute inset-0">
            {heroTools.map((tool, index) => {
                const config = iconConfigs[index];
                const isActive = activeTool === index;
                const tooltipPosClass = getTooltipPositionClass(config.x);
                const arrowPosClass = getArrowPositionClass(config.x);

                return (
                    <div
                        key={tool.name}
                        className={`absolute transition-opacity duration-500 ${mounted ? "opacity-70" : "opacity-0"
                            } ${isActive ? "z-50 opacity-100" : "z-10"}`}
                        style={{
                            left: `${config.x}%`,
                            top: `${config.y}%`,
                            transform: "translate(-50%, -50%)",
                            transitionDelay: `${index * 80}ms`,
                        }}
                    >
                        <div
                            className={`relative cursor-pointer animate-${config.animation}`}
                            onClick={() => handleTap(index)}
                        >
                            {/* Tool circle - varying sizes */}
                            <div
                                className={`${sizeClasses[config.size]} rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${isActive ? "bg-[#ecf95a] scale-110" : "bg-[#f4f4f4]"
                                    }`}
                            >
                                <div className={`${iconSizeClasses[config.size]} relative`}>
                                    <Image
                                        src={tool.image}
                                        alt={tool.name}
                                        fill
                                        className="object-contain"
                                        sizes="24px"
                                    />
                                </div>
                            </div>

                            {/* Tooltip on tap - smart positioning */}
                            {isActive && (
                                <div className={`absolute ${tooltipPosClass} bottom-full mb-2 z-50 animate-fade-in`}>
                                    <div className="bg-[#191314] text-white px-3 py-2 rounded-xl shadow-xl w-[150px]">
                                        <p className="font-semibold text-xs mb-0.5">{tool.name}</p>
                                        <p className="text-[10px] text-gray-300 leading-relaxed">{tool.usage}</p>
                                    </div>
                                    <div className={`absolute ${arrowPosClass} -bottom-1.5 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-[#191314]`} />
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
