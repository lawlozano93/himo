import Link from "next/link";
import SubtlePattern from "@/components/SubtlePattern";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Building Himo | App Experiments",
    description: "A case study on building a modern, AI-native portfolio website.",
};

export default function PortfolioV4Page() {
    return (
        <>
            <section className="pt-32 pb-12 px-6 relative">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-[#f4f4f4] rounded-xl p-6">
                            <h2 className="text-lg font-bold text-[#191314] mb-3">The Stack</h2>
                            <ul className="space-y-2 text-[#666666]">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#ecf95a]"></span>
                                    <span>Next.js 15 (App Router)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#ecf95a]"></span>
                                    <span>React 19 & TypeScript</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#ecf95a]"></span>
                                    <span>Tailwind CSS 4</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#ecf95a]"></span>
                                    <span>Framer Motion</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#ecf95a]"></span>
                                    <span>Vercel Deployment</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-[#191314] rounded-xl p-6 text-white">
                            <h2 className="text-lg font-bold text-white mb-3">The Workflow</h2>
                            <ul className="space-y-2 text-neutral-400">
                                <li className="flex items-center gap-2">
                                    <span className="text-[#ecf95a]">➜</span>
                                    <span>"Vibe-coding" with Antigravity</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-[#ecf95a]">➜</span>
                                    <span>Cursor IDE Integration</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-[#ecf95a]">➜</span>
                                    <span>Iteration: Prompt, Preview, Refine</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-[#ecf95a]">➜</span>
                                    <span>Automated Repo Sync</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-16">
                        {/* Context Section */}
                        <section>
                            <h2 className="text-2xl font-bold text-[#191314] mb-4">The Context: Escaping WordPress</h2>
                            <div className="prose text-[#666666] max-w-none">
                                <p className="mb-4">
                                    For years, I relied on WordPress. It was familiar, but it came with a heavy cost: <strong>plugin dependency</strong>. Every feature required a new plugin, every plugin added bloat, and every update risked breaking the site. Customization felt like fighting the platform rather than building on it.
                                </p>
                                <p>
                                    Moving to a custom Next.js stack was about regaining control. No more black boxes. No more "update and pray." Just clean, semantic code that I own completely. The result is a site that is significantly faster, more secure, and infinitely more flexible.
                                </p>
                            </div>
                        </section>

                        {/* Performance Section */}
                        <section>
                            <h2 className="text-2xl font-bold text-[#191314] mb-4">React Performance Audit</h2>
                            <div className="prose text-[#666666] max-w-none mb-6">
                                <p>
                                    One of the key benefits of building from scratch is the ability to audit and optimize performance at a granular level. We used React Developer Tools and deeper insights to ensure the site isn't just fast, but <em>efficient</em>.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="border border-[#e5e5e5] rounded-xl p-5">
                                    <h3 className="font-bold text-[#191314] mb-2">Component Architecture</h3>
                                    <p className="text-sm text-[#666666]">
                                        By using nice, small, atomic components (like <code>ProjectsGrid</code>, <code>ThinkingSection</code>), we minimize re-renders. When one part of the UI updates, the rest stays static.
                                    </p>
                                </div>
                                <div className="border border-[#e5e5e5] rounded-xl p-5">
                                    <h3 className="font-bold text-[#191314] mb-2">Server Components</h3>
                                    <p className="text-sm text-[#666666]">
                                        Leveraging Next.js App Router means most of the heavy lifting happens on the server. The client receives pre-rendered HTML, resulting in excellent First Contentful Paint (FCP) scores.
                                    </p>
                                </div>
                                <div className="border border-[#e5e5e5] rounded-xl p-5">
                                    <h3 className="font-bold text-[#191314] mb-2">Code Splitting</h3>
                                    <p className="text-sm text-[#666666]">
                                        Route-based splitting ensures you only load the JavaScript needed for the page you're viewing. No 5MB bundles just to view the home page.
                                    </p>
                                </div>
                                <div className="border border-[#e5e5e5] rounded-xl p-5">
                                    <h3 className="font-bold text-[#191314] mb-2">Asset Optimization</h3>
                                    <p className="text-sm text-[#666666]">
                                        Images are automatically optimized by `next/image` to prevent layout shifts and serve modern formats like WebP/AVIF.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Roadmap Section */}
                        <section>
                            <h2 className="text-2xl font-bold text-[#191314] mb-4">What's Next?</h2>
                            <div className="bg-[#f9f9f9] border border-[#e5e5e5] rounded-xl p-6">
                                <p className="text-[#666666] mb-4">
                                    A portfolio is never truly "done." The modular nature of this architecture makes it easy to add features incrementally.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 w-5 h-5 rounded-full border border-[#191314] flex items-center justify-center shrink-0">
                                            <div className="w-2.5 h-2.5 rounded-full bg-[#191314]"></div>
                                        </div>
                                        <div>
                                            <span className="font-bold text-[#191314] block">CMS Integration</span>
                                            <span className="text-sm text-[#666666]">Connecting a headless CMS (like Sanity or Convex) to manage blog posts and project case studies dynamically.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 w-5 h-5 rounded-full border border-[#999] flex items-center justify-center shrink-0">
                                        </div>
                                        <div>
                                            <span className="font-bold text-[#666666] block">Dark Mode Toggle</span>
                                            <span className="text-sm text-[#666666]">Implementing a system-aware theme switcher.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 w-5 h-5 rounded-full border border-[#999] flex items-center justify-center shrink-0">
                                        </div>
                                        <div>
                                            <span className="font-bold text-[#666666] block">More Granular Animations</span>
                                            <span className="text-sm text-[#666666]">Adding scroll-triggered reveals and more interactive elements to "wow" visitors.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
