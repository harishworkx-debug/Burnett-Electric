import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Phone, ArrowRight, ShieldCheck, Star, Zap, Wrench, Building2, Lightbulb,
  Lamp, Cable, Award, Users, Clock, AlertTriangle, Sparkles, MapPin, ChevronRight,
} from "lucide-react";
import { Header, useParallax } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingCTA } from "@/components/site/FloatingCTA";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FAQ } from "@/components/site/FAQ";
import { CTASection } from "@/components/site/CTASection";
import { JsonLd, localBusinessSchema, organizationSchema } from "@/components/site/JsonLd";
import { BUSINESS, IMG } from "@/lib/business";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Burnett Electric | Electrician in Tuscaloosa, AL" },
      { name: "description", content: "Licensed electrician serving Tuscaloosa, Northport & Birmingham, AL. Repairs, wiring upgrades & commercial electrical. Call 205-826-3643 for a free estimate." },
      { property: "og:title", content: "Burnett Electric | Electrician in Tuscaloosa, AL" },
      { property: "og:description", content: "Licensed & Insured Electrical Services for Homes & Businesses in Tuscaloosa, AL." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: IMG.hero },
      { name: "twitter:image", content: IMG.hero },
      { name: "keywords", content: "electrician Tuscaloosa AL, electrical repairs, wiring upgrades, commercial electrical, licensed electrician, Burnett Electric" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: IMG.hero, fetchpriority: "high" } as any,
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "2,000+", label: "Projects Completed" },
  { value: "1,500+", label: "Happy Customers" },
  { value: "24/7", label: "Emergency Calls" },
];

const services = [
  { icon: Wrench, title: "Electrical Repairs", desc: "Fast, safe fixes for outlets, breakers, panels, flickering lights and dead circuits.", to: "/electrical-repairs", img: IMG.repair },
  { icon: Cable, title: "Wiring Upgrades", desc: "Rewires, panel upgrades and modernization for older Tuscaloosa homes.", to: "/wiring-upgrades", img: IMG.wiring },
  { icon: Building2, title: "Commercial Electrical", desc: "Offices, retail, restaurants and warehouses — code-compliant and on schedule.", to: "/commercial-electrical", img: IMG.commercial },
  { icon: Lamp, title: "Outdoor Wiring", desc: "Landscape lighting, security, EV chargers, generators and outdoor outlets.", to: "/outdoor-wiring", img: IMG.outdoor },
];

const why = [
  { icon: ShieldCheck, title: "Licensed & Insured", desc: "Fully licensed Alabama electricians backed by comprehensive insurance." },
  { icon: Clock, title: "Same-Day Service", desc: "Most calls answered and dispatched the same day, often within hours." },
  { icon: Award, title: "Upfront Pricing", desc: "Honest, itemized quotes before we start. No surprises, ever." },
  { icon: Users, title: "Locally Owned", desc: "Owned by Shad Burnett — a neighbor, not a national chain." },
  { icon: AlertTriangle, title: "24/7 Emergency", desc: "Power outages, sparks, burning smells — call any time, day or night." },
  { icon: Sparkles, title: "Clean, Respectful Crews", desc: "Uniformed, background-checked technicians who leave your home spotless." },
];

const process = [
  { title: "Book", desc: "Call, text or fill out the form. We confirm a time that fits your schedule." },
  { title: "Diagnose", desc: "On arrival we assess the issue and walk you through the options." },
  { title: "Quote", desc: "You get a written, upfront price — no pressure, no hidden fees." },
  { title: "Repair", desc: "We complete the work to code, clean up, and test everything before we leave." },
];

const projects = [
  { img: IMG.panel, title: "200A Panel Upgrade", tag: "Residential — Northport" },
  { img: IMG.commercial, title: "Retail Store Rewire", tag: "Commercial — Tuscaloosa" },
  { img: IMG.outdoor, title: "Backyard Lighting Install", tag: "Outdoor — Buhl" },
  { img: IMG.wiring, title: "Historic Home Rewire", tag: "Residential — Tuscaloosa" },
  { img: IMG.bulb, title: "LED Retrofit", tag: "Commercial — Birmingham" },
  { img: IMG.night, title: "EV Charger Install", tag: "Outdoor — Northport" },
];

