import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/wiring-upgrades")({
  head: () => ({
    meta: [
      { title: "Home Wiring & Panel Upgrades | Burnett Electric" },
      { name: "description", content: "Expert electrical panel upgrades, whole-home rewiring, and surge protection in Tuscaloosa. Update your older home to meet modern electrical demands safely." },
      { property: "og:title", content: "Wiring & Panel Upgrades | Burnett Electric" },
      { property: "og:description", content: "Safe and reliable panel upgrades and whole-home rewiring." },
      { property: "og:url", content: "/wiring-upgrades" },
      { property: "og:image", content: IMG.wiring },
      { name: "twitter:image", content: IMG.wiring },
    ],
    links: [{ rel: "canonical", href: "/wiring-upgrades" }],
  }),
  component: () => (
    <ServicePageLayout
      slug="wiring-upgrades"
      metaTitle="Home Wiring & Panel Upgrades"
      metaDescription="Expert electrical panel upgrades and home rewiring."
      h1="Wiring & Panel Upgrades"
      eyebrow="Modernize Your Power"
      hero={IMG.wiring}
      intro="Modern appliances, EVs, and home entertainment systems require more power than older electrical panels can safely provide. We specialize in bringing older homes up to code with safe, efficient wiring and high-capacity panel upgrades."
      benefits={[
        { title: "Service Panel Upgrades", desc: "Upgrade to a 200-amp or 400-amp service panel to handle modern electrical loads." },
        { title: "Whole-Home Rewiring", desc: "Replace dangerous knob-and-tube or aluminum wiring with safe, modern copper." },
        { title: "Surge Protection", desc: "Install whole-home surge protectors right at the panel to safeguard your electronics." },
        { title: "EV Charger Installation", desc: "Dedicated Level 2 charging stations for fast, safe electric vehicle charging at home." },
        { title: "Smart Home Integration", desc: "Wiring for smart switches, automated lighting, and advanced home security systems." },
        { title: "Code Compliance", desc: "Ensure your home passes inspection when buying, selling, or renovating." },
      ]}
      problems={[
        "Constantly flipping tripped breakers in your main panel",
        "Needing adapters because you only have two-prong outlets",
        "Planning a major kitchen renovation or home addition",
        "Purchasing an electric vehicle that needs a Level 2 charger",
        "Living in a historic home with outdated knob-and-tube wiring",
        "Your homeowner's insurance requiring an electrical update",
      ]}
      process={[
        { title: "Assess", desc: "We perform a thorough load calculation to determine your home's actual power needs." },
        { title: "Permit", desc: "We pull all necessary local permits and coordinate with your utility provider." },
        { title: "Execute", desc: "We perform the upgrade with minimal disruption to your daily life." },
        { title: "Inspect", desc: "We arrange for the final city inspection to ensure 100% compliance." },
      ]}
      faqs={[
        { q: "How do I know if I need a panel upgrade?", a: "If your home still has a fuse box, is running on a 100-amp panel, or if you are adding a heavy load like a hot tub or EV charger, an upgrade is likely necessary." },
        { q: "Will I lose power during a panel upgrade?", a: "Yes, the power must be disconnected by the utility company during the installation. It typically takes a full day, and we coordinate this to minimize your downtime." },
        { q: "Are whole-home surge protectors worth it?", a: "Absolutely. One lightning strike or power grid surge can destroy thousands of dollars worth of appliances and electronics. A whole-home protector is a very smart investment." },
        { q: "Is aluminum wiring dangerous?", a: "Aluminum wiring used in the 60s and 70s is prone to expanding and contracting, which can cause loose connections and fire hazards. It should be evaluated and often replaced or mitigated." },
      ]}
      related={[
        { to: "/electrical-repairs", label: "Electrical Repairs" },
        { to: "/commercial-electrical", label: "Commercial Electrical" },
        { to: "/birmingham", label: "Electrician Birmingham" },
      ]}
    />
  ),
});
