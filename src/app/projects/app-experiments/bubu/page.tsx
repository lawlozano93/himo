import Link from "next/link";
import SubtlePattern from "@/components/SubtlePattern";
import Footer from "@/components/Footer";

export const metadata = {
    title: "BUBU | Rotating Savings Tracker | Himo",
    description: "A lightweight web app for tracking paluwagan – Filipino-style rotating savings groups. Built with Claude Opus + Antigravity in a vibe coding workflow.",
};

// Core Features
const coreFeatures = [
    {
        title: "Group Creation",
        description: "Create groups with custom contribution amounts, frequency (weekly/biweekly/monthly), and total slots",
    },
    {
        title: "Member Invitations",
        description: "Shareable invite links for easy member onboarding via /join/:token",
    },
    {
        title: "Payout Scheduling",
        description: "Drag-and-drop ordering with randomize option and locked completed positions",
    },
    {
        title: "Contribution Tracking",
        description: "Real-time payment status with receipt uploads for verification",
    },
];

// Tech Stack
const techStack = {
    frontend: [
        { name: "Next.js 16", purpose: "App Router with RSC" },
        { name: "React 19", purpose: "UI library" },
        { name: "TypeScript", purpose: "Type safety" },
        { name: "Tailwind CSS 4", purpose: "Styling" },
        { name: "shadcn/ui", purpose: "Component library" },
        { name: "dnd-kit", purpose: "Drag-and-drop" },
    ],
    backend: [
        { name: "Supabase", purpose: "PostgreSQL, Auth, RLS, Storage" },
        { name: "Server Actions", purpose: "Next.js server functions" },
    ],
};

// Design Decisions
const designDecisions = [
    {
        decision: "Tracker, not a bank",
        reason: "Paluwagan already works on social trust. No payment processing, KYC, or automated collections needed.",
    },
    {
        decision: "Trust-based by design",
        reason: "No financial licenses or compliance complexity. The app digitizes tracking, not transactions.",
    },
    {
        decision: "Ship fast, iterate faster",
        reason: "Lower technical complexity means more time spent on what matters to users.",
    },
];

// Core Flows
const coreFlows = [
    {
        step: "1",
        title: "Create Group",
        description: "Admin sets name, contribution amount, frequency, and total slots",
    },
    {
        step: "2",
        title: "Invite Members",
        description: "Share invite link → member opens → joins if slots available",
    },
    {
        step: "3",
        title: "Set Rotation Order",
        description: "Drag-and-drop to set payout positions, or randomize for fairness",
    },
    {
        step: "4",
        title: "Track Contributions",
        description: "Members upload receipts → receiver verifies → cycle auto-advances",
    },
];

// Vibe Coding Highlights
const vibeCodingHighlights = [
    {
        strength: "Scaffolding",
        example: "Generated 7-table schema with RLS policies in one prompt",
    },
    {
        strength: "Boilerplate",
        example: "Server actions, form handlers, validation patterns",
    },
    {
        strength: "Component Patterns",
        example: "shadcn/ui integration, responsive mobile-first layouts",
    },
    {
        strength: "Refactoring",
        example: "Extracting shared logic, DRYing code across features",
    },
];

// Human Judgment Areas
const humanJudgment = [
    {
        area: "Domain Modeling",
        why: "Understanding paluwagan nuances like slots, positions, and locks",
    },
    {
        area: "UX Decisions",
        why: "When to show errors, which flows to simplify for trust-based groups",
    },
    {
        area: "Edge Cases",
        why: "Partial payments, mid-cycle joins, double-slot support",
    },
    {
        area: "RLS Debugging",
        why: "Permission issues required deep SQL understanding",
    },
];

