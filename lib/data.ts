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
  age: number;
  height: string;
  reach: string;
  koRate: string;
  lastFight: string;
  rank: string;
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
    age: 33,
    height: "1,93 m",
    reach: "203 cm",
    koRate: "71%",
    lastFight: "TKO R5",
    rank: "Champion",
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
    age: 29,
    height: "1,88 m",
    reach: "198 cm",
    koRate: "63%",
    lastFight: "Sieg Pkt.",
    rank: "#1 Herausforderer",
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
    age: 27,
    height: "1,68 m",
    reach: "171 cm",
    koRate: "56%",
    lastFight: "KO R3",
    rank: "Champion",
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
    age: 31,
    height: "1,80 m",
    reach: "184 cm",
    koRate: "48%",
    lastFight: "Sieg Pkt.",
    rank: "#2 Herausforderer",
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
    age: 24,
    height: "1,84 m",
    reach: "188 cm",
    koRate: "75%",
    lastFight: "TKO R2",
    rank: "Prospect",
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
    age: 28,
    height: "1,65 m",
    reach: "168 cm",
    koRate: "43%",
    lastFight: "Sub R1",
    rank: "#3 Herausforderin",
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
    slug: "kova-akande-berlin",
    tag: "HAUPTKAMPF",
    date: "22. Apr. 2026",
    title: "Kova gegen Akande bestätigt: Schwergewichtstitel in Berlin",
    excerpt:
      "Nach acht Monaten öffentlicher Ansagen ist der Titelkampf für GT XI unterschrieben.",
    readTime: "4 Min. Lesezeit",
    author: "Gold Title Redaktion",
    deck:
      "Der Schwergewichtstitel steht im Zentrum von GT XI. Kova bringt die Ruhe des Champions, Akande den Druck des Herausforderers.",
    body: [
      "Gold Title hat den Hauptkampf für GT XI offiziell bestätigt: Damir Kova verteidigt seinen Schwergewichtstitel gegen Tunde Akande. Der Kampf findet am 19. September 2026 in der Kingdom Arena in Berlin statt und bildet den Abschluss der Hauptkarte.",
      "Kova geht mit einer Bilanz von 24-1-0 in den Abend. Sein Team setzt auf kontrollierte Distanz, kurze Kombinationen und das Tempo, das ihn in den letzten Titelverteidigungen so schwer lesbar gemacht hat. Akande kommt als Nummer-eins-Herausforderer und hat in den vergangenen Monaten vor allem durch Druck, Körperarbeit und späte Runden überzeugt.",
      "Sportlich ist die Paarung ungewöhnlich klar: Champion gegen ersten Herausforderer, keine Zwischenstation, kein Aufbaukampf. Genau deshalb passt der Kampf zur Linie von Gold Title. Eine Division, ein Gürtel, eine verpflichtende Verteidigung.",
      "Die offizielle Fight Week startet am Montag vor dem Event. Pressekonferenz, öffentliches Wiegen und Face-off werden live übertragen. Weitere Informationen zu Undercard und Übertragungszeiten folgen in den kommenden Wochen.",
    ],
    highlights: [
      "Kova verteidigt zum fünften Mal den Schwergewichtstitel.",
      "Akande tritt als offizieller Nummer-eins-Herausforderer an.",
      "GT XI findet am 19.09.2026 in Berlin statt.",
    ],
  },
  {
    slug: "lucia-morata-interview",
    tag: "INTERVIEW",
    date: "19. Apr. 2026",
    title: "Lucia Morata: „Ich kämpfe nicht für Gürtel. Ich kämpfe für Vermächtnis.“",
    excerpt:
      "Die ungeschlagene Spanierin spricht im Gold-Title-Studio über Druck, Schmerz und Prestige.",
    readTime: "5 Min. Lesezeit",
    author: "Nora Weiss",
    deck:
      "Lucia Morata spricht über Vorbereitung, Erwartungsdruck und warum ein Titel nur dann zählt, wenn er regelmäßig verteidigt wird.",
    body: [
      "Lucia Morata wirkt im Studio ruhig, fast zurückhaltend. Erst wenn es um den Kampf geht, wird sie präzise. Kein großes Gerede, keine künstliche Härte. Sie spricht über Arbeit, Rhythmus und Verantwortung.",
      "Für Morata ist der Gürtel kein Schmuckstück, sondern eine Pflicht. Sie sagt, ein Champion müsse verfügbar sein, wenn die Division ruft. Genau deshalb habe sie ihre Vorbereitung nicht auf eine einzelne Gegnerin ausgelegt, sondern auf verschiedene Kampfbilder.",
      "Im Camp in Marbella lag der Fokus auf kurzen Winkeln, Clinch-Ausgängen und der Fähigkeit, auch unter Druck sauber zu punkten. Morata erwartet keinen einfachen Abend, aber sie sieht den Druck nicht als Problem. Sie nennt ihn den Preis dafür, ernst genommen zu werden.",
      "Das vollständige Interview erscheint in der Fight Week als Video. Eine gekürzte Fassung wird auf den Social-Kanälen von Gold Title veröffentlicht.",
    ],
    highlights: [
      "Morata bleibt vor GT XI ungeschlagen.",
      "Das Camp in Marbella fokussiert auf Drucksituationen.",
      "Das Video-Interview erscheint in der Fight Week.",
    ],
  },
  {
    slug: "april-rangliste",
    tag: "RANGLISTE",
    date: "12. Apr. 2026",
    title: "April-Rangliste: Drei neue Herausforderer in den Top Ten",
    excerpt:
      "Voss springt nach seinem Abbruch-Sieg in Hamburg um acht Plätze nach oben.",
    readTime: "3 Min. Lesezeit",
    author: "Ranking Desk",
    deck:
      "Die April-Rangliste bringt Bewegung in mehrere Divisionen. Vor allem Mateo Voss profitiert von seinem Auftritt in Hamburg.",
    body: [
      "Die neue Gold-Title-Rangliste ist veröffentlicht. Drei Athleten schaffen erstmals den Sprung in die Top Ten, während Mateo Voss nach seinem Abbruch-Sieg in Hamburg acht Plätze gutmacht.",
      "Voss überzeugte nicht nur durch das Ergebnis, sondern durch Kontrolle. Er nahm die Ringmitte früh, zwang seinen Gegner an die Seile und beendete den Kampf in der dritten Runde. Für die Matchmaker war besonders relevant, wie wenig Risiko er dabei eingehen musste.",
      "Auch im Weltergewicht gibt es Bewegung. Ren Okada bleibt in Reichweite eines Titelkampfs, muss seinen Platz aber gegen eine engere Verfolgergruppe verteidigen. Die nächsten Wochen entscheiden, ob ein Eliminator angesetzt wird.",
      "Die Rangliste wird monatlich aktualisiert. Gewertet werden Ergebnis, Gegnerqualität, Aktivität und die sportliche Relevanz für die jeweilige Division.",
    ],
    highlights: [
      "Voss steigt nach Hamburg um acht Plätze.",
      "Drei neue Namen stehen in den Top Ten.",
      "Ein Weltergewicht-Eliminator ist in Prüfung.",
    ],
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
  videoSrc: "/example_fight.mp4",
};

export const LIVE_COMMENTS = [
  { name: "Mara", badge: "VIP", text: "Kova arbeitet heute viel ruhiger als sonst.", time: "gerade eben" },
  { name: "Ben", badge: "DE", text: "Akande braucht mehr Druck über die rechte Seite.", time: "vor 12 Sek." },
  { name: "Nico", badge: "Rang 3", text: "Die Ecke von Kova bleibt erstaunlich entspannt.", time: "vor 24 Sek." },
  { name: "Selin", badge: "Live", text: "Diese Runde ist enger als die Anzeige sagt.", time: "vor 41 Sek." },
  { name: "Jonas", badge: "VIP", text: "Bildqualität top, bitte mehr Ringmikro.", time: "vor 1 Min." },
  { name: "Amir", badge: "DE", text: "Wenn Akande den Jab hält, wird es spannend.", time: "vor 2 Min." },
];

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
