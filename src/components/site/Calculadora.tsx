import { useMemo, useState } from "react";
import { ArrowRight, Calculator, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./Section";

type Campos = {
  conversao: string;
  preco: string;
  animais: string;
  ganho: string;
};

const initialFields: Campos = { conversao: "", preco: "", animais: "", ganho: "" };

function toNumber(value: string) {
  return Number(value.replace(",", "."));
}

const currency = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const number = new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 2 });

export function Calculadora() {
  const [campos, setCampos] = useState<Campos>(initialFields);

  const resultado = useMemo(() => {
    const conversao = toNumber(campos.conversao);
    const preco = toNumber(campos.preco);
    const animais = toNumber(campos.animais);
    const ganho = toNumber(campos.ganho);
    if (![conversao, preco, animais, ganho].every((valor) => Number.isFinite(valor) && valor > 0)) return null;

    const novaConversao = conversao * 0.93;
    const consumoAntes = conversao * ganho * animais;
    const consumoDepois = novaConversao * ganho * animais;
    const racaoEconomizada = consumoAntes - consumoDepois;
    const economia = racaoEconomizada * preco;
    return {
      conversao,
      preco,
      animais,
      ganho,
      novaConversao,
      consumoAntes,
      consumoDepois,
      racaoEconomizada,
      economia,
    };
  }, [campos]);

  const mensagem = resultado
    ? `Olá! Fiz uma simulação no site da P4 Agronegócios. Conversão atual: ${number.format(resultado.conversao)}; preço da ração: ${currency.format(resultado.preco)}/kg; animais: ${number.format(resultado.animais)}; ganho médio: ${number.format(resultado.ganho)} kg. Conversão estimada: ${number.format(resultado.novaConversao)}; ração economizada: ${number.format(resultado.racaoEconomizada)} kg; economia estimada: ${currency.format(resultado.economia)}. Gostaria de avaliar este resultado com um especialista.`
    : "Olá! Gostaria de calcular a economia possível na minha granja com a P4 Agronegócios.";

  const inputs: Array<{
    key: keyof Campos;
    label: string;
    suffix: string;
    step: string;
    placeholder: string;
  }> = [
    {
      key: "conversao",
      label: "Conversão alimentar atual",
      suffix: "kg/kg",
      step: "0.01",
      placeholder: "Ex.: 2,40",
    },
    {
      key: "preco",
      label: "Preço da ração",
      suffix: "R$/kg",
      step: "0.01",
      placeholder: "Ex.: 2,10",
    },
    {
      key: "animais",
      label: "Quantidade de animais",
      suffix: "animais",
      step: "1",
      placeholder: "Ex.: 1000",
    },
    {
      key: "ganho",
      label: "Ganho médio de peso",
      suffix: "kg/animal",
      step: "0.1",
      placeholder: "Ex.: 100",
    },
  ];

  return (
    <section id="calculadora" className="py-20 sm:py-28">
      <div className="container-p4">
        <SectionHeading
          eyebrow="Simulação de resultados"
          title="Calcule a economia estimada em ração"
          description="Informe os dados do seu lote para simular o impacto de uma redução estimada de 7% na conversão alimentar. Conforme resultados reais de nossos clientes."
        />

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <form
              className="rounded-2xl border border-border bg-background p-6 shadow-sm sm:p-8"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand">
                  <Calculator className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-bold text-brand">Dados da produção</h3>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {inputs.map((input) => (
                  <label key={input.key} className="grid gap-2 text-sm font-semibold text-brand">
                    {input.label}
                    <span className="relative">
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step={input.step}
                        value={campos[input.key]}
                        placeholder={input.placeholder}
                        onChange={(event) => setCampos((atual) => ({ ...atual, [input.key]: event.target.value }))}
                        className="h-12 w-full rounded-lg border border-input bg-background px-3 pr-20 text-base font-medium text-foreground outline-none transition-colors placeholder:text-muted-foreground/65 focus:border-accent-orange"
                      />
                      <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-muted-foreground">
                        {input.suffix}
                      </span>
                    </span>
                  </label>
                ))}
              </div>
              <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                Esta é uma simulação técnica. O resultado real pode variar conforme manejo, genética, alimentação e
                condições da granja.
              </p>
            </form>
          </Reveal>

          <Reveal delay={100}>
            <div
              className="overflow-hidden rounded-2xl bg-brand p-6 text-background shadow-lg sm:p-8"
              aria-live="polite"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-background/10 text-accent-orange">
                  <TrendingDown className="h-5 w-5" />
                </span>
                <div>
                  <span className="text-xs font-bold uppercase text-background/60">Resultado estimado</span>
                  <h3 className="text-lg font-bold text-background">Antes e depois</h3>
                </div>
              </div>

              {resultado ? (
                <>
                  <div className="mt-8 space-y-6">
                    <div>
                      <div className="mb-2 flex justify-between text-sm">
                        <span>Antes</span>
                        <strong>{number.format(resultado.consumoAntes)} kg</strong>
                      </div>
                      <div className="h-4 overflow-hidden rounded-full bg-background/12">
                        <div className="h-full w-full rounded-full bg-background/55" />
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 flex justify-between text-sm">
                        <span>Depois</span>
                        <strong>{number.format(resultado.consumoDepois)} kg</strong>
                      </div>
                      <div className="h-4 overflow-hidden rounded-full bg-background/12">
                        <div className="h-full w-[93%] rounded-full bg-secondary" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 grid gap-3 border-t border-background/15 pt-6 sm:grid-cols-2">
                    <div className="rounded-xl bg-background/8 p-4">
                      <span className="text-xs text-background/65">Nova conversão</span>
                      <strong className="mt-1 block text-xl text-background">
                        {number.format(resultado.novaConversao)}
                      </strong>
                    </div>
                    <div className="rounded-xl bg-background/8 p-4">
                      <span className="text-xs text-background/65">Ração economizada</span>
                      <strong className="mt-1 block text-xl text-background">
                        {number.format(resultado.racaoEconomizada)} kg
                      </strong>
                    </div>
                  </div>
                  <div className="mt-6">
                    <span className="text-sm text-background/70">Economia total estimada</span>
                    <strong className="mt-1 block text-3xl font-extrabold text-accent-orange sm:text-4xl">
                      {currency.format(resultado.economia)}
                    </strong>
                  </div>
                  <Button
                    asChild
                    variant="secondary"
                    className="btn-press mt-7 h-12 w-full rounded-full px-6 font-bold"
                  >
                    <a href={whatsappUrl(mensagem)} target="_blank" rel="noreferrer">
                      Conversar sobre este resultado <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </>
              ) : (
                <div className="mt-8 grid min-h-72 place-items-center rounded-xl border border-dashed border-background/25 bg-background/5 p-8 text-center">
                  <div>
                    <Calculator className="mx-auto h-8 w-8 text-accent-orange" />
                    <p className="mt-4 font-semibold text-background">Preencha os quatro campos</p>
                    <p className="mt-2 text-sm leading-relaxed text-background/65">
                      A comparação de consumo e a economia aparecerão aqui automaticamente.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
