import { SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import drone1Asset from "@/assets/granja-drone-1.png.asset.json";
import drone2Asset from "@/assets/granja-drone-2.png.asset.json";
import drone3Asset from "@/assets/granja-drone-3.png.asset.json";
import drone4Asset from "@/assets/granja-drone-4.png.asset.json";
import drone5Asset from "@/assets/granja-drone-5.png.asset.json";
import drone6Asset from "@/assets/granja-drone-6.png.asset.json";
import { ProgressiveImage } from "./ProgressiveImage";

function GalleryFigure({
  src,
  alt,
  caption,
  className = "aspect-4/3",
}: {
  src: string;
  alt: string;
  caption: string;
  className?: string;
}) {
  return (
    <figure className="flex h-full flex-col overflow-hidden rounded-2xl border border-brand/10 shadow-sm">
      <div className="flex flex-1 overflow-hidden bg-muted">
        <ProgressiveImage src={src} alt={alt} className={`w-full flex-1 object-cover ${className}`} />
      </div>
      <figcaption className="bg-brand px-5 py-3 text-sm font-semibold text-background">{caption}</figcaption>
    </figure>
  );
}

export function Galeria() {
  return (
    <section id="galeria" className="py-20 sm:py-28">
      <div className="container-p4">
        <SectionHeading
          eyebrow="Na prática"
          title="Estações, granjas e animais atendidos"
          description="Registros reais das estações de tratamento instaladas, das granjas parceiras e dos animais que consomem água tratada todos os dias."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <figure className="overflow-hidden rounded-2xl shadow-lg">
              <ProgressiveImage
                src={drone1Asset.url}
                alt="Conjunto de vistas aéreas de granjas atendidas pela P4 Agronegócios"
                className="aspect-16/9 w-full object-cover"
              />
              <figcaption className="bg-brand px-5 py-3 text-sm font-semibold text-background">
                Algumas granjas atendidas pela P4
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={80} className="h-full">
            <GalleryFigure
              src={drone2Asset.url}
              alt="Vista aérea de granja com galpões e painéis solares"
              caption="Estrutura completa de uma granja"
              className="aspect-4/3 lg:aspect-auto"
            />
          </Reveal>

          <Reveal delay={140} className="h-full">
            <GalleryFigure
              src={drone3Asset.url}
              alt="Vista aérea de granja cercada por área verde e mata"
              caption="Granja de Mondaí"
            />
          </Reveal>
          <Reveal delay={200} className="h-full">
            <GalleryFigure
              src={drone4Asset.url}
              alt="Vista aérea de granja próxima a áreas de cultivo e reservatórios"
              caption="Granja de Aves em Caxambu do Sul"
            />
          </Reveal>
          <Reveal delay={260} className="h-full">
            <GalleryFigure
              src={drone5Asset.url}
              alt="Vista aérea ampla de granja em área agrícola"
              caption="Granja em Xaxim"
            />
          </Reveal>

          <Reveal delay={320} className="h-full">
            <GalleryFigure
              src={drone6Asset.url}
              alt="Conjunto de vistas aéreas de reservatórios e estações de tratamento em granjas"
              caption="Estações e reservatórios instalados"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
