import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 100}px, ${e.clientY - 100}px)`;
      }
    };

    const grow = () => cursorRef.current?.classList.add("scale-[2]");
    const shrink = () => cursorRef.current?.classList.remove("scale-[2]");

    document.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, [data-interactive]").forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      document.removeEventListener("mousemove", move);
    };
  }, []);

  const isTouchDevice = typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;
  if (isTouchDevice) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-5 h-5 rounded-full border-2 border-primary pointer-events-none z-[10000] transition-transform duration-100 ease-out mix-blend-difference"
      />
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-[200px] h-[200px] rounded-full pointer-events-none z-[9998] transition-transform duration-300 ease-out"
        style={{
          background: "radial-gradient(circle, hsl(190 37% 52% / 0.08) 0%, transparent 70%)",
        }}
      />
    </>
  );
}
