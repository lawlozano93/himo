"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface CometCardProps {
    children: React.ReactNode;
    className?: string;
}

export function CometCard({ children, className }: CometCardProps) {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();

        // For glow effect
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });

        // For 3D tilt effect
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const rotateX = ((mouseY - centerY) / centerY) * -15;
        const rotateY = ((mouseX - centerX) / centerX) * 15;

        setTransform({ rotateX, rotateY });
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
        setTransform({ rotateX: 0, rotateY: 0 });
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={cn("relative", className)}
            style={{
                perspective: "1000px",
            }}
        >
            <div
                className="transition-transform duration-200 ease-out"
                style={{
                    transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
                    transformStyle: "preserve-3d",
                }}
            >
                {/* Glow effect */}
                <div
                    className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300"
                    style={{
                        opacity,
                        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(236, 249, 90, 0.25), transparent 40%)`,
                    }}
                />
                {children}
            </div>
        </div>
    );
}
