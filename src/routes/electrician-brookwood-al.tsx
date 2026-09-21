import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout } from "@/components/site/LocationPageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/electrician-brookwood-al")({
  head: () => ({
    meta: [
      { title: "Electrician in Brookwood, AL | Burnett Electric" },
      { name: "description", content: "Residential electrical service connections in Brookwood, AL for repairs, wiring upgrades, and outdoor electrical needs." },
      { property: "og:title", content: "Electrician in Brookwood, AL | Burnett Electric" },
      { property: "og:description", content: "Residential electrical service connections for homeowners in Brookwood, Alabama." },
      { property: "og:url", content: "/electrician-brookwood-al" },
      { property: "og:image", content: IMG.hero },
      { name: "twitter:image", content: IMG.hero },
    ],
    links: [{ rel: "canonical", href: "/electrician-brookwood-al" }],
  }),
  component: () => (
    <LocationPageLayout
      slug="brookwood-al"
      metaDescription="Residential electrical service connections in Brookwood, AL."
      h1="Residential Electrical Help in Brookwood, AL"
      city="Brookwood"
      hero={IMG.hero}
      intro="This site helps Brookwood homeowners connect with independent local residential electrical service providers."
      landmarks={["Brookwood High School", "Hurricane Creek", "Downtown Brookwood"]}
      benefits={[
        { title: "Residential Service", desc: "Request help connecting with a provider for Brookwood home electrical needs." },
        { title: "Older-Home Guidance", desc: "Review common wiring questions for Brookwood's established neighborhoods." },
        { title: "Storm-Ready", desc: "Post-storm repairs, surge protection, and generator installs." },
        { title: "Home Wiring", desc: "Explore rewiring and electrical upgrades for existing residential properties." },
        { title: "Homeowner Support", desc: "Get information before selecting an independent local provider." },
      ]}
      faqs={[
        { q: "How should I verify a provider in Brookwood?", a: "Homeowners should verify that the hired provider furnishes the license and insurance required for the work." },
        { q: "How can I connect with a provider in Brookwood?", a: "Call to request help connecting with an independent local residential provider." },
        { q: "How quickly can a provider help?", a: "Availability varies by provider participation, location, technician availability, demand, and appointment capacity." },
      ]}
    />
  ),
});
