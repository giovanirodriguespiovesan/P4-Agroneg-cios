import { Gauge, Zap, Thermometer, Droplets, FlaskConical } from "lucide-react";
import { SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import painelAsset from "@/assets/painel-monitoramento.jpg.asset.json";
import { ProgressiveImage } from "./ProgressiveImage";

const indicadores = [
  { icon: FlaskConical, label: "pH", description: "Equilíbrio químico da água" },
  { icon: Zap, label: "ORP", description: "Poder de oxidação e desinfecção" },
  { icon: Thermometer, label: "Temperatura", description: "Condição térmica da linha" },
  { icon: Droplets, label: "Cloro", description: "Dosagem dentro da faixa segura" },
  { icon: Gauge, label: "Ácido", description: "Correção precisa e controlada" },
];

export function Monitoramento() {
  return (
    <section id="monitoramento" className="bg-brand py-20 text-background sm:py-28">
      <div className="container-p4">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              invert
              eyebrow="Software próprio"
              title="Monitoramento inteligente, desenvolvido pela P4"
              description="A P4 possui plataforma de monitoramento. Você acompanha os parâmetros da água em tempo real, recebe alertas e toma decisões com base em dados, não em suposição."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {indicadores.map((item, i) => (
                <Reveal key={item.label} delay={i * 70}>
                  <div className="flex items-start gap-3 rounded-xl border border-background/15 bg-background/5 p-4 backdrop-blur">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-secondary text-secondary-foreground">
                      <item.icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-bold">{item.label}</span>
                      <span className="block text-sm text-background/70">{item.description}</span>
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Espaço preparado para as imagens reais do painel de monitoramento */}
          <Reveal delay={120}>
            <div className="rounded-3xl border border-background/15 bg-background/5 p-5 backdrop-blur">
              <div className="flex items-center gap-2 pb-4">
                <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
                <span className="h-2.5 w-2.5 rounded-full bg-background/25" />
                <span className="h-2.5 w-2.5 rounded-full bg-background/25" />
                <span className="ml-2 text-xs font-semibold uppercase tracking-widest text-background/60">
                  Painel P4 · tempo real
                </span>
              </div>
              <ProgressiveImage
                src={painelAsset.url}
                alt="Controladores de dosagem, sensores de pH e ORP instalados em granja atendida pela P4"
                className="aspect-4/3 w-full rounded-2xl object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
