import Link from "next/link";
import { Logo } from "./logo";

const links = [
  { label: "Über uns", href: "/about" },
  { label: "Kämpfer", href: "/fighters" },
  { label: "Tickets", href: "/tickets" },
  { label: "Aktuelles", href: "/news" },
  { label: "Kontakt", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-charcoal/10 bg-charcoal py-10 text-bone">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Logo className="h-8 w-auto" />
              <div>
                <div className="font-display text-base tracking-[0.22em]">GOLD TITLE</div>
                <div className="mt-1 text-[9px] uppercase tracking-[0.36em] text-gold">Kampfnacht-Serie</div>
              </div>
            </Link>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-bone/58">
              Kampfsport aus Berlin mit klarer Kampfkarte, Live-Übertragung und echten Titelkämpfen.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="font-display text-[11px] tracking-[0.28em] text-bone/65 transition-colors hover:text-gold">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-bone/10 pt-6 text-[11px] uppercase tracking-[0.24em] text-bone/38 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Gold Title League</div>
          <div className="flex flex-wrap gap-5">
            <Link href="/imprint" className="hover:text-gold">Impressum</Link>
            <Link href="/imprint" className="hover:text-gold">Datenschutz</Link>
            <Link href="/imprint" className="hover:text-gold">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
