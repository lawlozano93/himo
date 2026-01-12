"use client";

import { useState } from "react";
import Image from "next/image";

interface HeroTool {
    name: string;
    image: string;
    usage: string;
}

const heroTools: HeroTool[] = [
    { name: "Antigravity", image: "/tools/antigravity.png", usage: "AI-powered coding assistant for complex development tasks" },
    { name: "Notion", image: "/tools/notion.png", usage: "Project management, documentation, and knowledge base" },
    { name: "Perplexity", image: "/tools/perplexity.png", usage: "Research and quick answers with citations" },
    { name: "Supabase", image: "/tools/supabase.png", usage: "Backend-as-a-service for databases and auth" },
    { name: "Vercel", image: "/tools/vercel.png", usage: "Deployment and hosting for web projects" },
    { name: "GitHub", image: "/tools/github.png", usage: "Version control and collaboration" },
    { name: "Figma", image: "/tools/figma.png", usage: "UI/UX design and prototyping" },
    { name: "Cursor", image: "/tools/cursor.png", usage: "AI-first code editor for rapid development" },
    { name: "Claude", image: "/tools/claude.png", usage: "Strategic thinking, writing, and code review partner" },
];

export default function MobileToolsGrid() {
    const [activeTool, setActiveTool] = useState<number | null>(null);

    const handleTap = (index: number) => {
        setActiveTool(activeTool === index ? null : index);
    };

    return (
        <div className="flex flex-wrap gap-3 justify-start">
            {heroTools.map((tool, index) => {
                const isActive = activeTool === index;

                return (
                    <div key={tool.name} className="relative">
                        <div
                            className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${isActive ? "bg-[#ecf95a] scale-105" : "bg-[#f4f4f4]"
                                }`}
                            onClick={() => handleTap(index)}
                        >
                            <div className="w-5 h-5 relative">
                                <Image
                                    src={tool.image}
                                    alt={tool.name}
                                    fill
                                    className="object-contain"
                                    sizes="20px"
                                />
                            </div>
                        </div>

                        {/* Tooltip on tap */}
                        {isActive && (
                            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 z-50 animate-fade-in">
                                <div className="bg-[#191314] text-white px-3 py-2 rounded-xl shadow-xl min-w-[160px] max-w-[200px]">
                                    <p className="font-semibold text-sm mb-0.5">{tool.name}</p>
                                    <p className="text-xs text-gray-300 leading-relaxed">{tool.usage}</p>
                                </div>
                                <div className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-[#191314]" />
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
