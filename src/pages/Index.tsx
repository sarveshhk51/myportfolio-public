import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ExtracurricularsSection from "@/components/ExtracurricularsSection";
import ContactSection from "@/components/ContactSection";
import ClickSpark from "@/components/ClickSpark";
import LightRays from "@/components/LightRays";

const Index = () => {
  return (
    <ClickSpark sparkColor="#ffc206" sparkSize={12} sparkRadius={20} sparkCount={8} duration={500}>
      <div className="bg-background min-h-screen relative">
        {/* Fixed background light rays */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffc206"
            raysSpeed={1.2}
            lightSpread={0.8}
            rayLength={1.4}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.08}
            distortion={0.04}
          />
        </div>
        <div className="relative z-10">
          <Navbar />
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <CertificationsSection />
          <ExperienceSection />
          <ExtracurricularsSection />
          <ContactSection />
        </div>
      </div>
    </ClickSpark>
  );
};

export default Index;
