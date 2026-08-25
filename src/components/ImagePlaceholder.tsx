import { ImagePlus } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * SISTEMA DE PLACEHOLDERS DE IMAGEM
 * ---------------------------------
 * Cada área de imagem do site usa este componente. Para substituir por um
 * asset real, troque o <ImagePlaceholder ... /> por uma <img /> (ou <picture>)
 * mantendo o mesmo `ratio` e `className` — o layout não quebra:
 *
 *   <img
 *     src="/images/hero.webp"
 *     alt="Descrição da imagem"
 *     className="aspect-video w-full rounded-2xl object-cover"
 *     loading="lazy"
 *   />
 */

type Ratio = "16/9" | "4/3" | "16/10" | "3/4" | "1/1";

type ImagePlaceholderProps = {
  /** Identificação única, ex.: "hero", "portfolio-01", "daniel-portrait" */
  id: string;
  /** Rótulo exibido dentro da área */
  label: string;
  /** Proporção da área reservada */
  ratio?: Ratio;
  /** Tema visual: dark (padrão, sobre azul) ou light (sobre branco) */
  tone?: "dark" | "light";
  className?: string;
};

export function ImagePlaceholder({
  id,
  label,
  ratio = "16/9",
  tone = "dark",
  className,
}: ImagePlaceholderProps) {
  return (
    <figure
      data-image-placeholder={id}
      data-tone={tone}
      className={cn("image-placeholder w-full", className)}
      style={{ aspectRatio: ratio }}
      aria-label={`Espaço reservado para imagem: ${label}`}
    >
      <div className="ph-grid" aria-hidden="true" />
      <figcaption className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        <span
          className={cn(
            "grid size-11 place-items-center rounded-full border",
            tone === "dark"
              ? "border-line-dark bg-background/40 text-mint"
              : "border-line-light bg-paper text-ink",
          )}
        >
          <ImagePlus className="size-5" strokeWidth={1.5} />
        </span>
        <span
          className={cn(
            "max-w-[26ch] text-[11px] font-semibold tracking-[0.18em] uppercase",
            tone === "dark" ? "text-foreground/70" : "text-ink-soft",
          )}
        >
          {label}
        </span>
        <span
          className={cn(
            "rounded-full border px-2.5 py-1 font-mono text-[10px] tracking-wider",
            tone === "dark"
              ? "border-line-dark text-foreground/40"
              : "border-line-light text-ink-soft/70",
          )}
        >
          {id} · {ratio}
        </span>
      </figcaption>
    </figure>
  );
}
