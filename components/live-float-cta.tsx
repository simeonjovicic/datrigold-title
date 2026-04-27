"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LIVE } from "@/lib/data";

const STORAGE_KEY = "gold-title-live-cta-hidden";

export function LiveFloatCta() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    setHidden(window.localStorage.getItem(STORAGE_KEY) === "true");
  }, []);

  if (!LIVE.isLive || pathname === "/live" || hidden) return null;

  const dismiss = () => {
    window.localStorage.setItem(STORAGE_KEY, "true");
    setHidden(true);
  };

  return (
    <div className="fixed bottom-4 right-4 z-[60] w-[min(20rem,calc(100vw-2rem))] overflow-hidden border border-charcoal/15 bg-paper shadow-[0_18px_55px_rgba(31,35,38,0.22)]">
      <button
        type="button"
        onClick={dismiss}
        className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center bg-charcoal/85 text-bone transition-colors hover:bg-blood"
        aria-label="Livestream-Fenster ausblenden"
      >
        ×
      </button>

      <Link
        href="/live"
        className="block transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gold/40"
        aria-label="Livestream öffnen"
      >
        <div className="relative aspect-video bg-charcoal">
          <video
            src={LIVE.videoSrc}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
          <div className="absolute left-3 top-3 inline-flex items-center gap-2 bg-blood px-2 py-1 font-display text-[9px] tracking-[0.28em] text-bone">
            <span className="h-1.5 w-1.5 rounded-full bg-bone" />
            LIVE
          </div>
          <div className="absolute bottom-3 left-3 right-3">
            <div className="font-display text-lg leading-none text-bone">Kova gegen Akande</div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.24em] text-bone/65">
              Runde 7 · {LIVE.viewers.toLocaleString("de-DE")} Zuschauer
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-3 px-4 py-3">
          <div>
            <div className="font-display text-[10px] tracking-[0.32em] text-gold">JETZT LIVE</div>
            <div className="mt-0.5 text-sm text-charcoal/70">Zum Stream mit Live-Chat</div>
          </div>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-charcoal text-bone">▶</span>
        </div>
      </Link>
    </div>
  );
}
