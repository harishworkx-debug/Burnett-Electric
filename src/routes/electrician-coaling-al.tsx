import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout } from "@/components/site/LocationPageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/electrician-coaling-al")({
  head: () => ({
    meta: [
      { title: "Electrician in Coaling, AL | Burnett Electric" },
      { name: "description", content: "Trusted electrician in Coaling, AL. Repairs, wiring upgrades, commercial & outdoor electrical. Licensed & insured." },
      { property: "og:title", content: "Electrician in Coaling, AL | Burnett Electric" },
      { property: "og:description", content: "Trusted licensed electrician serving Coaling, Alabama." },
      { property: "og:url", content: "/electrician-coaling-al" },
      { property: "og:image", content: IMG.hero },
      { name: "twitter:image", content: IMG.hero },
    ],
    links: [{ rel: "canonical", href: "/electrician-coaling-al" }],
  }),
  component: () => (
    <LocationPageLayout
      slug="coaling-al"
      metaDescription="Trusted electrician in Coaling, AL."
      h1="Trusted Electrician in Coaling, AL"
      city="Coaling"
      hero={IMG.hero}
      intro="Homeowners and businesses across Coaling, AL trust Burnett Electric for fast, honest, and reliable electrical work."
      landmarks={["Town of Coaling", "Fleetwood", "Woodland Hills"]}
      benefits={[
        { title: "Same-Day Service", desc: "Local dispatch means most Coaling calls get service the same day." },
        { title: "Older-Home Experts", desc: "We know the wiring quirks of Coaling's established neighborhoods." },
        { title: "Storm-Ready", desc: "Post-storm repairs, surge protection, and generator installs." },
        { title: "New Construction", desc: "Ground-up wiring for new builds and residential additions." },
        { title: "Small Business Support", desc: "Retail, offices, salons and restaurants across Coaling." },
      ]}
      faqs={[
        { q: "Are you licensed to work in Coaling?", a: "Yes — Burnett Electric is a fully licensed Alabama electrical contractor." },
        { q: "How fast can you respond in Coaling?", a: "Most calls receive same-day service. Emergency calls are prioritized immediately." },
        { q: "Do you offer free estimates?", a: "Yes, we offer upfront free estimates for all electrical jobs." },
      ]}
    />
  ),
});
