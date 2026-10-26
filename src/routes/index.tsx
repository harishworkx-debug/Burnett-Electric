import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Phone, ArrowRight, ShieldCheck, Star, Zap, Wrench, Lightbulb,
  Lamp, Cable, Award, Users, Clock, AlertTriangle, Sparkles, MapPin, ChevronRight, CheckCircle2,
} from "lucide-react";
import { Header, useParallax } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingCTA } from "@/components/site/FloatingCTA";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FAQ } from "@/components/site/FAQ";
import { CTASection } from "@/components/site/CTASection";
import { JsonLd, localBusinessSchema, organizationSchema, siteNavigationSchema } from "@/components/site/JsonLd";
import { BUSINESS, IMG } from "@/lib/business";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Electrician in Tuscaloosa, AL | Burnett Electric" },
      { name: "description", content: "Burnett Electric provides residential electrical repairs, wiring, panel upgrades, lighting, generators and EV charger installation in Tuscaloosa, AL. Call (205) 634-8185." },
      { property: "og:title", content: "Electrician in Tuscaloosa, AL | Burnett Electric" },
      { property: "og:description", content: "Licensed & insured residential electrical services for homeowners across Tuscaloosa, Northport, and West Alabama." },
      { property: "og:url", content: "https://www.burnettelectrictuscaloosa.com/" },
      { property: "og:image", content: `https://www.burnettelectrictuscaloosa.com${IMG.hero}` },
      { name: "twitter:image", content: `https://www.burnettelectrictuscaloosa.com${IMG.hero}` },
      { name: "keywords", content: "electrician Tuscaloosa AL, residential electrician Tuscaloosa, electrical repair Tuscaloosa, panel upgrades Tuscaloosa, Burnett Electric" },
    ],
    links: [
      { rel: "canonical", href: "https://www.burnettelectrictuscaloosa.com/" },
      { rel: "preload", as: "image", href: IMG.hero, fetchpriority: "high" } as any,
    ],
  }),
  component: HomePage,
});


const stats = [
  { value: "4.9 ★", label: "128+ Google Reviews" },
  { value: "100%", label: "Upfront Itemized Pricing" },
  { value: "Licensed", label: "& Insured in Alabama" },
  { value: "Fast Dispatch", label: "Tuscaloosa • Northport • Buhl" },
];

const services = [
  { icon: Wrench, title: "Electrical Repair", desc: "Fast, safe fixes for outlets, breakers, panels, flickering lights and dead circuits.", to: "/electrical-repairs-tuscaloosa-al", img: IMG.repair },
  { icon: Cable, title: "Wiring Upgrades", desc: "Whole-home rewires and safe modernization for older properties.", to: "/wiring-upgrades-tuscaloosa-al", img: IMG.wiring },
  { icon: Lamp, title: "Outdoor Wiring", desc: "Landscape lighting, security floods, and dedicated outdoor circuits.", to: "/outdoor-wiring-tuscaloosa-al", img: IMG.outdoor },
  { icon: Zap, title: "Generator Installation", desc: "Whole-home standby generators to keep your power on during severe storms.", to: "/generator-installation-tuscaloosa-al", img: IMG.outdoor },
  { icon: ShieldCheck, title: "Panel Upgrades", desc: "Replacing outdated fuse boxes and installing high-capacity breaker panels.", to: "/panel-upgrades-tuscaloosa-al", img: IMG.panel },
  { icon: Lightbulb, title: "Lighting & Fans", desc: "Indoor recessed lighting, ceiling fans, and custom lighting design.", to: "/lighting-installation-tuscaloosa-al", img: IMG.bulb },
  { icon: Zap, title: "EV Charger Install", desc: "Level 2 electric vehicle charging stations for your garage or driveway.", to: "/ev-charger-installation-tuscaloosa-al", img: IMG.home },
  { icon: AlertTriangle, title: "Emergency Electrician", desc: "Rapid response for sparking panels, power outages, and electrical hazards.", to: "/emergency-electrician-tuscaloosa-al", img: IMG.night },
  { icon: Lightbulb, title: "Smart Home Install", desc: "Modern smart switches, thermostats, and automated home lighting controls.", to: "/smart-home-installation-tuscaloosa-al", img: IMG.home },
];

