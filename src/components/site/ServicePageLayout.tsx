import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone, ShieldCheck, Zap } from "lucide-react";
import { Header, useParallax } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingCTA } from "@/components/site/FloatingCTA";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FAQ } from "@/components/site/FAQ";
import { CTASection } from "@/components/site/CTASection";
import { JsonLd } from "@/components/site/JsonLd";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { BUSINESS, IMG } from "@/lib/business";

export function ServicePageLayout({
  slug,
  h1,
  metaTitle,
  metaDescription,
  eyebrow,
  hero,
  intro,
  benefits,
  problems,
  process,
  faqs,
  related,
}: {
  slug: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  hero: string;
  intro: string;
  benefits: { title: string; desc: string }[];
  problems: string[];
  process: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  related: { to: string; label: string }[];
}) {
  const url = `https://burnettelectric.com/${slug}`;
  const y = useParallax(80);
  return (
    <div className="bg-background text-foreground">
      <JsonLd data={[
        {
          "@context": "https://schema.org", "@type": "Service",
          "serviceType": h1, "provider": { "@type": "Electrician", "name": BUSINESS.name, "telephone": "+12058263643" },
          "areaServed": BUSINESS.areas.map(a => a + ", AL"),
          "url": url, "description": metaDescription,
        },
        {
          "@context": "https://schema.org", "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://burnettelectric.com/" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://burnettelectric.com/services" },
            { "@type": "ListItem", "position": 3, "name": h1, "item": url },
          ]
        },
        {
          "@context": "https://schema.org", "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
        }
      ]} />
      <Header />
      <FloatingCTA />

      <section className="relative min-h-[70vh] flex items-center pt-24 overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img src={hero} alt={h1} className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 hero-overlay" />
        </motion.div>
        
        <div className="absolute top-24 left-0 right-0 z-10 pt-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: "Services", to: "/services" }, { label: h1 }]} />
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-white mt-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-dark text-primary text-xs font-semibold uppercase tracking-widest mb-5">
              <Zap className="h-3.5 w-3.5" /> {eyebrow}
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold max-w-3xl leading-[1.05]">{h1}</h1>
            <p className="mt-5 text-lg text-white/80 max-w-2xl">{intro}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full gradient-primary text-secondary font-semibold shadow-glow hover:scale-105 transition">
                <Phone className="h-4 w-4" /> Call {BUSINESS.phone}
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full glass-dark text-white font-semibold border border-white/20 hover:bg-white/10">
                Free Estimate <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Why choose us" title="Benefits of choosing Burnett Electric" />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-7 rounded-2xl bg-card shadow-card border border-border hover:shadow-elegant hover:-translate-y-1 transition-all">
                <div className="h-11 w-11 rounded-xl gradient-primary flex items-center justify-center shadow-glow mb-4">
                  <ShieldCheck className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-secondary">{b.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.img initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} src={IMG.repair} alt="Electrician diagnosing issue" loading="lazy" className="w-full h-[420px] object-cover rounded-3xl shadow-elegant" />
          <div>
            <SectionHeading center={false} eyebrow="Common problems" title="Signs you need this service" />
            <ul className="mt-8 space-y-4">
              {problems.map((p, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-start gap-3 text-secondary">
                  <span className="mt-1.5 h-2 w-2 rounded-full gradient-primary" /> <span className="text-base">{p}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our process" title="Simple, transparent, done right" />
          <div className="mt-14 relative">
            <div className="hidden md:block absolute top-9 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {process.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="relative text-center">
                  <div className="mx-auto h-16 w-16 rounded-2xl gradient-primary text-secondary flex items-center justify-center text-xl font-display font-bold shadow-glow">{i + 1}</div>
                  <h3 className="mt-5 font-display font-semibold text-secondary">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQs" title="Frequently Asked Questions" />
          <div className="mt-12"><FAQ items={faqs} /></div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading eyebrow="Related" title="Explore Related Services" />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {related.map((r) => (
              <Link key={r.to} to={r.to} className="px-5 py-2.5 rounded-full bg-card border border-border hover:border-primary hover:text-primary shadow-card font-medium text-secondary transition">{r.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
