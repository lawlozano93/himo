import Link from "next/link";
import SubtlePattern from "@/components/SubtlePattern";
import Footer from "@/components/sections/Footer";
import ScrollColorTrigger from "@/components/ui/ScrollColorTrigger";

export const metadata = {
    title: "Building Himo | App Experiments",
    description: "A case study on building a modern, AI-native portfolio website.",
};

export default function MakingHimoPage() {
    return (
        <>
            {/* ==================== SECTION 1: INTRO (LIGHT) ==================== */}
            <ScrollColorTrigger color="#ffffff" matchNavbar>
                <section className="pt-32 pb-16 px-6 relative">
                    <SubtlePattern variant="dots" />
                    <div className="max-w-4xl mx-auto relative z-10">
                        <div className="flex items-center gap-4 mb-8">
                            <Link
                                href="/projects/app-experiments"
                                className="inline-flex items-center gap-2 text-[#666666] hover:text-[#191314] transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                </svg>
                                <span>Back to Experiments</span>
                            </Link>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-[#191314] mb-4">
                            Building Himo
                        </h1>
                        <p className="text-xl text-[#666666] mb-8">
                            An AI-Native workflow: from concept to deployment in record time.
                        </p>

                        {/* Context Section */}
                        <div className="prose text-[#666666] max-w-none mb-12">
                            <h2 className="text-2xl font-bold text-[#191314] mb-4 not-prose">The Context: Escaping WordPress</h2>
                            <p className="mb-4">
                                Relying on WordPress often comes with a heavy cost: <strong>plugin dependency</strong>. Features require plugins, plugins add bloat, and updates risk breaking the site. Customization can feel like fighting the platform rather than building on it.
                            </p>
                            <p>
                                Moving to a custom Next.js stack restores control. No more black boxes or "update and pray" scenarios. Just clean, semantic code that is fully owned, resulting in a site that is significantly faster, more secure, and infinitely more flexible.
                            </p>
                        </div>
                    </div>
                </section>
            </ScrollColorTrigger>

            {/* ==================== SECTION 2: STACK & WORKFLOW (DARK) ==================== */}
            <ScrollColorTrigger color="#191314" matchNavbar>
                <section className="py-20 px-6 bg-[#191314]">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Stack (Light Card) */}
                            <div className="bg-[#f4f4f4] rounded-xl p-6">
                                <h2 className="text-lg font-bold text-[#191314] mb-3">The Stack</h2>
                                <ul className="space-y-2 text-[#666666]">
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-[#191314]"></span>
                                        <span>Next.js 15 (App Router)</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-[#191314]"></span>
                                        <span>React 19 & TypeScript</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-[#191314]"></span>
                                        <span>Tailwind CSS 4</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-[#191314]"></span>
                                        <span>Framer Motion</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-[#191314]"></span>
                                        <span>Vercel Deployment</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Workflow (Darker Card for Dark Mode) */}
                            <div className="bg-[#2a2a2a] rounded-xl p-6 text-white border border-[#333]">
                                <h2 className="text-lg font-bold text-white mb-3">The Workflow</h2>
                                <ul className="space-y-4 text-neutral-400">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#ecf95a] mt-1">➜</span>
                                        <div>
                                            <span className="text-white block font-medium">Model Efficiency Strategy</span>
                                            <span className="text-sm">Leveraging different IDEs to access specific models helps avoid exhausting single-platform token limits.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#ecf95a] mt-1">➜</span>
                                        <div>
                                            <span className="text-white block font-medium">Cursor (Composer)</span>
                                            <span className="text-sm">Used for high-level planning and "what-if" scenarios. The Composer model is excellent for drafting initial architectures.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#ecf95a] mt-1">➜</span>
                                        <div>
                                            <span className="text-white block font-medium">Antigravity (Opus)</span>
                                            <span className="text-sm">Heavily using Claude 3 Opus via Antigravity for execution, complex logic, and deep refactoring.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollColorTrigger>

            {/* ==================== SECTION 3: BUILD JOURNEY (LIGHT GRAY) ==================== */}
            <ScrollColorTrigger color="#ffffff" matchNavbar>
                <section className="py-20 px-6 bg-[#f4f4f4]">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold text-[#191314] mb-12">From Blank Page to Vercel</h2>
                        <div className="relative border-l border-neutral-300 ml-3 space-y-12 pl-8">
                            <div className="relative">
                                <span className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-[#191314] border-4 border-[#f4f4f4]"></span>
                                <h3 className="font-bold text-[#191314] mb-1">Concept & Hero</h3>
                                <p className="text-[#666666]">
                                    Starting with a blank directory, the goal was to establish a "vibe" first. The Hero section went through multiple iterations, testing typographic scales and subtle patterns until it felt premium yet understated.
                                </p>
                            </div>
                            <div className="relative">
                                <span className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-[#ecf95a] border-4 border-[#f4f4f4]"></span>
                                <h3 className="font-bold text-[#191314] mb-1">The "Checking Your Work" Loop</h3>
                                <p className="text-[#666666]">
                                    Unlike traditional coding, the process involved tight feedback loops. Describing a component prompted the AI to scaffold it, followed by immediate browser verification. Animations were tweaked in real-time to perfect the physics.
                                </p>
                            </div>
                            <div className="relative">
                                <span className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-neutral-400 border-4 border-[#f4f4f4]"></span>
                                <h3 className="font-bold text-[#191314] mb-1">Mobile Refinement</h3>
                                <p className="text-[#666666]">
                                    Once desktop adhered to the vision, the layout was extensively tested on various mobile viewports to ensure grid layouts collapsed gracefully and touch targets remained accessible.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollColorTrigger>

            {/* ==================== SECTION 4: AI COLLAB (DARK) ==================== */}
            <ScrollColorTrigger color="#191314" matchNavbar>
                <section className="py-20 px-6 bg-[#191314]">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-[#2a2a2a] rounded-2xl p-8 border border-[#333]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-[#ecf95a] rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#191314]"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" /><path d="M8.5 8.5v.01" /><path d="M16 16v.01" /><path d="M12 12v.01" /><path d="M16 8v.01" /><path d="M9 16v.01" /></svg>
                                </div>
                                <h2 className="text-2xl font-bold text-white">Collaborating with AI</h2>
                            </div>
                            <div className="prose text-neutral-300 max-w-none space-y-4">
                                <p>
                                    Working with AI allows for prioritizing <strong>speed and reliability</strong> without cutting corners.
                                </p>
                                <ul className="space-y-3 list-none pl-0">
                                    <li className="pl-4 border-l-2 border-[#ecf95a]">
                                        <strong className="text-white">Tailwind CSS:</strong> Utilization of Tailwind is efficient for LLMs. It generates accurately, reducing context switching and ensuring a consistent design system without managing large stylesheets.
                                    </li>
                                    <li className="pl-4 border-l-2 border-[#ecf95a]">
                                        <strong className="text-white">Next.js App Router:</strong> Choosing the App Router enables a clear separation of concerns, isolating server-side logic from client-side interactivity to reduce hydration error risks.
                                    </li>
                                    <li className="pl-4 border-l-2 border-[#ecf95a]">
                                        <strong className="text-white">TypeScript:</strong> TypeScript serves as a safety net, allowing the AI to "check its own work" before code execution, catching type mismatches early.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollColorTrigger>

            {/* ==================== SECTION 5: PERFORMANCE & ROADMAP (LIGHT) ==================== */}
            <ScrollColorTrigger color="#ffffff" matchNavbar>
                <section className="py-20 px-6 bg-white">
                    <div className="max-w-4xl mx-auto">
                        {/* Performance Map */}
                        <div className="mb-20">
                            <h2 className="text-2xl font-bold text-[#191314] mb-4">React Performance Audit</h2>
                            <div className="prose text-[#666666] max-w-none mb-8">
                                <p>
                                    Auditing the site using React Best Practices involved delving deeper than simple metrics, looking for architectural improvements.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="border border-[#e5e5e5] rounded-xl p-5">
                                    <h3 className="font-bold text-[#191314] mb-2">Layout Thrashing</h3>
                                    <p className="text-sm text-[#666666]">
                                        Discovery that animating layout properties like `height` caused jank. Switching to animate `transform` and `opacity` enabled smoother animations.
                                    </p>
                                </div>
                                <div className="border border-[#e5e5e5] rounded-xl p-5">
                                    <h3 className="font-bold text-[#191314] mb-2">Client vs Server Boundaries</h3>
                                    <p className="text-sm text-[#666666]">
                                        Identification of excessive hydration of static content. Pushing content to Server Components (RSC) reduced the JavaScript bundle size significantly.
                                    </p>
                                </div>
                                <div className="border border-[#e5e5e5] rounded-xl p-5">
                                    <h3 className="font-bold text-[#191314] mb-2">Cumulative Layout Shift (CLS)</h3>
                                    <p className="text-sm text-[#666666]">
                                        Images initially loading without explicit dimensions caused content jumps. Enforcing aspect ratios reserves space before assets load.
                                    </p>
                                </div>
                                <div className="border border-[#e5e5e5] rounded-xl p-5">
                                    <h3 className="font-bold text-[#191314] mb-2">Font Loading Strategies</h3>
                                    <p className="text-sm text-[#666666]">
                                        Optimizing font loading using `next/font` eliminated flashes of unstyled text and improved page stability.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Roadmap */}
                        <div className="bg-[#f4f4f4] rounded-2xl p-8 border border-neutral-100 flex flex-col md:flex-row items-start md:items-center gap-6">
                            <div className="bg-white p-4 rounded-full shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#191314]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-[#191314] mb-2">What's Next: CMS Integration</h3>
                                <p className="text-[#666666]">
                                    Currently, all content is static. The next major milestone is connecting a headless CMS to empower dynamic content management, removing the need for code commits to update text.
                                </p>
                            </div>
                            <div className="px-4 py-2 bg-[#191314] text-white font-medium text-sm rounded-full">
                                Coming Soon
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollColorTrigger>

            {/* Back Navigation & Footer */}
            <ScrollColorTrigger color="#ffffff" matchNavbar>
                <section className="bg-white py-16 px-6 border-t border-neutral-100">
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
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f4f4f4] text-[#191314] font-medium hover:bg-[#e5e5e5] transition-colors border border-transparent"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                            Back to Home
                        </Link>
                    </div>
                </section>
            </ScrollColorTrigger>

            <ScrollColorTrigger color="#191314" matchNavbar>
                <Footer />
            </ScrollColorTrigger>
        </>
    );
}
