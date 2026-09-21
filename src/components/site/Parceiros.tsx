import { SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import belaVistaAsset from "@/assets/bela-vista-solucoes.png";
import { ProgressiveImage } from "./ProgressiveImage";

const partners = [
  {
    name: "Panozon",
    role: "Fornecedora da máquina de ozônio",
    description:
      "Parceira estratégica no fornecimento da tecnologia de ozonização que garante a desinfeção eficaz da água nas estações P4.",
  },
  {
    name: "Bela Vista Soluções",
    logo: belaVistaAsset,
    role: "Tecnologia e soluções ambientais",
    description:
      "Parceira especializada em soluções ambientais que contribui com know-how técnico para o tratamento sustentável da água.",
  },
];

export function Parceiros() {
  return (
    <section id="parceiros" className="bg-surface py-20 sm:py-28">
      <div className="container-p4">
        <SectionHeading
          eyebrow="Quem nos apoia"
          title="Parceiros que fazem parte da solução"
          description="Empresas e fornecedores que colaboram para entregar tecnologia, confiança e resultados às granjas."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {partners.map((partner, i) => (
            <Reveal key={partner.name} delay={i * 80} className="h-full">
              <article className="card-elev flex h-full flex-col items-center p-8 text-center">
                {"logo" in partner ? (
                  <span className="grid h-14 w-14 place-items-center overflow-hidden rounded-2xl bg-white p-1 shadow-sm">
                    <ProgressiveImage
                      src={partner.logo}
                      alt={`Logo ${partner.name}`}
                      className="h-full w-full object-contain"
                    />
                  </span>
                ) : (
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand text-brand-foreground shadow-sm">
                    <span className="font-display text-lg font-extrabold">P</span>
                  </span>
                )}
                <h3 className="mt-5 text-xl font-bold text-brand">{partner.name}</h3>
                <p className="mt-1 text-sm font-semibold text-accent-orange">{partner.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {partner.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
