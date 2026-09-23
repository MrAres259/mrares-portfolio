import { ArrowUpRight, Github, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/contexts/LanguageContext";
import { links } from "@/lib/portfolio-data";

export default function ContactSection() {
  const { t } = useLang();

  return (
    <section id="contact" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8">
      <div className="glass-strong rounded-3xl p-8 sm:p-12">
        <p className="section-label">{t.contact.label}</p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl">
          {t.contact.title}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
          {t.contact.body}
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href={`mailto:${links.email}`}>
              <Mail />Email<ArrowUpRight />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin />LinkedIn
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={links.github} target="_blank" rel="noopener noreferrer">
              <Github />GitHub
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={links.instagram} target="_blank" rel="noopener noreferrer">
              <Instagram />Instagram
            </a>
          </Button>
        </div>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <MapPin className="size-4 text-primary" />
            {t.contact.location}
          </span>
          <span className="inline-flex items-center gap-2 select-all">
            <Mail className="size-4 text-primary" />
            {links.email}
          </span>
        </div>
      </div>
    </section>
  );
}
