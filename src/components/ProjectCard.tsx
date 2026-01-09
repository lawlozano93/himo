import Link from "next/link";

interface ProjectCardProps {
    title: string;
    description: string;
    url: string;
    isExternal?: boolean;
}

export default function ProjectCard({
    title,
    description,
    url,
    isExternal = false,
}: ProjectCardProps) {
    const CardContent = () => (
        <div className="p-6">
            <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-lg font-semibold text-[#191314] group-hover:text-[#666666] transition-colors">
                    {title}
                </h3>
                <div className="w-10 h-10 rounded-xl bg-[#ecf95a] flex items-center justify-center flex-shrink-0 group-hover:bg-[#191314] transition-colors">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5 text-[#191314] group-hover:text-white transition-colors"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                    </svg>
                </div>
            </div>
            <p className="text-[#666666] leading-relaxed">{description}</p>
        </div>
    );

    const cardClasses =
        "group block bg-white rounded-2xl border border-[#e5e5e5] hover:border-[#191314] hover:shadow-xl transition-all";

    if (isExternal) {
        return (
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClasses}
            >
                <CardContent />
            </a>
        );
    }

    return (
        <Link href={url} className={cardClasses}>
            <CardContent />
        </Link>
    );
}
