import Link from "next/link";
import { TICKETS } from "@/lib/data";

export function Tickets({ hideHeading = false }: { hideHeading?: boolean }) {
  return (
    <section id="tickets" className="relative py-16 lg:py-24 bg-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {!hideHeading && (
          <div className="text-center mx-auto max-w-3xl">
            <div className="flex items-center gap-3 justify-center">
              <span className="h-px w-10 bg-gold" />
              <span className="font-display text-[11px] tracking-[0.45em] text-gold">TICKETS</span>
              <span className="h-px w-10 bg-gold" />
            </div>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-7xl leading-[0.95] text-charcoal">
              <span className="block">SICHERE DIR</span>
              <span className="block gold-text">DEINEN PLATZ.</span>
            </h2>
            <p className="mt-5 text-charcoal/60">
              Drei Kategorien. Ein Abend. Frühere GT-Veranstaltungen waren in unter 48 Stunden ausverkauft.
            </p>
          </div>
        )}

        <div className={`grid md:grid-cols-3 gap-6 ${hideHeading ? "" : "mt-12"}`}>
          {TICKETS.map((t) => (
            <TicketCard key={t.tier} ticket={t} />
          ))}
        </div>

        <div className="mt-12 grid lg:grid-cols-[1.4fr_1fr] gap-6">
          <div className="relative gold-border bg-paper-2/50 p-8 lg:p-10 overflow-hidden">
            <div className="relative">
              <div className="font-display text-[11px] tracking-[0.4em] text-gold">BUSINESS</div>
              <h3 className="mt-3 font-display text-3xl lg:text-5xl text-charcoal leading-tight">
                PRIVATE SKYBOX BUCHEN.
              </h3>
              <p className="mt-4 text-charcoal/65 max-w-lg">
                Private Skyboxen für 12 bis 40 Gäste. Eigener Host, Getränke-Service, Dinner und personalisierte Programme.
              </p>
              <Link
                href="/contact/get-in-touch"
                className="mt-6 inline-flex items-center gap-3 px-6 h-12 bg-charcoal text-bone hover:bg-gold font-display text-sm tracking-[0.32em] transition-colors"
              >
                SUITE ANFRAGEN
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
          <div className="relative gold-border bg-charcoal p-8 text-bone overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blood-deep/20 via-charcoal to-charcoal" />
            <div className="relative">
              <div className="font-display text-[11px] tracking-[0.4em] text-blood">STREAM</div>
              <h3 className="mt-3 font-display text-3xl lg:text-4xl text-bone">GT PAY-PER-VIEW</h3>
              <p className="mt-4 text-bone/70">
                Sieh die komplette Kampfkarte in 4K HDR mit mehreren Kameras, Live-Kommentar und Backstage-Einblicken.
              </p>
              <div className="mt-6 flex items-end justify-between">
                <span className="font-display text-5xl gold-text">€29</span>
                <Link
                  href="/live"
                  className="inline-flex items-center gap-2 px-5 h-11 bg-blood hover:bg-blood-deep font-display text-sm tracking-[0.32em] text-bone"
                >
                  STREAMEN
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TicketCard({
  ticket,
}: {
  ticket: { tier: string; price: string; perks: string[]; cta: string; accent: string; featured?: boolean };
}) {
  return (
    <div
      className={`relative group flex flex-col p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1 ${
        ticket.featured
          ? "bg-charcoal text-bone border border-gold/35"
          : "paper-card text-charcoal hover:border-gold"
      }`}
    >
      {ticket.featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 clip-tag bg-gold px-4 py-1 font-display text-[10px] tracking-[0.4em] text-charcoal">
          BELIEBT
        </div>
      )}
      <div className="font-display text-[11px] tracking-[0.45em] text-gold">{ticket.tier}</div>
      <div className="mt-3 flex items-baseline gap-2">
        <span className={`font-display text-6xl ${ticket.featured ? "gold-text" : "text-charcoal"}`}>
          {ticket.price}
        </span>
        <span className={`text-[10px] tracking-[0.35em] uppercase ${ticket.featured ? "text-bone/50" : "text-charcoal/45"}`}>
          / pro Platz
        </span>
      </div>

      <div className={`my-7 h-px ${ticket.featured ? "bg-gold/30" : "bg-charcoal/15"}`} />

      <ul className={`flex flex-col gap-3 text-sm ${ticket.featured ? "text-bone/85" : "text-charcoal/80"}`}>
        {ticket.perks.map((p) => (
          <li key={p} className="flex items-start gap-3">
            <span className="text-gold mt-0.5">✦</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>

      <Link
        href="#"
        className={`mt-8 inline-flex items-center justify-center gap-2 h-13 px-6 font-display text-sm tracking-[0.32em] transition-colors ${
          ticket.featured
            ? "bg-gold text-charcoal hover:bg-gold-bright"
            : "bg-charcoal text-bone hover:bg-gold"
        }`}
      >
        {ticket.cta.toUpperCase()}
        <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
