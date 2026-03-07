import { useRef, useEffect, useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";

function InteractiveText({ text }: { text: string }) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <span ref={containerRef} className="inline">
      {text.split("").map((char, i) => (
        <InteractiveLetter key={i} char={char} mousePos={mousePos} />
      ))}
    </span>
  );
}

function InteractiveLetter({ char, mousePos }: { char: string; mousePos: { x: number; y: number } }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dist = Math.sqrt((mousePos.x - cx) ** 2 + (mousePos.y - cy) ** 2);
    const maxDist = 120;
    const s = dist < maxDist ? 1 + (1 - dist / maxDist) * 0.4 : 1;
    setScale(s);
  }, [mousePos]);

  return (
    <span
      ref={ref}
      className="inline-block transition-transform duration-150 ease-out"
      style={{ transform: `scale(${scale})`, transformOrigin: "center bottom" }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  );
}

export default function HeroSection() {
  const { t } = useLang();

  const navCards = [
    { label: t.education, href: "#education" },
    { label: t.experience, href: "#experience" },
    { label: t.certifications, href: "#certifications" },
    { label: t.contact, href: "#contact" },
  ];

  return (
    <section className="min-h-screen flex items-center relative z-10 px-6 md:px-16 pt-24">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <p className="text-muted-foreground text-lg mb-2">{t.greeting}</p>
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-4">
            <InteractiveText text={t.name} />
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">{t.alias}</p>
          <div className="border-l-4 border-primary pl-4">
            <p className="text-primary font-semibold text-lg">{t.role}</p>
          </div>
        </div>

        {/* Right: Glass nav cards */}
        <div className="grid grid-cols-2 gap-4">
          {navCards.map((card) => (
            <a
              key={card.href}
              href={card.href}
              className="glass glass-hover rounded-xl p-6 flex flex-col justify-between min-h-[120px] group transition-all duration-300"
              data-interactive
            >
              <span className="text-foreground font-semibold text-lg">{card.label}</span>
              <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 self-end" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
