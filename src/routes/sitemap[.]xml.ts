import { createFileRoute } from "@tanstack/react-router";
import type { } from "@tanstack/react-start";
//
const BASE_URL = "https://www.burnettelectrictuscaloosa.com";

interface SitemapEntry {
  path: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/" },
          { path: "/services" },
          { path: "/about" },
          { path: "/reviews" },
          { path: "/contact" },
          { path: "/electrical-repairs-tuscaloosa-al" },
          { path: "/wiring-upgrades-tuscaloosa-al" },
          { path: "/outdoor-wiring-tuscaloosa-al" },
          { path: "/generator-installation-tuscaloosa-al" },
          { path: "/panel-upgrades-tuscaloosa-al" },
          { path: "/lighting-installation-tuscaloosa-al" },
          { path: "/ev-charger-installation-tuscaloosa-al" },
          { path: "/emergency-electrician-tuscaloosa-al" },
          { path: "/smart-home-installation-tuscaloosa-al" },
          { path: "/electrician-northport" },
          { path: "/electrician-birmingham" },
          { path: "/electrician-buhl" },
          { path: "/electrician-cottondale-al" },
          { path: "/electrician-vance-al" },
          { path: "/electrician-coaling-al" },
          { path: "/electrician-moundville-al" },
          { path: "/electrician-brookwood-al" },
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            `  </url>`,
          ].join("\n"),
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
