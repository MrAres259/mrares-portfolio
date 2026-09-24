import { Languages, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useLang } from "@/contexts/LanguageContext";
import { person } from "@/lib/portfolio-data";
import ThemeToggle from "@/components/ThemeToggle";

export default function SiteHeader() {
  const { t, lang, toggleLang } = useLang();

  return (
    <header className="sticky top-0 z-40 mx-auto max-w-6xl px-4 pt-4 sm:px-8 sm:pt-6">
      <nav
        className="glass flex h-16 items-center justify-between rounded-2xl px-4 sm:px-5"
        aria-label="Primary navigation"
      >
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <span className="accent-fill grid size-9 shrink-0 place-items-center rounded-xl font-display text-xs font-bold text-primary-foreground">
            MR
          </span>
          <span className="hidden min-w-0 sm:block">
            <span className="block truncate font-display text-sm font-semibold">
              {person.name}
            </span>
            <span className="block text-[10px] text-muted-foreground">
              CLOUD · AI · AUTOMATION · DATA
            </span>
          </span>
        </a>
        <div className="hidden items-center gap-6 text-sm text-muted-foreground lg:flex">
          <a href="#work" className="transition-colors hover:text-foreground">
            {t.nav.work}
          </a>
          <a href="#experience" className="transition-colors hover:text-foreground">
            {t.nav.experience}
          </a>
          <a href="#capabilities" className="transition-colors hover:text-foreground">
            {t.nav.capabilities}
          </a>
          <a href="#credentials" className="transition-colors hover:text-foreground">
            {t.nav.credentials}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLang}
            aria-label={t.nav.switchLang}
            title={t.nav.switchLang}
          >
            <Languages />
            {lang === "en" ? "ES" : "EN"}
          </Button>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="#contact">{t.nav.talk}</a>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label={t.nav.menu}
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="glass-strong w-72 border-border">
              <SheetTitle className="sr-only">{t.nav.menu}</SheetTitle>
              <nav className="mt-8 flex flex-col gap-1">
                <SheetClose asChild>
                  <a
                    href="#work"
                    className="block rounded-lg px-3 py-3 font-display text-lg text-muted-foreground transition-colors hover:bg-card/60 hover:text-foreground"
                  >
                    {t.nav.work}
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a
                    href="#experience"
                    className="block rounded-lg px-3 py-3 font-display text-lg text-muted-foreground transition-colors hover:bg-card/60 hover:text-foreground"
                  >
                    {t.nav.experience}
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a
                    href="#capabilities"
                    className="block rounded-lg px-3 py-3 font-display text-lg text-muted-foreground transition-colors hover:bg-card/60 hover:text-foreground"
                  >
                    {t.nav.capabilities}
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a
                    href="#credentials"
                    className="block rounded-lg px-3 py-3 font-display text-lg text-muted-foreground transition-colors hover:bg-card/60 hover:text-foreground"
                  >
                    {t.nav.credentials}
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a
                    href="#contact"
                    className="block rounded-lg px-3 py-3 font-display text-lg text-muted-foreground transition-colors hover:bg-card/60 hover:text-foreground"
                  >
                    {t.nav.contact}
                  </a>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
