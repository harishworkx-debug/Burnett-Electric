import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/outdoor-wiring")({
  head: () => ({
    meta: [
      { title: "Outdoor Wiring & Lighting in Tuscaloosa | Burnett Electric" },
      { name: "description", content: "Enhance your home's exterior with professional outdoor wiring, landscape lighting, and security systems. Licensed electricians serving Tuscaloosa and surrounding areas." },
      { property: "og:title", content: "Outdoor Wiring & Lighting | Burnett Electric" },
      { property: "og:description", content: "Custom landscape lighting and safe outdoor electrical installations." },
      { property: "og:url", content: "/outdoor-wiring" },
      { property: "og:image", content: IMG.outdoor },
      { name: "twitter:image", content: IMG.outdoor },
    ],
    links: [{ rel: "canonical", href: "/outdoor-wiring" }],
  }),
  component: () => (
    <ServicePageLayout
      slug="outdoor-wiring"
      metaTitle="Outdoor Wiring & Lighting in Tuscaloosa"
      metaDescription="Professional outdoor wiring and landscape lighting."
      h1="Outdoor Wiring & Lighting"
      eyebrow="Exterior Electrical Services"
      hero={IMG.outdoor}
      intro="Your outdoor living spaces require electrical solutions built to withstand Alabama's weather. From custom landscape lighting to pool wiring and security systems, we ensure your exterior electrical work is safe, beautiful, and up to code."
      benefits={[
        { title: "Weatherproof Installations", desc: "We use specialized, durable outdoor-rated materials and enclosures to prevent water damage." },
        { title: "Custom Landscape Lighting", desc: "Design and installation of architectural and garden lighting that enhances curb appeal." },
        { title: "Security Lighting", desc: "Strategic placement of motion sensors and floodlights to keep your property safe." },
        { title: "Pool & Spa Wiring", desc: "Strictly code-compliant electrical installations for pools, hot tubs, and water features." },
        { title: "Outdoor Kitchens", desc: "Dedicated circuits for outdoor appliances, grills, and entertainment systems." },
        { title: "Underground Trenching", desc: "Safe and minimally invasive trenching for running power across your property." },
      ]}
      problems={[
        "Tripping GFCI outlets after a heavy rainstorm",
        "Insufficient lighting for entertaining guests outside at night",
        "Planning to install a new pool, hot tub, or sauna",
        "Needing power for an unattached garage, shed, or workshop",
        "Existing outdoor outlets that are broken, ungrounded, or lack covers",
        "Dark spots around the perimeter of your home reducing security",
      ]}
      process={[
        { title: "Site Walkthrough", desc: "We walk your property with you to discuss your vision and evaluate existing power sources." },
        { title: "Custom Design", desc: "We map out the ideal placement for lights, outlets, and circuits." },
        { title: "Trenching & Rough-In", desc: "We carefully dig trenches and lay the necessary conduit and wiring." },
        { title: "Final Trim", desc: "We install the fixtures, test the system, and restore your landscaping." },
      ]}
      faqs={[
        { q: "Do I need a special outlet for outdoor use?", a: "Yes, electrical codes require all outdoor outlets to be GFCI-protected and equipped with weatherproof covers." },
        { q: "Can you run power to my shed?", a: "Absolutely. We can trench and run a dedicated underground line to provide safe, reliable power to outbuildings." },
        { q: "Is low-voltage lighting better for landscaping?", a: "Low-voltage lighting is highly energy-efficient, safer for garden environments, and provides excellent ambient illumination." },
        { q: "Do you handle the digging for underground wires?", a: "Yes, we handle all the necessary trenching and ensure it's buried at the correct depth according to code." },
      ]}
      related={[
        { to: "/wiring-upgrades", label: "Wiring Upgrades" },
        { to: "/electrical-repairs", label: "Electrical Repairs" },
        { to: "/northport", label: "Electrician Northport" },
      ]}
    />
  ),
});
