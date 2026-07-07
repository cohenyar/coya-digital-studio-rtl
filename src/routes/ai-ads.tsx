import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "../components/site/Section";
import { ServiceHero, CTABlock } from "./websites";
import { Megaphone, Target, Image, FileVideo, Type, Check } from "lucide-react";
import { useTr } from "@/lib/i18n";

export const Route = createFileRoute("/ai-ads")({
  head: () => ({
    meta: [
      { title: "פרסומות AI וקריאייטיב גנרטיבי | COYA Studio" },
      { name: "description", content: "הפקת קריאייטיבים גנרטיביים לקמפיינים — תמונות, וידאו וקופי למטא, גוגל, טיקטוק ויוטיוב, מותאמים לקהל היעד ולמותג." },
      { name: "keywords", content: "פרסומות AI, קריאייטיב גנרטיבי, מודעות AI, קמפיינים AI, AI ads, generative ads, COYA" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "AI-Generated Ads & Creative | COYA Studio" },
      { property: "og:description", content: "Generative images, video and copy for Meta, Google, TikTok and YouTube campaigns — tailored to audience and brand." },
      { property: "og:url", content: "https://www.coyastudioai.com/ai-ads" },
      { property: "og:image", content: "https://www.coyastudioai.com/__l5e/assets-v1/ad34d32a-a11e-457e-ae39-ba36e30f33f5/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "COYA Studio" },
      { name: "twitter:image", content: "https://www.coyastudioai.com/__l5e/assets-v1/ad34d32a-a11e-457e-ae39-ba36e30f33f5/og-image.jpg" },
      { property: "og:site_name", content: "COYA Studio" },
      { property: "og:locale", content: "he_IL" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AI Ads & Creative | COYA" },
      { name: "twitter:description", content: "Campaign creatives generated for each platform and audience." },
    ],
    links: [{ rel: "canonical", href: "https://www.coyastudioai.com/ai-ads" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({
        "@context":"https://schema.org","@type":"WebPage",
        name:"פרסומות AI וקריאייטיב גנרטיבי | COYA Studio", description:"הפקת קריאייטיבים גנרטיביים לקמפיינים — תמונות, וידאו וקופי למטא, גוגל, טיקטוק ויוטיוב.",
        url:"https://www.coyastudioai.com/ai-ads",
        inLanguage:"he-IL",
        isPartOf:{"@type":"WebSite",name:"COYA Studio",url:"https://www.coyastudioai.com"}
      }) },
      { type: "application/ld+json", children: JSON.stringify({
        "@context":"https://schema.org","@type":"BreadcrumbList",
        itemListElement:[
          {"@type":"ListItem",position:1,name:"בית",item:"https://www.coyastudioai.com/"},
          {"@type":"ListItem",position:2,name:"פרסומות AI",item:"https://www.coyastudioai.com/ai-ads"}
        ]
      }) },
    ],
  }),
  component: AiAdsPage,
});

function AiAdsPage() {
  const tr = useTr();

  const benefits = [
    { icon: Target, title: tr("מותאם לקהל ולפלטפורמה", "Audience and platform tailored"), desc: tr("כל קריאייטיב נבנה לפורמט, לטון ולציפיות של הפלטפורמה — ולפרסונה שרואה אותו.", "Every creative is built for the format, tone and expectations of the platform — and the persona seeing it.") },
    { icon: Image, title: tr("תמונות וגרפיקה בקנה מידה", "Images and graphics at scale"), desc: tr("מייצרים וריאציות של תמונות, באנרים וקולאז׳ים לכל קמפיין — בלי צילומים או סטודיו.", "We generate variations of images, banners and collages for every campaign — without shoots or a studio.") },
    { icon: FileVideo, title: tr("וידאו קצר לקמפיינים", "Short video for campaigns"), desc: tr("סרטונים קצרים, טיקטוקים ורילסים מותאמים לפיד ולקהל — מהר ובעלות אפקטיבית.", "Short videos, TikToks and reels adapted for the feed and audience — fast and cost-effectively.") },
    { icon: Type, title: tr("קופי וכותרות", "Copy and headlines"), desc: tr("הצעות לכותרות, תיאורים וקריאות לפעולה בשפה שממירה — לכל פלטפורמה ולכל קהל.", "Headlines, descriptions and calls-to-action in the language that converts — for every platform and audience.") },
  ];

  const included = [
    tr("אסטרטגיית קריאייטיב לקמפיין", "Campaign creative strategy"),
    tr("מודעות תמונה בפורמטים שונים", "Image ads in multiple formats"),
    tr("מודעות וידאו קצרות", "Short video ads"),
    tr("כותרות, קופי וקריאות לפעולה", "Headlines, copy and CTAs"),
    tr("וריאציות ל-A/B testing", "A/B testing variations"),
    tr("התאמה למטא, גוגל, טיקטוק, יוטיוב", "Adaptation for Meta, Google, TikTok, YouTube"),
    tr("בקרת מותג ואישור קריאייטיב", "Brand control and creative approval"),
    tr("ייצוא מוכן להעלאה", "Export ready for upload"),
  ];

  return (
    <>
      <ServiceHero
        eyebrow={tr("פרסומות AI", "AI-Generated Ads")}
        icon={Megaphone}
        title={tr("קריאייטיבים גנרטיביים שמותאמים לקמפיין ולקהל", "Generative creatives tailored to campaign and audience")}
        subtitle={tr("תמונות, וידאו וקופי לקמפיינים במטא, גוגל, טיקטוק ויוטיוב — מהר, בקנה מידה ובעלות אפקטיבית.", "Images, video and copy for Meta, Google, TikTok and YouTube campaigns — fast, at scale and cost-effectively.")}
      />

      <Section>
        <SectionHeader eyebrow={tr("יתרונות", "Benefits")} title={tr("למה פרסומות AI עובדות", "Why AI ads work")} />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map(b => (
            <div key={b.title} className="glass-card rounded-2xl p-6">
              <div className="h-11 w-11 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                <b.icon className="size-5 text-primary" />
              </div>
              <h3 className="font-display font-bold mb-2">{b.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent">
        <SectionHeader eyebrow={tr("מה כלול", "What's included")} title={tr("הפקת קריאייטיב מקצה לקצה", "End-to-end creative production")} />
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-3">
          {included.map(i => (
            <div key={i} className="flex items-center gap-3 glass-card rounded-xl p-4">
              <Check className="size-5 text-primary shrink-0" />
              <span className="text-white/80 text-sm">{i}</span>
            </div>
          ))}
        </div>
      </Section>

      <CTABlock />
    </>
  );
}
