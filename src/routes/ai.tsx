import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "../components/site/Section";
import { ServiceHero, CTABlock } from "./websites";
import { Bot, MessageCircle, FileSpreadsheet, Mail, Workflow, Clock, Users, Zap } from "lucide-react";
import { useTr } from "@/lib/i18n";

export const Route = createFileRoute("/ai")({
  head: () => ({
    meta: [
      { title: "AI ואוטומציות עסקיות | COYA Studio" },
      { name: "description", content: "בוטים חכמים, אוטומציות עסקיות, חיבור וואטסאפ, CRM, מיילים ו-Google Sheets. פחות עבודה ידנית — יותר תוצאות." },
      { name: "keywords", content: "AI לעסקים, אוטומציות, בוט וואטסאפ, צ׳אטבוט, CRM, אוטומציה עסקית, COYA" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "AI & Business Automation | COYA Studio" },
      { property: "og:description", content: "Smart bots and automation that save hours and capture every lead." },
      { property: "og:url", content: "https://coya-digital-studio-rtl.lovable.app/ai" },
      { property: "og:image", content: "https://coya-digital-studio-rtl.lovable.app/__l5e/assets-v1/ad34d32a-a11e-457e-ae39-ba36e30f33f5/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "COYA Studio" },
      { name: "twitter:image", content: "https://coya-digital-studio-rtl.lovable.app/__l5e/assets-v1/ad34d32a-a11e-457e-ae39-ba36e30f33f5/og-image.jpg" },
      { property: "og:site_name", content: "COYA Studio" },
      { property: "og:locale", content: "he_IL" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AI & Automation | COYA" },
      { name: "twitter:description", content: "Less manual work. More happy customers." },
    ],
    links: [{ rel: "canonical", href: "https://coya-digital-studio-rtl.lovable.app/ai" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({
        "@context":"https://schema.org","@type":"WebPage",
        name:"AI ואוטומציות עסקיות | COYA Studio", description:"בוטים חכמים ואוטומציות שחוסכות שעות בעסק.",
        url:"https://coya-digital-studio-rtl.lovable.app/ai",
        inLanguage:"he-IL",
        isPartOf:{"@type":"WebSite",name:"COYA Studio",url:"https://coya-digital-studio-rtl.lovable.app"}
      }) },
      { type: "application/ld+json", children: JSON.stringify({
        "@context":"https://schema.org","@type":"BreadcrumbList",
        itemListElement:[
          {"@type":"ListItem",position:1,name:"בית",item:"https://coya-digital-studio-rtl.lovable.app/"},
          {"@type":"ListItem",position:2,name:"AI ואוטומציות",item:"https://coya-digital-studio-rtl.lovable.app/ai"}
        ]
      }) },
    ],
  }),
  component: AiPage,
});

function AiPage() {
  const tr = useTr();

  const solutions = [
    { icon: MessageCircle, title: tr("אוטומציית וואטסאפ", "WhatsApp automation"), desc: tr("מענה אוטומטי, ניתוב פניות, סיכומי שיחות ותזכורות ללקוחות.", "Auto replies, routing, conversation summaries, and customer reminders.") },
    { icon: Users, title: tr("טיפול בלידים", "Lead handling"), desc: tr("כל ליד מתקבל, מסווג, מוקצה ומתועד — בלי שאף פנייה תיפול בין הכיסאות.", "Every lead is captured, classified, assigned, and tracked — nothing slips through the cracks.") },
    { icon: Bot, title: tr("צ׳אטבוטים חכמים", "Smart chatbots"), desc: tr("בוטים מבוססי AI שעונים על שאלות נפוצות ומסייעים ללקוחות 24/7.", "AI-powered bots that answer FAQs and support customers 24/7.") },
    { icon: FileSpreadsheet, title: tr("חיבור Google Sheets ו-CRM", "Google Sheets & CRM sync"), desc: tr("סנכרון אוטומטי של לידים, לקוחות ומכירות לגיליונות ולמערכות ניהול.", "Automatic sync of leads, customers, and sales into sheets and CRM systems.") },
    { icon: Mail, title: tr("אוטומציית מיילים", "Email automation"), desc: tr("מיילים אוטומטיים אחרי טפסים, אישורים, מעקבים וטריגרים עסקיים.", "Automated emails after forms, confirmations, follow-ups, and business triggers.") },
    { icon: Workflow, title: tr("תהליכים עסקיים", "Business processes"), desc: tr("אוטומציה של תהליכים חוזרים בעסק — מהגשת בקשה ועד גביית תשלום.", "Automation of repeat processes — from request submission to payment collection.") },
  ];

  return (
    <>
      <ServiceHero
        eyebrow={tr("AI ואוטומציות", "AI & Automation")}
        icon={Bot}
        title={tr("פחות עבודה ידנית. יותר תוצאות עסקיות.", "Less manual work. More business results.")}
        subtitle={tr("חיבור מערכות, בוטים חכמים ואוטומציות שחוסכים לכם שעות בשבוע ומייעלים את השירות ללקוחות.", "Systems integration, smart bots, and automation that save you hours a week and streamline customer service.")}
      />

      <Section>
        <SectionHeader eyebrow={tr("פתרונות", "Solutions")} title={tr("מה אנחנו יודעים לבנות", "What we can build")} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map(s => (
            <div key={s.title} className="glass-card rounded-2xl p-6 hover:border-primary/40 transition">
              <div className="h-11 w-11 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                <s.icon className="size-5 text-primary" />
              </div>
              <h3 className="font-display font-bold mb-2">{s.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent">
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
          <Stat icon={Clock} title={tr("שעות", "Hours")} value="10+" desc={tr("חיסכון בשבוע לעסק ממוצע", "Saved per week for a typical business")} />
          <Stat icon={Zap} title={tr("מהירות", "Availability")} value="24/7" desc={tr("מענה אוטומטי סביב השעון", "Automated response around the clock")} />
          <Stat icon={Users} title={tr("פחות פניות אבודות", "Fewer lost leads")} value="90%" desc={tr("של הלידים מטופלים אוטומטית", "of leads handled automatically")} />
        </div>
      </Section>

      <CTABlock />
    </>
  );
}

function Stat({ icon: Icon, title, value, desc }: any) {
  return (
    <div className="glass-card rounded-2xl p-8">
      <Icon className="size-6 text-primary mx-auto mb-3" />
      <div className="text-4xl font-display font-bold text-gradient">{value}</div>
      <div className="mt-2 font-medium">{title}</div>
      <div className="text-sm text-white/50 mt-1">{desc}</div>
    </div>
  );
}
