import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout } from "@/components/site/LocationPageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/electrician-cottondale-al")({
  head: () => ({
    meta: [
      { title: "Electrician in Cottondale, AL | Burnett Electric" },
      { name: "description", content: "Residential electrical service connections in Cottondale, AL for repairs, wiring upgrades, and outdoor electrical needs." },
      { property: "og:title", content: "Electrician in Cottondale, AL | Burnett Electric" },
      { property: "og:description", content: "Residential electrical service connections for homeowners in Cottondale, Alabama." },
      { property: "og:url", content: "/electrician-cottondale-al" },
      { property: "og:image", content: IMG.hero },
      { name: "twitter:image", content: IMG.hero },
    ],
    links: [{ rel: "canonical", href: "/electrician-cottondale-al" }],
  }),
  component: () => (
    <LocationPageLayout
      slug="cottondale-al"
      metaDescription="Residential electrical service connections in Cottondale, AL."
      h1="Residential Electrical Help in Cottondale, AL"
      city="Cottondale"
      hero={IMG.hero}
      intro="This site helps Cottondale homeowners connect with independent local residential electrical service providers."
      landmarks={["University Mall Area", "Cottondale Elementary", "Hurricane Creek Park"]}
      benefits={[
        { title: "Residential Service", desc: "Request help connecting with a provider for Cottondale home electrical needs." },
        { title: "Older-Home Guidance", desc: "Review common wiring questions for Cottondale's established neighborhoods." },
        { title: "Storm-Ready", desc: "Post-storm repairs, surge protection, and generator installs." },
        { title: "Home Wiring", desc: "Explore rewiring and electrical upgrades for existing residential properties." },
        { title: "Homeowner Support", desc: "Get information before selecting an independent local provider." },
      ]}
      faqs={[
        { q: "How should I verify a provider in Cottondale?", a: "Homeowners should verify that the hired provider furnishes the license and insurance required for the work." },
        { q: "How can I connect with a provider in Cottondale?", a: "Call to request help connecting with an independent local residential provider." },
        { q: "How quickly can a provider help?", a: "Availability varies by provider participation, location, technician availability, demand, and appointment capacity." },
      ]}
    />
  ),
});
