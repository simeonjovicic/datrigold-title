"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { EVENT, TICKETS } from "@/lib/data";

const checkoutOptions = [
  ...TICKETS.map((ticket) => ({
    tier: ticket.tier,
    label: ticket.tier,
    price: Number(ticket.price.replace("€", "").replace(".", "")),
    description: ticket.perks.join(" · "),
  })),
  {
    tier: "STREAM",
    label: "STREAM",
    price: 29,
    description: "4K-Livestream · Live-Kommentar · Backstage-Einblicke",
  },
  {
    tier: "SKYBOX",
    label: "SKYBOX",
    price: 2400,
    description: "Private Suite · 12 Gäste · eigener Host · Hospitality",
  },
];

const seats = ["A1", "A2", "A3", "B4", "B5", "B6", "C7", "C8", "D9", "D10", "E11", "E12"];
const blockedSeats = new Set(["A1", "B5", "D10"]);

export function CheckoutClient() {
  const searchParams = useSearchParams();
  const initialTier = searchParams.get("tier") ?? "VIP";
  const [tier, setTier] = useState(checkoutOptions.some((option) => option.tier === initialTier) ? initialTier : "VIP");
  const [selectedSeats, setSelectedSeats] = useState<string[]>(["A2", "A3"]);
  const [quantity, setQuantity] = useState(2);
  const [complete, setComplete] = useState(false);

  const option = checkoutOptions.find((item) => item.tier === tier) ?? checkoutOptions[1];
  const isStream = tier === "STREAM";
  const isSkybox = tier === "SKYBOX";
  const itemCount = isStream || isSkybox ? quantity : Math.max(selectedSeats.length, 1);
  const subtotal = option.price * itemCount;
  const fee = Math.round(subtotal * 0.06);
  const total = subtotal + fee;

  const availableSeats = useMemo(
    () => seats.filter((seat) => !blockedSeats.has(seat)),
    []
  );

  const toggleSeat = (seat: string) => {
    if (blockedSeats.has(seat)) return;
    setSelectedSeats((current) =>
      current.includes(seat) ? current.filter((item) => item !== seat) : [...current, seat]
    );
  };

  return (
    <section className="relative bg-paper pt-28 lg:pt-32 pb-16 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Link
          href="/tickets"
          className="inline-flex h-12 items-center gap-3 bg-charcoal px-5 font-display text-[12px] tracking-[0.28em] text-bone transition-colors hover:bg-blood"
        >
          ← ZURÜCK ZU TICKETS
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_24rem]">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <span className="font-display text-[11px] tracking-[0.45em] text-gold">CHECKOUT</span>
            </div>
            <h1 className="mt-4 font-display text-5xl leading-[0.94] text-charcoal sm:text-6xl lg:text-7xl">
              PLATZ AUSWÄHLEN.
            </h1>
            <p className="mt-4 max-w-2xl text-charcoal/65">
              Mockup-Checkout für {EVENT.title} am {EVENT.dateLabel} in der {EVENT.venue}. Keine echte Zahlung.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {checkoutOptions.map((item) => (
                <button
                  key={item.tier}
                  type="button"
                  onClick={() => setTier(item.tier)}
                  className={`border p-5 text-left transition-colors ${
                    tier === item.tier
                      ? "border-gold bg-bone"
                      : "border-charcoal/10 bg-paper hover:border-gold/50"
                  }`}
                >
                  <div className="font-display text-[11px] tracking-[0.35em] text-gold">{item.label}</div>
                  <div className="mt-2 font-display text-4xl leading-none text-charcoal">
                    €{item.price.toLocaleString("de-DE")}
                  </div>
                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-charcoal/60">{item.description}</p>
                </button>
              ))}
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
              <div className="border border-charcoal/10 bg-bone p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="font-display text-[11px] tracking-[0.35em] text-gold">
                      {isStream ? "ZUGÄNGE" : isSkybox ? "SUITE" : "SITZPLÄTZE"}
                    </div>
                    <p className="mt-2 text-sm text-charcoal/60">
                      {isStream
                        ? "Wähle die Anzahl der Streaming-Zugänge."
                        : isSkybox
                          ? "Eine Suite ist als Paket für deine Gruppe reserviert."
                          : "Wähle freie Plätze im Block A-C."}
                    </p>
                  </div>
                  {(isStream || isSkybox) && (
                    <div className="flex items-center border border-charcoal/10 bg-paper">
                      <button
                        type="button"
                        className="h-10 w-10 text-xl"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        -
                      </button>
                      <span className="w-10 text-center font-display text-xl">{quantity}</span>
                      <button type="button" className="h-10 w-10 text-xl" onClick={() => setQuantity(quantity + 1)}>
                        +
                      </button>
                    </div>
                  )}
                </div>

                {!isStream && !isSkybox && (
                  <div className="mt-6">
                    <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-charcoal/45">
                      <span>Bühne / Ring</span>
                      <span>{selectedSeats.length} gewählt</span>
                    </div>
                    <div className="mb-5 h-3 bg-charcoal" />
                    <div className="grid grid-cols-4 gap-2 sm:grid-cols-6">
                      {seats.map((seat) => {
                        const blocked = blockedSeats.has(seat);
                        const active = selectedSeats.includes(seat);

                        return (
                          <button
                            key={seat}
                            type="button"
                            onClick={() => toggleSeat(seat)}
                            disabled={blocked}
                            className={`h-12 border font-display text-sm transition-colors ${
                              blocked
                                ? "cursor-not-allowed border-charcoal/5 bg-charcoal/10 text-charcoal/25"
                                : active
                                  ? "border-gold bg-gold text-charcoal"
                                  : "border-charcoal/10 bg-paper text-charcoal hover:border-gold"
                            }`}
                          >
                            {seat}
                          </button>
                        );
                      })}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-4 text-xs text-charcoal/55">
                      <span>Gold = ausgewählt</span>
                      <span>Grau = vergeben</span>
                      <span>Frei: {availableSeats.length}</span>
                    </div>
                  </div>
                )}
              </div>

              <form
                className="border border-charcoal/10 bg-paper p-6"
                onSubmit={(event) => {
                  event.preventDefault();
                  setComplete(true);
                }}
              >
                <div className="font-display text-[11px] tracking-[0.35em] text-gold">KÄUFERDATEN</div>
                <div className="mt-4 grid gap-4">
                  <input
                    className="h-12 border border-charcoal/15 bg-bone px-4 text-charcoal placeholder:text-charcoal/35 focus:border-gold focus:outline-none"
                    placeholder="Vollständiger Name"
                  />
                  <input
                    className="h-12 border border-charcoal/15 bg-bone px-4 text-charcoal placeholder:text-charcoal/35 focus:border-gold focus:outline-none"
                    placeholder="E-Mail"
                    type="email"
                  />
                  <input
                    className="h-12 border border-charcoal/15 bg-bone px-4 text-charcoal placeholder:text-charcoal/35 focus:border-gold focus:outline-none"
                    placeholder="Telefon optional"
                  />
                </div>
                <button className="mt-5 flex h-12 w-full items-center justify-center bg-blood font-display text-[12px] tracking-[0.28em] text-bone transition-colors hover:bg-blood-deep">
                  RESERVIERUNG ABSCHLIESSEN
                </button>
                {complete && (
                  <div className="mt-4 border border-gold/35 bg-gold/10 p-4 text-sm leading-relaxed text-charcoal/75">
                    Reservierung vorgemerkt. Eine echte Zahlung wurde nicht ausgelöst.
                  </div>
                )}
              </form>
            </div>
          </div>

          <aside className="h-fit border border-charcoal/12 bg-charcoal p-6 text-bone lg:sticky lg:top-28">
            <div className="font-display text-[11px] tracking-[0.35em] text-gold">ZUSAMMENFASSUNG</div>
            <h2 className="mt-3 font-display text-3xl leading-none">{option.label}</h2>
            <p className="mt-3 text-sm leading-relaxed text-bone/62">{option.description}</p>

            <div className="mt-6 space-y-3 border-t border-bone/10 pt-5 text-sm">
              <SummaryRow label="Event" value={`GT XI · ${EVENT.title}`} />
              <SummaryRow label="Datum" value={EVENT.dateLabel} />
              <SummaryRow label="Ort" value={EVENT.city} />
              <SummaryRow label="Anzahl" value={String(itemCount)} />
              {!isStream && !isSkybox && <SummaryRow label="Plätze" value={selectedSeats.join(", ") || "Keine"} />}
            </div>

            <div className="mt-6 space-y-3 border-t border-bone/10 pt-5 text-sm">
              <SummaryRow label="Zwischensumme" value={`€${subtotal.toLocaleString("de-DE")}`} />
              <SummaryRow label="Gebühr" value={`€${fee.toLocaleString("de-DE")}`} />
              <div className="flex items-end justify-between gap-4 pt-3">
                <span className="text-bone/55">Gesamt</span>
                <span className="font-display text-5xl leading-none text-gold-bright">
                  €{total.toLocaleString("de-DE")}
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <span className="text-bone/50">{label}</span>
      <span className="max-w-[14rem] text-right font-medium text-bone/85">{value}</span>
    </div>
  );
}
