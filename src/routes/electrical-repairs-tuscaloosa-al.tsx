import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/electrical-repairs-tuscaloosa-al")({
  head: () => ({
    meta: [
      { title: "Electrical Repairs in Tuscaloosa, AL | Burnett Electric" },
      { name: "description", content: "Fast, licensed residential electrical repairs in Tuscaloosa, AL. Safe fixes for tripping breakers, flickering lights, GFCI outlets, and wiring. Call (205) 634-8185." },
      { property: "og:title", content: "Electrical Repairs in Tuscaloosa, AL | Burnett Electric" },
      { property: "og:description", content: "Residential troubleshooting, breaker repair, and outlet repairs in Tuscaloosa, AL." },
      { property: "og:url", content: "https://www.burnettelectrictuscaloosa.com/electrical-repairs-tuscaloosa-al" },
      { property: "og:image", content: `https://www.burnettelectrictuscaloosa.com${IMG.repair}` },
      { name: "twitter:image", content: `https://www.burnettelectrictuscaloosa.com${IMG.repair}` },
    ],
    links: [{ rel: "canonical", href: "https://www.burnettelectrictuscaloosa.com/electrical-repairs-tuscaloosa-al" }],
  }),
  component: () => (
    <ServicePageLayout
      slug="electrical-repairs-tuscaloosa-al"
      metaTitle="Electrical Repairs in Tuscaloosa, AL | Burnett Electric"
      metaDescription="Need fast, code-compliant electrical repairs in Tuscaloosa, AL? We offer expert breaker replacement, outlet repair, and troubleshooting for residential homes."
      h1="Electrical Repairs in Tuscaloosa, AL"
      eyebrow="Residential Electrical Repairs"
      hero={IMG.repair}
      intro="Electrical issues can be disruptive and dangerous. Burnett Electric provides Tuscaloosa homeowners with licensed residential electrical repair. Whether you need precise fault troubleshooting, breaker replacement, or a fix for flickering lights, our experienced electricians are here to restore your safety."
      benefits={[
        { title: "Accurate Diagnostic Troubleshooting", desc: "We don't guess. We use precision diagnostic meters and circuit tracers to pinpoint faults behind walls, saving you unnecessary drywall repairs." },
        { title: "Upfront Itemized Pricing", desc: "You'll always receive a clear, written quote after our diagnostic evaluation before any physical repairs begin. No surprise travel fees, ever." },
        { title: "Fully Stocked Service Vans", desc: "Our vans arrive stocked with standard residential circuit breakers, GFCI outlets, diagnostic meters, and supplies to resolve most common issues in a single visit." },
        { title: "Circuit & Panel Safety Check", desc: "Every repair includes a thorough diagnostic inspection of the affected circuit and breaker connection to ensure long-term home safety." },
        { title: "Priority Emergency Response", desc: "We provide priority same-day response for dangerous residential emergencies: sparking panels, burning plastic odors, or total power loss." },
        { title: "Licensed & Insured Electricians", desc: "Our electricians are fully licensed in Alabama, background-checked, and strictly adhere to the latest National Electrical Code (NEC) standards." },
      ]}
      problems={[
        "Lights flickering or dimming unexpectedly when major appliances like central AC or dryers kick on.",
        "Outlets that are warm to the touch, sparking when plugged in, or show scorch marks around faceplates.",
        "Circuit breakers that trip repeatedly under normal everyday household appliance use.",
        "Buzzing, crackling, or humming sounds originating from the breaker panel or wall switches.",
        "Half of the house abruptly losing power while other circuits remain on (phase loss).",
        "GFCI outlets in kitchens, bathrooms, or garages that refuse to reset or trip intermittently.",
      ]}
      process={[
        { title: "Dispatch", desc: "Call (205) 634-8185. We discuss your electrical symptoms and dispatch an electrician promptly." },
        { title: "Diagnostic Evaluation", desc: "We inspect the affected circuits with precision meters to locate the true root cause." },
        { title: "Firm Upfront Quote", desc: "We explain the repair in plain English and provide a firm, itemized price before touching a wire." },
        { title: "Code-Compliant Repair", desc: "We complete the repair cleanly to local code, test the entire circuit, and leave your home clean." },
      ]}
      faqs={[
        { q: "Is a frequently tripping breaker dangerous?", a: "Yes. A breaker trips to prevent wires from overheating and catching fire. If it trips repeatedly, it indicates a serious circuit overload, short circuit, or failing breaker that requires professional diagnostic testing." },
        { q: "Why do my lights flicker when the air conditioner turns on?", a: "This is common during hot Alabama summers when an AC compressor draws a massive starting surge. It often signals an overloaded circuit, loose neutral connection, or the need for a dedicated circuit or panel upgrade." },
        { q: "Can I replace a dead outlet myself?", a: "While simple on the surface, incorrect polarity, loose terminal screws, or missing ground wires create serious shock and fire hazards. Having a licensed residential electrician inspect and replace outlets ensures code compliance." },
        { q: "How quickly do you respond to electrical emergencies in Tuscaloosa?", a: "For hazardous emergencies (smoking panels, sparks, burning smells, or sudden loss of essential power), we prioritize same-day emergency dispatch. Non-urgent repairs are scheduled within 24–48 hours." },
      ]}
      related={[
        { to: "/panel-upgrades-tuscaloosa-al", label: "Electrical Panel Upgrades" },
        { to: "/wiring-upgrades-tuscaloosa-al", label: "Wiring & Rewiring Upgrades" },
        { to: "/emergency-electrician-tuscaloosa-al", label: "Emergency Electrical Services" },
        { to: "/outdoor-wiring-tuscaloosa-al", label: "Outdoor Wiring & Lighting" },
      ]}
    >
      <h2>Electrical Repair Services We Handle</h2>
      <p>
        When a switch stops working or an outlet goes dead, it’s not just an inconvenience—it can be a serious fire hazard. As a trusted residential electrician in Tuscaloosa, we handle a wide variety of electrical repairs to keep your home safe and fully functional. Our comprehensive electrical troubleshooting ensures that we fix the root cause, not just the symptom.
      </p>

      <h3>Breaker Repair and Replacement</h3>
      <p>
        If your circuit breaker keeps tripping, it is doing its job by protecting your home from an overload or short circuit. However, a breaker that trips constantly, feels hot to the touch, or smells like burnt plastic needs immediate attention. Our experts provide reliable breaker repair and can upgrade individual circuits to handle the electrical load of modern appliances.
      </p>

      <h3>Outlet Repair and GFCI Repair</h3>
      <p>
        Dead outlets, loose plugs, and two-prong receptacles are common in older Tuscaloosa homes. We offer fast outlet repair services, including upgrading outdated receptacles to modern standards. In areas near water, such as kitchens, bathrooms, and garages, functioning GFCI (Ground Fault Circuit Interrupter) outlets are critical. If your GFCI won't reset, our GFCI repair services will restore your safety compliance.
      </p>

      <h3>Circuit Troubleshooting</h3>
      <p>
        Electrical troubleshooting is one of our core specialties. When half of your house loses power or a specific room goes dark, finding the fault can be difficult without the right tools. Our licensed electricians use advanced diagnostic equipment to trace electrical faults hidden behind your walls without causing unnecessary damage to your home.
      </p>

      <h3>Flickering Lights and Dead Outlets</h3>
      <p>
        Flickering lights can be caused by a loose connection, an overloaded circuit, or issues with your main service drop. If you have dead outlets paired with flickering lights, it could indicate a failing neutral wire, which is a severe safety risk. We efficiently diagnose and resolve these lighting and power issues.
      </p>

      <h3>Electrical Panel Problems</h3>
      <p>
        Your electrical panel is the heart of your home's electrical system. Buzzing noises, rust, scorch marks, or breakers that won't stay on are signs of electrical panel problems. We offer panel maintenance, component replacement, and complete panel upgrades to ensure your home can safely distribute power to all your devices.
      </p>

      <h3>Ceiling Fan Electrical Issues</h3>
      <p>
        A ceiling fan that wobbles, hums loudly, or refuses to turn on may have underlying wiring issues. We don't just install fans; we repair the complex wiring, wall switches, and remote control receivers that power them, ensuring quiet and efficient operation.
      </p>

      <h2>When You Need an Emergency Electrician</h2>
      <p>
        Not all electrical repairs can wait until the next business day. You should call an emergency electrician in Tuscaloosa immediately if you experience:
      </p>
      <ul>
        <li><strong>Sparking or smoking outlets:</strong> This is a clear sign of an arc fault and an imminent fire hazard.</li>
        <li><strong>Burning smells:</strong> An acrid, fishy, or burning plastic smell near switches or the breaker panel indicates melting wire insulation.</li>
        <li><strong>Sudden, isolated power loss:</strong> If your neighbors have power but your home doesn't, or if only one phase of your home's power is out, you have a critical electrical failure.</li>
        <li><strong>Water damage:</strong> If a roof leak or plumbing issue has caused water to enter your electrical panel or light fixtures, do not touch them. Call a professional immediately.</li>
      </ul>

      <h2>Proudly Serving Tuscaloosa and Surrounding Areas</h2>
      <p>
        Burnett Electric is proud to be a leading residential electrician serving the local community. Whether you need a simple outlet repair in Northport, circuit troubleshooting in Buhl, or comprehensive electrical repair in Tuscaloosa, our team is ready to deliver fast, safe, and code-compliant solutions. Don't let electrical problems compromise the safety and comfort of your home.
      </p>
    </ServicePageLayout>
  ),
});
