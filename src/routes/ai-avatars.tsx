import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "../components/site/Section";
import { ServiceHero, CTABlock } from "./websites";
import { UserSquare, MonitorPlay, Volume2, Palette, Check } from "lucide-react";
import { useTr } from "@/lib/i18n";

export const Route = createFileRoute("/ai-avatars")({
  head: () => ({
    meta: [
      { title: "בניית דמויות AI (Avatars) לעסקים בישראל | COYA Studio" },
      { name: "description", content: "בניית דמויות AI (AI Avatars) מציאותיות לוידאו, מצגות והדרכות — עם קול, שפה ואופי אחידים למותג. פתרונות AI לעסקים ומותגים בישראל." },
      { name: "keywords", content: "דמויות AI, AI Avatars, בניית דמות AI, אווטארים דיגיטליים, דמות וירטואלית, וידאו AI, בינה מלאכותית לעסקים, פתרונות AI לעסקים, COYA" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "AI Avatar Creation for Business | COYA Studio" },
      { property: "og:description", content: "Photorealistic AI avatars for video, presentations, training and marketing content that speak in your brand voice." },
      { property: "og:url", content: "https://www.coyastudioai.com/ai-avatars" },
      { property: "og:image", content: "https://www.coyastudioai.com/__l5e/assets-v1/ad34d32a-a11e-457e-ae39-ba36e30f33f5/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "COYA Studio" },
      { name: "twitter:image", content: "https://www.coyastudioai.com/__l5e/assets-v1/ad34d32a-a11e-457e-ae39-ba36e30f33f5/og-image.jpg" },
      { property: "og:site_name", content: "COYA Studio" },
      { property: "og:locale", content: "he_IL" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AI Avatars | COYA" },
      { name: "twitter:description", content: "A digital face and voice that represents your brand 24/7." },
    ],
    links: [{ rel: "canonical", href: "https://www.coyastudioai.com/ai-avatars" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({
        "@context":"https://schema.org","@type":"WebPage",
        name:"בניית דמויות AI לעסקים | COYA Studio", description:"דמויות דיגיטליות מבוססות AI — Avatars מציאותיים לוידאו, מצגות, הדרכות ותוכן שיווקי.",
        url:"https://www.coyastudioai.com/ai-avatars",
        inLanguage:"he-IL",
        isPartOf:{"@type":"WebSite",name:"COYA Studio",url:"https://www.coyastudioai.com"}
      }) },
      { type: "application/ld+json", children: JSON.stringify({
        "@context":"https://schema.org","@type":"BreadcrumbList",
        itemListElement:[
          {"@type":"ListItem",position:1,name:"בית",item:"https://www.coyastudioai.com/"},
          {"@type":"ListItem",position:2,name:"דמויות AI",item:"https://www.coyastudioai.com/ai-avatars"}
        ]
      }) },
    ],
  }),
  component: AiAvatarsPage,
});

function AiAvatarsPage() {
  const tr = useTr();

  const benefits = [
    { icon: UserSquare, title: tr("מראה מותאם למותג", "Brand-aligned look"), desc: tr("עיצוב הדמות, הבגדים, הרקע והמראה הכללי נבנים לפי הזהות המותגית שלכם.", "The avatar's look, clothing, background and overall style are built to match your brand identity.") },
    { icon: Volume2, title: tr("קול ושפה עקביים", "Consistent voice and language"), desc: tr("בחירת קול, מבטא וטון שמייצגים את המותג — בכל סרטון, מצגת או הודעה.", "A voice, accent and tone that represent your brand across every video, presentation or message.") },
    { icon: MonitorPlay, title: tr("תוכן לכל פלטפורמה", "Content for every platform"), desc: tr("מתאימים את הדמות לוידאו, מצגות, הדרכות, סושיאל ואתר — בפורמטים הנכונים.", "We adapt the avatar for video, presentations, training, social and website — in the right formats.") },
    { icon: Palette, title: tr("הפקה מהירה וחסכונית", "Fast, cost-effective production"), desc: tr("בלי צילומים, בלי אולפן וללא תלות בפרזנטור — מייצרים תוכן במהירות ובקנה מידה.", "No filming, no studio, no dependency on a presenter — produce content quickly and at scale.") },
  ];

  const included = [
    tr("עיצוב דמות והתאמה למותג", "Avatar design and brand alignment"),
    tr("בחירת קול או שיבוט קול", "Voice selection or voice cloning"),
    tr("הכנת סקריפטים ותרגום", "Script preparation and translation"),
    tr("הפקת וידאו ומצגות", "Video and presentation production"),
    tr("התאמה לרשתות חברתיות ואתר", "Adaptation for social and website"),
    tr("גרסאות רב-לשוניות", "Multi-language versions"),
    tr("סבבי תיקונים ושיפורים", "Revision rounds and refinements"),
    tr("מדריך שימוש וזכויות", "Usage guide and rights"),
  ];

  return (
    <>
      <ServiceHero
        eyebrow={tr("בניית דמויות AI", "AI Avatars")}
        icon={UserSquare}
        title={tr("דמויות דיגיטליות שמדברות בשם המותג שלכם", "Digital avatars that speak for your brand")}
        subtitle={tr("Avatars מציאותיים לוידאו, מצגות, הדרכות ותוכן שיווקי — עם קול, שפה ואופי אחידים, מוכנים לכל פלטפורמה.", "Photorealistic avatars for video, presentations, training and marketing — with consistent voice, language and character, ready for any platform.")}
      />

      <Section>
        <SectionHeader eyebrow={tr("יתרונות", "Benefits")} title={tr("למה דמויות AI עובדות", "Why AI avatars work")} />
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
        <SectionHeader eyebrow={tr("מה כלול", "What's included")} title={tr("הפקת דמות מקצה לקצה", "End-to-end avatar production")} />
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
