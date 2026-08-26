import { Eyebrow, Section, SectionTitle } from "./Section";
import problemaAsset from "../assets/problema-hamburgueria.jpg.asset.json";
import { Reveal } from "./Reveal";

export function Problem() {
  return (
    <Section className="bg-paper py-24 sm:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow tone="light">O problema</Eyebrow>
          <SectionTitle tone="light" className="mt-6">
            Seu negócio pode ser incrível.{" "}
            <span className="text-ink-soft">Mas isso precisa aparecer.</span>
          </SectionTitle>
          <Reveal delay={220}>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-ink-soft">
              Uma boa empresa merece uma presença digital que comunique seu
              valor, transmita confiança e facilite a decisão de quem está do
              outro lado.
            </p>
          </Reveal>
          <Reveal variant="line" delay={300}>
            <div aria-hidden="true" className="mt-10 h-px w-full max-w-lg bg-line-light" />
          </Reveal>
        </div>

        <Reveal delay={200}>
          <ImagePlaceholder
            id="problem-digital-presence"
            label="Imagem — presença digital"
            ratio="4/3"
            tone="light"
          />
        </Reveal>
      </div>
    </Section>
  );
}
