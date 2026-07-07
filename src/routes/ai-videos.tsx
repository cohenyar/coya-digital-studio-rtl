import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "../components/site/Section";
import { ServiceHero, CTABlock } from "./websites";
import { Clapperboard, Wand2, Languages, Layers, Check } from "lucide-react";
import { useTr } from "@/lib/i18n";

export const Route = createFileRoute("/ai-videos")({
  head: () => ({
    meta: [
      { title: "סרטוני AI להפקת תוכן שיווקי | COYA Studio" },
      { name: "description", content: "הפקת סרטוני שיווק, הסבר וסושיאל עם כלים מתקדמים כמו Sora, Runway ו-HeyGen — מסקריפט ועד קליפ מוכן, בזמן קצר ובעלות אפקטיבית." },
      { name: "keywords", content: "סרטוני AI, וידאו גנרטיבי, AI video, Sora, Runway, HeyGen, סרטון שיווקי, COYA" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "AI Video Production for Marketing | COYA Studio" },
      { property: "og:description", content: "Marketing, explainer and social videos produced with AI tools from script to final clip — fast and on budget." },
      { property: "og:url", content: "https://www.coyastudioai.com/ai-videos" },
      { property: "og:image", content: "https://www.coyastudioai.com/__l5e/assets-v1/ad34d32a-a11e-457e-ae39-ba36e30f33f5/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "COYA Studio" },
      { name: "twitter:image", content: "https://www.coyastudioai.com/__l5e/assets-v1/ad34d32a-a11e-457e-ae39-ba36e30f33f5/og-image.jpg" },
      { property: "og:site_name", content: "COYA Studio" },
      { property: "og:locale", content: "he_IL" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AI Video Production | COYA" },
      { name: "twitter:description", content: "High-quality marketing videos without traditional production." },
    ],
    links: [{ rel: "canonical", href: "https://www.coyastudioai.com/ai-videos" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({
        "@context":"https://schema.org","@type":"WebPage",
        name:"סרטוני AI להפקת תוכן שיווקי | COYA Studio", description:"הפקת סרטוני שיווק, הסבר וסושיאל עם כלים מתקדמים כמו Sora, Runway ו-HeyGen.",
        url:"https://www.coyastudioai.com/ai-videos",
        inLanguage:"he-IL",
        isPartOf:{"@type":"WebSite",name:"COYA Studio",url:"https://www.coyastudioai.com"}
      }) },
      { type: "application/ld+json", children: JSON.stringify({
        "@context":"https://schema.org","@type":"BreadcrumbList",
        itemListElement:[
          {"@type":"ListItem",position:1,name:"בית",item:"https://www.coyastudioai.com/"},
          {"@type":"ListItem",position:2,name:"סרטוני AI",item:"https://www.coyastudioai.com/ai-videos"}
        ]
      }) },
    ],
  }),
  component: AiVideosPage,
});

function AiVideosPage() {
  const tr = useTr();

  const benefits = [
    { icon: Wand2, title: tr("בלי צוות הפקה", "No production crew"), desc: tr("לא צריך אולפן, צלם או עורך יומיים — הכל מתחיל מהסקריפט והמראה שאתם רוצים.", "No studio, videographer or days of editing — everything starts from your script and desired look.") },
    { icon: Layers, title: tr("איתרציות מהירות", "Fast iterations"), desc: tr("משנים סקריפט, קהל, טון או ויזואליות בקלות — ומייצרים גרסאות נוספות תוך שעות.", "Change script, audience, tone or visuals easily — and generate additional versions within hours.") },
    { icon: Languages, title: tr("גרסאות רב-לשוניות", "Multi-language versions"), desc: tr("מפיקים את אותו סרטון בכמה שפות — עם קול, תרגום וכתוביות מותאמים.", "Produce the same video in multiple languages — with voice, translation and subtitles adapted.") },
    { icon: Clapperboard, title: tr("לכל מטרה שיווקית", "For every marketing use"), desc: tr("סרטוני הסבר, מוצר, סושיאל, מודעות, הדרכה ועדכונים — כל מה שצריך לשמר מומנטום.", "Explainers, product, social, ads, training and update videos — everything you need to keep momentum.") },
  ];

  const included = [
    tr("כתיבת סקריפט וסטוריבורד", "Script writing and storyboard"),
    tr("הפקת קליפים עם Sora / Runway / HeyGen", "Clip production with Sora / Runway / HeyGen"),
    tr("הקלטת קול ומוזיקת רקע", "Voiceover and background music"),
    tr("עריכה, צבע ומיתוג", "Editing, color and branding"),
    tr("כתוביות ותרגום", "Subtitles and translation"),
    tr("התאמה לסושיאל, מודעות ואתר", "Adaptation for social, ads and website"),
    tr("ייצוא בפורמטים שונים", "Export in multiple formats"),
    tr("סבבי תיקונים", "Revision rounds"),
  ];

  return (
    <>
      <ServiceHero
        eyebrow={tr("סרטוני AI", "AI Video Production")}
        icon={Clapperboard}
        title={tr("סרטוני שיווק, הסבר וסושיאל — בלי הפקה מסורתית", "Marketing, explainer and social videos — without traditional production")}
        subtitle={tr("הפקת וידאו איכותי עם כלים כמו Sora, Runway ו-HeyGen — מסקריפט ועד קליפ מוכן, בזמן קצר ובתקציב שפוי.", "High-quality video production using tools like Sora, Runway and HeyGen — from script to final clip, fast and on budget.")}
      />

      <Section>
        <SectionHeader eyebrow={tr("יתרונות", "Benefits")} title={tr("למה סרטוני AI עובדים", "Why AI video works")} />
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
        <SectionHeader eyebrow={tr("מה כלול", "What's included")} title={tr("הפקת וידאו מקצה לקצה", "End-to-end video production")} />
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
