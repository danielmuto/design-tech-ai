import { ArrowUpRight, Instagram, Linkedin } from "lucide-react";
import { navLinks, site, whatsappUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line-dark bg-deep">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Marca */}
          <div>
            <a href="#top" className="inline-flex flex-col leading-none" aria-label="Voltar ao topo">
              <span className="text-xl font-extrabold tracking-tight text-foreground">
                {site.name}
              </span>
              <span className="mt-1.5 text-[10px] font-bold tracking-[0.42em] text-mint uppercase">
                {site.role}
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-foreground/60">
              {site.tagline}
            </p>
          </div>

          {/* Navegação */}
          <nav aria-label="Links do rodapé">
            <p className="text-[11px] font-extrabold tracking-[0.28em] text-foreground/40 uppercase">
              Navegação
            </p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-semibold text-foreground/70 transition-colors duration-300 hover:text-mint"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-sm font-semibold text-foreground/70 transition-colors duration-300 hover:text-mint"
                >
                  Contato
                  <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            </ul>
          </nav>

          {/* Redes sociais */}
          <div>
            <p className="text-[11px] font-extrabold tracking-[0.28em] text-foreground/40 uppercase">
              Redes
            </p>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 text-sm font-semibold text-foreground/70 transition-colors duration-300 hover:text-mint"
                >
                  <Instagram className="size-4" strokeWidth={1.75} />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={site.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 text-sm font-semibold text-foreground/70 transition-colors duration-300 hover:text-mint"
                >
                  <Linkedin className="size-4" strokeWidth={1.75} />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line-dark pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-foreground/45">
            © 2026 {site.name} {site.role}
          </p>
          <p className="font-mono text-[10px] tracking-[0.24em] text-foreground/35 uppercase">
            ideia → design → tecnologia → experiência
          </p>
        </div>
      </div>
    </footer>
  );
}
