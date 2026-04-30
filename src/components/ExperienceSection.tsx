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
        <div className="flex flex-col gap-8">
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
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-transparent opacity-70"></div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground tracking-tight mb-1">{item.title}</h3>
                  <p className="text-primary font-medium">{item.place}</p>
                </div>
                <div className="mt-2 md:mt-0 text-muted-foreground whitespace-nowrap bg-white/5 px-3 py-1 rounded-full text-sm font-medium">
                  {item.date}
                </div>
              </div>
              
              <ul className="list-disc list-outside ml-5 text-muted-foreground space-y-2 mt-4">
                {Array.isArray(item.desc) ? (
                  item.desc.map((point: string, idx: number) => (
                    <li key={idx} className="leading-relaxed text-[15px]">{point}</li>
                  ))
                ) : (
                  <p>{item.desc}</p>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
