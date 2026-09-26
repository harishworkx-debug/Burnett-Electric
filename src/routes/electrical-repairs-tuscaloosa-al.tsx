import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/electrical-repairs-tuscaloosa-al")({
  head: () => ({
    meta: [
      { title: "Electrical Repairs in Tuscaloosa, AL | Burnett Electric" },
      { name: "description", content: "Residential electrical repairs in Tuscaloosa, AL for flickering lights, breaker trips, outlets, and home wiring issues." },
      { property: "og:title", content: "Expert Electrical Repairs in Tuscaloosa, AL | Burnett Electric" },
      { property: "og:description", content: "Residential troubleshooting and electrical repairs in Tuscaloosa." },
      { property: "og:url", content: "/electrical-repairs-tuscaloosa-al" },
      { property: "og:image", content: IMG.repair },
      { name: "twitter:image", content: IMG.repair },
    ],
    links: [{ rel: "canonical", href: "/electrical-repairs-tuscaloosa-al" }],
  }),
  component: () => (
    <ServicePageLayout
      slug="electrical-repairs-tuscaloosa-al"
      metaTitle="Electrical Repairs in Tuscaloosa, AL | Residential Electrician"
      metaDescription="Need fast and reliable electrical repairs in Tuscaloosa, AL? We offer expert breaker repair, outlet repair, and troubleshooting for residential electrical emergencies."
      h1="Electrical Repairs in Tuscaloosa, AL"
      eyebrow="Residential Repairs"
      hero={IMG.repair}
      intro="Electrical issues can be dangerous and disruptive. Burnett Electric provides Tuscaloosa homeowners with expert residential electrical services. Whether you need electrical troubleshooting, breaker repair, or a fix for flickering lights, our licensed electricians are here to help."
      benefits={[
        { title: "Accurate Troubleshooting", desc: "We don't just guess. We use advanced diagnostic tools to trace faults down to the wire in your Tuscaloosa property, ensuring the repair is done right the first time." },
        { title: "Transparent Pricing", desc: "You'll always know the cost of the electrical repair before we start cutting or drilling. No hidden fees, ever." },
        { title: "Fully Stocked Trucks", desc: "Our vans arrive in Tuscaloosa with the parts needed to fix 90% of common residential electrical issues on the spot, saving you time." },
        { title: "Safety First", desc: "Every electrical repair includes a complimentary safety check of your main electrical panel to prevent future hazards." },
        { title: "Emergency Help", desc: "We provide swift response times for residential electrical emergencies. When you lose power or smell burning plastic, we are ready to assist." },
        { title: "Licensed Professionals", desc: "Our electricians are fully licensed, insured, and highly trained for all your residential electrical repair needs." },
      ]}
      problems={[
        "Lights flickering or dimming unexpectedly in your home, especially when major appliances turn on.",
        "Outlets that are warm to the touch, sparking, or have scorch marks around the faceplate.",
        "Breakers that constantly trip when you use everyday appliances like microwaves or hair dryers.",
        "Buzzing, crackling, or humming sounds coming from the electrical panel or inside the walls.",
        "Half of the house abruptly losing power while the rest of the home remains completely unaffected.",
        "GFCI outlets in the kitchen or bathroom that refuse to reset or trip repeatedly.",
      ]}
      process={[
        { title: "Dispatch", desc: "Call us anytime. We'll dispatch a licensed electrician to your Tuscaloosa location promptly to address your electrical repair needs." },
        { title: "Diagnose", desc: "We perform a thorough inspection and electrical troubleshooting to accurately identify the root cause of the problem." },
        { title: "Quote", desc: "We explain the issue in plain English and provide a firm, upfront price to fix it before any work begins." },
        { title: "Repair", desc: "We complete the electrical repair cleanly, safely, and entirely up to Tuscaloosa building and electrical codes." },
      ]}
      faqs={[
        { q: "Is a tripped breaker dangerous?", a: "A breaker trips to protect you from an overload or short circuit. If it happens frequently, it indicates a serious underlying electrical issue that needs professional troubleshooting and breaker repair." },
        { q: "Why do my lights flicker when the AC turns on?", a: "This usually means your electrical panel is struggling with the sudden voltage drop. It could require a dedicated circuit, electrical panel repair, or a panel upgrade." },
        { q: "Can I replace an outlet myself?", a: "While possible, DIY electrical repair carries a high risk of shock or creating fire hazards if wired incorrectly. You should always hire a qualified residential electrician in Tuscaloosa for outlet repair and installation." },
        { q: "Do you handle electrical emergencies?", a: "Yes. Call us immediately for your electrical emergency in Tuscaloosa. Availability varies by location and technician availability, but we always strive to respond to sparking panels and power loss as quickly as possible." },
      ]}
      related={[
        { to: "/wiring-upgrades-tuscaloosa-al", label: "Wiring Upgrades" },
        { to: "/panel-upgrades-tuscaloosa-al", label: "Panel Upgrades" },
        { to: "/outdoor-wiring-tuscaloosa-al", label: "Outdoor Wiring" },
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
