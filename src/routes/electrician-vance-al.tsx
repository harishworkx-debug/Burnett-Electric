import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout } from "@/components/site/LocationPageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/electrician-vance-al")({
  head: () => ({
    meta: [
      { title: "Electrician in Vance, AL | Burnett Electric" },
      { name: "description", content: "Licensed residential electrician serving Vance, AL. Breaker panel upgrades, EV chargers, surge protection & home repairs. Call (205) 634-8185." },
      { property: "og:title", content: "Electrician in Vance, AL | Burnett Electric" },
      { property: "og:description", content: "Licensed residential electrician serving homeowners in Vance, Alabama." },
      { property: "og:url", content: "https://www.burnettelectrictuscaloosa.com/electrician-vance-al" },
      { property: "og:image", content: `https://www.burnettelectrictuscaloosa.com${IMG.hero}` },
      { name: "twitter:image", content: `https://www.burnettelectrictuscaloosa.com${IMG.hero}` },
    ],
    links: [{ rel: "canonical", href: "https://www.burnettelectrictuscaloosa.com/electrician-vance-al" }],
  }),
  component: () => (
    <LocationPageLayout
      slug="electrician-vance-al"
      metaDescription="Licensed residential electrician serving homeowners in Vance, AL."
      h1="Residential Electrician in Vance, AL"
      city="Vance"
      hero={IMG.hero}
      intro="Burnett Electric provides Vance homeowners with dependable, licensed residential electrical services. From new subdivision additions to surge protection and panel upgrades, our local team is here to assist."
      landmarks={["Mercedes-Benz Plant Area", "Vance Elementary School", "Tannehill State Park Area", "I-20 Corridor"]}
      benefits={[
        { title: "Residential Specialists", desc: "Expert troubleshooting, subpanels, and electrical upgrades for Vance homes." },
        { title: "Surge Protection", desc: "Type 2 whole-home surge suppression to shield electronics from lightning strikes along the ridge." },
        { title: "Level 2 EV Chargers", desc: "Dedicated 240V circuits for home EV charging stations in garages and carports." },
        { title: "Subpanel Additions", desc: "Adding breaker capacity for home workshops, detached garages, and outdoor living areas." },
        { title: "100% Upfront Pricing", desc: "Itemized written quotes before work begins. No unexpected travel fees." },
        { title: "Licensed & Insured", desc: "State-certified electrical contractor adhering strictly to NEC safety standards." },
      ]}
      faqs={[
        { q: "Do you service residential homes in Vance, AL?", a: "Yes. We regularly dispatch our licensed electricians to homeowners throughout Vance and eastern Tuscaloosa County." },
        { q: "Can you install an EV charger in my Vance garage?", a: "Yes. We install Level 2 EV charging stations with dedicated 50-amp 240V circuits to ensure safe, fast overnight charging." },
        { q: "Do you install whole-home surge protectors in Vance?", a: "Yes. With frequent summer thunderstorms along the I-20 corridor, we install panel-mounted surge suppressors to protect modern appliances from grid spikes." },
        { q: "How do I schedule service in Vance?", a: "Call us directly at (205) 634-8185 or request service online for upfront pricing and prompt dispatch." },
      ]}
    >
      <h2>Licensed Electrical Services in Vance, AL</h2>
      <p>
        Located along the thriving I-20 corridor near the Mercedes-Benz complex and Tannehill State Park, Vance features both established homesteads and fast-growing residential neighborhoods. Modern homes require substantial electrical capacity for EV chargers, smart appliances, and outdoor workshops.
      </p>
      <p>
        Burnett Electric provides professional <a href="/panel-upgrades-tuscaloosa-al">electrical panel upgrades</a>, <a href="/ev-charger-installation-tuscaloosa-al">EV charger installations</a>, and <a href="/electrical-repairs-tuscaloosa-al">breaker repairs</a> to Vance families. We guarantee code-compliant work, upfront pricing, and a 1-year workmanship warranty.
      </p>
    </LocationPageLayout>
  ),
});
