import { useState } from "react";
import { Check, Copy, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/contexts/LanguageContext";
import { certifications } from "@/lib/portfolio-data";

export default function CredentialsSection() {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);
  const featured = certifications[0];

  const copyCertNo = async () => {
    if (!featured.certNo) return;
    try {
      await navigator.clipboard.writeText(featured.certNo);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable (insecure context or denied): the number stays selectable.
    }
  };

  return (
    <section id="credentials" className="relative z-10 mx-auto grid max-w-6xl scroll-mt-24 gap-8 px-5 py-20 sm:px-8 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <p className="section-label">{t.credentials.label}</p>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{t.credentials.title}</h2>
        <p className="section-label mt-10">{t.credentials.educationLabel}</p>
        <div className="mt-4 divide-y divide-border border-y border-border">
          {t.credentials.education.map((item) => (
            <article key={item.title} className="py-5">
              <p className="text-xs text-muted-foreground">{item.date}</p>
              <h3 className="mt-2 font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-primary">{item.place}</p>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="lg:col-span-7">
        <div className="glass-strong flex flex-col items-center gap-6 rounded-3xl p-6 sm:flex-row sm:items-start sm:p-8">
          <img src={featured.image} alt={featured.title} className="size-28 shrink-0 object-contain sm:size-32" />
          <div className="min-w-0 flex-1">
            <p className="section-label">{t.credentials.featured}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold">{featured.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{featured.issuer} · {featured.date}</p>
            <div className="mt-4 flex items-center gap-2">
              <span className="font-mono text-xs text-muted-foreground select-all">{t.credentials.certNo} {featured.certNo}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={copyCertNo}
                aria-label={copied ? t.credentials.copied : t.credentials.copy}
                title={copied ? t.credentials.copied : t.credentials.copy}
              >
                {copied ? <Check /> : <Copy />}
              </Button>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">{t.credentials.validThrough}</p>
            <Button asChild size="sm" variant="outline" className="mt-4">
              <a href={featured.url} target="_blank" rel="noopener noreferrer">
                {t.credentials.verify}
                <ExternalLink />
              </a>
            </Button>
          </div>
        </div>

        <p className="section-label mt-8">{t.credentials.certsLabel}</p>
        <div className="glass mt-4 rounded-2xl p-3">
          {certifications.slice(1).map((cert) => (
            <a
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-lg border-b border-border px-3 py-4 transition-colors last:border-0 hover:bg-card/60"
            >
              <img src={cert.image} alt="" className="size-10 shrink-0 object-contain" loading="lazy" />
              <span className="min-w-0">
                <span className="block text-sm font-medium">{cert.title}</span>
                <span className="block text-xs text-muted-foreground">{cert.issuer} · {cert.date}</span>
              </span>
              <ExternalLink className="ml-auto size-4 shrink-0 text-muted-foreground" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
