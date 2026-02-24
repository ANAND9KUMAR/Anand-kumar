import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import PremiumBackground from "@/components/PremiumBackground";
import HeroSection from "@/components/HeroSection";
import MagicalCursor from "@/components/MagicalCursor";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <PremiumBackground />
      <MagicalCursor />
      <ScrollProgress />
      <Navbar />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
