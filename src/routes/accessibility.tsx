import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "../components/site/LegalPage";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "הצהרת נגישות | COYA Digital Studio" },
      { name: "description", content: "הצהרת הנגישות של אתר COYA Digital Studio." },
      { property: "og:url", content: "/accessibility" },
    ],
    links: [{ rel: "canonical", href: "/accessibility" }],
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
