import PageWrapper from "@/components/PageWrapper";
import AnimatedText from "@/components/AnimatedText";
import Projects from "@/app/sections/projects";
import About from "@/app/sections/About";
import TechStack from "@/app/sections/techstack";
import Contact from "@/app/sections/Contact";

export default function Home() {
  return (
    <PageWrapper className="flex flex-col items-center">
      <h1 className="text-6xl mt-24">Jarne Rolf</h1>
      <h2 className="text-3xl md:text-4xl mt-4">
        <span className="text-red-400">
          <AnimatedText words={["web", "app", "backend", "frontend"]} />
        </span>{" "}
        development
      </h2>
      <About />
      <Projects />
      <TechStack />
      <Contact />
    </PageWrapper>
  );
}
