import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout } from "@/components/site/LocationPageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/electrician-northport")({
  head: () => ({
    meta: [
      { title: "Electrician in Northport, AL | Burnett Electric" },
      { name: "description", content: "residential electrical services in Northport, AL for wiring, panel upgrades, and repairs. Call (205) 634-8185." },
      { property: "og:title", content: "Electrician in Northport, AL | Burnett Electric" },
      { property: "og:description", content: "Residential electrical services for homeowners in Northport, Alabama." },
      { property: "og:url", content: "/electrician-northport" },
      { property: "og:image", content: IMG.hero },
      { name: "twitter:image", content: IMG.hero },
    ],
    links: [{ rel: "canonical", href: "/electrician-northport" }],
  }),
  component: () => (
    <LocationPageLayout
      slug="northport"
      metaDescription="Professional electrical services in Northport, AL."
      h1="Professional Electrician in Northport, AL"
      city="Northport"
      hero={IMG.hero}
      intro="This site provides Northport homeowners with expert residential electrical services."
      landmarks={["Downtown Northport", "Kentuck Art Center", "Lake Lurleen State Park", "Huntington Place", "Northwood Lake", "Bridges of Northport"]}
      benefits={[
        { title: "Residential Experts", desc: "We excel in troubleshooting and upgrading the electrical systems in Northport's varied home styles." },
        { title: "Fast Dispatch", desc: "Located just across the river, we provide rapid response times to all Northport neighborhoods." },
        { title: "Residential Wiring", desc: "Request help getting professional service for wiring, lighting, and electrical upgrades at home." },
        { title: "Panel Upgrades", desc: "Bringing older Northport homes up to modern safety and capacity standards." },
        { title: "Safety Inspections", desc: "Thorough electrical safety checks for peace of mind or real estate transactions." },
        { title: "Outdoor Lighting", desc: "Enhancing curb appeal and security with custom outdoor and landscape lighting." },
      ]}
      faqs={[
        { q: "Are you familiar with Northport's building codes?", a: "Yes, we are fully licensed and strictly adhere to all local building codes and inspection requirements in Northport." },
        { q: "Do you service older homes in Downtown Northport?", a: "Absolutely. We have extensive experience updating knob-and-tube wiring and older panels in historic homes." },
        { q: "Can you install an EV charger at my home?", a: "Yes, we can install Level 2 EV charging stations to ensure safe and fast charging for your electric vehicle." },
        { q: "What should I do if my breaker keeps tripping?", a: "A repeatedly tripping breaker is a sign of an overload or a short. Call us for a diagnostic check before it becomes a hazard." },
      ]}
    >
      <h2>Your Trusted Electrician in Northport, AL</h2>
      <p>
        Whether you live near the historic charm of <strong>Downtown Northport</strong>, the growing neighborhoods around <strong>Huntington Place</strong> and <strong>Northwood Lake</strong>, or out towards the scenic <strong>Lake Lurleen State Park</strong>, Burnett Electric is proud to be your local residential electrician. We understand the unique electrical needs of Northport's varied housing landscape, from historic renovations to modern smart home upgrades.
      </p>

      <h3>Rewiring and Upgrading Northport's Older Homes</h3>
      <p>
        Downtown Northport and its surrounding historic districts feature beautiful older homes that often hide outdated electrical systems. We frequently encounter original <strong>knob-and-tube wiring</strong>, ungrounded two-prong outlets, and outdated fuse boxes that simply can't handle the load of modern appliances and HVAC systems.
      </p>
      <p>
        If you live in one of these classic Northport properties, our licensed electricians specialize in careful, non-invasive rewiring and panel upgrades. We bring your home up to modern safety codes without destroying its historic character.
      </p>

      <h3>Common Electrical Problems in Northport</h3>
      <p>
        Due to a mix of aging infrastructure in some areas and rapid new development in others, Northport homeowners often call us for:
      </p>
      <ul>
        <li><strong>Flickering Lights when the AC Kicks On:</strong> A common issue during hot Alabama summers, often signaling an overloaded circuit or the need for a panel upgrade.</li>
        <li><strong>Storm Damage and Surges:</strong> Northport sees its fair share of severe weather. We install whole-home surge protectors and repair lightning-damaged service drops.</li>
        <li><strong>Outdoor Wiring and Security Lighting:</strong> For homes near Lake Lurleen or with large yards, we frequently install landscape lighting, security floods, and dedicated circuits for outdoor living spaces.</li>
        <li><strong>EV Charger Installations:</strong> As more Northport residents switch to electric vehicles, we are busy installing Level 2 chargers in garages and carports.</li>
      </ul>

      <h2>Real Local Service Examples</h2>
      <p>
        We are deeply embedded in the local community. Recently, we helped a family in the <em>Bridges of Northport</em> neighborhood completely upgrade their home's outdoor lighting for enhanced security. Across town near the <em>Kentuck Art Center</em>, our team rapidly responded to an emergency call to repair a sparking main electrical panel, ensuring the homeowner's safety before the weekend.
      </p>

      <h2>Serving Northport and Nearby Communities</h2>
      <p>
        Our service area extends beyond the immediate city limits. We provide fast, reliable electrical troubleshooting and repair to homeowners in the surrounding communities of Samantha, Coker, and out toward the rural areas of Tuscaloosa County. We know the local codes and work closely with local utility companies to ensure all permits and inspections are handled smoothly.
      </p>
    </LocationPageLayout>
});
