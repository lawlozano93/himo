import Link from "next/link";
import SubtlePattern from "@/components/SubtlePattern";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Notion Systems | Himo",
    description: "Building unified workspaces in Notion. From fragmented tools to single source of truth, for work and life.",
};

// The fragmentation problem (real example)
const fragmentedTools = [
    { tool: "Linear", purpose: "Project management" },
    { tool: "Google Docs/Sheets", purpose: "Project artifacts" },
    { tool: "Outline", purpose: "Wiki & documentation" },
    { tool: "Slack", purpose: "Internal notes & decisions" },
];

// What happens with fragmentation
const fragmentationProblems = [
    "Context scattered across 4+ tabs",
    "Decisions lost in chat history",
    "Onboarding takes 2+ weeks",
    "\"Where's that doc?\" every day",
    "System collapses as team scales",
];

// The approach
const approach = [
    {
        step: "1",
        title: "Identify the Friction",
        description: "What's actually slowing things down? Where does info get lost?",
    },
    {
        step: "2",
        title: "Design the Architecture",
        description: "Map out databases, relationships, and views that fit the workflow",
    },
    {
        step: "3",
        title: "Build Incrementally",
        description: "Start with core system, add complexity only when needed",
    },
    {
        step: "4",
        title: "Iterate Based on Use",
        description: "Real usage reveals what works. Adjust. Repeat.",
    },
];

// Use cases (work + personal)
const useCases = [
    {
        category: "For Work",
        examples: [
            "Customer lifecycle tracking",
            "Project & task management",
            "Team wikis & knowledge bases",
            "Meeting notes & decisions log",
            "Automations with Zapier/Make",
        ],
    },
    {
        category: "For Personal",
        examples: [
            "Goal tracking & reviews",
            "Personal knowledge management",
            "Habit & routine systems",
            "Finance & budget tracking",
            "Content creation workflows",
        ],
    },
];

// Coming soon templates
const comingSoonTemplates = [
    {
        title: "Customer Success Hub",
        description: "End-to-end customer lifecycle from lead to renewal",
        status: "Coming Soon",
    },
    {
        title: "Startup Ops Kit",
        description: "Everything a small team needs: tasks, docs, decisions, metrics",
        status: "Coming Soon",
    },
    {
        title: "Personal Dashboard",
        description: "Goals, habits, finances, and knowledge in one place",
        status: "Coming Soon",
    },
    {
        title: "Content System",
        description: "Idea capture → drafts → published → analytics",
        status: "Coming Soon",
    },
];

export default function NotionSystemsPage() {
    return (
        <>
            {/* Header Section */}
            <section className="pt-32 pb-12 px-6 relative">
                <SubtlePattern variant="dots" />
                <div className="max-w-4xl mx-auto relative z-10">
                    {/* Back link */}
                    <div className="flex items-center gap-4 mb-8">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-[#666666] hover:text-[#191314] transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                            <span>Back to Home</span>
                        </Link>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-[#191314] mb-4">
                        Notion Systems
                    </h1>
                    <p className="text-xl text-[#666666] mb-6">
                        From fragmented tools to unified workspace
                    </p>

                    {/* Personal story hook */}
                    <div className="bg-[#f4f4f4] rounded-xl p-6">
                        <p className="text-[#666666]">
                            After working at multiple companies, each with their own mix of tools (project management here, docs there, notes in chat), I learned one thing: <strong className="text-[#191314]">the friction from disconnected tools costs more than the tools themselves.</strong>
                        </p>
                    </div>
                </div>
            </section>

            {/* The Problem - Real Example */}
            <section className="py-16 px-6 bg-[#191314]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-4">The Fragmentation Problem</h2>
                    <p className="text-neutral-400 mb-6">
                        A pattern I saw at every company:
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                        {fragmentedTools.map((item, i) => (
                            <div key={i} className="bg-[#2a2a2a] rounded-xl p-4">
                                <p className="text-white font-medium text-sm">{item.tool}</p>
                                <p className="text-neutral-500 text-xs">{item.purpose}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-neutral-400 mb-4">What happens:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {fragmentationProblems.map((item, i) => (
                            <div key={i} className="flex items-start gap-2 text-neutral-400 text-sm">
                                <span className="text-red-400">→</span>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Solution */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#191314] mb-4">The Solution</h2>
                    <p className="text-[#666666] mb-8">
                        Notion isn&apos;t just a note-taking app. With the right architecture, it becomes a <strong>unified operating system</strong> for startups, teams, or personal life. Everything connected. Everything searchable. Everything in one place.
                    </p>

                    <div className="bg-[#ecf95a] rounded-xl p-6">
                        <p className="text-[#191314]">
                            <strong>The key:</strong> It&apos;s not about Notion itself. It&apos;s about figuring out the actual problem, then building a system that fits. The tool follows the design.
                        </p>
                    </div>
                </div>
            </section>

            {/* The Approach */}
            <section className="py-16 px-6 bg-[#f4f4f4]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#191314] mb-8">The Approach</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {approach.map((item) => (
                            <div key={item.step} className="bg-white rounded-xl p-5">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="w-8 h-8 rounded-full bg-[#191314] text-white flex items-center justify-center text-sm font-bold">
                                        {item.step}
                                    </span>
                                    <h3 className="font-bold text-[#191314]">{item.title}</h3>
                                </div>
                                <p className="text-sm text-[#666666] ml-11">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases - Work + Personal */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#191314] mb-4">Not Just for Work</h2>
                    <p className="text-[#666666] mb-8">
                        The same system-building approach works for personal life. Track what matters, reduce friction, build habits.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {useCases.map((useCase, i) => (
                            <div key={i} className="bg-[#f4f4f4] rounded-xl p-6">
                                <h3 className="font-bold text-[#191314] mb-4">{useCase.category}</h3>
                                <ul className="space-y-2">
                                    {useCase.examples.map((example, j) => (
                                        <li key={j} className="text-sm text-[#666666] flex items-start gap-2">
                                            <span className="text-[#191314] font-bold">•</span>
                                            <span>{example}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Coming Soon Templates */}
            <section className="py-16 px-6 bg-[#191314]">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full bg-[#ecf95a] text-[#191314] text-xs font-bold">TEMPLATES</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
                    <p className="text-neutral-400 mb-8">
                        Pre-built Notion systems you can duplicate and customize. Each one designed to solve a real problem.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {comingSoonTemplates.map((template, i) => (
                            <div key={i} className="bg-[#2a2a2a] rounded-xl p-5 border border-[#3a3a3a]">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-bold text-white">{template.title}</h3>
                                    <span className="text-xs text-neutral-500 bg-[#1a1a1a] px-2 py-1 rounded-full">
                                        {template.status}
                                    </span>
                                </div>
                                <p className="text-sm text-neutral-400">{template.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-6 bg-[#f4f4f4]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-[#191314] mb-4">
                        Need a Custom System?
                    </h2>
                    <p className="text-[#666666] mb-6">
                        Every team and every person has unique needs. Let&apos;s figure out what system fits yours.
                    </p>
                    <a
                        href="mailto:lawlozano93@gmail.com"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#191314] text-white font-medium hover:bg-[#333] transition-colors"
                    >
                        Get in touch
                    </a>
                </div>
            </section>

            <Footer />
        </>
    );
}
