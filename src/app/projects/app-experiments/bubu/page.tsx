import Link from "next/link";
import SubtlePattern from "@/components/SubtlePattern";
import Footer from "@/components/Footer";

export const metadata = {
    title: "BUBU | Rotating Savings Tracker | Himo",
    description: "A lightweight web app for tracking paluwagan – Filipino-style rotating savings groups. Built with Claude Opus + Antigravity in a vibe coding workflow.",
};

// Key Features
const features = [
    {
        icon: "👥",
        title: "Create Your Group",
        description: "Set contribution amount, frequency (weekly/biweekly/monthly), and total payout slots",
    },
    {
        icon: "🔗",
        title: "Invite via Link",
        description: "Share a unique invite link. Members join instantly, no app download needed",
    },
    {
        icon: "🎲",
        title: "Schedule Payouts",
        description: "Drag-and-drop to order who gets paid first, or randomize for fairness",
    },
    {
        icon: "📸",
        title: "Upload Receipts",
        description: "Submit proof of payment. The receiver verifies, and the cycle advances",
    },
    {
        icon: "🔔",
        title: "Payment Reminders",
        description: "Automated emails remind members when contributions are due",
    },
];

// Build Steps (The Journey)
const buildSteps = [
    {
        step: "01",
        title: "Internal PRD",
        subtitle: "Defining the problem",
        description: "Started with a rough product doc: What's the problem? Who's the user? What's MVP scope?",
        details: [
            "Trust-based tracker, not fintech",
            "No payment processing or KYC",
            "Simple enough to ship in weeks",
        ],
    },
    {
        step: "02",
        title: "Planning in Antigravity",
        subtitle: "Claude Opus as co-pilot",
        description: "Before writing code, used Claude to create a full implementation plan.",
        details: [
            "Broke down: auth flow, database schema, UI components",
            "Prioritized: what to build first",
            "Identified edge cases early",
        ],
    },
    {
        step: "03",
        title: "UI First with shadcn",
        subtitle: "Interface before backend",
        description: "Built the entire interface with mock data before touching the database.",
        details: [
            "Next.js 16 + Tailwind CSS 4",
            "shadcn/ui for components",
            "dnd-kit for drag-drop scheduling",
        ],
    },
    {
        step: "04",
        title: "Backend with Next.js + Supabase",
        subtitle: "Wiring up the data layer",
        description: "Server Actions handle business logic. Supabase stores data and handles auth.",
        details: [
            "Server Actions for all mutations",
            "Supabase PostgreSQL (7 tables)",
            "Row-Level Security for access control",
        ],
    },
    {
        step: "05",
        title: "Email & Automation",
        subtitle: "Notifications that just work",
        description: "Added payment reminders with Resend email and Supabase cron jobs.",
        details: [
            "Resend for transactional email",
            "Supabase cron runs daily at 4PM PHT",
            "Emails sent to members with pending payments",
        ],
    },
];

// Iteration Examples
const iterations = [
    {
        prompt: "Need receipt upload for payment proof",
        result: "Added PaymentVerificationDialog with image preview",
    },
    {
        prompt: "RLS is blocking status updates",
        result: "Created admin client bypass pattern",
    },
    {
        prompt: "Mobile nav feels off",
        result: "Switched to bottom tab bar, feels native",
    },
    {
        prompt: "Cycle should auto-advance when done",
        result: "Added checkAndAdvanceCycle logic",
    },
];

// Tech Stack (with free tier note)
const techStackItems = [
    { name: "Next.js 16", role: "App framework", free: true },
    { name: "Supabase", role: "Database + Auth + Storage", free: true },
    { name: "Vercel", role: "Hosting", free: true },
    { name: "Resend", role: "Transactional email", free: true },
    { name: "Antigravity", role: "AI coding assistant", free: false, note: "Base plan" },
];

// Key Takeaways
const takeaways = [
    "AI handles boilerplate, humans handle domain nuance",
    "Start with architecture before code. Saves refactor time",
    "UI first with mock data = faster iteration",
    "Deploy often, fix fast, ship incrementally",
];

