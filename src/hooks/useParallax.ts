import { useEffect, useRef } from "react";

// Writes the parallax offset straight to a CSS var on the element (no React
// re-render per scroll frame). Consume it in a transform via
// translateY(calc(var(--parallax-y, 0px) + ...)). The element's existing
// transform transition still smooths it exactly as before.
export function useParallax(factor = 0.08) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    let raf = 0;
    const handleScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const viewCenter = window.innerHeight / 2;
        el.style.setProperty("--parallax-y", `${(center - viewCenter) * factor}px`);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(raf);
    };
  }, [factor]);

  return { ref };
}
