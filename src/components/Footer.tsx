export default function Footer() {
    return (
        <footer className="py-8 px-6 bg-[#191314]">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <p className="text-[#666666] text-sm">
                    © {new Date().getFullYear()} himo
                </p>
                <a
                    href="mailto:hello@himo.site"
                    className="text-[#666666] hover:text-[#ecf95a] text-sm transition-colors"
                >
                    hello@himo.site
                </a>
            </div>
        </footer>
    );
}
