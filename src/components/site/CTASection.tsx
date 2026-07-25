import { motion } from "framer-motion";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { BUSINESS } from "@/lib/business";

export function CTASection({
  title = "Ready for a Licensed Electrician You Can Trust?",
  subtitle = "Free estimates. Fast response. Honest pricing. Serving Tuscaloosa, Northport & Birmingham.",
}: { title?: string; subtitle?: string }) {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 gradient-dark" />
      <div className="absolute inset-0 opacity-30"
        style={{ backgroundImage: "radial-gradient(circle at 15% 40%, #F4B400 0%, transparent 45%), radial-gradient(circle at 85% 70%, #2563EB 0%, transparent 45%)" }} />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-4xl px-4 text-center text-white"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-primary text-xs font-semibold uppercase tracking-widest mb-6">
          <ShieldCheck className="h-3.5 w-3.5" /> Licensed & Insured
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          {title}
        </h2>
        <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto">{subtitle}</p>
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={BUSINESS.phoneHref} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full gradient-primary text-secondary font-semibold shadow-glow hover:scale-105 transition-transform">
            <Phone className="h-5 w-5" /> Call {BUSINESS.phone}
          </a>
          <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full glass-dark text-white font-semibold border border-white/20 hover:bg-white/10">
            Free Estimate <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
