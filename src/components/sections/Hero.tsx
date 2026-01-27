"use client";

import { FlipWords } from "@/components/ui/flip-words";
import FloatingIcons from "@/components/FloatingIcons";
import HeroToolIcons from "@/components/HeroToolIcons";
import MobileToolsFloating from "@/components/MobileToolsFloating";
import Link from "next/link";

const flipWords = ["Design", "Research", "Build", "Connect", "Deploy"];

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 pt-20 pb-12 relative overflow-hidden">
            <div className="max-w-6xl mx-auto w-full z-10">
                {/* Massive "Himo" text */}
                <h1 className="text-massive text-[#191314] animate-fade-in">
                    himo
                </h1>

                {/* Meaning + Description */}
                <div className="mt-6 max-w-xl animate-fade-in-delayed">
                    <p className="text-lg text-[#666666] mb-4">
                        <span className="italic">means Create in Waray</span>
                    </p>
                    <p className="text-xl md:text-2xl text-[#191314] leading-relaxed mb-2">
                        Work curated and built by{" "}
                        <span className="relative group inline-block">
                            <Link
                                href="/experience"
                                className="underline decoration-[#ecf95a] decoration-4 underline-offset-4 hover:bg-[#ecf95a] transition-colors px-1"
                            >
                                Lao
                            </Link>
                            {/* Hover tooltip */}
                            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1.5 bg-[#191314] text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                Learn about the human behind himo
                                <span className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-[#191314]"></span>
                            </span>
                        </span>.
                    </p>

                    {/* FlipWords tagline */}
                    <div className="text-lg text-[#666666] mb-6 flex flex-wrap items-center gap-1">
                        <FlipWords
                            words={flipWords}
                            duration={2500}
                            className="!text-[#191314] font-semibold !px-0"
                        />
                        <span>rapidly with AI, connect systems, deploy full-stack, centralize operations.</span>
                    </div>

                    {/* Status pill with pulsating dot */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#191314] text-white text-sm">
                        <span className="relative flex h-2.5 w-2.5 shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ecf95a] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ecf95a]"></span>
                        </span>
                        <span className="hidden md:inline">Currently Customer Success Manager @ ThisFish</span>
                        <span className="md:hidden">Currently CSM @ ThisFish</span>
                    </div>

                    {/* Mobile Tools Floating - shows only on mobile, below status badge */}
                    <div className="md:hidden relative h-64 mt-4">
                        <MobileToolsFloating />
                    </div>
                </div>
            </div>

            {/* Floating Icons */}
            <FloatingIcons />

            {/* Hero Tool Icons - draggable tools showcase */}
            <HeroToolIcons />
        </section>
    );
}
