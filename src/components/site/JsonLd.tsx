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
    { "@type": "City", "name": "Birmingham" }
  ],
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
