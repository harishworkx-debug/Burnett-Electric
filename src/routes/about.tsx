import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Users,
  Heart,
  Handshake,
  Zap,
  CheckCircle2,
  Phone,
  ArrowRight,
  Clock,
  Sparkles,
  MapPin,
  FileCheck,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingCTA } from "@/components/site/FloatingCTA";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTASection } from "@/components/site/CTASection";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { FAQ } from "@/components/site/FAQ";
import { JsonLd } from "@/components/site/JsonLd";
import { BUSINESS, IMG } from "@/lib/business";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Burnett Electric | Licensed Electrician in Tuscaloosa, AL" },
      {
        name: "description",
        content:
          "Meet Shad Burnett, owner of Burnett Electric. Providing honest, licensed residential electrical services, panel upgrades, rewiring & safety inspections across Tuscaloosa & West Alabama.",
      },
      { property: "og:title", content: "About Burnett Electric | Licensed Electrician in Tuscaloosa, AL" },
      {
        property: "og:description",
        content:
          "Learn about Shad Burnett and our commitment to honest residential electrical safety, upfront itemized pricing, and NEC code compliance in West Alabama.",
      },
      { property: "og:url", content: "https://www.burnettelectrictuscaloosa.com/about" },
      { property: "og:image", content: `https://www.burnettelectrictuscaloosa.com${IMG.crew}` },
      { name: "twitter:image", content: `https://www.burnettelectrictuscaloosa.com${IMG.crew}` },
    ],
    links: [{ rel: "canonical", href: "https://www.burnettelectrictuscaloosa.com/about" }],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: ShieldCheck,
    title: "Pure Residential Focus",
    desc: "We specialize exclusively in family homes, historic rewires, and modern electrical safety. We do not juggle commercial builds, so your home gets 100% of our care.",
  },
  {
    icon: Award,
    title: "Strict NEC Code Compliance",
    desc: "Every breaker installed, circuit run, and wire connection strictly complies with current National Electrical Code (NEC) standards and local Alabama municipal safety codes.",
  },
  {
    icon: Handshake,
    title: "100% Upfront Itemized Pricing",
    desc: "Clear, written quotes before any work begins. We never add unexpected trip surcharges, hidden dispatch fees, or bait-and-switch pricing.",
  },
  {
    icon: Heart,
    title: "Family & Home Safety First",
    desc: "We treat your home as if it were our own. From arc-fault protection to whole-home surge suppression, our solutions protect your property and family against fire hazards.",
  },
  {
    icon: Users,
    title: "Proud Local Alabama Roots",
    desc: "Headquartered in Buhl, Alabama, and actively serving homeowners throughout Tuscaloosa, Northport, Cottondale, and West Alabama.",
  },
  {
    icon: Zap,
    title: "Direct Owner Accountability",
    desc: "Shad Burnett personally oversees operations and stands directly behind the quality and integrity of every electrical repair and installation we perform.",
  },
];

const credentials = [
  {
    icon: FileCheck,
    title: "State-Licensed Contractor",
    desc: "Certified for residential electrical installations, heavy-ups, and rewiring across Alabama.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured & Bonded",
    desc: "Carrying comprehensive $2,000,000 general liability insurance for complete homeowner peace of mind.",
  },
  {
    icon: Award,
    title: "1-Year Workmanship Warranty",
    desc: "All labor and installations are guaranteed for 12 months. If any issue arises, we return and fix it free.",
  },
  {
    icon: Sparkles,
    title: "Clean Home Guarantee",
    desc: "We wear protective shoe covers, lay down clean drop cloths, and thoroughly vacuum any drywall or debris.",
  },
];

const aboutFaqs = [
  {
    q: "Who owns and operates Burnett Electric?",
    a: "Burnett Electric is locally owned and operated by Shad Burnett, a career residential electrician based in Buhl, Alabama. Unlike national electrical franchise chains, Shad personally oversees every project, speaks directly with homeowners, and ensures the highest level of craftsmanship.",
  },
  {
    q: "Is Burnett Electric fully licensed and insured in Alabama?",
    a: "Yes. Burnett Electric is fully state-licensed and maintains comprehensive commercial general liability insurance and coverage. We strictly adhere to the National Electrical Code (NEC) and obtain all necessary municipal permits for panel replacements and rewires.",
  },
  {
    q: "What areas does Burnett Electric serve?",
    a: "Our primary daily service area covers Tuscaloosa, Northport, Buhl, Cottondale, Vance, Coaling, Moundville, and Brookwood. We also schedule major residential projects and whole-home generator installations along the Birmingham corridor.",
  },
  {
    q: "Do you provide upfront pricing before starting work?",
    a: "Absolutely. We provide itemized, written quotes before any work begins. There are no hidden fees, surprise overtime charges, or unexpected trip fees. You approve the exact cost before we turn a single screw.",
  },
  {
    q: "What types of residential electrical work do you handle?",
    a: "We handle the full spectrum of residential electrical needs, including 200A breaker panel upgrades, whole-home rewiring (including aluminum-to-copper and knob-and-tube replacements), EV charger installations, Generac standby generators, recessed lighting, ceiling fans, and emergency troubleshooting.",
  },
];

