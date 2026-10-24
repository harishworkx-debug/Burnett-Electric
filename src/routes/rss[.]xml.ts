import { createFileRoute } from "@tanstack/react-router";
import type { } from "@tanstack/react-start";

const BASE_URL = "https://www.burnettelectrictuscaloosa.com";

interface RssItem {
  path: string;
  title: string;
  description: string;
}

const items: RssItem[] = [
  {
    path: "/",
    title: "Electrician in Tuscaloosa, AL | Burnett Electric",
    description: "Licensed and insured residential electrician providing repairs, rewiring, panel upgrades, and generator installations in Tuscaloosa, AL.",
  },
  {
    path: "/services",
    title: "Electrical Services in Tuscaloosa, AL | Burnett Electric",
    description: "Full residential electrical services including diagnostics, wiring modernizations, panel replacements, and outdoor circuits.",
  },
  {
    path: "/about",
    title: "About Burnett Electric | Local Residential Electrician",
    description: "Locally owned by Shad Burnett, delivering honest workmanship, upfront pricing, and strict National Electrical Code compliance.",
  },
  {
    path: "/reviews",
    title: "Customer Reviews | Burnett Electric Tuscaloosa",
    description: "Verified 5-star customer ratings and testimonials from homeowners in Tuscaloosa, Northport, and Buhl.",
  },
  {
    path: "/contact",
    title: "Contact Burnett Electric | Request Electrical Service",
    description: "Schedule a licensed residential electrician in Tuscaloosa, Northport, or Buhl. Call or text (205) 634-8185.",
  },
  {
    path: "/electrical-repairs-tuscaloosa-al",
    title: "Electrical Repairs in Tuscaloosa, AL | Burnett Electric",
    description: "Expert troubleshooting for tripping breakers, faulty outlets, flickering lights, and dedicated circuit repairs.",
  },
  {
    path: "/wiring-upgrades-tuscaloosa-al",
    title: "Wiring Upgrades & Home Rewiring | Tuscaloosa, AL",
    description: "Whole-home copper rewiring, knob-and-tube removal, and aluminum wiring modernizations.",
  },
  {
    path: "/panel-upgrades-tuscaloosa-al",
    title: "Panel Upgrades & Fuse Box Replacement | Tuscaloosa, AL",
    description: "Modernize your electrical service to a safe 200-amp or 400-amp panel with whole-home surge protection.",
  },
  {
    path: "/generator-installation-tuscaloosa-al",
    title: "Generator Installation & Interlocks | Tuscaloosa, AL",
    description: "Whole-home standby generator installations and manual transfer switch kits for severe weather outage resilience.",
  },
  {
    path: "/lighting-installation-tuscaloosa-al",
    title: "Lighting & Ceiling Fan Installation | Tuscaloosa, AL",
    description: "Recessed LED cans, ceiling fans, dimmer controls, and modern home lighting design.",
  },
  {
    path: "/ev-charger-installation-tuscaloosa-al",
    title: "Level 2 EV Charger Installation | Tuscaloosa, AL",
    description: "Dedicated 240V charging circuit and electric vehicle charger installation for garages and driveways.",
  },
  {
    path: "/emergency-electrician-tuscaloosa-al",
    title: "Emergency Electrician Services | Tuscaloosa, AL",
    description: "Rapid response dispatch for smoking panels, burning plastic smells, and sudden partial power loss.",
  },
  {
    path: "/smart-home-installation-tuscaloosa-al",
    title: "Smart Home & Automation Wiring | Tuscaloosa, AL",
    description: "Professional installation of smart light switches, automated thermostats, and home theater circuits.",
  },
  {
    path: "/outdoor-wiring-tuscaloosa-al",
    title: "Outdoor Wiring & Security Lighting | Tuscaloosa, AL",
    description: "Landscape lighting, weatherproof GFCI outlets, hot tub wiring, and security floodlights.",
  },
  {
    path: "/electrician-northport",
    title: "Residential Electrician in Northport, AL | Burnett Electric",
    description: "Licensed residential electrician serving Northport with panel upgrades, historic rewires, and repair visits.",
  },
  {
    path: "/electrician-buhl",
    title: "Residential Electrician in Buhl, AL | Burnett Electric",
    description: "Fast hometown dispatch in Buhl for farm workshops, residential troubleshooting, and standby generators.",
  },
  {
    path: "/electrician-birmingham",
    title: "Electrician Services in Birmingham Metro, AL | Burnett Electric",
    description: "Major scheduled rewiring, panel replacements, and high-capacity electrical projects across the Birmingham area.",
  },
  {
    path: "/electrician-cottondale-al",
    title: "Electrician in Cottondale, AL | Burnett Electric",
    description: "Prompt residential troubleshooting, circuit repairs, and safe panel modernizations in Cottondale.",
  },
  {
    path: "/electrician-vance-al",
    title: "Electrician in Vance, AL | Burnett Electric",
    description: "Licensed electrical repairs, EV charger stations, and surge protection along the Vance I-20 corridor.",
  },
  {
    path: "/electrician-coaling-al",
    title: "Electrician in Coaling, AL | Burnett Electric",
    description: "Residential electrical services, 200A panel heavy-ups, and safe troubleshooting in Coaling.",
  },
  {
    path: "/electrician-moundville-al",
    title: "Electrician in Moundville, AL | Burnett Electric",
    description: "Weatherhead storm repair, service mast fixes, and residential maintenance in Moundville.",
  },
  {
    path: "/electrician-brookwood-al",
    title: "Electrician in Brookwood, AL | Burnett Electric",
    description: "Residential breaker repairs, generator transfer switches, and surge protection in Brookwood.",
  },
  {
    path: "/sitemap",
    title: "Burnett Electric Sitemap Directory | Tuscaloosa, AL",
    description: "Complete navigation index of all residential services and coverage areas for Burnett Electric.",
  },
];

export const Route = createFileRoute("/rss.xml")({
  server: {
    handlers: {
      GET: async () => {
        const buildDate = "Fri, 23 Oct 2026 12:00:00 GMT";

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">`,
          `  <channel>`,
          `    <title>Burnett Electric - Residential Electrical Services</title>`,
          `    <link>${BASE_URL}</link>`,
          `    <description>Licensed and insured residential electrician in Tuscaloosa, Northport, Buhl, and West Alabama.</description>`,
          `    <language>en-us</language>`,
          `    <lastBuildDate>${buildDate}</lastBuildDate>`,
          `    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml"/>`,
          ...items.map(
            (item) =>
              `    <item>\n      <title><![CDATA[${item.title}]]></title>\n      <link>${BASE_URL}${item.path === "/" ? "/" : item.path}</link>\n      <guid isPermaLink="true">${BASE_URL}${item.path === "/" ? "/" : item.path}</guid>\n      <description><![CDATA[${item.description}]]></description>\n      <pubDate>${buildDate}</pubDate>\n    </item>`,
          ),
          `  </channel>`,
          `</rss>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/rss+xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
