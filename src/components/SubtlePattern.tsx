"use client";

interface SubtlePatternProps {
    variant?: "dots" | "grid" | "shapes";
    className?: string;
}

export default function SubtlePattern({ variant = "shapes", className = "" }: SubtlePatternProps) {
    if (variant === "dots") {
        return (
            <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
                <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="dots-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="20" cy="20" r="2" fill="#191314" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dots-pattern)" />
                </svg>
            </div>
        );
    }

    if (variant === "grid") {
        return (
            <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
                <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#191314" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                </svg>
            </div>
        );
    }

    // Shapes variant - very faint static icons scattered
    return (
        <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
            {/* Code bracket */}
            <svg
                className="absolute top-[15%] right-[12%] w-8 h-8 text-[#191314] opacity-[0.04]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>

            {/* Sparkle */}
            <svg
                className="absolute top-[35%] right-[28%] w-6 h-6 text-[#191314] opacity-[0.03]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>

            {/* Lightning */}
            <svg
                className="absolute top-[10%] left-[8%] w-5 h-5 text-[#ecf95a] opacity-[0.15] hidden md:block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>

            {/* Terminal */}
            <svg
                className="absolute bottom-[20%] right-[18%] w-7 h-7 text-[#191314] opacity-[0.03]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
            </svg>

            {/* Lightbulb */}
            <svg
                className="absolute bottom-[35%] left-[5%] w-6 h-6 text-[#191314] opacity-[0.03] hidden md:block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>

            {/* Circle accent */}
            <div className="absolute top-[60%] right-[40%] w-3 h-3 rounded-full bg-[#ecf95a] opacity-[0.08]" />
            <div className="absolute top-[25%] left-[15%] w-2 h-2 rounded-full bg-[#191314] opacity-[0.04] hidden md:block" />
            <div className="absolute bottom-[15%] right-[8%] w-4 h-4 rounded-full bg-[#191314] opacity-[0.03]" />
        </div>
    );
}
