import { useState, useEffect, type PointerEvent } from "react";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Languages, Maximize2, Rotate3d } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ThemeToggle from "@/components/ThemeToggle";
import { projects, person, links, type ProjectId } from "@/lib/portfolio-data";
import { useLang } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

type Shot = { src: string; caption?: string };

function TiltShot({
  shot,
  title,
  expandLabel,
  className,
}: {
  shot: Shot;
  title: string;
  expandLabel: string;
  className?: string;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    setTilt({ x: -y * 7, y: x * 9 });
  };

  return (
    <Dialog>
      <div
        className="project-preview-perspective relative"
        onPointerMove={handlePointerMove}
        onPointerLeave={() => setTilt({ x: 0, y: 0 })}
      >
        <div
          className="project-preview glass-strong group relative overflow-hidden rounded-3xl p-2"
          style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
        >
          <DialogTrigger asChild>
            <button
              type="button"
              className="block w-full cursor-pointer text-left"
              aria-label={expandLabel}
            >
              <img
                src={shot.src}
                alt={shot.caption ? `${title} — ${shot.caption}` : title}
                loading="lazy"
                className={cn("w-full rounded-2xl object-cover object-top", className ?? "aspect-[16/9]")}
              />
            </button>
          </DialogTrigger>
          <div
            className="pointer-events-none absolute inset-2 rounded-2xl bg-gradient-to-br from-foreground/10 via-transparent to-primary/10"
            aria-hidden="true"
          />
          {shot.caption && (
            <div className="pointer-events-none absolute bottom-5 left-5 flex items-center gap-2 rounded-md border border-border bg-background/75 px-3 py-2 text-xs text-muted-foreground backdrop-blur-xl">
              <Rotate3d className="size-4 shrink-0 text-primary" /> {shot.caption}
            </div>
          )}
          <DialogTrigger asChild>
            <Button
              className="absolute right-5 top-5"
              size="icon"
              variant="outline"
              aria-label={expandLabel}
              title={expandLabel}
            >
              <Maximize2 />
            </Button>
          </DialogTrigger>
        </div>
      </div>
      <DialogContent className="glass-strong w-auto max-w-[94vw] border-border bg-background/90 p-2 sm:rounded-2xl">
        <DialogTitle className="sr-only">
          {shot.caption ? `${title} — ${shot.caption}` : title}
        </DialogTitle>
        <DialogDescription className="sr-only">
          {shot.caption ?? title}
        </DialogDescription>
        <img
          src={shot.src}
          alt={shot.caption ? `${title} — ${shot.caption}` : title}
          className="mx-auto block h-auto max-h-[88vh] w-auto max-w-full rounded-xl object-contain"
        />
      </DialogContent>
    </Dialog>
  );
}

export default function ProjectDetail({ id }: { id: ProjectId }) {
  const { t, lang, toggleLang } = useLang();
  const copy = t.projects[id];
  const data = projects[id];

  useEffect(() => {
    document.title = `${copy.title} | ${person.name}`;
  }, [copy.title]);

  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground">
      <div className="ambient-grid fixed inset-0 opacity-40" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-6xl px-5 py-6 sm:px-8">
        <nav className="glass flex items-center justify-between rounded-2xl px-4 py-3">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" /> {t.detail.back}
          </Link>
          <div className="flex items-center gap-1 sm:gap-3">
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
            <span className="hidden font-display text-sm font-semibold sm:inline">MR / SYSTEMS</span>
          </div>
        </nav>

        <header className="grid gap-10 pb-16 pt-12 lg:grid-cols-12 lg:items-end lg:pt-14">
          <div className="lg:col-span-8">
            <p className="section-label">{copy.kicker}</p>
            <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[1.02] sm:text-7xl">
              {copy.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              {copy.summary}
            </p>
          </div>
          <div className="lg:col-span-4">
            <p className="mb-3 text-xs uppercase text-muted-foreground">{t.detail.stack}</p>
            <div className="flex flex-wrap gap-2">
              {data.stack.map((item) => (
                <span key={item} className="tech-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div className="py-4">
          <TiltShot shot={{ src: data.cover }} title={copy.title} expandLabel={t.detail.expand} />
        </div>

        <section className="grid gap-10 border-b border-border py-20 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="section-label">{t.detail.overview}</p>
          </div>
          <p className="max-w-3xl text-xl leading-9 text-foreground/85 lg:col-span-8">
            {copy.overview}
          </p>
        </section>

        <section className="py-20">
          <p className="section-label">{t.detail.architecture}</p>
          <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
            {copy.chapters.map((chapter, i) => (
              <article key={chapter.title} className="bg-background p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-semibold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <CheckCircle2 className="size-4 text-primary" />
                </div>
                <h2 className="mt-8 font-display text-xl font-semibold">{chapter.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{chapter.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-b border-border pb-20">
          <p className="section-label">{t.detail.gallery}</p>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            {t.detail.galleryTitle}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {data.gallery.map((src, i) => {
              const item = copy.gallery[i];
              return (
                <div key={src}>
                  <TiltShot
                    shot={{ src, caption: item?.caption }}
                    title={copy.title}
                    expandLabel={t.detail.expand}
                    className="aspect-[16/10] bg-background/60 object-contain object-center"
                  />
                  {item?.note && (
                    <p className="mt-3 px-2 text-sm leading-7 text-muted-foreground">
                      {item.note}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section className="glass-strong mb-12 mt-20 rounded-3xl p-8 sm:p-12">
          <p className="section-label">{t.detail.nextStep}</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
            {t.detail.nextTitle}
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href={`mailto:${links.email}`}>
                {t.detail.email} <ArrowUpRight />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/">{t.detail.backHome}</Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
