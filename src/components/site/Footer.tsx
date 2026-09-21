import { ArrowRight, MessageCircle, Phone, Mail, MapPin, Instagram } from "lucide-react";
import logoAsset from "@/assets/logo-p4.png.asset.json";
import { site, whatsappUrl, nav } from "@/lib/site";
import { Reveal } from "./Reveal";

export function CtaFinal() {
  return (
    <section id="contato" className="bg-surface py-20 sm:py-28">
      <div className="container-p4">
        <Reveal>
          <div className="overflow-hidden rounded-3xl bg-brand px-7 py-14 text-center text-background sm:px-14">
            <span className="eyebrow">Diagnóstico sem compromisso</span>
            <h2 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-extrabold leading-tight text-background sm:text-4xl">
              Vamos avaliar a qualidade da água da sua granja?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-background/75">
              Fale com um especialista da P4. Analisamos a sua situação e mostramos o que pode ser
              melhorado — de forma clara e objetiva.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={whatsappUrl("Olá! Quero solicitar um diagnóstico da água da minha granja.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-sm font-bold text-secondary-foreground btn-press hover:-translate-y-0.5 hover:shadow-xl"
              >
                Solicitar Diagnóstico
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-background/40 px-7 py-3.5 text-sm font-bold text-background btn-press hover:bg-background/10"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-background/10 bg-brand py-14 text-background">
      <div className="container-p4 grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <img
              src={logoAsset.url}
              alt="Logo P4 Agronegócios"
              loading="lazy"
              className="h-10 w-10 rounded-xl object-cover"
            />
            <span>
              <span className="block font-display text-lg font-bold leading-none text-background">
                P4 Agronegócios
              </span>
              <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-background/70">
                Água tratada e monitorada
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-background/70">
            Estações de Tratamento de Água automáticas, monitoramento em tempo real e consultoria
            especializada para granjas de suínos e aves.
          </p>
          <div className="mt-5 flex gap-2">
            {[{ href: site.social.instagram, icon: Instagram, label: "Instagram" }].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid min-h-11 min-w-11 place-items-center rounded-lg border border-background/20 text-background/75 transition-colors hover:border-accent-orange hover:text-accent-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Rodapé">
          <h3 className="text-sm font-bold uppercase tracking-widest text-background">Navegação</h3>
          <ul className="mt-4 grid gap-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-sm text-background/70 transition-colors hover:text-accent-orange"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-background">Contato</h3>
          <ul className="mt-4 grid gap-1 text-sm text-background/70">
            <li>
              <a
                href={site.phoneHref}
                className="flex min-h-11 items-center gap-2 hover:text-accent-orange"
              >
                <Phone className="h-4 w-4 shrink-0 text-accent-orange" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-11 items-center gap-2 hover:text-accent-orange"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-accent-orange" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex min-h-11 items-center gap-2 hover:text-accent-orange"
              >
                <Mail className="h-4 w-4 shrink-0 text-accent-orange" />
                {site.email}
              </a>
            </li>
            <li className="flex min-h-11 items-start gap-2 py-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-orange" />
              {site.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="container-p4 mt-12 border-t border-background/15 pt-6">
        <p className="text-xs text-background/60">
          © {new Date().getFullYear()} P4 Agronegócios. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar no WhatsApp"
      className="whatsapp-pulse fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-secondary text-secondary-foreground shadow-xl btn-press hover:scale-105 hover:shadow-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
