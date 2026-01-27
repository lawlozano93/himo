"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ProcessStep {
    label: string;
    title: string;
    body: string;
}

interface ThoughtProcessProps {
    steps?: ProcessStep[];
}

const defaultSteps: ProcessStep[] = [
    {
        label: "Step 1",
        title: "Find the friction",
        body: "Map what is breaking: dropped tasks, messy data, confusing flows, and slow handoffs.",
    },
    {
        label: "Step 2",
        title: "Design the system",
        body: "Model the workflow, choose tools that connect naturally, and define the smallest meaningful change.",
    },
    {
        label: "Step 3",
        title: "Ship in loops",
        body: "Release small versions, test with real usage, and adjust quickly based on what actually happens.",
    },
    {
        label: "Step 4",
        title: "Capture the pattern",
        body: "Turn working loops into reusable plays: prompts, workflows, and templates that speed up the next build.",
    },
];

export default function ThoughtProcess({ steps = defaultSteps }: ThoughtProcessProps) {
    const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Scroll animation logic
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 0.9], [0, 1, 1, 0]);

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
        <section ref={containerRef} className="relative min-h-screen py-24 px-6 flex flex-col justify-center">
            <div className="max-w-6xl mx-auto w-full">
                {/* Section Header */}
                <motion.div
                    style={{ opacity }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-[#191314] mb-6">
                        Build–learn loop
                    </h2>
                    <p className="text-[#191314]/80 text-lg md:text-xl leading-relaxed mb-16 max-w-3xl">
                        Work starts from real friction, moves through small shipped systems, and compounds by capturing what works.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => {
                        const isHighlighted = isMobile && highlightedIndex === index;

                        return (
                            <motion.div
                                key={step.label}
                                ref={(el) => { cardRefs.current[index] = el; }}
                                style={{ opacity }}
                                className={`rounded-3xl p-6 h-full flex flex-col relative transition-all duration-300 group ${isHighlighted
                                    ? "bg-white scale-[1.02]"
                                    : "bg-[#191314] hover:bg-white"
                                    }`}
                            >
                                {/* Badge/Label */}
                                <span
                                    className={`inline-flex self-start items-center px-3 py-1.5 rounded-full text-xs font-medium mb-4 transition-colors ${isHighlighted
                                        ? "bg-[#191314] text-white"
                                        : "bg-white text-[#191314] group-hover:bg-[#191314] group-hover:text-white"
                                        }`}
                                >
                                    {step.label}
                                </span>

                                {/* Title */}
                                <h3 className={`text-lg font-bold mb-3 transition-colors ${isHighlighted
                                    ? "text-[#191314]"
                                    : "text-white group-hover:text-[#191314]"
                                    }`}>
                                    {step.title}
                                </h3>

                                {/* Body */}
                                <p className={`text-sm leading-relaxed flex-grow transition-colors ${isHighlighted
                                    ? "text-[#191314]/70"
                                    : "text-neutral-400 group-hover:text-[#191314]/70"
                                    }`}>
                                    {step.body}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
