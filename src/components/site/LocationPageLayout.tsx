import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone, MapPin, Star } from "lucide-react";
import { Header, useParallax } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingCTA } from "@/components/site/FloatingCTA";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FAQ } from "@/components/site/FAQ";
import { CTASection } from "@/components/site/CTASection";
import { JsonLd } from "@/components/site/JsonLd";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { BUSINESS, IMG } from "@/lib/business";

export function LocationPageLayout({
  slug, h1, metaDescription, city, intro, landmarks, benefits, faqs, hero,
}: {
  slug: string;
  h1: string;
  metaDescription: string;
  city: string;
  intro: string;
  landmarks: string[];
  benefits: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  hero: string;
}) {
  const url = `https://burnettelectric.com/${slug}`;
  const y = useParallax(80);
  return (
    <div className="bg-background text-foreground">
      <JsonLd data={[
        {
          "@context": "https://schema.org", "@type": "LocalBusiness",
          "name": `Burnett Electric — Electrician ${city}, AL`,
          "url": url, "telephone": "+12058263643",
          "areaServed": `${city}, AL`,
          "address": { "@type": "PostalAddress", "addressLocality": city, "addressRegion": "AL", "addressCountry": "US" },
          "description": metaDescription,
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "128" },
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
            <Breadcrumbs items={[{ label: "Locations" }, { label: city }]} />
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-white mt-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-dark text-primary text-xs font-semibold uppercase tracking-widest mb-5">
              <MapPin className="h-3.5 w-3.5" /> Serving {city}, Alabama
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
            <div className="mt-6 flex items-center gap-4 text-sm text-white/70">
              <div className="flex items-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}</div>
              4.9 rating • 128+ reviews from {city} homeowners & businesses
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionHeading center={false} eyebrow={`${city}, AL`} title={`Your local electrician in ${city}`} />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Burnett Electric proudly serves homes and businesses across {city} — from historic neighborhoods to newer developments. Our licensed electricians live in the community and know the codes, wiring standards, and challenges that come with {city}'s mix of older and modern structures.
            </p>
            <div className="mt-8">
              <div className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Nearby landmarks we serve</div>
              <div className="flex flex-wrap gap-2">
                {landmarks.map((l) => (
                  <span key={l} className="px-3 py-1.5 rounded-full bg-muted text-secondary text-sm">{l}</span>
                ))}
              </div>
            </div>
          </div>
          <motion.img initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} src={IMG.city} alt={`${city} Alabama`} loading="lazy" className="w-full h-[440px] object-cover rounded-3xl shadow-elegant" />
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Coverage" title={`Full-service electrical in ${city}`} subtitle="Residential, commercial, emergency and upgrade services — all in one licensed team." />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-7 rounded-2xl bg-card shadow-card border border-border hover:border-primary/40 hover:-translate-y-1 transition-all">
                <h3 className="font-display font-semibold text-lg text-secondary">{b.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Service map" title={`Where we work in and around ${city}`} />
          <div className="mt-10 rounded-3xl overflow-hidden shadow-elegant border border-border" dangerouslySetInnerHTML={{__html: BUSINESS.mapIframe}}>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQs" title={`Electrical questions from ${city} customers`} />
          <div className="mt-12"><FAQ items={faqs} /></div>
        </div>
      </section>

      <CTASection title={`Need an Electrician in ${city}, AL?`} />
      <Footer />
    </div>
  );
}
