import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useParallax } from "@/hooks/useParallax";

export default function EducationSection() {
  const { t } = useLang();
  const { ref, isVisible } = useScrollReveal(0.15);
  const { ref: parallaxRef } = useParallax(0.06);

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
            transform: `translateY(calc(var(--parallax-y, 0px) + ${isVisible ? 0 : 20}px))`,
          }}
        >
          {t.education}
        </h2>
        <div className="flex flex-col gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="group glass glass-hover rounded-2xl p-8 transition-all duration-500 relative overflow-hidden"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${(i + 1) * 150}ms`,
              }}
            >
              <div className="absolute top-0 left-0 w-1 h-full theme-pour-line"></div>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-primary/90 font-medium text-sm">{item.place}</p>
                </div>
                <div className="shrink-0">
                  <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase border border-primary/20 shadow-[0_0_15px_hsl(var(--primary)/0.15)] group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300 theme-date-badge">
                    {item.date}
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
