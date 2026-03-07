import { useEffect, useRef, useState } from "react";

export function useParallax(factor = 0.08) {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

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
        setOffset((center - viewCenter) * factor);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(raf);
    };
  }, [factor]);

  return { ref, offset };
}
