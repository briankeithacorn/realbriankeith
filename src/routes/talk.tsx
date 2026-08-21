import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { TalkPage } from "@/components/site/talk-page";

export const Route = createFileRoute("/talk")({
  component: Talk,
  head: () => ({
    meta: [{ title: "Talk with Brian · Brian Keith" }],
  }),
});

function Talk() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <SiteHeader />
      <TalkPage />
      <SiteFooter />
    </div>
  );
}
