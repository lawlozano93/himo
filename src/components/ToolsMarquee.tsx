"use client";

import { useEffect, useState, useRef, useCallback } from "react";
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

// Extend DeviceOrientationEvent for iOS permission API
interface DeviceOrientationEventiOS extends DeviceOrientationEvent {
    requestPermission?: () => Promise<"granted" | "denied">;
}

export default function ToolsMarquee({ tools }: ToolsMarqueeProps) {
    const [mounted, setMounted] = useState(false);
    const [positions, setPositions] = useState<Record<number, Position>>({});
    const [basePositions, setBasePositions] = useState<Record<number, Position>>({});
    const [dragging, setDragging] = useState<number | null>(null);
    const [hoveredTool, setHoveredTool] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [gyroEnabled, setGyroEnabled] = useState(false);
    const [needsPermission, setNeedsPermission] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const gyroOffset = useRef({ x: 0, y: 0 });

    // Initial scattered positions
    const getInitialPosition = useCallback((index: number): Position => {
        const basePos = [
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
        return basePos[index % basePos.length];
    }, []);

    // Check if device is mobile and supports gyroscope
    useEffect(() => {
        const checkMobile = () => {
            const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
            const isMobileWidth = window.innerWidth < 768;
            setIsMobile(isTouchDevice && isMobileWidth);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        // Check if iOS requires permission
        const DeviceOrientationEventIOS = DeviceOrientationEvent as unknown as DeviceOrientationEventiOS;
        if (typeof DeviceOrientationEventIOS.requestPermission === "function") {
            setNeedsPermission(true);
        }

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        setMounted(true);
        // Initialize positions
        const initialPositions: Record<number, Position> = {};
        tools.forEach((_, index) => {
            initialPositions[index] = getInitialPosition(index);
        });
        setPositions(initialPositions);
        setBasePositions(initialPositions);
    }, [tools, getInitialPosition]);

    // Handle gyroscope orientation
    useEffect(() => {
        if (!isMobile || !gyroEnabled) return;

        const handleOrientation = (event: DeviceOrientationEvent) => {
            const gamma = event.gamma || 0; // Left-right tilt (-90 to 90)
            const beta = event.beta || 0;   // Front-back tilt (-180 to 180)

            // Map tilt to offset (-15% to +15%)
            const xOffset = (gamma / 90) * 15;
            const yOffset = ((beta - 45) / 45) * 15; // Center around 45 degrees (natural holding angle)

            gyroOffset.current = { x: xOffset, y: yOffset };

            // Update positions with smooth interpolation
            setPositions(prev => {
                const newPositions: Record<number, Position> = {};
                Object.keys(basePositions).forEach(key => {
                    const index = parseInt(key);
                    const base = basePositions[index];
                    if (base) {
                        // Add slight variation per icon for more organic movement
                        const variation = 1 + (index % 5) * 0.1;
                        newPositions[index] = {
                            x: Math.max(5, Math.min(95, base.x + xOffset * variation)),
                            y: Math.max(10, Math.min(90, base.y + yOffset * variation))
                        };
                    }
                });
                return newPositions;
            });
        };

        window.addEventListener("deviceorientation", handleOrientation);
        return () => window.removeEventListener("deviceorientation", handleOrientation);
    }, [isMobile, gyroEnabled, basePositions]);

    // Request iOS permission
    const requestGyroPermission = async () => {
        const DeviceOrientationEventIOS = DeviceOrientationEvent as unknown as DeviceOrientationEventiOS;
        if (typeof DeviceOrientationEventIOS.requestPermission === "function") {
            try {
                const permission = await DeviceOrientationEventIOS.requestPermission();
                if (permission === "granted") {
                    setGyroEnabled(true);
                    setNeedsPermission(false);
                }
            } catch (error) {
                console.error("Gyroscope permission denied:", error);
            }
        } else {
            // Android or older iOS - no permission needed
            setGyroEnabled(true);
        }
    };

    // Auto-enable gyro on Android (no permission needed)
    useEffect(() => {
        if (isMobile && !needsPermission && !gyroEnabled) {
            setGyroEnabled(true);
        }
    }, [isMobile, needsPermission, gyroEnabled]);

    const handleMouseDown = (index: number, e: React.MouseEvent) => {
        e.preventDefault();
        setDragging(index);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (dragging === null || !containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        const newPos = {
            x: Math.max(5, Math.min(95, x)),
            y: Math.max(10, Math.min(90, y))
        };

        setPositions(prev => ({
            ...prev,
            [dragging]: newPos
        }));

        // Also update base position for gyro
        setBasePositions(prev => ({
            ...prev,
            [dragging]: newPos
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

    return (
        <div
            ref={containerRef}
            className="relative h-64 md:h-80 w-full overflow-visible select-none"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            {/* Enable Motion button for iOS */}
            {isMobile && needsPermission && !gyroEnabled && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50">
                    <button
                        onClick={requestGyroPermission}
                        className="bg-[#ecf95a] text-[#191314] px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15" />
                        </svg>
                        Enable Motion
                    </button>
                </div>
            )}

            {tools.map((tool, index) => {
                const pos = positions[index] || getInitialPosition(index);
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
                            transition: gyroEnabled && !isDragging ? "left 0.15s ease-out, top 0.15s ease-out" : undefined,
                        }}
                    >
                        <div
                            className={`relative cursor-grab active:cursor-grabbing ${isDragging || gyroEnabled ? "" : "animate-float-tool"
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
                            <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-300 ${isDragging
                                ? "bg-[#ecf95a] scale-110 shadow-lg"
                                : isHovered
                                    ? "bg-[#ecf95a] scale-105"
                                    : "bg-[#f4f4f4]"
                                }`}>
                                <div className="text-[#191314] w-6 h-6 md:w-7 md:h-7">
                                    <ToolIcon name={tool.icon} className="w-full h-full" />
                                </div>
                            </div>

                            {/* Tooltip - shows on hover (desktop only) */}
                            {isHovered && !isDragging && !isMobile && (
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
