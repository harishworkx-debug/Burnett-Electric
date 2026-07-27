import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Phone, Menu, X, Zap, ChevronDown } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const services = [
  { to: "/commercial-electrical", label: "Commercial Electrical" },
  { to: "/electrical-repairs", label: "Electrical Repairs" },
  { to: "/outdoor-wiring", label: "Outdoor Wiring" },
  { to: "/wiring-upgrades", label: "Wiring Upgrades" },
];

const locations = [
  { to: "/birmingham", label: "Birmingham" },
  { to: "/buhl", label: "Buhl" },
  { to: "/northport", label: "Northport" },
  { to: "/tuscaloosa", label: "Tuscaloosa" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Mobile sub-menus state
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

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
              <div className="font-display font-bold text-lg md:text-xl text-secondary">{BUSINESS.name}</div>
              <div className="text-[10px] md:text-xs text-muted-foreground -mt-0.5">Licensed • Insured • Tuscaloosa, AL</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-2">
            <Link to="/" className="px-4 py-2 rounded-lg text-sm font-medium text-secondary/80 hover:text-secondary hover:bg-primary/10 transition-colors" activeProps={{ className: "px-4 py-2 rounded-lg text-sm font-semibold text-secondary bg-primary/15" }} activeOptions={{ exact: true }}>Home</Link>
            <Link to="/about" className="px-4 py-2 rounded-lg text-sm font-medium text-secondary/80 hover:text-secondary hover:bg-primary/10 transition-colors" activeProps={{ className: "px-4 py-2 rounded-lg text-sm font-semibold text-secondary bg-primary/15" }}>About</Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <Link to="/services" className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-secondary/80 hover:text-secondary hover:bg-primary/10 transition-colors" activeProps={{ className: "px-4 py-2 rounded-lg text-sm font-semibold text-secondary bg-primary/15" }}>
                Services <ChevronDown className="h-4 w-4" />
              </Link>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="w-56 glass-dark rounded-xl p-2 shadow-xl border border-border/20 flex flex-col gap-1">
                  {services.map(s => (
                    <Link key={s.to} to={s.to as any} className="px-4 py-2 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors">
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Locations Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-secondary/80 hover:text-secondary hover:bg-primary/10 transition-colors">
                Locations <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="w-48 glass-dark rounded-xl p-2 shadow-xl border border-border/20 flex flex-col gap-1">
                  {locations.map(l => (
                    <Link key={l.to} to={l.to as any} className="px-4 py-2 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors">
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/reviews" className="px-4 py-2 rounded-lg text-sm font-medium text-secondary/80 hover:text-secondary hover:bg-primary/10 transition-colors" activeProps={{ className: "px-4 py-2 rounded-lg text-sm font-semibold text-secondary bg-primary/15" }}>Reviews</Link>
            <Link to="/contact" className="px-4 py-2 rounded-lg text-sm font-medium text-secondary/80 hover:text-secondary hover:bg-primary/10 transition-colors" activeProps={{ className: "px-4 py-2 rounded-lg text-sm font-semibold text-secondary bg-primary/15" }}>Contact</Link>
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
          className="lg:hidden glass border-t border-border/40 max-h-[80vh] overflow-y-auto"
        >
          <div className="px-4 py-4 space-y-2">
            <Link to="/" onClick={() => setOpen(false)} className="block px-4 py-3 rounded-lg text-secondary hover:bg-primary/10 font-medium">Home</Link>
            <Link to="/about" onClick={() => setOpen(false)} className="block px-4 py-3 rounded-lg text-secondary hover:bg-primary/10 font-medium">About</Link>
            
            {/* Mobile Services */}
            <div>
              <div className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-primary/10 font-medium text-secondary cursor-pointer" onClick={() => setServicesOpen(!servicesOpen)}>
                <span onClick={(e) => { e.stopPropagation(); }}><Link to="/services" onClick={() => setOpen(false)}>Services</Link></span>
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </div>
              {servicesOpen && (
                <div className="pl-6 pr-4 py-2 space-y-1 border-l-2 border-primary/30 ml-4 mt-1">
                  {services.map(s => (
                    <Link key={s.to} to={s.to as any} onClick={() => setOpen(false)} className="block px-4 py-2 rounded-lg text-sm font-medium text-secondary/80 hover:text-secondary hover:bg-primary/10">
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Locations */}
            <div>
              <div className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-primary/10 font-medium text-secondary cursor-pointer" onClick={() => setLocationsOpen(!locationsOpen)}>
                <span>Locations</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${locationsOpen ? "rotate-180" : ""}`} />
              </div>
              {locationsOpen && (
                <div className="pl-6 pr-4 py-2 space-y-1 border-l-2 border-primary/30 ml-4 mt-1">
                  {locations.map(l => (
                    <Link key={l.to} to={l.to as any} onClick={() => setOpen(false)} className="block px-4 py-2 rounded-lg text-sm font-medium text-secondary/80 hover:text-secondary hover:bg-primary/10">
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/reviews" onClick={() => setOpen(false)} className="block px-4 py-3 rounded-lg text-secondary hover:bg-primary/10 font-medium">Reviews</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="block px-4 py-3 rounded-lg text-secondary hover:bg-primary/10 font-medium">Contact</Link>
            
            <a
              href={BUSINESS.phoneHref}
              className="mt-4 flex items-center justify-center gap-2 px-5 py-3 rounded-full gradient-primary text-secondary font-semibold"
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
