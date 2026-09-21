import { useEffect } from "react";
import { Instagram as InstagramIcon, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { site, instagramPosts } from "@/lib/site";

export function InstagramFeed() {
  useEffect(() => {
    if (instagramPosts.length === 0) return;
    const existing = document.querySelector<HTMLScriptElement>('script[src="https://www.instagram.com/embed.js"]');
    if (existing) {
      (window as unknown as { instgrm?: { Embeds: { process: () => void } } }).instgrm?.Embeds.process();
      return;
    }
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="instagram" className="py-20 sm:py-28">
      <div className="container-p4">
        <SectionHeading
          eyebrow="Redes sociais"
          title="Acompanhe a P4 no Instagram"
          description="Bastidores das instalações, resultados de granjas e conteúdo técnico sobre qualidade da água."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {instagramPosts.length > 0
            ? instagramPosts.slice(0, 3).map((url, i) => (
                <Reveal key={url} delay={i * 80} className="h-full">
                  <div className="card-elev overflow-hidden p-2 [&_iframe]:!min-w-0 [&_iframe]:!w-full">
                    <blockquote
                      className="instagram-media"
                      data-instgrm-permalink={url}
                      data-instgrm-version="14"
                      style={{ margin: 0, width: "100%", minWidth: 0 }}
                    />
                  </div>
                </Reveal>
              ))
            : [0, 1, 2].map((i) => (
                <Reveal key={i} delay={i * 80} className="h-full">
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="card-elev group flex aspect-square flex-col items-center justify-center gap-3 p-7 text-center btn-press hover:-translate-y-1"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft text-brand">
                      <InstagramIcon className="h-6 w-6" />
                    </span>
                    <span className="font-bold text-brand">@p4agronegocios</span>
                    <span className="text-sm text-muted-foreground">
                      Publicação {i + 1} do feed — veja no Instagram
                    </span>
                  </a>
                </Reveal>
              ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 flex justify-center">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-brand-foreground btn-press hover:-translate-y-0.5 hover:shadow-xl"
            >
              <InstagramIcon className="h-4 w-4" />
              Seguir @p4agronegocios
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
