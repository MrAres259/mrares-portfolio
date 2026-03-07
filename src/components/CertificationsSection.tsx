import { useLang } from "@/contexts/LanguageContext";
import { ExternalLink } from "lucide-react";
import googleUx from "@/assets/google_ux.png";
import googleIt from "@/assets/google_it.png";
import gitGithub from "@/assets/git_github.png";
import netAthon from "@/assets/net_athon.png";
import netBasics from "@/assets/net_basics.png";
import googleCloud from "@/assets/google_cloud.png";

const certs = [
  {
    title: "Google UX Design Certificate",
    issuer: "Coursera",
    date: "Mar 2023",
    image: googleUx,
    url: "https://www.credly.com/badges/e08f75e1-6e09-49b6-a65c-1cae17ec0bb8/public_url",
  },
  {
    title: "Google IT Support",
    issuer: "Coursera",
    date: "2023",
    image: googleIt,
    url: "https://www.credly.com/badges/1f8e08c0-f475-42c2-81af-71147c4b84a0/public_url",
  },
  {
    title: "Git & GitHub Essentials",
    issuer: "Microsoft",
    date: "2024",
    image: gitGithub,
    url: "#",
  },
  {
    title: "Cisco Learn-A-Thon 2025",
    issuer: "Cisco",
    date: "2025",
    image: netAthon,
    url: "#",
  },
  {
    title: "Cisco Networking Basics",
    issuer: "Cisco",
    date: "2024",
    image: netBasics,
    url: "#",
  },
  {
    title: "Google Cloud Essentials",
    issuer: "Google Cloud",
    date: "2024",
    image: googleCloud,
    url: "#",
  },
];

// Bento layout: first card is featured (large), rest are smaller
export default function CertificationsSection() {
  const { t } = useLang();
  const [featured, ...rest] = certs;

  return (
    <section id="certifications" className="relative z-10 px-6 md:px-16 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-12 text-foreground">
          {t.certifications}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Featured large card */}
          <a
            href={featured.url}
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-2 md:row-span-2 glass rounded-2xl p-8 flex flex-col items-center justify-center gap-6 group hover:border-primary/40 hover:shadow-[0_0_40px_hsl(190_37%_52%/0.15)] transition-all duration-500 relative overflow-hidden"
            data-interactive
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src={featured.image}
              alt={featured.title}
              className="w-32 h-32 md:w-44 md:h-44 object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500 relative z-10"
            />
            <div className="text-center relative z-10">
              <h3 className="text-xl font-bold text-foreground mb-1">{featured.title}</h3>
              <p className="text-muted-foreground text-sm">{featured.issuer} · {featured.date}</p>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          {/* Smaller cards */}
          {rest.map((cert, i) => (
            <a
              key={i}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-5 flex items-center gap-4 group hover:border-primary/40 hover:shadow-[0_0_30px_hsl(190_37%_52%/0.1)] transition-all duration-400 relative overflow-hidden"
              data-interactive
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={cert.image}
                alt={cert.title}
                className="w-14 h-14 md:w-16 md:h-16 object-contain shrink-0 group-hover:scale-105 transition-transform duration-300 relative z-10"
              />
              <div className="relative z-10 min-w-0">
                <h3 className="text-sm font-bold text-foreground leading-tight truncate">{cert.title}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{cert.issuer} · {cert.date}</p>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-muted-foreground shrink-0 ml-auto opacity-0 group-hover:opacity-100 transition-opacity relative z-10" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
