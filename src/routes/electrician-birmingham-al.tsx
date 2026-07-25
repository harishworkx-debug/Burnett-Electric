import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout } from "@/components/site/LocationPageLayout";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/electrician-birmingham-al")({
  head: () => ({
    meta: [
      { title: "Electrician in Birmingham, AL | Burnett Electric" },
      { name: "description", content: "Licensed electrician serving Birmingham, AL. Commercial fit-outs, residential service, rewires & upgrades. Call 205-826-3643 for a free estimate." },
      { property: "og:title", content: "Electrician in Birmingham, AL | Burnett Electric" },
      { property: "og:description", content: "Commercial and residential electrical services in Birmingham." },
      { property: "og:url", content: "/electrician-birmingham-al" },
      { property: "og:image", content: IMG.commercial },
      { name: "twitter:image", content: IMG.commercial },
    ],
    links: [{ rel: "canonical", href: "/electrician-birmingham-al" }],
  }),
  component: () => (
    <LocationPageLayout
      slug="electrician-birmingham-al"
      metaDescription="Licensed electrician serving Birmingham, AL."
      h1="Electrician in Birmingham, AL"
      city="Birmingham"
      hero={IMG.commercial}
      intro="Burnett Electric brings small-shop attention and big-shop capability to Birmingham commercial and residential customers — from LED retrofits and tenant fit-outs to whole-home upgrades."
      landmarks={["Downtown Birmingham", "Five Points South", "Highland Park", "Homewood", "Mountain Brook", "Vestavia Hills", "Southside", "Avondale"]}
      benefits={[
        { title: "Commercial Fit-Outs", desc: "Retail, office and restaurant electrical from design to inspection." },
        { title: "LED Retrofits", desc: "Cut lighting energy costs by up to 60%." },
        { title: "Backup Power", desc: "Generator systems and automatic transfer switches." },
        { title: "Residential Service", desc: "Repairs, upgrades and smart-home installs for Birmingham homes." },
        { title: "Emergency Response", desc: "24/7 emergency electrical calls anywhere in Jefferson County." },
        { title: "Preventive Maintenance", desc: "Keep your business running with scheduled inspections." },
      ]}
      faqs={[
        { q: "Do you serve all of Birmingham?", a: "Yes — Jefferson County and surrounding suburbs including Homewood, Vestavia, and Mountain Brook." },
        { q: "Can you work after business hours?", a: "Absolutely. We routinely schedule commercial work for evenings and weekends." },
        { q: "Do you offer maintenance contracts?", a: "Yes, quarterly and annual maintenance plans are available for commercial clients." },
        { q: "How soon can you quote a job?", a: "Most quotes go out within 24–48 hours of the initial site visit." },
      ]}
    />
  ),
});
