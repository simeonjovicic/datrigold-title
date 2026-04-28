import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ThemeAdminPanel } from "@/components/theme-admin-panel";

export default function AdminPage() {
  return (
    <main className="relative min-h-screen bg-paper pt-16 lg:pt-20">
      <Nav />
      <ThemeAdminPanel />
      <Footer />
    </main>
  );
}
