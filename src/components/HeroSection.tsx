import { useRef, useCallback, useEffect, useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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

function TypingText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, 55);
    return () => clearInterval(interval);
  }, [text]);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <span>
      {displayed}
      <span className="text-primary" style={{ opacity: showCursor ? 1 : 0 }}>|</span>
    </span>
  );
}

function MagneticCard({ href, label, delay, visible }: { href: string; label: string; delay: number; visible: boolean }) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * 0.15;
    const dy = (e.clientY - cy) * 0.15;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
  }, []);

  return (
    <a
      ref={cardRef}
      href={href}
      className="glass glass-hover rounded-2xl p-6 flex flex-col justify-between min-h-[120px] group transition-all duration-300 relative overflow-hidden"
      style={{
        transition: "transform 0.2s ease-out, background 0.3s, border-color 0.3s, box-shadow 0.3s, opacity 0.6s ease-out",
        opacity: visible ? 1 : 0,
        transitionDelay: `${delay}ms`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-interactive
    >
      <span className="text-foreground font-semibold text-lg">{label}</span>
      <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 self-end" />
    </a>
  );
}

export default function HeroSection() {
  const { t } = useLang();
  const { ref, isVisible } = useScrollReveal(0.1);

  const navCards = [
    { label: t.education, href: "#education" },
    { label: t.experience, href: "#experience" },
    { label: t.certifications, href: "#certifications" },
    { label: t.contact, href: "#contact" },
  ];

  return (
    <section ref={ref} className="min-h-[100svh] flex items-start md:items-center relative z-10 px-6 md:px-16 pt-32 md:pt-24 pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p
            className="text-muted-foreground text-lg mb-2 transition-all duration-700 ease-out"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(20px)" }}
          >
            {t.greeting}
          </p>
          <h1
            className="text-5xl md:text-7xl font-black leading-tight mb-4 transition-all duration-700 ease-out"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(20px)", transitionDelay: "100ms" }}
          >
            <InteractiveText text={t.name} />
          </h1>
          <p
            className="text-xl md:text-2xl text-muted-foreground mb-6 transition-all duration-700 ease-out"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(20px)", transitionDelay: "200ms" }}
          >
            {t.alias}
          </p>
          <div
            className="border-l-4 border-primary pl-4 transition-all duration-700 ease-out"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateX(-20px)" : "translateX(-20px)", transitionDelay: "400ms", ...(isVisible && { transform: "translateX(0)" }) }}
          >
            <p className="text-primary font-semibold text-lg">
              <TypingText text={t.role} />
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {navCards.map((card, i) => (
            <MagneticCard key={card.href} href={card.href} label={card.label} delay={300 + i * 100} visible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
