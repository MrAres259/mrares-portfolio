import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Skill {
  labelEn: string;
  labelEs: string;
  percent: number;
}

const skills: Skill[] = [
  { labelEn: "Networking", labelEs: "Redes", percent: 85 },
  { labelEn: "Linux / Windows", labelEs: "Linux / Windows", percent: 80 },
  { labelEn: "Cloud Computing", labelEs: "Computación en la Nube", percent: 75 },
  { labelEn: "Troubleshooting", labelEs: "Resolución de Problemas", percent: 90 },
  { labelEn: "UX Design", labelEs: "Diseño UX", percent: 65 },
  { labelEn: "Python / Scripting", labelEs: "Python / Scripting", percent: 70 },
];

function SkillBar({ label, percent, delay, visible }: { label: string; percent: number; delay: number; visible: boolean }) {
  return (
    <div
      className="transition-all duration-700 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="flex justify-between mb-2">
        <span className="text-sm font-semibold text-foreground">{label}</span>
        <span
          className="text-sm text-primary font-mono transition-opacity duration-500"
          style={{ opacity: visible ? 1 : 0, transitionDelay: `${delay + 600}ms` }}
        >
          {percent}%
        </span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
          style={{
            width: visible ? `${percent}%` : "0%",
            transitionDelay: `${delay + 200}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const { lang, t } = useLang();
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="skills" className="relative z-10 px-6 md:px-16 py-24">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <h2
          className="text-4xl md:text-5xl font-black mb-12 text-foreground transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          {lang === "en" ? "Skills" : "Habilidades"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {skills.map((skill, i) => (
            <SkillBar
              key={skill.labelEn}
              label={lang === "en" ? skill.labelEn : skill.labelEs}
              percent={skill.percent}
              delay={i * 100}
              visible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
