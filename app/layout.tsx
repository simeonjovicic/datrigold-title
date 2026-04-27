import type { Metadata, Viewport } from "next";
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
        {children}
      </body>
    </html>
  );
}
