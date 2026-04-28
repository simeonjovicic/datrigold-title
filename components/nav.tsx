"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";
import { useState, useEffect } from "react";

const links = [
  { href: "/live", label: "Live" },
  { href: "/events", label: "Veranstaltungen" },
  { href: "/fighters", label: "Kämpfer" },
  { href: "/champions", label: "Champions" },
  { href: "/news", label: "Aktuelles" },
  { href: "/gallery", label: "Galerie" },
  { href: "/admin", label: "Admin" },
];

export function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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

        <nav className="hidden xl:flex items-center gap-6">
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
            <span aria-hidden className="hidden sm:inline">→</span>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden flex items-center justify-center h-10 w-10 border border-charcoal/10 text-charcoal transition-colors hover:border-gold hover:text-gold relative"
            aria-label="Menü umschalten"
          >
            <div className="relative w-4 h-2.5">
              <span className={`absolute left-0 w-full h-[1.5px] bg-current transition-all duration-300 ${isOpen ? 'top-1 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 w-full h-[1.5px] bg-current transition-all duration-300 ${isOpen ? 'top-1 -rotate-45' : 'bottom-0'}`} />
            </div>
          </button>
        </div>
      </div>
      <div className="h-px gold-line opacity-50 relative z-10" />

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 top-[64px] lg:top-[80px] z-40 bg-paper/98 backdrop-blur-xl transition-all duration-500 xl:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] px-6 gap-8 pb-10 overflow-y-auto">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`font-display text-3xl sm:text-4xl tracking-[0.2em] transition-colors ${
                isActive(link.href) ? "text-gold" : "text-charcoal hover:text-gold"
              }`}
              style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.4s cubic-bezier(0.2, 0.7, 0.1, 1) ${0.1 + i * 0.05}s`
              }}
            >
              {link.label}
            </Link>
          ))}
          <div 
            className="mt-8 h-px w-24 gold-line"
            style={{
              opacity: isOpen ? 0.5 : 0,
              transform: isOpen ? "translateY(0)" : "translateY(20px)",
              transition: `all 0.4s cubic-bezier(0.2, 0.7, 0.1, 1) ${0.1 + links.length * 0.05}s`
            }}
          />
        </div>
      </div>
    </header>
  );
}
