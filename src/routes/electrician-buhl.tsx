import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout } from "@/components/site/LocationPageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/electrician-buhl")({
  head: () => ({
    meta: [
      { title: "Electrician in Buhl, AL | Burnett Electric" },
      { name: "description", content: "Your local electrician based in Buhl, AL. Fast repairs, wiring upgrades, and outdoor electrical. Call Burnett Electric at 205-660-6952." },
      { property: "og:title", content: "Electrician in Buhl, AL | Burnett Electric" },
      { property: "og:description", content: "Local licensed electrician based in Buhl, Alabama." },
      { property: "og:url", content: "/electrician-buhl" },
      { property: "og:image", content: IMG.hero },
      { name: "twitter:image", content: IMG.hero },
    ],
    links: [{ rel: "canonical", href: "/electrician-buhl" }],
  }),
  component: () => (
    <LocationPageLayout
      slug="buhl"
      metaDescription="Your local electrician in Buhl, AL."
      h1="Your Local Electrician in Buhl, AL"
      city="Buhl"
      hero={IMG.hero}
      intro="As our hometown, Buhl holds a special place for Burnett Electric. We provide our neighbors with reliable, prompt, and high-quality electrical services right in our own backyard."
      landmarks={["Buhl Elementary School", "Sipsey River", "Highway 82", "Elora", "Coker"]}
      benefits={[
        { title: "Hometown Advantage", desc: "Being based in Buhl means we can often provide immediate response to local calls." },
        { title: "Rural Property Specialists", desc: "Expertise in long underground wire runs for workshops, barns, and rural properties." },
        { title: "Outdoor & Landscape", desc: "Custom outdoor lighting and security systems suited for larger properties." },
        { title: "Storm Readiness", desc: "Generator installations and whole-home surge protection to keep your power running." },
        { title: "Residential Upgrades", desc: "Panel upgrades and rewiring for older homes in the community." },
        { title: "Community Focused", desc: "We treat every customer like a neighbor, because in Buhl, you are." },
      ]}
      faqs={[
        { q: "Are you based in Buhl?", a: "Yes! Burnett Electric is proudly based right here in Buhl, Alabama." },
        { q: "Can you run power to my barn or workshop?", a: "Absolutely. We specialize in trenching and running safe, code-compliant power to outbuildings and barns." },
        { q: "Do you offer emergency service in Buhl?", a: "Yes, since we are local, we can often respond to emergencies in Buhl faster than anyone else." },
        { q: "Do you install whole-home generators?", a: "Yes, we install and service whole-home generators to ensure you never lose power during rural outages." },
      ]}
    />
  ),
});
