import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/wiring-upgrades-tuscaloosa-al")({
  head: () => ({
    meta: [
      { title: "Wiring & Rewiring in Tuscaloosa, AL | Burnett Electric" },
      { name: "description", content: "Safe whole-home rewiring, knob-and-tube removal, and aluminum wiring updates in Tuscaloosa, AL. Modernize your home safely. Call (205) 634-8185." },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Wiring & Rewiring in Tuscaloosa, AL | Burnett Electric" },
      { property: "og:description", content: "Safe and reliable whole-home rewiring and electrical updates in Tuscaloosa, AL." },
      { property: "og:url", content: "https://www.burnettelectrictuscaloosa.com/wiring-upgrades-tuscaloosa-al" },
      { property: "og:image", content: `https://www.burnettelectrictuscaloosa.com${IMG.wiring}` },
      { name: "twitter:image", content: `https://www.burnettelectrictuscaloosa.com${IMG.wiring}` },
    ],
    links: [{ rel: "canonical", href: "https://www.burnettelectrictuscaloosa.com/wiring-upgrades-tuscaloosa-al" }],
  }),
  component: () => (
    <ServicePageLayout
      slug="wiring-upgrades-tuscaloosa-al"
      metaTitle="Wiring & Rewiring in Tuscaloosa, AL | Burnett Electric"
      metaDescription="Safe whole-home rewiring, knob-and-tube removal, and aluminum wiring updates in Tuscaloosa, AL."
      h1="Whole-Home Wiring & Rewiring in Tuscaloosa, AL"
      eyebrow="Safe, Non-Invasive Modernization"
      hero={IMG.wiring}
      intro="Outdated, brittle, or ungrounded wiring is one of the leading causes of residential electrical fires in West Alabama. Burnett Electric specializes in non-invasive whole-home rewiring, knob-and-tube abatement, and aluminum wiring remediation for historic and mid-century Tuscaloosa properties."
      benefits={[
        { title: "Knob-and-Tube Abatement", desc: "Decommissioning ungrounded 1920s–1940s wiring to protect against concealed insulation fire hazards." },
        { title: "Aluminum Wiring Remediation", desc: "Torque-calibrated AlumiConn and Copalum pig-tailing to eliminate hazardous thermal expansion at connections." },
        { title: "Equipment Ground Protection", desc: "Routing dedicated grounding conductors to safeguard computers, modern entertainment centers, and appliances." },
        { title: "Non-Invasive Wall Fishing", desc: "Specialized cable-routing methods through attics and crawl spaces that preserve historic plaster and drywall." },
        { title: "AFCI Arc-Fault Protection", desc: "Installing modern dual-function arc-fault breakers to detect dangerous sparking behind walls instantly." },
        { title: "Insurance & Code Certification", desc: "Passing City of Tuscaloosa inspections to satisfy strict homeowner insurance underwriter requirements." },
      ]}
      problems={[
        "Ungrounded two-prong receptacles that cannot safely power modern 3-prong electronics",
        "Homeowners insurance threatening non-renewal or cancellation due to original knob-and-tube wiring",
        "Cloth-jacketed Romex with brittle, crumbly insulation inside light switch and outlet boxes",
        "Outlets or wall switch faceplates that feel unusually warm to the touch or emit a faint ozone smell",
        "Aluminum branch wiring installed between 1965 and 1973 showing signs of loose, sparking connections",
        "Planning a major kitchen, bathroom, or historic home renovation requiring modern NEC code compliance",
      ]}
      process={[
        { title: "Circuit Audit & Mapping", desc: "We map out all existing branch circuits, identify ungrounded runs, and calculate room-by-room load requirements." },
        { title: "Non-Invasive Cable Routing", desc: "We fish modern solid-copper NM-B Romex through attics, crawl spaces, and wall cavities without opening drywall." },
        { title: "Device Termination & Grounding", desc: "We install tamper-resistant receptacles, dedicated appliance circuits, and AFCI/GFCI safety breakers." },
        { title: "Testing & City Inspection", desc: "We verify line resistance, polarity, and trip sensitivity before scheduling the final municipal inspection." },
      ]}
      faqs={[
        { q: "Is knob-and-tube wiring dangerous in Tuscaloosa homes?", a: "Yes. Knob-and-tube wiring lacks an equipment grounding conductor and was designed to dissipate heat into open air. When modern thermal insulation is blown into attics or walls over K&T, the conductors can overheat and ignite nearby building materials. Furthermore, age makes the cloth sheath brittle and prone to bare wire exposure." },
        { q: "How do you rewire an older home without tearing down historic plaster?", a: "We specialize in non-invasive fishing techniques. By accessing wall cavities through crawl spaces, unfinished attics, and behind baseboards, our electricians pull modern Romex cable through walls with minimal access holes, keeping historic architecture intact." },
        { q: "Do I have to replace all aluminum wiring in my 1970s home?", a: "Not necessarily. If a complete whole-house rewire is not practical, code-approved remediation using AlumiConn or Copalum connectors with anti-oxidant paste at every junction box safely stabilizes the aluminum-to-copper connections, passing insurance inspections." },
        { q: "Can I just replace a 2-prong outlet with a 3-prong outlet?", a: "No. Replacing a two-prong outlet with a three-prong receptacle without connecting an actual equipment ground creates a dangerous 'false ground' or 'bootleg ground' that deceives plug-in testers and puts your family at risk of electric shock. Code requires either a new grounded circuit or an approved GFCI receptacle labeled 'No Equipment Ground'." },
      ]}
      related={[
        { to: "/electrical-repairs-tuscaloosa-al", label: "Electrical Repairs" },
        { to: "/panel-upgrades-tuscaloosa-al", label: "Panel Upgrades" },
      ]}
    >
      <h2>Historic Home Rewiring in Tuscaloosa: Preserving Plaster & Character</h2>
      <p>
        From Victorian and Craftsman bungalows in <strong>Pinehurst</strong> and <strong>Audubon Place</strong> to historic mid-century properties near <strong>The University of Alabama</strong>, older homes give Tuscaloosa its distinctive architectural soul. However, the electrical wiring hidden inside those lath-and-plaster walls was engineered for an era with only a few 60-watt light bulbs and a radio.
      </p>
      <p>
        Today, central HVAC systems, desktop computers, high-wattage hair dryers, and kitchen appliances overload these legacy circuits. Burnett Electric uses non-invasive wire fishing methods. Rather than gutting historic plaster walls, our electricians access wall bays through basements, crawl spaces, and attics using flexible bits and fiberglass fish rods, preserving your home's historic moulding, woodwork, and plaster surfaces.
      </p>

      <h2>The Truth About 1965–1973 Aluminum Branch Circuit Wiring</h2>
      <p>
        During the copper shortages of the Vietnam War era, tens of thousands of homes across Alabama were wired with single-strand aluminum conductors. Decades of engineering research by the U.S. Consumer Product Safety Commission (CPSC) revealed critical safety risks:
      </p>
      <ul>
        <li><strong>Thermal Creep & Expansion:</strong> Aluminum expands at a significantly higher rate than copper when carrying electric current. As circuits heat and cool, the aluminum wire creeps out from under screw terminals, creating high-resistance gaps.</li>
        <li><strong>Oxidation Resistance:</strong> When aluminum oxidizes upon exposure to oxygen, the resulting aluminum oxide acts as an electrical insulator. Unlike copper oxide (which remains conductive), aluminum oxide causes connections to overheat dangerously under everyday household loads.</li>
        <li><strong>Fatigue & Brittleness:</strong> Aluminum is more pliable and fractures easily under minor bending, leading to concealed breaks inside switch boxes.</li>
      </ul>
      <p>
        We offer two proven, code-compliant solutions: complete copper rewiring, or torque-calibrated <strong>AlumiConn / Copalum pig-tailing</strong> that bridges your existing aluminum runs to copper pigtails with anti-oxidant compound, fully satisfying Alabama homeowners insurance requirements.
      </p>

      <h2>Safe Modernization of Ungrounded 2-Prong Outlets</h2>
      <p>
        If your Tuscaloosa home still has two-prong receptacles, your expensive computers, smart TVs, and kitchen appliances are operating without surge diversion and shock protection. Under <strong>NEC Article 406.4(D)(2)</strong>, our electricians provide two safe upgrade paths:
      </p>
      <ol>
        <li><strong>Dedicated Copper Grounding Circuits:</strong> Pulling new 12/2 or 14/2 Romex cable with solid copper equipment grounding conductors directly back to the main service panel bus bar.</li>
        <li><strong>GFCI Branch Circuit Protection:</strong> Installing Ground Fault Circuit Interrupter (GFCI) receptacles at the start of a branch circuit, providing life-safety shock protection and legal 3-prong device acceptance marked with official 'No Equipment Ground' labels.</li>
      </ol>

      <h2>Real Historic Rewiring Projects in Tuscaloosa</h2>
      <div className="space-y-6 my-6 not-prose">
        <div className="p-6 rounded-2xl bg-card border border-border shadow-card flex flex-col sm:flex-row gap-5 items-start">
          <img
            src={IMG.wiring}
            alt="Non-invasive historic home copper rewiring in Audubon Place Tuscaloosa"
            className="w-full sm:w-44 h-36 object-cover rounded-xl shrink-0 border border-border"
            loading="lazy"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="font-display font-bold text-lg text-secondary">Audubon Place — 1930s Historic Craftsman Full Rewire</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-secondary">Plaster Preserved</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              Decommissioned active knob-and-tube wiring throughout a two-story Craftsman home near University Blvd. Accessed wall bays cleanly from the attic crawlspace and basement, routing grounded Romex NM-B cable to 32 new tamper-resistant receptacles and AFCI breakers with zero damage to original lath-and-plaster walls.
            </p>
          </div>
        </div>
      </div>
    </ServicePageLayout>
  ),
});
