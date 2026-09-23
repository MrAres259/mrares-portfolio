import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/contexts/LanguageContext";
import { person } from "@/lib/portfolio-data";

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-8 sm:px-8 sm:pb-20 sm:pt-12 lg:grid-cols-12 lg:pb-24 lg:pt-14">
      <div className="lg:col-span-8">
        <div className="status-badge"><span className="status-dot" />{t.hero.available}</div>
        <p className="section-label mt-8">{t.hero.eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-display text-[2.6rem] font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
          {t.hero.headlineStart} <span className="accent-text">{t.hero.headlineAccent}</span>
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">{t.hero.intro}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button asChild size="lg"><a href="#work">{t.hero.primary}<ArrowDown /></a></Button>
          <Button asChild size="lg" variant="outline"><a href="#contact">{t.hero.secondary}</a></Button>
        </div>
      </div>
      <aside className="glass-strong rounded-3xl p-5 lg:col-span-4">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <span className="section-label">{t.hero.profileLabel}</span><span className="text-xs text-primary">● {t.hero.profileStatus}</span>
        </div>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-md bg-border mt-5">
          {t.hero.proof.map(({ value, label }) => (
            <div key={label} className="bg-card p-4">
              <p className="font-display text-2xl font-bold">{value}</p><p className="mt-1 text-xs text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 font-display text-base font-semibold">{person.name}</p>
        <p className="text-xs text-muted-foreground">a.k.a. {person.alias}</p>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{t.hero.profileNote}</p>
      </aside>
    </section>
  );
}
