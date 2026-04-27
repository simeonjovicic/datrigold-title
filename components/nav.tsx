"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  const showLivePreview = () => {
    window.localStorage.removeItem("gold-title-live-cta-hidden");
    window.dispatchEvent(new Event("gold-title-live-cta-show"));
  };

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="absolute inset-0 backdrop-blur-md bg-paper/90 border-b border-charcoal/10" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Logo className="h-7 w-auto" />
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-[15px] tracking-[0.22em] text-charcoal">GOLD TITLE</span>
            <span className="text-[9px] uppercase tracking-[0.4em] text-gold">Kampfnacht</span>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`border-b-2 py-2 font-display text-[12px] tracking-[0.28em] transition-colors ${
                isActive(link.href)
                  ? "border-gold text-charcoal"
                  : "border-transparent text-charcoal/62 hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={showLivePreview}
            className="hidden sm:inline-flex h-10 items-center gap-2 border border-charcoal/10 px-3 font-display text-[10px] tracking-[0.25em] text-charcoal transition-colors hover:border-blood hover:text-blood"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-blood animate-ping opacity-70" />
              <span className="relative rounded-full bg-blood h-2 w-2" />
            </span>
            LIVE-BOX
          </button>
          <Link
            href="/tickets"
            className={`inline-flex items-center gap-2 px-5 h-10 font-display text-[12px] tracking-[0.3em] transition-colors ${
              isActive("/tickets") || isActive("/checkout")
                ? "bg-charcoal text-bone"
                : "bg-blood hover:bg-blood-deep text-bone"
            }`}
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
