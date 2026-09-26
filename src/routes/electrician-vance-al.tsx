import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout } from "@/components/site/LocationPageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/electrician-vance-al")({
  head: () => ({
    meta: [
      { title: "Electrician in Vance, AL | Burnett Electric" },
      { name: "description", content: "residential electrical services in Vance, AL for repairs, wiring upgrades, and outdoor electrical needs." },
      { property: "og:title", content: "Electrician in Vance, AL | Burnett Electric" },
      { property: "og:description", content: "Residential electrical services for homeowners in Vance, Alabama." },
      { property: "og:url", content: "/electrician-vance-al" },
      { property: "og:image", content: IMG.hero },
      { name: "twitter:image", content: IMG.hero },
    ],
    links: [{ rel: "canonical", href: "/electrician-vance-al" }],
  }),
  component: () => (
    <LocationPageLayout
      slug="vance-al"
      metaDescription="residential electrical services in Vance, AL."
      h1="Residential Electrical Help in Vance, AL"
      city="Vance"
      hero={IMG.hero}
      intro="This site provides Vance homeowners with expert residential electrical services."
      landmarks={["Mercedes-Benz Plant Area", "Vance Elementary School", "Tannehill Ironworks Historical State Park"]}
      benefits={[
        { title: "Residential Service", desc: "Request help getting professional service for Vance home electrical needs." },
        { title: "Older-Home Guidance", desc: "Review common wiring questions for Vance's established neighborhoods." },
        { title: "Storm-Ready", desc: "Post-storm repairs, surge protection, and generator installs." },
        { title: "Home Wiring", desc: "Explore rewiring and electrical upgrades for existing residential properties." },
        { title: "Homeowner Support", desc: "Get information before selecting an expert electrician." },
      ]}
      faqs={[
        { q: "How should I verify an expert electrician in Vance?", a: "Yes, our electricians are fully licensed, insured, and highly trained for all residential electrical work." },
        { q: "How can I get professional service in Vance?", a: "Call to request help hiring an expert residential electrician." },
        { q: "How quickly can an electrician help?", a: "Availability varies by location, technician availability, and demand, but we always strive to respond as quickly as possible." },
      ]}
    />
  ),
});
