import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/sections/AboutSection";
import { ContactSection } from "@/sections/ContactSection";
import { ExperienceAndEducationSection } from "@/sections/ExperienceAndEducationSection";
import { HeroSection } from "@/sections/HeroSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { TechnicalSkillsSection } from "@/sections/TechnicalSkillsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111319]">
      <Navbar />
      <HeroSection />
      <AboutSection/>
      <TechnicalSkillsSection/>
      <ProjectsSection/>
      <ExperienceAndEducationSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}
