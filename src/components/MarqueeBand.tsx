const items = ["Sites", "Landing Pages", "Páginas de Vendas", "Aplicações", "IA"];

/** Faixa horizontal de posicionamento logo abaixo do hero */
export function MarqueeBand() {
  const sequence = [...items, ...items, ...items, ...items];

  return (
    <div
      className="relative overflow-hidden border-y border-line-dark bg-deep py-5"
      aria-label="Especialidades: sites, landing pages, páginas de vendas, aplicações e IA"
    >
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-10" aria-hidden={half === 1}>
            {sequence.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center gap-10">
                <span className="text-sm font-extrabold tracking-[0.32em] text-foreground/80 uppercase">
                  {item}
                </span>
                <span aria-hidden="true" className="size-1.5 rounded-full bg-mint" />
              </span>
            ))}
          </div>
        ))}
      </div>
      {/* Fades nas bordas */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-deep to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-deep to-transparent" />
    </div>
  );
}
