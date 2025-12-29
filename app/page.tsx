import { ProjectLayout } from "@/components/ProjectLayout";
import { HeroSection } from "@/sections/HeroSection";
import { ProjectHighlights } from "@/sections/ProjectHighlights";
import { MissionImpact } from "@/sections/MissionImpact";
import { LetsConnect } from "@/sections/LetsConnect";

export default function Home() {
  return (
    <ProjectLayout>
      <HeroSection />
      <MissionImpact />
      <ProjectHighlights />
      <LetsConnect />
    </ProjectLayout>
  );
}
