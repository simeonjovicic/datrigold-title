import Link from "next/link";
import { FIGHTERS, type Fighter } from "@/lib/data";

export function Fighters({ all = false }: { all?: boolean }) {
  const list = all ? FIGHTERS : FIGHTERS.slice(0, 4);
  return (
    <section id="fighters" className="relative py-16 lg:py-24 bg-paper-2/45">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <span className="font-display text-[11px] tracking-[0.45em] text-gold">KÄMPFER</span>
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-[0.95]">
              DER KADER.
            </h2>
          </div>
          {!all && (
            <Link href="/fighters" className="font-display text-[11px] tracking-[0.4em] text-gold hover:text-gold-deep">
              ALLE KÄMPFER →
            </Link>
          )}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {list.map((f) => (
            <FighterCard key={f.slug} fighter={f} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FighterCard({ fighter }: { fighter: Fighter }) {
  const isChamp = fighter.status === "champion";
  return (
    <Link
      href={`/fighters/${fighter.slug}`}
      className="group relative block overflow-hidden bg-paper border border-charcoal/12 hover:border-gold transition-colors"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-paper via-paper-2 to-paper-3" />
        <FighterSilhouette champion={isChamp} />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/72 via-charcoal/18 to-transparent" />

        <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
          <span className="clip-tag bg-paper/95 px-2.5 py-1 font-display text-[9px] tracking-[0.3em] text-charcoal">
            {fighter.discipline}
          </span>
          {isChamp && (
            <span className="clip-tag bg-blood px-2.5 py-1 font-display text-[9px] tracking-[0.3em] text-bone">
              CHAMP
            </span>
          )}
        </div>

        <div className="absolute inset-x-0 bottom-0 p-4">
          <div className="flex items-center gap-2 text-[10px] tracking-[0.28em] uppercase text-bone/60">
            <span>{fighter.flag}</span>
            <span>{fighter.country}</span>
          </div>
          <h3 className="mt-1.5 font-display text-xl lg:text-2xl text-bone leading-none">
            {fighter.name}
          </h3>
          <p className="mt-0.5 text-[10px] tracking-[0.25em] uppercase gold-text">
            {fighter.nickname}
          </p>
          <div className="mt-3 flex items-center justify-between text-[10px] tracking-[0.25em] uppercase">
            <span className="text-bone/45">Bilanz</span>
            <span className="font-display text-sm text-bone tracking-[0.15em]">{fighter.record}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function FighterSilhouette({ champion }: { champion: boolean }) {
  return (
    <svg viewBox="0 0 300 400" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYEnd slice" aria-hidden>
      <defs>
        <radialGradient id={`f-spot-${champion ? "c" : "n"}`} cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor={champion ? "#e3b75a" : "#c8102e"} stopOpacity="0.28" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="300" height="400" fill={`url(#f-spot-${champion ? "c" : "n"})`} />
      <g fill="#24201b" opacity="0.5">
        <ellipse cx="150" cy="110" rx="40" ry="48" />
        <path d="M70 180 Q150 130 230 180 L255 380 Q150 410 45 380 Z" />
      </g>
    </svg>
  );
}
