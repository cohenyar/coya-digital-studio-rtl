import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "../components/site/LegalPage";
import { useTr } from "@/lib/i18n";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "הצהרת נגישות | COYA Studio" },
      { name: "description", content: "הצהרת הנגישות של אתר COYA Studio — התאמות, פאנל נגישות ודרכי פנייה לרכז הנגישות." },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Accessibility Statement | COYA Studio" },
      { property: "og:description", content: "The site is built per Israeli accessibility regulations and supports a full accessibility panel." },
      { property: "og:url", content: "https://coya-digital-studio-rtl.lovable.app/accessibility" },
      { property: "og:image", content: "https://coya-digital-studio-rtl.lovable.app/__l5e/assets-v1/ad34d32a-a11e-457e-ae39-ba36e30f33f5/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "COYA Studio" },
      { name: "twitter:image", content: "https://coya-digital-studio-rtl.lovable.app/__l5e/assets-v1/ad34d32a-a11e-457e-ae39-ba36e30f33f5/og-image.jpg" },
      { property: "og:site_name", content: "COYA Studio" },
      { property: "og:locale", content: "he_IL" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Accessibility | COYA" },
      { name: "twitter:description", content: "Accessibility statement for the COYA Studio website." },
    ],
    links: [{ rel: "canonical", href: "https://coya-digital-studio-rtl.lovable.app/accessibility" }],
  }),
  component: AccessibilityPage,
});

function AccessibilityPage() {
  const tr = useTr();
  return (
    <LegalPage title={tr("הצהרת נגישות", "Accessibility Statement")} sections={[
      { h: tr("מחויבות לנגישות", "Commitment to accessibility"), p: tr("COYA Studio מחויבת להנגיש את שירותיה לכלל האוכלוסייה, לרבות אנשים עם מוגבלויות, בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות).", "COYA Studio is committed to making its services accessible to everyone, including people with disabilities, in accordance with Israeli equal-rights regulations for accessibility to services.") },
      { h: tr("התאמות באתר", "Site adjustments"), p: tr("האתר תומך בניווט מלא באמצעות מקלדת, כולל טקסטים חלופיים לתמונות, ומאפשר שימוש בפאנל נגישות עם: הגדלה והקטנה של טקסט, ניגודיות גבוהה, ניגודיות הפוכה, גופן ידידותי לדיסלקציה ואיפוס הגדרות.", "The site supports full keyboard navigation, includes alt text for images, and provides an accessibility panel with: text zoom in/out, high contrast, inverted contrast, dyslexia-friendly font, and settings reset.") },
      { h: tr("פאנל הנגישות", "The accessibility panel"), p: tr("פאנל הנגישות זמין דרך הכפתור הצף בצד ימין למטה של כל עמוד. ההגדרות נשמרות במכשיר שלכם.", "The accessibility panel is available via the floating button at the bottom-right of every page. Settings are saved on your device.") },
      { h: tr("פניות בנושא נגישות", "Accessibility inquiries"), p: tr("אם נתקלתם בבעיית נגישות באתר, נשמח לשמוע: cohenyar21@gmail.com", "If you encountered an accessibility issue on the site, please let us know: cohenyar21@gmail.com") },
      { h: tr("עדכון אחרון", "Last updated"), p: tr("הצהרה זו עודכנה לאחרונה בשנת 2026.", "This statement was last updated in 2026.") },
    ]} />
  );
}
