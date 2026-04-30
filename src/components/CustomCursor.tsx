import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorWrapperRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const move = (e: MouseEvent) => {
      if (cursorWrapperRef.current) {
        cursorWrapperRef.current.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`;
      }
    };

    const grow = () => {
      cursorWrapperRef.current?.children[0].classList.add("scale-[1.5]", "rotate-[135deg]", "bg-primary", "opacity-30");
      dotRef.current?.classList.add("scale-0");
    };
    
    const shrink = () => {
      cursorWrapperRef.current?.children[0].classList.remove("scale-[1.5]", "rotate-[135deg]", "bg-primary", "opacity-30");
      dotRef.current?.classList.remove("scale-0");
    };

    document.addEventListener("mousemove", move);
    
    const elements = document.querySelectorAll("a, button, input, textarea, select, [data-interactive]");
    elements.forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
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
        className="fixed top-0 left-0 pointer-events-none z-[10000] transition-transform duration-100 ease-out mix-blend-difference"
      >
        <div className="w-6 h-6 border-[1.5px] border-primary rotate-45 transition-all duration-300 ease-out" />
      </div>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full pointer-events-none z-[10000] transition-all duration-75 ease-out mix-blend-difference"
      />
    </>
  );
}
