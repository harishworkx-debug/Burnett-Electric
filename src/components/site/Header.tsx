import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Phone, Menu, X, Zap } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-card" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="h-9 w-9 md:h-10 md:w-10 rounded-xl gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                <Zap className="h-5 w-5 text-secondary" strokeWidth={2.5} fill="currentColor" />
              </div>
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-lg md:text-xl text-secondary">Burnett Electric</div>
              <div className="text-[10px] md:text-xs text-muted-foreground -mt-0.5">Licensed • Insured • Tuscaloosa, AL</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="px-4 py-2 rounded-lg text-sm font-medium text-secondary/80 hover:text-secondary hover:bg-primary/10 transition-colors"
                activeProps={{ className: "px-4 py-2 rounded-lg text-sm font-semibold text-secondary bg-primary/15" }}
                activeOptions={{ exact: true }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full gradient-primary text-secondary font-semibold text-sm shadow-glow hover:scale-105 transition-transform"
            >
              <Phone className="h-4 w-4" />
              {BUSINESS.phone}
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-secondary"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden glass border-t border-border/40"
        >
          <div className="px-4 py-4 space-y-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-lg text-secondary hover:bg-primary/10 font-medium"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={BUSINESS.phoneHref}
              className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-full gradient-primary text-secondary font-semibold"
            >
              <Phone className="h-4 w-4" /> Call {BUSINESS.phone}
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

export function useParallax(distance = 100) {
  const { scrollY } = useScroll();
  return useTransform(scrollY, [0, 600], [0, distance]);
}
