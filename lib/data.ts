export const EVENT = {
  title: "NACHT DER TITEL",
  headline: "Fünf Titelkämpfe. Ein Abend. Alles steht auf dem Spiel.",
  iso: "2026-09-19T20:00:00Z",
  dateLabel: "19.09.2026",
  venue: "Kingdom Arena",
  city: "Berlin · DE",
  doors: "19:00 MEZ",
};

export type Fighter = {
  slug: string;
  name: string;
  nickname: string;
  record: string;
  weight: string;
  discipline: "Boxen" | "MMA" | "Muay Thai" | "Kickboxen";
  country: string;
  flag: string;
  status?: "champion" | "contender" | "rookie";
  stance?: "Orthodox" | "Southpaw";
};

export const FIGHTERS: Fighter[] = [
  {
    slug: "kova",
    name: "Damir Kova",
    nickname: "Der eiserne Wolf",
    record: "24-1-0",
    weight: "Schwergewicht · 102kg",
    discipline: "Boxen",
    country: "Kroatien",
    flag: "🇭🇷",
    status: "champion",
    stance: "Orthodox",
  },
  {
    slug: "akande",
    name: "Tunde Akande",
    nickname: "Löwe von Lagos",
    record: "19-2-1",
    weight: "Halbschwergewicht · 93kg",
    discipline: "MMA",
    country: "Nigeria",
    flag: "🇳🇬",
    status: "contender",
    stance: "Southpaw",
  },
  {
    slug: "morata",
    name: "Lucia Morata",
    nickname: "La Reina",
    record: "16-0-0",
    weight: "Federgewicht · 57kg",
    discipline: "Muay Thai",
    country: "Spanien",
    flag: "🇪🇸",
    status: "champion",
    stance: "Orthodox",
  },
  {
    slug: "okada",
    name: "Ren Okada",
    nickname: "Stille Klinge",
    record: "21-3-0",
    weight: "Weltergewicht · 77kg",
    discipline: "Kickboxen",
    country: "Japan",
    flag: "🇯🇵",
    status: "contender",
    stance: "Southpaw",
  },
  {
    slug: "voss",
    name: "Mateo Voss",
    nickname: "Schwarzer Hammer",
    record: "12-0-0",
    weight: "Mittelgewicht · 84kg",
    discipline: "Boxen",
    country: "Deutschland",
    flag: "🇩🇪",
    status: "rookie",
    stance: "Orthodox",
  },
  {
    slug: "delaroza",
    name: "Sofia De La Roza",
    nickname: "Goldschlag",
    record: "14-1-0",
    weight: "Bantamgewicht · 61kg",
    discipline: "MMA",
    country: "Brasilien",
    flag: "🇧🇷",
    status: "contender",
    stance: "Orthodox",
  },
];

export const CHAMPIONS = [
  {
    name: "Damir Kova",
    title: "Weltmeistertitel im Schwergewicht",
    since: "2024",
    defended: 4,
    color: "from-gold-bright to-gold-deep",
  },
  {
    name: "Lucia Morata",
    title: "Weltmeistertitel im Federgewicht",
    since: "2025",
    defended: 2,
    color: "from-bone to-gold",
  },
  {
    name: "Aleksandr Volk",
    title: "Weltmeistertitel im Cruisergewicht",
    since: "2023",
    defended: 6,
    color: "from-gold to-blood",
  },
];

export const TICKETS = [
  {
    tier: "STANDARD",
    price: "€89",
    perks: ["Sitzplatz im Unterrang", "Live-Übertragung in HD", "Event-Lanyard"],
    cta: "Standard wählen",
    accent: "border-white/10",
  },
  {
    tier: "VIP",
    price: "€349",
    perks: [
      "Premium-Sitzplatz",
      "Getränke inklusive · Lounge-Zugang",
      "VIP-Eingang und Merch-Paket",
      "Foto mit Champion nach dem Kampf",
    ],
    cta: "VIP wählen",
    accent: "ring-gold-glow gold-border",
    featured: true,
  },
  {
    tier: "RINGSEITE",
    price: "€1.290",
    perks: [
      "Platz direkt am Ring (Reihe A-C)",
      "Empfang vor der Veranstaltung",
      "Einlauf-Erlebnis",
      "Signierte Gürtel-Replik",
    ],
    cta: "Ringseite sichern",
    accent: "border-gold/30",
  },
];

export const NEWS = [
  {
    tag: "HAUPTKAMPF",
    date: "22. Apr. 2026",
    title: "Kova gegen Akande bestätigt: Schwergewichtstitel in Berlin",
    excerpt:
      "Nach acht Monaten öffentlicher Ansagen ist der Titelkampf für GT XI unterschrieben.",
  },
  {
    tag: "INTERVIEW",
    date: "19. Apr. 2026",
    title: "Lucia Morata: „Ich kämpfe nicht für Gürtel. Ich kämpfe für Vermächtnis.“",
    excerpt:
      "Die ungeschlagene Spanierin spricht im Gold-Title-Studio über Druck, Schmerz und Prestige.",
  },
  {
    tag: "RANGLISTE",
    date: "12. Apr. 2026",
    title: "April-Rangliste: Drei neue Herausforderer in den Top Ten",
    excerpt:
      "Voss springt nach seinem Abbruch-Sieg in Hamburg um acht Plätze nach oben.",
  },
];

export const SPONSORS = [
  "TANAKA",
  "AURUM",
  "RIOT NUTRITION",
  "MIDNIGHT MOTORS",
  "VANTA",
  "EVERREIGN",
  "STRATA AUDIO",
  "OBSIDIAN WATCHES",
];

export const LIVE = {
  isLive: true,
  title: "GT XI · NACHT DER TITEL — HAUPTKARTE",
  subtitle: "Runde 7 · Kova gegen Akande",
  viewers: 184_320,
  startedAtIso: "2026-09-19T20:00:00Z",
};

export const STORIES = [
  { id: "kova", label: "Kova", live: true, accent: "blood" },
  { id: "morata", label: "Morata", live: false, accent: "gold" },
  { id: "weighin", label: "Wiegen", live: false, accent: "gold" },
  { id: "facecard", label: "Duell", live: false, accent: "gold" },
  { id: "berlin", label: "Berlin", live: false, accent: "gold" },
  { id: "voss", label: "Voss", live: false, accent: "gold" },
  { id: "okada", label: "Okada", live: false, accent: "gold" },
  { id: "press", label: "Presse", live: false, accent: "gold" },
  { id: "bts", label: "Backstage", live: true, accent: "blood" },
  { id: "tickets", label: "Tickets", live: false, accent: "gold" },
];

export const POSTS = [
  { id: 1, caption: "Einlauf. Berlin. Punkt 20:00.", likes: 24_120, comments: 312 },
  { id: 2, caption: "Duell · KOVA × AKANDE", likes: 51_004, comments: 1_204 },
  { id: 3, caption: "Tag des Gürtels.", likes: 18_882, comments: 244 },
  { id: 4, caption: "Morata im Camp · Marbella", likes: 33_412, comments: 612 },
  { id: 5, caption: "Einlass ab 19:00 Uhr", likes: 9_211, comments: 92 },
  { id: 6, caption: "Hinter den Kulissen.", likes: 27_443, comments: 480 },
  { id: 7, caption: "Voss wiegt 84,0 kg.", likes: 14_004, comments: 211 },
  { id: 8, caption: "Plätze an der Ringseite noch verfügbar.", likes: 7_544, comments: 88 },
];
