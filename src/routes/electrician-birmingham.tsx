import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout } from "@/components/site/LocationPageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/electrician-birmingham")({
  head: () => ({
    meta: [
      { title: "Commercial Electrician in Birmingham, AL | Burnett Electric" },
      { name: "description", content: "Top-rated commercial and residential electrician serving the greater Birmingham, AL area. Electrical repairs, panel upgrades, and commercial fit-outs." },
      { property: "og:title", content: "Electrician in Birmingham, AL | Burnett Electric" },
      { property: "og:description", content: "Expert commercial and residential electrical services in Birmingham." },
      { property: "og:url", content: "/electrician-birmingham" },
      { property: "og:image", content: IMG.hero },
      { name: "twitter:image", content: IMG.hero },
    ],
    links: [{ rel: "canonical", href: "/electrician-birmingham" }],
  }),
  component: () => (
    <LocationPageLayout
      slug="birmingham"
      metaDescription="Top-rated commercial and residential electrician in Birmingham, AL."
      h1="Expert Electrician in Birmingham, AL"
      city="Birmingham"
      hero={IMG.hero}
      intro="From high-rise commercial buildings in the city center to residential neighborhoods in the suburbs, Burnett Electric provides Birmingham with premier electrical repair, installation, and maintenance services."
      landmarks={["Downtown Birmingham", "Hoover", "Vestavia Hills", "Homewood", "Mountain Brook", "UAB Campus"]}
      benefits={[
        { title: "Commercial Focus", desc: "We handle large-scale commercial fit-outs, LED retrofits, and electrical maintenance for Birmingham businesses." },
        { title: "Residential Expertise", desc: "Comprehensive home wiring, panel upgrades, and repairs for homes throughout the metro area." },
        { title: "Backup Power Solutions", desc: "Keep your operations running with our industrial and residential generator installations." },
        { title: "Data Cabling", desc: "Structured cabling and low-voltage networking solutions for modern offices." },
        { title: "Code Compliance", desc: "We ensure all work meets the stringent building codes of Birmingham and surrounding municipalities." },
        { title: "24/7 Availability", desc: "We are ready to respond to electrical emergencies anytime to minimize your downtime." },
      ]}
      faqs={[
        { q: "Do you service commercial properties in Downtown Birmingham?", a: "Yes, we regularly perform tenant fit-outs, lighting upgrades, and maintenance for businesses downtown." },
        { q: "Are you licensed to operate in Birmingham municipalities like Mountain Brook and Homewood?", a: "Absolutely. We carry all necessary licenses and handle the permitting process across the entire Birmingham metro area." },
        { q: "Can you upgrade the electrical panel in my older home?", a: "Yes, we specialize in upgrading electrical panels and rewiring older homes to safely handle modern electrical demands." },
        { q: "Do you offer emergency electrical repairs for businesses?", a: "Yes, we provide 24/7 emergency response to ensure your business operations are not interrupted by electrical failures." },
      ]}
    />
  ),
});
