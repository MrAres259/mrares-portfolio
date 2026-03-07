import { LanguageProvider } from "@/contexts/LanguageContext";
import BackgroundEffects from "@/components/BackgroundEffects";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";

export default function Index() {
  return (
    <LanguageProvider>
      <BackgroundEffects />
      <CustomCursor />
      <Header />
      <main className="relative">
        <HeroSection />
        <EducationSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <footer className="relative z-10 text-center py-8 text-muted-foreground text-sm">
        © {new Date().getFullYear()} Rigel Santos
      </footer>
    </LanguageProvider>
  );
}
