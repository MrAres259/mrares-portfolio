import { useEffect, useRef } from "react";

export default function BackgroundEffects() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Dynamic light animation independent of cursor
  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;

    let raf = 0;
    const start = Date.now();

    const animate = () => {
      const elapsed = Date.now() - start;
      
      const x1 = 50 + Math.sin(elapsed * 0.0003) * 30;
      const y1 = 50 + Math.cos(elapsed * 0.0002) * 30;
      
      const x2 = 20 + Math.sin(elapsed * 0.0002 + 2) * 40;
      const y2 = 80 + Math.cos(elapsed * 0.0004 + 1) * 20;

      const x3 = 80 + Math.sin(elapsed * 0.0004 + 4) * 20;
      const y3 = 20 + Math.cos(elapsed * 0.0003 + 3) * 40;

      el.style.background = `
        radial-gradient(600px circle at ${x1}% ${y1}%, hsl(var(--primary) / 0.15) 0%, transparent 100%),
        radial-gradient(800px circle at ${x2}% ${y2}%, hsl(190 60% 40% / 0.12) 0%, transparent 100%),
        radial-gradient(700px circle at ${x3}% ${y3}%, hsl(190 80% 30% / 0.12) 0%, transparent 100%)
      `;

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Parallax on background orbs
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let raf = 0;
    const handleScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        el.style.transform = `translateY(${y * 0.04}px)`;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
      />
      <div
        ref={scrollRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(500px circle at 80% 70%, hsl(var(--primary) / 0.08) 0%, transparent 100%),
            radial-gradient(450px circle at 20% 30%, hsl(190 50% 50% / 0.08) 0%, transparent 100%)
          `,
          transition: "transform 0.1s linear",
        }}
      />
    </>
  );
}
