import { useRef, useState } from "react";
import { Quote } from "lucide-react";
import { SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";

const depoimentos = [
  {
    quote:
      "Minha produção melhorou uma vez que houve redução da mortalidade e da refugagem. Eu recomendo a instalação do sistema da P4 pois os resultados são significativos.",
    name: "Gerson",
    role: "Suinocultura · Tunápolis (SC)",
  },
  {
    quote:
      "Antes eu tinha problemas de mortalidade de matriz e leitão. Após a instalação do sistema houve redução desses números.",
    name: "Tiago",
    role: "Suinocultura · Palmitos (SC)",
  },
  {
    quote:
      "Sistema de baixo custo de manutenção. A conversão melhorou bastante e a praticidade automatizada atualiza em tempo real.",
    name: "Granja Marcante",
    role: "BRF Avicultura · Caxambu do Sul (SC)",
  },
  {
    quote:
      "A gente tinha bastante problema com enterite e passagem de ração, era um controle difícil. Com a P4 mudou totalmente esse controle. Não temos mais problemas de diarréia e na passagem de ração conseguimos injetar ácido automaticamente. Quem não tem, eu recomendo.",
    name: "Cleomar",
    role: "Avicultura · Caxambu do Sul (SC)",
  },
  {
    quote:
      "Nossa conversão anterior era de 3,10. Após a implantação do sistema da P4, registramos uma conversão de 2,86 e uma mortalidade de 0,6%. Além disso, reduziu muito o custo com medicamentos e o monitoramento ajuda a controlar anormalidades.",
    name: "Daniel",
    role: "Suinocultura · Tunápolis (SC)",
  },
  {
    quote:
      "A P4 veio no mercado para ajudar o produtor, principalmente pelos resultados. Uma das coisas que me levou a adquirir esse sistema é a não poluição, ela não tem o PAC, que seria o resíduo do tratamento da água.",
    name: "Juliano",
    role: "Suinocultura · Xaxim (SC)",
  },
];

export function Depoimentos() {
  const [active, setActive] = useState(0);
  const touchX = useRef<number | null>(null);
  return (
    <section id="depoimentos" className="bg-surface py-20 sm:py-28">
      <div className="container-p4">
        <SectionHeading
          eyebrow="Quem já usa"
          titleNode={
            <>
              Mais de <CountUp value={170} /> produtores tratam a água e potencializam seu resultado
            </>
          }
          description="Experiências reais de quem colocou a qualidade da água no centro da produção."
        />

        <div
          className="testimonial-track mt-14"
          onTouchStart={(event) => {
            touchX.current = event.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={(event) => {
            const start = touchX.current;
            const end = event.changedTouches[0]?.clientX;
            if (start == null || end == null || Math.abs(start - end) < 40) return;
            setActive((current) => Math.max(0, Math.min(depoimentos.length - 1, current + (start > end ? 1 : -1))));
          }}
        >
          {depoimentos.map((item, i) => (
            <Reveal
              key={item.name + i}
              delay={i * 80}
              className={`testimonial-slide h-full ${active === i ? "testimonial-active" : ""}`}
            >
              <figure className="card-elev flex h-full flex-col p-7">
                <Quote className="h-7 w-7 text-accent-orange" />
                <blockquote className="mt-5 grow text-pretty text-base leading-relaxed text-foreground/85">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <span className="block font-bold text-brand">{item.name}</span>
                  <span className="block text-sm text-muted-foreground">{item.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="mt-5 flex justify-center gap-1 lg:hidden" aria-label="Posição do depoimento">
          {depoimentos.map((item, index) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Ver depoimento ${index + 1}`}
              onClick={() => setActive(index)}
              className="grid min-h-11 min-w-11 place-items-center"
            >
              <span
                className={`h-2 rounded-full bg-accent-orange transition-all ${active === index ? "w-6" : "w-2 opacity-40"}`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
