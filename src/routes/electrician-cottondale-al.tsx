import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout } from "@/components/site/LocationPageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/electrician-cottondale-al")({
  head: () => ({
    meta: [
      { title: "Electrician in Cottondale, AL | Burnett Electric" },
      { name: "description", content: "Local residential electrician in Cottondale, AL. Fast repairs, breaker replacements, wiring upgrades, and outdoor lighting. Call (205) 634-8185." },
      { property: "og:title", content: "Electrician in Cottondale, AL | Burnett Electric" },
      { property: "og:description", content: "Licensed residential electrician serving homeowners in Cottondale, Alabama." },
      { property: "og:url", content: "https://www.burnettelectrictuscaloosa.com/electrician-cottondale-al" },
      { property: "og:image", content: `https://www.burnettelectrictuscaloosa.com${IMG.hero}` },
      { name: "twitter:image", content: `https://www.burnettelectrictuscaloosa.com${IMG.hero}` },
    ],
    links: [{ rel: "canonical", href: "https://www.burnettelectrictuscaloosa.com/electrician-cottondale-al" }],
  }),
  component: () => (
    <LocationPageLayout
      slug="electrician-cottondale-al"
      metaDescription="Licensed residential electrician serving homeowners in Cottondale, AL."
      h1="Residential Electrician in Cottondale, AL"
      city="Cottondale"
      hero={IMG.hero}
      intro="Burnett Electric provides Cottondale homeowners with dependable, licensed residential electrical services. From troubleshooting tripping breakers to whole-home rewiring, our team delivers prompt, honest service."
      landmarks={["University Mall Area", "Cottondale Elementary", "Hurricane Creek Park", "US Highway 11"]}
      benefits={[
        { title: "Prompt Local Response", desc: "Located just minutes away in Tuscaloosa County, we provide fast dispatch for Cottondale electrical needs." },
        { title: "Older-Home Wiring", desc: "Specializing in updating aluminum wiring, ungrounded outlets, and older panels in established neighborhoods." },
        { title: "Storm-Ready Solutions", desc: "Whole-home surge protection and generator installations to withstand severe Alabama weather." },
        { title: "Breaker & Panel Repairs", desc: "Accurate diagnostic meter testing to fix warm outlets, humming panels, and nuisance breaker trips." },
        { title: "100% Upfront Pricing", desc: "Written, itemized quotes before any work begins. No hidden travel fees or unexpected add-ons." },
        { title: "Licensed & Insured", desc: "State-certified electrical contractor strictly adhering to National Electrical Code standards." },
      ]}
      faqs={[
        { q: "Are your electricians licensed in Cottondale?", a: "Yes. Burnett Electric is fully licensed, insured, and certified for all residential electrical repairs and installations in Tuscaloosa County." },
        { q: "How quickly can you dispatch to a home in Cottondale?", a: "For emergencies involving sparking panels, burning odors, or sudden power loss, we prioritize same-day dispatch. Standard service visits are scheduled within 24 to 48 hours." },
        { q: "Do you fix aluminum wiring in older Cottondale homes?", a: "Yes. Many homes built in the 1960s and 1970s feature aluminum branch wiring. We install code-compliant Copalum or AlumiConn connectors to prevent overheating and fire risks." },
        { q: "Do you provide free upfront estimates?", a: "We provide upfront, transparent pricing before starting any physical work so you always know the exact cost." },
      ]}
    >
      <h2>Dependable Electrical Services for Cottondale Homeowners</h2>
      <p>
        Situated along the Highway 11 corridor near Hurricane Creek, Cottondale is home to established ranch-style homes and growing residential neighborhoods. Older properties in the area often face electrical issues—such as failing aluminum connections, overloaded 100-amp panels, and weathered service masts.
      </p>
      <p>
        Burnett Electric provides honest troubleshooting and licensed repairs to Cottondale families. Whether you need an emergency <a href="/electrical-repairs-tuscaloosa-al">breaker repair</a>, a modern <a href="/panel-upgrades-tuscaloosa-al">panel upgrade</a>, or dedicated <a href="/ev-charger-installation-tuscaloosa-al">EV charger installation</a>, we deliver reliable, code-compliant craftsmanship.
      </p>
    </LocationPageLayout>
  ),
});
