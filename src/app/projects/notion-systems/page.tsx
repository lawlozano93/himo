import Link from "next/link";
import SubtlePattern from "@/components/SubtlePattern";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Notion Systems | Centralizing Operations | Himo",
    description: "How centralizing operations in Notion enables rapid iteration. Database-driven systems for customer lifecycle, automation, dashboards.",
};

// The problem scenarios
const problemScenarios = [
    "Customer data in Google Sheets",
    "Decisions in Slack",
    "Documentation in Google Drive",
    "Tasks in Jira",
    "Timeline in Calendar",
    "Multiple dashboards that don't talk to each other",
];

// What happens
const whatHappens = [
    "Context is fragmented",
    "Decisions are slow (hunting for context)",
    "Onboarding new team members takes 2 weeks",
    "Mistakes happen (conflicting info in different places)",
    "Scaling breaks (system collapses under complexity)",
];

// Research findings
const researchFindings = [
    {
        question: "What do high-performing teams have in common?",
        answer: "Single source of truth. Clear information architecture.",
    },
    {
        question: "How do they stay coordinated?",
        answer: "Decisions documented where they happen. No recreating context.",
    },
    {
        question: "What's the cost of fragmentation?",
        answer: "~$10k per employee per year in lost productivity. For a 5-person team: $50k/year in waste.",
    },
];

// System layers
const systemLayers = [
    {
        title: "DATA LAYER",
        items: ["Customer database (single source of truth)", "Team database (who owns what)", "Projects/Tasks database", "Operations Log"],
    },
    {
        title: "RELATIONSHIP LAYER",
        items: ["Customer → has many → Projects", "Customer → has many → Communication Logs", "Team Member → owns → Customers", "Project → relates to → Team Members"],
    },
    {
        title: "AUTOMATION LAYER",
        items: ["New customer → Trigger welcome sequence", "Milestone reached → Send notification", "Task completed → Update customer record", "Weekly: Generate status report"],
    },
    {
        title: "VISIBILITY LAYER",
        items: ["Customer health overview", "Team workload & capacity", "Project status & blockers", "Operations metrics"],
    },
];

// Systems built
const systemsBuilt = [
    {
        title: "Customer Lifecycle Management",
        description: "End-to-end tracking from lead to renewal",
        items: ["Lead and prospect databases", "Onboarding progress tracking", "Health score calculations", "Renewal and expansion pipelines"],
    },
    {
        title: "Automations & Integrations",
        description: "Connecting Notion to external tools",
        items: ["Zapier and Make integrations", "Automated status updates", "Slack notifications", "Calendar syncing"],
    },
    {
        title: "Dashboards & Reporting",
        description: "Visual overviews for decision-making",
        items: ["Team performance metrics", "Customer health dashboards", "Project progress views", "Weekly/monthly reviews"],
    },
    {
        title: "Team Workflows",
        description: "Standardized processes for consistency",
        items: ["Meeting notes templates", "Decision documentation", "Process playbooks", "Knowledge bases"],
    },
];

// What this enables
const enables = [
    "Single source of truth for all operations data",
    "Rapid onboarding of new team members",
    "Consistent processes across the organization",
    "Data-driven decision making",
    "Reduced manual work through automation",
    "Scalable systems that grow with the team",
];

export default function NotionSystemsPage() {
    return (
        <>
            {/* Header Section */}
            <section className="pt-32 pb-12 px-6 relative">
                <SubtlePattern variant="dots" />
                <div className="max-w-4xl mx-auto relative z-10">
                    {/* Back link and badge on same line */}
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
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#191314] text-white">
                            Systems
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-[#191314] mb-4">
                        Notion Systems
                    </h1>
                    <p className="text-xl text-[#666666] mb-6">
                        How centralizing operations enables rapid iteration
                    </p>

                    {/* One-liner */}
                    <div className="bg-[#ecf95a] rounded-xl p-6">
                        <p className="text-[#191314] font-medium">
                            Most teams use 5+ tools. Information is scattered. Notion + clear architecture = single source of truth. Everything connected. Everything documented. Everything accessible.
                        </p>
                    </div>
                </div>
            </section>

            {/* The Problem */}
            <section className="py-16 px-6 bg-[#f4f4f4]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#191314] mb-4">The Problem</h2>
                    <p className="text-[#666666] mb-6">Picture this team:</p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                        {problemScenarios.map((item, i) => (
                            <div key={i} className="bg-white rounded-xl p-4 text-sm text-[#191314]">
                                {item}
                            </div>
                        ))}
                    </div>

                    <p className="text-[#666666] mb-4">What happens:</p>
                    <div className="space-y-2">
                        {whatHappens.map((item, i) => (
                            <div key={i} className="flex items-start gap-2 text-[#666666]">
                                <span className="text-red-500">→</span>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-5 bg-[#191314] rounded-xl">
                        <p className="text-[#ecf95a] font-bold mb-2">Real Question:</p>
                        <p className="text-neutral-300">
                            What if everything lived in one place, connected by clear architecture?
                        </p>
                    </div>
                </div>
            </section>

            {/* Research Phase */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#191314] mb-6">The Research Phase</h2>

                    <div className="space-y-4 mb-8">
                        {researchFindings.map((item, i) => (
                            <div key={i} className="bg-[#f4f4f4] rounded-xl p-5">
                                <p className="font-medium text-[#191314] mb-2">Q: {item.question}</p>
                                <p className="text-sm text-[#666666]">A: {item.answer}</p>
                            </div>
                        ))}
                    </div>

                    <div className="p-5 bg-[#ecf95a] rounded-xl">
                        <p className="font-bold text-[#191314] mb-1">Key Finding:</p>
                        <p className="text-[#191314]">
                            Operations friction = design problem, not tool problem. You can have the best tools and still be fragmented. Or you can have simple tools connected by clear architecture.
                        </p>
                    </div>
                </div>
            </section>

            {/* System Design */}
            <section className="py-16 px-6 bg-[#f4f4f4]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#191314] mb-6">The System Design Phase</h2>
                    <p className="text-[#666666] mb-8">What a Centralized System Looks Like:</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {systemLayers.map((layer, i) => (
                            <div key={i} className="bg-white rounded-xl p-5">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="w-6 h-6 rounded-full bg-[#191314] text-white flex items-center justify-center text-xs font-bold">{i + 1}</span>
                                    <h3 className="font-bold text-[#191314] text-sm">{layer.title}</h3>
                                </div>
                                <ul className="space-y-1 ml-8">
                                    {layer.items.map((item, j) => (
                                        <li key={j} className="text-sm text-[#666666]">• {item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Systems Built */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#191314] mb-8">Systems Built</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {systemsBuilt.map((system, i) => (
                            <div key={i} className="bg-[#f4f4f4] rounded-xl p-6 hover:bg-[#fafafa] transition-colors">
                                <h3 className="font-bold text-[#191314] mb-1">{system.title}</h3>
                                <p className="text-sm text-[#666666] mb-4">{system.description}</p>
                                <ul className="space-y-2">
                                    {system.items.map((item, j) => (
                                        <li key={j} className="text-sm text-[#666666] flex items-start gap-2">
                                            <span className="text-[#191314]">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What This Enables */}
            <section className="py-16 px-6 bg-[#191314]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-8">What This Enables</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {enables.map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <span className="text-[#ecf95a]">✓</span>
                                <p className="text-neutral-300">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-6 bg-[#f4f4f4]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-[#191314] mb-4">
                        Want to see more?
                    </h2>
                    <p className="text-[#666666] mb-6">
                        These systems were built for real teams solving real problems. Get in touch to learn more.
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
