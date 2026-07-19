import { useRef, useEffect } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronRight } from "lucide-react";

function InteractiveText({ text }: { text: string }) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        lettersRef.current.forEach((el) => {
          if (!el) return;
          const rect = el.getBoundingClientRect();
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          const dist = Math.sqrt((e.clientX - cx) ** 2 + (e.clientY - cy) ** 2);
          const maxDist = 150;
          const s = dist < maxDist ? 1 + (1 - dist / maxDist) * 0.5 : 1;
          el.style.transform = `scale(${s})`;
        });
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <span ref={containerRef} className="inline">
      {text.split("").map((char, i) => (
        <span
          key={i}
          ref={(el) => { lettersRef.current[i] = el; }}
          className="inline-block transition-transform duration-100 ease-out"
          style={{ transformOrigin: "center bottom" }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

export default function HeroSection() {
  const { t } = useLang();
  const { ref, isVisible } = useScrollReveal(0.1);

  const navLinks = [
    { label: t.projects, href: "#projects" },
    { label: t.experience, href: "#experience" },
    { label: t.certifications, href: "#certifications" },
    { label: t.contact, href: "#contact" },
  ];

  return (
    <section ref={ref} className="min-h-[100svh] flex flex-col items-center justify-center relative z-10 px-6 pt-20 pb-20">
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center">
        
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold tracking-wide uppercase mb-8 transition-all duration-700 ease-out shadow-[0_0_15px_hsl(var(--primary)/0.1)]"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(20px)" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          {t.unamGrad}
        </div>

        {/* Greeting */}
        <p
          className="text-muted-foreground text-lg sm:text-xl font-medium mb-4 transition-all duration-700 ease-out"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(20px)", transitionDelay: "100ms" }}
        >
          {t.greeting}
        </p>

        {/* Name */}
        <h1
          className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-tight mb-6 transition-all duration-700 ease-out text-foreground"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(20px)", transitionDelay: "200ms" }}
        >
          <InteractiveText text={t.name} />
        </h1>

        {/* Alias / Role */}
        <div 
          className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-12 transition-all duration-700 ease-out"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(20px)", transitionDelay: "300ms" }}
        >
          <span className="text-xl sm:text-2xl font-semibold text-foreground/90">
            {t.alias}
          </span>
          <span className="hidden sm:inline-block text-primary/50 text-xl">•</span>
          <span className="text-xl sm:text-2xl font-medium text-muted-foreground">
            {t.role}
          </span>
        </div>

        {/* Navigation Links */}
        <div 
          className="flex flex-wrap justify-center gap-4 transition-all duration-700 ease-out"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(20px)", transitionDelay: "400ms" }}
        >
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex items-center gap-2 px-6 py-3 rounded-full border border-primary/20 bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)] transition-all duration-300 text-foreground font-medium"
            >
              {link.label}
              <ChevronRight className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors group-hover:translate-x-1 duration-300" />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