// Key Learnings
const keyLearnings = [
    "Spend 40% on research + architecture (not rushed)",
    "AI handles ~70% of implementation when architecture is solid",
    "Deploy small, deploy often to catch issues early",
    "Maintain human oversight—AI guides, humans decide",
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
                        <span className="text-[#191314]">BUBU</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-[#191314] mb-4">
                        BUBU
                    </h1>
                    <p className="text-xl text-[#666666] mb-6">
                        Rotating Savings Tracker for Paluwagan Groups
                    </p>

                    {/* One-liner */}
                    <div className="bg-[#ecf95a] rounded-xl p-6 mb-8">
                        <p className="text-[#191314] font-medium">
                            BUBU digitizes the traditional Filipino <strong>paluwagan</strong>—a rotating savings system where a group pools money and one member receives the pot each round. No complex fintech, just a tracker built on trust.
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
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f4f4f4] text-[#666666] font-medium">
                            Built with Claude Opus + Antigravity
                        </span>
                    </div>
                </div>
            </section>

            {/* What is Paluwagan */}
            <section className="py-16 px-6 bg-[#f4f4f4]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#191314] mb-4">What is Paluwagan?</h2>
                    <p className="text-[#666666] mb-8">
                        Paluwagan is a Filipino rotating savings tradition. A group of people contributes a fixed amount per cycle (weekly, biweekly, or monthly), and one member receives the entire pot each round—until everyone has received their payout. It&apos;s built on trust and personal relationships, typically tracked via paper ledgers or group chats.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {coreFeatures.map((feature, i) => (
                            <div key={i} className="bg-white rounded-xl p-5">
                                <h3 className="font-bold text-[#191314] mb-2">{feature.title}</h3>
                                <p className="text-sm text-[#666666]">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Design Philosophy */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#191314] mb-4">Design Philosophy</h2>
                    <p className="text-[#666666] mb-8">
                        We deliberately avoided complex fintech features. BUBU is a tracker, not a bank.
                    </p>

                    <div className="space-y-4">
                        {designDecisions.map((item, i) => (
                            <div key={i} className="bg-[#f4f4f4] rounded-xl p-5">
                                <h3 className="font-bold text-[#191314] mb-1">{item.decision}</h3>
                                <p className="text-sm text-[#666666]">{item.reason}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 px-6 bg-[#f4f4f4]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#191314] mb-8">How It Works</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {coreFlows.map((flow) => (
                            <div key={flow.step} className="bg-white rounded-xl p-5">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="w-8 h-8 rounded-full bg-[#191314] text-white flex items-center justify-center text-sm font-bold">
                                        {flow.step}
                                    </span>
                                    <h3 className="font-bold text-[#191314]">{flow.title}</h3>
                                </div>
                                <p className="text-sm text-[#666666] ml-11">{flow.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-5 bg-[#191314] rounded-xl">
                        <p className="text-[#ecf95a] font-bold mb-2">Auto-Advancing Cycles</p>
                        <p className="text-neutral-300">
                            When all payments in a cycle are marked as &quot;paid&quot;, the cycle automatically completes and the next one becomes active. When all cycles finish, the group is marked as completed.
                        </p>
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#191314] mb-8">Tech Stack</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-[#f4f4f4] rounded-xl p-6">
                            <h3 className="font-bold text-[#191314] mb-4">Frontend</h3>
                            <div className="space-y-3">
                                {techStack.frontend.map((tech, i) => (
                                    <div key={i} className="flex justify-between text-sm">
                                        <span className="font-medium text-[#191314]">{tech.name}</span>
                                        <span className="text-[#666666]">{tech.purpose}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-[#f4f4f4] rounded-xl p-6">
                            <h3 className="font-bold text-[#191314] mb-4">Backend</h3>
                            <div className="space-y-3">
                                {techStack.backend.map((tech, i) => (
                                    <div key={i} className="flex justify-between text-sm">
                                        <span className="font-medium text-[#191314]">{tech.name}</span>
                                        <span className="text-[#666666]">{tech.purpose}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 pt-4 border-t border-[#e5e5e5]">
                                <h4 className="font-medium text-[#191314] mb-2 text-sm">Key Patterns</h4>
                                <ul className="text-sm text-[#666666] space-y-1">
                                    <li>• Server Components by default</li>
                                    <li>• Server Actions over API routes</li>
                                    <li>• RLS for database authorization</li>
                                    <li>• URL search params for state</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vibe Coding */}
            <section className="py-16 px-6 bg-[#191314]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-4">Built with Vibe Coding</h2>
                    <p className="text-neutral-400 mb-8">
                        No formal PRD. Rapid conversational coding with Claude Opus inside Antigravity. The iteration loop: prompt → generate → run locally → observe → report issues → refactor → repeat.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-[#ecf95a] font-bold mb-4">Where Claude Excelled</h3>
                            <div className="space-y-3">
                                {vibeCodingHighlights.map((item, i) => (
                                    <div key={i} className="bg-[#2a2a2a] rounded-lg p-4">
                                        <p className="text-white font-medium text-sm">{item.strength}</p>
                                        <p className="text-neutral-400 text-sm">{item.example}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-[#ecf95a] font-bold mb-4">Where Human Judgment Was Crucial</h3>
                            <div className="space-y-3">
                                {humanJudgment.map((item, i) => (
                                    <div key={i} className="bg-[#2a2a2a] rounded-lg p-4">
                                        <p className="text-white font-medium text-sm">{item.area}</p>
                                        <p className="text-neutral-400 text-sm">{item.why}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Learnings */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#191314] mb-4">Key Learnings</h2>
                    <p className="text-[#666666] mb-8">
                        Vibe coding with Claude can ship production apps when the domain is well-understood, scope is tightly constrained, and iteration is rapid.
                    </p>

                    <div className="space-y-3">
                        {keyLearnings.map((item, i) => (
                            <div key={i} className="flex items-start gap-3 bg-[#f4f4f4] rounded-xl p-4">
                                <span className="text-[#191314] font-bold">✓</span>
                                <p className="text-[#191314]">{item}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-5 bg-[#ecf95a] rounded-xl">
                        <p className="font-bold text-[#191314] mb-2">The Balance</p>
                        <p className="text-[#191314]">
                            AI scaffolding + human domain expertise + tight scope = shipped product. The absence of formal PRDs was offset by continuous micro-decisions during conversation-driven development.
                        </p>
                    </div>
                </div>
            </section>

            {/* Target Users */}
            <section className="py-16 px-6 bg-[#f4f4f4]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#191314] mb-8">Who It&apos;s For</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white rounded-xl p-5">
                            <div className="text-2xl mb-3">👨‍👩‍👧‍👦</div>
                            <h3 className="font-bold text-[#191314] mb-2">Families & Friends</h3>
                            <p className="text-sm text-[#666666]">Pooling savings for emergencies or planned purchases</p>
                        </div>
                        <div className="bg-white rounded-xl p-5">
                            <div className="text-2xl mb-3">🏢</div>
                            <h3 className="font-bold text-[#191314] mb-2">Office Colleagues</h3>
                            <p className="text-sm text-[#666666]">Running informal savings groups at work</p>
                        </div>
                        <div className="bg-white rounded-xl p-5">
                            <div className="text-2xl mb-3">🏘️</div>
                            <h3 className="font-bold text-[#191314] mb-2">Barangay Communities</h3>
                            <p className="text-sm text-[#666666]">Existing trust networks with established relationships</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Back Navigation */}
            <section className="py-16 px-6">
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
