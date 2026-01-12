import Link from "next/link";
import SubtlePattern from "@/components/SubtlePattern";
import Footer from "@/components/Footer";

export const metadata = {
    title: "App Experiments | Himo",
    description: "Exploring how AI solves real startup problems. Case studies in AI-driven UX, customer analytics, and automation.",
};

// Only the live experiment
const experiments = [
    {
        id: "bubu",
        title: "Bubu: AI-Driven Customer Onboarding",
        problem: "Most onboarding is static. Same flow for everyone.",
        solution: "AI-driven experience that adapts to each customer.",
        status: "Live",
        statusUrl: "https://bubu.himo.site",
    },
];

// Learnings
const learnings = [
    "AI works best with clear constraints",
    "Human oversight isn't optional",
    "Documentation compounds over time",
    "Rapid iteration beats perfect planning",
    "Systems matter more than code quality",
];

// Tech stack
const techStack = [
    { category: "Design", tool: "Figma" },
    { category: "Research", tool: "Perplexity" },
    { category: "Rapid Build", tool: "Antigravity + Claude" },
    { category: "Frontend", tool: "Next.js (TypeScript)" },
    { category: "Backend", tool: "Supabase + Vercel Functions" },
    { category: "Version Control", tool: "GitHub" },
    { category: "Deployment", tool: "Vercel" },
    { category: "Tracking", tool: "Notion" },
];

