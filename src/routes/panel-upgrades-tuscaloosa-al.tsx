import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/panel-upgrades-tuscaloosa-al")({
  head: () => ({
    meta: [
      { title: "Electrical Panel Upgrades in Tuscaloosa, AL | Burnett Electric" },
      { name: "description", content: "Professional electrical panel upgrades in Tuscaloosa, AL. Replace outdated fuse boxes and ensure your home's electrical system can handle modern demands safely." },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Electrical Panel Upgrades in Tuscaloosa, AL | Burnett Electric" },
      { property: "og:description", content: "Safe and reliable electrical panel upgrades for homes in Tuscaloosa." },
      { property: "og:url", content: "https://www.burnettelectrictuscaloosa.com/panel-upgrades-tuscaloosa-al" },
      { property: "og:image", content: `https://www.burnettelectrictuscaloosa.com${IMG.panel}` },
      { name: "twitter:image", content: `https://www.burnettelectrictuscaloosa.com${IMG.panel}` },
    ],
    links: [{ rel: "canonical", href: "https://www.burnettelectrictuscaloosa.com/panel-upgrades-tuscaloosa-al" }],
  }),
  component: () => (
    <ServicePageLayout
      slug="panel-upgrades-tuscaloosa-al"
      metaTitle="Electrical Panel Upgrades in Tuscaloosa, AL"
      metaDescription="Professional electrical panel upgrades in Tuscaloosa, AL."
      h1="Electrical Panel Upgrades in Tuscaloosa, AL"
      eyebrow="Safe & Modern Power"
      hero={IMG.panel}
      intro="Your electrical panel is the heart of your home's power system. If you live in an older home in Tuscaloosa, AL, your current panel might be overwhelmed by modern appliances. We provide safe, efficient 200-amp and 400-amp panel upgrades."
      benefits={[
        { title: "Increased Capacity", desc: "Easily power modern HVAC systems, hot tubs, and heavy appliances in your Tuscaloosa home." },
        { title: "Enhanced Safety", desc: "Replace outdated or dangerous panels (like Federal Pacific or Zinsco) that are known fire hazards." },
        { title: "Code Compliance", desc: "Ensure your home meets current electrical codes, essential for selling or insuring your property." },
        { title: "Room to Grow", desc: "Add new circuits easily for future home additions or renovations." },
        { title: "Surge Protection", desc: "Integrate whole-home surge protection directly at the source during your panel upgrade." },
        { title: "Reliable Performance", desc: "Say goodbye to constantly tripping breakers and flickering lights." },
      ]}
      problems={[
        "Flipping tripped breakers on a daily or weekly basis",
        "Hearing buzzing or crackling sounds coming from the breaker box",
        "Smelling a burning odor near your electrical panel",
        "Needing adapters to plug in three-prong cords",
        "Planning to buy an electric vehicle or install a hot tub",
        "Home inspector flagging an outdated fuse box during a sale",
      ]}
      process={[
        { title: "Evaluation", desc: "We calculate your Tuscaloosa home's electrical load to determine the right panel size." },
        { title: "Permitting", desc: "We secure all required permits from the city of Tuscaloosa and coordinate with the power company." },
        { title: "Installation", desc: "We carefully remove the old panel and install the new one, minimizing your downtime." },
        { title: "Inspection", desc: "We handle the final inspection to guarantee the work is 100% up to code." },
      ]}
      faqs={[
        { q: "How long does a panel upgrade take in Tuscaloosa?", a: "Most residential panel upgrades can be completed in a single day. We coordinate with the utility company to minimize the time you are without power." },
        { q: "Do I need a 200-amp or 400-amp panel?", a: "For most modern homes, a 200-amp panel is standard. If you have a very large home, multiple EVs, or heavy electric heating, 400 amps might be necessary." },
        { q: "Can I replace the panel myself?", a: "No. Panel upgrades require pulling permits, disconnecting utility power, and working with lethal voltages. It must be done by a licensed electrician." },
        { q: "Will upgrading my panel lower my electric bill?", a: "While it won't directly lower power consumption, it ensures your appliances run efficiently and safely without overloading circuits." },
      ]}
      related={[
        { to: "/wiring-upgrades-tuscaloosa-al", label: "Wiring Upgrades" },
        { to: "/electrical-repairs-tuscaloosa-al", label: "Electrical Repairs" },
      ]}
    >
      <h2>The Technical Anatomy of a Code-Compliant 200-Amp Panel Upgrade</h2>
      <p>
        Upgrading your electrical panel isn't just swapping out a metal box on your wall. It is a complete electrical service modernization from the utility connection point down to the earth grounding system. At Burnett Electric, every service change is engineered to comply with the latest <strong>National Electrical Code (NEC)</strong> and local City of Tuscaloosa and City of Northport building standards.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 my-6 not-prose">
        <div className="p-5 rounded-2xl bg-card border border-border">
          <div className="font-display font-bold text-base text-secondary">1. Exterior Service Mast & Weatherhead</div>
          <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
            We install heavy-duty 2-inch rigid galvanized steel or Schedule 80 PVC conduit through the roofline or down the exterior siding, complete with an approved weatherhead and drip loops to prevent rainwater intrusion into your meter.
          </p>
        </div>
        <div className="p-5 rounded-2xl bg-card border border-border">
          <div className="font-display font-bold text-base text-secondary">2. Alabama Power Approved 200A Meter Base</div>
          <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
            We mount a utility-rated 200A meter enclosure meeting Alabama Power (APCO) specifications, wired with properly sized 4/0 aluminum or 2/0 copper service entrance conductors.
          </p>
        </div>
        <div className="p-5 rounded-2xl bg-card border border-border">
          <div className="font-display font-bold text-base text-secondary">3. Dual Grounding Electrode System</div>
          <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
            Code strictly mandates two 5/8" x 8-foot copper-clad grounding rods driven at least 6 feet apart into virgin earth, bonded with a continuous #4 bare copper grounding electrode conductor and an intersystem bonding bridge.
          </p>
        </div>
        <div className="p-5 rounded-2xl bg-card border border-border">
          <div className="font-display font-bold text-base text-secondary">4. Copper-Bus Breaker Panel & Surge Protection</div>
          <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
            We install premium Square D QO or Siemens panels with solid copper bus bars, dual-function AFCI/GFCI breakers, and a Type 2 Whole-Home Surge Protective Device (SPD) to shield electronics from lightning strikes.
          </p>
        </div>
      </div>

      <h2>Dangerous Electrical Panels We Frequently Replace in Tuscaloosa</h2>
      <p>
        Many homes built in Tuscaloosa and Northport between 1950 and 1990 still operate on legacy panels that have been identified as severe fire and safety hazards. Homeowners insurance carriers across Alabama are increasingly requiring immediate replacement of these units:
      </p>
      <ul>
        <li><strong>Federal Pacific Electric (FPE) Stab-Lok:</strong> Independent laboratory testing revealed that FPE breakers fail to trip during sustained overloads in up to 60% of tests. The breakers often jam in the "ON" position while conductors overheat behind your walls.</li>
        <li><strong>Zinsco / Sylvania Panels:</strong> Zinsco panels feature an aluminum bus bar design prone to chemical corrosion and galvanic reactions. Over time, the breaker contacts fuse directly to the bus bar, rendering the breaker impossible to turn off even in a short-circuit emergency.</li>
        <li><strong>Split-Bus Panels:</strong> Common in 1960s and 1970s Alabama subdivisions, split-bus panels have no single main breaker. Turning off power requires throwing up to six different disconnect handles, violating modern single-motion emergency shutdown codes.</li>
        <li><strong>60-Amp or 100-Amp Fuse Boxes:</strong> Outdated glass fuse boxes were built for a time before microwave ovens, heat pumps, EV chargers, and central air conditioning. They create severe overload risks and are often unsafely bridged with pennies or oversized fuses.</li>
      </ul>

      <h2>Real Completed Panel Upgrade Projects in West Alabama</h2>
      <p>
        We stand behind our craftsmanship with real, verifiable local projects across our community:
      </p>

      <div className="space-y-4 my-6 not-prose">
        <div className="p-6 rounded-2xl bg-card border border-border">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="font-display font-bold text-lg text-secondary">Huntington Place, Northport — 100A to 200A Heavy-Up</span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-secondary">Completed in 1 Day</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            The homeowner purchased a modern Tesla Model Y and wanted a Level 2 48-amp home charger, but their 1982 100-amp panel was already at maximum load. We pulled the permit through the City of Northport, coordinated morning disconnect with Alabama Power, installed a 200-amp Square D QO panel with a Type 2 surge protector, and passed municipal inspection by 3:30 PM with power fully restored.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-card border border-border">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="font-display font-bold text-lg text-secondary">Pinehurst Historic District, Tuscaloosa — FPE Panel Replacement</span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-secondary">Insurance Requirement</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            During a homeowner's insurance renewal inspection, an insurance underwriter flagged an original Federal Pacific Stab-Lok panel. We completed a clean service change, routed new grounding conductors to two 8-foot ground rods, relabeled all circuits accurately, and provided the homeowner with a signed municipal inspection certificate to preserve their insurance policy.
          </p>
        </div>
      </div>

      <h2>How We Manage Your Utility Coordination & Inspection</h2>
      <p>
        A main panel upgrade requires coordination between your electrician, the City building department, and Alabama Power. Burnett Electric manages the entire workflow so you never have to navigate municipal bureaucracy:
      </p>
      <ol>
        <li><strong>Permit Acquisition:</strong> We pull the official electrical permit with the City of Tuscaloosa or City of Northport Building Inspections Department.</li>
        <li><strong>Alabama Power Outage Scheduling:</strong> We schedule a designated morning meter disconnect window with Alabama Power.</li>
        <li><strong>Installation Work:</strong> We remove the hazardous enclosure, install the new 200A panel, land all circuit breakers, install dual ground rods, and torque all lugs to manufacturer specifications.</li>
        <li><strong>City Inspection & Power Cut-In:</strong> The city electrical inspector verifies the installation and releases the permit to Alabama Power for immediate meter re-energization.</li>
      </ol>
    </ServicePageLayout>
  ),
});
