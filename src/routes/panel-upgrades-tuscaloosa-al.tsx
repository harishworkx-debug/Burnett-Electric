import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/panel-upgrades-tuscaloosa-al")({
  head: () => ({
    meta: [
      { title: "Electrical Panel Upgrades in Tuscaloosa, AL | Burnett Electric" },
      { name: "description", content: "Professional electrical panel upgrades in Tuscaloosa, AL. Replace outdated fuse boxes and ensure your home's electrical system can handle modern demands safely." },
      { property: "og:title", content: "Electrical Panel Upgrades in Tuscaloosa, AL | Burnett Electric" },
      { property: "og:description", content: "Safe and reliable electrical panel upgrades for homes in Tuscaloosa." },
      { property: "og:url", content: "/panel-upgrades-tuscaloosa-al" },
      { property: "og:image", content: IMG.panel },
      { name: "twitter:image", content: IMG.panel },
    ],
    links: [{ rel: "canonical", href: "/panel-upgrades-tuscaloosa-al" }],
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
    />
  ),
});
