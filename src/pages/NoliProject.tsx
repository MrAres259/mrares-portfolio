import { useState, useEffect, useRef } from "react";
import { useLang } from "@/contexts/LanguageContext";
import BackgroundEffects from "@/components/BackgroundEffects";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, ServerCrash, ShieldAlert, Brain, Search, Activity, Network } from "lucide-react";

export default function NoliProject() {
  const { t } = useLang();
  const [activeStep, setActiveStep] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const flowSteps = [
    {
      title: t.noliArchitecture || "System Architecture",
      desc: t.noliArchitectureDesc || "",
      icon: <Network className="w-8 h-8 text-primary" />,
      image: "/noli/Noli-Arch.png"
    },
    {
      title: t.noliNl2Es,
      desc: t.noliNl2EsDesc,
      icon: <Brain className="w-8 h-8 text-primary" />,
      image: "/noli/Main Sectionjpeg.jpeg"
    },
    {
      title: t.noliRootCauseRemediation || "AI Root Cause & Remediation",
      desc: t.noliRootCauseRemediationDesc || "",
      icon: <Search className="w-8 h-8 text-primary" />,
      image: "/noli/Remediation.jpeg"
    },
    {
      title: t.noliMonitoring,
      desc: t.noliMonitoringDesc,
      icon: <Activity className="w-8 h-8 text-primary" />,
      image: "/noli/Monitoring.png"
    },
    {
      title: t.noliAlerting,
      desc: t.noliAlertingDesc,
      icon: <ShieldAlert className="w-8 h-8 text-primary" />,
      image: "/noli/Telegram notifications.png"
    },
    {
      title: t.noliFaultInjection,
      desc: t.noliFaultInjectionDesc,
      icon: <ServerCrash className="w-8 h-8 text-primary" />,
      image: "/noli/SMS notifications.png"
    }
  ];

  useEffect(() => {
    const observers = flowSteps.map((_, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStep(index);
          }
        },
        { rootMargin: "-40% 0px -40% 0px" } // trigger when element is in middle 20% of screen
      );

      if (stepRefs.current[index]) {
        observer.observe(stepRefs.current[index]!);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <>
      <BackgroundEffects />
      <CustomCursor />
      <Header />
      
      <main className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 md:px-16 min-h-screen z-10">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6 sm:mb-8 group font-medium">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            {t.noliBack}
          </Link>
          
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 mb-10 lg:mb-24 items-center">
            <div className="flex-1">
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-black mb-4 sm:mb-6 text-foreground tracking-tight">
                {t.project2Title}
              </h1>
              
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                {["Huawei Cloud MAAS", "Elasticsearch (CSS)", "DeepSeek-V4-Flash", "GLM 5.2", "FastAPI", "Next.js", "React", "SMN SDK", "AI Agent"].map((tag, i) => (
                  <span key={i} className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold border border-primary/20 backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-base sm:text-xl md:text-2xl text-muted-foreground leading-relaxed text-justify">
                {t.noliOverview}
              </p>
            </div>
            
            <div className="flex-1 w-full relative">
               <div 
                 className="glass rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 aspect-video flex items-center justify-center p-1.5 sm:p-2 group shadow-[0_0_40px_rgba(var(--primary),0.1)] cursor-zoom-in"
                 onClick={() => setSelectedImage("/noli/Main Sectionjpeg.jpeg")}
               >
                 <img src="/noli/Main Sectionjpeg.jpeg" alt="Noli Overview" className="rounded-xl sm:rounded-2xl w-full h-full object-cover shadow-2xl transition-transform duration-700 group-hover:scale-105" />
               </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent my-10 sm:my-16"></div>

          <div className="text-center mb-10 sm:mb-16 md:mb-24">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 text-foreground">Interactive Workflow</h2>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">Scroll down to see how NOLI handles complex network intelligence queries and remediations.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-start relative">
            
            {/* Left Column: Sticky Image Container — hidden on mobile */}
            <div className="hidden md:block sticky top-28 lg:top-32 h-[50vh] lg:h-[60vh] glass rounded-2xl lg:rounded-3xl overflow-hidden border border-white/10 p-4 lg:p-6 transition-all duration-500 shadow-2xl">
               {flowSteps.map((step, idx) => (
                  <div 
                    key={`img-${idx}`}
                    className={`absolute inset-4 lg:inset-6 transition-all duration-700 ease-in-out flex flex-col items-center justify-between gap-3 lg:gap-4 ${activeStep === idx ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-95'}`}
                  >
                     <div 
                       className="w-full flex-1 flex items-center justify-center overflow-hidden cursor-zoom-in"
                       onClick={() => setSelectedImage(step.image)}
                     >
                       <img 
                         src={step.image} 
                         alt={step.title}
                         className="max-w-full max-h-full object-contain shadow-2xl rounded-xl bg-black/20 transition-transform duration-500 hover:scale-105"
                       />
                     </div>
                     <div className="w-full glass p-3 lg:p-4 rounded-xl text-center backdrop-blur-md border border-white/10 bg-black/60 shadow-lg">
                       <p className="font-bold text-white text-sm lg:text-lg">{step.title}</p>
                     </div>
                  </div>
               ))}
            </div>

            {/* Right Column: Scrolling Text + inline images on mobile */}
            <div className="flex flex-col gap-12 sm:gap-16 md:gap-32 pb-16 sm:pb-32 pt-4 sm:pt-8 md:pt-32">
               {flowSteps.map((step, idx) => (
                 <div 
                   key={`text-${idx}`} 
                   ref={(el) => stepRefs.current[idx] = el}
                   className={`transition-all duration-700 ease-out md:min-h-[40vh] flex flex-col justify-center ${activeStep === idx ? 'opacity-100 translate-x-0' : 'md:opacity-30 opacity-100 md:translate-x-8'}`}
                 >
                   <div 
                     className="md:hidden mb-6 glass rounded-2xl p-2 sm:p-3 border border-white/10 shadow-lg cursor-zoom-in"
                     onClick={() => setSelectedImage(step.image)}
                   >
                     <img src={step.image} alt={step.title} className="rounded-xl w-full" />
                   </div>
                   <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-primary/10 inline-flex rounded-xl sm:rounded-2xl border border-primary/20 shadow-inner">
                     {step.icon}
                   </div>
                   <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-foreground">{step.title}</h3>
                   <p className="text-base sm:text-xl text-muted-foreground leading-relaxed text-justify">
                     {step.desc}
                   </p>
                 </div>
               ))}
            </div>

          </div>
        </div>
      </main>
      
      <Footer />

      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            alt="Enlarged view" 
            className="max-w-[95vw] max-h-[95vh] object-contain rounded-xl shadow-2xl" 
          />
        </div>
      )}
    </>
  );
}
