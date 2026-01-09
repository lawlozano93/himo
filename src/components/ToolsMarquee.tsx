"use client";

import { useEffect, useState, useRef } from "react";
import { ToolIcon } from "./ToolIcons";

interface Tool {
    name: string;
    icon: string;
    usage?: string;
}

interface ToolsMarqueeProps {
    tools: Tool[];
}

interface Position {
    x: number;
    y: number;
}

export default function ToolsMarquee({ tools }: ToolsMarqueeProps) {
    const [mounted, setMounted] = useState(false);
    const [positions, setPositions] = useState<Record<number, Position>>({});
    const [dragging, setDragging] = useState<number | null>(null);
    const [hoveredTool, setHoveredTool] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Scattered positions for desktop
    const getDesktopPosition = (index: number): Position => {
        const basePositions = [
            { x: 5, y: 55 },
            { x: 13, y: 30 },
            { x: 22, y: 60 },
            { x: 30, y: 25 },
            { x: 38, y: 55 },
            { x: 46, y: 35 },
            { x: 54, y: 60 },
            { x: 62, y: 28 },
            { x: 70, y: 55 },
            { x: 78, y: 35 },
            { x: 86, y: 20 },
            { x: 94, y: 50 },
        ];
        return basePositions[index % basePositions.length];
    };

    // Check if device is mobile
    useEffect(() => {
        const checkMobile = () => {
            const isMobileWidth = window.innerWidth < 768;
            setIsMobile(isMobileWidth);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        setMounted(true);
        // Initialize positions for desktop
        const initialPositions: Record<number, Position> = {};
        tools.forEach((_, index) => {
            initialPositions[index] = getDesktopPosition(index);
        });
        setPositions(initialPositions);
    }, [tools]);

    const handleMouseDown = (index: number, e: React.MouseEvent) => {
        if (isMobile) return; // No drag on mobile
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
                y: Math.max(10, Math.min(90, y))
            }
        }));
    };

    const handleMouseUp = () => {
        setDragging(null);
    };

    const getAnimationDelay = (index: number) => `${(index * 0.4) % 3}s`;
    const getAnimationDuration = (index: number) => {
        const durations = [3, 3.5, 4, 4.5, 3.2, 3.8];
        return `${durations[index % durations.length]}s`;
    };

    // Mobile: Fixed grid layout
    if (isMobile) {
        return (
            <div className="grid grid-cols-4 gap-4 py-4">
                {tools.map((tool) => (
                    <div
                        key={tool.name}
                        className={`flex flex-col items-center gap-2 transition-opacity duration-500 ${mounted ? "opacity-100" : "opacity-0"}`}
                    >
                        <div className="w-14 h-14 rounded-full bg-[#f4f4f4] flex items-center justify-center">
                            <div className="text-[#191314] w-6 h-6">
                                <ToolIcon name={tool.icon} className="w-full h-full" />
                            </div>
                        </div>
                        <span className="text-xs text-[#666666] text-center leading-tight">
                            {tool.name}
                        </span>
                    </div>
                ))}
            </div>
        );
    }

    // Desktop: Scattered floating layout with drag
    return (
        <div
            ref={containerRef}
            className="relative h-80 w-full overflow-visible select-none"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            {tools.map((tool, index) => {
                const pos = positions[index] || getDesktopPosition(index);
                const isDragging = dragging === index;
                const isHovered = hoveredTool === index;

                return (
                    <div
                        key={tool.name}
                        className={`absolute transition-opacity duration-500 ${mounted ? "opacity-100" : "opacity-0"
                            } ${isDragging ? "z-50" : "z-10"}`}
                        style={{
                            left: `${pos.x}%`,
                            top: `${pos.y}%`,
                            transform: "translate(-50%, -50%)",
                        }}
                    >
                        <div
                            className={`relative cursor-grab active:cursor-grabbing ${isDragging ? "" : "animate-float-tool"
                                }`}
                            style={{
                                animationDelay: isDragging ? "0s" : getAnimationDelay(index),
                                animationDuration: isDragging ? "0s" : getAnimationDuration(index),
                            }}
                            onMouseDown={(e) => handleMouseDown(index, e)}
                            onMouseEnter={() => setHoveredTool(index)}
                            onMouseLeave={() => setHoveredTool(null)}
                        >
                            {/* Tool circle */}
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${isDragging
                                ? "bg-[#ecf95a] scale-110 shadow-lg"
                                : isHovered
                                    ? "bg-[#ecf95a] scale-105"
                                    : "bg-[#f4f4f4]"
                                }`}>
                                <div className="text-[#191314] w-7 h-7">
                                    <ToolIcon name={tool.icon} className="w-full h-full" />
                                </div>
                            </div>

                            {/* Tooltip - shows on hover */}
                            {isHovered && !isDragging && (
                                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 z-50 animate-fade-in">
                                    <div className="bg-[#191314] text-white px-4 py-3 rounded-xl shadow-xl min-w-[200px] max-w-[280px]">
                                        <p className="font-semibold text-sm mb-1">{tool.name}</p>
                                        {tool.usage && (
                                            <p className="text-xs text-gray-300 leading-relaxed">
                                                {tool.usage}
                                            </p>
                                        )}
                                    </div>
                                    {/* Arrow */}
                                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-[#191314]" />
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
