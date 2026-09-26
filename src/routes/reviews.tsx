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
  { name: "Juanita Green", city: "Local Guide", text: "Shad was my electrian. He was very professional, courteous and kind.I will call him all times for any electrical work. He cared about the safety of me and my grandchildren. May God continue to bless him and his company.", rating: 5 },
  { name: "keith Traywick", city: "Customer", text: "This Company was hired to wire my house ..Did not complete the job . The work that they did was good but failed to complete. Not to mention their employees left the front and back door open over night while new appliances and other materials was in the house. Had to repaint the living room due to moisture spots along the living room walls.", rating: 1 },
  { name: "Gena Kilgore", city: "Customer", text: "Shad was very responsive to my call. He did what he said he would and did a great job! Would definitely use him again and will recommend him to others!", rating: 5 },
  { name: "terrell mckinney", city: "Local Guide", text: "Does great work and do it at a fast paste. Would highly recommend them. They’re a life saver", rating: 5 },
  { name: "senea tubbs", city: "Local Guide", text: "best prices,on time,reliable", rating: 5 },
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
                <div className="font-display font-bold text-xl leading-tight">Highly Rated</div>
                <div className="text-xs text-white/70">By our local customers</div>
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
