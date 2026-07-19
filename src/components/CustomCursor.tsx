import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  
  // Start with true to avoid rendering on touch devices or before we know
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Check if device is touch capable on mount
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    setIsTouchDevice(isTouch);
  }, []);
  
  useEffect(() => {
    if (isTouchDevice) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    
    // Lower ease means smoother/slower catchup
    const ease = 0.15; 

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // The dot perfectly tracks the mouse without delay
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    };

    const animate = () => {
      // The ring smoothly interpolates to the mouse position
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;
      
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      
      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMouseMove);
    const animationFrame = requestAnimationFrame(animate);

    // Hover interactive state detection
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, input, textarea, select, [data-interactive]')) {
        setIsHovering(true);
      }
    };
    
    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, input, textarea, select, [data-interactive]')) {
        setIsHovering(false);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationFrame);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer Magnetic Ring */}
      <div 
        ref={ringRef}
        className={cn(
          "fixed top-0 left-0 rounded-full pointer-events-none z-[10000] will-change-transform",
          "transition-[width,height,background-color,border-color,opacity] duration-300 ease-out",
          isHovering 
            ? "w-12 h-12 bg-primary/20 border-transparent opacity-100 backdrop-blur-[2px]" 
            : "w-8 h-8 bg-transparent border border-primary/50 opacity-100"
        )}
      />
      {/* Inner Precision Dot */}
      <div 
        ref={dotRef}
        className={cn(
          "fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[10000] will-change-transform",
          "transition-[opacity,transform] duration-300 ease-out",
          isHovering ? "opacity-0 scale-50" : "bg-primary opacity-100 scale-100"
        )}
      />
    </>
  );
}
