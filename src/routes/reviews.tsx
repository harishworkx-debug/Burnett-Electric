import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingCTA } from "@/components/site/FloatingCTA";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTASection } from "@/components/site/CTASection";
import { JsonLd } from "@/components/site/JsonLd";
import { IMG } from "@/lib/business";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews | Burnett Electric" },
      { name: "description", content: "Read real customer reviews and see why local customers choose Burnett Electric." },
      { property: "og:title", content: "Customer Reviews | Burnett Electric" },
      { property: "og:description", content: "Read real customer reviews and see why local customers choose Burnett Electric." },
      { property: "og:url", content: "/reviews" },
      { property: "og:image", content: IMG.tools },
      { name: "twitter:image", content: IMG.tools },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

const reviews = [
  { name: "Jessica M.", city: "Tuscaloosa, AL", text: "Same-day service when our breaker box was sparking. Professional, honest, fair pricing.", rating: 5 },
  { name: "Robert K.", city: "Northport, AL", text: "Rewired our 1960s house and installed a new panel. Cleanest work I've ever seen and finished ahead of schedule.", rating: 5 },
  { name: "Amanda P.", city: "Birmingham, AL", text: "Called for outdoor lighting and ended up upgrading our entire outdoor system. Beautiful results.", rating: 5 },
  { name: "Marcus J.", city: "Tuscaloosa, AL", text: "Diagnosed a wiring issue three other electricians missed. Shad knows his stuff.", rating: 5 },
  { name: "Linda H.", city: "Buhl, AL", text: "Fast, kind, respectful. Explained everything in plain language. Will use them again.", rating: 5 },
  { name: "David T.", city: "Northport, AL", text: "Installed a new 200A panel and EV charger. On-time, on-budget, no mess left behind.", rating: 5 },
  { name: "Karen R.", city: "Tuscaloosa, AL", text: "The whole team is professional and courteous. Fair quote and quality work.", rating: 5 },
  { name: "Chris O.", city: "Birmingham, AL", text: "Handled our restaurant's electrical during a remodel. Great communication and clean install.", rating: 4 },
  { name: "Emily S.", city: "Tuscaloosa, AL", text: "Emergency call at 11pm during a storm — they were there in under an hour.", rating: 5 },
];

function ReviewsPage() {
  return (
    <div className="bg-background text-foreground">
      <JsonLd data={reviews.map(r => ({
        "@context": "https://schema.org", "@type": "Review",
        "author": { "@type": "Person", "name": r.name },
        "reviewRating": { "@type": "Rating", "ratingValue": r.rating, "bestRating": "5" },
        "reviewBody": r.text,
        "itemReviewed": { "@type": "LocalBusiness", "name": "Burnett Electric" }
      }))} />
      <Header />
      <FloatingCTA />

      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 gradient-dark" />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 50% 40%, #F4B400 0%, transparent 50%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-dark text-primary text-xs font-semibold uppercase tracking-widest mb-5">Real Reviews</div>
            <h1 className="font-display text-5xl md:text-6xl font-bold">Loved by <span className="text-gradient-primary">West Alabama</span></h1>
            <div className="mt-6 inline-flex items-center gap-3 glass-dark px-6 py-4 rounded-2xl">
              <div className="flex gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 fill-primary text-primary" />)}</div>
              <div className="text-left">
                <div className="font-display font-bold text-2xl">4.9 / 5.0</div>
                <div className="text-xs text-white/70">Based on 128+ Google reviews</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Testimonials" title="What Customers Are Saying" />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="relative p-7 rounded-2xl bg-card border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all">
                <Quote className="absolute top-5 right-5 h-8 w-8 text-primary/20" />
                <div className="flex gap-1">{[...Array(r.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}</div>
                <p className="mt-4 text-secondary leading-relaxed">"{r.text}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center text-secondary font-bold">{r.name[0]}</div>
                  <div>
                    <div className="font-semibold text-secondary">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.city}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Ready to Join Our Happy Customers?" />
      <Footer />
    </div>
  );
}
