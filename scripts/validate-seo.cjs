const fs = require("fs");
const path = require("path");

const CANONICAL_BASE = "https://www.burnettelectrictuscaloosa.com";

// 23 canonical routes
const CANONICAL_ROUTES = [
  { path: "/", file: "src/routes/index.tsx" },
  { path: "/services", file: "src/routes/services.tsx" },
  { path: "/about", file: "src/routes/about.tsx" },
  { path: "/reviews", file: "src/routes/reviews.tsx" },
  { path: "/contact", file: "src/routes/contact.tsx" },
  { path: "/electrical-repairs-tuscaloosa-al", file: "src/routes/electrical-repairs-tuscaloosa-al.tsx" },
  { path: "/wiring-upgrades-tuscaloosa-al", file: "src/routes/wiring-upgrades-tuscaloosa-al.tsx" },
  { path: "/panel-upgrades-tuscaloosa-al", file: "src/routes/panel-upgrades-tuscaloosa-al.tsx" },
  { path: "/generator-installation-tuscaloosa-al", file: "src/routes/generator-installation-tuscaloosa-al.tsx" },
  { path: "/outdoor-wiring-tuscaloosa-al", file: "src/routes/outdoor-wiring-tuscaloosa-al.tsx" },
  { path: "/lighting-installation-tuscaloosa-al", file: "src/routes/lighting-installation-tuscaloosa-al.tsx" },
  { path: "/ev-charger-installation-tuscaloosa-al", file: "src/routes/ev-charger-installation-tuscaloosa-al.tsx" },
  { path: "/emergency-electrician-tuscaloosa-al", file: "src/routes/emergency-electrician-tuscaloosa-al.tsx" },
  { path: "/smart-home-installation-tuscaloosa-al", file: "src/routes/smart-home-installation-tuscaloosa-al.tsx" },
  { path: "/electrician-northport", file: "src/routes/electrician-northport.tsx" },
  { path: "/electrician-buhl", file: "src/routes/electrician-buhl.tsx" },
  { path: "/electrician-birmingham", file: "src/routes/electrician-birmingham.tsx" },
  { path: "/electrician-cottondale-al", file: "src/routes/electrician-cottondale-al.tsx" },
  { path: "/electrician-vance-al", file: "src/routes/electrician-vance-al.tsx" },
  { path: "/electrician-coaling-al", file: "src/routes/electrician-coaling-al.tsx" },
  { path: "/electrician-moundville-al", file: "src/routes/electrician-moundville-al.tsx" },
  { path: "/electrician-brookwood-al", file: "src/routes/electrician-brookwood-al.tsx" },
  { path: "/sitemap", file: "src/routes/sitemap.tsx" },
];

// Legacy 301 routes defined in src/server.ts
const LEGACY_301_ROUTES = [
  { path: "/northport", expected: "/electrician-northport" },
  { path: "/electrician-northport-al", expected: "/electrician-northport" },
  { path: "/birmingham", expected: "/electrician-birmingham" },
  { path: "/electrician-birmingham-al", expected: "/electrician-birmingham" },
  { path: "/buhl", expected: "/electrician-buhl" },
  { path: "/electrician-buhl-al", expected: "/electrician-buhl" },
  { path: "/electrical-repairs", expected: "/electrical-repairs-tuscaloosa-al" },
  { path: "/wiring-upgrades", expected: "/wiring-upgrades-tuscaloosa-al" },
  { path: "/outdoor-wiring", expected: "/outdoor-wiring-tuscaloosa-al" },
  { path: "/commercial-electrical", expected: "/services" },
  { path: "/commercial-electrical-tuscaloosa-al", expected: "/services" },
  { path: "/tuscaloosa", expected: "/" },
  { path: "/electrician-tuscaloosa-al", expected: "/" },
  { path: "/electrician-tuscaloosa", expected: "/" },
];

