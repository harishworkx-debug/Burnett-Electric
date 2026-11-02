const fs = require("fs");
const path = require("path");

// 1. Update src/routes/index.tsx
let indexCode = fs.readFileSync("src/routes/index.tsx", "utf8");
if (!indexCode.includes('View All Residential Services')) {
  const target = `            ))}
          </div>
        </div>
      </section>`;
  const targetCRLF = target.replace(/\n/g, "\r\n");
  const replacement = `            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-primary text-secondary font-semibold shadow-glow hover:scale-105 transition">
              View All Residential Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>`;
  if (indexCode.includes(targetCRLF)) {
    indexCode = indexCode.replace(targetCRLF, replacement.replace(/\n/g, "\r\n"));
    fs.writeFileSync("src/routes/index.tsx", indexCode, "utf8");
    console.log("Updated index.tsx (CRLF)");
  } else if (indexCode.includes(target)) {
    indexCode = indexCode.replace(target, replacement);
    fs.writeFileSync("src/routes/index.tsx", indexCode, "utf8");
    console.log("Updated index.tsx (LF)");
  } else {
    console.warn("Could not find target in index.tsx");
  }
}

// 2. Update src/routes/services.tsx
let servicesCode = fs.readFileSync("src/routes/services.tsx", "utf8");
servicesCode = servicesCode.replace(
  'title: "Electrical Repairs", to: "/electrical-repairs-tuscaloosa-al"',
  'title: "Electrical Repairs", anchorText: "Electrical Repairs in Tuscaloosa", to: "/electrical-repairs-tuscaloosa-al"'
);
servicesCode = servicesCode.replace(
  'title: "Wiring Upgrades", to: "/wiring-upgrades-tuscaloosa-al"',
  'title: "Wiring Upgrades", anchorText: "Wiring Upgrades in Tuscaloosa", to: "/wiring-upgrades-tuscaloosa-al"'
);
servicesCode = servicesCode.replace(
  'title: "Panel Upgrades", to: "/panel-upgrades-tuscaloosa-al"',
  'title: "Panel Upgrades", anchorText: "Electrical Panel Upgrades", to: "/panel-upgrades-tuscaloosa-al"'
);
servicesCode = servicesCode.replace(
  'title: "Lighting & Fan Installation", to: "/lighting-installation-tuscaloosa-al"',
  'title: "Lighting & Fan Installation", anchorText: "Lighting Installation", to: "/lighting-installation-tuscaloosa-al"'
);
servicesCode = servicesCode.replace(
  'title: "Outdoor Wiring", to: "/outdoor-wiring-tuscaloosa-al"',
  'title: "Outdoor Wiring", anchorText: "Outdoor Wiring", to: "/outdoor-wiring-tuscaloosa-al"'
);
servicesCode = servicesCode.replace(
  'title: "Smart Home Installation", to: "/smart-home-installation-tuscaloosa-al"',
  'title: "Smart Home Installation", anchorText: "Smart Home Installation", to: "/smart-home-installation-tuscaloosa-al"'
);
servicesCode = servicesCode.replace(
  'title: "Generator Installation", to: "/generator-installation-tuscaloosa-al"',
  'title: "Generator Installation", anchorText: "Generator Installation", to: "/generator-installation-tuscaloosa-al"'
);
servicesCode = servicesCode.replace(
  'title: "EV Charger Installation", to: "/ev-charger-installation-tuscaloosa-al"',
  'title: "EV Charger Installation", anchorText: "EV Charger Installation", to: "/ev-charger-installation-tuscaloosa-al"'
);
servicesCode = servicesCode.replace(
  'title: "Emergency Residential Electrical Services", to: "/emergency-electrician-tuscaloosa-al"',
  'title: "Emergency Residential Electrical Services", anchorText: "Emergency Electrician", to: "/emergency-electrician-tuscaloosa-al"'
);

// Replace button anchor text
servicesCode = servicesCode.replace(
  'Explore {s.title} <ArrowRight className="h-4 w-4" />',
  '{(s as any).anchorText || s.title} <ArrowRight className="h-4 w-4" />'
);

fs.writeFileSync("src/routes/services.tsx", servicesCode, "utf8");
console.log("Updated services.tsx");

