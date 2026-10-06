import { createFileRoute } from "@tanstack/react-router";
import type { } from "@tanstack/react-start";
//
const BASE_URL = "https://www.burnettelectrictuscaloosa.com";

interface SitemapEntry {
  path: string;
  changefreq: string;
  priority: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/services", changefreq: "weekly", priority: "0.9" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/reviews", changefreq: "weekly", priority: "0.8" },
          { path: "/contact", changefreq: "monthly", priority: "0.8" },
          { path: "/electrical-repairs-tuscaloosa-al", changefreq: "weekly", priority: "0.9" },
          { path: "/wiring-upgrades-tuscaloosa-al", changefreq: "weekly", priority: "0.9" },
          { path: "/outdoor-wiring-tuscaloosa-al", changefreq: "weekly", priority: "0.9" },
          { path: "/generator-installation-tuscaloosa-al", changefreq: "weekly", priority: "0.9" },
          { path: "/panel-upgrades-tuscaloosa-al", changefreq: "weekly", priority: "0.9" },
          { path: "/lighting-installation-tuscaloosa-al", changefreq: "weekly", priority: "0.9" },
          { path: "/ev-charger-installation-tuscaloosa-al", changefreq: "weekly", priority: "0.9" },
          { path: "/emergency-electrician-tuscaloosa-al", changefreq: "weekly", priority: "0.9" },
          { path: "/smart-home-installation-tuscaloosa-al", changefreq: "weekly", priority: "0.9" },
          { path: "/electrician-northport", changefreq: "weekly", priority: "0.8" },
          { path: "/electrician-birmingham", changefreq: "weekly", priority: "0.8" },
          { path: "/electrician-buhl", changefreq: "weekly", priority: "0.8" },
          { path: "/electrician-cottondale-al", changefreq: "weekly", priority: "0.8" },
          { path: "/electrician-vance-al", changefreq: "weekly", priority: "0.8" },
          { path: "/electrician-coaling-al", changefreq: "weekly", priority: "0.8" },
          { path: "/electrician-moundville-al", changefreq: "weekly", priority: "0.8" },
          { path: "/electrician-brookwood-al", changefreq: "weekly", priority: "0.8" },
        ];

        const today = new Date().toISOString().split("T")[0];
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...entries.map(
            (e) =>
              `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
          ),
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
