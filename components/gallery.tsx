import Link from "next/link";

type Tile = {
  span: string;
  type: "photo" | "video";
  label: string;
  duration?: string;
  variant: "blood" | "gold" | "smoke" | "spotlight" | "ring" | "crowd";
};

const tiles: Tile[] = [
  { span: "lg:col-span-2 lg:row-span-2", type: "video", label: "GT X · Offizieller Trailer", duration: "1:42", variant: "spotlight" },
  { span: "", type: "photo", label: "Einlauf · Kova", variant: "gold" },
  { span: "", type: "photo", label: "Runde 9 · KO", variant: "blood" },
  { span: "lg:col-span-2", type: "video", label: "Hinter dem Gürtel", duration: "8:11", variant: "smoke" },
  { span: "", type: "photo", label: "Crowd · Berlin", variant: "crowd" },
  { span: "", type: "photo", label: "Der Ring", variant: "ring" },
  { span: "lg:col-span-2", type: "video", label: "Morata · Vor dem Kampf", duration: "3:24", variant: "gold" },
  { span: "", type: "photo", label: "Aftermath", variant: "blood" },
];

export function Gallery({ hideHeading = false }: { hideHeading?: boolean }) {
  return (
    <section id="gallery" className="relative py-16 lg:py-24 bg-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {!hideHeading && (
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-gold" />
                <span className="font-display text-[11px] tracking-[0.45em] text-gold">GALERIE · VIDEO</span>
              </div>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-[0.95]">
                <span className="block">KAMPFNÄCHTE,</span>
                <span className="block gold-text">KLAR DOKUMENTIERT.</span>
              </h2>
            </div>
            <Link href="/gallery" className="font-display text-[11px] tracking-[0.4em] text-gold hover:text-gold-deep">
              GANZES ARCHIV →
            </Link>
          </div>
        )}

        <div className={`grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] lg:auto-rows-[220px] gap-3 lg:gap-4 ${hideHeading ? "" : "mt-12"}`}>
          {tiles.map((t, i) => (
            <Tile key={i} tile={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Tile({ tile }: { tile: Tile }) {
  const grad = {
    blood: "from-blood/20 via-paper-2 to-paper-3",
    gold: "from-gold/25 via-paper-2 to-paper-3",
    smoke: "from-charcoal/15 via-paper-2 to-paper-3",
    spotlight: "from-gold/20 via-paper-2 to-paper-3",
    ring: "from-blood/15 via-paper-2 to-paper-3",
    crowd: "from-charcoal/12 via-paper-2 to-paper-3",
  }[tile.variant];

  return (
    <Link
      href="#"
      className={`group relative overflow-hidden border border-charcoal/15 hover:border-gold transition-all ${tile.span}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${grad}`} />
      <TileArt variant={tile.variant} />
      <div className="absolute inset-0 grain opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/76 via-transparent to-transparent" />

      {tile.type === "video" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-16 h-16 rounded-full bg-paper/95 flex items-center justify-center border border-gold/35 transition-colors hover:bg-paper-2">
            <span className="ml-1 text-gold text-2xl">▶</span>
          </div>
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 p-4 lg:p-5 flex items-end justify-between">
        <div>
          <div className="font-display text-[10px] tracking-[0.4em] text-gold-bright">
            {tile.type === "video" ? "VIDEO" : "FOTO"}
          </div>
          <div className="mt-1 font-display text-bone text-sm lg:text-base tracking-wide">
            {tile.label}
          </div>
        </div>
        {tile.duration && (
          <span className="font-mono text-[10px] tracking-widest text-bone/80 px-2 py-0.5 bg-ink/70 border border-bone/10">
            {tile.duration}
          </span>
        )}
      </div>
    </Link>
  );
}

function TileArt({ variant }: { variant: Tile["variant"] }) {
  if (variant === "ring") {
    return (
      <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full opacity-50" aria-hidden>
        <g stroke="#b63237" strokeOpacity="0.28" strokeWidth="2" fill="none">
          <path d="M50 250 L350 250 L300 50 L100 50 Z" />
          <path d="M50 200 L350 200" />
          <path d="M50 150 L350 150" />
          <path d="M50 100 L350 100" />
        </g>
        <ellipse cx="200" cy="270" rx="180" ry="10" fill="#c9963d" opacity="0.20" />
      </svg>
    );
  }
  if (variant === "crowd") {
    return (
      <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full opacity-55" aria-hidden>
        <g fill="#24201b" opacity="0.55">
          {Array.from({ length: 60 }).map((_, i) => {
            const x = (i % 15) * 28 + 10;
            const y = 180 + Math.floor(i / 15) * 30;
            return <circle key={i} cx={x} cy={y} r="8" />;
          })}
        </g>
        <ellipse cx="200" cy="80" rx="120" ry="40" fill="#c9963d" opacity="0.18" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full opacity-55" aria-hidden>
      <g fill="#24201b" opacity="0.55">
        <ellipse cx="160" cy="140" rx="40" ry="48" />
        <path d="M90 200 Q160 160 230 200 L250 320 Q160 350 70 320 Z" />
        <ellipse cx="260" cy="140" rx="40" ry="48" />
        <path d="M190 200 Q260 160 330 200 L350 320 Q260 350 170 320 Z" />
      </g>
    </svg>
  );
}
