import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "../components/site/LegalPage";
import { useTr } from "@/lib/i18n";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "תנאי שימוש | COYA Studio" },
      { name: "description", content: "תנאי השימוש באתר COYA Studio — זכויות יוצרים, אחריות, פרטיות ושימוש מותר בתכני האתר." },
      { name: "robots", content: "noindex, follow" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Terms of Use | COYA Studio" },
      { property: "og:description", content: "Terms for using the COYA site and services." },
      { property: "og:url", content: "https://www.coyastudioai.com/terms" },
      { property: "og:image", content: "https://www.coyastudioai.com/__l5e/assets-v1/ad34d32a-a11e-457e-ae39-ba36e30f33f5/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "COYA Studio" },
      { name: "twitter:image", content: "https://www.coyastudioai.com/__l5e/assets-v1/ad34d32a-a11e-457e-ae39-ba36e30f33f5/og-image.jpg" },
      { property: "og:site_name", content: "COYA Studio" },
      { property: "og:locale", content: "he_IL" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Terms of Use | COYA" },
      { name: "twitter:description", content: "Terms of use for the COYA Studio website." },
    ],
    links: [{ rel: "canonical", href: "https://www.coyastudioai.com/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  const tr = useTr();
  return (
    <LegalPage title={tr("תנאי שימוש", "Terms of Use")} sections={[
      { h: tr("כללי", "General"), p: tr("השימוש באתר COYA Studio כפוף לתנאים המפורטים להלן. השימוש באתר מעיד על הסכמתכם לתנאים אלה.", "Use of the COYA Studio site is subject to the terms below. Using the site indicates your agreement to these terms.") },
      { h: tr("זכויות יוצרים", "Copyright"), p: tr("כל התכנים באתר, לרבות טקסטים, עיצובים, קוד ותמונות, הם קניינה הרוחני של COYA. אין להעתיק, לשכפל או להפיץ ללא אישור מראש.", "All content on the site — text, design, code, and images — is the intellectual property of COYA. Copying, reproducing, or distributing without prior permission is prohibited.") },
      { h: tr("אחריות", "Liability"), p: tr("המידע באתר נמסר \"כפי שהוא\". COYA אינה אחראית לנזק ישיר או עקיף שנובע מהשימוש באתר.", "Information on the site is provided \"as is\". COYA is not responsible for direct or indirect damage arising from use of the site.") },
      { h: tr("פנייה ליצירת קשר", "Contact inquiries"), p: tr("יצירת קשר דרך האתר אינה מהווה התחייבות לביצוע עבודה. כל עבודה תבוצע לאחר סגירת הצעת מחיר וחתימה.", "Contacting through the site does not constitute a commitment to perform work. All work is executed only after finalizing a quote and signing.") },
      { h: tr("שינויים בתנאים", "Changes to terms"), p: tr("COYA שומרת לעצמה את הזכות לעדכן את תנאי השימוש בכל עת. תנאים מעודכנים יפורסמו בעמוד זה.", "COYA reserves the right to update the terms at any time. Updated terms will be published on this page.") },
      { h: tr("דין ושיפוט", "Governing law"), p: tr("על תנאי שימוש אלה יחול הדין הישראלי. סמכות השיפוט הבלעדית נתונה לבתי המשפט המוסמכים בישראל.", "These terms are governed by Israeli law. Exclusive jurisdiction belongs to the competent courts in Israel.") },
    ]} />
  );
}
