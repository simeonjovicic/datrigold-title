import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { FIGHTERS, LIVE, LIVE_COMMENTS } from "@/lib/data";

const upNext = [
  { time: "21:42", a: "Morata", b: "Park", weight: "Federgewichtstitel" },
  { time: "22:18", a: "Okada", b: "Voss", weight: "Weltergewicht" },
  { time: "22:54", a: "De La Roza", b: "Benali", weight: "Bantamgewicht" },
];

const kova = FIGHTERS[0];
const akande = FIGHTERS[1];

export default function LivePage() {
  return (
    <main className="relative">
      <Nav />

      <section className="relative overflow-hidden bg-paper pt-28 lg:pt-32 pb-16 lg:pb-20">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#f8f6f0_0%,#ebe6dc_100%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-blood" />
                <span className="font-display text-[11px] tracking-[0.45em] text-blood">JETZT LIVE</span>
              </div>
              <h1 className="mt-4 font-display text-5xl leading-[0.92] text-charcoal sm:text-6xl lg:text-8xl">
                KOVA GEGEN <span className="gold-text">AKANDE</span>
              </h1>
              <p className="mt-4 max-w-2xl text-charcoal/65">
                GT XI · Nacht der Titel. Mock-Livestream mit Kommentarbereich, Kampfstatus und Zuschaueranzeige.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center lg:w-[26rem]">
              <TopStat label="Runde" value="7" />
              <TopStat label="Zeit" value="2:14" />
              <TopStat label="Zuschauer" value={LIVE.viewers.toLocaleString("de-DE")} />
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_23rem]">
            <div className="overflow-hidden border border-charcoal/15 bg-charcoal">
              <div className="relative aspect-video">
                <video
                  src={LIVE.videoSrc}
                  className="h-full w-full object-cover"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
                <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2">
                  <span className="inline-flex items-center gap-2 bg-blood px-2.5 py-1 font-display text-[10px] tracking-[0.3em] text-bone">
                    <span className="h-1.5 w-1.5 rounded-full bg-bone" />
                    LIVE
                  </span>
                  <span className="bg-charcoal/75 px-2.5 py-1 font-mono text-[10px] tracking-widest text-bone/80">
                    4K · DE
                  </span>
                </div>
                <div className="pointer-events-none absolute bottom-5 left-5 right-5 hidden items-end justify-between gap-4 md:flex">
                  <ScoreBug fighter={kova} score="98" align="left" />
                  <div className="bg-paper/95 px-4 py-2 text-center">
                    <div className="font-display text-[10px] tracking-[0.3em] text-gold">RUNDE 7</div>
                    <div className="font-display text-2xl leading-none text-charcoal">2:14</div>
                  </div>
                  <ScoreBug fighter={akande} score="92" align="right" />
                </div>
              </div>

              <div className="grid gap-4 border-t border-bone/10 bg-charcoal p-4 text-bone md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <div className="font-display text-xl leading-tight">{LIVE.title}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.25em] text-bone/55">{LIVE.subtitle}</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["1080p", "Kamera 1", "Kommentar DE", "Ringmikro"].map((item) => (
                    <span key={item} className="border border-bone/15 px-2.5 py-1 font-mono text-[10px] text-bone/70">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <aside className="flex min-h-[32rem] flex-col border border-charcoal/12 bg-bone">
              <div className="border-b border-charcoal/10 p-4">
                <div className="font-display text-[11px] tracking-[0.35em] text-gold">LIVE-CHAT</div>
                <div className="mt-1 text-sm text-charcoal/60">
                  {LIVE_COMMENTS.length} neue Kommentare in den letzten Minuten
                </div>
              </div>

              <div className="flex-1 space-y-3 overflow-hidden p-4">
                {LIVE_COMMENTS.map((comment) => (
                  <div key={`${comment.name}-${comment.time}`} className="border border-charcoal/10 bg-paper p-3">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="flex h-7 w-7 items-center justify-center bg-charcoal font-display text-[10px] text-bone">
                          {comment.name.slice(0, 1)}
                        </span>
                        <div>
                          <div className="text-sm font-semibold text-charcoal">{comment.name}</div>
                          <div className="text-[10px] uppercase tracking-[0.22em] text-charcoal/45">{comment.badge}</div>
                        </div>
                      </div>
                      <span className="text-[10px] text-charcoal/45">{comment.time}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal/72">{comment.text}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-charcoal/10 p-4">
                <div className="flex gap-2">
                  <input
                    className="h-11 min-w-0 flex-1 border border-charcoal/15 bg-paper px-3 text-sm text-charcoal placeholder:text-charcoal/35 focus:border-gold focus:outline-none"
                    placeholder="Kommentar schreiben..."
                  />
                  <button className="h-11 bg-charcoal px-4 font-display text-[11px] tracking-[0.28em] text-bone">
                    SENDEN
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="relative py-14 lg:py-18 bg-paper">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:px-10 xl:grid-cols-[1fr_23rem]">
          <div className="grid gap-5 md:grid-cols-2">
            <FighterPanel fighter={kova} />
            <FighterPanel fighter={akande} />
          </div>

          <div className="border border-charcoal/12 bg-paper-2/70 p-5">
            <div className="font-display text-[11px] tracking-[0.35em] text-gold">ALS NÄCHSTES</div>
            <div className="mt-4 flex flex-col">
              {upNext.map((fight) => (
                <div key={`${fight.time}-${fight.a}`} className="grid grid-cols-[auto_1fr] gap-4 border-b border-charcoal/10 py-3 last:border-b-0">
                  <span className="font-display text-sm text-gold">{fight.time}</span>
                  <div>
                    <div className="font-display text-lg leading-none text-charcoal">
                      {fight.a} <span className="gold-text">gegen</span> {fight.b}
                    </div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.24em] text-charcoal/45">{fight.weight}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/tickets"
              className="mt-5 flex h-11 items-center justify-center bg-blood font-display text-[12px] tracking-[0.26em] text-bone transition-colors hover:bg-blood-deep"
            >
              STREAM-PASS · €29
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function TopStat({ label, value, wide = false }: { label: string; value: string; wide?: boolean }) {
  return (
    <div className={`min-w-0 border border-charcoal/12 bg-bone px-3 py-3 ${wide ? "col-span-2" : ""}`}>
      <div className="break-words font-display text-lg leading-none text-charcoal lg:text-xl">{value}</div>
      <div className="mt-1 text-[9px] uppercase tracking-[0.24em] text-charcoal/45">{label}</div>
    </div>
  );
}

function ScoreBug({
  fighter,
  score,
  align,
}: {
  fighter: typeof kova;
  score: string;
  align: "left" | "right";
}) {
  return (
    <div className={`flex items-center gap-3 bg-charcoal/88 px-4 py-3 text-bone ${align === "right" ? "flex-row-reverse text-right" : ""}`}>
      <span className="text-xl">{fighter.flag}</span>
      <div>
        <div className="font-display text-xl leading-none">{fighter.name.split(" ").at(-1)}</div>
        <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-bone/50">{fighter.record}</div>
      </div>
      <div className="font-display text-3xl leading-none text-gold-bright">{score}</div>
    </div>
  );
}

function FighterPanel({ fighter }: { fighter: typeof kova }) {
  const stance = fighter.stance === "Southpaw" ? "Linksauslage" : "Normalauslage";

  return (
    <div className="border border-charcoal/12 bg-bone p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-[10px] uppercase tracking-[0.28em] text-charcoal/45">{fighter.rank}</div>
          <h2 className="mt-2 font-display text-3xl leading-none text-charcoal">{fighter.name}</h2>
          <div className="mt-1 text-sm text-charcoal/60">{fighter.nickname}</div>
        </div>
        <span className="text-3xl">{fighter.flag}</span>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2">
        <TopStat label="Bilanz" value={fighter.record} />
        <TopStat label="Größe" value={fighter.height} />
        <TopStat label="Reichw." value={fighter.reach} />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <TopStat label="KO" value={fighter.koRate} />
        <TopStat label="Alter" value={String(fighter.age)} />
        <TopStat label="Auslage" value={stance} wide />
      </div>
    </div>
  );
}
