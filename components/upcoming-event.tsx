import Link from "next/link";
import { EVENT } from "@/lib/data";

const card = [
  { label: "HAUPTKAMPF", a: "Kova", b: "Akande", weight: "Schwergewichtstitel" },
  { label: "CO-HAUPTKAMPF", a: "Morata", b: "Park", weight: "Federgewichtstitel" },
  { label: "TOP-KAMPF", a: "Okada", b: "Voss", weight: "Weltergewicht" },
  { label: "VORKAMPF", a: "De La Roza", b: "Benali", weight: "Bantamgewicht" },
];

export function UpcomingEvent() {
  return (
    <section id="event" className="relative py-16 lg:py-24 bg-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
          <div className="relative aspect-[3/4] gold-border overflow-hidden bg-paper-2">
            <div className="absolute inset-0 bg-gradient-to-b from-paper via-paper-2 to-paper-3" />
            <PosterArt />
            <div className="absolute inset-0 grain opacity-25" />

            <div className="absolute inset-0 flex flex-col justify-between p-6 lg:p-8">
              <div className="flex items-center justify-between">
                <span className="font-display text-[10px] tracking-[0.4em] text-gold-deep">GT XI</span>
                <span className="clip-tag bg-blood px-3 py-1 font-display text-[10px] tracking-[0.3em] text-bone">
                  WELTTITEL
                </span>
              </div>
              <div>
                <h3 className="font-display text-5xl sm:text-6xl leading-[0.85]">
                  <span className="block text-charcoal">NACHT</span>
                  <span className="block gold-text">DER TITEL</span>
                </h3>
                <p className="mt-3 text-[11px] tracking-[0.3em] uppercase text-charcoal/60">
                  {EVENT.dateLabel} · {EVENT.city}
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <span className="font-display text-[11px] tracking-[0.45em] text-gold">KOMMT ALS NÄCHSTES</span>
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl leading-[0.95]">
              <span className="block text-charcoal">FÜNF KÄMPFE.</span>
              <span className="block gold-text">EIN TITELABEND.</span>
            </h2>

            <div className="mt-8 flex flex-col">
              {card.slice(0, 3).map((f, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-[auto_1fr_auto_1fr] items-center gap-3 py-4 border-b border-charcoal/10 ${
                    i === 0 ? "border-t border-gold/40" : ""
                  }`}
                >
                  <span className={`font-display text-[10px] tracking-[0.3em] ${i === 0 ? "text-gold" : "text-charcoal/45"}`}>
                    {f.label}
                  </span>
                  <span className="font-display text-base lg:text-lg text-charcoal text-right">{f.a}</span>
                  <span className="font-display text-sm gold-text">VS</span>
                  <span className="font-display text-base lg:text-lg text-charcoal">{f.b}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/tickets"
                className="inline-flex items-center gap-3 px-6 h-12 bg-blood hover:bg-blood-deep text-bone font-display text-[12px] tracking-[0.28em]"
              >
                TICKETS KAUFEN →
              </Link>
              <Link
                href="/events"
                className="inline-flex items-center gap-3 px-6 h-12 gold-border bg-paper hover:bg-paper-2 text-charcoal font-display text-[12px] tracking-[0.32em]"
              >
                GANZE KAMPFKARTE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PosterArt() {
  return (
    <svg viewBox="0 0 600 800" className="absolute inset-0 w-full h-full opacity-90" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <radialGradient id="poster-glow" cx="50%" cy="55%" r="55%">
          <stop offset="0%" stopColor="#e3b75a" stopOpacity="0.24" />
          <stop offset="100%" stopColor="#fbf8f1" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="600" height="800" fill="url(#poster-glow)" />
      <g fill="#24201b" opacity="0.45">
        <ellipse cx="220" cy="280" rx="48" ry="58" />
        <path d="M130 360 Q220 310 310 360 L340 660 Q220 700 100 660 Z" />
        <ellipse cx="380" cy="280" rx="45" ry="55" />
        <path d="M290 360 Q380 310 470 360 L500 660 Q380 700 260 660 Z" />
      </g>
      <ellipse cx="300" cy="780" rx="280" ry="14" fill="#b63237" opacity="0.18" />
    </svg>
  );
}
