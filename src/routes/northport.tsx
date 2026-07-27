import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout } from "@/components/site/LocationPageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/northport")({
  head: () => ({
    meta: [
      { title: "Electrician in Northport, AL | Burnett Electric" },
      { name: "description", content: "Professional electrical services in Northport, AL. We specialize in residential wiring, panel upgrades, and commercial electrical repairs. Call +1 205-826-3643." },
      { property: "og:title", content: "Electrician in Northport, AL | Burnett Electric" },
      { property: "og:description", content: "Reliable residential and commercial electrician in Northport, Alabama." },
      { property: "og:url", content: "/northport" },
      { property: "og:image", content: IMG.hero },
      { name: "twitter:image", content: IMG.hero },
    ],
    links: [{ rel: "canonical", href: "/northport" }],
  }),
  component: () => (
    <LocationPageLayout
      slug="northport"
      metaDescription="Professional electrical services in Northport, AL."
      h1="Professional Electrician in Northport, AL"
      city="Northport"
      hero={IMG.hero}
      intro="From historic homes near downtown to the growing suburban neighborhoods, Burnett Electric provides Northport residents and businesses with safe, high-quality, and code-compliant electrical services."
      landmarks={["Downtown Northport", "Kentuck Art Center", "Lake Lurleen State Park", "Huntington Place", "Northwood Lake", "Bridges of Northport"]}
      benefits={[
        { title: "Residential Experts", desc: "We excel in troubleshooting and upgrading the electrical systems in Northport's varied home styles." },
        { title: "Fast Dispatch", desc: "Located just across the river, we provide rapid response times to all Northport neighborhoods." },
        { title: "Commercial Build-Outs", desc: "Supporting the growth of Northport's local businesses with complete commercial wiring." },
        { title: "Panel Upgrades", desc: "Bringing older Northport homes up to modern safety and capacity standards." },
        { title: "Safety Inspections", desc: "Thorough electrical safety checks for peace of mind or real estate transactions." },
        { title: "Outdoor Lighting", desc: "Enhancing curb appeal and security with custom outdoor and landscape lighting." },
      ]}
      faqs={[
        { q: "Are you familiar with Northport's building codes?", a: "Yes, we are fully licensed and strictly adhere to all local building codes and inspection requirements in Northport." },
        { q: "Do you service older homes in Downtown Northport?", a: "Absolutely. We have extensive experience updating knob-and-tube wiring and older panels in historic homes." },
        { q: "Can you install an EV charger at my home?", a: "Yes, we can install Level 2 EV charging stations to ensure safe and fast charging for your electric vehicle." },
        { q: "What should I do if my breaker keeps tripping?", a: "A repeatedly tripping breaker is a sign of an overload or a short. Call us for a diagnostic check before it becomes a hazard." },
      ]}
    />
  ),
});
