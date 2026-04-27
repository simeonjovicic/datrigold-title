import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { LiveStream } from "@/components/live-stream";
import Link from "next/link";

const upNext = [
  { time: "21:42", a: "Morata", b: "Park", weight: "Federgewichtstitel" },
  { time: "22:18", a: "Okada", b: "Voss", weight: "Weltergewicht" },
  { time: "22:54", a: "De La Roza", b: "Benali", weight: "Bantamgewicht" },
];

export default function LivePage() {
  return (
    <main className="relative">
      <Nav />
      <PageHeader
        eyebrow="LIVE"
        title={
          <>
            <span className="block text-charcoal">JETZT</span>
            <span className="block gold-text">LIVE.</span>
          </>
        }
        subtitle="Sieh GT XI live in 4K HDR mit mehreren Kameras, Kommentar und Backstage-Einblicken."
      />
      <LiveStream />

      <section className="relative py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[2fr_1fr] gap-10">
          <div>
            <h2 className="font-display text-2xl tracking-[0.18em] text-charcoal">ALS NÄCHSTES</h2>
            <div className="mt-6 flex flex-col">
              {upNext.map((f, i) => (
                <div key={i} className="grid grid-cols-[auto_1fr_auto_1fr] items-center gap-3 py-4 border-b border-charcoal/10">
                  <span className="font-display text-[10px] tracking-[0.3em] text-gold">{f.time}</span>
                  <span className="font-display text-base lg:text-lg text-charcoal text-right">{f.a}</span>
                  <span className="font-display text-sm gold-text">VS</span>
                  <div>
                    <span className="font-display text-base lg:text-lg text-charcoal">{f.b}</span>
                    <div className="text-[10px] tracking-[0.3em] uppercase text-charcoal/45">{f.weight}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="gold-border bg-paper-2/70 p-6">
            <div className="font-display text-[10px] tracking-[0.4em] text-gold">ÜBERTRAGUNG</div>
            <p className="mt-3 text-charcoal/65 text-sm">
              Live auf DAZN · ESPN+ · GT Pay-Per-View. Sprachen: EN, DE, ES, JP.
            </p>
            <Link
              href="/tickets"
              className="mt-5 block text-center px-6 h-12 bg-charcoal text-bone hover:bg-gold font-display text-sm tracking-[0.28em] leading-[3rem] transition-colors"
            >
              STREAM-PASS KAUFEN · €29
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
