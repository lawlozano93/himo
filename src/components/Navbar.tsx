"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
    const { backgroundColor } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Determine if background is dark
    const isDark = backgroundColor === "#191314";

    // Text colors based on background
    const textColor = isDark ? "text-white" : "text-[#191314]";
    const navLinkColor = isDark ? "text-[#e5e5e5] hover:text-white" : "text-[#666666] hover:text-[#191314]";


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // If menu is open, force dark text for visibility on white menu background
    const logoColor = isMenuOpen ? "text-[#191314]" : textColor;
    const menuButtonColor = isMenuOpen ? "text-[#191314]" : (isDark ? "text-white" : "text-[#666666]");
    const navBorderColor = isScrolled ? (isDark ? "border-white/10" : "border-[#191314]/10") : "border-transparent";

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? `backdrop-blur-sm border-b ${navBorderColor}`
                : "bg-transparent border-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-5">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className={`text-xl font-bold transition-colors ${logoColor}`}
                    >
                        himo
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <a
                            href="#projects"
                            className={`transition-colors font-medium ${navLinkColor}`}
                        >
                            Learning Focus
                        </a>
                        <Link
                            href="/experience"
                            className={`transition-colors font-medium ${navLinkColor}`}
                        >
                            Experience
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`md:hidden p-2 transition-colors ${menuButtonColor}`}
                        aria-label="Toggle menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden pt-4 pb-2 border-t border-[#e5e5e5] mt-4 bg-white rounded-lg">
                        <div className="flex flex-col gap-3">
                            <a
                                href="#projects"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-[#666666] hover:text-[#191314] transition-colors font-medium py-2"
                            >
                                Learning Focus
                            </a>
                            <Link
                                href="/experience"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-[#666666] hover:text-[#191314] transition-colors font-medium py-2"
                            >
                                Experience
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
