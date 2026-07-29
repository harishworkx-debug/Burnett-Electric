import { createFileRoute } from "@tanstack/react-router";
import type { } from "@tanstack/react-start";
//
const BASE_URL = "https://www.burnettelectrictuscaloosa.com";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/services", changefreq: "monthly", priority: "0.9" },
          { path: "/about", changefreq: "monthly", priority: "0.7" },
          { path: "/reviews", changefreq: "monthly", priority: "0.7" },
          { path: "/contact", changefreq: "monthly", priority: "0.8" },
          { path: "/electrical-repairs-tuscaloosa-al", changefreq: "monthly", priority: "0.9" },
          { path: "/wiring-upgrades-tuscaloosa-al", changefreq: "monthly", priority: "0.9" },
          { path: "/commercial-electrical-tuscaloosa-al", changefreq: "monthly", priority: "0.9" },
          { path: "/outdoor-wiring-tuscaloosa-al", changefreq: "monthly", priority: "0.9" },
          { path: "/generator-installation-tuscaloosa-al", changefreq: "monthly", priority: "0.9" },
          { path: "/panel-upgrades-tuscaloosa-al", changefreq: "monthly", priority: "0.9" },
          { path: "/lighting-installation-tuscaloosa-al", changefreq: "monthly", priority: "0.9" },
          { path: "/ev-charger-installation-tuscaloosa-al", changefreq: "monthly", priority: "0.9" },
          { path: "/emergency-electrician-tuscaloosa-al", changefreq: "monthly", priority: "0.9" },
          { path: "/smart-home-installation-tuscaloosa-al", changefreq: "monthly", priority: "0.9" },
          { path: "/electrician-northport", changefreq: "monthly", priority: "0.8" },
          { path: "/electrician-birmingham", changefreq: "monthly", priority: "0.8" },
          { path: "/electrician-buhl", changefreq: "monthly", priority: "0.8" },
          { path: "/electrician-cottondale-al", changefreq: "monthly", priority: "0.8" },
          { path: "/electrician-vance-al", changefreq: "monthly", priority: "0.8" },
          { path: "/electrician-coaling-al", changefreq: "monthly", priority: "0.8" },
          { path: "/electrician-moundville-al", changefreq: "monthly", priority: "0.8" },
          { path: "/electrician-brookwood-al", changefreq: "monthly", priority: "0.8" },
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ].filter(Boolean).join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
