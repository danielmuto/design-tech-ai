import { ArrowUpRight } from "lucide-react";
import { Eyebrow, Section, SectionTitle } from "./Section";
import featuredProjectAsset from "@/assets/featured-project-burger-house.png.asset.json";
import { Reveal } from "./Reveal";


const disciplines = ["Design", "UX", "Desenvolvimento"];

export function FeaturedProject() {
  return (
    <Section className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <div className="flex justify-center">
          <Eyebrow tone="light">Projeto em destaque</Eyebrow>
        </div>
        <SectionTitle tone="light" className="mt-6">
          Um projeto por vez.{" "}
          <span className="text-ink-soft">Uma experiência pensada nos detalhes.</span>
        </SectionTitle>
      </div>

      <Reveal delay={200}>
        <div className="mt-14">
          <img
            src={featuredProjectAsset.url}
            alt="Mockup responsivo do projeto Burger House em notebook e smartphone"
            className="aspect-video w-full rounded-2xl border border-line-light object-cover shadow-[0_50px_100px_-40px_oklch(0.212_0.042_247.8/35%)]"
            loading="lazy"
          />
        </div>
      </Reveal>


      <Reveal delay={300}>
        <div className="mt-10 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <ul className="flex flex-wrap justify-center gap-3" aria-label="Disciplinas do projeto">
            {disciplines.map((item) => (
              <li
                key={item}
                className="rounded-full border border-line-light px-5 py-2 text-[11px] font-extrabold tracking-[0.24em] text-ink uppercase"
              >
                {item}
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full bg-deep px-7 py-3.5 text-[12px] font-extrabold tracking-[0.2em] text-foreground uppercase transition-all duration-300 hover:bg-deep-3"
          >
            Ver case
            <ArrowUpRight className="size-4 text-mint transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
