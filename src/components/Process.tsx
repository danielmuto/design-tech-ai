import { Eyebrow, Section, SectionTitle } from "./Section";
import processoAsset from "../assets/processo-criativo-novo.jpg.asset.json";
import { Reveal } from "./Reveal";

const steps = [
  { title: "Conversa", description: "Entendemos sua ideia, negócio e objetivo." },
  { title: "Estratégia", description: "Definimos estrutura, conteúdo e experiência." },
  { title: "Design", description: "Criamos a identidade visual e interface." },
  { title: "Desenvolvimento", description: "Transformamos o design em uma experiência funcional." },
  { title: "Publicação", description: "Colocamos o projeto no ar." },
];

function ProcessStep({
  index,
  title,
  description,
  isLast,
}: {
  index: number;
  title: string;
  description: string;
  isLast: boolean;
}) {
  return (
    <Reveal delay={index * 90}>
      <li className="relative grid grid-cols-[auto_minmax(0,1fr)] gap-5 pb-10 sm:gap-7">
        {/* Linha da timeline */}
        {!isLast && (
          <span
            aria-hidden="true"
            className="absolute top-14 left-6 h-[calc(100%-3.5rem)] w-px bg-line-light"
          />
        )}
        <span className="grid size-12 shrink-0 place-items-center rounded-full border border-line-light bg-paper font-mono text-xs font-bold text-ink">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="pt-1.5">
          <h3 className="text-lg font-extrabold tracking-[0.14em] text-ink uppercase">
            {title}
          </h3>
          <p className="mt-1.5 max-w-md text-sm leading-relaxed text-ink-soft">
            {description}
          </p>
        </div>
      </li>
    </Reveal>
  );
}

export function Process() {
  return (
    <Section id="processo" className="bg-paper-2 py-24 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Eyebrow tone="light">Processo</Eyebrow>
          <SectionTitle tone="light" className="mt-6">
            Simples para você.{" "}
            <span className="text-ink-soft">Estratégico por trás.</span>
          </SectionTitle>

          <ol className="mt-12">
            {steps.map((step, i) => (
              <ProcessStep
                key={step.title}
                index={i}
                title={step.title}
                description={step.description}
                isLast={i === steps.length - 1}
              />
            ))}
          </ol>
        </div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal delay={200}>
            <img
              src={processoAsset.url}
              alt="Processo de criação: conversa, estratégia, design, desenvolvimento e publicação"
              className="aspect-video w-full rounded-2xl border border-line-light object-cover"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-soft">
              Do primeiro papo à publicação: um caminho claro, com você
              acompanhando cada decisão importante.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
