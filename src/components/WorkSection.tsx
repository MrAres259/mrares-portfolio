import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { projectIds, projects } from "@/lib/portfolio-data";

export default function WorkSection() {
  const { t } = useLang();

  return (
    <section id="work" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8">
      <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="section-label">{t.work.label}</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{t.work.title}</h2>
        </div>
        <p className="text-sm leading-7 text-muted-foreground lg:col-span-4">{t.work.intro}</p>
      </div>
      <div className="mt-9 grid gap-6 md:grid-cols-2">
        {projectIds.map((id, index) => {
          const copy = t.projects[id];
          const data = projects[id];
          return (
            <Link
              key={id}
              to={data.path}
              className="project-card glass group overflow-hidden rounded-3xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                <img
                  src={data.cover}
                  alt={copy.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute left-4 top-4 rounded-md bg-background/85 px-2.5 py-1 text-[10px] font-semibold text-primary backdrop-blur-md">
                  0{index + 1} · {t.work.badge}
                </span>
              </div>
              <div className="p-6">
                <p className="section-label">{copy.type}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold">{copy.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{copy.description}</p>
                <div className="mt-5 border-t border-border pt-4 text-sm text-foreground/80">
                  {copy.outcome}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {data.stack.slice(0, 4).map((item) => (
                    <span key={item} className="tech-chip">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary">
                  {t.work.cta}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
