import { useEffect, useRef } from "react";

export default function BackgroundEffects() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;

    const move = (e: MouseEvent) => {
      el.style.setProperty("--mx", `${e.clientX}px`);
      el.style.setProperty("--my", `${e.clientY}px`);
    };

    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
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
        style={{
          background: `
            radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), hsl(var(--primary) / 0.15) 0%, transparent 100%),
            radial-gradient(800px circle at 10% 90%, hsl(190 60% 40% / 0.12) 0%, transparent 100%),
            radial-gradient(700px circle at 90% 10%, hsl(190 80% 30% / 0.12) 0%, transparent 100%)
          `,
        }}
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
