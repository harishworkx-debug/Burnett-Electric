import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, Zap, Facebook, Instagram } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export function Footer() {
  return (
    <footer className="relative mt-24 gradient-dark text-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 20% 20%, #F4B400 0%, transparent 40%), radial-gradient(circle at 80% 80%, #2563EB 0%, transparent 40%)" }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-xl gradient-primary flex items-center justify-center">
                <Zap className="h-5 w-5 text-secondary" fill="currentColor" />
              </div>
              <div className="font-display font-bold text-xl">Burnett Electric</div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Licensed & insured electricians serving Tuscaloosa, Northport & Birmingham with fast, honest, code-compliant work since day one.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" aria-label="Facebook" className="h-9 w-9 rounded-full glass-dark flex items-center justify-center hover:bg-primary hover:text-secondary transition"><Facebook className="h-4 w-4" /></a>
              <a href="#" aria-label="Instagram" className="h-9 w-9 rounded-full glass-dark flex items-center justify-center hover:bg-primary hover:text-secondary transition"><Instagram className="h-4 w-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-primary mb-4">Services</h4>
            <ul className="space-y-2.5 text-white/80 text-sm">
              <li><Link to="/electrical-repairs-tuscaloosa-al" className="hover:text-primary">Electrical Repairs</Link></li>
              <li><Link to="/wiring-upgrades-tuscaloosa-al" className="hover:text-primary">Wiring Upgrades</Link></li>
              <li><Link to="/commercial-electrical-tuscaloosa-al" className="hover:text-primary">Commercial Electrical</Link></li>
              <li><Link to="/outdoor-wiring-tuscaloosa-al" className="hover:text-primary">Outdoor Wiring</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-primary mb-4">Service Areas</h4>
            <ul className="space-y-2.5 text-white/80 text-sm">
              <li><Link to="/electrician-tuscaloosa-al" className="hover:text-primary">Electrician Tuscaloosa, AL</Link></li>
              <li><Link to="/electrician-northport-al" className="hover:text-primary">Electrician Northport, AL</Link></li>
              <li><Link to="/electrician-birmingham-al" className="hover:text-primary">Electrician Birmingham, AL</Link></li>
              <li><Link to="/about" className="hover:text-primary">About Burnett</Link></li>
              <li><Link to="/reviews" className="hover:text-primary">Reviews</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-primary mb-4">Contact</h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li className="flex items-start gap-3"><Phone className="h-4 w-4 mt-0.5 text-primary" /><a href={BUSINESS.phoneHref} className="hover:text-primary">{BUSINESS.phone}</a></li>
              <li className="flex items-start gap-3"><Mail className="h-4 w-4 mt-0.5 text-primary" /><a href={`mailto:${BUSINESS.email}`} className="hover:text-primary">{BUSINESS.email}</a></li>
              <li className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5 text-primary" />{BUSINESS.address}</li>
              <li className="flex items-start gap-3"><Clock className="h-4 w-4 mt-0.5 text-primary" />{BUSINESS.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Burnett Electric. All rights reserved. Licensed & Insured Electrical Contractor.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
            <a href="#" className="hover:text-primary">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
