import { useEffect } from "react";
import { useLang } from "@/contexts/LanguageContext";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import ExperienceSection from "@/components/ExperienceSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import CredentialsSection from "@/components/CredentialsSection";
import ContactSection from "@/components/ContactSection";

export default function Index() {
  const { t } = useLang();

  useEffect(() => {
    document.title = t.meta.title;
  }, [t]);

  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <div className="ambient-grid fixed inset-0 opacity-45" aria-hidden="true" />
      <div className="ambient-light fixed inset-0" aria-hidden="true" />
      <SiteHeader />
      <main>
        <Hero />
        <WorkSection />
        <ExperienceSection />
        <CapabilitiesSection />
        <CredentialsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
