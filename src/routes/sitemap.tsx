import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Zap, MapPin, Wrench, FileCode2, Rss, ArrowRight, ShieldCheck, ChevronRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingCTA } from "@/components/site/FloatingCTA";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTASection } from "@/components/site/CTASection";
import { JsonLd } from "@/components/site/JsonLd";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/sitemap")({
  head: () => ({
    meta: [
      { title: "Website Directory & Sitemap | Burnett Electric" },
      { name: "description", content: "Complete directory of residential electrical services, regional service locations, and resources for Burnett Electric in Tuscaloosa, AL." },
      { property: "og:title", content: "Website Directory & Sitemap | Burnett Electric" },
      { property: "og:description", content: "Explore all residential electrical services, Tuscaloosa County service areas, and company information." },
      { property: "og:url", content: "https://www.burnettelectrictuscaloosa.com/sitemap" },
      { property: "og:image", content: `https://www.burnettelectrictuscaloosa.com${IMG.hero}` },
      { name: "twitter:image", content: `https://www.burnettelectrictuscaloosa.com${IMG.hero}` },
    ],
    links: [{ rel: "canonical", href: "https://www.burnettelectrictuscaloosa.com/sitemap" }],
  }),
  component: SitemapPage,
});

const mainPages = [
  { to: "/", label: "Home Page", desc: "Licensed residential electrician serving Tuscaloosa, Northport, Buhl & West Alabama." },
  { to: "/about", label: "About Burnett Electric", desc: "Meet Shad Burnett and learn about our focus on residential electrical safety and upfront pricing." },
  { to: "/services", label: "All Electrical Services", desc: "Comprehensive directory of our residential electrical repair and upgrade capabilities." },
  { to: "/reviews", label: "Customer Reviews", desc: "Verified testimonials and 5-star feedback from homeowners across West Alabama." },
  { to: "/contact", label: "Contact & Scheduling", desc: "Request electrical service online or call our direct line for prompt dispatch." },
];

const servicePages = [
  { to: "/electrical-repairs-tuscaloosa-al", label: "Electrical Repairs", desc: "Troubleshooting dead circuits, buzzing switches, tripping breakers, and damaged outlets." },
  { to: "/wiring-upgrades-tuscaloosa-al", label: "Wiring Upgrades", desc: "Whole-home rewiring, knob-and-tube removal, and aluminum wiring modernization." },
  { to: "/panel-upgrades-tuscaloosa-al", label: "Panel Upgrades", desc: "Replacing outdated fuse boxes with modern 200A or 400A Square D breaker panels." },
  { to: "/generator-installation-tuscaloosa-al", label: "Generator Installation", desc: "Whole-home standby generator installations and manual transfer switch interlock kits." },
  { to: "/lighting-installation-tuscaloosa-al", label: "Lighting & Fan Installation", desc: "Recessed can lighting, ceiling fans, dimmer switches, and energy-efficient LED retrofits." },
  { to: "/ev-charger-installation-tuscaloosa-al", label: "EV Charger Installation", desc: "Dedicated Level 2 240V vehicle charging circuits for home garages and carports." },
  { to: "/emergency-electrician-tuscaloosa-al", label: "Emergency Electrician", desc: "Priority same-day dispatch for sparking panels, burning odors, and sudden outages." },
  { to: "/smart-home-installation-tuscaloosa-al", label: "Smart Home Installation", desc: "Smart switches, automated lighting, digital thermostats, and connected home systems." },
  { to: "/outdoor-wiring-tuscaloosa-al", label: "Outdoor Wiring", desc: "Weatherproof exterior circuits, landscape lighting, hot tub hookups, and security floodlights." },
];

const locationPages = [
  { to: "/electrician-northport", city: "Northport, AL", desc: "Historic home rewiring, breaker modernizations, and prompt neighborhood repairs." },
  { to: "/electrician-buhl", city: "Buhl, AL (Headquarters)", desc: "Our hometown base — fast rural dispatch, workshops, barns, and backup generators." },
  { to: "/electrician-birmingham", city: "Birmingham Metro, AL", desc: "Scheduled major rewires, commercial-grade residential heavy-ups, and panel overhauls." },
  { to: "/electrician-cottondale-al", city: "Cottondale, AL", desc: "Rapid troubleshooting, breaker replacements, and residential lighting repairs." },
  { to: "/electrician-vance-al", city: "Vance, AL", desc: "Subdivision power upgrades, EV charging stations, and whole-home surge protection." },
  { to: "/electrician-coaling-al", city: "Coaling, AL", desc: "Safe residential installations, 200A panel upgrades, and surge suppressors." },
  { to: "/electrician-moundville-al", city: "Moundville, AL", desc: "Service mast storm repair, weatherhead fixes, and rural electrical maintenance." },
  { to: "/electrician-brookwood-al", city: "Brookwood, AL", desc: "Surge protection along timber corridors, manual generator switches, and panel work." },
];

