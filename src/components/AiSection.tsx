import { Eyebrow, Section, SectionTitle } from "./Section";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { Reveal } from "./Reveal";

const flow = ["Ideia", "IA", "Design", "Produto"];

export function AiSection() {
  return (
    <Section className="overflow-hidden bg-deep py-24 sm:py-32">
      {/* Atmosfera futurista discreta */}
      <div aria-hidden="true" className="bg-grid-dark pointer-events-none absolute inset-0 opacity-60" />
      <div aria-hidden="true" className="glow-mint animate-pulse-glow pointer-events-none absolute -top-24 right-0 h-96 w-[36rem] rounded-full opacity-50 blur-3xl" />

      <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <Eyebrow>Inteligência artificial</Eyebrow>
          <SectionTitle className="mt-6">
            A tecnologia mudou.{" "}
            <span className="text-gradient-mint">A forma de criar também.</span>
          </SectionTitle>
          <Reveal delay={220}>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-foreground/70">
              Utilizo inteligência artificial como parte do processo criativo e
              de desenvolvimento para explorar ideias, acelerar protótipos e
              construir soluções digitais com mais agilidade.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <ol className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-3">
              {flow.map((step, i) => (
                <li key={step} className="flex items-center gap-3">
                  <span
                    className={
                      step === "IA"
                        ? "rounded-full bg-mint px-5 py-2.5 text-[11px] font-extrabold tracking-[0.2em] text-primary-foreground uppercase shadow-[0_0_28px_-6px_var(--mint)]"
                        : "rounded-full border border-line-dark bg-deep-2/60 px-5 py-2.5 text-[11px] font-bold tracking-[0.2em] text-foreground/75 uppercase"
                    }
                  >
                    {step}
                  </span>
                  {i < flow.length - 1 && (
                    <span aria-hidden="true" className="h-px w-5 bg-gradient-to-r from-mint/60 to-transparent" />
                  )}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <Reveal delay={260}>
          <div className="relative">
            <div aria-hidden="true" className="glow-mint absolute -inset-8 rounded-full opacity-40 blur-2xl" />
            <ImagePlaceholder
              id="ai-digital-creation"
              label="Composição — IA, interfaces, código e design"
              ratio="16/9"
              className="relative"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
