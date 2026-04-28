"use client";

import { useEffect, useState } from "react";
import {
  THEME_PRESETS,
  THEME_STORAGE_KEY,
  applyThemePreset,
  isThemePresetId,
  type ThemePresetId,
} from "@/lib/theme-presets";

export function ThemeAdminPanel() {
  const [activeTheme, setActiveTheme] = useState<ThemePresetId>("classic");

  useEffect(() => {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    const initialTheme = isThemePresetId(stored) ? stored : "classic";
    setActiveTheme(initialTheme);
    applyThemePreset(initialTheme);
  }, []);

  const applyTheme = (theme: ThemePresetId) => {
    setActiveTheme(theme);
    applyThemePreset(theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  };

  return (
    <section className="relative bg-paper px-6 py-16 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 border-b border-charcoal/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="font-display text-[11px] tracking-[0.45em] text-gold">ADMIN</div>
            <h1 className="mt-4 font-display text-5xl leading-[0.9] text-charcoal sm:text-6xl lg:text-8xl">
              COLORWAYS
            </h1>
          </div>
          <div className="max-w-xl text-sm leading-relaxed text-charcoal/62 lg:text-right">
            Preset wechseln, dann durch die Seiten klicken. Die Auswahl bleibt in diesem Browser gespeichert.
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {THEME_PRESETS.map((preset) => {
            const isActive = activeTheme === preset.id;

            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => applyTheme(preset.id)}
                className={`group min-h-56 border p-5 text-left transition-colors ${
                  isActive
                    ? "border-gold bg-paper-2"
                    : "border-charcoal/12 bg-paper hover:border-gold/60 hover:bg-paper-2/70"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-3xl leading-none text-charcoal">{preset.name}</span>
                  <span
                    className={`h-3 w-3 rounded-full ${
                      isActive ? "bg-blood" : "border border-charcoal/25 bg-paper"
                    }`}
                    aria-hidden
                  />
                </div>
                <div className="mt-5 grid grid-cols-4 gap-2">
                  {preset.colors.map((color) => (
                    <span
                      key={color}
                      className="h-12 border border-charcoal/10"
                      style={{ backgroundColor: color }}
                      aria-hidden
                    />
                  ))}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-charcoal/60">{preset.description}</p>
                <div className="mt-7 inline-flex items-center gap-3 font-display text-[10px] tracking-[0.36em] text-gold">
                  {isActive ? "AKTIV" : "ANWENDEN"}
                  <span className="h-px w-10 bg-gold transition-all group-hover:w-14" />
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative overflow-hidden border border-charcoal/12 bg-paper-2 p-7 lg:p-9">
            <div className="absolute inset-x-0 top-0 h-1 bg-blood" />
            <div className="font-display text-[10px] tracking-[0.42em] text-gold">LIVE PREVIEW</div>
            <div className="mt-6 grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center">
              <PreviewFighter name="Kova" record="18-1" align="right" />
              <div className="text-center font-display text-4xl leading-none text-blood">VS</div>
              <PreviewFighter name="Akande" record="15-0" align="left" />
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="clip-tag bg-charcoal px-3 py-1 font-display text-[10px] tracking-[0.3em] text-bone">
                HAUPTKAMPF
              </span>
              <span className="clip-tag bg-blood px-3 py-1 font-display text-[10px] tracking-[0.3em] text-bone">
                LIVE
              </span>
              <span className="clip-tag border border-gold/40 px-3 py-1 font-display text-[10px] tracking-[0.3em] text-gold">
                TITLE NIGHT
              </span>
            </div>
          </div>

          <div className="border border-charcoal/12 bg-charcoal p-7 text-bone lg:p-9">
            <div className="font-display text-[10px] tracking-[0.42em] text-gold">SURFACE CHECK</div>
            <h2 className="mt-5 font-display text-4xl leading-none text-bone">Kontrast, Buttons, Akzente.</h2>
            <p className="mt-4 text-sm leading-relaxed text-bone/62">
              Dieser Block nutzt dieselben Utility-Farben wie Footer, Live-Karten und CTA-Elemente.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <span className="inline-flex h-11 items-center bg-blood px-5 font-display text-[11px] tracking-[0.3em] text-bone">
                TICKETS
              </span>
              <span className="inline-flex h-11 items-center border border-bone/18 px-5 font-display text-[11px] tracking-[0.3em] text-bone/78">
                STREAM
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PreviewFighter({
  name,
  record,
  align,
}: {
  name: string;
  record: string;
  align: "left" | "right";
}) {
  return (
    <div className={align === "right" ? "text-right" : ""}>
      <div className="font-display text-5xl leading-none text-charcoal">{name}</div>
      <div className="mt-2 text-[10px] uppercase tracking-[0.32em] text-charcoal/45">{record}</div>
    </div>
  );
}
