import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Problema, Solucao, Beneficios } from "@/components/site/Solucoes";
import { ComoFunciona } from "@/components/site/ComoFunciona";
import { Comparativo } from "@/components/site/Comparativo";
import { Calculadora } from "@/components/site/Calculadora";
import { Galeria } from "@/components/site/Galeria";
import { Monitoramento } from "@/components/site/Monitoramento";
import { Depoimentos } from "@/components/site/Depoimentos";
import { InstagramFeed } from "@/components/site/Instagram";
import { Parceiros } from "@/components/site/Parceiros";
import { BlogPreview } from "@/components/site/BlogPreview";
import { Faq, faqs } from "@/components/site/Faq";

import { CtaFinal, Footer, WhatsAppFab } from "@/components/site/Footer";

const title = "Tratamento de Água para Granjas | P4 Agronegócios";
const description =
  "ETA automática com ozônio e monitoramento em tempo real para granjas de suínos e aves. Mais segurança sanitária, menor mortalidade e maior produtividade.";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "tratamento de água para granjas, tratamento de água para suínos, tratamento de água para aves, qualidade da água em granjas, monitoramento da água, ETA para granjas, tratamento com ozônio",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "P4 Agronegócios",
          description,
          areaServed: "BR",
          knowsAbout: [
            "tratamento de água para granjas",
            "tratamento de água com ozônio",
            "monitoramento da qualidade da água",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problema />
        <Solucao />
        <Beneficios />
        <Comparativo />
        <Calculadora />
        <ComoFunciona />
        <Galeria />
        <Monitoramento />
        <Depoimentos />
        <InstagramFeed />
        <Parceiros />
        <BlogPreview />
        <Faq />

        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
