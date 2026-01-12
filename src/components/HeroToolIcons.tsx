"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

interface HeroTool {
    name: string;
    image: string;
    usage: string;
}

interface Position {
    x: number;
    y: number;
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

// Desktop: tighter cluster on the RIGHT side of the page
const desktopPositions: Position[] = [
    { x: 58, y: 18 },   // Row 1
    { x: 70, y: 22 },
    { x: 82, y: 16 },
    { x: 55, y: 38 },   // Row 2
    { x: 68, y: 42 },
    { x: 80, y: 35 },
    { x: 60, y: 58 },   // Row 3
    { x: 72, y: 62 },
    { x: 84, y: 55 },
];

// Mobile: scattered positions for floating effect
const mobilePositions: Position[] = [
    { x: 15, y: 8 },
    { x: 75, y: 12 },
    { x: 45, y: 20 },
    { x: 85, y: 35 },
    { x: 20, y: 45 },
    { x: 60, y: 50 },
    { x: 35, y: 65 },
    { x: 80, y: 70 },
    { x: 55, y: 82 },
];

export default function HeroToolIcons() {
    const [mounted, setMounted] = useState(false);
    const [positions, setPositions] = useState<Record<number, Position>>({});
    const [dragging, setDragging] = useState<number | null>(null);
    const [activeTool, setActiveTool] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        setMounted(true);
        // Initialize positions based on screen size
        const initial: Record<number, Position> = {};
        const posArray = isMobile ? mobilePositions : desktopPositions;
        heroTools.forEach((_, index) => {
            initial[index] = posArray[index];
        });
        setPositions(initial);
    }, [isMobile]);

    const handleMouseDown = (index: number, e: React.MouseEvent) => {
        if (isMobile) return;
        e.preventDefault();
        setDragging(index);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (dragging === null || !containerRef.current || isMobile) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        setPositions(prev => ({
            ...prev,
            [dragging]: {
                x: Math.max(5, Math.min(95, x)),
                y: Math.max(5, Math.min(95, y))
            }
        }));
    };

    const handleEnd = () => {
        setDragging(null);
    };

    const handleInteraction = (index: number) => {
        // Toggle tooltip on click (for both mobile tap and desktop click)
        setActiveTool(activeTool === index ? null : index);
    };

    const getAnimationDelay = (index: number) => `${(index * 0.4) % 3}s`;
    const getAnimationDuration = (index: number) => {
        const durations = [3, 3.5, 4, 4.5, 3.2, 3.8, 3.3, 4.2, 3.7];
        return `${durations[index % durations.length]}s`;
    };

    const posArray = isMobile ? mobilePositions : desktopPositions;

    return (
        <div
            ref={containerRef}
            className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden select-none"
            onMouseMove={handleMouseMove}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
        >
            {heroTools.map((tool, index) => {
                const pos = positions[index] || posArray[index];
                const isDragging = dragging === index;
                const isActive = activeTool === index;

                return (
                    <div
                        key={tool.name}
                        className={`absolute pointer-events-auto transition-opacity duration-500 ${mounted ? "opacity-70 hover:opacity-100" : "opacity-0"
                            } ${isDragging || isActive ? "z-50 opacity-100" : "z-10"}`}
                        style={{
                            left: `${pos.x}%`,
                            top: `${pos.y}%`,
                            transform: "translate(-50%, -50%)",
                            transitionDelay: `${index * 80}ms`,
                        }}
                    >
                        <div
                            className={`relative ${!isMobile ? "cursor-grab active:cursor-grabbing" : "cursor-pointer"} ${isDragging ? "" : "animate-float-tool"
                                }`}
                            style={{
                                animationDelay: isDragging ? "0s" : getAnimationDelay(index),
                                animationDuration: isDragging ? "0s" : getAnimationDuration(index),
                            }}
                            onMouseDown={(e) => handleMouseDown(index, e)}
                            onMouseEnter={() => !isMobile && setActiveTool(index)}
                            onMouseLeave={() => !isMobile && setActiveTool(null)}
                            onClick={() => handleInteraction(index)}
                        >
                            {/* Tool circle */}
                            <div
                                className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${isDragging
                                    ? "bg-[#ecf95a] scale-110 shadow-lg"
                                    : isActive
                                        ? "bg-[#ecf95a] scale-105"
                                        : "bg-[#f4f4f4]"
                                    }`}
                            >
                                <div className="w-6 h-6 md:w-7 md:h-7 relative">
                                    <Image
                                        src={tool.image}
                                        alt={tool.name}
                                        fill
                                        className="object-contain"
                                        sizes="28px"
                                    />
                                </div>
                            </div>

                            {/* Tooltip - shows on hover (desktop) or tap (mobile) */}
                            {isActive && !isDragging && (
                                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 z-50 animate-fade-in pointer-events-none">
                                    <div className="bg-[#191314] text-white px-3 py-2 rounded-xl shadow-xl min-w-[180px] max-w-[220px]">
                                        <p className="font-semibold text-sm mb-0.5">{tool.name}</p>
                                        <p className="text-xs text-gray-300 leading-relaxed">{tool.usage}</p>
                                    </div>
                                    {/* Arrow */}
                                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-[#191314]" />
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
