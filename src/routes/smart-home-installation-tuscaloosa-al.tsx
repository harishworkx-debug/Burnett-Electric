import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/smart-home-installation-tuscaloosa-al")({
  head: () => ({
    meta: [
      { title: "Smart Home & Automation Installation in Tuscaloosa, AL | Burnett Electric" },
      { name: "description", content: "Professional smart home installation in Tuscaloosa, AL. We install smart switches, thermostats, video doorbells, and automated lighting systems." },
      { property: "og:title", content: "Smart Home Installation in Tuscaloosa, AL | Burnett Electric" },
      { property: "og:description", content: "Expert installation of smart switches, lighting, and home automation in Tuscaloosa." },
      { property: "og:url", content: "/smart-home-installation-tuscaloosa-al" },
      { property: "og:image", content: IMG.home },
      { name: "twitter:image", content: IMG.home },
    ],
    links: [{ rel: "canonical", href: "/smart-home-installation-tuscaloosa-al" }],
  }),
  component: () => (
    <ServicePageLayout
      slug="smart-home-installation-tuscaloosa-al"
      metaTitle="Smart Home Installation in Tuscaloosa, AL"
      metaDescription="Professional smart home automation and installation in Tuscaloosa, AL."
      h1="Smart Home Installation in Tuscaloosa, AL"
      eyebrow="Modern Home Automation"
      hero={IMG.home}
      intro="Upgrade your Tuscaloosa home with modern convenience. Burnett Electric provides expert installation of smart home devices, ensuring they are wired correctly, connected securely, and ready to make your life easier."
      benefits={[
        { title: "Smart Lighting Controls", desc: "Install smart switches and dimmers you can control from your phone or voice assistant." },
        { title: "Video Doorbells & Cameras", desc: "Hardwired installation of Ring, Nest, or other security cameras for constant power and reliability." },
        { title: "Smart Thermostats", desc: "Proper wiring (including C-wire installation) for smart thermostats to lower heating and cooling bills." },
        { title: "Automated Blinds", desc: "Electrical rough-ins and final connections for motorized window treatments." },
        { title: "Whole-Home Audio", desc: "Wiring and installation of integrated speaker systems throughout your Tuscaloosa home." },
        { title: "Flawless Integration", desc: "We ensure all hardwired smart devices communicate seamlessly with your home's Wi-Fi network." },
      ]}
      problems={[
        "Buying a smart thermostat but discovering your home lacks the necessary 'C-wire'",
        "Wi-Fi cameras dying constantly because they run on batteries instead of hard-wiring",
        "Wanting to turn off all the house lights from bed using your smartphone",
        "Struggling with complicated wiring diagrams when trying a DIY smart switch installation",
        "Older homes in Tuscaloosa not having neutral wires required for modern smart switches",
        "Needing reliable, continuous power for high-end home security systems",
      ]}
      process={[
        { title: "Consultation", desc: "Tell us what you want to automate in your Tuscaloosa home, and we'll design the wiring plan." },
        { title: "Device Selection", desc: "We can install devices you've purchased or provide recommendations for the most reliable brands." },
        { title: "Installation & Wiring", desc: "We run necessary neutrals, C-wires, and low-voltage cables cleanly behind your walls." },
        { title: "Setup & Testing", desc: "We connect the devices to power, test their function, and ensure they are ready to pair with your app." },
      ]}
      faqs={[
        { q: "Why can't I just install a smart switch myself?", a: "Many older homes in Tuscaloosa lack the 'neutral wire' required by modern smart switches. Attempting to bypass this can cause shorts, fires, or ruined devices." },
        { q: "Do you configure the apps on my phone?", a: "We provide the electrical installation and ensure the device is powered up and in 'pairing mode.' We generally leave the final Wi-Fi and app configuration to the homeowner for privacy reasons." },
        { q: "Can you hardwire my battery-powered Ring doorbell?", a: "Yes! We can install the proper transformer and wiring so you never have to take your doorbell down to charge it again." },
        { q: "Does hardwiring cameras make them better?", a: "Yes, hardwired cameras are generally more reliable, don't suffer from dead batteries, and often capture video faster than battery-operated models." },
      ]}
      related={[
        { to: "/lighting-installation-tuscaloosa-al", label: "Lighting Installation" },
        { to: "/wiring-upgrades-tuscaloosa-al", label: "Wiring Upgrades" },
      ]}
    />
  ),
});
