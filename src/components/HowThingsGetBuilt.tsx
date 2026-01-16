"use client";

import { useEffect, useState, useRef } from "react";

interface ProcessStep {
    label: string;
    title: string;
    body: string;
}

interface HowThingsGetBuiltProps {
    steps?: ProcessStep[];
}

const defaultSteps: ProcessStep[] = [
    {
        label: "Step 1",
        title: "Find the friction",
        body: "Map what's breaking: dropped tasks, messy data, confusing flows.",
    },
    {
        label: "Step 2",
        title: "Design the system",
        body: "Sketch flows that fit how people work, and choose tools that connect naturally.",
    },
    {
        label: "Step 3",
        title: "Ship in loops",
        body: "Build small, test with real users, and iterate fast.",
    },
    {
        label: "Step 4",
        title: "Document the patterns",
        body: "Write down what worked so the next build starts smarter.",
    },
];

export default function HowThingsGetBuilt({ steps = defaultSteps }: HowThingsGetBuiltProps) {
    const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Scroll handler for mobile highlight effect
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

                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    if (distance < closestDistance) {
                        closestDistance = distance;
                        closestIndex = index;
                    }
                }
            });

            if (closestDistance < window.innerHeight * 0.35) {
                setHighlightedIndex(closestIndex);
            } else {
                setHighlightedIndex(null);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMobile]);

    return (
        <section className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <h2 className="text-3xl md:text-4xl font-bold text-[#191314] mb-4">
                    How Himo works
                </h2>
                <p className="text-[#666666] text-base md:text-lg leading-relaxed mb-12 max-w-3xl">
                    Build from real problems, not assumptions. Design systems people actually use. Ship small, learn fast, and document what works.
                </p>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {steps.map((step, index) => {
                        const isHighlighted = isMobile && highlightedIndex === index;

                        return (
                            <div
                                key={step.label}
                                ref={(el) => { cardRefs.current[index] = el; }}
                                className={`rounded-2xl p-4 h-full flex flex-col relative transition-all duration-300 group ${isHighlighted
                                    ? "bg-[#ecf95a] scale-[1.02]"
                                    : "bg-[#f4f4f4] hover:bg-[#ecf95a]"
                                    }`}
                            >
                                {/* Badge/Label */}
                                <span
                                    className={`inline-flex self-start items-center px-2.5 py-1 rounded-full text-xs font-medium mb-3 transition-colors ${isHighlighted
                                        ? "bg-[#191314] text-white"
                                        : "bg-white text-[#191314] group-hover:bg-[#191314] group-hover:text-white"
                                        }`}
                                >
                                    {step.label}
                                </span>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-[#191314] mb-2">
                                    {step.title}
                                </h3>

                                {/* Body */}
                                <p className="text-[#666666] text-sm leading-relaxed flex-grow">
                                    {step.body}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
