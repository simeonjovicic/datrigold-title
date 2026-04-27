"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FIGHTERS, type Fighter } from "@/lib/data";

export function Fighters({ all = false }: { all?: boolean }) {
  const list = all ? FIGHTERS : FIGHTERS.slice(0, 4);
  const [selected, setSelected] = useState<Fighter | null>(null);

  useEffect(() => {
    if (!selected) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  return (
    <section id="fighters" className="relative py-16 lg:py-24 bg-paper-2/45">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <span className="font-display text-[11px] tracking-[0.45em] text-gold">KÄMPFER</span>
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-[0.95]">
              DER KADER.
            </h2>
          </div>
          {!all && (
            <Link href="/fighters" className="font-display text-[11px] tracking-[0.4em] text-gold hover:text-gold-deep">
              ALLE KÄMPFER →
            </Link>
          )}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {list.map((fighter) => (
            <FighterCard key={fighter.slug} fighter={fighter} onOpen={() => setSelected(fighter)} />
          ))}
        </div>
      </div>

      {selected && <FighterModal fighter={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}

function FighterCard({ fighter, onOpen }: { fighter: Fighter; onOpen: () => void }) {
  const isChamp = fighter.status === "champion";

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative block overflow-hidden border border-charcoal/12 bg-paper text-left transition-colors hover:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
      aria-label={`${fighter.name} Statistik öffnen`}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-paper via-paper-2 to-paper-3" />
        <FighterSilhouette champion={isChamp} />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/78 via-charcoal/18 to-transparent" />

        <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
          <span className="clip-tag bg-paper/95 px-2.5 py-1 font-display text-[9px] tracking-[0.3em] text-charcoal">
            {fighter.discipline}
          </span>
          {isChamp && (
            <span className="clip-tag bg-blood px-2.5 py-1 font-display text-[9px] tracking-[0.3em] text-bone">
              CHAMP
            </span>
          )}
        </div>

        <div className="absolute inset-x-0 bottom-0 p-4">
          <div className="flex items-center gap-2 text-[10px] tracking-[0.28em] uppercase text-bone/60">
            <span>{fighter.flag}</span>
            <span>{fighter.country}</span>
          </div>
          <h3 className="mt-1.5 font-display text-xl lg:text-2xl text-bone leading-none">
            {fighter.name}
          </h3>
          <p className="mt-0.5 text-[10px] tracking-[0.25em] uppercase text-gold-bright">
            {fighter.nickname}
          </p>
          <div className="mt-3 flex items-center justify-between text-[10px] tracking-[0.25em] uppercase">
            <span className="text-bone/45">Bilanz</span>
            <span className="font-display text-sm text-bone tracking-[0.15em]">{fighter.record}</span>
          </div>
        </div>
      </div>
    </button>
  );
}

function FighterModal({ fighter, onClose }: { fighter: Fighter; onClose: () => void }) {
  const isChamp = fighter.status === "champion";
  const stance = fighter.stance === "Southpaw" ? "Linksauslage" : "Normalauslage";

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-charcoal/72 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${fighter.name} Statistik`}
      onClick={onClose}
    >
      <div
        className="relative grid max-h-[calc(100svh-3rem)] w-full max-w-5xl overflow-y-auto border border-charcoal/15 bg-paper shadow-[0_28px_90px_rgba(0,0,0,0.35)] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center border border-charcoal/15 bg-paper text-2xl leading-none text-charcoal shadow-lg transition-colors hover:bg-blood hover:text-bone"
          aria-label="Popup schließen"
        >
          ×
        </button>

        <div className="relative min-h-[24rem] overflow-hidden bg-paper-2 lg:min-h-[34rem]">
          <div className="absolute inset-0 bg-gradient-to-b from-paper via-paper-2 to-paper-3" />
          <FighterSilhouette champion={isChamp} />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/82 via-charcoal/16 to-transparent" />
          <div className="absolute left-5 top-5 flex gap-2">
            <span className="clip-tag bg-paper/95 px-3 py-1 font-display text-[10px] tracking-[0.28em] text-charcoal">
              {fighter.discipline}
            </span>
            {isChamp && (
              <span className="clip-tag bg-blood px-3 py-1 font-display text-[10px] tracking-[0.28em] text-bone">
                CHAMP
              </span>
            )}
          </div>
          <div className="absolute inset-x-0 bottom-0 p-6">
            <div className="flex items-center gap-2 text-[10px] tracking-[0.28em] uppercase text-bone/60">
              <span>{fighter.flag}</span>
              <span>{fighter.country}</span>
            </div>
            <h3 className="mt-2 font-display text-4xl lg:text-5xl text-bone leading-none">
              {fighter.name}
            </h3>
            <p className="mt-2 text-[12px] tracking-[0.25em] uppercase text-gold-bright">
              {fighter.nickname}
            </p>
          </div>
        </div>

        <div className="min-w-0 p-6 lg:p-8">
          <div className="flex items-start justify-between gap-5 border-b border-charcoal/10 pb-6 pr-10 sm:pr-0">
            <div>
              <div className="font-display text-[11px] tracking-[0.35em] text-gold">STATISTIK</div>
              <p className="mt-2 text-charcoal/65">{fighter.rank}</p>
            </div>
            <div className="shrink-0 text-right">
              <div className="font-display text-4xl leading-none text-charcoal lg:text-5xl">{fighter.record}</div>
              <div className="mt-1 text-[10px] tracking-[0.28em] uppercase text-charcoal/45">S - N - U</div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <FighterStat label="Alter" value={String(fighter.age)} />
            <FighterStat label="Größe" value={fighter.height} />
            <FighterStat label="Reichweite" value={fighter.reach} />
            <FighterStat label="KO-Quote" value={fighter.koRate} />
            <FighterStat label="Auslage" value={stance} wide />
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <InfoRow label="Letzter Kampf" value={fighter.lastFight} />
            <InfoRow label="Division" value={fighter.weight} />
            <InfoRow label="Herkunft" value={fighter.country} />
            <InfoRow label="Status" value={isChamp ? "Champion" : fighter.rank} />
          </div>

          <div className="mt-6 border border-charcoal/10 bg-bone/65 p-4">
            <div className="font-display text-[10px] tracking-[0.32em] text-gold">MATCHMAKER-NOTIZ</div>
            <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
              {fighter.name} bringt eine klare Identität in den Kampf: {stance.toLowerCase()},
              {` ${fighter.koRate}`} KO-Quote und zuletzt {fighter.lastFight}. Diese Daten erscheinen bewusst erst hier,
              damit die Übersicht im Kader sauber bleibt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FighterStat({ label, value, wide = false }: { label: string; value: string; wide?: boolean }) {
  return (
    <div className={`min-w-0 border border-charcoal/10 bg-bone/60 px-4 py-3 ${wide ? "col-span-2" : ""}`}>
      <div className="break-words font-display text-xl leading-none text-charcoal sm:text-2xl">{value}</div>
      <div className="mt-2 text-[10px] tracking-[0.24em] uppercase text-charcoal/45">{label}</div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0 border border-charcoal/10 bg-bone/45 px-4 py-3">
      <span className="block text-sm text-charcoal/55">{label}</span>
      <span className="mt-1 block min-w-0 break-words text-base font-semibold leading-snug text-charcoal">{value}</span>
    </div>
  );
}

function FighterSilhouette({ champion }: { champion: boolean }) {
  return (
    <svg viewBox="0 0 300 400" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYEnd slice" aria-hidden>
      <defs>
        <radialGradient id={`f-spot-${champion ? "c" : "n"}`} cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor={champion ? "#b99343" : "#a43d35"} stopOpacity="0.24" />
          <stop offset="100%" stopColor="#f8f6f0" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="300" height="400" fill={`url(#f-spot-${champion ? "c" : "n"})`} />
      <g fill="#24201b" opacity="0.5">
        <ellipse cx="150" cy="110" rx="40" ry="48" />
        <path d="M70 180 Q150 130 230 180 L255 380 Q150 410 45 380 Z" />
      </g>
    </svg>
  );
}
