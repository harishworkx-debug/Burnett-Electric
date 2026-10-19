import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout } from "@/components/site/LocationPageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/electrician-coaling-al")({
  head: () => ({
    meta: [
      { title: "Electrician in Coaling, AL | Burnett Electric" },
      { name: "description", content: "Licensed residential electrician serving Coaling, AL. Safe electrical repairs, panel replacements, wiring & surge protection. Call (205) 634-8185." },
      { property: "og:title", content: "Electrician in Coaling, AL | Burnett Electric" },
      { property: "og:description", content: "Licensed residential electrician serving homeowners in Coaling, Alabama." },
      { property: "og:url", content: "https://www.burnettelectrictuscaloosa.com/electrician-coaling-al" },
      { property: "og:image", content: `https://www.burnettelectrictuscaloosa.com${IMG.hero}` },
      { name: "twitter:image", content: `https://www.burnettelectrictuscaloosa.com${IMG.hero}` },
    ],
    links: [{ rel: "canonical", href: "https://www.burnettelectrictuscaloosa.com/electrician-coaling-al" }],
  }),
  component: () => (
    <LocationPageLayout
      slug="electrician-coaling-al"
      metaDescription="Licensed residential electrician serving homeowners in Coaling, AL."
      h1="Residential Electrician in Coaling, AL"
      city="Coaling"
      hero={IMG.hero}
      intro="Burnett Electric provides Coaling homeowners with reliable, licensed residential electrical services. From panel modernizations to urgent troubleshooting, our local team is dedicated to your safety."
      landmarks={["Town of Coaling", "Fleetwood", "Woodland Hills", "US Highway 11"]}
      benefits={[
        { title: "Prompt Local Response", desc: "Fast dispatch across Coaling and eastern Tuscaloosa County for electrical issues." },
        { title: "Panel Upgrades", desc: "Upgrading older breaker panels to 200-amp capacity to meet modern household demands safely." },
        { title: "Whole-Home Surge Protection", desc: "Defending delicate home electronics from severe lightning surges and grid spikes." },
        { title: "Residential Troubleshooting", desc: "Accurate diagnostic fault testing for dead outlets, tripping breakers, and buzzing switches." },
        { title: "100% Upfront Pricing", desc: "Written, itemized estimates before work begins. No surprises or hidden trip fees." },
        { title: "Licensed & Insured", desc: "State-certified electrical contractor strictly adhering to National Electrical Code standards." },
      ]}
      faqs={[
        { q: "Are your electricians licensed to work in Coaling?", a: "Yes. Burnett Electric is fully licensed, insured, and certified for all residential electrical work in Tuscaloosa County, including the Town of Coaling." },
        { q: "Do you handle emergency electrical repairs in Coaling?", a: "Yes. For burning odors, smoking panels, or sudden loss of essential power, we prioritize same-day emergency dispatch." },
        { q: "Can you upgrade the main breaker box in my Coaling home?", a: "Yes. We specialize in 200-amp service heavy-ups, replacing outdated fuse boxes and overcrowded panels with modern Square D equipment." },
        { q: "How do I book an electrical inspection in Coaling?", a: "Call us at (205) 634-8185 or submit an online request for clear upfront pricing and prompt scheduling." },
      ]}
    >
      <h2>Safe, Dependable Electrical Services in Coaling, AL</h2>
      <p>
        Situated in eastern Tuscaloosa County near Fleetwood and Woodland Hills, Coaling features a blend of established family homes and quiet country settings. Modern appliances, HVAC demands, and home workshops often strain older electrical panels in the area.
      </p>
      <p>
        Burnett Electric delivers expert <a href="/panel-upgrades-tuscaloosa-al">panel replacements</a>, <a href="/electrical-repairs-tuscaloosa-al">breaker diagnostics</a>, and <a href="/generator-installation-tuscaloosa-al">standby generator installations</a> to Coaling residents, backed by our 1-year workmanship warranty.
      </p>
    </LocationPageLayout>
  ),
});
