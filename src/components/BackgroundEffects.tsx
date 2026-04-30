import { useEffect, useRef } from "react";

export default function BackgroundEffects() {
  const canvasRef = useRef<HTMLDivElement>(null);

  // Diagonal shining bars animation
  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;

    let raf = 0;
    const start = Date.now();

    el.style.backgroundImage = `
      linear-gradient(45deg, transparent 40%, hsl(var(--primary) / 0.08) 48%, hsl(var(--primary) / 0.2) 50%, hsl(var(--primary) / 0.08) 52%, transparent 60%),
      linear-gradient(-45deg, transparent 30%, hsl(var(--primary) / 0.06) 38%, hsl(var(--primary) / 0.15) 40%, hsl(var(--primary) / 0.06) 42%, transparent 50%)
    `;
    el.style.backgroundSize = "300% 300%";

    const animate = () => {
      const elapsed = Date.now() - start;
      
      // Two separate background positions moving in different speeds and directions
      const p1 = (elapsed * 0.003) % 200 - 50; // Sweeping from left/top to right/bottom
      const p2 = 150 - ((elapsed * 0.002) % 200); // Sweeping from right/bottom to left/top

      el.style.backgroundPosition = `${p1}% ${p1}%, ${p2}% ${p2}%`;

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        transition: "background-position 0.1s linear",
      }}
    />
  );
}
