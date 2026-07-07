// Central SEO helpers so every route ships absolute canonical/og URLs
// and consistent JSON-LD. Do not hardcode the domain elsewhere.

export const SITE_URL = "https://www.coyastudioai.com";
export const SITE_NAME = "COYA Digital Studio";
export const SITE_TAGLINE = "בניית אתרים, דפי נחיתה, אוטומציות AI, דמויות AI, פרסומות וסרטוני AI";
export const OG_IMAGE_PATH =
  "/__l5e/assets-v1/ad34d32a-a11e-457e-ae39-ba36e30f33f5/og-image.jpg";
export const OG_IMAGE_URL = `${SITE_URL}${OG_IMAGE_PATH}`;
export const CONTACT_EMAIL = "cohenyar21@gmail.com";
export const CONTACT_PHONE = "+972545509927";

export const absUrl = (path: string) =>
  path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

export interface BuildMetaOpts {
  title: string;
  description: string;
  path: string; // e.g. "/websites"
  ogType?: "website" | "article";
  image?: string; // absolute or CDN path
  keywords?: string;
  noindex?: boolean;
  twitterCard?: "summary" | "summary_large_image";
}

export function buildMeta(opts: BuildMetaOpts) {
  const url = absUrl(opts.path);
  const image = opts.image ? absUrl(opts.image) : OG_IMAGE_URL;
  const ogType = opts.ogType ?? "website";
  const twitterCard = opts.twitterCard ?? "summary_large_image";
  const meta: Array<Record<string, string>> = [
    { title: opts.title },
    { name: "description", content: opts.description },
    { property: "og:title", content: opts.title },
    { property: "og:description", content: opts.description },
    { property: "og:type", content: ogType },
    { property: "og:url", content: url },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: "he_IL" },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: `${SITE_NAME} — ${SITE_TAGLINE}` },
    { name: "twitter:card", content: twitterCard },
    { name: "twitter:title", content: opts.title },
    { name: "twitter:description", content: opts.description },
    { name: "twitter:image", content: image },
  ];
  if (opts.keywords) meta.push({ name: "keywords", content: opts.keywords });
  if (opts.noindex) meta.push({ name: "robots", content: "noindex, follow" });
  return meta;
}

