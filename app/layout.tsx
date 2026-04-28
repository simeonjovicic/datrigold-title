import type { Metadata, Viewport } from "next";
import { LiveFloatCta } from "@/components/live-float-cta";
import { ThemeColorwayProvider } from "@/components/theme-colorway-provider";
import { MiniPlayer } from "@/components/mini-player";
import "./globals.css";

export const metadata: Metadata = {
  title: "GOLD TITLE — Kampfnacht. Wo Titel verdient werden.",
  description:
    "GOLD TITLE ist eine Premium-Kampfsportveranstaltung mit Kampfkarte, Champions, Tickets und Live-Übertragung.",
  openGraph: {
    title: "GOLD TITLE — Kampfnacht",
    description: "Klare Kämpfe. Große Bühne.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f8f6f0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="min-h-screen overflow-x-hidden bg-paper text-charcoal antialiased">
        <ThemeColorwayProvider />
        {children}
        <LiveFloatCta />
        <MiniPlayer />
      </body>
    </html>
  );
}
