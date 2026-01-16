import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-8 px-6 bg-[#191314]">
            <div className="max-w-6xl mx-auto">
                {/* Navigation Links */}
                <div className="flex flex-wrap items-center gap-6 mb-6">
                    <Link
                        href="/#projects"
                        className="text-[#999999] hover:text-[#ecf95a] text-sm transition-colors"
                    >
                        Projects
                    </Link>
                    <Link
                        href="/experience"
                        className="text-[#999999] hover:text-[#ecf95a] text-sm transition-colors"
                    >
                        Experience
                    </Link>
                    <a
                        href="https://voiceinthenoise.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#999999] hover:text-[#ecf95a] text-sm transition-colors"
                    >
                        Voice in the Noise
                    </a>
                    <a
                        href="mailto:lawlozano93@gmail.com"
                        className="text-[#999999] hover:text-[#ecf95a] text-sm transition-colors"
                    >
                        Contact
                    </a>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#666666]">
                    <span>Built in Cebu 🇵🇭 with AI, Cursor, and Vercel</span>
                    <span>© 2026 Himo</span>
                </div>
            </div>
        </footer>
    );
}
