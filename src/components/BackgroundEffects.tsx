import { useEffect, useRef } from "react";

export default function BackgroundEffects() {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      el.style.setProperty("--mx", `${mouseX}px`);
      el.style.setProperty("--my", `${mouseY}px`);
    };

    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
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
      <div className="noise-overlay" />
    </>
  );
}