const why = [
  { icon: ShieldCheck, title: "Licensed & Insured", desc: "State-certified electrical contractor strictly adhering to National Electrical Code (NEC) safety standards." },
  { icon: Clock, title: "Prompt Local Dispatch", desc: "Fast local response times across Tuscaloosa, Northport, Buhl, and surrounding communities." },
  { icon: Award, title: "Upfront Itemized Pricing", desc: "Clear, written quotes before any work begins. No hidden travel surcharges or surprise fees." },
  { icon: Users, title: "Locally Owned & Operated", desc: "Owned and operated by Shad Burnett — a local neighbor who stands behind every job." },
  { icon: AlertTriangle, title: "Priority Emergency Response", desc: "Rapid dispatch for hazardous electrical emergencies: sparking panels, burning smells, and total power outages." },
  { icon: Sparkles, title: "1-Year Workmanship Warranty", desc: "All panel upgrades, rewires, and installations backed by our 1-year residential workmanship warranty." },
];

const process = [
  { title: "Contact", desc: "Call or text (205) 634-8185. We discuss your electrical concern and schedule a convenient visit." },
  { title: "Diagnose", desc: "We arrive on time, inspect your system, and explain the exact issue in clear, plain English." },
  { title: "Itemized Quote", desc: "You receive a firm, upfront price before we touch a wire. Zero pressure, zero hidden fees." },
  { title: "Code-Compliant Repair", desc: "We complete the work cleanly to local code, test thoroughly, and leave your home spotless." },
];

const standards = [
  {
    title: "1-Year Workmanship Warranty",
    desc: "Every breaker panel replacement, whole-house rewire, and EV charger installation is protected by our 1-year workmanship warranty.",
  },
  {
    title: "100% NEC Code Compliance",
    desc: "All work is completed to the latest National Electrical Code (NEC) standards and coordinated with City of Tuscaloosa and Northport building inspectors.",
  },
  {
    title: "Clean Home Guarantee",
    desc: "We respect your home. Our electricians use protective boot covers, lay drop cloths, and thoroughly clean up before leaving.",
  },
  {
    title: "Owner-Supervised Quality",
    desc: "Shad Burnett personally oversees operations and quality standards, ensuring honest advice and meticulous workmanship every time.",
  },
];

const projects = [
  { img: IMG.panel, title: "200A Breaker Panel Upgrade", tag: "Northport — Huntington Place", desc: "Replaced an overloaded 100A fuse box with a modern 200A Square D panel and whole-home surge protector." },
  { img: IMG.wiring, title: "Historic Craftsman Home Rewire", tag: "Downtown Tuscaloosa", desc: "Non-invasive copper rewiring to eliminate hazardous knob-and-tube wiring behind historic plaster walls." },
  { img: IMG.outdoor, title: "Whole-Home Standby Generator", tag: "Buhl — West Tuscaloosa County", desc: "Installed turnkey Generac standby generator with automatic transfer switch for rural storm outage resilience." },
  { img: IMG.night, title: "Level 2 Dedicated EV Charger", tag: "Northport — Northwood Lake", desc: "Installed dedicated 50A 240V garage charging circuit for safe, fast overnight vehicle charging." },
  { img: IMG.bulb, title: "Recessed LED & Fixture Upgrade", tag: "Lake Tuscaloosa", desc: "High-efficiency recessed LED retrofit and dimmable circuit layout for open-concept living area." },
  { img: IMG.repair, title: "Emergency Circuit & Breaker Repair", tag: "Cottondale", desc: "Same-day troubleshooting and replacement of a burnt neutral wire and sparking breaker." },
];

