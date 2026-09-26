import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout } from "@/components/site/LocationPageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/electrician-birmingham")({
  head: () => ({
    meta: [
      { title: "Residential Electrician in Birmingham, AL | Burnett Electric" },
      { name: "description", content: "Residential electrical services for homeowners in Birmingham, AL, including repairs, panel upgrades, and wiring." },
      { property: "og:title", content: "Electrician in Birmingham, AL | Burnett Electric" },
      { property: "og:description", content: "Residential electrical services for homeowners in Birmingham." },
      { property: "og:url", content: "/electrician-birmingham" },
      { property: "og:image", content: IMG.hero },
      { name: "twitter:image", content: IMG.hero },
    ],
    links: [{ rel: "canonical", href: "/electrician-birmingham" }],
  }),
  component: () => (
    <LocationPageLayout
      slug="birmingham"
      metaDescription="Residential electrical services for homeowners in Birmingham, AL."
      h1="Expert Electrician in Birmingham, AL"
      city="Birmingham"
      hero={IMG.hero}
      intro="This site provides Birmingham homeowners with expert residential electrical services."
      landmarks={["Downtown Birmingham", "Hoover", "Vestavia Hills", "Homewood", "Mountain Brook", "UAB Campus"]}
      benefits={[
        { title: "Major Residential Projects", desc: "We handle large-scale home wiring, panel upgrades, and comprehensive electrical troubleshooting for homes across the Birmingham metro." },
        { title: "Historic Home Expertise", desc: "We specialize in safely updating outdated electrical systems in classic homes without damaging historic architecture." },
        { title: "Backup Power Solutions", desc: "We install whole-home generators to keep your Birmingham property running during severe storm outages." },
        { title: "Smart Home Integration", desc: "Expert installation of EV chargers, smart lighting, and modern electrical conveniences." },
        { title: "Safety Inspections", desc: "Thorough electrical safety checks for older homes or real estate transactions." },
        { title: "Reliable Dispatch", desc: "We regularly travel the I-20/59 corridor to deliver our top-rated electrical services to Birmingham homeowners." },
      ]}
      faqs={[
        { q: "Do you travel from Tuscaloosa to Birmingham for residential service?", a: "Yes, we regularly dispatch our licensed electricians to the Greater Birmingham area for major repairs, rewires, and panel upgrades." },
        { q: "Are your electricians licensed to work in Birmingham?", a: "Absolutely. Our electricians are fully licensed, insured, and highly trained to meet all local building codes across Alabama, including Birmingham and its surrounding municipalities." },
        { q: "Can you upgrade the electrical panel in my historic home?", a: "Yes, we specialize in upgrading electrical panels and rewiring older homes in neighborhoods like Forest Park and Highland Park to safely handle modern electrical demands." },
        { q: "Do you install whole-home generators?", a: "Yes. With Birmingham's unpredictable severe weather, we frequently install and maintain residential backup generators to keep your home safe and powered." },
      ]}
    >
      <h2>Expert Electrical Services for the Birmingham Metro Area</h2>
      <p>
        While Burnett Electric is proudly based in the Tuscaloosa area, our reputation for honest pricing, meticulous safety standards, and unmatched electrical troubleshooting frequently brings us down the I-20/59 corridor to serve the <strong>Greater Birmingham Metro Area</strong>. From the bustling neighborhoods around <strong>UAB</strong> to the scenic, winding roads of <strong>Over the Mountain</strong> communities, we are committed to providing Birmingham homeowners with premium residential electrical solutions.
      </p>

      <h3>Specializing in Birmingham's Historic Homes</h3>
      <p>
        Birmingham boasts some of the most beautiful historic neighborhoods in the state, including <strong>Highland Park</strong>, <strong>Forest Park</strong>, and <strong>Southside</strong>. However, the electrical systems hiding behind those plaster walls—such as outdated knob-and-tube wiring, old fuse boxes, and ungrounded circuits—were never designed for modern electrical loads.
      </p>
      <p>
        Our electricians have extensive experience safely navigating the challenges of historic home renovations. We perform non-invasive rewires, upgrade electrical panels, and ensure your classic home meets modern safety codes without compromising its historic charm.
      </p>

      <h3>Serving the "Over the Mountain" Communities</h3>
      <p>
        We frequently dispatch our crews to communities south of Red Mountain, including <strong>Homewood</strong>, <strong>Mountain Brook</strong>, <strong>Vestavia Hills</strong>, and <strong>Hoover</strong>. Whether you need a Level 2 EV charger installed in your garage, intricate landscape lighting for your backyard, or a smart home integration upgrade, we deliver the high-end, detail-oriented work these neighborhoods expect.
      </p>

      <h3>Storm Preparedness and Generators</h3>
      <p>
        Severe thunderstorms and occasional tornadoes are a reality in the Birmingham valley. Power outages can last for hours or even days. We help Birmingham homeowners prepare for the worst by installing reliable, whole-home standby generators and whole-home surge protectors. When the grid goes down, we make sure your family stays comfortable and secure.
      </p>
    </LocationPageLayout>
});
