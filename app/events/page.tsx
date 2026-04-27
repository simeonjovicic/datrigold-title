import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { UpcomingEvent } from "@/components/upcoming-event";

const past = [
  { vol: "GT X", title: "STAHL & FEUER", date: "07.06.2026", venue: "Hallmann Dome · Wien", main: "Volk gegen Khadze" },
  { vol: "GT IX", title: "WEG ZUM RUHM", date: "21.03.2026", venue: "Mercedes Arena · Berlin", main: "Voss gegen Lopez" },
  { vol: "GT VIII", title: "BLUTMOND", date: "08.11.2025", venue: "Stark Arena · Belgrad", main: "Akande gegen Reyes" },
  { vol: "GT VII", title: "KÖNIGSPRÜFUNG", date: "27.07.2025", venue: "Coca-Cola Arena · Dubai", main: "Kova gegen Walker" },
];

export default function EventsPage() {
  return (
    <main className="relative">
      <Nav />
      <PageHeader
        eyebrow="VERANSTALTUNGEN"
        title={
          <>
            <span className="block text-charcoal">JEDER ABEND</span>
            <span className="block gold-text">ZÄHLT.</span>
          </>
        }
        subtitle="Vergangene und kommende Ausgaben der Gold-Title-Kampfnächte."
      />
      <UpcomingEvent />

      <section className="relative py-16 lg:py-24 bg-paper-2/45">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
            <h2 className="font-display text-3xl lg:text-5xl text-charcoal">VERGANGENE VERANSTALTUNGEN</h2>
            <span className="font-display text-[11px] tracking-[0.4em] text-gold">2024 — 2026</span>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {past.map((e) => (
              <Link
                key={e.vol}
                href="#"
                className="group relative overflow-hidden border border-charcoal/10 hover:border-gold/40 transition-colors"
              >
                <div className="relative aspect-[16/9] bg-gradient-to-br from-paper via-paper-2 to-paper-3 overflow-hidden">
                  <svg viewBox="0 0 600 340" className="absolute inset-0 w-full h-full opacity-50" aria-hidden>
                    <radialGradient id={`pg-${e.vol}`} cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#d4a857" stopOpacity="0.20" />
                      <stop offset="100%" stopColor="#fbf8f1" stopOpacity="0" />
                    </radialGradient>
                    <rect width="600" height="340" fill={`url(#pg-${e.vol})`} />
                    <g fill="#24201b" opacity="0.45">
                      <ellipse cx="240" cy="160" rx="40" ry="48" />
                      <path d="M170 220 Q240 180 310 220 L325 340 Q240 370 155 340 Z" />
                      <ellipse cx="380" cy="160" rx="40" ry="48" />
                      <path d="M310 220 Q380 180 450 220 L465 340 Q380 370 295 340 Z" />
                    </g>
                  </svg>
                  <div className="absolute inset-0 grain opacity-20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/78 via-charcoal/12 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-[10px] tracking-[0.4em] text-gold">{e.vol}</span>
                      <span className="text-[10px] tracking-[0.3em] uppercase text-bone/50">{e.date}</span>
                    </div>
                    <div>
                      <h3 className="font-display text-2xl lg:text-3xl text-bone leading-tight">{e.title}</h3>
                      <p className="mt-1 text-[11px] tracking-[0.28em] uppercase text-bone/50">{e.venue}</p>
                      <p className="mt-2 gold-text text-sm font-display tracking-[0.18em]">HAUPTKAMPF: {e.main}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
