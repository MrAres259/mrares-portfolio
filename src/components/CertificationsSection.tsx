import { useLang } from "@/contexts/LanguageContext";
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
    span: "col-span-2 row-span-2",
  },
  {
    title: "Google IT Support",
    issuer: "Coursera",
    date: "2023",
    image: googleIt,
    url: "https://www.credly.com/badges/1f8e08c0-f475-42c2-81af-71147c4b84a0/public_url",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Git & GitHub Essentials",
    issuer: "Microsoft",
    date: "2024",
    image: gitGithub,
    url: "https://www.credly.com/badges/0a5f287f-d tried-4ad7-adc0-5a1a68e3fcda/public_url",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Cisco Learn-A-Thon 2025",
    issuer: "Cisco",
    date: "2025",
    image: netAthon,
    url: "https://www.credly.com/badges/cisco-learn-a-thon",
    span: "col-span-1 row-span-2",
  },
  {
    title: "Cisco Networking Basics",
    issuer: "Cisco",
    date: "2024",
    image: netBasics,
    url: "https://www.credly.com/badges/cisco-networking-basics",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Google Cloud Essentials",
    issuer: "Google Cloud",
    date: "2024",
    image: googleCloud,
    url: "https://www.cloudskillsboost.google/public_profiles/",
    span: "col-span-1 row-span-1",
  },
];

export default function CertificationsSection() {
  const { t } = useLang();

  return (
    <section id="certifications" className="relative z-10 px-6 md:px-16 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-12 text-foreground">{t.certifications}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-4">
          {certs.map((cert, i) => (
            <a
              key={i}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass glass-hover rounded-xl p-5 flex flex-col justify-between group transition-all duration-300 overflow-hidden relative ${cert.span}`}
              data-interactive
            >
              <div className="flex-1 flex items-center justify-center mb-3">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="max-h-full max-w-full object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                  style={{ maxHeight: "calc(100% - 50px)" }}
                />
              </div>
              <div className="mt-auto">
                <h3 className="text-sm font-bold text-foreground leading-tight">{cert.title}</h3>
                <p className="text-xs text-muted-foreground">{cert.issuer} · {cert.date}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
