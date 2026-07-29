import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/generator-installation-tuscaloosa-al")({
  head: () => ({
    meta: [
      { title: "Generator Installation in Tuscaloosa, AL | Burnett Electric" },
      { name: "description", content: "Professional whole-home and commercial generator installation in Tuscaloosa, AL. Never lose power during storms with a reliable standby generator." },
      { property: "og:title", content: "Generator Installation in Tuscaloosa, AL | Burnett Electric" },
      { property: "og:description", content: "Reliable standby generator installations for homes and businesses in Tuscaloosa." },
      { property: "og:url", content: "/generator-installation-tuscaloosa-al" },
      { property: "og:image", content: IMG.home },
      { name: "twitter:image", content: IMG.home },
    ],
    links: [{ rel: "canonical", href: "/generator-installation-tuscaloosa-al" }],
  }),
  component: () => (
    <ServicePageLayout
      slug="generator-installation-tuscaloosa-al"
      metaTitle="Generator Installation in Tuscaloosa, AL"
      metaDescription="Professional whole-home generator installation in Tuscaloosa, AL."
      h1="Generator Installation in Tuscaloosa, AL"
      eyebrow="Backup Power Solutions"
      hero={IMG.home}
      intro="Alabama weather can be unpredictable. Protect your home and family with a reliable whole-home standby generator. Burnett Electric provides expert generator sizing, installation, and maintenance in Tuscaloosa, AL."
      benefits={[
        { title: "Automatic Transfer", desc: "Your generator turns on automatically within seconds of a power outage in your Tuscaloosa home." },
        { title: "Whole-Home Power", desc: "We size generators to keep your AC, refrigerator, and essential circuits running perfectly." },
        { title: "Increased Home Value", desc: "A standby generator is a premium addition that increases the resale value of your property." },
        { title: "Commercial Solutions", desc: "Keep your business operations running smoothly with heavy-duty commercial generators." },
        { title: "Expert Installation", desc: "Our licensed electricians handle the concrete pad, electrical connections, and gas coordination." },
        { title: "Routine Maintenance", desc: "We offer ongoing service plans to ensure your generator is always ready for the next storm." },
      ]}
      problems={[
        "Losing power frequently during severe Alabama thunderstorms or hurricanes",
        "Spoiled food in refrigerators and freezers due to prolonged outages",
        "Needing continuous power for critical medical equipment at home",
        "Business downtime leading to lost revenue when the grid fails",
        "Manually hauling out a portable generator and dealing with messy gas cans",
        "Worrying about frozen or burst pipes if heating systems fail in winter",
      ]}
      process={[
        { title: "Site Assessment", desc: "We visit your Tuscaloosa property to evaluate your electrical load and find the best generator location." },
        { title: "Custom Sizing", desc: "We recommend the exact wattage and brand that fits your specific backup power needs." },
        { title: "Permitting", desc: "We handle all local permits and coordinate with Tuscaloosa gas and utility providers." },
        { title: "Installation", desc: "We install the transfer switch, set the generator, and perform a full simulated power outage test." },
      ]}
      faqs={[
        { q: "How long does a generator installation take?", a: "Once permits are approved, the physical installation at your Tuscaloosa home typically takes 1 to 2 days." },
        { q: "Do I need a portable or standby generator?", a: "Standby generators offer automatic, seamless power for the whole home. Portable generators require manual setup and fuel management." },
        { q: "Do you service generators after installation?", a: "Yes, we offer preventative maintenance plans to ensure your generator runs flawlessly when you need it most." },
        { q: "Can a generator power my whole house?", a: "Yes, with a properly sized standby generator and automatic transfer switch, your entire home can run as normal." },
      ]}
      related={[
        { to: "/electrical-repairs-tuscaloosa-al", label: "Electrical Repairs" },
        { to: "/wiring-upgrades-tuscaloosa-al", label: "Wiring Upgrades" },
      ]}
    />
  ),
});
