import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/outdoor-wiring-tuscaloosa-al")({
  head: () => ({
    meta: [
      { title: "Outdoor Wiring in Tuscaloosa, AL | Burnett Electric" },
      { name: "description", content: "Outdoor wiring in Tuscaloosa, AL — landscape lighting, EV chargers, security lighting, pool wiring & outdoor outlets. Call 205-826-3643 for a free estimate." },
      { property: "og:title", content: "Outdoor Wiring in Tuscaloosa, AL | Burnett Electric" },
      { property: "og:description", content: "Landscape lighting, EV chargers, outdoor outlets & more." },
      { property: "og:url", content: "/outdoor-wiring-tuscaloosa-al" },
      { property: "og:image", content: IMG.outdoor },
      { name: "twitter:image", content: IMG.outdoor },
    ],
    links: [{ rel: "canonical", href: "/outdoor-wiring-tuscaloosa-al" }],
  }),
  component: () => (
    <ServicePageLayout
      slug="outdoor-wiring-tuscaloosa-al"
      metaTitle="Outdoor Wiring in Tuscaloosa, AL"
      metaDescription="Outdoor wiring in Tuscaloosa, AL."
      h1="Outdoor Wiring & Lighting in Tuscaloosa, AL"
      eyebrow="Outdoor Wiring"
      hero={IMG.outdoor}
      intro="From landscape lighting to EV chargers and pool wiring, Burnett Electric installs weatherproof, code-compliant outdoor electrical systems built to last through Alabama seasons."
      benefits={[
        { title: "Landscape & Security", desc: "Beautiful, low-voltage lighting that boosts curb appeal and safety." },
        { title: "EV Charger Installs", desc: "Level 2 charger installs from Tesla to universal J1772 units." },
        { title: "Weatherproof Outlets", desc: "GFCI-protected outdoor outlets for patios, garages and yards." },
        { title: "Pool & Spa Wiring", desc: "Bonded, grounded and permitted pool and hot tub electrical." },
        { title: "Generator Hookups", desc: "Standby and portable generator wiring with transfer switches." },
        { title: "Long-Run Wiring", desc: "Detached garages, sheds and outdoor workshops." },
      ]}
      problems={[
        "No outdoor outlets or lighting on the property",
        "Adding an EV charger or Level 2 station",
        "Installing a new pool, hot tub or backyard fire feature",
        "Detached garage or shop with no power",
        "Existing outdoor wiring failing after storms",
        "Landscape lighting for curb appeal & safety",
      ]}
      process={[
        { title: "Walk", desc: "We walk the property with you and design the layout." },
        { title: "Plan", desc: "Written quote with fixture options at multiple price points." },
        { title: "Install", desc: "Clean, buried, weatherproof installation." },
        { title: "Test", desc: "Full testing, timers/photocells set, and walkthrough." },
      ]}
      faqs={[
        { q: "Do you install EV chargers?", a: "Yes — Tesla Wall Connectors, ChargePoint, and any universal Level 2 charger." },
        { q: "How deep do you bury outdoor wiring?", a: "Depending on wire type, we bury 12–24\" deep in code-compliant conduit." },
        { q: "Can you install pool wiring?", a: "Yes, including bonding, grounding, GFCI protection and pool light wiring." },
        { q: "Will landscape lighting increase my electric bill?", a: "Modern LED landscape lighting typically adds only a few dollars a month." },
      ]}
      related={[
        { to: "/electrical-repairs-tuscaloosa-al", label: "Electrical Repairs" },
        { to: "/wiring-upgrades-tuscaloosa-al", label: "Wiring Upgrades" },
        { to: "/commercial-electrical-tuscaloosa-al", label: "Commercial Electrical" },
        { to: "/electrician-tuscaloosa-al", label: "Electrician Tuscaloosa" },
      ]}
    />
  ),
});