export default function BubuPage() {
    return (
        <>
            {/* ==================== PART 1: THE PRODUCT ==================== */}

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
                            BUBU digitizes the traditional Filipino <strong>paluwagan</strong>, a rotating savings system where a group pools money and one member receives the pot each round. No complex fintech, just a tracker built on trust.
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
                    </div>
                </div>
            </section>

            {/* What is Paluwagan */}
            <section className="py-16 px-6 bg-[#f4f4f4]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#191314] mb-4">What is Paluwagan?</h2>
                    <p className="text-[#666666] mb-4">
                        Paluwagan is a Filipino rotating savings tradition. A group of people contributes a fixed amount per cycle (weekly, biweekly, or monthly), and one member receives the entire pot each round until everyone has received their payout.
                    </p>
                    <p className="text-[#666666]">
                        It&apos;s built on trust and personal relationships, typically tracked via paper ledgers or group chats. BUBU makes it transparent and organized.
                    </p>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#191314] mb-8">What You Can Do</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {features.map((feature, i) => (
                            <div key={i} className="bg-[#f4f4f4] rounded-xl p-5">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-2xl">{feature.icon}</span>
                                    <h3 className="font-bold text-[#191314]">{feature.title}</h3>
                                </div>
                                <p className="text-sm text-[#666666] ml-10">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who It's For */}
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

            {/* ==================== PART 2: THE BUILD STORY ==================== */}

            {/* Story Header */}
            <section className="py-16 px-6 bg-[#191314]">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full bg-[#ecf95a] text-[#191314] text-xs font-bold">CASE STUDY</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4">How We Built This</h2>
                    <p className="text-neutral-400 mb-6">
                        A vibe coding project with Claude Opus + Antigravity. No formal PRD, just rapid iteration from idea to production.
                    </p>

                    {/* Cost highlight */}
                    <div className="bg-[#2a2a2a] rounded-xl p-5 inline-block">
                        <p className="text-[#ecf95a] font-bold text-lg">~$0 Build Cost</p>
                        <p className="text-neutral-400 text-sm">All free tiers except Antigravity base plan</p>
                    </div>
                </div>
            </section>

            {/* Build Steps */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-8">
                        {buildSteps.map((step, i) => (
                            <div key={i} className="flex gap-6">
                                {/* Step number */}
                                <div className="shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-[#191314] text-white flex items-center justify-center font-bold text-sm">
                                        {step.step}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="mb-2">
                                        <h3 className="text-lg font-bold text-[#191314]">{step.title}</h3>
                                        <p className="text-sm text-[#666666]">{step.subtitle}</p>
                                    </div>
                                    <p className="text-[#666666] mb-3">{step.description}</p>
                                    <ul className="space-y-1">
                                        {step.details.map((detail, j) => (
                                            <li key={j} className="text-sm text-[#666666] flex items-start gap-2">
                                                <span className="text-[#191314] font-bold">•</span>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Iteration Loop */}
            <section className="py-16 px-6 bg-[#f4f4f4]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#191314] mb-4">The Iteration Loop</h2>
                    <p className="text-[#666666] mb-8">
                        Prompt → Generate → Run → Observe → Fix → Repeat. Here are some real examples:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {iterations.map((item, i) => (
                            <div key={i} className="bg-white rounded-xl p-5">
                                <p className="text-sm text-[#666666] mb-2 italic">&quot;{item.prompt}&quot;</p>
                                <p className="text-[#191314] font-medium">→ {item.result}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#191314] mb-4">The Stack</h2>
                    <p className="text-[#666666] mb-8">
                        Built almost entirely on free tiers. Total recurring cost: $0/month (excluding AI assistant).
                    </p>

                    <div className="space-y-3">
                        {techStackItems.map((item, i) => (
                            <div key={i} className="flex items-center justify-between bg-[#f4f4f4] rounded-xl p-4">
                                <div className="flex items-center gap-3">
                                    <span className="font-bold text-[#191314]">{item.name}</span>
                                    <span className="text-sm text-[#666666]">{item.role}</span>
                                </div>
                                <span className={`text-xs px-2 py-1 rounded-full font-medium ${item.free
                                    ? 'bg-[#ecf95a] text-[#191314]'
                                    : 'bg-[#191314] text-white'
                                    }`}>
                                    {item.free ? 'Free tier' : item.note}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Takeaways */}
            <section className="py-16 px-6 bg-[#191314]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-8">Key Takeaways</h2>

                    <div className="space-y-3">
                        {takeaways.map((item, i) => (
                            <div key={i} className="flex items-start gap-3 bg-[#2a2a2a] rounded-xl p-4">
                                <span className="text-[#ecf95a] font-bold">✓</span>
                                <p className="text-neutral-300">{item}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-5 bg-[#ecf95a] rounded-xl">
                        <p className="font-bold text-[#191314] mb-2">The Balance</p>
                        <p className="text-[#191314]">
                            AI scaffolding + human domain expertise + tight scope = shipped product. Claude handles the boilerplate, you handle the decisions.
                        </p>
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
