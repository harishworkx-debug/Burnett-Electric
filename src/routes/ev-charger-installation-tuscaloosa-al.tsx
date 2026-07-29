import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/ev-charger-installation-tuscaloosa-al")({
  head: () => ({
    meta: [
      { title: "EV Charger Installation in Tuscaloosa, AL | Burnett Electric" },
      { name: "description", content: "Fast, safe Level 2 EV charger installation in Tuscaloosa, AL. Charge your electric vehicle at home overnight with a dedicated charging station." },
      { property: "og:title", content: "EV Charger Installation in Tuscaloosa, AL | Burnett Electric" },
      { property: "og:description", content: "Professional Level 2 EV charger installation for homes and businesses in Tuscaloosa." },
      { property: "og:url", content: "/ev-charger-installation-tuscaloosa-al" },
      { property: "og:image", content: IMG.wiring },
      { name: "twitter:image", content: IMG.wiring },
    ],
    links: [{ rel: "canonical", href: "/ev-charger-installation-tuscaloosa-al" }],
  }),
  component: () => (
    <ServicePageLayout
      slug="ev-charger-installation-tuscaloosa-al"
      metaTitle="EV Charger Installation in Tuscaloosa, AL"
      metaDescription="Professional EV charger installation in Tuscaloosa, AL."
      h1="EV Charger Installation in Tuscaloosa, AL"
      eyebrow="Charge Faster at Home"
      hero={IMG.wiring}
      intro="Stop relying on slow standard outlets or public charging stations. Burnett Electric provides professional Level 2 EV charger installations in Tuscaloosa, AL, allowing you to wake up to a fully charged vehicle every morning."
      benefits={[
        { title: "Faster Charging", desc: "Level 2 chargers charge your vehicle up to 5-7 times faster than a standard 120V wall outlet." },
        { title: "Universal Compatibility", desc: "We install chargers for all major brands, including Tesla, Ford, Rivian, Chevy, and more." },
        { title: "Dedicated Circuits", desc: "We run a dedicated 240V circuit to ensure your charger operates safely without tripping breakers." },
        { title: "Load Management", desc: "We assess your Tuscaloosa home's electrical capacity and install energy management systems if needed." },
        { title: "Commercial Installations", desc: "Attract customers and employees by installing EV charging stations at your Tuscaloosa business." },
        { title: "Permitted & Inspected", desc: "Every installation is permitted and inspected to guarantee safety and code compliance." },
      ]}
      problems={[
        "Taking days to fully charge your EV using a standard wall outlet",
        "Wasting time sitting at public charging stations in Tuscaloosa",
        "Tripping breakers when you plug your EV into an existing garage outlet",
        "Worrying about the fire hazard of using extension cords to charge your car",
        "Needing a panel upgrade before you can safely install a home charger",
        "Commercial properties wanting to add charging amenities for tenants or staff",
      ]}
      process={[
        { title: "Load Calculation", desc: "We evaluate your current electrical panel to ensure it can handle the extra load of a Level 2 charger." },
        { title: "Charger Selection", desc: "You provide the charger, or we can recommend and supply top-rated models." },
        { title: "Installation", desc: "We run the dedicated 240V line to your garage or driveway and securely mount the charging station." },
        { title: "Testing", desc: "We test the unit and show you the best practices for safe charging at your Tuscaloosa home." },
      ]}
      faqs={[
        { q: "Do I need a panel upgrade to install an EV charger?", a: "It depends on your current panel size (100 amp vs 200 amp) and what gas/electric appliances you currently run. We do a load calculation to find out." },
        { q: "Can you install a Tesla Wall Connector in Tuscaloosa?", a: "Yes, we are experienced in installing Tesla Wall Connectors, as well as NEMA 14-50 outlets for mobile connectors." },
        { q: "How long does the installation take?", a: "Most residential EV charger installations in Tuscaloosa are completed within a few hours." },
        { q: "Can an EV charger be installed outdoors?", a: "Yes, most Level 2 chargers are weather-rated. We install them securely on exterior walls or standalone pedestals." },
      ]}
      related={[
        { to: "/wiring-upgrades-tuscaloosa-al", label: "Wiring Upgrades" },
        { to: "/panel-upgrades-tuscaloosa-al", label: "Panel Upgrades" },
      ]}
    />
  ),
});
