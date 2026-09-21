import { useEffect, useRef, useState } from "react";
import { ArrowRight, MessageCircle, Check, PlayCircle } from "lucide-react";
import heroAsset from "@/assets/DJI_0513.jpg.asset.json";
import aerialAsset from "@/assets/hero.jpg.asset.json";
import granjaAsset from "@/assets/granja.jpg.asset.json";
import { whatsappUrl } from "@/lib/site";
import { CountUp } from "./CountUp";

const indicators = ["+10 anos de mercado", "Monitoramento em tempo real", "Consultoria especializada"];

export function Hero() {
  const slides = [heroAsset.url, aerialAsset.url, granjaAsset.url];
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 3000);
    return () => window.clearInterval(timer);
  }, [paused, slides.length]);

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-brand"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(event) => { touchX.current = event.touches[0]?.clientX ?? null; }}
      onTouchEnd={(event) => {
        const start = touchX.current;
        const end = event.changedTouches[0]?.clientX;
        if (start == null || end == null || Math.abs(start - end) < 45) return;
        setActive((current) => (current + (start > end ? 1 : slides.length - 1)) % slides.length);
      }}
      aria-roledescription="carrossel"
      aria-label="Granjas atendidas pela P4"
    >
      {slides.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={index === 0 ? "Vista aérea de granja atendida pela P4 Agronegócios" : "Estrutura rural atendida pela P4 Agronegócios"}
          aria-hidden={index !== active}
          loading={index === 0 ? "eager" : "lazy"}
          fetchPriority={index === 0 ? "high" : "auto"}
          className={`hero-slide absolute inset-0 -z-10 h-full w-full object-cover object-center ${index === active ? "hero-slide-active" : ""}`}
        />
      ))}
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-brand via-brand/80 to-brand/45 lg:bg-linear-to-r lg:from-brand lg:via-brand/80 lg:to-brand/30" />

      <div className="container-p4 pb-16 pt-32 sm:pb-24">
        <div className="hero-content max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-background/25 bg-background/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-background backdrop-blur">
            <PlayCircle className="h-4 w-4" />
            Água tratada. Resultados medidos.
          </span>

          <h1 className="mt-6 text-balance font-display text-4xl font-extrabold leading-[1.05] text-background sm:text-5xl lg:text-6xl">
            A qualidade da água impacta diretamente o desempenho da sua produção.
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-background/80 sm:text-lg">
            Tratamento automático e monitoramento em tempo real para granjas de suínos, aves e bovinos.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-sm font-bold text-secondary-foreground shadow-lg btn-press hover:-translate-y-0.5 hover:shadow-xl"
            >
              Solicitar Diagnóstico da minha Granja
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-background/40 bg-background/10 px-7 py-3.5 text-sm font-bold text-background backdrop-blur btn-press hover:bg-background/20"
            >
              <MessageCircle className="h-4 w-4" />
              Falar com um especialista
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
            {indicators.map((item, index) => (
              <li key={item} className="flex items-center gap-2 text-sm font-semibold text-background/85">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-secondary">
                  <Check className="h-3 w-3 text-secondary-foreground" />
                </span>
                {index === 0 ? <><CountUp value={10} suffix=" anos" prefix="+" /> de mercado</> : item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center gap-2" role="tablist" aria-label="Selecionar imagem do destaque">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-label={`Mostrar imagem ${index + 1}`}
                aria-selected={active === index}
                onClick={() => setActive(index)}
                className={`min-h-11 min-w-11 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background ${active === index ? "hero-dot-active" : ""}`}
              >
                <span className="mx-auto block h-2 w-2 rounded-full bg-background/50 transition-all duration-300" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
