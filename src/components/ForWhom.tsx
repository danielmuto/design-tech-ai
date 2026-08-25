import { ArrowRight } from "lucide-react";
import { Eyebrow, Section, SectionTitle } from "./Section";
import { Reveal } from "./Reveal";
import { whatsappUrl } from "@/lib/site";

const statements = [
  "Você tem uma empresa e precisa parecer tão profissional quanto realmente é.",
  "Você está começando um negócio e precisa de uma presença digital forte.",
  "Você vende um produto ou serviço e precisa de uma landing page.",
  "Você tem uma ideia de aplicativo, plataforma ou sistema.",
  "Você já possui um site, mas sente que ele não representa mais seu negócio.",
];

export function ForWhom() {
  return (
    <Section className="bg-deep py-24 sm:py-32">
      <div className="max-w-4xl">
        <Eyebrow>Para quem é</Eyebrow>
        <SectionTitle className="mt-6">
          Talvez esse projeto seja <span className="text-gradient-mint">para você.</span>
        </SectionTitle>
      </div>

      <ul className="mt-14">
        {statements.map((statement, i) => (
          <Reveal key={i} delay={i * 60}>
            <li>
              <a
                href={whatsappUrl(`Olá Daniel! Me identifiquei com o site: "${statement}"`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-baseline gap-5 border-t border-line-dark py-7 last:border-b sm:gap-8 sm:py-9"
              >
                <span className="font-mono text-xs font-semibold tracking-widest text-mint/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1 text-lg leading-snug font-bold text-foreground/85 text-pretty transition-colors duration-300 group-hover:text-foreground sm:text-2xl">
                  {statement}
                </span>
                <ArrowRight className="size-5 shrink-0 self-center text-foreground/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-mint" />
              </a>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
