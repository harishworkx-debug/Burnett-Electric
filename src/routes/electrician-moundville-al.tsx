import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout } from "@/components/site/LocationPageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/electrician-moundville-al")({
  head: () => ({
    meta: [
      { title: "Electrician in Moundville, AL | Burnett Electric" },
      { name: "description", content: "Licensed residential electrician in Moundville, AL. Weatherhead storm repair, breaker replacements, rewiring & generators. Call (205) 634-8185." },
      { property: "og:title", content: "Electrician in Moundville, AL | Burnett Electric" },
      { property: "og:description", content: "Licensed residential electrician serving homeowners in Moundville, Alabama." },
      { property: "og:url", content: "https://www.burnettelectrictuscaloosa.com/electrician-moundville-al" },
      { property: "og:image", content: `https://www.burnettelectrictuscaloosa.com${IMG.hero}` },
      { name: "twitter:image", content: `https://www.burnettelectrictuscaloosa.com${IMG.hero}` },
    ],
    links: [{ rel: "canonical", href: "https://www.burnettelectrictuscaloosa.com/electrician-moundville-al" }],
  }),
  component: () => (
    <LocationPageLayout
      slug="electrician-moundville-al"
      metaDescription="Licensed residential electrician serving homeowners in Moundville, AL."
      h1="Residential Electrician in Moundville, AL"
      city="Moundville"
      hero={IMG.hero}
      intro="Burnett Electric provides Moundville homeowners with dependable, licensed residential electrical services. From weatherhead storm repairs to panel upgrades and whole-home generators, our local team is here to help."
      landmarks={["Moundville Archaeological Park", "Black Warrior River", "Downtown Moundville", "Highway 69 South"]}
      benefits={[
        { title: "Prompt Dispatch", desc: "Fast travel along the Highway 69 corridor to service homes across the Tuscaloosa/Hale County line." },
        { title: "Service Mast Repairs", desc: "Repairing weatherheads and overhead service masts damaged by fallen limbs during severe storms." },
        { title: "Standby Generators", desc: "Turnkey generator installations with automatic transfer switches to keep rural homes powered." },
        { title: "Breaker Panel Upgrades", desc: "Replacing outdated 60A and 100A panels with safe 200A systems to handle modern AC and appliances." },
        { title: "100% Upfront Pricing", desc: "Firm, written estimates before work begins. No hidden mileage or travel charges." },
        { title: "Licensed & Insured", desc: "State-certified electrical contractor strictly adhering to National Electrical Code safety standards." },
      ]}
      faqs={[
        { q: "Do you service homes in Moundville, AL?", a: "Yes. We regularly dispatch our licensed electricians to homes in Moundville and surrounding rural communities along Highway 69 South." },
        { q: "Can you fix an electrical weatherhead pulled off my house by a fallen tree?", a: "Yes. Severe river-basin storms frequently damage overhead service drops. We repair the service mast and meter base to get your power safely reconnected by the utility company." },
        { q: "Do you install whole-home backup generators in Moundville?", a: "Yes. We install Generac standby generator systems to ensure your home keeps essential lighting, refrigeration, and well pumps running during storm outages." },
        { q: "How do I schedule an electrician in Moundville?", a: "Call us directly at (205) 634-8185 to discuss your electrical needs and schedule prompt service." },
      ]}
    >
      <h2>Dependable Residential Electricians for Moundville, AL</h2>
      <p>
        Situated along the Black Warrior River on the border of Tuscaloosa and Hale counties, Moundville features historical charm and rural properties. Severe Alabama summer storms and high winds often cause tree limbs to tear down overhead service masts, leaving families without power.
      </p>
      <p>
        Burnett Electric provides comprehensive <a href="/electrical-repairs-tuscaloosa-al">electrical troubleshooting</a>, emergency weatherhead repairs, and <a href="/panel-upgrades-tuscaloosa-al">200-amp panel modernizations</a> to Moundville homeowners, backed by our 1-year workmanship warranty.
      </p>
    </LocationPageLayout>
  ),
});
