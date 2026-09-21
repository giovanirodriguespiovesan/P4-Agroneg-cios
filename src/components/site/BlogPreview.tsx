import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { blogPosts } from "@/lib/blog";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./Section";

export function BlogPreview() {
  return (
    <section id="blog" className="bg-surface py-20 sm:py-28">
      <div className="container-p4">
        <SectionHeading
          eyebrow="Conteúdo técnico"
          title="Informação para cuidar melhor da água da granja"
          description="Conteúdos objetivos sobre tratamento, monitoramento e qualidade da água na produção animal."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 80} className="h-full">
              <article className="card-elev flex h-full flex-col p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand">
                  <BookOpen className="h-5 w-5" />
                </span>
                <p className="mt-5 text-xs font-bold uppercase text-accent-orange">
                  {post.category}
                </p>
                <h3 className="mt-2 text-xl font-bold leading-snug text-brand">{post.title}</h3>
                <p className="mt-3 grow text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-brand transition-colors hover:text-accent-orange"
                >
                  Ler artigo <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="btn-press h-11 rounded-full px-6 font-bold">
            <Link to="/blog">Ver todos os conteúdos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
