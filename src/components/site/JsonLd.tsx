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
  "image": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
  "@id": "https://burnettelectric.com/#business",
  "url": "https://burnettelectric.com/",
  "telephone": "+1-205-660-6952",
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
  }],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "128"
  }
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Burnett Electric",
  "url": "https://burnettelectric.com/",
  "logo": "https://burnettelectric.com/favicon.ico",
  "sameAs": []
};
