import { useLang } from "@/contexts/LanguageContext";
import BackgroundEffects from "@/components/BackgroundEffects";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Shield, Brain, LineChart, Database, Activity } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function InsaightProject() {
  const { t } = useLang();

  const features = [
    {
      title: t.insaightNl2Sql,
      desc: t.insaightNl2SqlDesc,
      icon: <Brain className="w-8 h-8 text-primary" />
    },
    {
      title: t.insaightSemanticRouting,
      desc: t.insaightSemanticRoutingDesc,
      icon: <Activity className="w-8 h-8 text-primary" />
    },
    {
      title: t.insaightSecurity,
      desc: t.insaightSecurityDesc,
      icon: <Shield className="w-8 h-8 text-primary" />
    },
    {
      title: t.insaightSelfCorrection,
      desc: t.insaightSelfCorrectionDesc,
      icon: <CheckCircle2 className="w-8 h-8 text-primary" />
    },
    {
      title: t.insaightResults,
      desc: t.insaightResultsDesc,
      icon: <LineChart className="w-8 h-8 text-primary" />
    },
    {
      title: t.insaightAdmin,
      desc: t.insaightAdminDesc,
      icon: <Database className="w-8 h-8 text-primary" />
    }
  ];

  const galleryImages = [
    { src: "/insaight/1.png", title: "Home Assistant - Data Table", caption: "Natural language query translated into a SQL comparison table for regional metrics. Notice the optimized SQL execution.", className: "md:col-span-2 md:row-span-1" },
    { src: "/insaight/2.png", title: "Home Assistant - Bar Chart", caption: "Automated generation of a bar chart visualizing active clients across different regions based on the LLM's understanding.", className: "md:col-span-2 md:row-span-1" },
    { src: "/insaight/3.png", title: "Enterprise Assistant - Trend Analysis", caption: "A detailed line chart analyzing the monthly evolution of support incidents (P1 vs P2) during 2025.", className: "md:col-span-2 md:row-span-2" },
    { src: "/insaight/5.png", title: "Mobile Assistant - Revenue Distribution", caption: "A pie chart showing total earnings by device manufacturer for postpaid clients. The LLM translates business terms natively.", className: "md:col-span-2 md:row-span-2" },
    { src: "/insaight/4.png", title: "Enterprise Assistant - Deep Dive", caption: "Detailed view of the semantic router handling complex enterprise data queries and graphing the results.", className: "md:col-span-1 md:row-span-1" },
    { src: "/insaight/6.png", title: "Mobile Assistant - Breakdown", caption: "Extended breakdown of the Mobile database query results without writing any manual SQL.", className: "md:col-span-1 md:row-span-1" },
    { src: "/insaight/7.png", title: "PDF Report Generation - Text & Query", caption: "The application can export dashboard results into clean PDF reports, showing the raw SQL and agent's text response.", className: "md:col-span-2 md:row-span-1" },
    { src: "/insaight/8.png", title: "PDF Report Generation - Charts", caption: "The generated PDF perfectly captures the visual charts for offline business intelligence sharing.", className: "md:col-span-2 md:row-span-1" },
  ];

  return (
    <>
      <BackgroundEffects />
      <CustomCursor />
      <Header />
      
      <main className="relative pt-32 pb-24 px-6 md:px-16 min-h-screen z-10">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8 group font-medium">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            {t.insaightBack}
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-foreground tracking-tight">
            {t.project1Title}
          </h1>
          
          <div className="flex flex-wrap gap-3 mb-10">
            {["Huawei Cloud MaaS", "ModelArts (deepseek-v3.2)", "Serverless", "CCI 2.0", "FunctionGraph", "SMN SDK"].map((tag, i) => (
              <span key={i} className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20 backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-16 max-w-4xl">
            {t.insaightOverview}
          </p>

          <h2 className="text-3xl font-bold mb-8">Architecture & Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {features.map((feature, idx) => (
              <div key={idx} className="glass rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-300">
                <div className="mb-6 p-3 bg-primary/5 inline-block rounded-xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-8">Interactive Gallery</h2>
          <p className="text-muted-foreground mb-12">Swipe or click through the slides to see how InsAIght handles complex BI queries in real time.</p>
          
          <div className="px-12 md:px-16">
            <Carousel className="w-full">
              <CarouselContent>
                {galleryImages.map((img, idx) => (
                  <CarouselItem key={idx}>
                    <div className="glass rounded-3xl overflow-hidden border border-white/10 flex flex-col items-center">
                      <div className="w-full bg-black/40 flex items-center justify-center p-4 min-h-[40vh] md:min-h-[60vh]">
                        <img 
                          src={img.src} 
                          alt={img.title}
                          className="max-w-full max-h-[40vh] md:max-h-[60vh] object-contain shadow-2xl rounded-xl"
                        />
                      </div>
                      <div className="p-8 md:p-12 text-center max-w-4xl w-full">
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{img.title}</h3>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{img.caption}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="w-12 h-12 -left-4 md:-left-12 border-white/20 bg-black/50 hover:bg-black/80 text-white" />
              <CarouselNext className="w-12 h-12 -right-4 md:-right-12 border-white/20 bg-black/50 hover:bg-black/80 text-white" />
            </Carousel>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
