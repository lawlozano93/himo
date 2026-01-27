"use client";

import { WobbleCard } from "@/components/ui/wobble-card";
import Link from "next/link";

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 flex flex-col justify-center">
            <div className="max-w-6xl mx-auto w-full">
                <h2 className="text-3xl md:text-5xl font-bold text-[#ECF95A] mb-6">
                    Current Learning Focus
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                    {/* App Experiments - Large Card */}
                    <Link href="/projects/app-experiments" className="lg:col-span-2 h-full">
                        <WobbleCard
                            containerClassName="bg-white h-full"
                            className="flex flex-col justify-start h-full p-6 md:p-8"
                        >
                            <span className="inline-flex self-start items-center px-3 py-1.5 rounded-full text-xs font-medium bg-[#ecf95a] text-[#191314] mb-2">
                                Case Studies
                            </span>
                            <h3 className="text-2xl md:text-4xl font-bold text-[#191314] mb-2">
                                App Experiments
                            </h3>
                            <p className="text-[#191314]/80 text-base md:text-xl max-w-lg leading-relaxed">
                                Building small tools around problems that feel like they deserve a better solution, then testing them in the wild and refining based on what actually gets used.
                            </p>
                        </WobbleCard>
                    </Link>

                    {/* Notion Systems - Side Card */}
                    <Link href="/projects/notion-systems" className="h-full">
                        <WobbleCard
                            containerClassName="bg-[#ecf95a] h-full"
                            className="flex flex-col justify-start h-full p-6 md:p-8"
                        >
                            <span className="inline-flex self-start items-center px-3 py-1.5 rounded-full text-xs font-medium bg-[#191314] text-white mb-2">
                                Systems
                            </span>
                            <h3 className="text-2xl md:text-3xl font-bold text-[#191314] mb-2">
                                Notion Systems
                            </h3>
                            <p className="text-[#191314]/80 text-base md:text-lg leading-relaxed">
                                Exploring Notion as a central layer for operations, connecting personal and work setups into one place where projects, handoffs, and experiments are easier to run.
                            </p>
                        </WobbleCard>
                    </Link>
                </div>
            </div>
        </section>
    );
}
