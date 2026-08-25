import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

/** Container padrão de seção com largura editorial */
export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative", className)}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">{children}</div>
    </section>
  );
}

/** Eyebrow padrão: rótulo pequeno com traço */
export function Eyebrow({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <Reveal>
      <p
        className={cn(
          "flex items-center gap-3 text-[11px] font-bold tracking-[0.28em] uppercase",
          tone === "dark" ? "text-mint" : "text-ink",
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            "h-px w-8",
            tone === "dark" ? "bg-mint/70" : "bg-ink/40",
          )}
        />
        {children}
      </p>
    </Reveal>
  );
}

/** Headline editorial grande */
export function SectionTitle({
  children,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Reveal delay={80}>
      <h2
        className={cn(
          "text-4xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl",
          tone === "dark" ? "text-foreground" : "text-ink",
          className,
        )}
      >
        {children}
      </h2>
    </Reveal>
  );
}
