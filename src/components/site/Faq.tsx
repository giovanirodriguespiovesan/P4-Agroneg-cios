import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

export const faqs = [
  {
    q: "Como funciona a ETA da P4?",
    a: "A água passa por dupla filtração, correção de pH e desinfecção com ozônio e cloro em dosagem controlada. Todo o processo é automático e os parâmetros ficam disponíveis online, em tempo real.",
  },
  {
    q: "O sistema precisa de manutenção?",
    a: "A manutenção é simples e programada. Como o sistema é automático e monitorado remotamente, a equipe da P4 identifica desvios antes que virem problema e orienta a rotina da granja.",
  },
  {
    q: "Quanto tempo leva para instalar?",
    a: "Depois do diagnóstico e da aprovação do projeto, a instalação costuma ser rápida e planejada para interferir o mínimo possível na rotina do lote. O prazo exato depende do porte da granja.",
  },
  {
    q: "Serve para qualquer granja?",
    a: "Sim. Atendemos granjas de suínos e aves de diferentes portes. O sistema é dimensionado conforme o volume de água, a fonte de captação e a estrutura existente.",
  },
  {
    q: "Como solicitar um diagnóstico?",
    a: "Basta falar com a nossa equipe pelo WhatsApp ou preencher o formulário de contato. Fazemos a avaliação da sua água e apresentamos um plano com orçamento.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="container-p4">
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title="Perguntas que todo produtor faz"
        />
        <Reveal delay={100}>
          <div className="mx-auto mt-12 max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((item, i) => (
                <AccordionItem key={item.q} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left text-base font-bold text-brand hover:text-accent-orange hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
