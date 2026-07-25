import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/electrical-repairs-tuscaloosa-al")({
  head: () => ({
    meta: [
      { title: "Electrical Repairs in Tuscaloosa, AL | Burnett Electric" },
      { name: "description", content: "Same-day electrical repairs in Tuscaloosa, AL. Breakers, outlets, panels, flickering lights and more. Licensed & insured. Call 205-826-3643 for a free estimate." },
      { property: "og:title", content: "Electrical Repairs in Tuscaloosa, AL | Burnett Electric" },
      { property: "og:description", content: "Same-day electrical repairs by licensed electricians. Free estimates." },
      { property: "og:url", content: "/electrical-repairs-tuscaloosa-al" },
      { property: "og:image", content: IMG.repair },
      { name: "twitter:image", content: IMG.repair },
    ],
    links: [{ rel: "canonical", href: "/electrical-repairs-tuscaloosa-al" }],
  }),
  component: () => (
    <ServicePageLayout
      slug="electrical-repairs-tuscaloosa-al"
      metaTitle="Electrical Repairs in Tuscaloosa, AL"
      metaDescription="Same-day electrical repairs in Tuscaloosa, AL."
      h1="Electrical Repairs in Tuscaloosa, AL"
      eyebrow="Electrical Repairs"
      hero={IMG.repair}
      intro="Flickering lights, dead outlets, a tripping breaker or something more serious? Burnett Electric provides fast, code-compliant electrical repairs across Tuscaloosa — usually the same day."
      benefits={[
        { title: "Same-Day Diagnostics", desc: "Most repair calls scheduled the same day you call, often within hours." },
        { title: "Upfront Pricing", desc: "You approve a written price before we start. No surprise fees." },
        { title: "Licensed & Insured", desc: "All repairs completed to Alabama code by licensed electricians." },
        { title: "Warrantied Workmanship", desc: "Every repair is backed by our workmanship guarantee." },
        { title: "Clean & Respectful", desc: "Uniformed techs who protect your floors and clean up after themselves." },
        { title: "24/7 Emergency", desc: "Sparks, burning smells or outages? Call any time, day or night." },
      ]}
      problems={[
        "Circuit breakers that trip repeatedly",
        "Outlets that spark, buzz or feel warm",
        "Flickering, dimming or humming lights",
        "Loss of power to part of the house",
        "Burning smell near an outlet or panel",
        "Old two-prong outlets that need grounding",
        "Faulty GFCI or AFCI protection",
        "Storm or surge damage",
      ]}
      process={[
        { title: "Call", desc: "Tell us what's happening — we'll book a same-day slot." },
        { title: "Diagnose", desc: "We locate the root cause and explain your options." },
        { title: "Quote", desc: "Written, upfront pricing with clear scope." },
        { title: "Repair", desc: "Fast, safe fix — cleaned up and tested." },
      ]}
      faqs={[
        { q: "How much do electrical repairs cost?", a: "Most residential repairs range from $150–$650 depending on scope. You always get an upfront quote before we start." },
        { q: "Can you come out today?", a: "Yes — most days we can dispatch same-day. Emergency calls (sparks, burning smells, outages) are prioritized." },
        { q: "Are your repairs warrantied?", a: "Yes. Every repair carries a Burnett Electric workmanship warranty." },
        { q: "Do I need to be home?", a: "For most jobs yes, but we can coordinate access for property managers or landlords." },
      ]}
      related={[
        { to: "/wiring-upgrades-tuscaloosa-al", label: "Wiring Upgrades" },
        { to: "/commercial-electrical-tuscaloosa-al", label: "Commercial Electrical" },
        { to: "/outdoor-wiring-tuscaloosa-al", label: "Outdoor Wiring" },
        { to: "/electrician-tuscaloosa-al", label: "Electrician Tuscaloosa" },
      ]}
    />
  ),
});
