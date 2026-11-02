import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, ArrowRight, Wrench, Cable, Building2, Lamp, CheckCircle2, Phone, Zap, ShieldCheck, Plug, Home, Siren, Wifi, Fan, Droplet, Flame, ShieldAlert, Lightbulb, MonitorPlay, Cpu, BatteryCharging, Factory } from "lucide-react";
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
      { title: "Electrical Services in Tuscaloosa, AL | Burnett Electric" },
      { name: "description", content: "Comprehensive residential electrical repairs, wiring upgrades, lighting, and home installations in Tuscaloosa, AL. Call (205) 634-8185." },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Electrical Services in Tuscaloosa, AL | Burnett Electric" },
      { property: "og:description", content: "Residential repairs, wiring upgrades, lighting, and outdoor electrical services." },
      { property: "og:url", content: "https://www.burnettelectrictuscaloosa.com/services" },
      { property: "og:image", content: `https://www.burnettelectrictuscaloosa.com${IMG.electrician}` },
      { name: "twitter:image", content: `https://www.burnettelectrictuscaloosa.com${IMG.electrician}` },
    ],
    links: [{ rel: "canonical", href: "https://www.burnettelectrictuscaloosa.com/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Wrench, title: "Electrical Repairs", to: "/electrical-repairs-tuscaloosa-al", img: IMG.repair,
    desc: "Fast, safe repairs for breakers, outlets, panels, flickering lights, and dedicated circuits.",
    benefits: ["Residential diagnostics", "GFCI outlet installs", "Electrical troubleshooting", "Dedicated circuits"],
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
    desc: "Level 2 charging stations installed at your home for convenient overnight charging.",
    benefits: ["Dedicated 240V circuits", "Tesla Wall Connectors", "Load calculations", "Permitted & inspected"],
  },
  {
    icon: Siren, title: "Emergency Residential Electrical Services", to: "/emergency-electrician-tuscaloosa-al", img: IMG.repair,
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
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.burnettelectrictuscaloosa.com/" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.burnettelectrictuscaloosa.com/services" },
        ]
      }} />
      <Header />
      <FloatingCTA />

      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-dark" />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, #F4B400 0%, transparent 45%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
          <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-dark text-primary text-xs font-semibold uppercase tracking-widest mb-5">Our Services</div>
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-[1.05]">Electrical Services in <span className="text-gradient-primary">Tuscaloosa, AL</span></h1>
            <p className="mt-5 text-lg text-white/80">Residential repairs, upgrades, lighting, and outdoor electrical services for homeowners.</p>
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

      {/* GENUINE SERVICE PROCESS & STANDARDS */}
      <section className="py-24 bg-surface border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Genuine Service Standards"
            title="How We Deliver Professional Electrical Work"
            subtitle="Transparent pricing, high-grade copper equipment, and strict National Electrical Code compliance on every residential project."
          />

          <div className="mt-16 grid lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-card border border-border shadow-card flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-2xl gradient-primary flex items-center justify-center text-secondary mb-6 shadow-glow">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-secondary">Diagnostic Accuracy First</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  We don't guess at electrical faults or start cutting drywall blindly. Our technicians use digital multimeters, circuit tracers, and thermal imaging to isolate the exact point of resistance, short circuit, or loose neutral.
                </p>
                <ul className="mt-6 space-y-2.5 text-xs text-secondary font-medium">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> Full panel & breaker stab inspection</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> Load calculations per NEC Article 220</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> Grounding & bonding verification</li>
                </ul>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-card border border-border shadow-card flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-2xl gradient-primary flex items-center justify-center text-secondary mb-6 shadow-glow">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-secondary">Premium Materials Only</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  We refuse to cut corners with cheap builder-grade components. Every breaker, panel enclosure, and cable we install is manufactured to commercial-grade tolerances from top American and global brands.
                </p>
                <ul className="mt-6 space-y-2.5 text-xs text-secondary font-medium">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> Square D QO & Siemens copper-bus panels</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> Pure solid copper Romex branch wiring</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> Type 2 Whole-Home Surge Protectors</li>
                </ul>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-card border border-border shadow-card flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-2xl gradient-primary flex items-center justify-center text-secondary mb-6 shadow-glow">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-secondary">Permitting & Power Company Coordination</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Heavy electrical jobs like panel replacements and standby generators require municipal building permits and utility coordination. We pull all permits and manage Alabama Power disconnect/reconnect tickets.
                </p>
                <ul className="mt-6 space-y-2.5 text-xs text-secondary font-medium">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> City of Tuscaloosa & Northport permits</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> Alabama Power meter disconnects handled</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> Official municipal electrical pass certificate</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-14 p-8 rounded-3xl bg-card border border-border">
            <div className="max-w-3xl">
              <div className="text-xs font-bold uppercase tracking-wider text-primary">Service Scope Transparency</div>
              <h4 className="font-display text-2xl font-bold text-secondary mt-1">Dedicated Purely to Residential Property Owners</h4>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                Burnett Electric works exclusively with homeowners, residential landlords, and residential renovation projects. By keeping our focus 100% on homes, our service vans stay fully stocked with residential circuit breakers, GFCI outlets, and Romex wire, ensuring we resolve your electrical needs without the multi-day delays common with commercial contractors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