const reviews = [
  { name: "Juanita Green", city: "Google Local Guide", text: "Shad was my electrician. He was very professional, courteous and kind. I will call him all times for any electrical work. He cared about the safety of me and my grandchildren. May God continue to bless him and his company.", rating: 5 },
  { name: "Gena Kilgore", city: "Verified Customer", text: "Shad was very responsive to my call. He did what he said he would and did a great job! Would definitely use him again and will recommend him to others!", rating: 5 },
  { name: "Terrell McKinney", city: "Google Local Guide", text: "Does great work and do it at a fast pace. Would highly recommend them. They’re a life saver.", rating: 5 },
];

const faqs = [
  { q: "How can I schedule an electrician in Tuscaloosa?", a: "Call or text (205) 634-8185. You can also fill out our online contact form to schedule a diagnostic visit or project quote." },
  { q: "Are your electricians licensed and insured in Alabama?", a: "Yes. Burnett Electric is fully state-licensed and carries comprehensive general liability and workers' compensation insurance for all residential electrical work." },
  { q: "What areas do you provide service to?", a: "Our primary daily service area covers Tuscaloosa, Northport, Buhl, Cottondale, Vance, Coaling, Moundville, and Brookwood. We also accept major scheduled residential rewiring and panel projects in the Greater Birmingham metro." },
  { q: "Do you offer emergency electrical repairs?", a: "Yes. For urgent hazards such as sparking breaker panels, burning plastic odors, or sudden partial power loss, we prioritize same-day emergency dispatch." },
  { q: "Do you provide upfront pricing before work begins?", a: "Always. We evaluate your electrical system on site, explain the issue in plain English, and provide a firm, itemized quote before starting any work. No surprise travel fees or hidden add-ons." },
  { q: "Do you warranty your electrical work?", a: "Yes. All panel upgrades, rewires, and installations come with our 1-year workmanship warranty in addition to all manufacturer equipment warranties." },
];

