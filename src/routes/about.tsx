import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  Phone,
  ArrowRight,
  Clock,
  Sparkles,
  MapPin,
  FileCheck,
  Wrench,
  Zap,
  Building,
  Star,
  ExternalLink,
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
          "Meet Shad Burnett, founder of Burnett Electric. Licensed Alabama residential electrical contractor based in Buhl, AL. Honest pricing, real project proof, and verified credentials.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "About Burnett Electric | Licensed Electrician in Tuscaloosa, AL" },
      {
        property: "og:description",
        content:
          "The story, credentials, licensing, and workmanship standards behind Burnett Electric. Locally owned by Shad Burnett in West Alabama.",
      },
      { property: "og:url", content: "https://www.burnettelectrictuscaloosa.com/about" },
      { property: "og:image", content: `https://www.burnettelectrictuscaloosa.com${IMG.crew}` },
      { name: "twitter:image", content: `https://www.burnettelectrictuscaloosa.com${IMG.crew}` },
    ],
    links: [{ rel: "canonical", href: "https://www.burnettelectrictuscaloosa.com/about" }],
  }),
  component: AboutPage,
});

const credentialsList = [
  {
    icon: FileCheck,
    title: "State of Alabama Licensed Contractor",
    desc: "Certified by the State of Alabama for residential electrical contracting, service heavy-ups, whole-home rewiring, and standby generator systems.",
    badge: "State Certified",
  },
  {
    icon: ShieldCheck,
    title: "$2,000,000 General Liability & Workers' Comp",
    desc: "Carrying comprehensive commercial general liability and workers' compensation coverage protecting your home and family on every project.",
    badge: "Fully Insured",
  },
  {
    icon: Award,
    title: "1-Year Comprehensive Workmanship Warranty",
    desc: "Every panel replacement, dedicated circuit, and rewiring project includes our full 12-month written workmanship guarantee.",
    badge: "100% Guaranteed",
  },
  {
    icon: Sparkles,
    title: "100% NEC 2023 & Municipal Code Compliance",
    desc: "All work is permitted through City of Tuscaloosa and City of Northport building inspection departments with official cut-in certificates.",
    badge: "Code Compliant",
  },
];

const completedProjects = [
  {
    img: IMG.panel,
    title: "200A Service Heavy-Up & Surge Protection",
    location: "Huntington Place, Northport, AL",
    desc: "Replaced an obsolete 100A fuse box with an Alabama Power-approved 200A Square D QO panel, dual 8-foot copper ground rods, and whole-home surge suppression.",
  },
  {
    img: IMG.wiring,
    title: "Historic Craftsman Home Copper Rewire",
    location: "Downtown Tuscaloosa, AL",
    desc: "Decommissioned active knob-and-tube wiring behind historic plaster walls using non-invasive attic and crawlspace cable fishing methods.",
  },
  {
    img: IMG.repair,
    title: "Emergency Thermal Diagnostic & Breaker Repair",
    location: "Buhl, AL (West Tuscaloosa County)",
    desc: "Identified an overheated neutral bus bar causing dangerous flickering lights and restored power safely with an itemized flat-rate repair.",
  },
];

const verifiedReviews = [
  {
    name: "Juanita Green",
    badge: "Google Local Guide",
    review:
      "Shad was my electrician. He was very professional, courteous and kind. I will call him all times for any electrical work. He cared about the safety of me and my grandchildren. May God continue to bless him and his company.",
    rating: 5,
  },
  {
    name: "Gena Kilgore",
    badge: "Verified Customer Review",
    review:
      "Shad was very responsive to my call. He did what he said he would and did a great job! Would definitely use him again and will recommend him to others!",
    rating: 5,
  },
  {
    name: "Terrell McKinney",
    badge: "Google Local Guide",
    review:
      "Does great work and do it at a fast pace. Would highly recommend them. They’re a life saver.",
    rating: 5,
  },
];

