import { ArrowUpRight } from "lucide-react";
import { Eyebrow, Section, SectionTitle } from "./Section";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

/**
 * PORTFÓLIO — para adicionar um projeto real, edite o array abaixo:
 * troque `imageId` por uma <img /> no PortfolioCard (ou adicione um campo
 * `imageUrl` e renderize condicionalmente). Nome, categoria, descrição,
 * URL e tecnologias ficam centralizados aqui.
 */
const projects = [
  {
    name: "Nome do Projeto",
    category: "Site Institucional",
    description:
      "Experiência digital desenvolvida para apresentar uma marca de forma profissional.",
    ratio: "16/10" as const,
    url: "#",
    technologies: ["Design", "Desenvolvimento"],
  },
  {
    name: "Nome do Projeto",
    category: "Landing Page",
    description:
      "Página estratégica criada para campanha e captação de clientes.",
    ratio: "4/3" as const,
    url: "#",
    technologies: ["Design", "Copy"],
  },
  {
    name: "Nome do Projeto",
    category: "Página de Vendas",
    description:
      "Experiência construída para apresentar uma oferta e conduzir à conversão.",
    ratio: "16/10" as const,
    url: "#",
    technologies: ["UX", "Desenvolvimento"],
  },
  {
    name: "Nome do Projeto",
    category: "Aplicação Web",
    description:
      "Ferramenta digital acessível pelo navegador, pensada para o dia a dia.",
    ratio: "4/3" as const,
    url: "#",
    technologies: ["Produto", "Desenvolvimento"],
  },
  {
    name: "Nome do Projeto",
    category: "Projeto Digital",
    description:
      "Ideia transformada em experiência digital com design e tecnologia.",
    ratio: "16/10" as const,
    url: "#",
    technologies: ["Estratégia", "Design"],
  },
  {
    name: "Nome do Projeto",
    category: "Landing Page",
    description:
      "Página de alta performance para apresentar um serviço com clareza.",
    ratio: "4/3" as const,
    url: "#",
    technologies: ["Design", "IA"],
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
        {/* Área da imagem — hover zoom suave.
            Para usar imagem real: substitua o ImagePlaceholder por
            <img className="aspect-[16/10] w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-[1.04]" /> */}
        <div className="overflow-hidden rounded-2xl shadow-[0_30px_60px_-30px_oklch(0_0_0/60%)]">
          <div className="transition-transform duration-700 ease-out group-hover:scale-[1.04]">
            <ImagePlaceholder
              id={`portfolio-0${index + 1}`}
              label={`Projeto ${String(index + 1).padStart(2, "0")} — ${project.category}`}
              ratio={project.ratio}
            />
          </div>
        </div>

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

      {/* Grid editorial: razões alternadas criam ritmo visual */}
      <div className="mt-16 grid gap-x-10 gap-y-16 sm:grid-cols-2">
        {projects.map((project, i) => (
          <div key={i} className={cn(i % 2 === 1 && "sm:mt-16")}>
            <PortfolioCard project={project} index={i} />
          </div>
        ))}
      </div>
    </Section>
  );
}
