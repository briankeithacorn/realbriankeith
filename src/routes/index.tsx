import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { HomePage } from "@/components/site/home-page";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <SiteHeader />
      <main id="main">
        <HomePage />
      </main>
      <SiteFooter />
    </div>
  );
}
