import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "../components/site/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "מדיניות פרטיות | COYA Digital Studio" },
      { name: "description", content: "מדיניות הפרטיות של COYA — איזה מידע נאסף באתר, איך הוא נשמר וכיצד תוכלו לפנות אלינו בנושא." },
      { name: "robots", content: "noindex, follow" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "מדיניות פרטיות | COYA Digital Studio" },
      { property: "og:description", content: "כך אנחנו שומרים על הפרטיות והמידע שלכם." },
      { property: "og:url", content: "/privacy" },
      { property: "og:site_name", content: "COYA Digital Studio" },
      { property: "og:locale", content: "he_IL" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "מדיניות פרטיות | COYA" },
      { name: "twitter:description", content: "מדיניות הפרטיות של COYA Digital Studio." },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: () => (
    <LegalPage title="מדיניות פרטיות" sections={[
      { h: "איסוף מידע", p: "COYA אוספת מידע בסיסי שנמסר על ידי המשתמשים בטפסי יצירת קשר: שם, טלפון, אימייל ותוכן הפנייה." },
      { h: "שימוש במידע", p: "המידע משמש למענה לפניות, מתן הצעות מחיר וניהול קשר עסקי. איננו מוכרים את המידע לצדדים שלישיים." },
      { h: "עוגיות (Cookies)", p: "האתר משתמש בעוגיות לצורך שיפור חוויית המשתמש ומדידת שימוש. ניתן לחסום עוגיות דרך הגדרות הדפדפן." },
      { h: "אבטחת מידע", p: "אנו נוקטים באמצעים סבירים להגנה על המידע. עם זאת, לא ניתן להבטיח הגנה מוחלטת ברשת." },
      { h: "זכויות המשתמש", p: "כל משתמש רשאי לפנות אלינו לבקשת מחיקה, עדכון או עיון במידע שנשמר עליו." },
      { h: "יצירת קשר", p: "לכל שאלה בנושא פרטיות: cohenyar21@gmail.com" },
    ]} />
  ),
});
