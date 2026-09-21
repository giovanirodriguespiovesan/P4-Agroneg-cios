import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { nav, whatsappUrl } from "@/lib/site";
import logoAsset from "@/assets/logo-p4-colorido.png.asset.json";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/55 shadow-[0_4px_24px_-12px_oklch(0.246_0.077_259/0.18)] backdrop-blur-md"
          : "bg-white"
      }`}
    >
      <div className="container-p4 flex min-h-[72px] items-center justify-between gap-4 py-3">
        <a href="/#home" className="flex shrink-0 items-center" aria-label="P4 Agronegócios — Home">
          <img
            src={logoAsset.url}
            alt="Logo P4 Agronegócios"
            style={{ height: "44px", width: "auto" }}
            className="!h-[44px] w-auto shrink-0 object-contain sm:!h-[56px]"
          />
        </a>

        <nav className="hidden items-center gap-6 2xl:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link text-sm font-semibold text-foreground/80 transition-colors hover:text-accent-orange"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className="btn-press hidden items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-bold text-secondary-foreground shadow-sm hover:-translate-y-0.5 hover:shadow-lg sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>

          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="btn-press grid h-11 w-11 place-items-center rounded-full bg-secondary text-secondary-foreground shadow-sm hover:-translate-y-0.5 hover:shadow-lg sm:hidden"
          >
            <MessageCircle className="h-5 w-5" />
          </a>

          <button
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="btn-press grid h-11 w-11 place-items-center rounded-xl border border-border text-foreground 2xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="animate-in fade-in slide-in-from-top-2 border-t border-border bg-white duration-300 2xl:hidden">
          <nav className="container-p4 grid gap-1 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="btn-press flex min-h-11 items-center rounded-lg px-3 py-2.5 text-sm font-semibold text-foreground/80 hover:bg-accent hover:text-brand active:bg-accent"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="btn-press mt-2 flex items-center justify-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-bold text-secondary-foreground"
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