// 3. Update LocationPageLayout.tsx Breadcrumb URL & UI
let locCode = fs.readFileSync("src/components/site/LocationPageLayout.tsx", "utf8");
locCode = locCode.replace(
  '"item": "https://www.burnettelectrictuscaloosa.com/#service-areas"',
  '"item": "https://www.burnettelectrictuscaloosa.com/sitemap"'
);
locCode = locCode.replace(
  '<Breadcrumbs items={[{ label: "Locations" }, { label: city }]} />',
  '<Breadcrumbs items={[{ label: "Service Areas", to: "/sitemap" }, { label: city }]} />'
);
fs.writeFileSync("src/components/site/LocationPageLayout.tsx", locCode, "utf8");
console.log("Updated LocationPageLayout.tsx");

// 4. Update sitemap.xml and sitemap[.]xml.ts
const ALL_URLS = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/services", changefreq: "weekly", priority: "0.9" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/reviews", changefreq: "weekly", priority: "0.8" },
  { path: "/contact", changefreq: "monthly", priority: "0.8" },
  { path: "/electrical-repairs-tuscaloosa-al", changefreq: "weekly", priority: "0.9" },
  { path: "/wiring-upgrades-tuscaloosa-al", changefreq: "weekly", priority: "0.9" },
  { path: "/panel-upgrades-tuscaloosa-al", changefreq: "weekly", priority: "0.9" },
  { path: "/generator-installation-tuscaloosa-al", changefreq: "weekly", priority: "0.9" },
  { path: "/outdoor-wiring-tuscaloosa-al", changefreq: "weekly", priority: "0.9" },
  { path: "/lighting-installation-tuscaloosa-al", changefreq: "weekly", priority: "0.9" },
  { path: "/ev-charger-installation-tuscaloosa-al", changefreq: "weekly", priority: "0.9" },
  { path: "/emergency-electrician-tuscaloosa-al", changefreq: "weekly", priority: "0.9" },
  { path: "/smart-home-installation-tuscaloosa-al", changefreq: "weekly", priority: "0.9" },
  { path: "/electrician-northport", changefreq: "weekly", priority: "0.8" },
  { path: "/electrician-buhl", changefreq: "weekly", priority: "0.8" },
  { path: "/electrician-birmingham", changefreq: "weekly", priority: "0.8" },
  { path: "/electrician-cottondale-al", changefreq: "weekly", priority: "0.7" },
  { path: "/electrician-vance-al", changefreq: "weekly", priority: "0.7" },
  { path: "/electrician-coaling-al", changefreq: "weekly", priority: "0.7" },
  { path: "/electrician-moundville-al", changefreq: "weekly", priority: "0.7" },
  { path: "/electrician-brookwood-al", changefreq: "weekly", priority: "0.7" },
  { path: "/sitemap", changefreq: "weekly", priority: "0.8" },
];

const LASTMOD = "2026-11-02";
const xmlContent = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...ALL_URLS.map(u => `  <url>\n    <loc>https://www.burnettelectrictuscaloosa.com${u.path}</loc>\n    <lastmod>${LASTMOD}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`),
  `</urlset>`
].join("\n");

fs.writeFileSync("public/sitemap.xml", xmlContent + "\n", "utf8");
console.log("Updated public/sitemap.xml with all 23 canonical URLs");

// Update sitemap[.]xml.ts
let sitemapRouteCode = `import { createFileRoute } from "@tanstack/react-router";
import type { } from "@tanstack/react-start";

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
        const entries: SitemapEntry[] = ${JSON.stringify(ALL_URLS, null, 10)};

        const LASTMOD_DATE = "${LASTMOD}";
        const xml = [
          \`<?xml version="1.0" encoding="UTF-8"?>\`,
          \`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\`,
          ...entries.map(
            (e) =>
              \`  <url>\\n    <loc>\${BASE_URL}\${e.path}</loc>\\n    <lastmod>\${LASTMOD_DATE}</lastmod>\\n    <changefreq>\${e.changefreq}</changefreq>\\n    <priority>\${e.priority}</priority>\\n  </url>\`,
          ),
          \`</urlset>\`,
        ].join("\\n");

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
`;
fs.writeFileSync("src/routes/sitemap[.]xml.ts", sitemapRouteCode, "utf8");
console.log("Updated src/routes/sitemap[.]xml.ts");

// Update scripts/ping-indexnow.js
let pingScript = fs.readFileSync("scripts/ping-indexnow.js", "utf8");
const urlListString = JSON.stringify(ALL_URLS.map(u => `https://www.burnettelectrictuscaloosa.com${u.path}`), null, 2);
pingScript = pingScript.replace(/const urlList = \[[\s\S]*?\];/, `const urlList = ${urlListString};`);
fs.writeFileSync("scripts/ping-indexnow.js", pingScript, "utf8");
console.log("Updated scripts/ping-indexnow.js");