const aboutFaqs = [
  {
    q: "Who is the owner of Burnett Electric?",
    a: "Burnett Electric is founded, owned, and operated by Shad Burnett, a career residential electrician based in Buhl, Alabama. Unlike national corporate franchises that dispatch unvetted technicians on sales quotas, Shad personally bids, oversees, or directly executes every residential electrical project.",
  },
  {
    q: "How can I verify Burnett Electric's licensing and insurance in Alabama?",
    a: "Burnett Electric is fully licensed to perform residential electrical contracting throughout Alabama. We carry $2,000,000 in commercial general liability insurance along with full workers' compensation coverage. Proof of insurance and license documentation is gladly provided with any written estimate.",
  },
  {
    q: "Where is Burnett Electric physically located?",
    a: "Our permanent physical headquarters and shop is located at 15953 Annie Bell Dr, Buhl, AL 35446. From this location in West Tuscaloosa County, our service vans dispatch daily to homes in Tuscaloosa, Northport, and Buhl, and travel the I-20/59 corridor for scheduled major projects in Greater Birmingham.",
  },
  {
    q: "Do you pull official city permits for electrical work?",
    a: "Yes. All major electrical work—including 200A service changes, whole-home rewiring, and standby generator installations—is officially permitted through the City of Tuscaloosa or City of Northport Building Inspections Department, with official city inspections and power cut-in certificates.",
  },
  {
    q: "What is your pricing model?",
    a: "We operate on 100% upfront itemized flat-rate pricing. We diagnose your issue on-site, explain the root cause in plain English, and provide a firm written price before touching a wire. There are no hidden overtime fees, travel surcharges, or surprise add-ons.",
  },
];

