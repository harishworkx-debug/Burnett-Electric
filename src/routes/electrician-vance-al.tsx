import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout } from "@/components/site/LocationPageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/electrician-vance-al")({
  head: () => ({
    meta: [
      { title: "Electrician in Vance, AL | Burnett Electric" },
      { name: "description", content: "Trusted electrician in Vance, AL. Repairs, wiring upgrades, commercial & outdoor electrical. Licensed & insured." },
      { property: "og:title", content: "Electrician in Vance, AL | Burnett Electric" },
      { property: "og:description", content: "Trusted licensed electrician serving Vance, Alabama." },
      { property: "og:url", content: "/electrician-vance-al" },
      { property: "og:image", content: IMG.hero },
      { name: "twitter:image", content: IMG.hero },
    ],
    links: [{ rel: "canonical", href: "/electrician-vance-al" }],
  }),
  component: () => (
    <LocationPageLayout
      slug="vance-al"
      metaDescription="Trusted electrician in Vance, AL."
      h1="Trusted Electrician in Vance, AL"
      city="Vance"
      hero={IMG.hero}
      intro="Homeowners and businesses across Vance, AL trust Burnett Electric for fast, honest, and reliable electrical work."
      landmarks={["Mercedes-Benz Plant Area", "Vance Elementary School", "Tannehill Ironworks Historical State Park"]}
      benefits={[
        { title: "Same-Day Service", desc: "Local dispatch means most Vance calls get service the same day." },
        { title: "Older-Home Experts", desc: "We know the wiring quirks of Vance's established neighborhoods." },
        { title: "Storm-Ready", desc: "Post-storm repairs, surge protection, and generator installs." },
        { title: "New Construction", desc: "Ground-up wiring for new builds and residential additions." },
        { title: "Small Business Support", desc: "Retail, offices, salons and restaurants across Vance." },
      ]}
      faqs={[
        { q: "Are you licensed to work in Vance?", a: "Yes — Burnett Electric is a fully licensed Alabama electrical contractor." },
        { q: "How fast can you respond in Vance?", a: "Most calls receive same-day service. Emergency calls are prioritized immediately." },
        { q: "Do you offer free estimates?", a: "Yes, we offer upfront free estimates for all electrical jobs." },
      ]}
    />
  ),
});
