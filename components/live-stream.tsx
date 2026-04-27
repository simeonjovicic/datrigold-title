import Link from "next/link";
import { LIVE } from "@/lib/data";

export function LiveStream() {
  if (!LIVE.isLive) return null;

  return (
    <section id="live" className="relative py-14 lg:py-16 border-y border-charcoal/10 bg-paper-2/45">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inset-0 rounded-full bg-blood animate-ping opacity-70" />
            <span className="relative rounded-full bg-blood h-2.5 w-2.5" />
          </span>
          <span className="font-display text-[11px] tracking-[0.45em] text-blood">
            JETZT LIVE
          </span>
          <span className="h-px flex-1 bg-charcoal/10" />
          <span className="font-mono text-[11px] tracking-widest text-charcoal/50">
            {LIVE.viewers.toLocaleString("de-DE")} Zuschauer
          </span>
        </div>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-4 lg:gap-6">
          {/* Player */}
          <div className="relative aspect-video gold-border bg-charcoal overflow-hidden group">
            <video
              src={LIVE.videoSrc}
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />

            {/* live badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="inline-flex items-center gap-2 px-2.5 py-1 bg-blood text-bone font-display text-[10px] tracking-[0.32em]">
                <span className="w-1.5 h-1.5 bg-bone rounded-full animate-pulse" />
                LIVE
              </span>
              <span className="font-mono text-[10px] tracking-widest bg-ink/70 px-2 py-1 text-bone/80">
                4K · HDR
              </span>
            </div>

            {/* center play */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="relative w-18 h-18 rounded-full bg-paper/90 backdrop-blur-sm gold-border flex items-center justify-center transition-colors hover:bg-paper-2">
                <span className="ml-1 text-gold text-3xl">▶</span>
              </button>
            </div>

            {/* bottom bar */}
            <div className="absolute inset-x-0 bottom-0 p-4 lg:p-5 bg-gradient-to-t from-charcoal/90 to-transparent">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <div className="font-display text-lg lg:text-2xl text-bone leading-tight">
                    {LIVE.title}
                  </div>
                  <div className="text-[11px] tracking-[0.3em] uppercase text-bone/50 mt-1">
                    {LIVE.subtitle}
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  {["1080p", "HD", "EN", "DE"].map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] tracking-widest text-bone/60 px-2 py-1 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-3 h-1 bg-white/10 relative">
                <div className="absolute inset-y-0 left-0 w-[42%] bg-blood" />
                <div className="absolute -top-1 left-[42%] w-3 h-3 rounded-full bg-blood ring-2 ring-bone/80" />
              </div>
            </div>
          </div>

          {/* Side panel */}
          <div className="flex flex-col gap-4">
            <div className="gold-border bg-paper p-5 lg:p-6">
              <div className="font-display text-[10px] tracking-[0.4em] text-gold">
                AKTUELLER KAMPF
              </div>
              <div className="mt-3 grid grid-cols-3 items-center gap-2 text-center">
                <div>
                  <div className="font-display text-sm tracking-[0.18em] text-charcoal">KOVA</div>
                  <div className="text-[10px] tracking-widest uppercase text-charcoal/45 mt-1">24-1</div>
                </div>
                <div className="font-display text-2xl gold-text">VS</div>
                <div>
                  <div className="font-display text-sm tracking-[0.18em] text-charcoal">AKANDE</div>
                  <div className="text-[10px] tracking-widest uppercase text-charcoal/45 mt-1">19-2-1</div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <Stat label="Runde" value="7" />
                <Stat label="Zeit" value="2:14" />
                <Stat label="Punkte" value="98-92" />
              </div>
            </div>

            <Link
              href="/live"
              className="block text-center px-6 h-12 bg-blood hover:bg-blood-deep text-bone font-display text-sm tracking-[0.28em] leading-[3rem]"
            >
              ÜBERTRAGUNG ÖFFNEN
            </Link>
            <Link
              href="/tickets"
              className="block text-center px-6 h-12 gold-border bg-paper hover:bg-paper-2 text-charcoal font-display text-sm tracking-[0.28em] leading-[3rem]"
            >
              STREAM-PASS · €29
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-paper-2/80 border border-charcoal/10 py-2">
      <div className="font-display text-lg gold-text leading-none">{value}</div>
      <div className="text-[9px] tracking-[0.3em] uppercase text-charcoal/45 mt-1">{label}</div>
    </div>
  );
}