function SitemapPage() {
  return (
    <div className="bg-background text-foreground">
      <JsonLd data={[
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Website Directory & HTML Sitemap | Burnett Electric",
          "url": "https://www.burnettelectrictuscaloosa.com/sitemap",
          "description": "Complete HTML sitemap directory of Burnett Electric residential electrical services and service areas.",
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.burnettelectrictuscaloosa.com/" },
            { "@type": "ListItem", "position": 2, "name": "Sitemap", "item": "https://www.burnettelectrictuscaloosa.com/sitemap" },
          ],
        },
      ]} />
      <Header />
      <FloatingCTA />

      {/* Hero */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 gradient-dark" />
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "radial-gradient(circle at 20% 40%, #F4B400 0%, transparent 45%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
          <div className="mb-4">
            <Breadcrumbs items={[{ label: "Sitemap" }]} />
          </div>
          <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-dark text-primary text-xs font-semibold uppercase tracking-widest mb-4">
              <FileCode2 className="h-3.5 w-3.5" /> Site Index & Navigation Directory
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
              Burnett Electric <span className="text-gradient-primary">Sitemap</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/80">
              Direct links to every residential electrical service, regional coverage area, and customer resource across our website.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Pages Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Core Pages" title="Primary Company Pages" subtitle="Essential company information, reviews, and direct contact options." center={false} />
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {mainPages.map((p) => (
              <Link key={p.to} to={p.to as any} className="group p-6 rounded-2xl bg-card border border-border shadow-card hover:border-primary hover:shadow-elegant transition-all flex flex-col justify-between">
                <div>
                  <div className="font-display font-bold text-lg text-secondary group-hover:text-primary transition flex items-center justify-between">
                    <span>{p.label}</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition" />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
                <div className="mt-4 text-xs font-semibold text-primary uppercase tracking-wider flex items-center gap-1">
                  Visit page <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Services" title="Residential Electrical Services" subtitle="Specialized residential installations, panel heavy-ups, repairs, and rewiring." center={false} />
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicePages.map((s) => (
              <Link key={s.to} to={s.to as any} className="group p-6 rounded-2xl bg-card border border-border shadow-card hover:border-primary hover:shadow-elegant transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center text-secondary shadow-glow">
                      <Zap className="h-4 w-4" />
                    </div>
                    <span className="font-display font-bold text-base text-secondary group-hover:text-primary transition">{s.label}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
                <div className="mt-5 text-xs font-semibold text-secondary group-hover:text-primary flex items-center gap-1 transition">
                  Explore service <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Service Areas" title="Locations We Serve in West Alabama" subtitle="Local dispatch across Tuscaloosa County and scheduled projects in the Birmingham area." center={false} />
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {locationPages.map((loc) => (
              <Link key={loc.to} to={loc.to as any} className="group p-6 rounded-2xl bg-card border border-border shadow-card hover:border-primary hover:shadow-elegant transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="font-display font-bold text-base text-secondary group-hover:text-primary transition">{loc.city}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{loc.desc}</p>
                </div>
                <div className="mt-4 text-xs font-semibold text-secondary group-hover:text-primary flex items-center gap-1 transition">
                  View local page <ChevronRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Crawler & Machine Feeds */}
      <section className="py-14 bg-surface border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 bg-card border border-border shadow-card">
            <h2 className="font-display font-bold text-xl text-secondary">Search Engine & Syndication Feeds</h2>
            <p className="mt-1 text-sm text-muted-foreground">Machine-readable endpoints provided for search engines, web crawlers, and automated indexers.</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full gradient-primary text-secondary font-semibold text-sm shadow-glow hover:scale-105 transition">
                <FileCode2 className="h-4 w-4" /> XML Sitemap (/sitemap.xml)
              </a>
              <a href="/rss.xml" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface border border-border hover:border-primary text-secondary font-semibold text-sm transition">
                <Rss className="h-4 w-4 text-primary" /> RSS Feed (/rss.xml)
              </a>
              <a href="/robots.txt" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface border border-border hover:border-primary text-secondary font-semibold text-sm transition">
                Robots.txt (/robots.txt)
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
