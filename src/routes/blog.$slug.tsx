import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { BlogLayout } from "@/components/site/BlogLayout";
import { Button } from "@/components/ui/button";
import { blogPosts, getBlogPost } from "@/lib/blog";
import { whatsappUrl } from "@/lib/site";

const baseUrl = "https://p4agronegocios.lovable.app";

export const Route = createFileRoute("/blog/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Artigo não encontrado | P4 Agronegócios" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.title} | P4 Agronegócios`;
    const canonical = `${baseUrl}/blog/${loaderData.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: canonical },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: loaderData.excerpt },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: loaderData.title,
            description: loaderData.excerpt,
            datePublished: loaderData.publishedAt,
            dateModified: loaderData.publishedAt,
            mainEntityOfPage: canonical,
            author: { "@type": "Organization", name: "P4 Agronegócios" },
            publisher: { "@type": "Organization", name: "P4 Agronegócios" },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
              { "@type": "ListItem", position: 3, name: loaderData.title, item: canonical },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: ArticleNotFound,
  component: BlogArticle,
});

function ArticleNotFound() {
  return (
    <BlogLayout>
      <section className="container-p4 grid min-h-[55vh] place-items-center py-20 text-center">
        <div>
          <h1 className="text-3xl font-extrabold text-brand">Artigo não encontrado</h1>
          <p className="mt-3 text-muted-foreground">Este conteúdo não está disponível.</p>
          <Button asChild className="mt-7 rounded-full">
            <Link to="/blog">Voltar ao blog</Link>
          </Button>
        </div>
      </section>
    </BlogLayout>
  );
}

function BlogArticle() {
  const post = Route.useLoaderData();
  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <BlogLayout>
      <article>
        <header className="bg-brand py-14 text-background sm:py-20">
          <div className="container-p4 max-w-4xl">
            <Link
              to="/blog"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-background/75 hover:text-accent-orange"
            >
              <ArrowLeft className="h-4 w-4" /> Voltar ao blog
            </Link>
            <p className="mt-7 text-xs font-bold uppercase text-accent-orange">{post.category}</p>
            <h1 className="mt-3 text-balance text-4xl font-extrabold leading-tight sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 max-w-3xl text-pretty leading-relaxed text-background/75">
              {post.excerpt}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1 text-sm text-background/65">
              <span>Por P4 Agronegócios</span>
              <span aria-hidden="true">•</span>
              <time dateTime={post.publishedAt}>{post.publishedLabel}</time>
              <span aria-hidden="true">•</span>
              <span>{post.readingTime}</span>
            </div>
          </div>
        </header>

        <div className="container-p4 grid gap-12 py-14 lg:grid-cols-[minmax(0,1fr)_18rem] lg:py-20">
          <div className="mx-auto w-full max-w-3xl">
            {post.sections.map((section) => (
              <section key={section.heading} className="mb-10 scroll-mt-28 last:mb-0">
                <h2 className="text-2xl font-extrabold text-brand">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-base leading-8 text-foreground/80">
                    {paragraph}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="mt-5 grid gap-3">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 leading-7 text-foreground/80">
                        <span
                          className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-secondary"
                          aria-hidden="true"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <aside className="self-start rounded-xl border border-border bg-surface p-6 lg:sticky lg:top-28">
            <h2 className="text-lg font-bold text-brand">Avalie a água da sua granja</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Converse com a equipe técnica da P4 sobre tratamento e monitoramento.
            </p>
            <Button
              asChild
              variant="secondary"
              className="btn-press mt-5 h-11 w-full rounded-full font-bold"
            >
              <a
                href={whatsappUrl(
                  "Olá! Li um artigo da P4 e gostaria de avaliar a água da minha granja.",
                )}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </Button>
          </aside>
        </div>
      </article>

      <section className="bg-surface py-14 sm:py-20">
        <div className="container-p4">
          <h2 className="text-2xl font-extrabold text-brand">Continue lendo</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {related.map((item) => (
              <Link
                key={item.slug}
                to="/blog/$slug"
                params={{ slug: item.slug }}
                className="card-elev flex min-h-36 items-center justify-between gap-5 p-6"
              >
                <span>
                  <span className="text-xs font-bold uppercase text-accent-orange">
                    {item.category}
                  </span>
                  <span className="mt-2 block font-bold leading-snug text-brand">{item.title}</span>
                </span>
                <ArrowRight className="h-5 w-5 shrink-0 text-accent-orange" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </BlogLayout>
  );
}
