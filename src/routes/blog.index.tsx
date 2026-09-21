import { ArrowRight, BookOpen } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { BlogLayout } from "@/components/site/BlogLayout";
import { blogPosts } from "@/lib/blog";

const title = "Blog sobre Água em Granjas | P4 Agronegócios";
const description =
  "Conteúdos técnicos sobre tratamento com ozônio, monitoramento e qualidade da água para granjas de suínos e aves.";
const canonical = "https://p4agronegocios.lovable.app/blog";

export const Route = createFileRoute("/blog/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: canonical }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Conteúdos P4 Agronegócios",
          description,
          url: canonical,
          publisher: { "@type": "Organization", name: "P4 Agronegócios" },
        }),
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <BlogLayout>
      <section className="bg-brand py-16 text-background sm:py-20">
        <div className="container-p4 max-w-4xl text-center">
          <span className="eyebrow">Conteúdo técnico</span>
          <h1 className="mt-4 text-balance text-4xl font-extrabold leading-tight sm:text-5xl">
            Água de qualidade para uma produção mais consistente
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty leading-relaxed text-background/75">
            Informação clara sobre tratamento, monitoramento e cuidados com a água em granjas.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-p4">
          <div className="grid gap-6 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.slug} className="card-elev flex h-full flex-col p-6 sm:p-7">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand">
                  <BookOpen className="h-5 w-5" />
                </span>
                <p className="mt-5 text-xs font-bold uppercase text-accent-orange">
                  {post.category}
                </p>
                <h2 className="mt-2 text-xl font-bold leading-snug text-brand">{post.title}</h2>
                <p className="mt-3 grow text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
                  <time dateTime={post.publishedAt}>{post.publishedLabel}</time>
                  <span aria-hidden="true">•</span>
                  <span>{post.readingTime}</span>
                </div>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-brand transition-colors hover:text-accent-orange"
                >
                  Ler artigo <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </BlogLayout>
  );
}
