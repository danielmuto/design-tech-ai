import { Quote } from "lucide-react";
import { Eyebrow, Section, SectionTitle } from "./Section";
import { Reveal } from "./Reveal";

/**
 * PROVA SOCIAL — placeholders para depoimentos reais.
 * Quando houver depoimentos, substitua o conteúdo de cada card por:
 * texto do cliente, nome, empresa e (opcional) foto.
 */
const slots = [
  { id: "testimonial-01", label: "Depoimento — Cliente 01" },
  { id: "testimonial-02", label: "Depoimento — Cliente 02" },
  { id: "testimonial-03", label: "Depoimento — Cliente 03" },
];

export function Testimonials() {
  return (
    <Section className="bg-paper py-24 sm:py-32">
      <div className="max-w-3xl">
        <Eyebrow tone="light">Prova social</Eyebrow>
        <SectionTitle tone="light" className="mt-6">
          A experiência também importa{" "}
          <span className="text-ink-soft">para quem está do outro lado.</span>
        </SectionTitle>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {slots.map((slot, i) => (
          <Reveal key={slot.id} delay={i * 100}>
            <figure
              data-testimonial-placeholder={slot.id}
              className="flex h-full min-h-56 flex-col justify-between gap-8 rounded-2xl border border-dashed border-line-light bg-paper-2/60 p-7"
            >
              <Quote className="size-6 text-ink/30" strokeWidth={1.5} aria-hidden="true" />
              <figcaption className="space-y-2">
                <p className="text-[11px] font-bold tracking-[0.2em] text-ink-soft uppercase">
                  {slot.label}
                </p>
                <p className="font-mono text-[10px] tracking-wider text-ink-soft/60">
                  {slot.id} · espaço reservado
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
