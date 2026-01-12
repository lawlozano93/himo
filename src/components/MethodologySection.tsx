"use client";

interface MethodologyCard {
    title: string;
    subtitle: string;
    items: { tool: string; description: string }[];
}

const methodologyCards: MethodologyCard[] = [
    {
        title: "Plan",
        subtitle: "PM Mindset",
        items: [
            { tool: "Perplexity", description: "Research with Perplexity" },
            { tool: "Notion", description: "Document vision in Notion" },
            { tool: "", description: "Define architecture & flows" },
        ],
    },
    {
        title: "Design",
        subtitle: "Systems",
        items: [
            { tool: "Perplexity", description: "Research phase (Perplexity)" },
            { tool: "Notion", description: "System design (Notion)" },
            { tool: "Figma", description: "UI representation (Figma)" },
        ],
    },
    {
        title: "Build",
        subtitle: "Dev with AI",
        items: [
            { tool: "Antigravity", description: "Rapid iteration (Antigravity+Claude)" },
            { tool: "GitHub", description: "Version control (GitHub)" },
            { tool: "Vercel", description: "Deploy (Vercel+Supabase)" },
            { tool: "Notion", description: "Document in Notion" },
        ],
    },
];

export default function MethodologySection() {
    return (
        <section className="py-24 px-6 relative">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <h2 className="text-3xl md:text-4xl font-bold text-[#191314] mb-2">
                    How This Works
                </h2>
                <p className="text-[#666666] mb-12">
                    Plan. Design systems. Build with AI.
                </p>

                {/* 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {methodologyCards.map((card) => (
                        <div
                            key={card.title}
                            className="bg-[#f4f4f4] rounded-2xl p-6 hover:bg-[#fafafa] transition-colors"
                        >
                            {/* Card Header */}
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-[#191314]">
                                    {card.title}
                                </h3>
                                <span className="text-sm text-[#666666]">
                                    {card.subtitle}
                                </span>
                            </div>

                            {/* Card Items */}
                            <ul className="space-y-3">
                                {card.items.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-2 text-sm text-[#666666]"
                                    >
                                        <span className="text-[#191314] mt-1">•</span>
                                        <span>{item.description}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
