import Link from "next/link";

const stats = [
  { kpi: "11", label: "Titel-Events" },
  { kpi: "47", label: "Titelkämpfe" },
  { kpi: "9", label: "Champions" },
  { kpi: "1,2M", label: "Live-Zuschauer" },
];

export function Legacy({ hideHeading = false }: { hideHeading?: boolean }) {
  return (
    <section id="legacy" className="relative py-16 lg:py-24 overflow-hidden bg-paper">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(184,138,44,0.06)_0%,transparent_70%)]" />
      <div className="absolute inset-0 grain opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          {!hideHeading && (
            <>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-gold" />
                <span className="font-display text-[11px] tracking-[0.45em] text-gold">ÜBER GOLD TITLE</span>
              </div>
              <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-7xl leading-[0.95] text-charcoal">
                <span className="block">EINE LIGA</span>
                <span className="block gold-text">FÜR KÄMPFER</span>
                <span className="block text-stroke-charcoal text-3xl sm:text-4xl lg:text-5xl mt-2 tracking-[0.04em]">
                  MIT KLAREM SYSTEM.
                </span>
              </h2>
            </>
          )}

          <div className={`space-y-5 text-charcoal/75 leading-relaxed ${hideHeading ? "" : "mt-8"}`}>
            <p>
              <span className="text-charcoal font-semibold">Gold Title</span> wurde 2026 gegründet, um
              echte Titelkämpfe klarer, fairer und professioneller zu veranstalten.
            </p>
            <p>
              Eine Division, ein Gürtel, regelmäßige Verteidigungen. Der Titel wird{" "}
              <span className="gold-text font-semibold">verdient, nicht vergeben</span>.
            </p>
            <p className="font-display text-lg tracking-[0.18em] text-charcoal">
              KLARE KÄMPFE · STARKE KAMPFKARTE · WENIGER SHOW · MEHR SPORT
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-3 px-7 h-14 bg-charcoal text-bone hover:bg-gold font-display text-sm tracking-[0.32em] transition-colors"
            >
              MANIFEST LESEN
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/contact/get-in-touch"
              className="inline-flex items-center gap-3 px-7 py-4 text-gold hover:text-gold-deep font-display text-sm tracking-[0.32em] transition-colors"
            >
              TEAM KONTAKTIEREN
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] gold-border bg-paper-2 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-paper via-paper-2 to-paper-3" />
            <LegacyArt />
            <div className="grain absolute inset-0 opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/76 via-charcoal/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-8">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-gold" />
                <span className="font-display text-[10px] tracking-[0.45em] text-gold-bright">SEIT 2026</span>
              </div>
              <p className="mt-4 font-display text-2xl lg:text-3xl text-bone leading-tight">
                Wir produzieren keine Show.<br />Wir bauen <span className="gold-text">Titelkämpfe.</span>
              </p>
              <p className="mt-3 text-bone/55 text-sm tracking-[0.18em] uppercase">
                A. Reinhardt, Gründer
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-4 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="paper-card p-4 text-center">
                <div className="font-display text-2xl lg:text-3xl gold-text leading-none">{s.kpi}</div>
                <div className="mt-1 text-[9px] lg:text-[10px] tracking-[0.32em] uppercase text-charcoal/55">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LegacyArt() {
  return (
    <svg viewBox="0 0 400 500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <radialGradient id="leg-glow" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#e3b75a" stopOpacity="0.24" />
          <stop offset="100%" stopColor="#fbf8f1" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="500" fill="url(#leg-glow)" />
      <g fill="#24201b" opacity="0.45">
        <ellipse cx="200" cy="120" rx="50" ry="60" />
        <path d="M110 200 Q200 150 290 200 L320 500 Q200 540 80 500 Z" />
      </g>
      <rect x="80" y="320" width="240" height="32" className="belt-shine" fill="#b88a2c" opacity="0.7" />
      <ellipse cx="200" cy="490" rx="180" ry="8" fill="#b63237" opacity="0.18" />
    </svg>
  );
}
