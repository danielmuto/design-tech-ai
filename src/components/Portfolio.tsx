import { ArrowUpRight } from "lucide-react";
import { Eyebrow, Section, SectionTitle } from "./Section";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";
import williamImg from "@/assets/site-william.png.asset.json";
import veconImg from "@/assets/site-vecon.png.asset.json";
import feilmutoImg from "@/assets/site-feilmuto.png.asset.json";
import actoreImg from "@/assets/site-actore.png.asset.json";
import cadoreikiImg from "@/assets/site-cadoreiki.png.asset.json";
import aquibaratoImg from "@/assets/plataforma-aquibarato.png.asset.json";

/**
 * PORTFÓLIO — projetos reais. Para adicionar um novo, faça upload da imagem
 * como asset e adicione um item ao array abaixo.
 */
const projects = [
  {
    name: "William Paganelli",
    category: "Site Institucional",
    description:
      "Site institucional e autoridade digital desenvolvido para destacar a trajetória, palestras e conteúdos de alta performance corporativa.",
    image: williamImg.url,
    url: "https://williampaganelli.com.br/",
    technologies: ["Design", "Desenvolvimento", "UI/UX"],
  },
  {
    name: "Venda Conversando",
    category: "Landing Page",
    description:
      "Landing page estratégica focada em conversão e automação de vendas via atendimento humanizado e conversacional.",
    image: veconImg.url,
    url: "https://vendaconversando.com.br/",
    technologies: ["Landing Page", "Design", "Copywriting", "Desenvolvimento"],
  },
  {
    name: "Feil Muto Psicologia",
    category: "Site Institucional",
    description:
      "Experiência digital acolhedora e minimalista para atendimento psicológico, unindo autoridade profissional e agendamento simplificado.",
    image: feilmutoImg.url,
    url: "https://feilmutopsicologia.com.br/",
    technologies: ["Design", "Desenvolvimento", "UI/UX"],
  },
  {
    name: "Actore Teatro Empresarial",
    category: "Site Institucional",
    description:
      "Portal institucional focado em apresentações corporativas, treinamentos e SIPAT, estruturado para transmitir impacto, credibilidade e fácil contato.",
    image: actoreImg.url,
    url: "https://www.actore.com.br/",
    technologies: ["Design", "Desenvolvimento", "Site Institucional"],
  },
  {
    name: "Cadoreiki",
    category: "Terapias Integrativas",
    description:
      "Site sutil e envolvente focado em terapias integrativas e Reiki, criado para conectar clientes ao autocuidado com navegação intuitiva.",
    image: cadoreikiImg.url,
    url: "https://cadoreiki.com/",
    technologies: ["Design", "Desenvolvimento", "UI/UX"],
  },
  {
    name: "AquiBarato",
    category: "Plataforma Web",
    description:
      "Vitrine digital e ecossistema de ofertas locais criado para conectar consumidores a promoções da sua região com navegação dinâmica.",
    image: aquibaratoImg.url,
    url: "https://aquibarato.com.br/",
    technologies: ["Plataforma", "Desenvolvimento", "UI/UX", "Sistema"],
  },
];

function PortfolioCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <Reveal delay={(index % 2) * 120}>
      <article className="group">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden rounded-2xl border border-line-dark shadow-[0_30px_60px_-30px_oklch(0_0_0/60%)]"
        >
          <img
            src={project.image}
            alt={`Prévia do projeto ${project.name}`}
            loading="lazy"
            className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </a>

        <div className="mt-6 flex items-start justify-between gap-6">
          <div className="min-w-0">
            <p className="text-[11px] font-extrabold tracking-[0.26em] text-mint uppercase">
              {project.category}
            </p>
            <h3 className="mt-2 text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
              {project.name}
            </h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-foreground/60">
              {project.description}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2" aria-label="Tecnologias">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-line-dark px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-foreground/50 uppercase"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "mt-1 inline-flex shrink-0 items-center gap-1.5 text-[11px] font-extrabold tracking-[0.2em] text-foreground/70 uppercase",
              "transition-colors duration-300 hover:text-mint",
            )}
          >
            Ver projeto
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </article>
    </Reveal>
  );
}

export function Portfolio() {
  return (
    <Section id="projetos" className="bg-deep py-24 sm:py-32">
      <div className="max-w-3xl">
        <Eyebrow>Portfólio</Eyebrow>
        <SectionTitle className="mt-6">
          Algumas ideias que já <span className="text-gradient-mint">ganharam vida.</span>
        </SectionTitle>
        <Reveal delay={220}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/70">
            Uma seleção de projetos desenvolvidos para diferentes negócios,
            objetivos e experiências.
          </p>
        </Reveal>
      </div>

      {/* Grid editorial */}
      <div className="mt-16 grid gap-x-10 gap-y-16 sm:grid-cols-2">
        {projects.map((project, i) => (
          <div key={project.name} className={cn(i % 2 === 1 && "sm:mt-16")}>
            <PortfolioCard project={project} index={i} />
          </div>
        ))}
      </div>
    </Section>
  );
}
