import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { News } from "@/components/news";
import { InstagramFeed } from "@/components/instagram-feed";

export default function NewsPage() {
  return (
    <main className="relative">
      <Nav />
      <PageHeader
        eyebrow="AKTUELLES"
        title={
          <>
            <span className="block text-charcoal">AUS DER</span>
            <span className="block gold-text">REDAKTION.</span>
          </>
        }
        subtitle="Interviews, Ranglisten, Analysen und Meldungen rund um Gold Title."
      />
      <News all />
      <InstagramFeed />
      <Footer />
    </main>
  );
}
