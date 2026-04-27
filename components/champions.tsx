import { CHAMPIONS } from "@/lib/data";

export function Champions({ hideHeading = false }: { hideHeading?: boolean }) {
  return (
    <section id="champions" className="relative py-16 lg:py-24 overflow-hidden bg-paper-2 text-charcoal">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(201,150,61,0.16)_0%,transparent_58%)]" />
      <div className="absolute inset-0 grain opacity-20" />
      <div className="absolute inset-x-0 top-0 h-px gold-line opacity-40" />
      <div className="absolute inset-x-0 bottom-0 h-px gold-line opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {!hideHeading && (
          <div className="text-center mx-auto max-w-3xl">
            <div className="flex items-center gap-3 justify-center">
              <span className="h-px w-10 bg-gold" />
              <span className="font-display text-[11px] tracking-[0.45em] text-gold">CHAMPION-HALLE</span>
              <span className="h-px w-10 bg-gold" />
            </div>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-7xl leading-[0.95] text-charcoal">
              <span className="block">DER GÜRTEL.</span>
              <span className="block gold-text">DAS VERMÄCHTNIS.</span>
            </h2>
            <p className="mt-5 text-charcoal/60">
              Champions, die ihren Titel verteidigen müssen. Jeder Gürtel wird im Ring verdient.
            </p>
          </div>
        )}

        <div className={`mx-auto max-w-4xl ${hideHeading ? "" : "mt-16"}`}>
          <Belt />
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {CHAMPIONS.map((c, i) => (
            <ChampCard key={i} champion={c} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="font-display text-sm tracking-[0.45em] text-gold-deep">
            DER TITEL WIRD VERDIENT · NICHT VERGEBEN
          </p>
        </div>
      </div>
    </section>
  );
}

function Belt() {
  return (
    <div className="relative">
      <div className="relative h-32 lg:h-40 belt-shine border-y-2 border-gold/30">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex items-center justify-center w-44 h-44 lg:w-52 lg:h-52 rounded-full bg-charcoal border border-gold/35">
            <div className="absolute inset-2 rounded-full border border-gold/40" />
            <div className="absolute inset-4 rounded-full border border-gold/20" />
            <div className="text-center">
              <div className="font-display text-[10px] tracking-[0.4em] text-gold">WELT</div>
              <div className="font-display text-3xl lg:text-4xl gold-text leading-none mt-1">GT</div>
              <div className="font-display text-[10px] tracking-[0.4em] text-gold mt-1">CHAMPION</div>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-6 lg:left-12 w-16 h-16 rounded-full bg-charcoal ring-1 ring-gold/35 flex items-center justify-center">
          <span className="font-display text-gold text-xl">★</span>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-6 lg:right-12 w-16 h-16 rounded-full bg-charcoal ring-1 ring-gold/35 flex items-center justify-center">
          <span className="font-display text-gold text-xl">★</span>
        </div>
      </div>
    </div>
  );
}

function ChampCard({
  champion,
  index,
}: {
  champion: { name: string; title: string; since: string; defended: number };
  index: number;
}) {
  return (
    <div className="relative group gold-border bg-paper p-8 transition-colors duration-300 hover:border-gold">
      <div className="absolute top-0 right-0 font-display text-[6rem] leading-none text-gold/[0.08] select-none pr-3">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="relative">
        <div className="font-display text-[10px] tracking-[0.4em] text-gold">AKTUELLER CHAMPION</div>
        <h3 className="mt-3 font-display text-3xl lg:text-4xl text-charcoal leading-tight">{champion.name}</h3>
        <p className="mt-2 gold-text font-display text-sm tracking-[0.2em]">
          {champion.title.toUpperCase()}
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 border-t border-gold/20 pt-6">
          <div>
            <div className="text-[10px] tracking-[0.35em] uppercase text-charcoal/45">Seit</div>
            <div className="mt-1 font-display text-2xl gold-text">{champion.since}</div>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.35em] uppercase text-charcoal/45">Verteidigt</div>
            <div className="mt-1 font-display text-2xl gold-text">{champion.defended}×</div>
          </div>
        </div>
      </div>
    </div>
  );
}
