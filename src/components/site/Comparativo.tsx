import { Check, Minus, Radio, Recycle, ShieldCheck, Waves } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./Section";

const criterios = [
  {
    icon: ShieldCheck,
    label: "Desinfecção",
    p4: "Ozônio com ação oxidante e retorno natural a oxigênio. Menor necessidade de cloro.",
    convencional: "Aplicação excessiva de cloro como agente principal",
  },
  {
    icon: Radio,
    label: "Monitoramento",
    p4: "Parâmetros acompanhados em tempo real por sensores",
    convencional: "Sem monitoramento contínuo",
  },
  {
    icon: Recycle,
    label: "Resíduos",
    p4: "Processo sem PAC e sem acúmulo de lodo associado",
    convencional: "Exige controle de dosagem e dos resíduos do processo",
  },
  {
    icon: Waves,
    label: "Constância da água",
    p4: "Recirculação para uniformidade entre os galpões",
    convencional: "Pode apresentar variações ao longo da distribuição",
  },
];

export function Comparativo() {
  return (
    <section id="comparativo" className="bg-surface py-20 sm:py-28">
      <div className="container-p4">
        <SectionHeading
          eyebrow="Comparação técnica"
          title="Dois processos, níveis diferentes de controle"
          description="Veja como o tratamento com ozônio e monitoramento se compara ao processo convencional com cloro sem acompanhamento contínuo."
        />

        <Reveal className="mt-14 overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
          <div className="hidden grid-cols-[0.8fr_1.1fr_1.1fr] border-b border-border bg-brand text-sm font-bold text-background md:grid">
            <div className="p-5">Aspecto técnico</div>
            <div className="border-l border-background/15 p-5">Método P4</div>
            <div className="border-l border-background/15 p-5">Tratamento convencional</div>
          </div>

          <div className="divide-y divide-border">
            {criterios.map((criterio, index) => (
              <div key={criterio.label} className="grid md:grid-cols-[0.8fr_1.1fr_1.1fr]">
                <div className="flex items-center gap-3 bg-brand-soft/45 p-5 font-bold text-brand">
                  <criterio.icon className="h-5 w-5 shrink-0 text-accent-orange" />
                  {criterio.label}
                </div>
                <div className="flex gap-3 p-5 text-sm leading-relaxed text-foreground md:border-l md:border-border">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent-orange" />
                  <span>
                    <strong className="mb-1 block text-brand md:hidden">Método P4</strong>
                    {criterio.p4}
                  </span>
                </div>
                <div className="flex gap-3 border-t border-border p-5 text-sm leading-relaxed text-muted-foreground md:border-l md:border-t-0">
                  <Minus className="mt-0.5 h-5 w-5 shrink-0" />
                  <span>
                    <strong className="mb-1 block text-brand md:hidden">Tratamento convencional</strong>
                    {criterio.convencional}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
