import { useLang } from "@/contexts/LanguageContext";

export default function EducationSection() {
  const { t } = useLang();

  const items = [
    { title: t.edu1Title, place: t.edu1Place, date: t.edu1Date, desc: t.edu1Desc },
    { title: t.edu2Title, place: t.edu2Place, date: t.edu2Date, desc: t.edu2Desc },
  ];

  return (
    <section id="education" className="relative z-10 px-6 md:px-16 py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-12 text-foreground">{t.education}</h2>
        <div className="flex flex-col gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="glass glass-hover rounded-xl p-8 border-l-4 border-primary hover:translate-x-2 transition-all duration-300"
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
