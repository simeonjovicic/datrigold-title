const items = [
  "GT XI · NACHT DER TITEL",
  "BERLIN · 19.09.2026",
  "FÜNF TITELKÄMPFE",
  "KOVA GEGEN AKANDE",
  "EINLASS 19:00 MEZ",
  "LIVE AUF DAZN · ESPN+",
  "DER TITEL WIRD VERDIENT · NICHT VERGEBEN",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative border-y border-white/5 bg-ink-2/60 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent z-10 pointer-events-none" />
      <div className="flex marquee whitespace-nowrap py-4">
        {row.map((t, i) => (
          <div key={i} className="flex items-center gap-8 px-8">
            <span
              className={`font-display tracking-[0.35em] text-lg ${
                i % 2 === 0 ? "text-bone" : "gold-text"
              }`}
            >
              {t}
            </span>
            <span aria-hidden className="text-gold/60">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