export default function AppExperimentsPage() {
    return (
        <>
            {/* Header Section */}
            <section className="pt-32 pb-12 px-6 relative">
                <SubtlePattern variant="shapes" />
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
                            Case Studies
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-[#191314] mb-4">
                        App Experiments
                    </h1>
                    <p className="text-xl text-[#666666]">
                        Exploring how AI solves real startup problems
                    </p>
                </div>
            </section>

            {/* The Approach Section - EXPANDED */}
            <section className="py-16 px-6 bg-[#f4f4f4]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#191314] mb-4">The Approach</h2>
                    <p className="text-lg text-[#666666] mb-4">
                        How do you know if AI actually solves a problem? You build it. You test it. You document what you learn.
                    </p>
                    <p className="text-[#666666] mb-8">
                        App Experiments is a collection of AI implementations across real startup challenges—each one following the same approach:
                    </p>

                    {/* Step 1: Research */}
                    <div className="bg-white rounded-xl p-6 mb-4">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-8 rounded-full bg-[#191314] text-white flex items-center justify-center text-sm font-bold">1</span>
                            <h3 className="font-bold text-[#191314] text-lg">RESEARCH</h3>
                            <span className="text-sm text-[#666666]">(Perplexity)</span>
                        </div>
                        <p className="text-[#666666] mb-4 italic">&quot;What patterns exist? What&apos;s the real friction?&quot;</p>

                        <p className="text-sm font-medium text-[#191314] mb-3">How We Actually Do This:</p>
                        <ul className="space-y-3 text-sm text-[#666666]">
                            <li className="flex items-start gap-2">
                                <span className="text-[#191314]">•</span>
                                <div>
                                    <span className="font-medium text-[#191314]">Ask specific questions</span>
                                    <p className="text-xs mt-0.5">Example: &quot;What are the top 3 reasons customers drop off during onboarding in SaaS?&quot;</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#191314]">•</span>
                                <div>
                                    <span className="font-medium text-[#191314]">Collect competitor research</span>
                                    <p className="text-xs mt-0.5">&quot;How do Intercom, Appcues, and Pendo handle AI in onboarding?&quot;</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#191314]">•</span>
                                <div>
                                    <span className="font-medium text-[#191314]">Find data & benchmarks</span>
                                    <p className="text-xs mt-0.5">&quot;What&apos;s the industry average for onboarding completion rate?&quot;</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#191314]">•</span>
                                <div>
                                    <span className="font-medium text-[#191314]">Test assumptions early</span>
                                    <p className="text-xs mt-0.5">&quot;Is this a problem for 10% of users or 80%?&quot;</p>
                                </div>
                            </li>
                        </ul>
                        <div className="mt-4 p-3 bg-[#f4f4f4] rounded-lg text-xs text-[#666666]">
                            <span className="font-medium text-[#191314]">Output:</span> Research doc in Notion with findings, quotes, data points. This becomes the source of truth.
                        </div>
                    </div>

                    {/* Step 2: Design */}
                    <div className="bg-white rounded-xl p-6 mb-4">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-8 rounded-full bg-[#191314] text-white flex items-center justify-center text-sm font-bold">2</span>
                            <h3 className="font-bold text-[#191314] text-lg">DESIGN PHASE</h3>
                            <span className="text-sm text-[#666666]">(Figma + Notion)</span>
                        </div>
                        <p className="text-[#666666] mb-4 italic">&quot;How should this work? What should it feel like?&quot;</p>

                        <p className="text-sm text-[#666666] mb-4">This combines UI/UX (experience) + Systems Design (architecture) + Research validation.</p>

                        {/* Part A: UI/UX */}
                        <div className="border-l-2 border-[#ecf95a] pl-4 mb-4">
                            <p className="text-sm font-medium text-[#191314] mb-2">Part A: UI/UX Design (Figma)</p>
                            <ul className="space-y-1 text-xs text-[#666666]">
                                <li>• User Journey Mapping - map goals, feelings, risks at each step</li>
                                <li>• Wireframe Screens - low-fidelity mockups of each screen</li>
                                <li>• Component Library - buttons, inputs, cards, feedback states</li>
                                <li>• Interaction Notes - document exactly what happens on each action</li>
                            </ul>
                        </div>

                        {/* Part B: Systems */}
                        <div className="border-l-2 border-[#ecf95a] pl-4">
                            <p className="text-sm font-medium text-[#191314] mb-2">Part B: Systems Design (Notion)</p>
                            <ul className="space-y-1 text-xs text-[#666666]">
                                <li>• Tool Selection - decide on stack (Next.js, Supabase, etc.) with rationale</li>
                                <li>• Database Schema - define tables, fields, relationships</li>
                                <li>• API Contracts - specify endpoints, inputs, outputs, auth</li>
                                <li>• Data Flow Diagram - document how data moves through the system</li>
                                <li>• PRD - complete product requirements document</li>
                                <li>• Task Breakdown - linked Notion database with dependencies</li>
                            </ul>
                        </div>

                        <div className="mt-4 p-3 bg-[#f4f4f4] rounded-lg text-xs text-[#666666]">
                            <span className="font-medium text-[#191314]">Output:</span> Figma file with all screens + Notion doc with schemas, API specs, PRD, and task breakdown.
                        </div>
                    </div>

                    {/* Step 3: Build */}
                    <div className="bg-white rounded-xl p-6 mb-4">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-8 rounded-full bg-[#191314] text-white flex items-center justify-center text-sm font-bold">3</span>
                            <h3 className="font-bold text-[#191314] text-lg">BUILD WITH AI</h3>
                            <span className="text-sm text-[#666666]">(Antigravity + Claude)</span>
                        </div>
                        <p className="text-[#666666] mb-4 italic">&quot;Rapid iteration. GitHub for control. Vercel for deployment.&quot;</p>

                        <p className="text-sm font-medium text-[#191314] mb-3">What You Prepare for Claude:</p>
                        <div className="grid grid-cols-2 gap-2 text-xs text-[#666666] mb-4">
                            <div className="flex items-center gap-1"><span className="text-[#ecf95a]">✓</span> PRD in Notion</div>
                            <div className="flex items-center gap-1"><span className="text-[#ecf95a]">✓</span> Figma designs</div>
                            <div className="flex items-center gap-1"><span className="text-[#ecf95a]">✓</span> Database schema</div>
                            <div className="flex items-center gap-1"><span className="text-[#ecf95a]">✓</span> API spec</div>
                            <div className="flex items-center gap-1"><span className="text-[#ecf95a]">✓</span> Task breakdown</div>
                            <div className="flex items-center gap-1"><span className="text-[#ecf95a]">✓</span> GitHub repo with branch protection</div>
                        </div>

                        <p className="text-sm font-medium text-[#191314] mb-2">Build Flow:</p>
                        <div className="text-xs text-[#666666] space-y-1 mb-4">
                            <p>Claude generates code → Local testing (5-10 cycles) → Push to branch → Tests run → Merge → Auto-deploy to Vercel</p>
                        </div>

                        <div className="p-3 bg-[#f4f4f4] rounded-lg text-xs text-[#666666]">
                            <span className="font-medium text-[#191314]">Key:</span> Claude writes ~70% of code. Your job: direction + refinement + creative problems.
                        </div>
                    </div>

                    {/* Step 4: Document */}
                    <div className="bg-white rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-8 rounded-full bg-[#191314] text-white flex items-center justify-center text-sm font-bold">4</span>
                            <h3 className="font-bold text-[#191314] text-lg">DOCUMENT & LEARN</h3>
                            <span className="text-sm text-[#666666]">(Notion)</span>
                        </div>
                        <p className="text-[#666666] mb-4 italic">&quot;What worked? What didn&apos;t? What&apos;s the pattern?&quot;</p>

                        <ul className="space-y-2 text-sm text-[#666666]">
                            <li className="flex items-start gap-2">
                                <span className="text-[#191314]">•</span>
                                <span>Track which recommendations were accepted/rejected</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#191314]">•</span>
                                <span>Store patterns in Notion for analysis</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#191314]">•</span>
                                <span>Feed learnings back into next iteration</span>
                            </li>
                        </ul>

                        <div className="mt-4 p-3 bg-[#ecf95a] rounded-lg text-xs text-[#191314]">
                            <span className="font-medium">Why this matters:</span> Next project will be 40% faster because patterns are documented.
                        </div>
                    </div>
                </div>
            </section>

            {/* Current Experiments */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#191314] mb-8">Current Experiments</h2>

                    {experiments.map((exp) => (
                        <Link key={exp.id} href={`/projects/app-experiments/${exp.id}`} className="block">
                            <div className="bg-white border border-[#ecf95a] rounded-2xl p-6 transition-all hover:shadow-lg cursor-pointer">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <h3 className="font-bold text-[#191314]">{exp.title}</h3>
                                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#ecf95a] text-[#191314]">
                                                {exp.status}
                                            </span>
                                        </div>
                                        <p className="text-sm text-[#666666] mb-1">
                                            <span className="font-medium">Problem:</span> {exp.problem}
                                        </p>
                                        <p className="text-sm text-[#666666]">
                                            <span className="font-medium">Solution:</span> {exp.solution}
                                        </p>
                                    </div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="w-5 h-5 text-[#191314] shrink-0 mt-1"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* The Thinking */}
            <section className="py-16 px-6 bg-[#191314]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">The Thinking</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-bold text-[#ecf95a] mb-4">Why experiments?</h3>
                            <ul className="space-y-2 text-neutral-300 text-sm">
                                <li>• Every startup has unique problems</li>
                                <li>• What works for one won&apos;t work for all</li>
                                <li>• But patterns emerge</li>
                                <li>• Document the patterns</li>
                                <li>• Make them repeatable</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-[#ecf95a] mb-4">What we&apos;re learning:</h3>
                            <ul className="space-y-2 text-neutral-300 text-sm">
                                {learnings.map((learning, i) => (
                                    <li key={i}>• {learning}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#191314] mb-8">Tech Stack</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {techStack.map((item) => (
                            <div key={item.category} className="bg-[#f4f4f4] rounded-xl p-4">
                                <p className="text-xs text-[#666666] mb-1">{item.category}</p>
                                <p className="font-medium text-[#191314] text-sm">{item.tool}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
