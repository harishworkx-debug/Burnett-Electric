import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Users, Heart, Handshake, Zap } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingCTA } from "@/components/site/FloatingCTA";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTASection } from "@/components/site/CTASection";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Burnett Electric | Electrician in Tuscaloosa, AL" },
      { name: "description", content: "Learn about Burnett Electric, owned and operated by Shad Burnett. Providing honest, licensed residential electrical services across West Alabama." },
      { property: "og:title", content: "About Burnett Electric | Electrician in Tuscaloosa, AL" },
      { property: "og:description", content: "Meet Shad Burnett and learn about our commitment to residential electrical safety and upfront pricing in West Alabama." },
      { property: "og:url", content: "https://www.burnettelectrictuscaloosa.com/about" },
      { property: "og:image", content: `https://www.burnettelectrictuscaloosa.com${IMG.crew}` },
      { name: "twitter:image", content: `https://www.burnettelectrictuscaloosa.com${IMG.crew}` },
    ],
    links: [{ rel: "canonical", href: "https://www.burnettelectrictuscaloosa.com/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, title: "Pure Residential Focus", desc: "We specialize exclusively in home electrical systems, panel upgrades, and family safety." },
  { icon: Award, title: "100% Code Compliance", desc: "Every wire run and breaker installed adheres strictly to National Electrical Code (NEC) standards." },
  { icon: Handshake, title: "Upfront Itemized Pricing", desc: "Clear, written quotes before work begins. No unexpected add-ons or hidden trip fees." },
  { icon: Heart, title: "Family & Home Safety First", desc: "We treat your home like our own, ensuring reliable protection against surges and fire hazards." },
  { icon: Users, title: "Local West Alabama Roots", desc: "Proudly based in Buhl and actively serving Tuscaloosa, Northport, and surrounding communities." },
  { icon: Zap, title: "Direct Owner Accountability", desc: "Shad Burnett personally oversees operations and stands behind the quality of every job." },
];

function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <FloatingCTA />

      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-dark" />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 80% 40%, #2563EB 0%, transparent 45%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-dark text-primary text-xs font-semibold uppercase tracking-widest mb-5">Our Story</div>
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-[1.05]">Locally Owned. <span className="text-gradient-primary">Deeply Committed.</span></h1>
            <p className="mt-5 text-lg text-white/80">Burnett Electric provides West Alabama homeowners with honest, licensed residential electrical services.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.img initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} src={IMG.electrician} alt="Shad Burnett, licensed electrician" loading="lazy" className="w-full h-[520px] object-cover rounded-3xl shadow-elegant" />
          <div>
            <SectionHeading center={false} eyebrow="Meet the Owner" title="Shad Burnett" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Burnett Electric is a locally owned and operated electrical contractor providing expert residential services to Tuscaloosa, Northport, Buhl, and West Alabama.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Led by Shad Burnett, our team is dedicated to safety, honesty, and high-quality workmanship. Whether you need a simple outlet repaired or a full historic home rewire, we bring the exact same level of care and precision to every project.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { v: "Local", l: "Owned & Operated" },
                { v: "Licensed", l: "& Fully Insured" },
                { v: "100%", l: "Upfront Pricing" },
              ].map((s) => (
                <div key={s.l} className="p-4 rounded-2xl bg-surface border border-border text-center">
                  <div className="font-display font-bold text-2xl text-secondary">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Core Values" title="How We Do Business" subtitle="Honest communication, licensed craftsmanship, and total respect for your home." />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all">
                <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
                  <v.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="mt-5 font-display font-semibold text-lg text-secondary">{v.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
