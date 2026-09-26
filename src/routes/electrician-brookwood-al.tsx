import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout } from "@/components/site/LocationPageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/electrician-brookwood-al")({
  head: () => ({
    meta: [
      { title: "Electrician in Brookwood, AL | Burnett Electric" },
      { name: "description", content: "residential electrical services in Brookwood, AL for repairs, wiring upgrades, and outdoor electrical needs." },
      { property: "og:title", content: "Electrician in Brookwood, AL | Burnett Electric" },
      { property: "og:description", content: "Residential electrical services for homeowners in Brookwood, Alabama." },
      { property: "og:url", content: "/electrician-brookwood-al" },
      { property: "og:image", content: IMG.hero },
      { name: "twitter:image", content: IMG.hero },
    ],
    links: [{ rel: "canonical", href: "/electrician-brookwood-al" }],
  }),
  component: () => (
    <LocationPageLayout
      slug="brookwood-al"
      metaDescription="residential electrical services in Brookwood, AL."
      h1="Residential Electrical Services in Brookwood, AL"
      city="Brookwood"
      hero={IMG.hero}
      intro="This site provides Brookwood homeowners with expert residential electrical services."
      landmarks={["Brookwood High School", "Hurricane Creek", "Downtown Brookwood"]}
      benefits={[
        { title: "Residential Service", desc: "schedule an expert residential electrician for Brookwood home electrical needs." },
        { title: "Older-Home Guidance", desc: "Review common wiring questions for Brookwood's established neighborhoods." },
        { title: "Storm-Ready", desc: "Post-storm repairs, surge protection, and generator installs." },
        { title: "Home Wiring", desc: "Explore rewiring and electrical upgrades for existing residential properties." },
        { title: "Homeowner Support", desc: "Get information before selecting an expert electrician." },
      ]}
      faqs={[
        { q: "How should I verify an expert electrician in Brookwood?", a: "Yes, our electricians are fully licensed, insured, and highly trained for all residential electrical work." },
        { q: "How can I schedule an electrician in Brookwood?", a: "Call us today to schedule an expert residential electrician." },
        { q: "How quickly can an electrician help?", a: "Availability varies by location, technician availability, and demand, but we always strive to respond as quickly as possible." },
      ]}
    />
  ),
});
