import { useLang } from "@/contexts/LanguageContext";
import { person } from "@/lib/portfolio-data";

export default function SiteFooter() {
  const { t } = useLang();

  return (
    <footer className="relative z-10 mx-auto flex max-w-6xl flex-col gap-2 border-t border-border px-5 py-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <span>
        © {new Date().getFullYear()} {person.name} · {person.alias}
      </span>
      <span>
        {t.contact.location} · {t.footer.tagline}
      </span>
    </footer>
  );
}
