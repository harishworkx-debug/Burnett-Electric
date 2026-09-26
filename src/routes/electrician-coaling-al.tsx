import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout } from "@/components/site/LocationPageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/electrician-coaling-al")({
  head: () => ({
    meta: [
      { title: "Electrician in Coaling, AL | Burnett Electric" },
      { name: "description", content: "residential electrical services in Coaling, AL for repairs, wiring upgrades, and outdoor electrical needs." },
      { property: "og:title", content: "Electrician in Coaling, AL | Burnett Electric" },
      { property: "og:description", content: "Residential electrical services for homeowners in Coaling, Alabama." },
      { property: "og:url", content: "/electrician-coaling-al" },
      { property: "og:image", content: IMG.hero },
      { name: "twitter:image", content: IMG.hero },
    ],
    links: [{ rel: "canonical", href: "/electrician-coaling-al" }],
  }),
  component: () => (
    <LocationPageLayout
      slug="coaling-al"
      metaDescription="residential electrical services in Coaling, AL."
      h1="Residential Electrical Help in Coaling, AL"
      city="Coaling"
      hero={IMG.hero}
      intro="This site provides Coaling homeowners with expert residential electrical services."
      landmarks={["Town of Coaling", "Fleetwood", "Woodland Hills"]}
      benefits={[
        { title: "Residential Service", desc: "Request help getting professional service for Coaling home electrical needs." },
        { title: "Older-Home Guidance", desc: "Review common wiring questions for Coaling's established neighborhoods." },
        { title: "Storm-Ready", desc: "Post-storm repairs, surge protection, and generator installs." },
        { title: "Home Wiring", desc: "Explore rewiring and electrical upgrades for existing residential properties." },
        { title: "Homeowner Support", desc: "Get information before selecting an expert electrician." },
      ]}
      faqs={[
        { q: "How should I verify an expert electrician in Coaling?", a: "Yes, our electricians are fully licensed, insured, and highly trained for all residential electrical work." },
        { q: "How can I get professional service in Coaling?", a: "Call to request help hiring an expert residential electrician." },
        { q: "How quickly can an electrician help?", a: "Availability varies by location, technician availability, and demand, but we always strive to respond as quickly as possible." },
      ]}
    />
  ),
});
