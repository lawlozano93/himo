import Link from "next/link";
import SubtlePattern from "@/components/SubtlePattern";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Bubu | AI-Driven Customer Onboarding | Himo",
    description: "Live SaaS product exploring AI-driven UX in customer onboarding. Built in 3 weeks using rapid prototyping methodology.",
};

// Research questions and answers
const researchQA = [
    {
        question: "What does great onboarding look like?",
        answer: "Personalization reduces friction by ~35%. Real-time guidance reduces support tickets by ~40%.",
    },
    {
        question: "Where do customers typically struggle?",
        answer: "60% of users don't complete onboarding in first session. Main friction points: setup complexity, unclear next steps, no personalized guidance.",
    },
    {
        question: "Can AI detect and reduce friction in real-time?",
        answer: "Yes. By analyzing behavior signals (time on page, clicks, hesitations), AI can predict where users will drop off.",
    },
    {
        question: "How do you personalize without being creepy?",
        answer: "Show recommendations as options, not mandates. Let users override. Show why recommendations are made.",
    },
];

// System layers
const systemLayers = [
    {
        title: "DATA LAYER",
        description: "User profile, behavior signals, integration readiness, progress",
    },
    {
        title: "AI DECISION LAYER",
        description: "Analyze signals, compare patterns, generate recommendations with confidence levels",
    },
    {
        title: "USER CONTROL LAYER",
        description: "See suggestion, understand why, accept/skip/override",
    },
    {
        title: "FEEDBACK LAYER",
        description: "Track outcomes, store patterns, feed learnings back",
    },
];

// Build timeline
const buildTimeline = [
    { week: "Week 1", phase: "Foundation", tasks: "GitHub + Supabase setup, Authentication, Core API" },
    { week: "Week 2", phase: "Features", tasks: "Behavior Tracking, AI Integration, UI Components" },
    { week: "Week 3", phase: "Deploy + Polish", tasks: "Testing, Security, Deployment" },
];

// What this demonstrates
const demonstrates = [
    "Full-stack SaaS: concept to deployed product",
    "Security practices (RLS, API protection)",
    "AI model direction and usage",
    "Systems thinking from day 1",
    "Rapid iteration and deployment",
    "Documentation compounds over time",
];

// The Playbook
const playbook = [
    "Spend 40% on research + architecture (not rushed)",
    "Spend 10% on design (if architecture is solid)",
    "Spend 50% on build + testing (Claude handles 70%)",
    "Use branch protection (nothing merges without review)",
    "Write tests first (TDD approach)",
    "Deploy small, deploy often (catch issues early)",
    "Maintain human oversight (AI guides, humans decide)",
];

