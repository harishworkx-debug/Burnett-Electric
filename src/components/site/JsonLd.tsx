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
  "image": "https://www.burnettelectrictuscaloosa.com/img/real_crew_1790407082115.jpg",
  "@id": "https://www.burnettelectrictuscaloosa.com/#business",
  "url": "https://www.burnettelectrictuscaloosa.com/",
  "telephone": "+1-205-634-8185",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Buhl",
    "addressRegion": "AL",
    "addressCountry": "US"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 33.2179, "longitude": -87.7364 },
  "areaServed": ["Tuscaloosa, AL", "Northport, AL", "Birmingham, AL"],
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
