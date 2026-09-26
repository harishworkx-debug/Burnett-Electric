import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout } from "@/components/site/LocationPageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/electrician-cottondale-al")({
  head: () => ({
    meta: [
      { title: "Electrician in Cottondale, AL | Burnett Electric" },
      { name: "description", content: "residential electrical services in Cottondale, AL for repairs, wiring upgrades, and outdoor electrical needs." },
      { property: "og:title", content: "Electrician in Cottondale, AL | Burnett Electric" },
      { property: "og:description", content: "Residential electrical services for homeowners in Cottondale, Alabama." },
      { property: "og:url", content: "/electrician-cottondale-al" },
      { property: "og:image", content: IMG.hero },
      { name: "twitter:image", content: IMG.hero },
    ],
    links: [{ rel: "canonical", href: "/electrician-cottondale-al" }],
  }),
  component: () => (
    <LocationPageLayout
      slug="cottondale-al"
      metaDescription="residential electrical services in Cottondale, AL."
      h1="Residential Electrical Services in Cottondale, AL"
      city="Cottondale"
      hero={IMG.hero}
      intro="This site provides Cottondale homeowners with expert residential electrical services."
      landmarks={["University Mall Area", "Cottondale Elementary", "Hurricane Creek Park"]}
      benefits={[
        { title: "Residential Service", desc: "schedule an expert residential electrician for Cottondale home electrical needs." },
        { title: "Older-Home Guidance", desc: "Review common wiring questions for Cottondale's established neighborhoods." },
        { title: "Storm-Ready", desc: "Post-storm repairs, surge protection, and generator installs." },
        { title: "Home Wiring", desc: "Explore rewiring and electrical upgrades for existing residential properties." },
        { title: "Homeowner Support", desc: "Get information before selecting an expert electrician." },
      ]}
      faqs={[
        { q: "How should I verify an expert electrician in Cottondale?", a: "Yes, our electricians are fully licensed, insured, and highly trained for all residential electrical work." },
        { q: "How can I schedule an electrician in Cottondale?", a: "Call us today to schedule an expert residential electrician." },
        { q: "How quickly can an electrician help?", a: "Availability varies by location, technician availability, and demand, but we always strive to respond as quickly as possible." },
      ]}
    />
  ),
});
