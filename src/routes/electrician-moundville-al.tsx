import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout } from "@/components/site/LocationPageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/electrician-moundville-al")({
  head: () => ({
    meta: [
      { title: "Electrician in Moundville, AL | Burnett Electric" },
      { name: "description", content: "Trusted electrician in Moundville, AL. Repairs, wiring upgrades, commercial & outdoor electrical. Licensed & insured." },
      { property: "og:title", content: "Electrician in Moundville, AL | Burnett Electric" },
      { property: "og:description", content: "Trusted licensed electrician serving Moundville, Alabama." },
      { property: "og:url", content: "/electrician-moundville-al" },
      { property: "og:image", content: IMG.hero },
      { name: "twitter:image", content: IMG.hero },
    ],
    links: [{ rel: "canonical", href: "/electrician-moundville-al" }],
  }),
  component: () => (
    <LocationPageLayout
      slug="moundville-al"
      metaDescription="Trusted electrician in Moundville, AL."
      h1="Trusted Electrician in Moundville, AL"
      city="Moundville"
      hero={IMG.hero}
      intro="Homeowners and businesses across Moundville, AL trust Burnett Electric for fast, honest, and reliable electrical work."
      landmarks={["Moundville Archaeological Park", "Black Warrior River", "Downtown Moundville"]}
      benefits={[
        { title: "Same-Day Service", desc: "Local dispatch means most Moundville calls get service the same day." },
        { title: "Older-Home Experts", desc: "We know the wiring quirks of Moundville's established neighborhoods." },
        { title: "Storm-Ready", desc: "Post-storm repairs, surge protection, and generator installs." },
        { title: "New Construction", desc: "Ground-up wiring for new builds and residential additions." },
        { title: "Small Business Support", desc: "Retail, offices, salons and restaurants across Moundville." },
      ]}
      faqs={[
        { q: "Are you licensed to work in Moundville?", a: "Yes — Burnett Electric is a fully licensed Alabama electrical contractor." },
        { q: "How fast can you respond in Moundville?", a: "Most calls receive same-day service. Emergency calls are prioritized immediately." },
        { q: "Do you offer free estimates?", a: "Yes, we offer upfront free estimates for all electrical jobs." },
      ]}
    />
  ),
});
