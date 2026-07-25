import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/wiring-upgrades-tuscaloosa-al")({
  head: () => ({
    meta: [
      { title: "Wiring Upgrades in Tuscaloosa, AL | Burnett Electric" },
      { name: "description", content: "Whole-home rewires, panel upgrades and modernization in Tuscaloosa, AL. Aluminum-to-copper, 100/200/400A panels. Call 205-826-3643 for a free estimate." },
      { property: "og:title", content: "Wiring Upgrades in Tuscaloosa, AL | Burnett Electric" },
      { property: "og:description", content: "Modern, safe, insurance-approved wiring upgrades." },
      { property: "og:url", content: "/wiring-upgrades-tuscaloosa-al" },
      { property: "og:image", content: IMG.wiring },
      { name: "twitter:image", content: IMG.wiring },
    ],
    links: [{ rel: "canonical", href: "/wiring-upgrades-tuscaloosa-al" }],
  }),
  component: () => (
    <ServicePageLayout
      slug="wiring-upgrades-tuscaloosa-al"
      metaTitle="Wiring Upgrades in Tuscaloosa, AL"
      metaDescription="Wiring upgrades in Tuscaloosa, AL."
      h1="Wiring Upgrades in Tuscaloosa, AL"
      eyebrow="Wiring Upgrades"
      hero={IMG.wiring}
      intro="Older homes weren't built for today's electrical demand. Burnett Electric handles whole-home rewires, panel upgrades and modernization so your home is safe, insurable and smart-home ready."
      benefits={[
        { title: "100/200/400A Panels", desc: "Right-sized panel upgrades from residential to full commercial." },
        { title: "Aluminum-to-Copper", desc: "Safe replacement or COPALUM pigtail solutions for old aluminum wiring." },
        { title: "Insurance Approved", desc: "Documentation to satisfy home insurance and inspection requirements." },
        { title: "Smart-Home Ready", desc: "Prewire for smart switches, EV charging and home automation." },
        { title: "Whole-Home Rewires", desc: "Complete rewires for older Tuscaloosa & Northport homes." },
        { title: "Permits & Inspections", desc: "We pull permits and coordinate all inspections on your behalf." },
      ]}
      problems={[
        "Two-prong ungrounded outlets throughout the house",
        "Cloth-covered, knob-and-tube or aluminum wiring",
        "Federal Pacific, Zinsco or Pushmatic panels",
        "Not enough outlets in kitchens, offices or bedrooms",
        "Adding a hot tub, EV charger or generator",
        "Preparing an older home for sale or refinance",
      ]}
      process={[
        { title: "Assessment", desc: "On-site walkthrough of your existing wiring & panel." },
        { title: "Design", desc: "Written scope, load calc, and permit-ready plan." },
        { title: "Install", desc: "Clean, staged install with minimal disruption to your home." },
        { title: "Inspection", desc: "We coordinate final inspection and hand you documentation." },
      ]}
      faqs={[
        { q: "Do I need to rewire my whole house?", a: "Not always. In many cases we can upgrade the panel and problem circuits. We'll give you an honest recommendation." },
        { q: "How long does a rewire take?", a: "Most 3-bed homes take 3–7 working days. Panel-only upgrades are typically 1 day." },
        { q: "Will you damage my walls?", a: "We use fishing techniques to minimize wall damage; any patching required is quoted upfront." },
        { q: "Do you pull permits?", a: "Yes — every panel upgrade or rewire is permitted and inspected." },
      ]}
      related={[
        { to: "/electrical-repairs-tuscaloosa-al", label: "Electrical Repairs" },
        { to: "/commercial-electrical-tuscaloosa-al", label: "Commercial Electrical" },
        { to: "/outdoor-wiring-tuscaloosa-al", label: "Outdoor Wiring" },
        { to: "/electrician-northport-al", label: "Electrician Northport" },
      ]}
    />
  ),
});
