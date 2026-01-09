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

// Mobile component with scroll-based highlighting
function MobileToolsGrid({ tools, mounted }: { tools: Tool[]; mounted: boolean }) {
    const [activeRow, setActiveRow] = useState<number | null>(null);
    const [tappedTool, setTappedTool] = useState<number | null>(null);
    const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Group tools into rows of 4
    const rows: Tool[][] = [];
    for (let i = 0; i < tools.length; i += 4) {
        rows.push(tools.slice(i, i + 4));
    }

    // Intersection Observer for scroll-based highlighting
    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        rowRefs.current.forEach((ref, rowIndex) => {
            if (!ref) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                            setActiveRow(rowIndex);
                        }
                    });
                },
                {
                    threshold: 0.5,
                    rootMargin: "-30% 0px -30% 0px", // Focus on center of viewport
                }
            );

            observer.observe(ref);
            observers.push(observer);
        });

        return () => observers.forEach((obs) => obs.disconnect());
    }, [rows.length]);

    const getTooltipPosition = (colIndex: number) => {
        if (colIndex === 0) return "left-0";
        if (colIndex === 3) return "right-0";
        return "left-1/2 -translate-x-1/2";
    };

    const getArrowPosition = (colIndex: number) => {
        if (colIndex === 0) return "left-6";
        if (colIndex === 3) return "right-6";
        return "left-1/2 -translate-x-1/2";
    };

    return (
        <div className="py-4 space-y-4">
            {rows.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    ref={(el) => { rowRefs.current[rowIndex] = el; }}
                    className="grid grid-cols-4 gap-4"
                >
                    {row.map((tool, colIndex) => {
                        const globalIndex = rowIndex * 4 + colIndex;
                        const isRowActive = activeRow === rowIndex;
                        const isTapped = tappedTool === globalIndex;

                        return (
                            <div
                                key={tool.name}
                                className={`relative flex flex-col items-center gap-2 transition-opacity duration-500 ${mounted ? "opacity-100" : "opacity-0"}`}
                                onClick={() => setTappedTool(isTapped ? null : globalIndex)}
                            >
                                <div
                                    className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${isTapped
                                            ? "bg-[#ecf95a] scale-110"
                                            : isRowActive
                                                ? "bg-[#ecf95a] scale-105"
                                                : "bg-[#f4f4f4]"
                                        }`}
                                >
                                    <div className="text-[#191314] w-6 h-6">
                                        <ToolIcon name={tool.icon} className="w-full h-full" />
                                    </div>
                                </div>
                                <span className="text-xs text-[#666666] text-center leading-tight">
                                    {tool.name}
                                </span>

                                {/* Tooltip on tap */}
                                {isTapped && tool.usage && (
                                    <div className={`absolute ${getTooltipPosition(colIndex)} bottom-full mb-2 z-50 animate-fade-in`}>
                                        <div className="bg-[#191314] text-white px-3 py-2 rounded-xl shadow-xl w-[180px]">
                                            <p className="text-xs text-gray-300 leading-relaxed">
                                                {tool.usage}
                                            </p>
                                        </div>
                                        <div className={`absolute ${getArrowPosition(colIndex)} -bottom-2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-[#191314]`} />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
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

    // Mobile: Fixed grid layout with scroll-based highlight
    if (isMobile) {
        return <MobileToolsGrid tools={tools} mounted={mounted} />;
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