function HomePage() {
  const y1 = useParallax(120);
  const y2 = useParallax(60);
  return (
    <div className="bg-background text-foreground">
      <JsonLd data={[
        localBusinessSchema,
        organizationSchema,
        siteNavigationSchema,
        { "@context": "https://schema.org", "@type": "WebSite", "name": "Burnett Electric", "url": "https://www.burnettelectrictuscaloosa.com/" },
        { "@context": "https://schema.org", "@type": "WebPage", "name": "Electrician in Tuscaloosa, AL", "url": "https://www.burnettelectrictuscaloosa.com/" },
        {
          "@context": "https://schema.org", "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
        },
      ]} />
      <Header />
      <FloatingCTA />

      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
          <img src={IMG.hero} alt="Licensed residential electrician working on panel in Tuscaloosa, AL" className="w-full h-full object-cover scale-110" fetchPriority="high" />
          <div className="absolute inset-0 hero-overlay" />
        </motion.div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-8 text-white">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-primary text-xs font-semibold uppercase tracking-widest mb-6">
                <Zap className="h-3.5 w-3.5" fill="currentColor" /> Serving Tuscaloosa • Northport • Buhl & Surrounding West AL
              </div>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.02] max-w-4xl">
                Electrician in Tuscaloosa, AL
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
                Licensed & Insured Residential Electrical Services for Homeowners Across Tuscaloosa and West Alabama
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href={BUSINESS.phoneHref} className="pulse-ring group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full gradient-primary text-secondary font-semibold shadow-glow hover:scale-105 transition-transform">
                  <Phone className="h-5 w-5" /> Call {BUSINESS.phone}
                </a>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full glass-dark text-white font-semibold border border-white/20 hover:bg-white/10 transition">
                  Request Service Now <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {["Licensed & Insured", "Residential Specialist", "Upfront Itemized Pricing", "Locally Owned & Operated"].map((b) => (
                  <span key={b} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-dark border border-white/10 text-white/90 text-xs font-medium">
                    <ShieldCheck className="h-3.5 w-3.5 text-primary" /> {b}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div initial={false} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="lg:col-span-4">
              <div className="glass rounded-3xl p-6 shadow-elegant animate-float">
                <div className="flex items-center gap-2">
                  <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}</div>
                  <span className="text-secondary font-semibold text-sm">4.9 ★ Rating on Google</span>
                </div>
                <p className="mt-4 text-secondary font-display font-semibold text-lg leading-snug">
                  "Shad was my electrician. He was very professional, courteous and kind. I will call him all times for any electrical work."
                </p>
                <div className="mt-3 text-xs text-muted-foreground">— Juanita Green, Google Local Guide</div>
                <div className="mt-6 grid grid-cols-2 gap-3 text-secondary">
                  {stats.slice(0, 2).map((s) => (
                    <div key={s.label} className="rounded-xl bg-primary/10 p-3 text-center">
                      <div className="font-display font-bold text-lg">{s.value}</div>
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.label}</div>
                    </div>
                  ))}
                </div>
                <a href={BUSINESS.phoneHref} className="mt-6 flex items-center justify-center gap-2 w-full rounded-full gradient-primary text-secondary py-3 font-semibold shadow-glow">
                  <Phone className="h-4 w-4" /> Talk to an Electrician
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative -mt-16 z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-card rounded-2xl p-6 md:p-7 shadow-elegant border border-border text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-secondary">{s.value}</div>
              <div className="mt-1 text-xs md:text-sm uppercase tracking-widest text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Comprehensive Electrical Services" title="Expert Solutions for Tuscaloosa Homeowners" subtitle="Explore our wide range of electrical repairs, safety modernizations, and upgrades for residential properties." />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.08 }} className="group relative overflow-hidden rounded-3xl bg-card shadow-card border border-border hover:shadow-elegant hover:-translate-y-1 transition-all">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent" />
                  <div className="absolute top-4 left-4 h-11 w-11 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
                    <s.icon className="h-5 w-5 text-secondary" />
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-display font-bold text-xl text-secondary">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground">{s.desc}</p>
                  <Link to={s.to} className="mt-4 inline-flex items-center gap-1.5 text-secondary font-semibold group-hover:text-primary transition">
                    {s.title} <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <motion.div style={{ y: y2 }} className="absolute -right-32 -top-32 w-96 h-96 rounded-full opacity-20 blur-3xl gradient-primary" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading eyebrow="Why Burnett Electric" title="Built on Honest Work & Neighborhood Safety" subtitle="Dedicated exclusively to protecting and upgrading your home's electrical systems." />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {why.map((w, i) => (
              <motion.div key={w.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-elegant hover:border-primary/40 transition-all">
                <div className="h-12 w-12 rounded-2xl gradient-primary flex items-center justify-center shadow-glow">
                  <w.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="mt-5 font-display font-semibold text-lg text-secondary">{w.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="How We Work" title="Simple, Transparent Process" subtitle="Four clear steps from your first call to a safe, tested job." />
          <div className="mt-16 relative">
            <div className="hidden md:block absolute top-9 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              {process.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative text-center">
                  <div className="mx-auto h-16 w-16 rounded-2xl gradient-primary text-secondary flex items-center justify-center text-xl font-display font-bold shadow-glow relative z-10">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-5 font-display font-semibold text-lg text-secondary">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STANDARDS / WORKMANSHIP */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Quality Guarantee" title="The Burnett Electric Standard" subtitle="We hold every repair and installation to the highest safety and craftsmanship standards in Alabama." />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((st, i) => (
              <motion.div key={st.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="p-7 rounded-2xl bg-card border border-border shadow-card flex flex-col justify-between">
                <div>
                  <div className="h-10 w-10 rounded-xl gradient-primary flex items-center justify-center text-secondary mb-4 shadow-glow">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-secondary">{st.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{st.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EMERGENCY BANNER */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl gradient-primary p-8 md:p-12 shadow-glow">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
            <div className="flex flex-col md:flex-row items-center gap-6 justify-between relative">
              <div className="flex items-center gap-4 text-secondary">
                <div className="h-14 w-14 rounded-2xl bg-secondary text-primary flex items-center justify-center">
                  <AlertTriangle className="h-7 w-7" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold tracking-widest">Residential Emergency Dispatch</div>
                  <div className="font-display text-2xl md:text-3xl font-bold">Sparks, smoking panels, or power loss?</div>
                </div>
              </div>
              <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-secondary text-primary font-semibold hover:scale-105 transition">
                <Phone className="h-5 w-5" /> Call Now — {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Recent Work" title="Real Residential Electrical Jobs in West Alabama" subtitle="A snapshot of actual panel upgrades, historic rewires, and generator installations completed in our community." />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-elegant border border-border bg-card transition flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full glass-dark text-primary text-xs font-semibold">
                    {p.tag}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-lg text-secondary group-hover:text-primary transition">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Customer Reviews" title="What Your Tuscaloosa Neighbors Are Saying" subtitle="See why homeowners across Tuscaloosa, Northport, and Buhl rate Burnett Electric 4.9 out of 5 stars on Google." />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="p-7 rounded-2xl bg-card border border-border shadow-card flex flex-col justify-between">
                <div>
                  <div className="flex gap-1">{[...Array(r.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}</div>
                  <p className="mt-4 text-secondary leading-relaxed italic">"{r.text}"</p>
                </div>
                <div className="mt-6 pt-4 border-t border-border flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center text-secondary font-bold">{r.name[0]}</div>
                  <div>
                    <div className="font-semibold text-secondary text-sm">{r.name}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1"><MapPin className="h-3 w-3" /> {r.city}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/reviews" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border shadow-card font-semibold text-secondary hover:border-primary transition">
              Read all verified reviews <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQs" title="Frequently Asked Questions" subtitle="Direct answers to common electrical questions from West Alabama homeowners." />
          <div className="mt-12"><FAQ items={faqs} /></div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Service Areas" title="Proudly Serving West & Central Alabama" subtitle="Fast dispatch throughout Tuscaloosa County and scheduled major projects across the Birmingham corridor." />
          <div className="mt-12 grid lg:grid-cols-4 md:grid-cols-2 gap-6">
            {[
              { to: "/electrician-northport", city: "Northport", desc: "Panel upgrades & historic home rewiring." },
              { to: "/electrician-buhl", city: "Buhl (Our Base)", desc: "Hometown dispatch, barns, workshops & generators." },
              { to: "/electrician-cottondale-al", city: "Cottondale", desc: "Fast residential troubleshooting & breaker repairs." },
              { to: "/electrician-vance-al", city: "Vance", desc: "Subdivision power upgrades & surge protection." },
              { to: "/electrician-coaling-al", city: "Coaling", desc: "Safe residential electrical installations & rewires." },
              { to: "/electrician-moundville-al", city: "Moundville", desc: "Weatherhead storm repair & service mast fixes." },
              { to: "/electrician-brookwood-al", city: "Brookwood", desc: "Honest upfront pricing & storm backup power." },
              { to: "/electrician-birmingham", city: "Birmingham", desc: "Major scheduled rewires, 400A panels & standby generators." },
            ].map((a) => (
              <Link key={a.to} to={a.to} className="group p-6 rounded-2xl bg-card border border-border shadow-card hover:border-primary hover:shadow-elegant transition-all flex flex-col justify-between">
                <div>
                  <MapPin className="h-6 w-6 text-primary" />
                  <div className="mt-4 font-display font-bold text-lg text-secondary group-hover:text-primary transition">{a.city}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
                </div>
                <div className="mt-5 text-sm font-semibold text-secondary group-hover:text-primary flex items-center gap-1 transition">
                  Explore Coverage <ChevronRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 rounded-3xl overflow-hidden shadow-elegant border border-border" dangerouslySetInnerHTML={{__html: BUSINESS.mapIframe}}>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
