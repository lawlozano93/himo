import ProjectCard from "@/components/ProjectCard";
import Chip from "@/components/Chip";
import ToolsMarquee from "@/components/ToolsMarquee";
import FloatingIcons from "@/components/FloatingIcons";
import Footer from "@/components/Footer";
import { getFeaturedProjects } from "@/lib/data";
import Link from "next/link";

// ISR: Revalidate every hour
export const revalidate = 3600;

const exploringChips = [
  "AI implementation",
  "Notion workflows",
  "App prototyping",
  "CS systems",
  "Startup operations",
];

const tools = [
  { name: "Antigravity", icon: "antigravity", usage: "AI-powered coding assistant for complex development tasks" },
  { name: "Claude", icon: "claude", usage: "Strategic thinking, writing, and code review partner" },
  { name: "Cursor", icon: "cursor", usage: "AI-first code editor for rapid development" },
  { name: "ChatGPT", icon: "chatgpt", usage: "Research, brainstorming, and quick answers" },
  { name: "Notion", icon: "notion", usage: "Project management, documentation, and knowledge base" },
  { name: "Figma", icon: "figma", usage: "UI/UX design and prototyping" },
  { name: "VS Code", icon: "vscode", usage: "Primary code editor with extensions" },
  { name: "Vercel", icon: "vercel", usage: "Deployment and hosting for web projects" },
  { name: "Supabase", icon: "supabase", usage: "Backend-as-a-service for databases and auth" },
  { name: "Next.js", icon: "nextjs", usage: "React framework for production apps" },
  { name: "Tailwind", icon: "tailwind", usage: "Utility-first CSS for rapid styling" },
  { name: "GitHub", icon: "github", usage: "Version control and collaboration" },
];

export default async function Home() {
  const projects = await getFeaturedProjects();

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
              <span className="italic">Means Create in Waray</span>
            </p>
            <p className="text-xl md:text-2xl text-[#191314] leading-relaxed mb-6">
              A collection of experience, app builds, and explorations of{" "}
              <Link
                href="/experience"
                className="underline decoration-[#ecf95a] decoration-4 underline-offset-4 hover:bg-[#ecf95a] transition-colors px-1"
              >
                Lao
              </Link>
            </p>

            {/* Status pill with pulsating dot */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#191314] text-white text-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ecf95a] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ecf95a]"></span>
              </span>
              Currently Customer Success Manager @ ThisFish
            </div>
          </div>
        </div>

        {/* Floating Icons */}
        <FloatingIcons />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#191314] mb-12">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                url={project.url}
                isExternal={project.url.startsWith("http")}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Currently Exploring */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#191314] mb-8">
            Currently Exploring
          </h2>
          <div className="flex flex-wrap gap-3">
            {exploringChips.map((chip) => (
              <Chip key={chip} label={chip} />
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section - Animated tooltips */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#191314] mb-4">
            Tools I Use
          </h2>
          <p className="text-[#666666] mb-12 max-w-xl">
            My daily toolkit for building, designing, and shipping.
          </p>
          <ToolsMarquee tools={tools} />
        </div>
      </section>

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
