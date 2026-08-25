import { ArrowUpRight } from "lucide-react";
import { Eyebrow, Section, SectionTitle } from "./Section";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { Reveal } from "./Reveal";
import { whatsappUrl } from "@/lib/site";

export function About() {
  return (
    <Section className="bg-paper py-24 sm:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        <div>
          <Eyebrow tone="light">Sobre</Eyebrow>
          <SectionTitle tone="light" className="mt-6">
            Eu sou o <span className="text-ink-soft">Daniel.</span>
          </SectionTitle>
          <Reveal delay={200}>
            <p className="mt-7 max-w-xl text-xl leading-relaxed font-medium text-ink">
              Web Designer, criador e apaixonado por transformar ideias em
              experiências digitais.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
              Meu trabalho une design, tecnologia e estratégia para criar
              soluções que façam sentido para o negócio e para as pessoas que
              vão utilizá-las.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-9 inline-flex items-center gap-2 text-[12px] font-extrabold tracking-[0.22em] text-ink uppercase transition-colors duration-300 hover:text-deep-3"
            >
              <span className="border-b border-ink/30 pb-1 transition-colors duration-300 group-hover:border-mint">
                Vamos conversar
              </span>
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        {/* FOTO DO DANIEL — substituir pela fotografia real (3:4, vertical):
            <img src="/images/daniel.webp" alt="Daniel Muto, Web Designer"
                 className="aspect-[3/4] w-full rounded-2xl object-cover" /> */}
        <Reveal delay={240}>
          <ImagePlaceholder
            id="daniel-portrait"
            label="Foto profissional do Daniel"
            ratio="3/4"
            tone="light"
            className="mx-auto max-w-sm shadow-[0_40px_80px_-40px_oklch(0.212_0.042_247.8/35%)]"
          />
        </Reveal>
      </div>
    </Section>
  );
}
