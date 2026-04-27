import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { LiveStream } from "@/components/live-stream";
import { UpcomingEvent } from "@/components/upcoming-event";
import { Fighters } from "@/components/fighters";
import { News } from "@/components/news";
import { Sponsors } from "@/components/sponsors";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <LiveStream />
      <UpcomingEvent />
      <Fighters />
      <News />
      <Sponsors />
      <Footer />
    </main>
  );
}
