"use client";

import { WobbleCard } from "@/components/ui/wobble-card";
import { FlipWords } from "@/components/ui/flip-words";
import FloatingIcons from "@/components/FloatingIcons";
import HeroToolIcons from "@/components/HeroToolIcons";
import MobileToolsFloating from "@/components/MobileToolsFloating";
import ThinkingSection from "@/components/ThinkingSection";
import Footer from "@/components/Footer";
import Link from "next/link";

const flipWords = ["Design", "Research", "Build", "Connect", "Deploy"];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 pt-20 pb-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto w-full">
          {/* Massive "Himo" text */}
          <h1 className="text-massive text-[#191314] animate-fade-in">
            Himo
          </h1>

          {/* Meaning + Description */}
          <div className="mt-6 max-w-xl animate-fade-in-delayed">
            <p className="text-lg text-[#666666] mb-4">
              <span className="italic">means Create in Waray</span>
            </p>
            <p className="text-xl md:text-2xl text-[#191314] leading-relaxed mb-2">
              Work curated and built by{" "}
              <span className="relative group inline-block">
                <Link
                  href="/experience"
                  className="underline decoration-[#ecf95a] decoration-4 underline-offset-4 hover:bg-[#ecf95a] transition-colors px-1"
                >
                  Lao
                </Link>
                {/* Hover tooltip */}
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1.5 bg-[#191314] text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  Learn about the human behind Himo
                  <span className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-[#191314]"></span>
                </span>
              </span>.
            </p>

            {/* FlipWords tagline */}
            <div className="text-lg text-[#666666] mb-6 flex flex-wrap items-center gap-1">
              <FlipWords
                words={flipWords}
                duration={2500}
                className="!text-[#191314] font-semibold !px-0"
              />
              <span>rapidly with AI, connect systems, deploy full-stack, centralize operations.</span>
            </div>

            {/* Status pill with pulsating dot */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#191314] text-white text-sm">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ecf95a] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ecf95a]"></span>
              </span>
              <span className="hidden md:inline">Currently Customer Success Manager @ ThisFish</span>
              <span className="md:hidden">Currently CSM @ ThisFish</span>
            </div>

            {/* Mobile Tools Floating - shows only on mobile, below status badge */}
            <div className="md:hidden relative h-64 mt-4">
              <MobileToolsFloating />
            </div>
          </div>
        </div>

        {/* Floating Icons */}
        <FloatingIcons />

        {/* Hero Tool Icons - draggable tools showcase */}
        <HeroToolIcons />
      </section>

      {/* Projects Section with WobbleCards */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#191314] mb-12">
            Projects
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">
            {/* App Experiments - Large Card */}
            <Link href="/projects/app-experiments" className="lg:col-span-2 h-full">
              <WobbleCard
                containerClassName="bg-[#191314] h-full"
                className="flex flex-col justify-start h-full"
              >
                <span className="inline-flex self-start items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#ecf95a] text-[#191314] mb-3">
                  Case Studies
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  App Experiments
                </h3>
                <p className="text-neutral-300 text-sm md:text-base max-w-lg">
                  Exploring how AI solves real startup problems. A collection of experiments including Bubu (AI-driven onboarding), customer analytics, and more.
                </p>
              </WobbleCard>
            </Link>

            {/* Notion Systems - Side Card */}
            <Link href="/projects/notion-systems" className="h-full">
              <WobbleCard
                containerClassName="bg-[#ecf95a] h-full"
                className="flex flex-col justify-start h-full"
              >
                <span className="inline-flex self-start items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#191314] text-white mb-3">
                  Systems
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-[#191314] mb-2">
                  Notion Systems
                </h3>
                <p className="text-[#191314]/80 text-sm md:text-base">
                  How centralizing operations in Notion enables rapid iteration. Covers customer lifecycle, automations, dashboards, and team workflows.
                </p>
              </WobbleCard>
            </Link>
          </div>
        </div>
      </section>

      {/* Thinking & Essays Section */}
      <ThinkingSection />

      {/* Contact */}
      <section className="py-24 px-6 bg-[#ecf95a]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#191314] mb-6">
            Let&apos;s connect
          </h2>
          <a
            href="mailto:lawlozano93@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#191314] text-white font-semibold hover:bg-[#333] transition-colors"
          >
            lawlozano93@gmail.com
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
