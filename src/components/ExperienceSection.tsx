import { useState, useId } from "react";
import { ChevronDown } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import type { Role } from "@/lib/content";

function RoleRow({ role, defaultOpen }: { role: Role; defaultOpen: boolean }) {
  const { t } = useLang();
  const [open, setOpen] = useState(defaultOpen);
  const listId = useId();

  return (
    <article className="grid gap-3 py-7 md:grid-cols-12 md:gap-6">
      <p className="text-xs text-muted-foreground md:col-span-2">{role.date}</p>
      <div className="md:col-span-4">
        <p className="font-display text-lg font-semibold">{role.title}</p>
        <p className="mt-1 text-sm text-primary">{role.place}</p>
      </div>
      <div className="md:col-span-6">
        <p className="text-sm leading-7 text-muted-foreground">{role.summary}</p>
        {open && (
          <ul id={listId} className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-muted-foreground marker:text-primary">
            {role.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        <button
          type="button"
          aria-expanded={open}
          aria-controls={listId}
          onClick={() => setOpen(!open)}
          className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:text-foreground"
        >
          {open ? t.experience.showLess : t.experience.showMore}
          <ChevronDown className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      </div>
    </article>
  );
}

export default function ExperienceSection() {
  const { t } = useLang();

  return (
    <section id="experience" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8">
      <p className="section-label">{t.experience.label}</p>
      <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{t.experience.title}</h2>
      <div className="mt-9 divide-y divide-border border-y border-border">
        {t.experience.roles.map((role, index) => (
          <RoleRow key={role.date} role={role} defaultOpen={index === 0} />
        ))}
      </div>
    </section>
  );
}
