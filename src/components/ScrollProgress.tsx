import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      
      // Prevent division by zero if document fits in window
      if (docHeight <= winHeight) {
        setProgress(0);
        ticking = false;
        return;
      }
      
      const scrollPercent = scrollY / (docHeight - winHeight);
      setProgress(Math.min(1, Math.max(0, scrollPercent)));
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Call once to set initial state
    updateProgress();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-[72px] left-0 right-0 h-1.5 z-[100] bg-transparent pointer-events-none">
      <div 
        className="h-full w-full bg-primary shadow-[0_0_10px_hsl(var(--primary))] transition-transform duration-300 ease-out will-change-transform origin-left"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
