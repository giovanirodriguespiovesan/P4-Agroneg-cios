import { ClipboardCheck, PencilRuler, Hammer, Activity, Headset } from "lucide-react";
import { SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const etapas = [
  {
    icon: ClipboardCheck,
    title: "Diagnóstico",
    description: "Análise da água, da estrutura e da rotina da granja.",
  },
  {
    icon: PencilRuler,
    title: "Projeto",
    description: "Dimensionamento sob medida para o seu volume e realidade.",
  },
  {
    icon: Hammer,
    title: "Instalação",
    description: "Montagem, ajustes e treinamento da equipe local.",
  },
  {
    icon: Activity,
    title: "Monitoramento",
    description: "Parâmetros acompanhados online, em tempo real.",
  },
  {
    icon: Headset,
    title: "Suporte contínuo",
    description: "Consultoria técnica e acompanhamento permanente.",
  },
];

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-20 sm:py-28">
      <div className="container-p4">
        <SectionHeading
          eyebrow="Processo"
          title="Como funciona"
          description="Um caminho claro, do primeiro contato ao acompanhamento de longo prazo."
        />

        <ol className="relative mt-14 grid gap-8 before:absolute before:left-[10%] before:right-[10%] before:top-6 before:hidden before:h-px before:bg-border before:content-[''] md:grid-cols-5 md:gap-4 md:before:block">
          {etapas.map((etapa, i) => (
            <Reveal key={etapa.title} delay={i * 80} className="relative h-full">
              <li className="relative grid grid-cols-[3rem_1fr] gap-4 md:block md:text-center">
                {i < etapas.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-[-2rem] left-6 top-12 w-px bg-border md:hidden"
                  />
                ) : null}
                <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full border-4 border-background bg-secondary text-secondary-foreground shadow-md md:mx-auto">
                  <etapa.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 md:mt-5">
                  <span className="text-xs font-bold uppercase text-accent-orange">
                    Etapa {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 text-base font-bold text-brand">{etapa.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {etapa.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
