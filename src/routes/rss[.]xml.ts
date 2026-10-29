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
    description: "Read real 5-star reviews from verified homeowners across Tuscaloosa, Northport, and Buhl, Alabama.",
  },
  {
    path: "/contact",
    title: "Contact Burnett Electric | Request an Estimate",
    description: "Get in touch with Burnett Electric for honest upfront estimates and prompt residential electrical service.",
  },
  {
    path: "/electrical-repairs-tuscaloosa-al",
    title: "Electrical Repairs & Troubleshooting in Tuscaloosa, AL",
    description: "Fast diagnostics and code-compliant fixes for flickering lights, tripped breakers, dead outlets, and short circuits.",
  },
  {
    path: "/wiring-upgrades-tuscaloosa-al",
    title: "Residential Wiring Upgrades & Rewiring in Tuscaloosa, AL",
    description: "Non-invasive whole-home rewiring, aluminum wiring mitigation, and knob-and-tube updates for older homes.",
  },
  {
    path: "/outdoor-wiring-tuscaloosa-al",
    title: "Outdoor & Outbuilding Wiring in Tuscaloosa, AL",
    description: "Underground conduit trenching, barn wiring, workshop power subpanels, and landscape security lighting.",
  },
  {
    path: "/generator-installation-tuscaloosa-al",
    title: "Whole-Home Standby Generator Installation in Tuscaloosa, AL",
    description: "Automatic standby power solutions with transfer switch installation to keep homes running during severe storms.",
  },
  {
    path: "/panel-upgrades-tuscaloosa-al",
    title: "200A Electrical Panel Upgrades in Tuscaloosa, AL",
    description: "Heavy-up service replacements, 100A-to-200A upgrades, and whole-home surge protection for modern electric loads.",
  },
  {
    path: "/lighting-installation-tuscaloosa-al",
    title: "Interior & Exterior Lighting Installation in Tuscaloosa, AL",
    description: "Recessed LED cans, under-cabinet lighting, ceiling fans, and security flood fixtures for residential homes.",
  },
  {
    path: "/ev-charger-installation-tuscaloosa-al",
    title: "Level 2 EV Charger Installation in Tuscaloosa, AL",
    description: "Dedicated 240V circuits and home electric vehicle charger installations for Tesla, Ford, and universal EVs.",
  },
  {
    path: "/emergency-electrician-tuscaloosa-al",
    title: "Emergency Residential Electrician in Tuscaloosa, AL",
    description: "Urgent response for burning odors, sparking breaker boxes, storm-damaged weatherheads, and sudden power failure.",
  },
  {
    path: "/smart-home-installation-tuscaloosa-al",
    title: "Smart Home Electrical Installation in Tuscaloosa, AL",
    description: "Smart switches, dimmers, smart thermostats, and automation hub integration for modern homes.",
  },
  {
    path: "/electrician-northport",
    title: "Electrician in Northport, AL | Burnett Electric",
    description: "Panel modernizations, historic home rewiring, and residential electrical repair in Northport.",
  },
  {
    path: "/electrician-birmingham",
    title: "Residential Electrician in Birmingham, AL | Burnett Electric",
    description: "Major scheduled rewires, 400A panel upgrades, and whole-home generator installations in Birmingham.",
  },
  {
    path: "/electrician-buhl",
    title: "Hometown Electrician in Buhl, AL | Burnett Electric",
    description: "Our hometown electrical base serving Buhl, Romulus, and Elora with prompt troubleshooting and outbuilding wiring.",
  },
  {
    path: "/electrician-cottondale-al",
    title: "Electrician in Cottondale, AL | Burnett Electric",
    description: "Prompt residential electrical service, aluminum wiring remediation, and panel upgrades in Cottondale.",
  },
  {
    path: "/electrician-vance-al",
    title: "Electrician in Vance, AL | Burnett Electric",
    description: "Surge protection, EV chargers, subpanels, and residential electrical repairs in Vance.",
  },
  {
    path: "/electrician-coaling-al",
    title: "Electrician in Coaling, AL | Burnett Electric",
    description: "Residential breaker repairs, 200A service upgrades, and backup generator wiring in Coaling.",
  },
  {
    path: "/electrician-moundville-al",
    title: "Electrician in Moundville, AL | Burnett Electric",
    description: "Storm service mast repairs, breaker box replacements, and electrical troubleshooting in Moundville.",
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
        const buildDate = "Thu, 29 Oct 2026 12:00:00 GMT";

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
