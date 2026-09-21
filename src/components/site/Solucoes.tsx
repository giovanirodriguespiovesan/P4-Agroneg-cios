import {
  Skull,
  Bug,
  TrendingDown,
  Pill,
  BarChart3,
  Droplet,
  Cpu,
  Filter,
  FlaskConical,
  ShieldCheck,
  Radio,
  Users,
  Waves,
  Clock,
  Shield,
  Wrench,
  Smile,
  Sprout,
  Recycle,
  RefreshCw,
  Leaf,
} from "lucide-react";
import { SectionHeading, FeatureCard } from "./Section";
import { Reveal } from "./Reveal";
import granjaAsset from "@/assets/granja.jpg";
import { ProgressiveImage } from "./ProgressiveImage";

const riscos = [
  {
    icon: Skull,
    title: "Mortalidade",
    description: "Água contaminada eleva a mortalidade do lote e compromete todo o ciclo produtivo.",
  },
  {
    icon: Bug,
    title: "Doenças",
    description: "Bactérias, biofilme e patógenos circulam pela linha de bebedouros e disseminam doenças.",
  },
  {
    icon: TrendingDown,
    title: "Redução do desempenho",
    description: "Consumo irregular de água derruba a conversão alimentar e o ganho de peso diário.",
  },
  {
    icon: Pill,
    title: "Uso excessivo de antibióticos",
    description: "Sem controle sanitário da água, o tratamento medicamentoso vira rotina e custo fixo.",
  },
  {
    icon: BarChart3,
    title: "Baixa produtividade",
    description: "Lotes irregulares, metas não atingidas e margem menor no fechamento.",
  },
];

const solucoes = [
  {
    icon: Cpu,
    title: "Tratamento automático",
    description: "Sistema que opera sozinho, 24 horas por dia, sem depender da rotina da equipe.",
  },
  {
    icon: Waves,
    title: "Ozônio",
    description: "Alto poder oxidante para eliminar patógenos e biofilme sem deixar resíduo na água.",
  },
  {
    icon: Filter,
    title: "Dupla filtração",
    description: "Remoção de sólidos, turbidez e matéria orgânica antes da água chegar aos animais.",
  },
  {
    icon: FlaskConical,
    title: "Controle de pH",
    description: "pH estável garante eficiência do tratamento e melhor absorção de nutrientes.",
  },
  {
    icon: ShieldCheck,
    title: "Controle de cloro",
    description: "Dosagem precisa, sempre dentro da faixa segura para o plantel.",
  },
  {
    icon: Radio,
    title: "Monitoramento remoto",
    description: "Leitura online dos parâmetros e alertas quando algo sai do padrão.",
  },
  {
    icon: Users,
    title: "Consultoria especializada",
    description: "Acompanhamento técnico próximo, com interpretação dos dados e plano de ação.",
  },
];

const beneficios = [
  {
    icon: Droplet,
    title: "Água tratada continuamente",
    description: "Qualidade constante em todos os bebedouros, do primeiro ao último dia do lote.",
  },
  {
    icon: Clock,
    title: "Monitoramento 24h",
    description: "Você acompanha a água da granja pelo celular, a qualquer hora e de qualquer lugar.",
  },
  {
    icon: Shield,
    title: "Maior segurança sanitária",
    description: "Menos risco de contaminação, mais previsibilidade sanitária na produção.",
  },
  {
    icon: Wrench,
    title: "Menor necessidade operacional",
    description: "Menos tarefas manuais e menos dependência da rotina para manter o padrão.",
  },
  {
    icon: Smile,
    title: "Mais tranquilidade",
    description: "Você deixa de apagar incêndio e passa a decidir com dados na mão.",
  },
  {
    icon: Sprout,
    title: "Maior produtividade",
    description: "Animais bebem melhor, crescem melhor e o resultado aparece no fechamento do lote.",
  },
  {
    icon: Recycle,
    title: "Zero resíduos",
    description:
      "Tratamento sem PAC (policloreto de alumínio), o que evita o acúmulo de lodo e reduz a necessidade de descarte.",
  },
  {
    icon: RefreshCw,
    title: "Recirculação contínua",
    description: "Mantém a mesma qualidade de água em todos os galpões, sem variações.",
  },
];

export function Problema() {
  return (
    <section id="solucao" className="bg-surface py-20 sm:py-28">
      <div className="container-p4">
        <SectionHeading
          eyebrow="O ponto de partida"
          title="Você conhece a qualidade da água que seus animais consomem?"
          description="A água é o insumo mais consumido dentro da granja, e o menos monitorado. Desse modo, quando ela falha o prejuízo aparece em toda a cadeia produtiva."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {riscos.map((item, i) => (
            <FeatureCard key={item.title} index={i} {...item} />
          ))}
          <Reveal delay={300} className="h-full">
            <div className="flex h-full flex-col justify-center rounded-2xl bg-brand p-7 text-background">
              <p className="text-lg font-bold leading-snug">Tudo começa pela qualidade da água.</p>
              <p className="mt-3 text-sm leading-relaxed text-background/75">
                Corrigir a água é a intervenção de menor custo e maior impacto dentro de uma granja. A P4 é experiente
                nisso.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Solucao() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-p4">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.15fr]">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              align="left"
              eyebrow="A solução P4"
              title="Como a P4 resolve esse problema"
              description="Entregamos um processo completo de tratamento, controle e acompanhamento técnico da água da sua granja."
            />
            <Reveal delay={120}>
              <ProgressiveImage
                src={granjaAsset}
                alt="Vista aérea de granjas atendidas pela P4 Agronegócios"
                className="mt-8 aspect-4/3 w-full rounded-2xl object-cover shadow-lg"
              />
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {solucoes.map((item, i) => (
              <FeatureCard key={item.title} index={i} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Beneficios() {
  return (
    <section id="beneficios" className="bg-surface py-20 sm:py-28">
      <div className="container-p4">
        <SectionHeading
          eyebrow="Resultados"
          title="O que muda na sua produção"
          description="O produtor não compra uma ETA... compra produtividade, segurança sanitária e tranquilidade."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map((item, i) => (
            <FeatureCard key={item.title} index={i} {...item} />
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-col gap-5 rounded-3xl bg-brand p-8 text-background sm:flex-row sm:items-center sm:p-10">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-background/10">
              <Leaf className="h-7 w-7 text-secondary" />
            </span>
            <div>
              <h3 className="text-xl font-bold text-background">Bom para os animais e para a natureza</h3>
              <p className="mt-2 text-pretty leading-relaxed text-background/75">
                Após o tratamento e ação da sua função desinfetante, a molécula do ozônio volta a ser uma molécula de
                oxigênio, retornando ao ambiente de forma natural, deixando a água 100% tratada e purificada para o
                consumo dos animais.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
