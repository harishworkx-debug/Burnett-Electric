export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}



export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  "name": "Burnett Electric",
  "description": "Licensed residential electrical contractor providing repairs, panel upgrades, wiring, and generator installations in Tuscaloosa, Northport, Buhl, and West Alabama.",
  "image": "https://www.burnettelectrictuscaloosa.com/img/real_crew_1790407082115.jpg",
  "@id": "https://www.burnettelectrictuscaloosa.com/#business",
  "url": "https://www.burnettelectrictuscaloosa.com/",
  "telephone": "+1-205-634-8185",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "15953 Annie Bell Dr",
    "addressLocality": "Buhl",
    "addressRegion": "AL",
    "postalCode": "35446",
    "addressCountry": "US"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 33.2179, "longitude": -87.7364 },
  "areaServed": [
    { "@type": "City", "name": "Tuscaloosa", "sameAs": "https://en.wikipedia.org/wiki/Tuscaloosa,_Alabama" },
    { "@type": "City", "name": "Northport", "sameAs": "https://en.wikipedia.org/wiki/Northport,_Alabama" },
    { "@type": "City", "name": "Buhl" },
    { "@type": "City", "name": "Cottondale" },
    { "@type": "City", "name": "Vance" },
    { "@type": "City", "name": "Coaling" },
    { "@type": "City", "name": "Moundville" },
    { "@type": "City", "name": "Brookwood" },
    { "@type": "City", "name": "Birmingham", "sameAs": "https://en.wikipedia.org/wiki/Birmingham,_Alabama" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Residential Electrical Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Electrical Repairs",
          "url": "https://www.burnettelectrictuscaloosa.com/electrical-repairs-tuscaloosa-al"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Wiring Upgrades",
          "url": "https://www.burnettelectrictuscaloosa.com/wiring-upgrades-tuscaloosa-al"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Outdoor Wiring",
          "url": "https://www.burnettelectrictuscaloosa.com/outdoor-wiring-tuscaloosa-al"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Generator Installation",
          "url": "https://www.burnettelectrictuscaloosa.com/generator-installation-tuscaloosa-al"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Panel Upgrades",
          "url": "https://www.burnettelectrictuscaloosa.com/panel-upgrades-tuscaloosa-al"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Lighting & Fan Installation",
          "url": "https://www.burnettelectrictuscaloosa.com/lighting-installation-tuscaloosa-al"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "EV Charger Installation",
          "url": "https://www.burnettelectrictuscaloosa.com/ev-charger-installation-tuscaloosa-al"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Electrician",
          "url": "https://www.burnettelectrictuscaloosa.com/emergency-electrician-tuscaloosa-al"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Smart Home Installation",
          "url": "https://www.burnettelectrictuscaloosa.com/smart-home-installation-tuscaloosa-al"
        }
      }
    ]
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "opens": "07:00", "closes": "19:00"
  }]
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Burnett Electric",
  "url": "https://www.burnettelectrictuscaloosa.com/",
  "logo": "https://www.burnettelectrictuscaloosa.com/favicon.ico",
  "sameAs": []
};

export const siteNavigationSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Main Navigation",
  "itemListElement": [
    { "@type": "SiteNavigationElement", "position": 1, "name": "Home", "url": "https://www.burnettelectrictuscaloosa.com/" },
    { "@type": "SiteNavigationElement", "position": 2, "name": "About Us", "url": "https://www.burnettelectrictuscaloosa.com/about" },
    { "@type": "SiteNavigationElement", "position": 3, "name": "Electrical Services", "url": "https://www.burnettelectrictuscaloosa.com/services" },
    { "@type": "SiteNavigationElement", "position": 4, "name": "Electrical Repairs", "url": "https://www.burnettelectrictuscaloosa.com/electrical-repairs-tuscaloosa-al" },
    { "@type": "SiteNavigationElement", "position": 5, "name": "Wiring Upgrades", "url": "https://www.burnettelectrictuscaloosa.com/wiring-upgrades-tuscaloosa-al" },
    { "@type": "SiteNavigationElement", "position": 6, "name": "Panel Upgrades", "url": "https://www.burnettelectrictuscaloosa.com/panel-upgrades-tuscaloosa-al" },
    { "@type": "SiteNavigationElement", "position": 7, "name": "Generator Installation", "url": "https://www.burnettelectrictuscaloosa.com/generator-installation-tuscaloosa-al" },
    { "@type": "SiteNavigationElement", "position": 8, "name": "Electrician Northport", "url": "https://www.burnettelectrictuscaloosa.com/electrician-northport" },
    { "@type": "SiteNavigationElement", "position": 9, "name": "Electrician Buhl", "url": "https://www.burnettelectrictuscaloosa.com/electrician-buhl" },
    { "@type": "SiteNavigationElement", "position": 10, "name": "Customer Reviews", "url": "https://www.burnettelectrictuscaloosa.com/reviews" },
    { "@type": "SiteNavigationElement", "position": 11, "name": "Contact Us", "url": "https://www.burnettelectrictuscaloosa.com/contact" },
    { "@type": "SiteNavigationElement", "position": 12, "name": "HTML Sitemap", "url": "https://www.burnettelectrictuscaloosa.com/sitemap" }
  ]
};

