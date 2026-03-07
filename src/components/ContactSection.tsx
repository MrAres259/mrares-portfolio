import { useLang } from "@/contexts/LanguageContext";
import { MapPin, Mail, Linkedin } from "lucide-react";

export default function ContactSection() {
  const { t } = useLang();

  const items = [
    { icon: MapPin, label: t.location, href: null },
    { icon: Mail, label: t.email, href: `mailto:${t.email}` },
    { icon: Linkedin, label: t.linkedin, href: "https://www.linkedin.com/in/rigel-santos-2411b4232/" },
  ];

  return (
    <section id="contact" className="relative z-10 px-6 md:px-16 py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-12 text-foreground">{t.contact}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Wrapper = item.href ? "a" : "div";
            const extraProps = item.href ? { href: item.href, target: "_blank", rel: "noopener noreferrer" } : {};
            return (
              <Wrapper
                key={i}
                {...extraProps}
                className="glass glass-hover rounded-xl p-8 flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-all duration-300"
                data-interactive
              >
                <item.icon className="w-8 h-8 text-primary" />
                <p className="text-foreground font-medium">{item.label}</p>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
