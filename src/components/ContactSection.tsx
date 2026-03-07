import { useLang } from "@/contexts/LanguageContext";
import { MapPin, Mail, Linkedin, Instagram } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useParallax } from "@/hooks/useParallax";

export default function ContactSection() {
  const { t } = useLang();
  const { ref, isVisible } = useScrollReveal(0.15);
  const { ref: parallaxRef, offset } = useParallax(0.06);

  const items = [
    { icon: MapPin, label: t.location, href: null },
    { icon: Mail, label: t.email, href: `mailto:${t.email}` },
    { icon: Linkedin, label: t.linkedin, href: "https://www.linkedin.com/in/miguel-rigel-santos-carpio-202a91172" },
  ];

  return (
    <section id="contact" className="relative z-10 px-6 md:px-16 py-24">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <h2
          ref={parallaxRef as React.RefObject<HTMLHeadingElement>}
          className="text-4xl md:text-5xl font-black mb-12 text-foreground transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: `translateY(${isVisible ? offset : 20 + offset}px)`,
          }}
        >
          {t.contact}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Wrapper = item.href ? "a" : "div";
            const extraProps = item.href ? { href: item.href, target: "_blank", rel: "noopener noreferrer" } : {};
            return (
              <Wrapper
                key={i}
                {...extraProps}
                className="glass glass-hover rounded-xl p-8 flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-all duration-500"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transitionDelay: `${(i + 1) * 150}ms`,
                }}
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
