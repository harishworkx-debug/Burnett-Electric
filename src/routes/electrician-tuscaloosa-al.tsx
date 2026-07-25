import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout } from "@/components/site/LocationPageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/electrician-tuscaloosa-al")({
  head: () => ({
    meta: [
      { title: "Electrician in Tuscaloosa, AL | Burnett Electric" },
      { name: "description", content: "Trusted electrician in Tuscaloosa, AL. Repairs, wiring upgrades, commercial & outdoor electrical. Licensed & insured. Call 205-826-3643 for a free estimate." },
      { property: "og:title", content: "Electrician in Tuscaloosa, AL | Burnett Electric" },
      { property: "og:description", content: "Trusted licensed electrician serving Tuscaloosa, Alabama." },
      { property: "og:url", content: "/electrician-tuscaloosa-al" },
      { property: "og:image", content: IMG.hero },
      { name: "twitter:image", content: IMG.hero },
    ],
    links: [{ rel: "canonical", href: "/electrician-tuscaloosa-al" }],
  }),
  component: () => (
    <LocationPageLayout
      slug="electrician-tuscaloosa-al"
      metaDescription="Trusted electrician in Tuscaloosa, AL."
      h1="Trusted Electrician in Tuscaloosa, AL"
      city="Tuscaloosa"
      hero={IMG.hero}
      intro="Homeowners, landlords, and business owners across Tuscaloosa call Burnett Electric for fast, honest, code-compliant electrical work — from a single outlet to a full commercial fit-out."
      landmarks={["University of Alabama", "Bryant-Denny Stadium", "Downtown Tuscaloosa", "Midtown Village", "Alberta City", "Forest Lake", "Cottondale", "Riverside"]}
      benefits={[
        { title: "Same-Day Service", desc: "Local dispatch means most Tuscaloosa calls get service the same day." },
        { title: "Older-Home Experts", desc: "We know the wiring quirks of Tuscaloosa's historic neighborhoods." },
        { title: "Storm-Ready", desc: "Post-storm repairs, surge protection, and generator installs." },
        { title: "Rental & Property Mgmt", desc: "Fast turnarounds for landlords and property managers." },
        { title: "New Construction", desc: "Ground-up wiring for new builds and additions." },
        { title: "Small Business Support", desc: "Retail, offices, salons and restaurants across Tuscaloosa County." },
      ]}
      faqs={[
        { q: "Are you licensed to work in Tuscaloosa?", a: "Yes — Burnett Electric is a fully licensed Alabama electrical contractor and pulls all required permits." },
        { q: "Do you work near the University of Alabama?", a: "Absolutely. We regularly service rentals, off-campus housing, and businesses throughout the UA area." },
        { q: "How fast can you respond in Tuscaloosa?", a: "Most calls same-day. Emergency calls are prioritized immediately." },
        { q: "Do you handle historic home rewires?", a: "Yes — including knob-and-tube replacement and aluminum-to-copper upgrades." },
      ]}
    />
  ),
});
