import { ArrowUpRight } from "lucide-react";
import { Eyebrow, Section, SectionTitle } from "./Section";
import { Reveal } from "./Reveal";
import { whatsappUrl } from "@/lib/site";

const services = [
  {
    title: "Sites",
    description: "Sites profissionais para empresas e negócios.",
  },
  {
    title: "Landing Pages",
    description:
      "Páginas estratégicas para campanhas, serviços e captação de clientes.",
  },
  {
    title: "Páginas de Vendas",
    description:
      "Experiências digitais construídas para apresentar ofertas e conduzir à conversão.",
  },
  {
    title: "Aplicações Web",
    description:
      "Sistemas, plataformas e ferramentas acessíveis pelo navegador.",
  },
  {
    title: "Projetos com IA",
    description:
      "Utilização de inteligência artificial para acelerar criação, prototipação e desenvolvimento.",
  },
  {
    title: "Projetos Personalizados",
    description: "Ideias diferentes também podem ganhar forma digital.",
  },
];

function ServiceCard({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) {
  return (
    <Reveal delay={index * 70}>
      <a
        href={whatsappUrl(`Olá Daniel! Gostaria de conversar sobre: ${title}.`)}
        target="_blank"
        rel="noopener noreferrer"
        className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-5 border-t border-line-light py-8 transition-colors duration-300 first:border-t-0 hover:bg-paper-2 sm:gap-8 sm:py-10"
      >
        <span className="font-mono text-xs font-semibold tracking-widest text-ink-soft/70">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="min-w-0">
          <span className="block text-2xl font-extrabold tracking-tight text-ink transition-colors duration-300 group-hover:text-deep-3 sm:text-3xl">
            {title}
          </span>
          <span className="mt-2 block max-w-md text-sm leading-relaxed text-ink-soft">
            {description}
          </span>
        </span>
        <span className="grid size-11 shrink-0 place-items-center rounded-full border border-line-light text-ink transition-all duration-300 group-hover:border-mint group-hover:bg-mint group-hover:text-primary-foreground">
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </a>
    </Reveal>
  );
}

export function Services() {
  return (
    <Section id="servicos" className="bg-paper py-24 sm:py-32">
      {/* Composição editorial assimétrica: título fixo à esquerda, lista à direita */}
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow tone="light">Serviços</Eyebrow>
          <SectionTitle tone="light" className="mt-6">
            O que podemos <span className="text-ink-soft">criar?</span>
          </SectionTitle>
          <Reveal delay={220}>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-ink-soft">
              Do site institucional à aplicação com inteligência artificial —
              cada formato nasce da estratégia certa para o seu objetivo.
            </p>
          </Reveal>
        </div>

        <div>
          {services.map((service, i) => (
            <ServiceCard key={service.title} index={i} {...service} />
          ))}
        </div>
      </div>
    </Section>
  );
}
