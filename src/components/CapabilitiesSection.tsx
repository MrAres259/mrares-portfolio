import { Cloud, BrainCircuit, ShieldCheck, Braces } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { skillGroups } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export default function CapabilitiesSection() {
  const { t } = useLang();
  const icons = [Cloud, BrainCircuit, ShieldCheck, Braces];

  return (
    <section id="capabilities" className="relative z-10 mx-auto grid max-w-6xl scroll-mt-24 gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <p className="section-label">{t.capabilities.label}</p>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{t.capabilities.title}</h2>
      </div>
      <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:col-span-8">
        {t.capabilities.items.map((item, index) => {
          const Icon = icons[index] ?? Cloud;
          return (
            <article key={item.title} className="bg-background p-6">
              <Icon className="size-5 text-primary" />
              <h3 className="mt-8 font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {skillGroups[index]?.map(({ name, level }) => (
                  <span
                    key={name}
                    className={cn(
                      "tech-chip",
                      level === "advanced" && "border-primary/40 text-primary",
                      level === "foundational" && "opacity-60"
                    )}
                  >
                    {name}{level === "advanced" && " ★"}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
