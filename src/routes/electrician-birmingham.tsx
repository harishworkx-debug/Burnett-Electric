import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout } from "@/components/site/LocationPageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/electrician-birmingham")({
  head: () => ({
    meta: [
      { title: "Residential Electrician in Birmingham, AL | Burnett Electric" },
      { name: "description", content: "Specialized residential electrical contractor serving Greater Birmingham, AL. Major panel upgrades, historic home rewires & standby generators by appointment." },
      { name: "robots", content: "index, follow" },
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
      h1="Specialized Residential Electrician in Birmingham, AL"
      city="Birmingham"
      hero={IMG.hero}
      intro="Burnett Electric provides specialized, pre-scheduled residential electrical contracting for homeowners across Greater Birmingham. Headquartered in West Alabama, we travel the I-20/59 corridor specifically for major residential modernizations—including historic plaster home rewires, 200A/400A service panel heavy-ups, and turnkey standby generator installations."
      landmarks={["Downtown Birmingham", "Highland Park", "Forest Park", "Homewood", "Mountain Brook", "Vestavia Hills", "Hoover", "Southside"]}
      benefits={[
        { title: "Major Residential Projects Only", desc: "We focus on whole-house rewiring, 200A/400A panel upgrades, and standby generators—never rushed small repair tickets." },
        { title: "Historic Plaster Preservation", desc: "Specialized non-invasive wall-fishing techniques that route modern copper wire without gutting historic lath and plaster." },
        { title: "Turnkey Standby Generators", desc: "Full installation of Generac whole-home generators with automatic transfer switches for storm outage defense." },
        { title: "I-20/59 Corridor Service", desc: "Pre-scheduled project consultations and dedicated full-day crew dispatch throughout Jefferson and Shelby Counties." },
        { title: "100% Permitted & Inspected", desc: "Fully licensed in Alabama with all work permitted through local municipal inspection departments." },
        { title: "Upfront Written Proposals", desc: "Detailed, fixed line-item pricing with clear timelines before touching a wire. No surprise travel fees." },
      ]}
      faqs={[
        { q: "What types of electrical work do you take in Birmingham?", a: "Because our primary physical headquarters is in West Alabama, our Birmingham operations are dedicated to major scheduled residential installations: complete whole-home copper rewiring, 200A/400A electrical service panel upgrades, whole-house standby generator installations, and high-capacity Level 2 EV charging infrastructure. We do not accept emergency $49 service calls in Birmingham." },
        { q: "How do you coordinate permits with Birmingham and Over-the-Mountain municipalities?", a: "We pull all necessary electrical permits directly through the appropriate local authority—whether that is the City of Birmingham Department of Planning, Engineering & Permits (PEP) or municipal building departments in Mountain Brook, Homewood, Vestavia Hills, or Hoover. We coordinate all rough-in and final inspections." },
        { q: "Can you rewire a 1920s historic home without destroying our original plaster?", a: "Yes. That is one of our key specialties. In neighborhoods like Highland Park and Forest Park, we use flexible drill bits and fiberglass fish rods to pull modern Romex cable through basements, attics, and interior wall bays, preserving your original plaster, moulding, and woodwork." },
        { q: "How does utility coordination work with Alabama Power in Birmingham?", a: "For panel upgrades and service heavy-ups, we coordinate scheduled power disconnect and reconnect windows with Alabama Power's Metro Division, ensuring work is completed cleanly and inspected for same-day power restoration." },
        { q: "Do you install whole-home backup generators in wooded hillside areas?", a: "Yes. Many properties in Vestavia Hills and Mountain Brook experience frequent tree-fall power outages during storms. We perform full load calculations, pour concrete pads, install automatic transfer switches, and coordinate gas connections for turnkey Generac installations." },
      ]}
    >
      <h2>Transparent Service Coverage: How We Serve Greater Birmingham</h2>
      <p>
        At Burnett Electric, we believe total transparency is the foundation of customer trust. We are headquartered in West Alabama (Buhl/Tuscaloosa), and we do not pretend to be a local rapid-response handyman service stationed in downtown Birmingham.
      </p>
      <p>
        Instead, we travel the <strong>I-20/59 corridor</strong> into <strong>Jefferson and Shelby Counties</strong> specifically for <em>major scheduled residential electrical projects</em>. If you are planning a comprehensive home rewire, upgrading an obsolete electrical panel to 200A or 400A, or installing a whole-home standby generator, our dedicated crew arrives fully equipped for a focused, multi-day or full-day project with zero distractions.
      </p>

      <h2>Actual Completed Projects in the Birmingham Metro Area</h2>
      <p>
        Here are examples of the specialized residential work we perform across Greater Birmingham:
      </p>

      <div className="space-y-6 my-8 not-prose">
        <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h3 className="font-display font-bold text-lg text-secondary">Highland Park — 1924 Craftsman Historic Copper Rewire</h3>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-secondary">Historic Preservation</span>
          </div>
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
            A homeowner in historic Highland Park purchased a two-story 1924 Craftsman home with original knob-and-tube wiring concealed behind lath-and-plaster walls. Previous contractors insisted on opening large drywall channels across every room. Burnett Electric executed a non-invasive rewire by accessing wall bays through the unfinished basement and attic crawlspace, replacing obsolete wiring with grounded copper Romex and installing a 200A Square D QO panel with AFCI breakers—saving the homeowner thousands in historic plaster restoration.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h3 className="font-display font-bold text-lg text-secondary">Mountain Brook — 400A Heavy-Up for Luxury Renovation</h3>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-secondary">High-Capacity Service</span>
          </div>
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
            During an extensive kitchen and master suite remodel in Mountain Brook, the existing 200A service could not accommodate two new 5-ton high-efficiency heat pumps, an induction cooktop, and two Level 2 EV charging stations. We engineered and installed a 400A dual-panel service entrance with utility coordination through Alabama Power Metro Division and municipal inspection sign-off.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h3 className="font-display font-bold text-lg text-secondary">Vestavia Hills — Turnkey 24kW Standby Generator Installation</h3>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-secondary">Storm Resilience</span>
          </div>
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
            Located on a wooded hillside lot in Vestavia Hills, the home experienced recurring multi-day power outages whenever severe thunderstorm winds downed oak branches across neighborhood power lines. We installed a 24kW Generac whole-home standby generator with a 200A automatic transfer switch (ATS), providing seamless emergency power for the entire household within 10 seconds of grid failure.
          </p>
        </div>
      </div>

      <h2>Location-Specific Electrical Challenges in Birmingham Homes</h2>
      <p>
        Homes in Birmingham's established historic and Over-the-Mountain neighborhoods present distinct engineering challenges:
      </p>
      <ul>
        <li><strong>Plaster & Lath Wall Cavities:</strong> Historic 1910s–1930s homes in Southside, Highland Park, and Forest Park have hard plaster backed by wood lath. Standard cutting tools crack plaster keys; our electricians use specialized oscillating diamond blades and flexible fish rods to route cables without structural cracking.</li>
        <li><strong>Aging Federal Pacific & Zinsco Panels:</strong> Mid-century homes built across Homewood and Mountain Brook between 1955 and 1980 frequently still house Federal Pacific Stab-Lok or Zinsco breaker panels. Alabama property insurers regularly mandate their removal prior to closing.</li>
        <li><strong>Attic Insulation Over Knob-and-Tube:</strong> Many Birmingham homes had blown-in cellulose or fiberglass insulation added in recent decades directly over active knob-and-tube wiring. Because knob-and-tube relies on free-air circulation to dissipate heat, trapped heat creates a severe fire risk that requires immediate copper conversion.</li>
      </ul>

      <h2>Genuine Customer Feedback</h2>
      <div className="p-6 rounded-2xl bg-surface border border-border my-6 not-prose">
        <p className="italic text-secondary text-sm leading-relaxed">
          "Shad did what he said he would and did a great job! He was very responsive to my call. Would definitely use him again and will recommend him to others!"
        </p>
        <div className="mt-3 text-xs font-semibold text-muted-foreground">— Gena Kilgore, Verified Alabama Customer</div>
      </div>

      <h2>Scheduling a Consultation for Your Birmingham Project</h2>
      <p>
        If you own a home in Greater Birmingham and are planning a major electrical panel replacement, whole-house rewire, or standby generator installation, contact Burnett Electric directly at <strong>(205) 634-8185</strong>. We schedule dedicated on-site project evaluations with clear, itemized written proposals.
      </p>
    </LocationPageLayout>
  ),
});
