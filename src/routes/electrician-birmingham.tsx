import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout } from "@/components/site/LocationPageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/electrician-birmingham")({
  head: () => ({
    meta: [
      { title: "Residential Electrician in Birmingham, AL | Burnett Electric" },
      { name: "description", content: "Residential electrical service connections for homeowners in Birmingham, AL, including repairs, panel upgrades, and wiring." },
      { property: "og:title", content: "Electrician in Birmingham, AL | Burnett Electric" },
      { property: "og:description", content: "Residential electrical service connections for homeowners in Birmingham." },
      { property: "og:url", content: "/electrician-birmingham" },
      { property: "og:image", content: IMG.hero },
      { name: "twitter:image", content: IMG.hero },
    ],
    links: [{ rel: "canonical", href: "/electrician-birmingham" }],
  }),
  component: () => (
    <LocationPageLayout
      slug="birmingham"
      metaDescription="Residential electrical service connections for homeowners in Birmingham, AL."
      h1="Expert Electrician in Birmingham, AL"
      city="Birmingham"
      hero={IMG.hero}
      intro="This site helps Birmingham homeowners connect with independent local residential electrical service providers."
      landmarks={["Downtown Birmingham", "Hoover", "Vestavia Hills", "Homewood", "Mountain Brook", "UAB Campus"]}
      benefits={[
        { title: "Residential Repairs", desc: "Connect with a provider for home repairs, troubleshooting, and electrical upgrades." },
        { title: "Residential Expertise", desc: "Comprehensive home wiring, panel upgrades, and repairs for homes throughout the metro area." },
        { title: "Backup Power Solutions", desc: "Explore residential generator options for storm-related outages." },
        { title: "Home Wiring", desc: "Request help connecting with a provider for residential wiring and smart-home needs." },
        { title: "Safety Information", desc: "Review questions to ask a provider about residential electrical safety and code requirements." },
        { title: "Emergency Help", desc: "Call to request help connecting with a provider for a residential electrical emergency." },
      ]}
      faqs={[
        { q: "Can I connect with a residential provider in Birmingham?", a: "Yes. Call to request help connecting with an independent local residential provider." },
        { q: "How should I verify a provider?", a: "Homeowners should verify that the hired provider furnishes the license and insurance required for the work." },
        { q: "Can you upgrade the electrical panel in my older home?", a: "Yes, we specialize in upgrading electrical panels and rewiring older homes to safely handle modern electrical demands." },
        { q: "Can I request help for a residential emergency?", a: "Yes. Call to request help connecting with a provider; availability varies by provider participation, location, and capacity." },
      ]}
    />
  ),
});
