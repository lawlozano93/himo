"use client";

import Link from "next/link";

interface ThinkingTag {
    label: string;
}

const thinkingTags: ThinkingTag[] = [
    { label: "Plan Obsessively (But Ship Fast)" },
    { label: "Design Is System Thinking" },
    { label: "Build with Direction & Safety" },
    { label: "Real-World Applied" },
];

export default function ThinkingSection() {
    return (
        <section className="py-24 px-6 relative">
            <div className="max-w-6xl mx-auto">
                {/* Short Insights */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#191314] mb-2">
                        Thinking on Rapid Development
                    </h2>
                    <p className="text-[#666666] mb-8">Short Insights</p>

                    <div className="flex flex-wrap gap-3">
                        {thinkingTags.map((tag) => (
                            <span
                                key={tag.label}
                                className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium bg-[#f4f4f4] text-[#191314] hover:bg-[#ecf95a] transition-all cursor-default border border-transparent hover:border-[#191314]"
                            >
                                {tag.label}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Deeper Essays */}
                <div>
                    <h3 className="text-xl font-bold text-[#191314] mb-2">
                        Personal Development & Deeper Essays
                    </h3>
                    <p className="text-[#666666] mb-4">
                        Voice in the Noise
                    </p>
                    <p className="text-sm text-[#666666] mb-6">
                        Essays on philosophy, learning in public, building for growth
                    </p>
                    <Link
                        href="https://voiceinthenoise.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#191314] font-medium hover:text-[#666666] transition-colors group"
                    >
                        <span>Read more on voiceinthenoise.com</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
