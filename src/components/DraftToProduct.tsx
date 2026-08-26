import { Eyebrow, Section, SectionTitle } from "./Section";
import processoAsset from "../assets/processo-criativo.png.asset.json";
import { Reveal } from "./Reveal";

const stages = [
  { number: "01", label: "Ideia" },
  { number: "02", label: "Wireframe" },
  { number: "03", label: "Interface" },
  { number: "04", label: "Produto" },
];

/** Mini-composições CSS representando cada etapa da evolução */
function StageVisual({ index }: { index: number }) {
  if (index === 0) {
    // Ideia — ponto de luz
    return (
      <div className="grid h-full place-items-center">
        <span className="glow-mint size-16 rounded-full" />
        <span className="absolute size-2 rounded-full bg-mint" />
      </div>
    );
  }
  if (index === 1) {
    // Wireframe — blocos tracejados
    return (
      <div className="flex h-full flex-col gap-2 p-5">
        <div className="h-2.5 w-1/2 rounded-full border border-dashed border-line-dark" />
        <div className="flex-1 rounded-md border border-dashed border-line-dark" />
        <div className="flex gap-2">
          <div className="h-6 flex-1 rounded-md border border-dashed border-line-dark" />
          <div className="h-6 flex-1 rounded-md border border-dashed border-mint/50" />
        </div>
      </div>
    );
  }
  if (index === 2) {
    // Interface — blocos com cor
    return (
      <div className="flex h-full flex-col gap-2 p-5">
        <div className="h-2.5 w-1/2 rounded-full bg-foreground/30" />
        <div className="bg-grid-dark flex-1 rounded-md border border-line-dark bg-deep-2/60" />
        <div className="flex gap-2">
          <div className="h-6 flex-1 rounded-md bg-foreground/15" />
          <div className="h-6 flex-1 rounded-md bg-mint/80" />
        </div>
      </div>
    );
  }
  // Produto — interface polida com brilho
  return (
    <div className="flex h-full flex-col gap-2 p-5">
      <div className="flex items-center gap-1.5">
        <span className="size-1.5 rounded-full bg-foreground/25" />
        <span className="size-1.5 rounded-full bg-foreground/25" />
        <span className="size-1.5 rounded-full bg-mint" />
      </div>
      <div className="relative flex-1 overflow-hidden rounded-md border border-mint/30 bg-deep-2">
        <div className="bg-grid-dark absolute inset-0" />
        <div className="glow-mint absolute -top-6 -right-6 size-24 rounded-full blur-xl" />
        <div className="absolute bottom-3 left-3 h-2 w-1/2 rounded-full bg-mint/80" />
      </div>
      <div className="h-6 rounded-md bg-mint" />
    </div>
  );
}

/** Seção visual "Do rascunho ao produto" */
export function DraftToProduct() {
  return (
    <Section className="overflow-hidden bg-deep-2/40 py-24 sm:py-32">
      <div aria-hidden="true" className="bg-grid-dark pointer-events-none absolute inset-0 opacity-50" />

      <div className="relative">
        <div className="max-w-3xl">
          <Eyebrow>Do rascunho ao produto</Eyebrow>
          <SectionTitle className="mt-6">
            A evolução de uma ideia, <span className="text-foreground/50">etapa por etapa.</span>
          </SectionTitle>
        </div>

        {/* Composição horizontal das 4 etapas */}
        <div className="relative mt-14">
          <Reveal variant="line" className="absolute top-1/2 right-0 left-0 hidden lg:block">
            <div aria-hidden="true" className="h-px w-full bg-gradient-to-r from-transparent via-mint/40 to-transparent" />
          </Reveal>

          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stages.map((stage, i) => (
              <Reveal key={stage.number} delay={i * 120}>
                <li className="group relative">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line-dark bg-deep transition-colors duration-500 group-hover:border-mint/40">
                    <StageVisual index={i} />
                  </div>
                  <div className="mt-4 flex items-baseline gap-3">
                    <span className="font-mono text-[11px] font-semibold tracking-widest text-mint">
                      {stage.number}
                    </span>
                    <span className="text-sm font-extrabold tracking-[0.22em] text-foreground uppercase">
                      {stage.label}
                    </span>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={200}>
          <div className="mt-14">
            <img
              src={processoAsset.url}
              alt="Processo criativo: da ideia e wireframe ao protótipo e projeto final"
              className="aspect-video w-full rounded-2xl border border-line-dark object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
