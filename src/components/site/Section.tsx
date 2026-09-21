import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  titleNode,
  description,
  align = "center",
  invert = false,
}: {
  eyebrow?: string;
  title?: string;
  titleNode?: ReactNode;
  description?: string;
  align?: "center" | "left";
  invert?: boolean;
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2
        className={`mt-3 text-balance text-3xl font-extrabold leading-tight sm:text-4xl ${
          invert ? "text-background" : "text-brand"
        }`}
      >
        {titleNode ?? title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-pretty text-base leading-relaxed ${
            invert ? "text-background/75" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  index = 0,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}) {
  return (
    <Reveal delay={index * 60} className="h-full">
      <article className="card-elev h-full p-6">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="mt-5 text-lg font-bold text-brand">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </article>
    </Reveal>
  );
}
