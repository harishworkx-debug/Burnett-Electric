import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout } from "@/components/site/LocationPageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/electrician-northport-al")({
  head: () => ({
    meta: [
      { title: "Electrician in Northport, AL | Burnett Electric" },
      { name: "description", content: "Licensed electrician in Northport, AL. Panel upgrades, rewires, commercial & outdoor electrical. Fast local service. Call 205-826-3643 for a free estimate." },
      { property: "og:title", content: "Electrician in Northport, AL | Burnett Electric" },
      { property: "og:description", content: "Licensed local electrician serving Northport, Alabama." },
      { property: "og:url", content: "/electrician-northport-al" },
      { property: "og:image", content: IMG.electrician },
      { name: "twitter:image", content: IMG.electrician },
    ],
    links: [{ rel: "canonical", href: "/electrician-northport-al" }],
  }),
  component: () => (
    <LocationPageLayout
      slug="electrician-northport-al"
      metaDescription="Licensed electrician in Northport, AL."
      h1="Licensed Electrician in Northport, AL"
      city="Northport"
      hero={IMG.electrician}
      intro="Burnett Electric serves Northport homes and businesses with panel upgrades, rewires, EV charger installs and 24/7 emergency response — always with upfront pricing."
      landmarks={["Downtown Northport", "Kentuck Art Center", "Faucett Park", "Northport Marina", "Rice Mine Road", "New Watermelon Rd", "Highway 43", "The District"]}
      benefits={[
        { title: "Panel Upgrades", desc: "100A, 200A and 400A panel upgrades with permit and inspection." },
        { title: "Whole-Home Rewires", desc: "Modern, code-compliant wiring for older Northport homes." },
        { title: "EV Charger Installs", desc: "Level 2 chargers installed the right way, first time." },
        { title: "New Construction", desc: "Rough-in and trim-out for new builds and additions." },
        { title: "Outdoor Living", desc: "Lighting, outlets, pool and shop wiring." },
        { title: "24/7 Emergency", desc: "Storm damage or sudden outages — we're one call away." },
      ]}
      faqs={[
        { q: "How quickly can you respond in Northport?", a: "Most days we can be out same-day; emergency calls are prioritized immediately." },
        { q: "Do you install EV chargers in Northport?", a: "Yes — all major brands including Tesla Wall Connector and ChargePoint." },
        { q: "Do you handle new construction?", a: "Yes, from rough-in and inspection to trim-out and final walkthrough." },
        { q: "Are permits required?", a: "For panel upgrades, rewires and new circuits, yes — we handle all permits and inspections." },
      ]}
    />
  ),
});
