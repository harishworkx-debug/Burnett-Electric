import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/commercial-electrical")({
  head: () => ({
    meta: [
      { title: "Commercial Electrical Services in Tuscaloosa, AL | Burnett Electric" },
      { name: "description", content: "Professional commercial electrical contractor in Tuscaloosa, AL. We handle tenant fit-outs, LED retrofits, backup power, and complex electrical systems. Call +1 205-826-3643." },
      { property: "og:title", content: "Commercial Electrical Services | Burnett Electric" },
      { property: "og:description", content: "Reliable commercial electrical solutions, fit-outs, retrofits, and backup power." },
      { property: "og:url", content: "/commercial-electrical" },
      { property: "og:image", content: IMG.commercial },
      { name: "twitter:image", content: IMG.commercial },
    ],
    links: [{ rel: "canonical", href: "/commercial-electrical" }],
  }),
  component: () => (
    <ServicePageLayout
      slug="commercial-electrical"
      metaTitle="Commercial Electrical Services in Tuscaloosa, AL"
      metaDescription="Commercial electrical in Tuscaloosa, AL."
      h1="Commercial Electrical Services"
      eyebrow="Commercial Electrical"
      hero={IMG.commercial}
      intro="Retail shops, offices, restaurants, warehouses, and multi-tenant buildings across Tuscaloosa and the surrounding areas trust Burnett Electric for dependable commercial service work. We ensure everything is completed on schedule and up to code."
      benefits={[
        { title: "Fit-Outs & Remodels", desc: "Complete electrical planning and execution for new tenant fit-outs and expansions." },
        { title: "LED Retrofits", desc: "Cut operational costs significantly by upgrading to energy-efficient LED lighting systems." },
        { title: "Safety & Egress Lighting", desc: "Installation and maintenance of code-compliant exit signs and emergency egress lighting." },
        { title: "Backup Power Systems", desc: "Commercial generator installations and uninterruptible power supplies (UPS)." },
        { title: "Data & Low-Voltage", desc: "Structured cabling for offices, POS systems, security, and access control." },
        { title: "Preventive Maintenance", desc: "Scheduled inspections to identify issues before they cause costly downtime." },
      ]}
      problems={[
        "Frequent breaker trips or power flickering during peak business hours",
        "Planning a buildout for a new suite, restaurant, or retail space",
        "Requiring panel or service upgrades for new heavy equipment",
        "High energy bills stemming from outdated fluorescent lighting",
        "Code violations flagged by local inspectors",
        "Need for reliable backup power to protect sensitive data and equipment",
      ]}
      process={[
        { title: "Consult", desc: "We meet on-site to review your plans and understand your project timeline." },
        { title: "Quote", desc: "You receive a detailed, itemized proposal with clear milestones." },
        { title: "Install", desc: "We execute a clean, phased installation that respects your business operations." },
        { title: "Handover", desc: "Final testing, local inspection coordination, and as-built documentation." },
      ]}
      faqs={[
        { q: "Do you offer after-hours commercial work?", a: "Absolutely. For occupied businesses, we regularly schedule work during nights and weekends to minimize disruption." },
        { q: "Do you handle permits and local inspections?", a: "Yes, we manage all necessary permits, engineering coordination, and final inspections with local authorities." },
        { q: "Do you provide ongoing maintenance contracts?", a: "Yes, we offer tailored quarterly and annual preventive maintenance plans for commercial properties." },
        { q: "How quickly can you start a commercial project?", a: "Standard commercial projects typically start within 1–3 weeks; however, emergency service requests are handled on the same day." },
      ]}
      related={[
        { to: "/electrical-repairs", label: "Electrical Repairs" },
        { to: "/wiring-upgrades", label: "Wiring Upgrades" },
        { to: "/outdoor-wiring", label: "Outdoor Wiring" },
        { to: "/tuscaloosa", label: "Electrician Tuscaloosa" },
      ]}
    />
  ),
});
