import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout } from "@/components/site/LocationPageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/electrician-moundville-al")({
  head: () => ({
    meta: [
      { title: "Electrician in Moundville, AL | Burnett Electric" },
      { name: "description", content: "residential electrical services in Moundville, AL for repairs, wiring upgrades, and outdoor electrical needs." },
      { property: "og:title", content: "Electrician in Moundville, AL | Burnett Electric" },
      { property: "og:description", content: "Residential electrical services for homeowners in Moundville, Alabama." },
      { property: "og:url", content: "/electrician-moundville-al" },
      { property: "og:image", content: IMG.hero },
      { name: "twitter:image", content: IMG.hero },
    ],
    links: [{ rel: "canonical", href: "/electrician-moundville-al" }],
  }),
  component: () => (
    <LocationPageLayout
      slug="moundville-al"
      metaDescription="residential electrical services in Moundville, AL."
      h1="Residential Electrical Services in Moundville, AL"
      city="Moundville"
      hero={IMG.hero}
      intro="This site provides Moundville homeowners with expert residential electrical services."
      landmarks={["Moundville Archaeological Park", "Black Warrior River", "Downtown Moundville"]}
      benefits={[
        { title: "Residential Service", desc: "schedule an expert residential electrician for Moundville home electrical needs." },
        { title: "Older-Home Guidance", desc: "Review common wiring questions for Moundville's established neighborhoods." },
        { title: "Storm-Ready", desc: "Post-storm repairs, surge protection, and generator installs." },
        { title: "Home Wiring", desc: "Explore rewiring and electrical upgrades for existing residential properties." },
        { title: "Homeowner Support", desc: "Get information before selecting an expert electrician." },
      ]}
      faqs={[
        { q: "How should I verify an expert electrician in Moundville?", a: "Yes, our electricians are fully licensed, insured, and highly trained for all residential electrical work." },
        { q: "How can I schedule an electrician in Moundville?", a: "Call us today to schedule an expert residential electrician." },
        { q: "How quickly can an electrician help?", a: "Availability varies by location, technician availability, and demand, but we always strive to respond as quickly as possible." },
      ]}
    />
  ),
});
