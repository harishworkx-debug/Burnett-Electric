import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/emergency-electrician-tuscaloosa-al")({
  head: () => ({
    meta: [
      { title: "Emergency Residential Electrical Help in Tuscaloosa, AL | Burnett Electric" },
      { name: "description", content: "Request help scheduling a residential electrician in Tuscaloosa for outages, sparking outlets, and electrical hazards." },
      { property: "og:title", content: "Emergency Residential Electrical Help in Tuscaloosa, AL | Burnett Electric" },
      { property: "og:description", content: "Residential emergency electrical connection requests in Tuscaloosa." },
      { property: "og:url", content: "/emergency-electrician-tuscaloosa-al" },
      { property: "og:image", content: IMG.repair },
      { name: "twitter:image", content: IMG.repair },
    ],
    links: [{ rel: "canonical", href: "/emergency-electrician-tuscaloosa-al" }],
  }),
  component: () => (
    <ServicePageLayout
      slug="emergency-electrician-tuscaloosa-al"
      metaTitle="Emergency Residential Electrical Help in Tuscaloosa, AL"
      metaDescription="Residential emergency electrical connection requests in Tuscaloosa, AL."
      h1="Emergency Residential Electrical Help in Tuscaloosa, AL"
      eyebrow="Fast Response When You Need It"
      hero={IMG.repair}
      intro="For a sparking panel, sudden power loss, or storm damage, call to request help hiring an expert residential electrician."
      benefits={[
        { title: "Connection Request", desc: "Call to request help scheduling a residential electrician in Tuscaloosa." },
        { title: "Availability Varies", desc: "Availability varies by location, technician availability, and demand, but we always strive to respond as quickly as possible." },
        { title: "Fully Stocked Vans", desc: "We arrive with the necessary parts to resolve the most common electrical emergencies on the first visit." },
        { title: "Safety Focused", desc: "Our primary goal during an emergency call is to eliminate fire hazards and make your home safe." },
        { title: "Upfront Pricing", desc: "Even in an emergency, we diagnose the issue and provide a clear price before making the repair." },
        { title: "Storm Damage Repair", desc: "Expert repairs for weather-related damage to your meter base, weatherhead, or panel." },
      ]}
      problems={[
        "Hearing loud popping or buzzing sounds coming from the breaker box",
        "Smelling an electrical burning odor with no obvious source",
        "Half of your home suddenly losing power while neighbors still have theirs",
        "Water leaking into your electrical panel during a severe Tuscaloosa storm",
        "A critical home circuit failing during a sudden electrical issue",
        "Outlets sparking or smoking when you try to plug something in",
      ]}
      process={[
        { title: "Call for Connection Help", desc: "Call to request help hiring an expert residential electrician." },
        { title: "Safety Guidance", desc: "We will instruct you on how to shut off power safely if necessary while we are en route." },
        { title: "Immediate Diagnosis", desc: "Upon arrival, we immediately identify the danger and isolate the faulty circuit." },
        { title: "Permanent Fix", desc: "We perform a safe, code-compliant repair so you can sleep peacefully." },
      ]}
      faqs={[
        { q: "What constitutes an electrical emergency?", a: "Sparks, smoke, burning smells, buzzing panels, power loss to essential medical equipment, or exposed live wires are all emergencies. When in doubt, call us." },
        { q: "Should I call the power company or an electrician?", a: "If the outage affects your whole neighborhood, call the power company. If the issue is localized to your home or your specific meter box/panel, call Burnett Electric." },
        { q: "Do you charge extra for after-hours calls in Tuscaloosa?", a: "Yes, standard emergency dispatch fees apply outside of normal business hours, but we always provide upfront pricing for the actual repair before starting work." },
        { q: "What should I do if I smell burning plastic near an outlet?", a: "Immediately go to your breaker panel and shut off the main breaker, then call us right away. Do not attempt to use the outlet." },
      ]}
      related={[
        { to: "/electrical-repairs-tuscaloosa-al", label: "Electrical Repairs" },
        { to: "/generator-installation-tuscaloosa-al", label: "Generator Installation" },
      ]}
    />
  ),
});
