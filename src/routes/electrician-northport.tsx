import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout } from "@/components/site/LocationPageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/electrician-northport")({
  head: () => ({
    meta: [
      { title: "Electrician in Northport, AL | Burnett Electric" },
      { name: "description", content: "Licensed residential electrician in Northport, AL. Panel upgrades, whole-home rewiring, EV charger installs & fast repairs. Call (205) 634-8185." },
      { property: "og:title", content: "Electrician in Northport, AL | Burnett Electric" },
      { property: "og:description", content: "Licensed residential electrical services for homeowners in Northport, Alabama." },
      { property: "og:url", content: "https://www.burnettelectrictuscaloosa.com/electrician-northport" },
      { property: "og:image", content: `https://www.burnettelectrictuscaloosa.com${IMG.hero}` },
      { name: "twitter:image", content: `https://www.burnettelectrictuscaloosa.com${IMG.hero}` },
    ],
    links: [{ rel: "canonical", href: "https://www.burnettelectrictuscaloosa.com/electrician-northport" }],
  }),
  component: () => (
    <LocationPageLayout
      slug="electrician-northport"
      metaDescription="Licensed residential electrical services for homeowners in Northport, AL."
      h1="Professional Electrician in Northport, AL"
      city="Northport"
      hero={IMG.hero}
      intro="Burnett Electric provides Northport homeowners with dependable, licensed residential electrical services. From historic downtown home rewires to modern subdivision panel upgrades, our local team is here to help."
      landmarks={["Downtown Northport", "Kentuck Art Center", "Lake Lurleen State Park", "Huntington Place", "Northwood Lake", "Bridges of Northport"]}
      benefits={[
        { title: "Residential Specialists", desc: "Expert troubleshooting and modern electrical upgrades tailored for Northport's varied architectural styles." },
        { title: "Prompt Local Dispatch", desc: "Located just across the Black Warrior River, we provide fast response times to all Northport neighborhoods." },
        { title: "Panel & Service Upgrades", desc: "Upgrading outdated 100A panels to 200A capacity to safely support modern HVAC systems and heavy appliances." },
        { title: "Level 2 EV Chargers", desc: "Professional installation of dedicated 240V charging stations for Tesla and all electric vehicles in Northport garages." },
        { title: "100% Permitted Work", desc: "We pull all required electrical permits and coordinate final inspections with City of Northport building inspectors." },
        { title: "Landscape & Dock Power", desc: "Weatherproof outdoor circuits, dock power, and security floodlighting for Lake Lurleen and large yard properties." },
      ]}
      faqs={[
        { q: "Do you coordinate with City of Northport building inspectors?", a: "Yes. All electrical panel upgrades, service changes, and major rewires require permits through the City of Northport Building Inspections Department. We pull the permits and schedule all required inspections." },
        { q: "Do you rewire older homes in Downtown Northport?", a: "Absolutely. We specialize in non-invasive copper rewiring, knob-and-tube removal, and AFCI safety breaker retrofits for historic Northport homes." },
        { q: "Can you install an EV charger at my Northport home?", a: "Yes. We install Level 2 EV charging stations with dedicated 50-amp 240V circuits to ensure safe, fast overnight charging." },
        { q: "What should I do if my breaker keeps tripping during the summer?", a: "A breaker that repeatedly trips when your AC kicks on indicates an overload or failing breaker. We perform diagnostic meter testing to identify the exact fault before it creates a fire hazard." },
      ]}
    >
      <h2>Your Trusted Residential Electrician in Northport, AL</h2>
      <p>
        Whether you live near the historic charm of <strong>Downtown Northport</strong>, in growing subdivisions around <strong>Huntington Place</strong> and <strong>Northwood Lake</strong>, or out towards <strong>Lake Lurleen State Park</strong>, Burnett Electric is proud to be your local neighborhood electrician. We understand the unique electrical demands of Northport's varied housing landscape—from historic renovations to modern smart home additions.
      </p>

      <h3>Rewiring and Upgrading Northport's Older Homes</h3>
      <p>
        Downtown Northport and its surrounding historic districts feature beautiful older homes that often conceal outdated electrical infrastructure. We frequently encounter original <strong>knob-and-tube wiring</strong>, ungrounded two-prong outlets, and outdated fuse boxes that simply can't handle the load of modern appliances, heat pumps, and computers.
      </p>
      <p>
        If you live in one of these classic Northport properties, our licensed electricians specialize in non-invasive <a href="/wiring-upgrades-tuscaloosa-al">whole-home rewiring</a> and <a href="/panel-upgrades-tuscaloosa-al">electrical panel upgrades</a>. We bring your home up to modern National Electrical Code standards without compromising its historic architectural character.
      </p>

      <h3>Common Electrical Upgrades in Northport</h3>
      <p>
        Due to a mix of aging infrastructure in established areas and rapid new residential development, Northport homeowners frequently call us for:
      </p>
      <ul>
        <li><strong>Electrical Panel Upgrades (100A to 200A):</strong> Modern homes require more capacity for high-draw appliances and summer air conditioning. Learn more about our <a href="/panel-upgrades-tuscaloosa-al">panel upgrade services</a>.</li>
        <li><strong>Level 2 EV Charger Installations:</strong> As more Northport residents switch to electric vehicles, we install dedicated 240V circuits for <a href="/ev-charger-installation-tuscaloosa-al">home EV charging stations</a>.</li>
        <li><strong>Flickering Lights & Breaker Troubleshooting:</strong> Fast diagnosis and safe repair for overloaded circuits and failing breakers through our <a href="/electrical-repairs-tuscaloosa-al">electrical repair service</a>.</li>
        <li><strong>Whole-Home Standby Generators:</strong> Severe Alabama thunderstorms frequently cause localized power outages. We install turnkey <a href="/generator-installation-tuscaloosa-al">standby generator systems</a> to keep your family protected.</li>
      </ul>

      <h2>Real Local Service Examples in Northport</h2>
      <p>
        We are deeply embedded in the local community. Recently in the <em>Huntington Place</em> neighborhood, we upgraded an overloaded 100A fuse box to a modern 200A Square D breaker panel with whole-home surge suppression. In the <em>Northwood Lake</em> area, we installed a dedicated 50-amp conduit run for a Tesla Level 2 wall connector. Near the <em>Kentuck Art Center</em>, our team responded to an emergency call to repair a sparking main disconnect, ensuring the homeowner's safety before the weekend.
      </p>

      <h2>Serving Northport and Surrounding Communities</h2>
      <p>
        Our service area covers all of Northport as well as surrounding communities including Samantha, Coker, and West Tuscaloosa County. We know local codes, pull all required permits, and work closely with local utility providers to ensure your electrical repairs and upgrades are completed safely and smoothly.
      </p>
    </LocationPageLayout>
  )
});