export function canonicalLink(path: string) {
  return { rel: "canonical", href: absUrl(path) };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: ["COYA Studio", "קויה סטודיו", "COYA"],
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/icon-512.png`,
    width: 512,
    height: 512,
  },
  image: OG_IMAGE_URL,
  description:
    "COYA Studio — סטודיו דיגיטלי בישראל לבניית אתרים, פיתוח אתרים לעסקים, דפי נחיתה, אוטומציות AI, סוכני AI, צ׳אטבוטים ופתרונות בינה מלאכותית לעסקים.",
  slogan: "בניית אתרים ופתרונות AI לעסקים בישראל",
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE,
  priceRange: "$$",
  currenciesAccepted: "ILS",
  paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
  areaServed: [
    { "@type": "Country", name: "Israel" },
    { "@type": "AdministrativeArea", name: "תל אביב" },
    { "@type": "AdministrativeArea", name: "מרכז" },
    { "@type": "AdministrativeArea", name: "ירושלים" },
    { "@type": "AdministrativeArea", name: "חיפה והצפון" },
    { "@type": "AdministrativeArea", name: "השרון" },
    { "@type": "AdministrativeArea", name: "הדרום" },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "IL",
    addressRegion: "Israel",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.0853,
    longitude: 34.7818,
  },
  serviceArea: {
    "@type": "GeoShape",
    addressCountry: "IL",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  knowsAbout: [
    "בניית אתרים",
    "בניית אתר לעסק",
    "פיתוח אתרים",
    "דפי נחיתה",
    "אוטומציה לעסקים",
    "אוטומציות AI",
    "סוכני AI",
    "פיתוח סוכני AI",
    "צ׳אטבוט לעסק",
    "בינה מלאכותית לעסקים",
    "פתרונות AI לעסקים",
    "יישום AI",
    "AI לעסקים",
    "SEO",
  ],
  knowsLanguage: ["he", "en"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: CONTACT_EMAIL,
      telephone: CONTACT_PHONE,
      areaServed: "IL",
      availableLanguage: ["Hebrew", "English"],
    },
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: CONTACT_PHONE,
      areaServed: "IL",
      availableLanguage: ["Hebrew", "English"],
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "שירותי COYA Studio",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "בניית אתרים לעסקים", url: `${SITE_URL}/websites` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "בניית דפי נחיתה", url: `${SITE_URL}/landing` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "אוטומציות AI ואוטומציה לעסקים", url: `${SITE_URL}/ai` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "הטמעת מערכות AI וסוכני AI", url: `${SITE_URL}/ai-systems` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "בניית דמויות AI", url: `${SITE_URL}/ai-avatars` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "פרסומות AI", url: `${SITE_URL}/ai-ads` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "סרטוני AI", url: `${SITE_URL}/ai-videos` } },
    ],
  },
  sameAs: [] as string[],
};


const SERVICE_DEFS: Array<{ path: string; name: string; serviceType: string; description: string }> = [
  { path: "/websites", name: "בניית אתרים לעסקים", serviceType: "Website Development", description: "בניית אתרים ופיתוח אתרים לעסקים בישראל — אתר תדמית מקצועי, מהיר, רספונסיבי ומותאם ל-SEO." },
  { path: "/landing", name: "בניית דפי נחיתה לעסקים", serviceType: "Landing Page Development", description: "בניית דפי נחיתה ממוקדי המרה לקמפיינים בישראל — מסר חד, עיצוב ומבנה שמייצרים לידים איכותיים." },
  { path: "/ai", name: "אוטומציה לעסקים ואוטומציות AI", serviceType: "AI Automation", description: "אוטומציה לעסקים בישראל: אוטומציות AI, n8n ו-Make לחיבור מערכות, חיסכון בזמן וייעול תהליכים." },
  { path: "/ai-systems", name: "פיתוח סוכני AI ויישום AI בעסק", serviceType: "AI Agents & Systems Integration", description: "פיתוח סוכני AI, יישום AI והטמעת בינה מלאכותית לעסקים בישראל — CRM, מכירות, שירות ותפעול." },
  { path: "/ai-avatars", name: "בניית דמויות AI לעסקים", serviceType: "AI Avatar Production", description: "דמויות AI (Avatars) מציאותיות לוידאו, מצגות והדרכות — עם קול, שפה ואופי אחידים למותג בישראל." },
  { path: "/ai-ads", name: "פרסומות AI לעסקים", serviceType: "AI Advertising Creative", description: "הפקת פרסומות AI לוידאו ולסטילס לקמפיינים במטא, גוגל, טיקטוק ויוטיוב — עבור עסקים בישראל." },
  { path: "/ai-videos", name: "סרטוני AI לעסקים", serviceType: "AI Video Production", description: "הפקת סרטוני AI לשיווק, הסבר וסושיאל עם Sora, Runway ו-HeyGen — עבור עסקים ומותגים בישראל." },
];

export const servicesJsonLd = SERVICE_DEFS.map((s) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}${s.path}#service`,
  name: s.name,
  serviceType: s.serviceType,
  description: s.description,
  url: absUrl(s.path),
  image: OG_IMAGE_URL,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "Country", name: "Israel" },
  availableLanguage: ["he", "en"],
}));

export const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  description: `סטודיו דיגיטלי לבניית אתרים, דפי נחיתה ואוטומציות AI לעסקים.`,
  url: SITE_URL,
  image: OG_IMAGE_URL,
  logo: `${SITE_URL}/icon-512.png`,
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE,
  areaServed: { "@type": "Country", name: "Israel" },
  inLanguage: "he",
  priceRange: "$$",
  serviceType: [
    "בניית אתרים",
    "בניית דפי נחיתה",
    "אוטומציות AI",
    "הטמעת מערכות AI",
    "בניית דמויות AI",
    "פרסומות AI",
    "סרטוני AI",
    "אינטגרציות n8n / Make",
    "צ׳אטבוטים",
    "SEO",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "he-IL",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export interface Crumb {
  name: string;
  path: string;
}
export function breadcrumbJsonLd(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absUrl(c.path),
    })),
  };
}

export function webPageJsonLd(title: string, path: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: absUrl(path),
    inLanguage: "he-IL",
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
  };
}

export function faqJsonLd(faqs: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
