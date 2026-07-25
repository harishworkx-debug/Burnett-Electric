import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingCTA } from "@/components/site/FloatingCTA";
import { SectionHeading } from "@/components/site/SectionHeading";
import { BUSINESS, IMG } from "@/lib/business";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Burnett Electric | Free Estimate — Tuscaloosa, AL" },
      { name: "description", content: "Call, WhatsApp or request a free electrical estimate from Burnett Electric. Serving Tuscaloosa, Northport & Birmingham. Same-day response, 24/7 emergency service." },
      { property: "og:title", content: "Contact Burnett Electric | Free Estimate" },
      { property: "og:description", content: "Call, WhatsApp or message us for a free estimate in Tuscaloosa, AL." },
      { property: "og:url", content: "/contact" },
      { property: "og:image", content: IMG.worker },
      { name: "twitter:image", content: IMG.worker },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="bg-background text-foreground">
      <Header />
      <FloatingCTA />

      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 gradient-dark" />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 30% 40%, #F4B400 0%, transparent 50%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-dark text-primary text-xs font-semibold uppercase tracking-widest mb-5">Contact Us</div>
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-[1.05]">Talk to a <span className="text-gradient-primary">Real Electrician</span> Today</h1>
            <p className="mt-5 text-lg text-white/80">Call, WhatsApp or send us a message. Free estimates on every project in Tuscaloosa, Northport and Birmingham, AL.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-3">
            <div className="p-8 md:p-10 rounded-3xl bg-card border border-border shadow-elegant">
              <h2 className="font-display text-2xl font-bold text-secondary">Request a Free Estimate</h2>
              <p className="mt-2 text-muted-foreground">We'll get back to you within one business hour.</p>
              {sent ? (
                <div className="mt-8 p-6 rounded-2xl bg-primary/10 border border-primary/30 text-secondary">
                  <div className="font-display font-semibold text-lg">Thanks — your request was sent.</div>
                  <p className="mt-1 text-sm text-muted-foreground">A Burnett Electric team member will call or text you shortly. For urgent electrical needs, call {BUSINESS.phone}.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Full Name" name="name" required />
                  <Field label="Phone" name="phone" type="tel" required />
                  <Field label="Email" name="email" type="email" className="sm:col-span-2" />
                  <Field label="Service Needed" name="service" placeholder="e.g. Panel upgrade, rewire, EV charger" className="sm:col-span-2" />
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-secondary mb-1.5">How can we help?</label>
                    <textarea required rows={5} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-secondary focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Tell us about your project or issue..." />
                  </div>
                  <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 mt-2">
                    <button type="submit" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full gradient-primary text-secondary font-semibold shadow-glow hover:scale-105 transition">
                      <Send className="h-4 w-4" /> Send Request
                    </button>
                    <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-secondary text-white font-semibold hover:bg-secondary/90">
                      <Phone className="h-4 w-4" /> Call {BUSINESS.phone}
                    </a>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

          <div className="lg:col-span-2 space-y-4">
            <InfoCard icon={Phone} label="Call Us" value={BUSINESS.phone} href={BUSINESS.phoneHref} />
            <InfoCard icon={MessageCircle} label="WhatsApp" value="Message on WhatsApp" href={BUSINESS.whatsapp} external />
            <InfoCard icon={Mail} label="Email" value={BUSINESS.email} href={`mailto:${BUSINESS.email}`} />
            <InfoCard icon={MapPin} label="Service Area" value="Buhl, Tuscaloosa, Northport & Birmingham, AL" />
            <InfoCard icon={Clock} label="Hours" value={BUSINESS.hours} />
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Location" title="Find Us on the Map" />
          <div className="mt-10 rounded-3xl overflow-hidden shadow-elegant border border-border">
            <iframe
              title="Burnett Electric map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d426380.68641904515!2d-87.45842549276473!3d33.39457835008891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8886111314f47cd1%3A0x2a15c2f0ec739d61!2sBurnett%20Electric!5e0!3m2!1sen!2sin!4v1784979478932!5m2!1sen!2sin"
              width="100%" height={500} style={{ border: 0 }} allowFullScreen loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field({ label, name, type = "text", required, placeholder, className = "" }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium text-secondary mb-1.5">{label}{required && <span className="text-destructive"> *</span>}</label>
      <input id={name} name={name} type={type} required={required} placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-secondary focus:outline-none focus:ring-2 focus:ring-primary" />
    </div>
  );
}

function InfoCard({ icon: Icon, label, value, href, external }: { icon: any; label: string; value: string; href?: string; external?: boolean }) {
  const inner = (
    <div className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border shadow-card hover:shadow-elegant hover:border-primary/40 transition-all">
      <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center shadow-glow shrink-0">
        <Icon className="h-5 w-5 text-secondary" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="font-semibold text-secondary">{value}</div>
      </div>
    </div>
  );
  if (!href) return inner;
  return external ? <a href={href} target="_blank" rel="noopener noreferrer">{inner}</a> : <a href={href}>{inner}</a>;
}
