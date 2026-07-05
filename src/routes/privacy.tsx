import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "../components/site/LegalPage";
import { useTr } from "@/lib/i18n";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "מדיניות פרטיות | COYA Studio" },
      { name: "description", content: "מדיניות הפרטיות של COYA — איזה מידע נאסף באתר, איך הוא נשמר וכיצד תוכלו לפנות אלינו בנושא." },
      { name: "robots", content: "noindex, follow" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Privacy Policy | COYA Studio" },
      { property: "og:description", content: "How we protect your privacy and information." },
      { property: "og:url", content: "https://coya-digital-studio-rtl.lovable.app/privacy" },
      { property: "og:image", content: "https://coya-digital-studio-rtl.lovable.app/__l5e/assets-v1/ad34d32a-a11e-457e-ae39-ba36e30f33f5/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "COYA Studio" },
      { name: "twitter:image", content: "https://coya-digital-studio-rtl.lovable.app/__l5e/assets-v1/ad34d32a-a11e-457e-ae39-ba36e30f33f5/og-image.jpg" },
      { property: "og:site_name", content: "COYA Studio" },
      { property: "og:locale", content: "he_IL" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Privacy Policy | COYA" },
      { name: "twitter:description", content: "The privacy policy of COYA Studio." },
    ],
    links: [{ rel: "canonical", href: "https://coya-digital-studio-rtl.lovable.app/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const tr = useTr();
  return (
    <LegalPage title={tr("מדיניות פרטיות", "Privacy Policy")} sections={[
      { h: tr("איסוף מידע", "Data collection"), p: tr("COYA אוספת מידע בסיסי שנמסר על ידי המשתמשים בטפסי יצירת קשר: שם, טלפון, אימייל ותוכן הפנייה.", "COYA collects basic information submitted through contact forms: name, phone, email, and message content.") },
      { h: tr("שימוש במידע", "Use of information"), p: tr("המידע משמש למענה לפניות, מתן הצעות מחיר וניהול קשר עסקי. איננו מוכרים את המידע לצדדים שלישיים.", "The information is used to respond to inquiries, provide quotes, and manage business relationships. We do not sell information to third parties.") },
      { h: tr("עוגיות (Cookies)", "Cookies"), p: tr("האתר משתמש בעוגיות לצורך שיפור חוויית המשתמש ומדידת שימוש. ניתן לחסום עוגיות דרך הגדרות הדפדפן.", "The site uses cookies to improve user experience and measure usage. Cookies can be blocked in your browser settings.") },
      { h: tr("אבטחת מידע", "Security"), p: tr("אנו נוקטים באמצעים סבירים להגנה על המידע. עם זאת, לא ניתן להבטיח הגנה מוחלטת ברשת.", "We take reasonable measures to protect information. That said, no online protection can be absolute.") },
      { h: tr("זכויות המשתמש", "User rights"), p: tr("כל משתמש רשאי לפנות אלינו לבקשת מחיקה, עדכון או עיון במידע שנשמר עליו.", "Any user may contact us to request deletion, update, or access to their stored information.") },
      { h: tr("יצירת קשר", "Contact"), p: tr("לכל שאלה בנושא פרטיות: cohenyar21@gmail.com", "For any privacy questions: cohenyar21@gmail.com") },
    ]} />
  );
}
