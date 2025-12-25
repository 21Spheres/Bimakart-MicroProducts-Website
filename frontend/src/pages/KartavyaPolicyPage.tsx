import { Header } from "@/components/layout/Header";
import { PolicyHero } from "@/components/policy/PolicyHero";
import { TopActions } from "@/components/policy/TopActions";
import { Footer } from "@/components/ui/Footer";

export default function KartavyaPolicyPage() {
  return (
    <>
      <Header />
      <main className="bg-gray-50">
        <TopActions />
        <PolicyHero />
      </main>
      <Footer />
    </>
  );
}