function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Rich Schema Structured Data */}
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Burnett Electric",
            url: "https://www.burnettelectrictuscaloosa.com/about",
            description:
              "Learn about Burnett Electric, owned and operated by Shad Burnett. Providing honest, licensed residential electrical services across West Alabama.",
            mainEntity: {
              "@type": "Electrician",
              name: "Burnett Electric",
              "@id": "https://www.burnettelectrictuscaloosa.com/#business",
              telephone: "+1-205-634-8185",
              url: "https://www.burnettelectrictuscaloosa.com/",
              address: {
                "@type": "PostalAddress",
                streetAddress: "15953 Annie Bell Dr",
                addressLocality: "Buhl",
                addressRegion: "AL",
                postalCode: "35446",
                addressCountry: "US",
              },
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Shad Burnett",
            jobTitle: "Founder & Master Electrician",
            worksFor: {
              "@type": "Electrician",
              name: "Burnett Electric",
            },
            description:
              "Shad Burnett is the owner and lead electrician of Burnett Electric, specializing in safe residential electrical modernizations, panel replacements, and wiring across Tuscaloosa, AL.",
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.burnettelectrictuscaloosa.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "About Us",
                item: "https://www.burnettelectrictuscaloosa.com/about",
              },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: aboutFaqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.a,
              },
            })),
          },
        ]}
      />

      <Header />
      <FloatingCTA />

      {/* Hero Section - fully visible on SSR */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-dark" />
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: "radial-gradient(circle at 80% 40%, #2563EB 0%, transparent 45%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
          <div className="mb-6">
            <Breadcrumbs items={[{ label: "About Us" }]} />
          </div>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-dark text-primary text-xs font-semibold uppercase tracking-widest mb-5">
              <Zap className="h-3.5 w-3.5" /> Our Heritage & Commitment
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05]">
              Locally Owned. <span className="text-gradient-primary">Deeply Committed to West Alabama.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed">
              Burnett Electric provides West Alabama homeowners with honest, licensed residential electrical services,
              upfront itemized pricing, and uncompromising safety.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full gradient-primary text-secondary font-semibold shadow-glow hover:scale-105 transition"
              >
                <Phone className="h-4 w-4" /> Call {BUSINESS.phone}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass-dark text-white font-semibold border border-white/20 hover:bg-white/10 transition"
              >
                Request an Estimate <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Owner / Story Section */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <img
              src={IMG.electrician}
              alt="Shad Burnett, licensed electrician and owner of Burnett Electric"
              loading="eager"
              className="w-full h-[520px] object-cover rounded-3xl shadow-elegant border border-border"
            />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-zinc-950/90 backdrop-blur-md border border-white/10 text-white">
              <div className="font-display font-bold text-lg">Shad Burnett</div>
              <div className="text-xs text-primary font-medium">Owner & Lead Electrician • Burnett Electric</div>
              <div className="text-xs text-white/70 mt-1">Serving Tuscaloosa, Northport, Buhl & West AL</div>
            </div>
          </div>

          <div>
            <SectionHeading center={false} eyebrow="Meet the Owner" title="Shad Burnett" />
            <p className="mt-6 text-muted-foreground leading-relaxed text-base sm:text-lg">
              Burnett Electric is a locally owned and operated residential electrical contracting company headquartered
              in Buhl, Alabama, proudly serving homeowners across Tuscaloosa and surrounding counties.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Founded by <strong>Shad Burnett</strong>, our company was built in direct response to the frustration
              local families face with large franchise conglomerates: aggressive sales commissions, opaque diagnostic fees,
              and hurried technicians who treat homes like construction zones.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              At Burnett Electric, we believe in doing things right the first time. Whether we are upgrading an outdated
              100-amp fuse box to a modern 200-amp panel, wiring a whole-home standby generator, or repairing a hazardous
              flickering circuit, we bring the exact same level of precision, respect, and code compliance to every home we enter.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { v: "Local", l: "Owned & Operated in Buhl" },
                { v: "Licensed", l: "Alabama Certified" },
                { v: "100%", l: "Upfront Itemized Quotes" },
              ].map((s) => (
                <div key={s.l} className="p-4 rounded-2xl bg-surface border border-border text-center">
                  <div className="font-display font-bold text-xl sm:text-2xl text-secondary">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Credentials Grid */}
      <section className="py-16 bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Guarantee"
            title="Professionalism You Can Verify"
            subtitle="We hold ourselves to the highest technical and ethical standards in the Alabama residential trade."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((c) => (
              <div key={c.title} className="p-6 rounded-2xl bg-card border border-border shadow-card">
                <div className="h-11 w-11 rounded-xl gradient-primary flex items-center justify-center shadow-glow mb-4">
                  <c.icon className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-secondary">{c.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core Values"
            title="How We Do Business"
            subtitle="Honest communication, licensed craftsmanship, and total respect for your family and property."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-elegant transition-all"
              >
                <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
                  <v.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="mt-5 font-display font-semibold text-lg text-secondary">{v.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Editorial Section: Our Approach */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            center={false}
            eyebrow="Safe Homes"
            title="Protecting West Alabama Homes From Modern Electrical Hazards"
          />
          <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed text-base sm:text-lg">
            <p>
              Many residential neighborhoods in Tuscaloosa, Northport, and surrounding communities were built during eras
              when household power consumption was a fraction of what it is today. Older homes frequently still rely on
              60-amp or 100-amp main breaker panels, cloth-insulated wiring, or ungrounded two-prong outlets that cannot
              safely support today’s high-draw HVAC heat pumps, induction ranges, home office computer setups, and EV chargers.
            </p>
            <p>
              Overloaded circuits and aged breaker boxes (such as Federal Pacific Stab-Lok or Zinsco panels) represent severe
              hidden fire and safety risks. Burnett Electric specializes in residential diagnostics, pinpointing loose neutrals,
              overheated busbars, and inadequate earthing systems before they cause catastrophic property damage.
            </p>
            <p>
              When you invite Burnett Electric into your home, you are not receiving a high-pressure sales pitch. You receive
              a clear, thorough safety assessment, practical solutions scaled to your exact budget, and clean, code-compliant
              workmanship guaranteed for 12 months.
            </p>
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-card border border-border flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="font-display font-bold text-lg text-secondary">Have an electrical question or concern?</div>
              <div className="text-sm text-muted-foreground mt-1">Speak directly with Shad Burnett at Burnett Electric.</div>
            </div>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-primary text-secondary font-semibold shrink-0 shadow-glow hover:scale-105 transition"
            >
              <Phone className="h-4 w-4" /> (205) 634-8185
            </a>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Questions & Answers"
            title="Frequently Asked Questions About Burnett Electric"
            subtitle="Learn more about our services, estimates, licensing, and warranties."
          />
          <div className="mt-12">
            <FAQ items={aboutFaqs} />
          </div>
        </div>
      </section>

      {/* Service Areas Navigation Block */}
      <section className="py-16 bg-surface border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading eyebrow="Service Coverage" title="Proudly Serving West Alabama Communities" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm">
            Based in Buhl, AL, we dispatch licensed residential electricians to homes across Tuscaloosa County and surrounding areas.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              { to: "/electrician-northport", label: "Northport, AL" },
              { to: "/electrician-birmingham", label: "Birmingham, AL" },
              { to: "/electrician-buhl", label: "Buhl, AL" },
              { to: "/electrician-cottondale-al", label: "Cottondale, AL" },
              { to: "/electrician-vance-al", label: "Vance, AL" },
              { to: "/electrician-coaling-al", label: "Coaling, AL" },
              { to: "/electrician-moundville-al", label: "Moundville, AL" },
              { to: "/electrician-brookwood-al", label: "Brookwood, AL" },
            ].map((loc) => (
              <Link
                key={loc.to}
                to={loc.to as any}
                className="px-4 py-2 rounded-full bg-card border border-border hover:border-primary text-sm text-secondary hover:text-primary transition font-medium"
              >
                {loc.label}
              </Link>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-border/60">
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              Explore Our Residential Electrical Services
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { to: "/electrical-repairs-tuscaloosa-al", label: "Electrical Repairs" },
                { to: "/wiring-upgrades-tuscaloosa-al", label: "Wiring Upgrades" },
                { to: "/panel-upgrades-tuscaloosa-al", label: "Panel Upgrades" },
                { to: "/generator-installation-tuscaloosa-al", label: "Generator Installation" },
                { to: "/lighting-installation-tuscaloosa-al", label: "Lighting & Fans" },
                { to: "/ev-charger-installation-tuscaloosa-al", label: "EV Charger Installation" },
                { to: "/emergency-electrician-tuscaloosa-al", label: "Emergency Electrician" },
                { to: "/smart-home-installation-tuscaloosa-al", label: "Smart Home Setup" },
                { to: "/outdoor-wiring-tuscaloosa-al", label: "Outdoor Wiring" },
              ].map((s) => (
                <Link
                  key={s.to}
                  to={s.to as any}
                  className="px-3.5 py-1.5 rounded-full bg-background border border-border/60 hover:border-primary text-xs text-secondary hover:text-primary transition"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work with an Honest, Licensed Electrician?"
        subtitle="Contact Shad Burnett at Burnett Electric for upfront itemized pricing on your home's repairs or upgrades."
      />
      <Footer />
    </div>
  );
}
