import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Wrench, Cable, Building2, Lamp, CheckCircle2, Phone, Zap, ShieldCheck, Plug, Home, Siren, Wifi, Fan, Droplet, Flame, ShieldAlert, Lightbulb, MonitorPlay, Cpu, BatteryCharging, Factory } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingCTA } from "@/components/site/FloatingCTA";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTASection } from "@/components/site/CTASection";
import { JsonLd } from "@/components/site/JsonLd";
import { BUSINESS, IMG } from "@/lib/business";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Electrical Services in Tuscaloosa | Burnett Electric" },
      { name: "description", content: "From repairs to wiring upgrades and commercial work, Burnett Electric handles it all in Tuscaloosa, AL. Reliable, licensed & insured. Call 205-826-3643." },
      { property: "og:title", content: "Electrical Services in Tuscaloosa | Burnett Electric" },
      { property: "og:description", content: "Repairs, wiring upgrades, commercial & outdoor electrical services." },
      { property: "og:url", content: "/services" },
      { property: "og:image", content: IMG.electrician },
      { name: "twitter:image", content: IMG.electrician },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Wrench, title: "Electrical Repairs", to: "/electrical-repairs-tuscaloosa-al", img: IMG.repair,
    desc: "Fast, safe repairs for breakers, outlets, panels, flickering lights, and dedicated circuits.",
    benefits: ["Same-day diagnostic", "GFCI outlet installs", "Code-compliant fixes", "Dedicated circuits"],
  },
  {
    icon: Cable, title: "Wiring Upgrades", to: "/wiring-upgrades-tuscaloosa-al", img: IMG.wiring,
    desc: "Whole-home rewires, aluminum wiring replacement, and mobile home electrical upgrades.",
    benefits: ["Knob & tube removal", "Aluminum-to-copper", "Mobile home wiring", "Insurance approved"],
  },
  {
    icon: ShieldCheck, title: "Panel Upgrades", to: "/panel-upgrades-tuscaloosa-al", img: IMG.panel,
    desc: "Upgrade to 200 or 400 amps. Replace dangerous fuse boxes and install whole-home surge protection.",
    benefits: ["Increased capacity", "Code compliance", "Federal Pacific removal", "Surge protection ready"],
  },
  {
    icon: Lightbulb, title: "Lighting & Fan Installation", to: "/lighting-installation-tuscaloosa-al", img: IMG.bulb,
    desc: "Recessed lighting, LED upgrades, ceiling fans, exhaust fans, and smoke detectors.",
    benefits: ["LED retrofits & cans", "Ceiling & exhaust fans", "Smoke & CO detectors", "Energy savings"],
  },
  {
    icon: Lamp, title: "Outdoor Wiring", to: "/outdoor-wiring-tuscaloosa-al", img: IMG.outdoor,
    desc: "Landscape lighting, security floodlights, pool lighting, and hot tub wiring.",
    benefits: ["Weatherproof installs", "Landscape & security", "Pool & hot tub wiring", "GFCI protection"],
  },
  {
    icon: Building2, title: "Commercial Electrical", to: "/commercial-electrical-tuscaloosa-al", img: IMG.commercial,
    desc: "Offices, retail tenant fit-outs, restaurants and warehouses — on-time, on-budget.",
    benefits: ["Tenant fit-outs", "LED retrofits", "Emergency lighting", "Backup power"],
  },
  {
    icon: Wifi, title: "Smart Home Installation", to: "/smart-home-installation-tuscaloosa-al", img: IMG.home,
    desc: "Professional installation of smart switches, automated systems, and home theater wiring.",
    benefits: ["Home theater wiring", "Hardwired cameras", "Smart thermostats", "Seamless integration"],
  },
  {
    icon: Zap, title: "Generator Installation", to: "/generator-installation-tuscaloosa-al", img: IMG.home,
    desc: "Whole-home standby generators to keep your power on during severe weather outages.",
    benefits: ["Automatic transfer switch", "Sizing calculation", "Gas coordination", "Turnkey installation"],
  },
  {
    icon: BatteryCharging, title: "EV Charger Installation", to: "/ev-charger-installation-tuscaloosa-al", img: IMG.wiring,
    desc: "Level 2 charging stations installed at your home or business for fast overnight charging.",
    benefits: ["Dedicated 240V circuits", "Tesla Wall Connectors", "Load calculations", "Permitted & inspected"],
  },
  {
    icon: Siren, title: "24/7 Emergency Electrician", to: "/emergency-electrician-tuscaloosa-al", img: IMG.repair,
    desc: "Immediate response for sparking panels, partial power loss, and dangerous electrical faults.",
    benefits: ["Rapid response", "Fully stocked vans", "Storm damage repair", "Safety prioritized"],
  }
];

function ServicesPage() {
  return (
    <div className="bg-background text-foreground">
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://burnettelectric.com/" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://burnettelectric.com/services" },
        ]
      }} />
      <Header />
      <FloatingCTA />

      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-dark" />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, #F4B400 0%, transparent 45%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-dark text-primary text-xs font-semibold uppercase tracking-widest mb-5">Our Services</div>
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-[1.05]">Electrical Services in <span className="text-gradient-primary">Tuscaloosa, AL</span></h1>
            <p className="mt-5 text-lg text-white/80">Repairs, upgrades, commercial and outdoor electrical — all delivered by one licensed, local team you can trust.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="relative rounded-3xl overflow-hidden shadow-elegant group">
                <img src={s.img} alt={s.title} loading="lazy" className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
                <div className="absolute top-5 left-5 h-12 w-12 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
                  <s.icon className="h-6 w-6 text-secondary" />
                </div>
              </div>
              <div>
                <SectionHeading center={false} eyebrow={`0${i + 1}`} title={s.title} subtitle={s.desc} />
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-secondary"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /> {b}</li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to={s.to} className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-primary text-secondary font-semibold shadow-glow hover:scale-105 transition">
                    Explore {s.title} <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border shadow-card text-secondary font-semibold hover:border-primary transition">
                    <Phone className="h-4 w-4" /> {BUSINESS.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
