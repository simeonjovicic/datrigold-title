import Link from "next/link";
import { Logo } from "./logo";

const links = [
  { href: "/live", label: "Live" },
  { href: "/events", label: "Veranstaltungen" },
  { href: "/fighters", label: "Kämpfer" },
  { href: "/champions", label: "Champions" },
  { href: "/news", label: "Aktuelles" },
  { href: "/gallery", label: "Galerie" },
];

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="absolute inset-0 backdrop-blur-md bg-paper/85 border-b border-charcoal/10" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Logo className="h-7 w-auto" />
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-[15px] tracking-[0.22em] text-charcoal">GOLD TITLE</span>
            <span className="text-[9px] uppercase tracking-[0.4em] text-gold">Kampfnacht</span>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-display text-[12px] tracking-[0.28em] text-charcoal/70 hover:text-gold transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/live"
            className="hidden sm:inline-flex items-center gap-2 font-display text-[11px] tracking-[0.3em] text-charcoal hover:text-blood transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-blood animate-ping opacity-70" />
              <span className="relative rounded-full bg-blood h-2 w-2" />
            </span>
            LIVE
          </Link>
          <Link
            href="/tickets"
            className="inline-flex items-center gap-2 px-5 h-10 bg-blood hover:bg-blood-deep text-bone font-display text-[12px] tracking-[0.3em]"
          >
            Tickets
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
      <div className="h-px gold-line opacity-50" />
    </header>
  );
}
