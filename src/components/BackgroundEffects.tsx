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
            radial-gradient(400px circle at var(--mx, 50%) var(--my, 50%), hsl(190 37% 52% / 0.06) 0%, transparent 100%),
            radial-gradient(600px circle at 20% 80%, hsl(190 37% 52% / 0.03) 0%, transparent 100%),
            radial-gradient(500px circle at 80% 20%, hsl(0 0% 100% / 0.02) 0%, transparent 100%)
          `,
        }}
      />
      <div
        ref={scrollRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(300px circle at 70% 60%, hsl(190 37% 52% / 0.04) 0%, transparent 100%),
            radial-gradient(250px circle at 30% 30%, hsl(190 37% 52% / 0.03) 0%, transparent 100%)
          `,
          transition: "transform 0.1s linear",
        }}
      />
      <div className="noise-overlay" />
    </>
  );
}
