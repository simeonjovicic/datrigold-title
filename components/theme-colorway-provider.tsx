"use client";

import { useEffect } from "react";
import { THEME_STORAGE_KEY, applyThemePreset, isThemePresetId } from "@/lib/theme-presets";

export function ThemeColorwayProvider() {
  useEffect(() => {
    const applyStoredTheme = () => {
      const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
      applyThemePreset(isThemePresetId(stored) ? stored : "classic");
    };

    applyStoredTheme();
    window.addEventListener("storage", applyStoredTheme);

    return () => window.removeEventListener("storage", applyStoredTheme);
  }, []);

  return null;
}