const reviews = [
  { name: "Jessica M.", city: "Tuscaloosa, AL", text: "Shad and his team came out same-day when our breaker box was sparking. Professional, honest, and fair pricing. Highly recommend Burnett Electric!", rating: 5 },
  { name: "Robert K.", city: "Northport, AL", text: "Rewired our 1960s house and installed a new panel. Cleanest work I've ever seen and finished ahead of schedule.", rating: 5 },
  { name: "Amanda P.", city: "Birmingham, AL", text: "Called for outdoor lighting and ended up upgrading our entire outdoor system. Beautiful results. They treat your home like their own.", rating: 5 },
];

const faqs = [
  { q: "Do you offer free estimates?", a: "Yes. Every project starts with a free, no-obligation estimate. Call 205-826-3643 and we'll get you scheduled — often the same day." },
  { q: "Are you licensed and insured?", a: "Absolutely. Burnett Electric is a fully licensed Alabama electrical contractor with comprehensive liability insurance and workers' comp." },
  { q: "Which areas do you serve?", a: "We serve Tuscaloosa, Northport, Buhl, Birmingham and surrounding communities across west and central Alabama." },
  { q: "Do you handle emergencies?", a: "Yes — 24/7. Sparks, burning smells, partial outages or storm damage — call any time, day or night." },
  { q: "How soon can you come out?", a: "Most standard service calls are handled the same day or next morning. Emergency calls are prioritized immediately." },
  { q: "Do you work on both homes and businesses?", a: "Yes. We handle everything from a single outlet in a home to full commercial fit-outs, panel upgrades and generator installs." },
];

