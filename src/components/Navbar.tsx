"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/90 backdrop-blur-sm border-b border-[#e5e5e5]"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-5">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-xl font-bold text-[#191314] hover:text-[#666666] transition-colors"
                    >
                        himo
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <a
                            href="#projects"
                            className="text-[#666666] hover:text-[#191314] transition-colors font-medium"
                        >
                            Projects
                        </a>
                        <Link
                            href="/experience"
                            className="text-[#666666] hover:text-[#191314] transition-colors font-medium"
                        >
                            Experience
                        </Link>
                        <a
                            href="mailto:lawlozano93@gmail.com"
                            className="px-4 py-2 rounded-lg bg-[#191314] text-white hover:bg-[#ecf95a] hover:text-[#191314] transition-colors font-semibold text-sm"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-[#666666] hover:text-[#191314] transition-colors"
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
                                Projects
                            </a>
                            <Link
                                href="/experience"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-[#666666] hover:text-[#191314] transition-colors font-medium py-2"
                            >
                                Experience
                            </Link>
                            <a
                                href="mailto:lawlozano93@gmail.com"
                                className="px-4 py-3 rounded-lg bg-[#191314] text-white text-center hover:bg-[#ecf95a] hover:text-[#191314] transition-colors font-semibold mt-2"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
