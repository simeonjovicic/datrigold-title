"use client";

import { useEffect, useState } from "react";

function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  const d = Math.floor(ms / 86_400_000);
  const h = Math.floor((ms / 3_600_000) % 24);
  const m = Math.floor((ms / 60_000) % 60);
  const s = Math.floor((ms / 1000) % 60);
  return { d, h, m, s };
}

export function Countdown({ iso }: { iso: string }) {
  const target = new Date(iso).getTime();
  const [t, setT] = useState<{ d: number; h: number; m: number; s: number } | null>(null);

  useEffect(() => {
    setT(diff(target));
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const cells: Array<[string, number | null]> = [
    ["Tage", t?.d ?? null],
    ["Std", t?.h ?? null],
    ["Min", t?.m ?? null],
    ["Sek", t?.s ?? null],
  ];

  return (
    <div className="grid grid-cols-4 gap-2 lg:gap-3">
      {cells.map(([label, value]) => (
        <div
          key={label}
          className="relative flex flex-col items-center justify-center px-3 py-3 lg:px-4 lg:py-4 bg-paper-2/80 gold-border"
        >
          <span className="font-display text-3xl lg:text-5xl gold-text leading-none tabular-nums">
            {value === null ? "--" : String(value).padStart(2, "0")}
          </span>
          <span className="mt-1 lg:mt-2 text-[9px] lg:text-[10px] tracking-[0.35em] uppercase text-charcoal/50">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
