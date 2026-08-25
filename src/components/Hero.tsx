import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { whatsappUrl } from "@/lib/site";
import { Reveal } from "./Reveal";

/**
 * HERO VISUAL — composição gráfica abstrata (grid, linhas, UI, glow).
 * Para substituir por um asset real (16:9 ou 4:3), troque o conteúdo de
 * <HeroVisual /> por uma <img /> mantendo as classes do wrapper.
 */
function HeroVisual() {
  return (
    <div
      className="relative aspect-[4/3] w-full max-w-xl sm:aspect-[16/11]"
      role="img"
      aria-label="Composição abstrata representando tecnologia, design e criação de produtos digitais"
    >
      {/* Glow principal */}
      <div
        aria-hidden="true"
        className="glow-mint animate-pulse-glow absolute -top-10 right-0 size-72 rounded-full blur-2xl sm:size-96"
      />

      {/* Painel principal — abstrato, tipo interface */}
      <div className="animate-float-slow absolute inset-x-6 top-8 rounded-2xl border border-line-dark bg-deep-2/70 p-4 shadow-[0_40px_80px_-30px_oklch(0_0_0/60%)] backdrop-blur-sm sm:inset-x-10 sm:top-10 sm:p-5">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-foreground/25" />
          <span className="size-2 rounded-full bg-foreground/25" />
          <span className="size-2 rounded-full bg-mint" />
          <span className="ml-3 h-2 w-24 rounded-full bg-foreground/15" />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="col-span-2 space-y-2.5">
            <div className="h-2.5 w-4/5 rounded-full bg-foreground/20" />
            <div className="h-2.5 w-3/5 rounded-full bg-foreground/12" />
            <div className="h-2.5 w-2/5 rounded-full bg-mint/70" />
            <div className="mt-4 h-16 rounded-lg border border-line-dark bg-deep/60 sm:h-20">
              <div className="bg-grid-dark h-full w-full rounded-lg opacity-70" />
            </div>
          </div>
          <div className="space-y-3">
            <div className="h-10 rounded-lg border border-mint/30 bg-mint-soft" />
            <div className="h-10 rounded-lg border border-line-dark bg-deep/60" />
            <div className="h-10 rounded-lg border border-line-dark bg-deep/60" />
          </div>
        </div>
      </div>

      {/* Cartão flutuante secundário */}
      <div className="animate-float-slower absolute -bottom-2 left-0 w-44 rounded-xl border border-line-dark bg-deep/85 p-4 shadow-[0_30px_60px_-20px_oklch(0_0_0/65%)] backdrop-blur-md sm:left-2 sm:w-52">
        <div className="flex items-center gap-2">
          <Sparkles className="size-4 text-mint" strokeWidth={1.5} />
          <span className="font-mono text-[10px] tracking-[0.2em] text-foreground/60 uppercase">
            ideia → produto
          </span>
        </div>
        <div className="mt-3 space-y-2">
          <div className="h-1.5 w-full rounded-full bg-foreground/15" />
          <div className="h-1.5 w-2/3 rounded-full bg-mint/60" />
        </div>
      </div>

      {/* Chip flutuante */}
      <div className="animate-float-slow absolute top-0 right-2 rounded-full border border-mint/40 bg-deep/80 px-4 py-2 font-mono text-[10px] tracking-[0.2em] text-mint uppercase backdrop-blur-md [animation-delay:1.2s] sm:right-6">
        design + ia
      </div>

      {/* Partículas */}
      <span aria-hidden="true" className="absolute top-1/4 left-2 size-1.5 rounded-full bg-mint/80" />
      <span aria-hidden="true" className="animate-pulse-glow absolute right-1/4 bottom-1/4 size-1 rounded-full bg-foreground/50" />
      <span aria-hidden="true" className="absolute top-1/2 right-4 size-1 rounded-full bg-mint/60" />
    </div>
  );
}

export function Hero() {
  return (
    <div id="top" className="relative overflow-hidden bg-deep">
      {/* Grid de fundo */}
      <div aria-hidden="true" className="bg-grid-dark absolute inset-0" />
      {/* Vinheta para profundidade */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,transparent_40%,var(--deep)_100%)]"
      />
      {/* Linha vertical decorativa */}
      <div
        aria-hidden="true"
        className="absolute top-0 bottom-0 left-1/2 hidden w-px bg-gradient-to-b from-transparent via-line-dark to-transparent lg:block"
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-5 pt-36 pb-20 sm:px-8 sm:pt-44 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8 lg:px-10 lg:pt-48 lg:pb-28">
        <div>
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.3em] text-mint uppercase">
              <span aria-hidden="true" className="h-px w-8 bg-mint/70" />
              Web Design • IA • Experiências Digitais
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-7 text-[13.5vw] leading-[0.98] font-extrabold tracking-tight text-balance text-foreground sm:text-6xl lg:text-7xl xl:text-[5.2rem]">
              Sua ideia merece ganhar forma no{" "}
              <span className="text-gradient-mint">digital.</span>
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-pretty text-foreground/70 sm:text-lg">
              Crio sites, landing pages e aplicações digitais para empresas e
              empreendedores que querem transformar ideias em experiências
              profissionais, modernas e estratégicas.
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-mint px-8 py-4 text-sm font-extrabold tracking-wide text-primary-foreground uppercase transition-all duration-300 hover:shadow-[0_0_44px_-8px_var(--mint)]"
              >
                Quero criar meu projeto
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#projetos"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-line-dark px-8 py-4 text-sm font-bold tracking-wide text-foreground uppercase transition-colors duration-300 hover:border-mint/50 hover:text-mint"
              >
                Ver projetos
                <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Visual — no mobile fica abaixo da headline (ordem natural do grid) */}
        <Reveal delay={300} className="flex justify-center lg:justify-end">
          <HeroVisual />
        </Reveal>
      </div>
    </div>
  );
}