function HomePage() {
  const y1 = useParallax(120);
  const y2 = useParallax(60);
  return (
    <div className="bg-background text-foreground">
      <JsonLd data={[
        localBusinessSchema,
        organizationSchema,
        { "@context": "https://schema.org", "@type": "WebSite", "name": "Burnett Electric", "url": "https://burnettelectric.com/" },
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
          <img src={IMG.hero} alt="Licensed electrician working on panel in Tuscaloosa, AL" className="w-full h-full object-cover scale-110" fetchPriority="high" />
          <div className="absolute inset-0 hero-overlay" />
        </motion.div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-8 text-white">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-primary text-xs font-semibold uppercase tracking-widest mb-6">
                <Zap className="h-3.5 w-3.5" fill="currentColor" /> Buhl • Tuscaloosa • Northport • Birmingham
              </div>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.02] max-w-4xl">
                Trusted <span className="text-gradient-primary">Electrician</span> in Tuscaloosa, AL
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
                Licensed & Insured Electrical Services for Homes & Businesses. Same-day service, upfront pricing, and 24/7 emergency response.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href={BUSINESS.phoneHref} className="pulse-ring group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full gradient-primary text-secondary font-semibold shadow-glow hover:scale-105 transition-transform">
                  <Phone className="h-5 w-5" /> Call {BUSINESS.phone}
                </a>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full glass-dark text-white font-semibold border border-white/20 hover:bg-white/10 transition">
                  Free Estimate <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {["Licensed", "Insured", "Locally Owned", "24/7 Emergency"].map((b) => (
                  <span key={b} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-dark border border-white/10 text-white/90 text-xs font-medium">
                    <ShieldCheck className="h-3.5 w-3.5 text-primary" /> {b}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="lg:col-span-4">
              <div className="glass rounded-3xl p-6 shadow-elegant animate-float">
                <div className="flex items-center gap-2">
                  <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}</div>
                  <span className="text-secondary font-semibold text-sm">4.9 Google Rating</span>
                </div>
                <p className="mt-4 text-secondary font-display font-semibold text-lg leading-snug">
                  "Same-day, honest, and left the house cleaner than they found it."
                </p>
                <div className="mt-3 text-xs text-muted-foreground">— Jessica M., Tuscaloosa</div>
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
          <SectionHeading eyebrow="Our Services" title="Full-Service Electrical, Done Right" subtitle="From a single outlet to whole-home rewires and commercial fit-outs — one licensed team." />
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
                    Learn more <ChevronRight className="h-4 w-4" />
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
          <SectionHeading eyebrow="Why Choose Us" title="The Local Electrician Alabama Trusts" />
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
          <SectionHeading eyebrow="How We Work" title="Simple, Transparent Process" subtitle="Four steps from your first call to a job well done." />
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

      {/* RES vs COMMERCIAL */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Residential & Commercial" title="One Team. Every Property." />
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {[
              { img: IMG.home, title: "Residential Electrical", items: ["Whole-home rewires", "Panel & breaker upgrades", "Outlets, switches, lighting", "Ceiling fans & smart devices", "EV charger installs"] },
              { img: IMG.commercial, title: "Commercial Electrical", items: ["New construction & tenant fit-outs", "Retail, offices, restaurants", "LED retrofits & lighting design", "Emergency & exit lighting", "Data, low-voltage & backup power"] },
            ].map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative rounded-3xl overflow-hidden shadow-elegant">
                <img src={b.img} alt={b.title} loading="lazy" className="w-full h-[440px] object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <h3 className="font-display font-bold text-2xl">{b.title}</h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-white/85">
                    {b.items.map((it) => <li key={it} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> {it}</li>)}
                  </ul>
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
                  <div className="text-xs uppercase font-bold tracking-widest">24/7 Emergency Electrical</div>
                  <div className="font-display text-2xl md:text-3xl font-bold">Sparks, outages, burning smell?</div>
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
          <SectionHeading eyebrow="Featured Projects" title="Recent Work Across Alabama" />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                  <div className="text-xs uppercase tracking-widest text-primary font-semibold">{p.tag}</div>
                  <div className="font-display font-semibold text-lg">{p.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Reviews" title="Loved by Homeowners & Businesses" subtitle="4.9★ average from 128+ Google reviews across Tuscaloosa County." />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="p-7 rounded-2xl bg-card border border-border shadow-card">
                <div className="flex gap-1">{[...Array(r.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}</div>
                <p className="mt-4 text-secondary leading-relaxed">"{r.text}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center text-secondary font-bold">{r.name[0]}</div>
                  <div>
                    <div className="font-semibold text-secondary">{r.name}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1"><MapPin className="h-3 w-3" /> {r.city}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/reviews" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border shadow-card font-semibold text-secondary hover:border-primary transition">
              Read all reviews <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQs" title="Frequently Asked Questions" />
          <div className="mt-12"><FAQ items={faqs} /></div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Service Areas" title="Proudly Serving West & Central Alabama" />
          <div className="mt-12 grid lg:grid-cols-3 gap-6">
            {[
              { to: "/tuscaloosa", city: "Tuscaloosa, AL", desc: "Homes, businesses & UA-area properties." },
              { to: "/northport", city: "Northport, AL", desc: "Panel upgrades, rewires and new construction." },
              { to: "/birmingham", city: "Birmingham, AL", desc: "Commercial fit-outs & residential service." },
              { to: "/buhl", city: "Buhl, AL", desc: "Your hometown electrician. Fast local response." },
            ].map((a) => (
              <Link key={a.to} to={a.to} className="group p-8 rounded-2xl bg-card border border-border shadow-card hover:border-primary hover:shadow-elegant transition-all">
                <MapPin className="h-6 w-6 text-primary" />
                <div className="mt-4 font-display font-bold text-xl text-secondary group-hover:text-primary transition">{a.city}</div>
                <p className="mt-2 text-muted-foreground">{a.desc}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary group-hover:text-primary">
                  Explore area <ChevronRight className="h-4 w-4" />
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
