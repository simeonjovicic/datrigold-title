import Link from "next/link";
import { Countdown } from "./countdown";
import { EVENT } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative min-h-[78svh] w-full overflow-hidden pt-16 lg:pt-20 bg-paper">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#f8f6f0_0%,#ebe6dc_100%)]" />
        <FightSilhouettes />
      </div>
      <div className="absolute inset-0 grain pointer-events-none opacity-25" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-12 lg:pt-16 pb-16">
        <div className="flex items-center gap-3 reveal-up">
          <span className="h-px w-10 bg-gold" />
          <span className="font-display text-[11px] tracking-[0.45em] text-gold-deep">
            AUSGABE XI · 19.09.2026 · BERLIN
          </span>
        </div>

        <h1 className="reveal-up mt-6 font-display leading-[0.9] text-[15vw] sm:text-[11vw] lg:text-[8.5rem]">
          <span className="block gold-text">GOLD TITLE</span>
          <span className="block text-charcoal text-[8vw] sm:text-[5vw] lg:text-[3.5rem] tracking-[0.04em] mt-1">
            KAMPFNACHT
          </span>
        </h1>

        <p className="reveal-up mt-6 max-w-xl text-charcoal/70 text-base lg:text-lg">
          Titelkämpfe auf großer Bühne. <span className="text-charcoal font-semibold">Klare Kampfkarte, starke Produktion und ein Abend ohne unnötigen Lärm.</span>
        </p>

        <div className="reveal-up mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/tickets"
            className="inline-flex items-center gap-3 px-7 h-12 bg-blood hover:bg-blood-deep text-bone font-display text-sm tracking-[0.28em] transition-colors"
          >
            TICKETS KAUFEN
            <span className="text-gold-bright">→</span>
          </Link>
          <Link
            href="/live"
            className="group inline-flex items-center gap-3 px-7 h-12 gold-border bg-paper/80 hover:bg-paper-2 text-charcoal font-display text-sm tracking-[0.28em]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-blood animate-ping opacity-70" />
              <span className="relative rounded-full bg-blood h-2 w-2" />
            </span>
            LIVE ANSEHEN
          </Link>
        </div>

        <div className="reveal-up mt-10 lg:mt-12 max-w-3xl gold-border bg-paper/88 backdrop-blur-sm p-5 lg:p-6">
          <div className="flex items-center justify-between">
            <span className="font-display text-[10px] tracking-[0.4em] text-gold-deep">NÄCHSTES EVENT</span>
            <span className="text-[10px] tracking-[0.32em] uppercase text-charcoal/45">{EVENT.dateLabel}</span>
          </div>
          <div className="mt-3 flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h3 className="font-display text-2xl lg:text-4xl text-charcoal leading-none">
                GT XI · {EVENT.title}
              </h3>
              <div className="mt-2 text-[11px] tracking-[0.3em] uppercase text-charcoal/50">
                {EVENT.venue} · {EVENT.city}
              </div>
            </div>
            <Countdown iso={EVENT.iso} />
          </div>
        </div>
      </div>
    </section>
  );
}

function FightSilhouettes() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.10]"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <radialGradient id="floor" cx="50%" cy="80%" r="60%">
          <stop offset="0%" stopColor="#b63237" stopOpacity="0.18" />
          <stop offset="62%" stopColor="#fbf8f1" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#floor)" />
      <g fill="#24201b">
        <ellipse cx="340" cy="220" rx="48" ry="56" />
        <path d="M250 300 Q340 250 430 300 L470 620 Q340 680 210 620 Z" />
        <ellipse cx="860" cy="220" rx="48" ry="56" />
        <path d="M770 300 Q860 250 950 300 L990 620 Q860 680 730 620 Z" />
      </g>
      <ellipse cx="600" cy="780" rx="500" ry="20" fill="#a97824" opacity="0.18" />
    </svg>
  );
}
