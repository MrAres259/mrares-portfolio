import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useParallax } from "@/hooks/useParallax";
import { FolderGit2 } from "lucide-react";

export default function FeaturedProjectsSection() {
  const { t } = useLang();
  const { ref, isVisible } = useScrollReveal(0.15);
  const { ref: parallaxRef, offset } = useParallax(0.06);

  const projects = [
    {
      title: t.project1Title,
      desc: t.project1Desc,
      tech: ["React", "TypeScript", "TailwindCSS", "Node.js"],
      link: "#",
    },
    {
      title: t.project2Title,
      desc: t.project2Desc,
      tech: ["AWS", "Docker", "Kubernetes", "Python"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="relative z-10 px-6 md:px-16 py-24">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <h2
          ref={parallaxRef as React.RefObject<HTMLHeadingElement>}
          className="text-4xl md:text-5xl font-black mb-12 text-foreground transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: `translateY(${isVisible ? offset : 20 + offset}px)`,
          }}
        >
          {t.projects}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              className="glass glass-hover rounded-2xl p-8 transition-all duration-500 relative flex flex-col h-full group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${(i + 1) * 150}ms`,
              }}
              data-interactive
            >
              <div className="absolute top-0 left-0 w-full h-1 theme-pour-line" style={{ backgroundSize: "200% 100%" }}></div>
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <FolderGit2 className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed flex-grow mb-6">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold text-foreground/70 bg-foreground/5 px-2.5 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
