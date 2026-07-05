import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "../components/site/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "תנאי שימוש | COYA Digital Studio" },
      { name: "description", content: "תנאי השימוש באתר COYA Digital Studio — זכויות יוצרים, אחריות, פרטיות ושימוש מותר בתכני האתר." },
      { name: "robots", content: "noindex, follow" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "תנאי שימוש | COYA Digital Studio" },
      { property: "og:description", content: "התנאים לשימוש באתר ובשירותי COYA." },
      { property: "og:url", content: "https://coya-digital-studio-rtl.lovable.app/terms" },
      { property: "og:image", content: "https://coya-digital-studio-rtl.lovable.app/__l5e/assets-v1/ad34d32a-a11e-457e-ae39-ba36e30f33f5/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "COYA Digital Studio" },
      { name: "twitter:image", content: "https://coya-digital-studio-rtl.lovable.app/__l5e/assets-v1/ad34d32a-a11e-457e-ae39-ba36e30f33f5/og-image.jpg" },
      { property: "og:site_name", content: "COYA Digital Studio" },
      { property: "og:locale", content: "he_IL" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "תנאי שימוש | COYA" },
      { name: "twitter:description", content: "תנאי השימוש באתר COYA Digital Studio." },
    ],
    links: [{ rel: "canonical", href: "https://coya-digital-studio-rtl.lovable.app/terms" }],
  }),
  component: () => (
    <LegalPage title="תנאי שימוש" sections={[
      { h: "כללי", p: "השימוש באתר COYA Digital Studio כפוף לתנאים המפורטים להלן. השימוש באתר מעיד על הסכמתכם לתנאים אלה." },
      { h: "זכויות יוצרים", p: "כל התכנים באתר, לרבות טקסטים, עיצובים, קוד ותמונות, הם קניינה הרוחני של COYA. אין להעתיק, לשכפל או להפיץ ללא אישור מראש." },
      { h: "אחריות", p: "המידע באתר נמסר \"כפי שהוא\". COYA אינה אחראית לנזק ישיר או עקיף שנובע מהשימוש באתר." },
      { h: "פנייה ליצירת קשר", p: "יצירת קשר דרך האתר אינה מהווה התחייבות לביצוע עבודה. כל עבודה תבוצע לאחר סגירת הצעת מחיר וחתימה." },
      { h: "שינויים בתנאים", p: "COYA שומרת לעצמה את הזכות לעדכן את תנאי השימוש בכל עת. תנאים מעודכנים יפורסמו בעמוד זה." },
      { h: "דין ושיפוט", p: "על תנאי שימוש אלה יחול הדין הישראלי. סמכות השיפוט הבלעדית נתונה לבתי המשפט המוסמכים בישראל." },
    ]} />
  ),
});
