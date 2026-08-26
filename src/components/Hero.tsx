import { ArrowDown, ArrowUpRight } from "lucide-react";
import { whatsappUrl } from "@/lib/site";
import { Reveal } from "./Reveal";
import heroImage from "@/assets/hero-daniel.png.asset.json";

export function Hero() {
  return (
    <div id="top" className="relative overflow-hidden bg-deep">
      {/* Imagem de fundo */}
      <img
        src={heroImage.url}
        alt="Daniel Muto, web designer, com composição visual de tecnologia e inteligência artificial"
        className="absolute inset-0 size-full object-cover object-[75%_center]"
        fetchPriority="high"
      />

      {/* Camadas de leitura sobre a imagem */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,var(--deep)_0%,oklch(0.212_0.042_247.8/92%)_38%,oklch(0.212_0.042_247.8/55%)_65%,oklch(0.212_0.042_247.8/25%)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_bottom,oklch(0.212_0.042_247.8/70%)_0%,transparent_25%,transparent_60%,var(--deep)_100%)]"
      />
      <div aria-hidden="true" className="bg-grid-dark absolute inset-0 opacity-40" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pt-36 pb-24 sm:px-8 sm:pt-44 lg:px-10 lg:pt-52 lg:pb-36">
        <div className="max-w-3xl">
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
            <p className="mt-7 max-w-xl text-base leading-relaxed text-pretty text-foreground/75 sm:text-lg">
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
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-line-dark bg-deep/40 px-8 py-4 text-sm font-bold tracking-wide text-foreground uppercase backdrop-blur-sm transition-colors duration-300 hover:border-mint/50 hover:text-mint"
              >
                Ver projetos
                <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
