import Link from "next/link";
import { NEWS } from "@/lib/data";

export function News({ all = false }: { all?: boolean }) {
  const list = all ? NEWS : NEWS.slice(0, 3);
  return (
    <section id="news" className="relative py-16 lg:py-24 bg-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <span className="font-display text-[11px] tracking-[0.45em] text-gold">AKTUELLES</span>
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-[0.95]">
              AUS DER REDAKTION.
            </h2>
          </div>
          {!all && (
            <Link href="/news" className="font-display text-[11px] tracking-[0.4em] text-gold hover:text-gold-deep">
              ALLE MELDUNGEN →
            </Link>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {list.map((n, i) => (
            <Link
              key={i}
              href="#"
              className="group relative overflow-hidden paper-card hover:border-gold transition-colors"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-paper-2">
                <div className="absolute inset-0 bg-gradient-to-b from-paper-2 to-paper-3" />
                <NewsArt seed={i} />
                <div className="absolute inset-0 grain opacity-20" />
              </div>
              <div className="p-5 lg:p-6">
                <div className="flex items-center gap-3">
                  <span className="clip-tag bg-charcoal text-bone px-2.5 py-1 font-display text-[9px] tracking-[0.3em]">
                    {n.tag}
                  </span>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-charcoal/50">{n.date}</span>
                </div>
                <h3 className="mt-3 font-display text-xl lg:text-2xl text-charcoal leading-tight group-hover:text-gold transition-colors">
                  {n.title}
                </h3>
                <p className="mt-2 text-charcoal/65 text-sm line-clamp-2">{n.excerpt}</p>
                <div className="mt-4 inline-flex items-center gap-2 font-display text-[10px] tracking-[0.4em] text-gold">
                  LESEN
                  <span className="h-px w-8 bg-gold transition-all group-hover:w-12" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsArt({ seed }: { seed: number }) {
  return (
    <svg viewBox="0 0 400 250" className="absolute inset-0 w-full h-full opacity-70" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <radialGradient id={`n-${seed}`} cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor={seed % 2 === 0 ? "#e3b75a" : "#b63237"} stopOpacity="0.22" />
          <stop offset="100%" stopColor="#fbf8f1" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="250" fill={`url(#n-${seed})`} />
      <g fill="#24201b" opacity="0.45">
        <ellipse cx="200" cy="110" rx="48" ry="56" />
        <path d="M110 180 Q200 130 290 180 L310 270 Q200 290 90 270 Z" />
      </g>
    </svg>
  );
}
