import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useParallax } from "@/hooks/useParallax";

export default function EducationSection() {
  const { t } = useLang();
  const { ref, isVisible } = useScrollReveal(0.15);
  const { ref: parallaxRef, offset } = useParallax(0.06);

  const items = [
    { title: t.edu1Title, place: t.edu1Place, date: t.edu1Date, desc: t.edu1Desc },
    { title: t.edu2Title, place: t.edu2Place, date: t.edu2Date, desc: t.edu2Desc },
  ];

  return (
    <section id="education" className="relative z-10 px-6 md:px-16 py-24">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <h2
          ref={parallaxRef as React.RefObject<HTMLHeadingElement>}
          className="text-4xl md:text-5xl font-black mb-12 text-foreground transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: `translateY(${isVisible ? offset : 20 + offset}px)`,
          }}
        >
          {t.education}
        </h2>
        <div className="flex flex-col gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="glass glass-hover rounded-2xl p-8 transition-all duration-500 relative overflow-hidden"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${(i + 1) * 150}ms`,
              }}
            >
              <div className="absolute top-0 left-0 w-1 h-full theme-pour-line"></div>
              <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
              <p className="text-primary font-medium text-sm mb-1">{item.place}</p>
              <p className="text-muted-foreground text-sm mb-3 theme-date-text transition-colors duration-500">{item.date}</p>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