function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Rich Schema Structured Data for E-E-A-T */}
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Burnett Electric",
            url: "https://www.burnettelectrictuscaloosa.com/about",
            description:
              "The professional background, verified licensing, and craftsmanship standards of Burnett Electric, owned and operated by Shad Burnett.",
            mainEntity: {
              "@type": "Electrician",
              name: "Burnett Electric",
              "@id": "https://www.burnettelectrictuscaloosa.com/#business",
              telephone: "+1-205-634-8185",
              url: "https://www.burnettelectrictuscaloosa.com/",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "15953 Annie Bell Dr",
                addressLocality: "Buhl",
                addressRegion: "AL",
                postalCode: "35446",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "33.2604",
                longitude: "-87.7608",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "07:00",
                  closes: "19:00",
                },
              ],
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Shad Burnett",
            jobTitle: "Owner & Master Electrician",
            worksFor: {
              "@type": "Electrician",
              name: "Burnett Electric",
            },
            homeLocation: {
              "@type": "Place",
              name: "Buhl, Alabama",
            },
            knowsAbout: [
              "Residential Electrical Code (NEC 2023)",
              "200-Amp and 400-Amp Electrical Panel Upgrades",
              "Historic Knob-and-Tube Rewiring",
              "Aluminum Wiring Remediation",
              "Whole-Home Standby Generators",
              "Level 2 EV Charging Stations",
            ],
            description:
              "Shad Burnett is an Alabama licensed residential electrician and founder of Burnett Electric, dedicated to honest craftsmanship, upfront pricing, and home safety across West Alabama.",
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

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-dark" />
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: "radial-gradient(circle at 80% 40%, #F4B400 0%, transparent 50%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
          <div className="mb-6">
            <Breadcrumbs items={[{ label: "About Us" }]} />
          </div>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-dark text-primary text-xs font-semibold uppercase tracking-widest mb-5">
              <ShieldCheck className="h-4 w-4" /> Company Heritage & Proven Credentials
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05]">
              Built on Honest Craftsmanship. <span className="text-gradient-primary">Rooted in West Alabama.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed">
              Meet Shad Burnett and the team behind Burnett Electric. An independently owned residential electrical contracting company headquartered in Buhl, AL—committed to code-compliant safety, upfront pricing, and verifiable quality.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full gradient-primary text-secondary font-semibold shadow-glow hover:scale-105 transition"
              >
                <Phone className="h-4 w-4" /> Call Shad Directly — {BUSINESS.phone}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass-dark text-white font-semibold border border-white/20 hover:bg-white/10 transition"
              >
                Schedule an Evaluation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER STORY & GENUINE BACKGROUND */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-border">
              <img
                src={IMG.crew}
                alt="Shad Burnett and crew on a residential electrical project in West Alabama"
                loading="eager"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-zinc-950/90 backdrop-blur-md border border-white/10 text-white">
                <div className="font-display font-bold text-lg">Shad Burnett</div>
                <div className="text-xs text-primary font-medium">Founder & Licensed Alabama Electrician</div>
                <div className="text-xs text-white/70 mt-1 flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                  15953 Annie Bell Dr, Buhl, AL 35446
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-secondary text-xs font-bold uppercase tracking-wider">
              <Users className="h-4 w-4 text-primary" /> The Real Story Behind Burnett Electric
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary leading-tight">
              Why We Built a Purely Residential Electrical Company
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base">
              Growing up and working in West Alabama, <strong>Shad Burnett</strong> watched the residential trades become increasingly dominated by two extremes: large corporate franchises driven by high-pressure sales quotas and aggressive add-ons, or uncertified handymen who leave dangerous, unpermitted wiring behind walls.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              Burnett Electric was founded to offer West Alabama homeowners a better, honest alternative: a state-licensed electrical contractor dedicated exclusively to residential safety. We do not chase commercial skyscraper contracts or treat residential repairs as secondary filler work. Every project we undertake—whether a complex 200A panel upgrade in Northport or troubleshooting a dead circuit in Buhl—receives our full attention, licensed craftsmanship, and personal accountability.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              When you hire Burnett Electric, you aren't dealing with a call center in another state. You are working with a local neighbor who lives in Buhl, knows local City of Tuscaloosa and City of Northport inspectors by name, and stands behind every wire connected with a full 1-year workmanship warranty.
            </p>

            <div className="pt-2 grid sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-surface border border-border text-center">
                <div className="font-display font-bold text-2xl text-secondary">Buhl, AL</div>
                <div className="text-xs text-muted-foreground mt-1">Physical Base & Shop</div>
              </div>
              <div className="p-4 rounded-2xl bg-surface border border-border text-center">
                <div className="font-display font-bold text-2xl text-secondary">Residential</div>
                <div className="text-xs text-muted-foreground mt-1">100% Focused on Homes</div>
              </div>
              <div className="p-4 rounded-2xl bg-surface border border-border text-center">
                <div className="font-display font-bold text-2xl text-secondary">Upfront</div>
                <div className="text-xs text-muted-foreground mt-1">Itemized Flat-Rate Pricing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VERIFIABLE CREDENTIALS & TRUST SIGNALS */}
      <section className="py-20 bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Verifiable Credentials"
            title="The Proof Behind Our Promises"
            subtitle="We back up our reputation with concrete licensing, comprehensive insurance coverage, and official code compliance."
          />

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentialsList.map((c) => (
              <div key={c.title} className="p-7 rounded-3xl bg-card border border-border shadow-card flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 rounded-2xl gradient-primary flex items-center justify-center shadow-glow text-secondary">
                      <c.icon className="h-6 w-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-primary/10 text-secondary text-[11px] font-bold uppercase tracking-wider">
                      {c.badge}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-secondary">{c.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-3xl bg-card border border-border">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="text-xs font-bold uppercase tracking-wider text-primary">Alabama Regulatory Standard</div>
                <h4 className="font-display text-2xl font-bold text-secondary mt-1">Alabama Electrical Code & Safety Permitting</h4>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  Electrical installations in Alabama require strict adherence to the National Electrical Code (NEC). For all service panel heavy-ups, generator transfer switches, and whole-house rewiring, Burnett Electric pulls official permits through the City of Tuscaloosa Building Inspections Division or City of Northport Building Inspections Department. Every job includes an official municipal rough-in and final pass certificate.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-end">
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full gradient-primary text-secondary font-semibold shadow-glow hover:scale-105 transition"
                >
                  <Phone className="h-4 w-4" /> Verify Our Credentials
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REAL COMPLETED PROJECTS PHOTO GALLERY */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Hands-On Evidence"
            title="Real Completed Work in West Alabama"
            subtitle="Actual photographs of panel upgrades, historic rewires, and emergency repairs completed by Burnett Electric."
          />

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {completedProjects.map((p) => (
              <div key={p.title} className="rounded-3xl overflow-hidden bg-card border border-border shadow-card flex flex-col justify-between">
                <div>
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md text-primary text-xs font-semibold">
                      <MapPin className="h-3 w-3 inline mr-1" />
                      {p.location}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-bold text-lg text-secondary">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VERIFIABLE TESTIMONIALS */}
      <section className="py-20 bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Client Testimonials"
            title="Real Feedback from Local Homeowners"
            subtitle="Direct customer reviews from Google Maps and verified West Alabama homeowners."
          />

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {verifiedReviews.map((r, i) => (
              <div key={i} className="p-8 rounded-3xl bg-card border border-border shadow-card flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(r.rating)].map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-secondary italic text-sm leading-relaxed">"{r.review}"</p>
                </div>
                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                  <div>
                    <div className="font-display font-bold text-sm text-secondary">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.badge}</div>
                  </div>
                  <div className="h-8 w-8 rounded-full gradient-primary flex items-center justify-center text-secondary font-bold text-xs">
                    {r.name[0]}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border font-semibold text-secondary hover:border-primary shadow-card transition"
            >
              Read All Verified Google Reviews <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQS SPECIFIC TO BURNETT ELECTRIC */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Transparency & FAQs"
            title="Questions About Burnett Electric"
            subtitle="Clear answers about our ownership, licensing verification, insurance, and service practices."
          />
          <div className="mt-12">
            <FAQ items={aboutFaqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="Speak Directly With Shad Burnett Today"
        subtitle="Experience honest residential electrical service with transparent itemized quotes and guaranteed workmanship across West Alabama."
      />
      <Footer />
    </div>
  );
}
