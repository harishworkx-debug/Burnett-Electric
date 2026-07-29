import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/lighting-installation-tuscaloosa-al")({
  head: () => ({
    meta: [
      { title: "Lighting Installation & Upgrades in Tuscaloosa, AL | Burnett Electric" },
      { name: "description", content: "Expert lighting installation in Tuscaloosa, AL. From recessed lighting to outdoor security lights, we brighten up your home and reduce energy costs." },
      { property: "og:title", content: "Lighting Installation in Tuscaloosa, AL | Burnett Electric" },
      { property: "og:description", content: "Professional indoor and outdoor lighting installations in Tuscaloosa." },
      { property: "og:url", content: "/lighting-installation-tuscaloosa-al" },
      { property: "og:image", content: IMG.bulb },
      { name: "twitter:image", content: IMG.bulb },
    ],
    links: [{ rel: "canonical", href: "/lighting-installation-tuscaloosa-al" }],
  }),
  component: () => (
    <ServicePageLayout
      slug="lighting-installation-tuscaloosa-al"
      metaTitle="Lighting Installation in Tuscaloosa, AL"
      metaDescription="Expert lighting installation and LED upgrades in Tuscaloosa, AL."
      h1="Lighting Installation in Tuscaloosa, AL"
      eyebrow="Brighten Your Space"
      hero={IMG.bulb}
      intro="The right lighting completely transforms the look and feel of your home. Burnett Electric provides expert lighting design, installation, and LED upgrades for homeowners and businesses in Tuscaloosa, AL."
      benefits={[
        { title: "Recessed Lighting", desc: "Sleek, modern can lights that evenly illuminate living rooms, kitchens, and basements in Tuscaloosa." },
        { title: "LED Upgrades", desc: "Switch to energy-efficient LED fixtures that last longer and drastically reduce your energy bills." },
        { title: "Chandelier Installation", desc: "Safe, secure hanging of heavy chandeliers in high-ceiling entryways or dining rooms." },
        { title: "Under-Cabinet Lighting", desc: "Enhance your kitchen's functionality and ambiance with hidden LED strip lighting." },
        { title: "Security Lighting", desc: "Motion-sensor floodlights and perimeter lighting to deter intruders and keep your property safe." },
        { title: "Dimmer Switches", desc: "Set the perfect mood in any room with the installation of smart or traditional dimmer switches." },
      ]}
      problems={[
        "Dark, gloomy rooms that rely on a single, outdated ceiling fixture",
        "High electricity bills from running old incandescent or halogen bulbs",
        "Wanting to install a heavy chandelier but worrying about ceiling support",
        "Lack of task lighting making it difficult to prep food in the kitchen",
        "Feeling unsafe at night due to poor exterior lighting around your home",
        "Flickering lights caused by incompatible dimmer switches",
      ]}
      process={[
        { title: "Design Consultation", desc: "We discuss your aesthetic goals and assess the current wiring in your Tuscaloosa home." },
        { title: "Fixture Selection", desc: "We help you choose the right fixtures, color temperatures, and smart controls." },
        { title: "Clean Installation", desc: "We run new wires if necessary and install the fixtures cleanly, protecting your drywall." },
        { title: "Testing", desc: "We verify everything works perfectly and show you how to use your new dimmers or smart switches." },
      ]}
      faqs={[
        { q: "Can you install recessed lighting in an older home in Tuscaloosa?", a: "Yes, we specialize in retrofitting recessed lighting into older homes. We fish wires carefully to minimize drywall patching." },
        { q: "Are LED lights really worth the upgrade?", a: "Absolutely. LEDs use up to 90% less energy than incandescent bulbs and can last for decades, paying for themselves quickly." },
        { q: "Can I put a ceiling fan where a light fixture currently is?", a: "Usually, yes. However, we must inspect the electrical box to ensure it is 'fan-rated' to support the weight and movement of a ceiling fan." },
        { q: "Do you install smart lighting systems?", a: "Yes, we can install smart switches and fixtures that allow you to control your lighting via smartphone or voice assistants." },
      ]}
      related={[
        { to: "/outdoor-wiring-tuscaloosa-al", label: "Outdoor Wiring" },
        { to: "/electrical-repairs-tuscaloosa-al", label: "Electrical Repairs" },
      ]}
    />
  ),
});
