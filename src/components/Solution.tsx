import { Eyebrow, Section, SectionTitle } from "./Section";
import { Reveal } from "./Reveal";
import solutionArtworkAsset from "@/assets/ideia-flux-solucao.jpg.asset.json";

const flow = ["Ideia", "Estratégia", "Design", "Tecnologia"];

export function Solution() {
  return (
    <Section className="overflow-hidden bg-deep py-24 sm:py-32">
      <div aria-hidden="true" className="glow-mint pointer-events-none absolute top-0 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full opacity-40 blur-3xl" />

      <div className="relative">
        <div className="max-w-3xl">
          <Eyebrow>A solução</Eyebrow>
          <SectionTitle className="mt-6">
            Eu transformo ideias em{" "}
            <span className="text-gradient-mint">experiências digitais.</span>
          </SectionTitle>
          <Reveal delay={220}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-foreground/70">
              Cada projeto começa entendendo o negócio, o público e o objetivo.
              Depois, transformamos estratégia em design e design em tecnologia.
            </p>
          </Reveal>
        </div>

        {/* Fluxo IDEIA → ESTRATÉGIA → DESIGN → TECNOLOGIA */}
        <Reveal delay={280}>
          <ol className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-4 sm:gap-x-4">
            {flow.map((step, i) => (
              <li key={step} className="flex items-center gap-3 sm:gap-4">
                <span
                  className={
                    i === flow.length - 1
                      ? "rounded-full bg-mint px-5 py-2.5 text-[11px] font-extrabold tracking-[0.2em] text-primary-foreground uppercase"
                      : "rounded-full border border-line-dark bg-deep-2/60 px-5 py-2.5 text-[11px] font-bold tracking-[0.2em] text-foreground/75 uppercase"
                  }
                >
                  {step}
                </span>
                {i < flow.length - 1 && (
                  <span aria-hidden="true" className="h-px w-6 bg-gradient-to-r from-mint/60 to-transparent sm:w-10" />
                )}
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={360}>
          <div className="mt-14">
            <img
              src={solutionArtworkAsset.url}
              alt="Composição visual de uma ideia se transformando em produto digital com design, código e tecnologia"
              loading="lazy"
              className="aspect-video w-full rounded-2xl border border-line-dark object-cover"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
