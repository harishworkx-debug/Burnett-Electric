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
      { title: "About Burnett Electric | Local Electrician in Tuscaloosa, AL" },
      { name: "description", content: "Meet Shad Burnett — owner of Burnett Electric. Locally owned, licensed & insured electrical contractor serving Tuscaloosa, Northport & Birmingham, AL." },
      { property: "og:title", content: "About Burnett Electric | Local Electrician in Tuscaloosa" },
      { property: "og:description", content: "Locally owned, licensed & insured electrical contractor serving West Alabama." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: IMG.crew },
      { name: "twitter:image", content: IMG.crew },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, title: "Licensed & Insured", desc: "State-licensed electrical contractor with full liability & workers' comp." },
  { icon: Award, title: "Quality Craftsmanship", desc: "Every job is completed to code and inspected before we hand you the keys." },
  { icon: Handshake, title: "Honest Pricing", desc: "Upfront quotes, no surprise fees, and options at every price point." },
  { icon: Heart, title: "Family Owned", desc: "Owned and operated by Shad Burnett and his hand-picked team of pros." },
  { icon: Users, title: "Local Roots", desc: "Alabama born and raised — we treat every home like it belongs to a neighbor." },
  { icon: Zap, title: "Fast Response", desc: "Most calls answered and dispatched the same day, 24/7 for emergencies." },
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
            <p className="mt-5 text-lg text-white/80">Burnett Electric was founded on a simple idea: Alabama families and businesses deserve honest, high-quality electrical work from people who actually pick up the phone.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.img initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} src={IMG.electrician} alt="Shad Burnett, licensed electrician" loading="lazy" className="w-full h-[520px] object-cover rounded-3xl shadow-elegant" />
          <div>
            <SectionHeading center={false} eyebrow="Meet the owner" title="Shad Burnett" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Shad has spent his career in the trades — starting as an apprentice and working his way up to master electrician. After years working for larger contractors, he launched Burnett Electric to bring big-shop expertise to homeowners and small businesses in Buhl, Tuscaloosa, Northport, and Birmingham, without the big-shop attitude.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Today, Burnett Electric is trusted by hundreds of families and business owners across West Alabama for panel upgrades, rewires, commercial fit-outs, and 24/7 emergency response.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { v: "15+", l: "Years in trade" },
                { v: "2,000+", l: "Projects delivered" },
                { v: "4.9★", l: "Google rating" },
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
          <SectionHeading eyebrow="Mission & Values" title="What We Stand For" subtitle="Every job — big or small — gets our best work, on-time and on-code." />
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
