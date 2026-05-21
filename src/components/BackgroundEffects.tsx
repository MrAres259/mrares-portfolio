import { useEffect, useRef } from "react";

export default function BackgroundEffects() {
  const canvasRef = useRef<HTMLDivElement>(null);

  // Diagonal shining bars animation using hardware accelerated transforms
  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;

    let raf = 0;
    const start = Date.now();

    el.style.backgroundImage = `
      linear-gradient(45deg, transparent 0%, transparent 40%, hsl(var(--primary) / var(--bg-effect-low)) 47%, hsl(var(--primary) / var(--bg-effect-high)) 50%, hsl(var(--primary) / var(--bg-effect-low)) 53%, transparent 60%, transparent 100%),
      linear-gradient(-45deg, transparent 0%, transparent 42%, hsl(var(--primary) / var(--bg-effect-low-2)) 48%, hsl(var(--primary) / var(--bg-effect-high-2)) 50%, hsl(var(--primary) / var(--bg-effect-low-2)) 52%, transparent 58%, transparent 100%)
    `;
    el.style.backgroundSize = "50% 50%";

    const animate = () => {
      const elapsed = Date.now() - start;
      
      const x = Math.sin(elapsed * 0.0003) * 15; 
      const y = Math.cos(elapsed * 0.0002) * 15;

      el.style.transform = `translate3d(${x}%, ${y}%, 0)`;

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={canvasRef}
      className="fixed top-[-50%] left-[-50%] w-[200%] h-[200%] pointer-events-none z-0"
      style={{ willChange: "transform" }}
    />
  );
}
