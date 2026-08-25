import { ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { whatsappUrl } from "@/lib/site";

/**
 * CTA FINAL — cinematográfico.
 * O fundo é uma composição abstrata discreta (linhas, glow, partículas).
 * Para usar uma imagem de fundo real, adicione uma <img /> absoluta atrás
 * do conteúdo (id sugerido: "final-cta-background", proporção 16:9),
 * mantendo a sobreposição escura para não competir com o texto.
 */
export function FinalCta() {
  return (
    <Section className="overflow-hidden bg-deep py-28 sm:py-40">
      {/* Fundo abstrato */}
      <div aria-hidden="true" className="bg-grid-dark absolute inset-0 opacity-60" data-image-placeholder="final-cta-background" />
      <div aria-hidden="true" className="glow-mint animate-pulse-glow absolute top-1/2 left-1/2 h-80 w-[44rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl" />
      <span aria-hidden="true" className="absolute top-1/4 left-[12%] size-1.5 rounded-full bg-mint/70" />
      <span aria-hidden="true" className="absolute right-[16%] bottom-1/4 size-1 rounded-full bg-foreground/40" />
      <span aria-hidden="true" className="animate-pulse-glow absolute top-[18%] right-[28%] size-1 rounded-full bg-mint/60" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mint/40 to-transparent" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-line-dark to-transparent" />

      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="text-[12vw] leading-[1.02] font-extrabold tracking-tight text-balance text-foreground sm:text-6xl lg:text-7xl">
            Tem uma ideia?{" "}
            <span className="text-gradient-mint">Vamos colocar ela no digital.</span>
          </h2>
        </Reveal>

        <Reveal delay={180}>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-foreground/70">
            Me conte o que você está imaginando. A próxima experiência digital
            pode começar com uma conversa.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-11">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-mint px-10 py-5 text-sm font-extrabold tracking-[0.14em] text-primary-foreground uppercase transition-all duration-300 hover:shadow-[0_0_60px_-10px_var(--mint)]"
            >
              Quero começar meu projeto
              <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <p className="mt-7 text-sm text-foreground/50">
            Sem compromisso. Primeiro entendemos a ideia.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