export default function BubuPage() {
    return (
        <>
            {/* Header Section */}
            <section className="pt-32 pb-12 px-6 relative">
                <SubtlePattern variant="shapes" />
                <div className="max-w-4xl mx-auto relative z-10">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-[#666666] mb-8">
                        <Link href="/" className="hover:text-[#191314] transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/projects/app-experiments" className="hover:text-[#191314] transition-colors">App Experiments</Link>
                        <span>/</span>
                        <span className="text-[#191314]">Bubu</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-[#191314] mb-4">
                        Bubu
                    </h1>
                    <p className="text-xl text-[#666666] mb-6">
                        AI-Driven Customer Onboarding
                    </p>

                    {/* One-liner */}
                    <div className="bg-[#ecf95a] rounded-xl p-6 mb-8">
                        <p className="text-[#191314] font-medium">
                            Bubu is proof that you can go from idea to deployed SaaS in 3-4 weeks using systematic methodology: Research → Design Systems → Build with AI → Document.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="https://bubu.himo.site"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#191314] text-white font-medium hover:bg-[#333] transition-colors"
                        >
                            Try it Live
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </a>
                        <a
                            href="https://github.com/lawlozano93"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f4f4f4] text-[#191314] font-medium hover:bg-[#e5e5e5] transition-colors"
                        >
                            View on GitHub
                        </a>
                    </div>
                </div>
            </section>

            {/* Research Phase */}
            <section className="py-16 px-6 bg-[#f4f4f4]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#191314] mb-4">The Research Phase</h2>
                    <p className="text-[#666666] mb-8">
                        Most customer onboarding experiences are static. Teams follow the same flow regardless of customer type, industry, or behavior. This creates friction and slows time-to-value.
                    </p>

                    <h3 className="font-bold text-[#191314] mb-4">Research Questions (Answered via Perplexity)</h3>
                    <div className="space-y-4">
                        {researchQA.map((item, i) => (
                            <div key={i} className="bg-white rounded-xl p-5">
                                <p className="font-medium text-[#191314] mb-2">Q: {item.question}</p>
                                <p className="text-sm text-[#666666]">A: {item.answer}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-5 bg-[#191314] rounded-xl">
                        <p className="text-[#ecf95a] font-bold mb-2">Key Insight:</p>
                        <p className="text-neutral-300">
                            Onboarding isn&apos;t a flow—it&apos;s a dynamic system. Different users need different paths. AI&apos;s job: predict which path, let human decide.
                        </p>
                    </div>
                </div>
            </section>

            {/* System Design Phase */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#191314] mb-4">The System Design Phase</h2>
                    <p className="text-[#666666] mb-8">
                        With research locked, architecture became clear.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {systemLayers.map((layer, i) => (
                            <div key={i} className="bg-[#f4f4f4] rounded-xl p-5">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="w-6 h-6 rounded-full bg-[#191314] text-white flex items-center justify-center text-xs font-bold">{i + 1}</span>
                                    <h3 className="font-bold text-[#191314] text-sm">{layer.title}</h3>
                                </div>
                                <p className="text-sm text-[#666666] ml-8">{layer.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="p-5 bg-[#ecf95a] rounded-xl">
                        <p className="font-bold text-[#191314] mb-1">Key Design Decision:</p>
                        <p className="text-[#191314]">AI is a guide, not a controller. Users always have agency.</p>
                    </div>
                </div>
            </section>

            {/* Build Phase */}
            <section className="py-16 px-6 bg-[#f4f4f4]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#191314] mb-4">The Build Phase</h2>
                    <p className="text-[#666666] mb-8">
                        With everything locked, building happened fast. Timeline: 3 weeks.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        {buildTimeline.map((item) => (
                            <div key={item.week} className="bg-white rounded-xl p-5">
                                <p className="text-xs text-[#666666] mb-1">{item.week}</p>
                                <h3 className="font-bold text-[#191314] mb-2">{item.phase}</h3>
                                <p className="text-sm text-[#666666]">{item.tasks}</p>
                            </div>
                        ))}
                    </div>

                    {/* Build Stack */}
                    <div className="bg-white rounded-xl p-6">
                        <h3 className="font-bold text-[#191314] mb-4">The Build Stack</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                                <p className="text-[#666666]">Language</p>
                                <p className="font-medium text-[#191314]">TypeScript</p>
                            </div>
                            <div>
                                <p className="text-[#666666]">Frontend</p>
                                <p className="font-medium text-[#191314]">Next.js 14 + React</p>
                            </div>
                            <div>
                                <p className="text-[#666666]">Backend</p>
                                <p className="font-medium text-[#191314]">Vercel + Supabase</p>
                            </div>
                            <div>
                                <p className="text-[#666666]">AI</p>
                                <p className="font-medium text-[#191314]">Claude via Antigravity</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What This Demonstrates */}
            <section className="py-16 px-6 bg-[#191314]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-8">What This Demonstrates</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {demonstrates.map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <span className="text-[#ecf95a]">✓</span>
                                <p className="text-neutral-300">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Playbook */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#191314] mb-4">The Playbook</h2>
                    <p className="text-[#666666] mb-8">If you&apos;re building AI-driven products:</p>

                    <div className="space-y-3">
                        {playbook.map((item, i) => (
                            <div key={i} className="flex items-start gap-3 bg-[#f4f4f4] rounded-xl p-4">
                                <span className="text-[#191314] font-bold">✓</span>
                                <p className="text-[#191314]">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Back Navigation */}
            <section className="py-16 px-6 bg-[#f4f4f4]">
                <div className="max-w-4xl mx-auto flex flex-wrap gap-4">
                    <Link
                        href="/projects/app-experiments"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#191314] text-white font-medium hover:bg-[#333] transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                        Back to App Experiments
                    </Link>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f4f4f4] text-[#191314] font-medium hover:bg-[#e5e5e5] transition-colors border border-[#191314]"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                        Back to Home
                    </Link>
                </div>
            </section>

            <Footer />
        </>
    );
}
