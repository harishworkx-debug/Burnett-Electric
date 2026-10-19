import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout } from "@/components/site/LocationPageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/electrician-brookwood-al")({
  head: () => ({
    meta: [
      { title: "Electrician in Brookwood, AL | Burnett Electric" },
      { name: "description", content: "Licensed residential electrician serving Brookwood, AL. Electrical repairs, panel upgrades, surge protection, and generator wiring. Call (205) 634-8185." },
      { property: "og:title", content: "Electrician in Brookwood, AL | Burnett Electric" },
      { property: "og:description", content: "Licensed residential electrical services for homeowners in Brookwood, Alabama." },
      { property: "og:url", content: "https://www.burnettelectrictuscaloosa.com/electrician-brookwood-al" },
      { property: "og:image", content: `https://www.burnettelectrictuscaloosa.com${IMG.hero}` },
      { name: "twitter:image", content: `https://www.burnettelectrictuscaloosa.com${IMG.hero}` },
    ],
    links: [{ rel: "canonical", href: "https://www.burnettelectrictuscaloosa.com/electrician-brookwood-al" }],
  }),
  component: () => (
    <LocationPageLayout
      slug="electrician-brookwood-al"
      metaDescription="Licensed residential electrician serving homeowners in Brookwood, AL."
      h1="Residential Electrician in Brookwood, AL"
      city="Brookwood"
      hero={IMG.hero}
      intro="Burnett Electric provides Brookwood homeowners with honest, licensed residential electrical services. From panel upgrades and rewiring to storm recovery and generator hookups, we keep your home safe and powered."
      landmarks={["Town of Brookwood", "Brookwood High School", "Hurricane Creek", "Lock 17 Road Corridor", "AL-216"]}
      benefits={[
        { title: "Prompt Local Service", desc: "Fast dispatch across Brookwood and eastern Tuscaloosa County for routine repairs and urgent hazards." },
        { title: "Panel Modernization", desc: "Upgrading overloaded 100-amp panels to 200 amps to safely support central heat pumps and workshops." },
        { title: "Storm & Outage Readiness", desc: "Generator manual transfer switches and whole-home surge protection to guard against severe storms." },
        { title: "Accurate Diagnostics", desc: "Troubleshooting flickering lights, tripping arc-fault breakers, and faulty switches with precision equipment." },
        { title: "100% Upfront Pricing", desc: "Detailed written quotes before any work begins, so there are never any unexpected surprises." },
        { title: "Licensed & Insured", desc: "Full adherence to current National Electrical Code (NEC) standards and Alabama contractor regulations." },
      ]}
      faqs={[
        { q: "Are your electricians licensed to work in Brookwood?", a: "Yes. Burnett Electric is fully licensed, insured, and certified for all residential electrical installations and repairs across Brookwood and Tuscaloosa County." },
        { q: "How quickly can you respond to an electrical emergency in Brookwood?", a: "For critical safety emergencies such as buzzing panels, burning plastic smells, or partial power loss, we prioritize urgent same-day dispatch." },
        { q: "Can you install a generator transfer switch for my Brookwood home?", a: "Yes. We install manual interlock kits and automatic transfer switches so you can safely power your home heating, well pump, or essentials during grid outages." },
        { q: "Do you offer free estimates in Brookwood?", a: "We provide clear, upfront pricing before beginning any physical installation or repair work." },
      ]}
    >
      <h2>Expert Residential Electrical Services in Brookwood, AL</h2>
      <p>
        Nestled in eastern Tuscaloosa County along the Highway 216 and Lock 17 Road corridors, Brookwood features established single-family homes, wooded acreage, and newer subdivisions. Properties surrounded by heavy timber frequently experience storm-related power surges, downed service drops, and grid fluctuations.
      </p>
      <p>
        Whether your home needs a 200-amp <a href="/panel-upgrades-tuscaloosa-al">panel upgrade</a>, emergency <a href="/electrical-repairs-tuscaloosa-al">breaker repair</a>, whole-home <a href="/wiring-upgrades-tuscaloosa-al">rewiring</a>, or safe <a href="/generator-installation-tuscaloosa-al">generator wiring</a>, Burnett Electric brings certified expertise and a 1-year workmanship warranty to every job.
      </p>
    </LocationPageLayout>
  ),
});
