
import BackgroundEffects from "@/components/BackgroundEffects";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";

import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <>
      <BackgroundEffects />
      <CustomCursor />
      <Header />
      <main className="relative">
        <HeroSection />
        <FeaturedProjectsSection />
        <ExperienceSection />
        <EducationSection />
        
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
