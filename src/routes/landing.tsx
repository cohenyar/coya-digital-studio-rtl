import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "../components/site/Section";
import { ServiceHero, CTABlock } from "./websites";
import { Rocket, Target, Zap, Smartphone, MessageSquare, Check } from "lucide-react";
import { useTr } from "@/lib/i18n";

export const Route = createFileRoute("/landing")({
  head: () => ({
    meta: [
      { title: "בניית דפי נחיתה ממוקדי המרה | COYA Studio" },
      { name: "description", content: "דפי נחיתה לקמפיינים, מוצרים ושירותים — מסר ברור, עיצוב חד ומבנה שנועד להמיר גולשים ללידים משלמים." },
      { name: "keywords", content: "דפי נחיתה, בניית דף נחיתה, לידים, קמפיינים, המרות, COYA" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Conversion-Focused Landing Pages | COYA Studio" },
      { property: "og:description", content: "Landing pages that convert visitors into leads — built for Meta, Google, and TikTok campaigns." },
      { property: "og:url", content: "https://coya-digital-studio-rtl.lovable.app/landing" },
      { property: "og:image", content: "https://coya-digital-studio-rtl.lovable.app/__l5e/assets-v1/ad34d32a-a11e-457e-ae39-ba36e30f33f5/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "COYA Studio" },
      { name: "twitter:image", content: "https://coya-digital-studio-rtl.lovable.app/__l5e/assets-v1/ad34d32a-a11e-457e-ae39-ba36e30f33f5/og-image.jpg" },
      { property: "og:site_name", content: "COYA Studio" },
      { property: "og:locale", content: "he_IL" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Landing Pages | COYA" },
      { name: "twitter:description", content: "One page. One goal. One result." },
    ],
    links: [{ rel: "canonical", href: "https://coya-digital-studio-rtl.lovable.app/landing" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({
        "@context":"https://schema.org","@type":"WebPage",
        name:"בניית דפי נחיתה ממוקדי המרה | COYA Studio", description:"דפי נחיתה שממירים גולשים ללידים משלמים.",
        url:"https://coya-digital-studio-rtl.lovable.app/landing",
        inLanguage:"he-IL",
        isPartOf:{"@type":"WebSite",name:"COYA Studio",url:"https://coya-digital-studio-rtl.lovable.app"}
      }) },
      { type: "application/ld+json", children: JSON.stringify({
        "@context":"https://schema.org","@type":"BreadcrumbList",
        itemListElement:[
          {"@type":"ListItem",position:1,name:"בית",item:"https://coya-digital-studio-rtl.lovable.app/"},
          {"@type":"ListItem",position:2,name:"דפי נחיתה",item:"https://coya-digital-studio-rtl.lovable.app/landing"}
        ]
      }) },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  const tr = useTr();

  const focus = [
    { icon: Target, title: tr("המרה קודם לכל", "Conversion first"), desc: tr("כל אלמנט בדף נועד להוביל את הגולש לפעולה — יצירת קשר, השארת פרטים או רכישה.", "Every element on the page is designed to drive action — contact, lead, or purchase.") },
    { icon: MessageSquare, title: tr("מסר ברור וחד", "Clear, sharp message"), desc: tr("פייסלייף על הצעת הערך: מה מקבלים, למי זה מיועד, למה עכשיו.", "Spotlight on the value proposition: what you get, who it's for, why now.") },
    { icon: Zap, title: tr("טעינה מהירה", "Fast loading"), desc: tr("דפים אופטימליים לקמפיינים בפייסבוק, גוגל וטיקטוק — פחות נטישות, יותר לידים.", "Pages optimized for Meta, Google, and TikTok campaigns — less drop-off, more leads.") },
    { icon: Smartphone, title: tr("מובייל-first", "Mobile-first"), desc: tr("רוב הקמפיינים במובייל. אנחנו בונים קודם למובייל, ואז לדסקטופ.", "Most campaigns run on mobile. We build for mobile first, then desktop.") },
  ];

  const included = [
    tr("מבנה ממוקד המרה", "Conversion-focused structure"),
    tr("כותרת ראשית וסאב-כותרת", "Headline & sub-headline"),
    tr("מקטע יתרונות", "Benefits section"),
    tr("עדויות וסושיאל פרוף", "Testimonials & social proof"),
    tr("טופס לידים", "Lead form"),
    tr("כפתור וואטסאפ", "WhatsApp button"),
    tr("חיבור פיקסלים ומעקב", "Pixel & tracking setup"),
    tr("A/B testing מוכן", "A/B testing ready"),
  ];

  return (
    <>
      <ServiceHero
        eyebrow={tr("דפי נחיתה", "Landing Pages")}
        icon={Rocket}
        title={tr("דף נחיתה אחד. מטרה אחת. תוצאה אחת.", "One landing page. One goal. One result.")}
        subtitle={tr("דפי נחיתה שנבנים סביב הצעת הערך שלכם — עם כל אלמנט מכוון להמרה. אידיאלי לקמפיינים ממומנים ולהשקות.", "Landing pages built around your value proposition — every element aimed at conversion. Ideal for paid campaigns and product launches.")}
      />

      <Section>
        <SectionHeader eyebrow={tr("על מה אנחנו מתמקדים", "Our focus")} title={tr("ארבעה עקרונות שמייצרים תוצאות", "Four principles that drive results")} />
        <div className="grid md:grid-cols-2 gap-6">
          {focus.map(f => (
            <div key={f.title} className="glass-card rounded-2xl p-8">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center mb-4">
                <f.icon className="size-6 text-white" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2">{f.title}</h3>
              <p className="text-white/60 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent">
        <SectionHeader eyebrow={tr("מה כלול", "What's included")} title={tr("דף אחד. הכל ממוקד להמרה.", "One page. Every piece aimed at conversion.")} />
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
