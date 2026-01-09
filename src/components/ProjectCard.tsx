"use client";

import Link from "next/link";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { useEffect, useState } from "react";

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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Simple flat card for mobile
    const MobileCardContent = () => (
        <div className="bg-[#f4f4f4] rounded-2xl p-5 h-full flex flex-col relative min-h-[140px]">
            <h3 className="text-lg font-bold text-[#191314] mb-2">{title}</h3>
            <p className="text-[#666666] text-sm leading-relaxed pr-8 flex-grow">{description}</p>
            <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 text-[#191314]"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            </div>
        </div>
    );

    // 3D card for desktop
    const DesktopCardContent = () => (
        <CardContainer containerClassName="w-full h-full">
            <CardBody className="bg-[#f4f4f4] group-hover:bg-[#ecf95a] rounded-2xl p-5 h-full flex flex-col relative transition-colors duration-300 min-h-[140px]">
                <CardItem translateZ={30}>
                    <h3 className="text-lg font-bold text-[#191314] mb-2">{title}</h3>
                </CardItem>
                <CardItem translateZ={20} className="flex-grow">
                    <p className="text-[#666666] text-sm leading-relaxed pr-8">{description}</p>
                </CardItem>
                <CardItem translateZ={50} className="!w-auto absolute bottom-4 right-4">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:bg-[#191314] transition-colors">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-4 h-4 text-[#191314] group-hover:text-white transition-colors"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </div>
                </CardItem>
            </CardBody>
        </CardContainer>
    );

    const wrapperClasses = "group block h-full";
    const CardContent = isMobile ? MobileCardContent : DesktopCardContent;

    if (isExternal) {
        return (
            <a href={url} target="_blank" rel="noopener noreferrer" className={wrapperClasses}>
                <CardContent />
            </a>
        );
    }

    return (
        <Link href={url} className={wrapperClasses}>
            <CardContent />
        </Link>
    );
}
