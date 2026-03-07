import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useParallax } from "@/hooks/useParallax";

export default function ExperienceSection() {
  const { t } = useLang();
  const { ref, isVisible } = useScrollReveal(0.15);
  const { ref: parallaxRef, offset } = useParallax(0.06);

  const items = [
    { title: t.exp1Title, date: t.exp1Date, place: t.exp1Place, desc: t.exp1Desc },
    { title: t.exp2Title, date: t.exp2Date, place: t.exp2Place, desc: t.exp2Desc },
    { title: t.exp3Title, date: t.exp3Date, place: t.exp3Place, desc: t.exp3Desc },
  ];

  return (
    <section id="experience" className="relative z-10 px-6 md:px-16 py-24">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <h2
          ref={parallaxRef as React.RefObject<HTMLHeadingElement>}
          className="text-4xl md:text-5xl font-black mb-12 text-foreground transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: `translateY(${isVisible ? offset : 20 + offset}px)`,
          }}
        >
          {t.experience}
        </h2>
        <div className="flex flex-col gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="glass glass-hover rounded-xl p-8 border-l-4 border-primary hover:translate-x-2 transition-all duration-500"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${(i + 1) * 150}ms`,
              }}
            >
              <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
              <p className="text-primary font-medium text-sm mb-1">{item.place}</p>
              <p className="text-muted-foreground text-sm mb-3">{item.date}</p>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