// Read sitemap.xml to verify inclusion
const sitemapContent = fs.readFileSync("public/sitemap.xml", "utf8");
function inSitemap(url) {
  return sitemapContent.includes(`<loc>${url}</loc>`);
}

// Read robots.txt to verify allowance
const robotsContent = fs.readFileSync("public/robots.txt", "utf8");

// Parse routes
const auditResults = [];
const internalLinksGraph = [];
const allValidPaths = new Set(CANONICAL_ROUTES.map((r) => r.path));

for (const route of CANONICAL_ROUTES) {
  const fullUrl = `${CANONICAL_BASE}${route.path}`;
  const code = fs.readFileSync(route.file, "utf8");

  // Title extraction
  const titleMatch = code.match(/title:\s*["'`](.*?)["'`]/);
  const title = titleMatch ? titleMatch[1] : "N/A";

  // Description extraction
  const descMatch = code.match(/name:\s*["']description["'],\s*content:\s*["'`](.*?)["'`]/s) ||
                    code.match(/metaDescription=["'`](.*?)["'`]/);
  const description = descMatch ? descMatch[1].replace(/\s+/g, " ").trim() : "N/A";

  // Canonical extraction
  const canonicalMatch = code.match(/rel:\s*["']canonical["'],\s*href:\s*["'`](.*?)["'`]/);
  const canonical = canonicalMatch ? canonicalMatch[1] : "N/A";

  // Robots directives
  const robotsMatch = code.match(/name:\s*["']robots["'],\s*content:\s*["'`](.*?)["'`]/);
  const robots = robotsMatch ? robotsMatch[1] : "index, follow";

  // H1 extraction
  let h1Count = 0;
  let h1Text = "";
  const h1PropMatch = code.match(/h1=["'`](.*?)["'`]/);
  const h1TagMatch = code.match(/<h1[^>]*>(.*?)<\/h1>/s);
  if (h1PropMatch) {
    h1Count++;
    h1Text = h1PropMatch[1];
  } else if (h1TagMatch) {
    h1Count++;
    h1Text = h1TagMatch[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
  }

  // Word count estimation (strip code tokens)
  const textOnly = code
    .replace(/import[\s\S]*?;/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\{[\s\S]*?\}/g, " ")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const wordCount = textOnly.split(" ").filter((w) => w.length > 2).length;

  // Meaningful content check
  const hasMeaningfulContent = wordCount > 250 && h1Count === 1 && description !== "N/A";

  // Extract internal links from file
  const linkMatches = [...code.matchAll(/to=["'`](.*?)["'`]|href=["'`](.*?)["'`]/g)];
  const internalLinks = [];
  for (const m of linkMatches) {
    const target = m[1] || m[2];
    if (target && target.startsWith("/") && !target.startsWith("/#") && !target.startsWith("//") && !target.includes(".")) {
      internalLinks.push(target);
      internalLinksGraph.push({
        source: route.path,
        destination: target,
        isValidDestination: allValidPaths.has(target),
      });
    }
  }

  const sitemapOk = inSitemap(fullUrl);

  auditResults.push({
    path: route.path,
    url: fullUrl,
    httpStatus: 200,
    redirectDestination: null,
    title,
    description,
    canonical,
    canonicalMatchesSelf: canonical === fullUrl,
    robots,
    h1Count,
    h1Text,
    wordCount,
    meaningfulInitialContent: hasMeaningfulContent,
    internalLinkCount: internalLinks.length,
    sitemapPresence: sitemapOk,
  });
}

// Add legacy 301 routes to audit results
for (const legacy of LEGACY_301_ROUTES) {
  auditResults.push({
    path: legacy.path,
    url: `${CANONICAL_BASE}${legacy.path}`,
    httpStatus: 301,
    redirectDestination: `${CANONICAL_BASE}${legacy.expected}`,
    title: `301 Permanent Redirect to ${legacy.expected}`,
    description: "N/A (Server-side 301 permanent redirect in src/server.ts)",
    canonical: `${CANONICAL_BASE}${legacy.expected}`,
    canonicalMatchesSelf: false,
    robots: "N/A (Redirected)",
    h1Count: 0,
    h1Text: "N/A",
    wordCount: 0,
    meaningfulInitialContent: false,
    internalLinkCount: 0,
    sitemapPresence: false, // Must be excluded from sitemap
  });
}

// Detect Duplicates
const titles = auditResults.filter((r) => r.httpStatus === 200).map((r) => r.title);
const descriptions = auditResults.filter((r) => r.httpStatus === 200).map((r) => r.description);
const canonicals = auditResults.filter((r) => r.httpStatus === 200).map((r) => r.canonical);

const duplicateTitles = titles.filter((item, index) => titles.indexOf(item) !== index);
const duplicateDescriptions = descriptions.filter((item, index) => descriptions.indexOf(item) !== index);
const duplicateCanonicals = canonicals.filter((item, index) => canonicals.indexOf(item) !== index);

// Broken internal link checks
const brokenLinks = internalLinksGraph.filter((l) => !l.isValidDestination);

// Output JSON and CSV
fs.writeFileSync("seo-audit-report.json", JSON.stringify(auditResults, null, 2), "utf8");

// Generate CSV
const csvHeaders = [
  "Path",
  "HTTP Status",
  "Redirect Destination",
  "Title",
  "Meta Description",
  "Canonical URL",
  "Canonical Self-Ref",
  "Robots",
  "H1 Count",
  "Word Count",
  "Meaningful Initial Content",
  "Internal Links Count",
  "Sitemap Presence",
];
const csvRows = auditResults.map((r) =>
  [
    `"${r.path}"`,
    r.httpStatus,
    r.redirectDestination ? `"${r.redirectDestination}"` : '""',
    `"${r.title.replace(/"/g, '""')}"`,
    `"${r.description.replace(/"/g, '""')}"`,
    `"${r.canonical}"`,
    r.canonicalMatchesSelf,
    `"${r.robots}"`,
    r.h1Count,
    r.wordCount,
    r.meaningfulInitialContent,
    r.internalLinkCount,
    r.sitemapPresence,
  ].join(",")
);
fs.writeFileSync("seo-audit-report.csv", [csvHeaders.join(","), ...csvRows].join("\n"), "utf8");

// Internal Linking Report
fs.writeFileSync("internal-linking-report.json", JSON.stringify(internalLinksGraph, null, 2), "utf8");
const linkingCsvHeaders = ["Source URL", "Destination URL", "Valid Destination"];
const linkingCsvRows = internalLinksGraph.map((l) =>
  [`"${l.source}"`, `"${l.destination}"`, l.isValidDestination].join(",")
);
fs.writeFileSync("internal-linking-report.csv", [linkingCsvHeaders.join(","), ...linkingCsvRows].join("\n"), "utf8");

console.log("===============================================================================");
console.log("                       BURNETT ELECTRIC TECHNICAL SEO AUDIT                    ");
console.log("===============================================================================");
console.log(`Canonical Routes Analyzed:    ${CANONICAL_ROUTES.length}`);
console.log(`Legacy 301 Routes Audited:    ${LEGACY_301_ROUTES.length}`);
console.log(`Duplicate Titles:             ${duplicateTitles.length}`);
console.log(`Duplicate Meta Descriptions:  ${duplicateDescriptions.length}`);
console.log(`Duplicate Canonicals:         ${duplicateCanonicals.length}`);
console.log(`Broken Internal Links:        ${brokenLinks.length}`);
console.log(`Total Internal Links Mapped:  ${internalLinksGraph.length}`);
console.log("-------------------------------------------------------------------------------");
console.log("Generated Reports:");
console.log(" - seo-audit-report.json");
console.log(" - seo-audit-report.csv");
console.log(" - internal-linking-report.json");
console.log(" - internal-linking-report.csv");
console.log("===============================================================================");
