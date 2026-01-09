"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

interface Project {
    id: string;
    title: string;
    description: string;
    url: string;
}

interface ProjectsGridProps {
    projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
    const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Single scroll handler to find the most-centered card
    useEffect(() => {
        if (!isMobile) return;

        const handleScroll = () => {
            const viewportCenter = window.innerHeight / 2;
            let closestIndex: number | null = null;
            let closestDistance = Infinity;

            cardRefs.current.forEach((ref, index) => {
                if (!ref) return;
                const rect = ref.getBoundingClientRect();
                const cardCenter = rect.top + rect.height / 2;
                const distance = Math.abs(cardCenter - viewportCenter);

                // Only consider cards that are at least partially visible
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    if (distance < closestDistance) {
                        closestDistance = distance;
                        closestIndex = index;
                    }
                }
            });

            // Only highlight if card is reasonably close to center
            if (closestDistance < window.innerHeight * 0.35) {
                setHighlightedIndex(closestIndex);
            } else {
                setHighlightedIndex(null);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Initial check

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMobile]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((project, index) => {
                const isHighlighted = isMobile && highlightedIndex === index;
                const isExternal = project.url.startsWith("http");

                const CardContent = (
                    <div
                        ref={(el) => { cardRefs.current[index] = el; }}
                        className={`rounded-2xl p-5 h-full flex flex-col relative min-h-[140px] transition-all duration-300 group ${isHighlighted ? "bg-[#ecf95a] scale-[1.02]" : "bg-[#f4f4f4] hover:bg-[#ecf95a]"
                            }`}
                    >
                        <h3 className="text-lg font-bold text-[#191314] mb-2">{project.title}</h3>
                        <p className="text-[#666666] text-sm leading-relaxed pr-8 flex-grow">{project.description}</p>
                        <div className={`absolute bottom-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isHighlighted ? "bg-[#191314]" : "bg-white"
                            }`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className={`w-4 h-4 transition-colors ${isHighlighted ? "text-white" : "text-[#191314]"}`}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </div>
                    </div>
                );

                if (isExternal) {
                    return (
                        <a key={project.id} href={project.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                            {CardContent}
                        </a>
                    );
                }

                return (
                    <Link key={project.id} href={project.url} className="block h-full">
                        {CardContent}
                    </Link>
                );
            })}
        </div>
    );
}
