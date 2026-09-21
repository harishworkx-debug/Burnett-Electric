import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/electrical-repairs-tuscaloosa-al")({
  head: () => ({
    meta: [
      { title: "Electrical Repairs in Tuscaloosa, AL | Burnett Electric" },
      { name: "description", content: "Residential electrical repairs in Tuscaloosa, AL for flickering lights, breaker trips, outlets, and home wiring issues." },
      { property: "og:title", content: "Expert Electrical Repairs in Tuscaloosa, AL | Burnett Electric" },
      { property: "og:description", content: "Residential troubleshooting and electrical repairs in Tuscaloosa." },
      { property: "og:url", content: "/electrical-repairs-tuscaloosa-al" },
      { property: "og:image", content: IMG.repair },
      { name: "twitter:image", content: IMG.repair },
    ],
    links: [{ rel: "canonical", href: "/electrical-repairs-tuscaloosa-al" }],
  }),
  component: () => (
    <ServicePageLayout
      slug="electrical-repairs-tuscaloosa-al"
      metaTitle="Electrical Repairs in Tuscaloosa, AL"
      metaDescription="Fast and reliable electrical repairs in Tuscaloosa."
      h1="Electrical Repairs in Tuscaloosa, AL"
      eyebrow="Residential Repairs"
      hero={IMG.repair}
      intro="Electrical issues can be dangerous. This site helps Tuscaloosa homeowners connect with independent local providers for residential troubleshooting and repairs."
      benefits={[
        { title: "Accurate Troubleshooting", desc: "We don't just guess. We use advanced diagnostic tools to trace faults down to the wire in your Tuscaloosa property." },
        { title: "Transparent Pricing", desc: "You'll always know the cost of the repair before we start cutting or drilling." },
        { title: "Fully Stocked Trucks", desc: "Our vans arrive in Tuscaloosa with the parts needed to fix 90% of common residential electrical issues on the spot." },
        { title: "Safety First", desc: "Every repair includes a complimentary safety check of your main panel." },
        { title: "Emergency Help", desc: "Call to request help connecting with a provider for a residential electrical emergency." },
        { title: "Provider Verification", desc: "Homeowners should verify the provider's license and insurance before work begins." },
      ]}
      problems={[
        "Lights flickering or dimming unexpectedly in your home",
        "Outlets that are warm to the touch or have scorch marks",
        "Breakers that constantly trip when you use appliances",
        "Buzzing or humming sounds coming from the electrical panel",
        "Half of the house abruptly losing power",
        "Sparking when plugging or unplugging devices",
      ]}
      process={[
        { title: "Dispatch", desc: "Call us anytime. We'll dispatch a licensed electrician to your Tuscaloosa location promptly." },
        { title: "Diagnose", desc: "We perform a thorough inspection to accurately identify the root cause of the problem." },
        { title: "Quote", desc: "We explain the issue in plain English and provide a firm, upfront price to fix it." },
        { title: "Repair", desc: "We complete the repair cleanly, safely, and entirely up to Tuscaloosa codes." },
      ]}
      faqs={[
        { q: "Is a tripped breaker dangerous?", a: "A breaker trips to protect you from an overload or short circuit. If it happens frequently, it indicates a serious underlying issue that needs professional attention." },
        { q: "Why do my lights flicker when the AC turns on?", a: "This usually means your electrical panel is struggling with the sudden voltage drop. It could require a dedicated circuit or a panel upgrade." },
        { q: "Can I replace an outlet myself?", a: "While possible, DIY electrical work carries a high risk of shock or creating fire hazards. Consider a qualified residential provider in Tuscaloosa." },
        { q: "Can I request help for a residential emergency?", a: "Yes. Call to request help connecting with a provider. Availability varies by provider participation, location, technician availability, demand, and appointment capacity." },
      ]}
      related={[
        { to: "/wiring-upgrades-tuscaloosa-al", label: "Wiring Upgrades" },
        { to: "/panel-upgrades-tuscaloosa-al", label: "Panel Upgrades" },
        { to: "/outdoor-wiring-tuscaloosa-al", label: "Outdoor Wiring" },
      ]}
    />
  ),
});
