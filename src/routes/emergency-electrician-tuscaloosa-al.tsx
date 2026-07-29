import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/emergency-electrician-tuscaloosa-al")({
  head: () => ({
    meta: [
      { title: "24/7 Emergency Electrician in Tuscaloosa, AL | Burnett Electric" },
      { name: "description", content: "Need an emergency electrician in Tuscaloosa, AL? Burnett Electric provides 24/7 fast response for power outages, sparking outlets, and electrical hazards." },
      { property: "og:title", content: "24/7 Emergency Electrician in Tuscaloosa, AL | Burnett Electric" },
      { property: "og:description", content: "Fast, reliable 24-hour emergency electrical services in Tuscaloosa." },
      { property: "og:url", content: "/emergency-electrician-tuscaloosa-al" },
      { property: "og:image", content: IMG.repair },
      { name: "twitter:image", content: IMG.repair },
    ],
    links: [{ rel: "canonical", href: "/emergency-electrician-tuscaloosa-al" }],
  }),
  component: () => (
    <ServicePageLayout
      slug="emergency-electrician-tuscaloosa-al"
      metaTitle="24/7 Emergency Electrician in Tuscaloosa, AL"
      metaDescription="Fast response 24-hour emergency electrician in Tuscaloosa, AL."
      h1="24/7 Emergency Electrician in Tuscaloosa, AL"
      eyebrow="Fast Response When You Need It"
      hero={IMG.repair}
      intro="Electrical emergencies don't wait for business hours. Whether it's a sparking panel, a sudden power loss in half your home, or storm damage, Burnett Electric is ready 24/7 to keep your Tuscaloosa, AL property safe and powered."
      benefits={[
        { title: "24/7 Availability", desc: "Day or night, weekends or holidays, we are standing by to handle electrical emergencies in Tuscaloosa." },
        { title: "Rapid Response", desc: "We prioritize emergency calls to get a licensed electrician to your door as fast as possible." },
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
        "A critical business operation halting due to a sudden electrical failure",
        "Outlets sparking or smoking when you try to plug something in",
      ]}
      process={[
        { title: "Call Us Immediately", desc: "Don't email or use a form. Call our emergency line for immediate dispatch in Tuscaloosa." },
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
