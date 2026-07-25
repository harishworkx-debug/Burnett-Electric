import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/commercial-electrical-tuscaloosa-al")({
  head: () => ({
    meta: [
      { title: "Commercial Electrical in Tuscaloosa, AL | Burnett Electric" },
      { name: "description", content: "Commercial electrical contractor in Tuscaloosa, AL. Tenant fit-outs, LED retrofits, backup power and more. Call 205-826-3643 for a fast commercial quote." },
      { property: "og:title", content: "Commercial Electrical in Tuscaloosa, AL | Burnett Electric" },
      { property: "og:description", content: "Fit-outs, retrofits and commercial power — on-time and on-code." },
      { property: "og:url", content: "/commercial-electrical-tuscaloosa-al" },
      { property: "og:image", content: IMG.commercial },
      { name: "twitter:image", content: IMG.commercial },
    ],
    links: [{ rel: "canonical", href: "/commercial-electrical-tuscaloosa-al" }],
  }),
  component: () => (
    <ServicePageLayout
      slug="commercial-electrical-tuscaloosa-al"
      metaTitle="Commercial Electrical in Tuscaloosa, AL"
      metaDescription="Commercial electrical in Tuscaloosa, AL."
      h1="Commercial Electrical in Tuscaloosa, AL"
      eyebrow="Commercial Electrical"
      hero={IMG.commercial}
      intro="Retail, offices, restaurants, warehouses and multi-tenant buildings across Tuscaloosa and Birmingham trust Burnett Electric for fit-outs, retrofits and commercial service work — completed on schedule and on code."
      benefits={[
        { title: "Fit-Outs & TI Work", desc: "New tenant fit-outs, remodels and expansions with permit management." },
        { title: "LED Retrofits", desc: "Cut lighting costs by up to 60% with modern LED conversions." },
        { title: "Emergency & Exit Lighting", desc: "Code-compliant egress, exit signs and emergency lighting." },
        { title: "Backup Power", desc: "Generators, transfer switches and UPS systems." },
        { title: "Data & Low-Voltage", desc: "Structured cabling, POS, security and access control wiring." },
        { title: "Preventive Maintenance", desc: "Scheduled inspections and thermal imaging to prevent downtime." },
      ]}
      problems={[
        "Frequent breaker trips or flickering during peak hours",
        "Buildout of a new suite, restaurant or retail space",
        "Panel or service upgrade for new equipment",
        "High energy bills from old fluorescent lighting",
        "Code violations flagged during inspection",
        "Adding backup power or a generator system",
      ]}
      process={[
        { title: "Consult", desc: "Meet on-site, review plans and understand your timeline." },
        { title: "Quote", desc: "Detailed, itemized proposal with clear milestones." },
        { title: "Install", desc: "Clean, phased install that respects business hours." },
        { title: "Handover", desc: "Testing, inspection, and as-built documentation." },
      ]}
      faqs={[
        { q: "Do you work after hours?", a: "Yes — for occupied businesses, we regularly work nights and weekends to avoid disruption." },
        { q: "Can you handle permits and inspections?", a: "Yes, we manage all permits, engineering coordination and inspections." },
        { q: "Do you offer maintenance contracts?", a: "Yes. We offer quarterly and annual preventive maintenance plans." },
        { q: "How fast can you start?", a: "Standard commercial projects can start within 1–3 weeks; emergency work is same-day." },
      ]}
      related={[
        { to: "/electrical-repairs-tuscaloosa-al", label: "Electrical Repairs" },
        { to: "/wiring-upgrades-tuscaloosa-al", label: "Wiring Upgrades" },
        { to: "/outdoor-wiring-tuscaloosa-al", label: "Outdoor Wiring" },
        { to: "/electrician-birmingham-al", label: "Electrician Birmingham" },
      ]}
    />
  ),
});
