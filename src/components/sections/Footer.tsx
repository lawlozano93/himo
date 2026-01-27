import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-12 px-6 flex items-center justify-center min-h-[30vh]">
            <div className="max-w-6xl mx-auto w-full">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Navigation Links */}
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-8">
                        <Link
                            href="/#projects"
                            className="text-neutral-400 hover:text-white text-sm font-medium transition-colors"
                        >
                            Learning Focus
                        </Link>
                        <Link
                            href="/experience"
                            className="text-neutral-400 hover:text-white text-sm font-medium transition-colors"
                        >
                            Experience
                        </Link>
                        <a
                            href="https://voiceinthenoise.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-400 hover:text-white text-sm font-medium transition-colors"
                        >
                            Voice in the Noise
                        </a>
                        <a
                            href="mailto:lawlozano93@gmail.com"
                            className="text-neutral-400 hover:text-white text-sm font-medium transition-colors"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-neutral-500">
                        <span>Vibe-coded with Antigravity and Cursor, shipped on Vercel.</span>
                        <span>© 2026 Himo</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
