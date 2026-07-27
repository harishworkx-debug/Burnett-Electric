import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/electrical-repairs")({
  head: () => ({
    meta: [
      { title: "Electrical Repairs in Tuscaloosa & Surrounding Areas | Burnett Electric" },
      { name: "description", content: "Fast, reliable electrical repairs in Tuscaloosa, Buhl, Northport, and Birmingham. From fixing flickering lights to addressing breaker trips. 24/7 Emergency response." },
      { property: "og:title", content: "Expert Electrical Repairs | Burnett Electric" },
      { property: "og:description", content: "Same-day troubleshooting and fast electrical repairs." },
      { property: "og:url", content: "/electrical-repairs" },
      { property: "og:image", content: IMG.repair },
      { name: "twitter:image", content: IMG.repair },
    ],
    links: [{ rel: "canonical", href: "/electrical-repairs" }],
  }),
  component: () => (
    <ServicePageLayout
      slug="electrical-repairs"
      metaTitle="Electrical Repairs in Tuscaloosa & Surrounding Areas"
      metaDescription="Fast and reliable electrical repairs."
      h1="Electrical Repairs"
      eyebrow="Residential & Commercial Repairs"
      hero={IMG.repair}
      intro="Electrical issues aren't just inconvenient—they can be dangerous. Our licensed electricians provide fast, thorough troubleshooting and repair services for homes and businesses, resolving issues at the source."
      benefits={[
        { title: "Accurate Troubleshooting", desc: "We don't just guess. We use advanced diagnostic tools to trace faults down to the wire." },
        { title: "Transparent Pricing", desc: "You'll always know the cost of the repair before we start cutting or drilling." },
        { title: "Fully Stocked Trucks", desc: "Our vans arrive with the parts needed to fix 90% of common residential electrical issues on the spot." },
        { title: "Safety First", desc: "Every repair includes a complimentary safety check of your main panel." },
        { title: "24/7 Availability", desc: "Electrical emergencies don't stick to business hours. Neither do we." },
        { title: "Guaranteed Work", desc: "We stand behind every repair with a rock-solid workmanship guarantee." },
      ]}
      problems={[
        "Lights flickering or dimming unexpectedly",
        "Outlets that are warm to the touch or have scorch marks",
        "Breakers that constantly trip when you use appliances",
        "Buzzing or humming sounds coming from the electrical panel",
        "Half of the house abruptly losing power",
        "Sparking when plugging or unplugging devices",
      ]}
      process={[
        { title: "Dispatch", desc: "Call us anytime. We'll dispatch a licensed electrician to your location promptly." },
        { title: "Diagnose", desc: "We perform a thorough inspection to accurately identify the root cause of the problem." },
        { title: "Quote", desc: "We explain the issue in plain English and provide a firm, upfront price to fix it." },
        { title: "Repair", desc: "We complete the repair cleanly, safely, and entirely up to code." },
      ]}
      faqs={[
        { q: "Is a tripped breaker dangerous?", a: "A breaker trips to protect you from an overload or short circuit. If it happens frequently, it indicates a serious underlying issue that needs professional attention." },
        { q: "Why do my lights flicker when the AC turns on?", a: "This usually means your electrical panel is struggling with the sudden voltage drop. It could require a dedicated circuit or a panel upgrade." },
        { q: "Can I replace an outlet myself?", a: "While possible, DIY electrical work carries a high risk of shock or creating fire hazards. It's always best to hire a licensed electrician." },
        { q: "Do you offer emergency repair services?", a: "Yes, we are available 24/7 for electrical emergencies that pose an immediate risk to your home or business." },
      ]}
      related={[
        { to: "/wiring-upgrades", label: "Wiring Upgrades" },
        { to: "/commercial-electrical", label: "Commercial Electrical" },
        { to: "/outdoor-wiring", label: "Outdoor Wiring" },
        { to: "/buhl", label: "Electrician Buhl" },
      ]}
    />
  ),
});
