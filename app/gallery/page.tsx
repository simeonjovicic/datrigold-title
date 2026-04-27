import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { Gallery } from "@/components/gallery";

export default function GalleryPage() {
  return (
    <main className="relative">
      <Nav />
      <PageHeader
        eyebrow="GALERIE"
        title={
          <>
            <span className="block text-charcoal">KAMPFNÄCHTE,</span>
            <span className="block gold-text">KLAR DOKUMENTIERT.</span>
          </>
        }
        subtitle="Einläufe, Knockouts, Siege und Niederlagen aus der Nähe."
      />
      <Gallery hideHeading />
      <Footer />
    </main>
  );
}
