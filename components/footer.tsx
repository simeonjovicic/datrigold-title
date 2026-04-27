import Link from "next/link";
import { Logo } from "./logo";

const cols = [
  {
    title: "Liga",
    links: [
      { label: "Über uns", href: "/about" },
      { label: "Kämpfer", href: "/fighters" },
      { label: "Champions", href: "/champions" },
      { label: "Manifest", href: "/about" },
    ],
  },
  {
    title: "Veranstaltungen",
    links: [
      { label: "Nächste Veranstaltung", href: "/events" },
      { label: "Vergangene Veranstaltungen", href: "/events" },
      { label: "Tickets", href: "/tickets" },
      { label: "Live", href: "/live" },
    ],
  },
  {
    title: "Medien",
    links: [
      { label: "Aktuelles", href: "/news" },
      { label: "Galerie", href: "/gallery" },
      { label: "Videos", href: "/videos" },
      { label: "Sponsoring", href: "/contact/sponsoring" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative pt-14 lg:pt-16 pb-10 border-t border-charcoal/10 overflow-hidden bg-charcoal text-bone">
      <div className="absolute inset-x-0 top-0 h-px gold-line opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(169,120,36,0.18)_0%,#24201b_60%)]" />
      <div className="absolute inset-0 grain opacity-20 pointer-events-none" />

      {/* huge wordmark */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center mb-10 lg:mb-14">
          <p className="font-display text-[11px] tracking-[0.45em] text-gold">
            DER TITEL WIRD VERDIENT · NICHT VERGEBEN
          </p>
          <h2 className="mt-4 font-display text-[14vw] lg:text-[8rem] leading-[0.9] tracking-[0.02em]">
            <span className="block text-stroke-gold">GOLD TITLE</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_2fr_1fr] gap-10 lg:gap-12">
          <div>
            <Link href="#" className="flex items-center gap-3">
              <Logo className="h-9 w-auto" />
              <div className="flex flex-col leading-none">
                <span className="font-display text-base tracking-[0.22em] text-bone">
                  GOLD TITLE
                </span>
                <span className="text-[9px] uppercase tracking-[0.4em] text-gold/70">
                  Kampfnacht-Serie
                </span>
              </div>
            </Link>
            <p className="mt-6 text-bone/55 text-sm max-w-sm leading-relaxed">
              Eine Kampfsportliga aus Berlin mit Titelkämpfen in Boxen, MMA,
              Muay Thai und Kickboxen.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {["IG", "X", "YT", "TT", "FB"].map((s) => (
                <Link
                  key={s}
                  href="#"
                className="w-10 h-10 flex items-center justify-center border border-bone/15 bg-bone/5 hover:bg-bone/10 hover:text-gold text-bone/70 font-display text-[11px] tracking-[0.2em] transition-colors"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {cols.map((col) => (
              <div key={col.title}>
                <div className="font-display text-[11px] tracking-[0.4em] text-gold">
                  {col.title.toUpperCase()}
                </div>
                <ul className="mt-5 space-y-3 text-sm text-bone/65">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="hover:text-gold transition-colors">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <div className="font-display text-[11px] tracking-[0.4em] text-gold">
              NEWSLETTER
            </div>
            <p className="mt-3 text-sm text-bone/60">
              Kampfkarte-Updates, Ticketinfos und relevante Ankündigungen. Kein Lärm.
            </p>
            <form className="mt-5 flex">
              <input
                type="email"
                placeholder="deine@email"
                className="flex-1 h-12 px-4 bg-bone/8 border border-bone/15 text-bone placeholder:text-bone/35 focus:outline-none focus:border-gold/60"
              />
              <button
                type="submit"
                className="h-12 px-5 bg-gold hover:bg-gold-bright text-ink font-display text-sm tracking-[0.32em] transition-colors"
              >
                ABONNIEREN
              </button>
            </form>
            <div className="mt-8 text-[10px] tracking-[0.32em] uppercase text-bone/40 leading-loose">
              <div>HQ · Berlin, DE</div>
              <div>press@goldtitle.fight</div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] tracking-[0.32em] uppercase text-bone/40">
          <div>© 2026 Gold Title League · Alle Rechte vorbehalten</div>
          <div className="flex items-center gap-6">
            <Link href="/imprint" className="hover:text-gold">Impressum</Link>
            <Link href="/imprint" className="hover:text-gold">Datenschutz</Link>
            <Link href="/imprint" className="hover:text-gold">AGB</Link>
            <Link href="/contact" className="hover:text-gold">Kontakt</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
