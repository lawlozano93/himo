"use client";

import { CometCard } from "@/components/ui/comet-card";
import Image from "next/image";

interface ProfileIdCardProps {
    name: string;
    title: string;
    email: string;
    location: string;
    phone?: string;
    photoUrl?: string;
    idCode?: string;
}

export function ProfileIdCard({
    name,
    title,
    email,
    location,
    phone,
    photoUrl = "/lao-photo.png",
    idCode = "#LAO25",
}: ProfileIdCardProps) {
    return (
        <CometCard className="inline-block">
            <div
                className="flex w-72 flex-col items-stretch rounded-2xl bg-[#191314] p-3 shadow-2xl"
                style={{
                    transformStyle: "preserve-3d",
                }}
            >
                {/* Photo/GIF */}
                <div className="mx-1">
                    <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                        <Image
                            src={photoUrl}
                            alt={name}
                            fill
                            className="object-cover"
                        />
                        {/* Overlay gradient - lighter for background images */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#191314] via-transparent to-transparent opacity-40" />
                    </div>
                </div>

                {/* Info section */}
                <div className="mt-3 px-2 pb-2">
                    <h3 className="text-lg font-bold text-white">{name}</h3>
                    <p className="text-sm text-[#ecf95a] font-medium">{title}</p>

                    <div className="mt-3 space-y-1.5 text-xs text-gray-400">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            <span>{email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            <span>{location}</span>
                        </div>
                        {phone && (
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                                <span>{phone}</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-2 flex items-center justify-between border-t border-white/10 px-2 pt-3 font-mono">
                    <div className="text-xs text-white/80">Human of Himo</div>
                    <div className="text-xs text-[#ecf95a]/60">{idCode}</div>
                </div>
            </div>
        </CometCard>
    );
}
