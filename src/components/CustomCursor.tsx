import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorWrapperRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let boxX = mouseX;
    let boxY = mouseY;
    let velX = 0;
    let velY = 0;
    let angle = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      }
    };

    let rafId = 0;
    const animate = () => {
      // Bouncy spring physics for maximum silliness
      const dx = mouseX - boxX;
      const dy = mouseY - boxY;
      
      velX += dx * 0.08; // tension
      velY += dy * 0.08;
      
      velX *= 0.65; // friction - causes wobble!
      velY *= 0.65;
      
      boxX += velX;
      boxY += velY;
      
      // Spin wildly based on movement speed
      const speed = Math.sqrt(velX * velX + velY * velY);
      angle += speed * 2; // the faster it moves, the faster it spins

      if (cursorWrapperRef.current) {
        cursorWrapperRef.current.style.transform = `translate(${boxX - 16}px, ${boxY - 16}px) rotate(${angle}deg)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    const grow = () => {
      cursorWrapperRef.current?.classList.add("scale-[1.8]", "bg-white/20", "rounded-full");
      dotRef.current?.classList.add("scale-[2]");
    };
    
    const shrink = () => {
      cursorWrapperRef.current?.classList.remove("scale-[1.8]", "bg-white/20", "rounded-full");
      dotRef.current?.classList.remove("scale-[2]");
    };

    document.addEventListener("mousemove", move);
    
    const elements = document.querySelectorAll("a, button, input, textarea, select, [data-interactive]");
    elements.forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", move);
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  const isTouchDevice = typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;
  if (isTouchDevice) return null;

  return (
    <>
      <div
        ref={cursorWrapperRef}
        className="fixed top-0 left-0 w-8 h-8 border-[3px] border-white border-dashed pointer-events-none z-[10000] transition-colors duration-200"
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[10000] transition-transform duration-75"
      />
    </>
  );
}
