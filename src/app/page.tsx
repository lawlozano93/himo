import Hero from "@/components/sections/Hero";
import ThoughtProcess from "@/components/sections/ThoughtProcess";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/sections/Footer";
import DynamicBackground from "@/components/ui/DynamicBackground";
import ScrollColorTrigger from "@/components/ui/ScrollColorTrigger";

export default function Home() {
  return (
    <>
      <DynamicBackground />

      <main className="relative z-0">
        <ScrollColorTrigger color="#ffffff" viewportAmount={0.55}>
          <Hero />
        </ScrollColorTrigger>

        <ScrollColorTrigger color="#ECF95A" viewportAmount={0.5}>
          <ThoughtProcess />
        </ScrollColorTrigger>

        <ScrollColorTrigger id="projects" color="#191314" viewportAmount={0.4}>
          <Projects />
        </ScrollColorTrigger>

        <ScrollColorTrigger color="#191314" viewportAmount={0.5}>
          <Footer />
        </ScrollColorTrigger>
      </main>
    </>
  );
}
