import Link from "next/link";
import SubtlePattern from "@/components/SubtlePattern";
import Footer from "@/components/Footer";

export const metadata = {
    title: "App Experiments | Himo",
    description: "Rapid idea validation with AI. Build fast, ship fast, learn fast.",
};

// Current featured project
const featuredProject = {
    id: "bubu",
    title: "BUBU",
    description: "Rotating Savings Tracker for Paluwagan Groups",
    problem: "Filipino rotating savings (paluwagan) are tracked via paper or group chats. Easy to lose, hard to verify.",
    solution: "A simple web app: create groups, invite members, track contributions, auto-advance cycles.",
    status: "Live",
    url: "https://bubu.himo.site",
    highlights: [
        "7-table Supabase schema with RLS",
        "Next.js Server Actions for all mutations",
        "Resend + Supabase cron for reminders",
        "~$0 monthly running cost",
    ],
};

// Why experiments
const whyExperiments = [
    "AI lets you build in days, not months",
    "Real users validate better than theories",
    "Ship fast → learn fast → iterate fast",
    "Every experiment is a potential product",
];

// The approach (simplified)
const approach = [
    {
        step: "1",
        title: "Find a Problem",
        description: "Something you or someone you know actually deals with",
    },
    {
        step: "2",
        title: "Plan Before Code",
        description: "Use AI to break down schema, flows, edge cases",
    },
    {
        step: "3",
        title: "Build UI First",
        description: "Mock data, iterate fast, then wire up backend",
    },
    {
        step: "4",
        title: "Document the Patterns",
        description: "What worked, what didn't, what's reusable",
    },
];

export default function AppExperimentsPage() {
    return (
        <>
            {/* Header Section */}
            <section className="pt-32 pb-12 px-6 relative">
                <SubtlePattern variant="shapes" />
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
                        App Experiments
                    </h1>
                    <p className="text-xl text-[#666666] mb-6">
                        Learning AI by building real projects
                    </p>

                    <div className="bg-[#f4f4f4] rounded-xl p-6">
                        <p className="text-[#666666]">
                            AI makes it possible to go from idea to working product in days. Find a problem, build a solution, put it in front of real users. Validated ideas can become real products. Failed ones become lessons.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Project - PROMINENT */}
            <section className="py-16 px-6 bg-[#191314]">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="px-3 py-1 rounded-full bg-[#ecf95a] text-[#191314] text-xs font-bold">CURRENT PROJECT</span>
                    </div>

                    <Link href={`/projects/app-experiments/${featuredProject.id}`} className="block">
                        <div className="bg-[#2a2a2a] rounded-2xl p-8 hover:bg-[#333] transition-colors cursor-pointer">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <h2 className="text-3xl font-bold text-white">{featuredProject.title}</h2>
                                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-[#ecf95a] text-[#191314]">
                                            {featuredProject.status}
                                        </span>
                                    </div>
                                    <p className="text-[#ecf95a] font-medium mb-4">{featuredProject.description}</p>

                                    <div className="space-y-2 mb-6">
                                        <p className="text-neutral-400 text-sm">
                                            <span className="text-neutral-300 font-medium">Problem:</span> {featuredProject.problem}
                                        </p>
                                        <p className="text-neutral-400 text-sm">
                                            <span className="text-neutral-300 font-medium">Solution:</span> {featuredProject.solution}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {featuredProject.highlights.map((highlight, i) => (
                                            <span key={i} className="text-xs bg-[#191314] text-neutral-400 px-3 py-1 rounded-full border border-neutral-700">
                                                {highlight}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors shrink-0">
                                    <span className="text-sm font-medium">View Case Study</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <div className="mt-4 text-center">
                        <a
                            href={featuredProject.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-neutral-400 hover:text-[#ecf95a] transition-colors text-sm"
                        >
                            Try it live at bubu.himo.site
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* Recent Experiments */}
            <section className="py-12 px-6 bg-[#f4f4f4]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#191314] mb-6">Recent Experiments</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Link href="/projects/app-experiments/portfolio-v4" className="block group">
                            <div className="bg-white rounded-xl p-6 border border-neutral-200 hover:border-[#191314] transition-colors h-full flex flex-col">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold text-[#191314]">Building Himo</h3>
                                    <span className="text-xs font-medium px-2 py-1 bg-neutral-100 rounded-full text-neutral-600">Case Study</span>
                                </div>
                                <p className="text-[#666666] mb-6 flex-grow">
                                    A meta-analysis of building this portfolio: escaping WordPress, embracing Next.js, and vibe-coding with AI.
                                </p>
                                <div className="flex items-center gap-2 text-[#191314] font-medium text-sm group-hover:underline">
                                    Read Case Study
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* The Approach - SIMPLIFIED */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#191314] mb-8">The Approach</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {approach.map((item) => (
                            <div key={item.step} className="bg-[#f4f4f4] rounded-xl p-5">
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

            {/* Why Experiments */}
            <section className="py-16 px-6 bg-[#f4f4f4]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#191314] mb-8">Why Experiments?</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {whyExperiments.map((reason, i) => (
                            <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4">
                                <span className="text-[#191314] font-bold">✓</span>
                                <p className="text-[#191314]">{reason}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-5 bg-[#ecf95a] rounded-xl">
                        <p className="text-[#191314]">
                            <strong>The goal:</strong> Validate fast, ship fast. If it works, scale it. If it doesn&apos;t, you learned something. Either way, you&apos;re building real skills with AI.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
