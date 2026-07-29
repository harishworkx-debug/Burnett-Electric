import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout } from "@/components/site/LocationPageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/electrician-brookwood-al")({
  head: () => ({
    meta: [
      { title: "Electrician in Brookwood, AL | Burnett Electric" },
      { name: "description", content: "Trusted electrician in Brookwood, AL. Repairs, wiring upgrades, commercial & outdoor electrical. Licensed & insured." },
      { property: "og:title", content: "Electrician in Brookwood, AL | Burnett Electric" },
      { property: "og:description", content: "Trusted licensed electrician serving Brookwood, Alabama." },
      { property: "og:url", content: "/electrician-brookwood-al" },
      { property: "og:image", content: IMG.hero },
      { name: "twitter:image", content: IMG.hero },
    ],
    links: [{ rel: "canonical", href: "/electrician-brookwood-al" }],
  }),
  component: () => (
    <LocationPageLayout
      slug="brookwood-al"
      metaDescription="Trusted electrician in Brookwood, AL."
      h1="Trusted Electrician in Brookwood, AL"
      city="Brookwood"
      hero={IMG.hero}
      intro="Homeowners and businesses across Brookwood, AL trust Burnett Electric for fast, honest, and reliable electrical work."
      landmarks={["Brookwood High School", "Hurricane Creek", "Downtown Brookwood"]}
      benefits={[
        { title: "Same-Day Service", desc: "Local dispatch means most Brookwood calls get service the same day." },
        { title: "Older-Home Experts", desc: "We know the wiring quirks of Brookwood's established neighborhoods." },
        { title: "Storm-Ready", desc: "Post-storm repairs, surge protection, and generator installs." },
        { title: "New Construction", desc: "Ground-up wiring for new builds and residential additions." },
        { title: "Small Business Support", desc: "Retail, offices, salons and restaurants across Brookwood." },
      ]}
      faqs={[
        { q: "Are you licensed to work in Brookwood?", a: "Yes — Burnett Electric is a fully licensed Alabama electrical contractor." },
        { q: "How fast can you respond in Brookwood?", a: "Most calls receive same-day service. Emergency calls are prioritized immediately." },
        { q: "Do you offer free estimates?", a: "Yes, we offer upfront free estimates for all electrical jobs." },
      ]}
    />
  ),
});
