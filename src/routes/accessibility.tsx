import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "../components/site/LegalPage";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "הצהרת נגישות | COYA Digital Studio" },
      { name: "description", content: "הצהרת הנגישות של אתר COYA Digital Studio — התאמות, פאנל נגישות ודרכי פנייה לרכז הנגישות." },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "הצהרת נגישות | COYA Digital Studio" },
      { property: "og:description", content: "האתר נבנה בהתאם לתקנות שוויון זכויות ותומך בפאנל נגישות מלא." },
      { property: "og:url", content: "https://coya-digital-studio-rtl.lovable.app/accessibility" },
      { property: "og:image", content: "https://coya-digital-studio-rtl.lovable.app/__l5e/assets-v1/d36078bd-d7e4-499d-a833-0cdcde29ed97/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "COYA Digital Studio" },
      { name: "twitter:image", content: "https://coya-digital-studio-rtl.lovable.app/__l5e/assets-v1/d36078bd-d7e4-499d-a833-0cdcde29ed97/og-image.jpg" },
      { property: "og:site_name", content: "COYA Digital Studio" },
      { property: "og:locale", content: "he_IL" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "הצהרת נגישות | COYA" },
      { name: "twitter:description", content: "הצהרת הנגישות של אתר COYA Digital Studio." },
    ],
    links: [{ rel: "canonical", href: "https://coya-digital-studio-rtl.lovable.app/accessibility" }],
  }),
  component: () => (
    <LegalPage title="הצהרת נגישות" sections={[
      { h: "מחויבות לנגישות", p: "COYA Digital Studio מחויבת להנגיש את שירותיה לכלל האוכלוסייה, לרבות אנשים עם מוגבלויות, בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות)." },
      { h: "התאמות באתר", p: "האתר תומך בניווט מלא באמצעות מקלדת, כולל טקסטים חלופיים לתמונות, ומאפשר שימוש בפאנל נגישות עם: הגדלה והקטנה של טקסט, ניגודיות גבוהה, ניגודיות הפוכה, גופן ידידותי לדיסלקציה ואיפוס הגדרות." },
      { h: "פאנל הנגישות", p: "פאנל הנגישות זמין דרך הכפתור הצף בצד ימין למטה של כל עמוד. ההגדרות נשמרות במכשיר שלכם." },
      { h: "פניות בנושא נגישות", p: "אם נתקלתם בבעיית נגישות באתר, נשמח לשמוע: cohenyar21@gmail.com" },
      { h: "עדכון אחרון", p: "הצהרה זו עודכנה לאחרונה בשנת 2026." },
    ]} />
  ),
});
