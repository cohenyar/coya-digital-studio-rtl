import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "../components/site/Section";
import { ServiceHero, CTABlock } from "./websites";
import { Workflow, Plug, Map, Settings, Check } from "lucide-react";
import { useTr } from "@/lib/i18n";

export const Route = createFileRoute("/ai-systems")({
  head: () => ({
    meta: [
      { title: "פיתוח סוכני AI ויישום AI בעסק | בינה מלאכותית לעסקים | COYA" },
      { name: "description", content: "פיתוח סוכני AI, יישום AI והטמעת בינה מלאכותית לעסקים בישראל — CRM, מכירות, שירות לקוחות ותפעול. פתרונות AI לעסקים מהאפיון ועד ההטמעה." },
      { name: "keywords", content: "סוכני AI, פיתוח סוכני AI, יישום AI, בינה מלאכותית לעסקים, פתרונות AI לעסקים, AI לעסקים, הטמעת AI, מערכות AI, CRM, אוטומציה עסקית, COYA" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "AI Systems Integration for Business | COYA Studio" },
      { property: "og:description", content: "End-to-end AI integration into CRM, customer service, sales, content and email workflows." },
      { property: "og:url", content: "https://www.coyastudioai.com/ai-systems" },
      { property: "og:image", content: "https://www.coyastudioai.com/__l5e/assets-v1/ad34d32a-a11e-457e-ae39-ba36e30f33f5/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "COYA Studio" },
      { name: "twitter:image", content: "https://www.coyastudioai.com/__l5e/assets-v1/ad34d32a-a11e-457e-ae39-ba36e30f33f5/og-image.jpg" },
      { property: "og:site_name", content: "COYA Studio" },
      { property: "og:locale", content: "he_IL" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AI Systems for Business | COYA" },
      { name: "twitter:description", content: "AI embedded into your workflows, not bolted on top." },
    ],
    links: [{ rel: "canonical", href: "https://www.coyastudioai.com/ai-systems" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({
        "@context":"https://schema.org","@type":"WebPage",
        name:"הטמעת מערכות AI לעסק | COYA Studio", description:"מלווים עסקים מהאפיון ועד ההטמעה — שילוב AI ב-CRM, שירות לקוחות, מכירות ותוכן.",
        url:"https://www.coyastudioai.com/ai-systems",
        inLanguage:"he-IL",
        isPartOf:{"@type":"WebSite",name:"COYA Studio",url:"https://www.coyastudioai.com"}
      }) },
      { type: "application/ld+json", children: JSON.stringify({
        "@context":"https://schema.org","@type":"BreadcrumbList",
        itemListElement:[
          {"@type":"ListItem",position:1,name:"בית",item:"https://www.coyastudioai.com/"},
          {"@type":"ListItem",position:2,name:"AI לעסקים",item:"https://www.coyastudioai.com/ai-systems"}
        ]
      }) },
    ],
  }),
  component: AiSystemsPage,
});

function AiSystemsPage() {
  const tr = useTr();

  const benefits = [
    { icon: Plug, title: tr("חיבור למערכות קיימות", "Connects to existing tools"), desc: tr("שילוב עם CRM, מערכות דיוור, גיליונות, כלים פנימיים ועוד — בלי להחליף את מה שכבר עובד.", "Integrates with CRM, email tools, sheets, internal systems — without replacing what already works.") },
    { icon: Map, title: tr("מיפוי תהליכים מותאם", "Custom workflow mapping"), desc: tr("מזהים את הנקודות שבהן AI יכול לחסוך זמן ולשפר תוצאות — לפני שבוחרים כלים.", "We identify where AI can save time and improve results before choosing tools.") },
    { icon: Settings, title: tr("הטמעה מלאה מלווית", "Fully guided deployment"), desc: tr("מהאפיון, דרך בחירת הכלים, הגדרת האוטומציות, בדיקות ועד עלייה לאוויר.", "From planning through tool selection, automation setup, testing and launch.") },
    { icon: Workflow, title: tr("התרחבות לכל העסק", "Scales across the business"), desc: tr("מתחילים ממחלקה אחת ומפיצים את הפתרונות לשירות לקוחות, מכירות, שיווק ותפעול.", "Start in one department and expand to customer service, sales, marketing and operations.") },
  ];

  const included = [
    tr("אפיון תהליכים וזיהוי הזדמנויות AI", "Process mapping and AI opportunity audit"),
    tr("בחירת כלי AI ומערכות תומכות", "AI tool and supporting system selection"),
    tr("חיבור CRM ומערכות שירות לקוחות", "CRM and customer service integration"),
    tr("אוטומציה של מכירות ודיוור", "Sales and email automation"),
    tr("אוטומציה של תוכן ותמיכה", "Content and support automation"),
    tr("הדרכת צוות ותיעוד", "Team training and documentation"),
    tr("בדיקות, מדידה ושיפור מתמשך", "Testing, measurement and ongoing improvement"),
  ];

  return (
    <>
      <ServiceHero
        eyebrow={tr("הטמעת מערכות AI לעסק", "AI Systems for Business")}
        icon={Workflow}
        title={tr("AI שמחובר לתהליכים שלכם, לא עוד כלי שמנסים להפעיל", "AI connected to your workflows, not another tool to figure out")}
        subtitle={tr("מלווים אתכם מהאפיון ועד ההטמעה — CRM, שירות לקוחות, מכירות, תוכן ודיוור — כך שה-AI עובד בשביל העסק ולא מקבל החלטות על חשבון הצוות.", "We guide you from planning to deployment — CRM, customer service, sales, content and email — so AI works for the business, not instead of the team.")}
      />

      <Section>
        <SectionHeader eyebrow={tr("יתרונות", "Benefits")} title={tr("למה להטמיע AI בצורה מבנית", "Why embed AI structurally")} />
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
        <SectionHeader eyebrow={tr("מה כלול", "What's included")} title={tr("הטמעה מקצה לקצה", "End-to-end integration")} />
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
