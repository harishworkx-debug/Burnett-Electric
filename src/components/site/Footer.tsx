import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, Zap, Facebook, Instagram } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export function Footer() {
  return (
    <footer className="relative mt-24 gradient-dark text-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 20% 20%, #F4B400 0%, transparent 40%), radial-gradient(circle at 80% 80%, #2563EB 0%, transparent 40%)" }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
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

          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-primary mb-4">Services</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4 text-white/80 text-sm">
              <li><Link to="/electrical-repairs-tuscaloosa-al" className="hover:text-primary">Electrical Repairs</Link></li>
              <li><Link to="/wiring-upgrades-tuscaloosa-al" className="hover:text-primary">Wiring Upgrades</Link></li>
              <li><Link to="/commercial-electrical-tuscaloosa-al" className="hover:text-primary">Commercial Electrical</Link></li>
              <li><Link to="/outdoor-wiring-tuscaloosa-al" className="hover:text-primary">Outdoor Wiring</Link></li>
              <li><Link to="/generator-installation-tuscaloosa-al" className="hover:text-primary">Generator Installation</Link></li>
              <li><Link to="/panel-upgrades-tuscaloosa-al" className="hover:text-primary">Panel Upgrades</Link></li>
              <li><Link to="/lighting-installation-tuscaloosa-al" className="hover:text-primary">Lighting & Fan Installation</Link></li>
              <li><Link to="/ev-charger-installation-tuscaloosa-al" className="hover:text-primary">EV Charger Installation</Link></li>
              <li><Link to="/emergency-electrician-tuscaloosa-al" className="hover:text-primary">24/7 Emergency Electrician</Link></li>
              <li><Link to="/smart-home-installation-tuscaloosa-al" className="hover:text-primary">Smart Home Installation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-primary mb-4">Service Areas</h4>
            <ul className="space-y-2.5 text-white/80 text-sm">
              <li><Link to="/electrician-northport" className="hover:text-primary">Electrician Northport</Link></li>
              <li><Link to="/electrician-birmingham" className="hover:text-primary">Electrician Birmingham</Link></li>
              <li><Link to="/electrician-buhl" className="hover:text-primary">Electrician Buhl</Link></li>
              <li><Link to="/electrician-cottondale-al" className="hover:text-primary">Electrician Cottondale</Link></li>
              <li><Link to="/electrician-vance-al" className="hover:text-primary">Electrician Vance</Link></li>
              <li><Link to="/electrician-coaling-al" className="hover:text-primary">Electrician Coaling</Link></li>
              <li><Link to="/electrician-moundville-al" className="hover:text-primary">Electrician Moundville</Link></li>
              <li><Link to="/electrician-brookwood-al" className="hover:text-primary">Electrician Brookwood</Link></li>
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
