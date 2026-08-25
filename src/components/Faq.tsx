import { useState } from "react";
import { Plus } from "lucide-react";
import { Eyebrow, Section, SectionTitle } from "./Section";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";
import { whatsappUrl } from "@/lib/site";

const faqs = [
  {
    question: "Você trabalha somente com sites?",
    answer:
      "Não. Além de sites institucionais, desenvolvo landing pages, páginas de vendas, aplicações web e projetos personalizados. Se a sua ideia vive no navegador, a gente conversa.",
  },
  {
    question: "Você desenvolve aplicativos?",
    answer:
      "Desenvolvo aplicações web — sistemas, plataformas e ferramentas que funcionam direto no navegador, em qualquer dispositivo. Para muitos projetos, é o caminho mais rápido e estratégico.",
  },
  {
    question: "Você utiliza inteligência artificial?",
    answer:
      "Sim. A IA faz parte do meu processo criativo e de desenvolvimento: ela ajuda a explorar ideias, acelerar protótipos e entregar soluções com mais agilidade — sempre com direção de design e estratégia humanas.",
  },
  {
    question: "Quanto custa um projeto?",
    answer:
      "Cada projeto é único: o investimento depende do escopo, dos objetivos e do nível de profundidade. Na primeira conversa eu entendo a sua ideia e apresento uma proposta clara, sem surpresas.",
  },
  {
    question: "Como começamos?",
    answer:
      "Com uma conversa. Você me conta a ideia pelo WhatsApp, eu entendo o momento do seu negócio e desenhamos juntos o melhor caminho. Sem compromisso.",
  },
];

function FaqItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-line-dark">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="group flex w-full items-center justify-between gap-6 py-7 text-left"
      >
        <span className="text-lg font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-mint sm:text-xl">
          {question}
        </span>
        <span
          className={cn(
            "grid size-10 shrink-0 place-items-center rounded-full border border-line-dark text-foreground transition-all duration-300",
            open && "rotate-45 border-mint/50 bg-mint text-primary-foreground",
          )}
        >
          <Plus className="size-4" />
        </span>
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-500 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-7 text-base leading-relaxed text-foreground/65">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section className="bg-deep py-24 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>FAQ</Eyebrow>
          <SectionTitle className="mt-6">
            Perguntas <span className="text-foreground/50">frequentes.</span>
          </SectionTitle>
          <Reveal delay={220}>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-foreground/60">
              Não encontrou a sua dúvida?{" "}
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-mint underline-offset-4 hover:underline"
              >
                Chama no WhatsApp.
              </a>
            </p>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="border-t border-line-dark">
            {faqs.map((faq, i) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
