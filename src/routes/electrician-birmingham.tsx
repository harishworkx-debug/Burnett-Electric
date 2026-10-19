import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout } from "@/components/site/LocationPageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/electrician-birmingham")({
  head: () => ({
    meta: [
      { title: "Residential Electrician in Birmingham, AL | Burnett Electric" },
      { name: "description", content: "Specialized residential electrical contractor serving Greater Birmingham, AL. Major panel upgrades, historic home rewires & standby generators by appointment." },
      { property: "og:title", content: "Residential Electrician in Birmingham, AL | Burnett Electric" },
      { property: "og:description", content: "Specialized residential electrical contractor serving Birmingham, AL for major rewires, panels, and generators." },
      { property: "og:url", content: "https://www.burnettelectrictuscaloosa.com/electrician-birmingham" },
      { property: "og:image", content: `https://www.burnettelectrictuscaloosa.com${IMG.hero}` },
      { name: "twitter:image", content: `https://www.burnettelectrictuscaloosa.com${IMG.hero}` },
    ],
    links: [{ rel: "canonical", href: "https://www.burnettelectrictuscaloosa.com/electrician-birmingham" }],
  }),
  component: () => (
    <LocationPageLayout
      slug="electrician-birmingham"
      metaDescription="Specialized residential electrical contractor serving Greater Birmingham, AL for major projects."
      h1="Residential Electrician in Birmingham, AL"
      city="Birmingham"
      hero={IMG.hero}
      intro="Burnett Electric delivers specialized residential electrical services to homeowners across Greater Birmingham. We focus on major scheduled projects—including historic plaster rewiring, 200A/400A panel upgrades, and standby generator installations."
      landmarks={["Downtown Birmingham", "Hoover", "Vestavia Hills", "Homewood", "Mountain Brook", "Highland Park", "Forest Park"]}
      benefits={[
        { title: "Major Residential Projects", desc: "Specializing in large-scale residential rewiring, 200A/400A panel upgrades, and comprehensive electrical modernizations." },
        { title: "Historic Plaster Expertise", desc: "Decades of experience updating outdated electrical systems in classic historic homes without destroying historic plaster architecture." },
        { title: "Standby Power Solutions", desc: "Turnkey installation of whole-home standby generators to protect Birmingham homes during severe storm power outages." },
        { title: "Scheduled Appointments", desc: "We travel the I-20/59 corridor for pre-scheduled, major residential installations with clear upfront pricing." },
        { title: "Full Code Compliance", desc: "Licensed in Alabama and strictly compliant with local municipal permitting and National Electrical Code standards." },
        { title: "EV Charger Installations", desc: "Dedicated high-amp 240V charging station installations for garages and residential carports across the metro area." },
      ]}
      faqs={[
        { q: "What types of electrical work do you take in Birmingham?", a: "Because we dispatch from West Alabama, our Birmingham services are specialized for major scheduled residential projects: complete home rewiring, 200A/400A service panel replacements, and whole-home standby generator installations." },
        { q: "Are your electricians licensed to work in Birmingham municipalities?", a: "Yes. Burnett Electric is fully licensed, insured, and certified to meet all building and electrical code requirements across Alabama, including Birmingham, Mountain Brook, Homewood, and Hoover." },
        { q: "Can you upgrade the electrical panel in my historic Birmingham home?", a: "Yes. We specialize in upgrading fuse boxes and outdated panels in neighborhoods like Forest Park and Highland Park to safely accommodate modern electrical loads without damaging original architectural details." },
        { q: "Do you install whole-home backup generators?", a: "Yes. We install and service Generac whole-home standby generators with automatic transfer switches to keep your power on during severe weather." },
      ]}
    >
      <h2>Specialized Residential Electrical Services for Greater Birmingham</h2>
      <p>
        While Burnett Electric is headquartered in West Alabama, our reputation for honest pricing, meticulous code compliance, and careful craftsmanship frequently brings us up the I-20/59 corridor to serve the <strong>Greater Birmingham Metro Area</strong>.
      </p>
      <p>
        <strong>Service Scope Notice:</strong> To ensure high standards and reliability, our Birmingham availability is focused on <em>major scheduled residential projects</em>—including comprehensive <a href="/panel-upgrades-tuscaloosa-al">electrical panel upgrades</a>, <a href="/wiring-upgrades-tuscaloosa-al">historic home rewiring</a>, and <a href="/generator-installation-tuscaloosa-al">whole-home standby generator installations</a>.
      </p>

      <h3>Historic Home Rewiring in Highland Park & Forest Park</h3>
      <p>
        Birmingham is celebrated for its historic architecture, from Victorian and Craftsman homes in <strong>Highland Park</strong> to stately properties in <strong>Forest Park</strong> and <strong>Southside</strong>. However, the original electrical systems behind those plaster walls—such as knob-and-tube wiring, ungrounded receptacles, and 60-amp fuse boxes—pose genuine fire risks under modern loads.
      </p>
      <p>
        Our electricians specialize in non-invasive copper rewiring techniques. We route modern grounded Romex cables, install Arc-Fault Circuit Interrupters (AFCI), and preserve your historic woodwork and plaster.
      </p>

      <h3>Serving Homewood, Mountain Brook & Over the Mountain</h3>
      <p>
        We regularly complete scheduled electrical modernizations in Over the Mountain communities—including <strong>Homewood</strong>, <strong>Mountain Brook</strong>, <strong>Vestavia Hills</strong>, and <strong>Hoover</strong>. Whether you need a 400-amp service heavy-up for a luxury renovation, dedicated <a href="/ev-charger-installation-tuscaloosa-al">Level 2 EV charger wiring</a>, or sophisticated <a href="/outdoor-wiring-tuscaloosa-al">landscape and security lighting</a>, we deliver the precision work Birmingham homeowners expect.
      </p>

      <h3>Standby Generators for Storm Resilience</h3>
      <p>
        Severe Alabama weather frequently knocks out power across the Birmingham valley. We help homeowners prepare by installing turnkey standby generator systems with automatic transfer switches, ensuring uninterrupted power for HVAC, refrigeration, and home security.
      </p>
    </LocationPageLayout>
  )
});
