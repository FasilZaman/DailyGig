import { ProjectLayout } from "@/components/ProjectLayout";
import { HeroSection } from "@/sections/HeroSection";
import { ProjectHighlights } from "@/sections/ProjectHighlights";
import { LetsConnect } from "@/sections/LetsConnect";

export default function Home() {
  return (
    <ProjectLayout>
      <HeroSection />
      <ProjectHighlights />
      <LetsConnect />
    </ProjectLayout>
  );
}
