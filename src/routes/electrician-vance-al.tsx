import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout } from "@/components/site/LocationPageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/electrician-vance-al")({
  head: () => ({
    meta: [
      { title: "Electrician in Vance, AL | Burnett Electric" },
      { name: "description", content: "Residential electrical service connections in Vance, AL for repairs, wiring upgrades, and outdoor electrical needs." },
      { property: "og:title", content: "Electrician in Vance, AL | Burnett Electric" },
      { property: "og:description", content: "Residential electrical service connections for homeowners in Vance, Alabama." },
      { property: "og:url", content: "/electrician-vance-al" },
      { property: "og:image", content: IMG.hero },
      { name: "twitter:image", content: IMG.hero },
    ],
    links: [{ rel: "canonical", href: "/electrician-vance-al" }],
  }),
  component: () => (
    <LocationPageLayout
      slug="vance-al"
      metaDescription="Residential electrical service connections in Vance, AL."
      h1="Residential Electrical Help in Vance, AL"
      city="Vance"
      hero={IMG.hero}
      intro="This site helps Vance homeowners connect with independent local residential electrical service providers."
      landmarks={["Mercedes-Benz Plant Area", "Vance Elementary School", "Tannehill Ironworks Historical State Park"]}
      benefits={[
        { title: "Residential Service", desc: "Request help connecting with a provider for Vance home electrical needs." },
        { title: "Older-Home Guidance", desc: "Review common wiring questions for Vance's established neighborhoods." },
        { title: "Storm-Ready", desc: "Post-storm repairs, surge protection, and generator installs." },
        { title: "Home Wiring", desc: "Explore rewiring and electrical upgrades for existing residential properties." },
        { title: "Homeowner Support", desc: "Get information before selecting an independent local provider." },
      ]}
      faqs={[
        { q: "How should I verify a provider in Vance?", a: "Homeowners should verify that the hired provider furnishes the license and insurance required for the work." },
        { q: "How can I connect with a provider in Vance?", a: "Call to request help connecting with an independent local residential provider." },
        { q: "How quickly can a provider help?", a: "Availability varies by provider participation, location, technician availability, demand, and appointment capacity." },
      ]}
    />
  ),
});
