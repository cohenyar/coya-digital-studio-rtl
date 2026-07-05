import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "../components/site/Section";
import { ServiceHero, CTABlock } from "./websites";
import { Rocket, Target, Zap, Smartphone, MessageSquare, Check } from "lucide-react";

export const Route = createFileRoute("/landing")({
  head: () => ({
    meta: [
      { title: "בניית דפי נחיתה ממוקדי המרה | COYA Digital Studio" },
      { name: "description", content: "דפי נחיתה לקמפיינים, מוצרים ושירותים — מסר ברור, עיצוב חד ומבנה שנועד להמיר גולשים ללידים משלמים." },
      { name: "keywords", content: "דפי נחיתה, בניית דף נחיתה, לידים, קמפיינים, המרות, COYA" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "בניית דפי נחיתה ממוקדי המרה | COYA Digital Studio" },
      { property: "og:description", content: "דפי נחיתה שממירים גולשים ללידים — מותאמים לקמפיינים בפייסבוק, גוגל וטיקטוק." },
      { property: "og:url", content: "https://coya-digital-studio-rtl.lovable.app/landing" },
      { property: "og:image", content: "https://coya-digital-studio-rtl.lovable.app/__l5e/assets-v1/ad34d32a-a11e-457e-ae39-ba36e30f33f5/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "COYA Digital Studio" },
      { name: "twitter:image", content: "https://coya-digital-studio-rtl.lovable.app/__l5e/assets-v1/ad34d32a-a11e-457e-ae39-ba36e30f33f5/og-image.jpg" },
      { property: "og:site_name", content: "COYA Digital Studio" },
      { property: "og:locale", content: "he_IL" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "בניית דפי נחיתה | COYA" },
      { name: "twitter:description", content: "דף נחיתה אחד. מטרה אחת. תוצאה אחת." },
    ],
    links: [{ rel: "canonical", href: "https://coya-digital-studio-rtl.lovable.app/landing" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({
        "@context":"https://schema.org","@type":"WebPage",
        name:"בניית דפי נחיתה ממוקדי המרה | COYA Digital Studio", description:"דפי נחיתה שממירים גולשים ללידים משלמים.",
        url:"https://coya-digital-studio-rtl.lovable.app/landing",
        inLanguage:"he-IL",
        isPartOf:{"@type":"WebSite",name:"COYA Digital Studio",url:"https://coya-digital-studio-rtl.lovable.app"}
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

const focus = [
  { icon: Target, title: "המרה קודם לכל", desc: "כל אלמנט בדף נועד להוביל את הגולש לפעולה — יצירת קשר, השארת פרטים או רכישה." },
  { icon: MessageSquare, title: "מסר ברור וחד", desc: "פייסלייף על הצעת הערך: מה מקבלים, למי זה מיועד, למה עכשיו." },
  { icon: Zap, title: "טעינה מהירה", desc: "דפים אופטימליים לקמפיינים בפייסבוק, גוגל וטיקטוק — פחות נטישות, יותר לידים." },
  { icon: Smartphone, title: "מובייל-first", desc: "רוב הקמפיינים במובייל. אנחנו בונים קודם למובייל, ואז לדסקטופ." },
];

const included = [
  "מבנה ממוקד המרה",
  "כותרת ראשית וסאב-כותרת",
  "מקטע יתרונות",
  "עדויות וסושיאל פרוף",
  "טופס לידים",
  "כפתור וואטסאפ",
  "חיבור פיקסלים ומעקב",
  "A/B testing מוכן",
];

function LandingPage() {
  return (
    <>
      <ServiceHero
        eyebrow="דפי נחיתה"
        icon={Rocket}
        title="דף נחיתה אחד. מטרה אחת. תוצאה אחת."
        subtitle="דפי נחיתה שנבנים סביב הצעת הערך שלכם — עם כל אלמנט מכוון להמרה. אידיאלי לקמפיינים ממומנים ולהשקות."
      />

      <Section>
        <SectionHeader eyebrow="על מה אנחנו מתמקדים" title="ארבעה עקרונות שמייצרים תוצאות" />
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
        <SectionHeader eyebrow="מה כלול" title="דף אחד. הכל ממוקד להמרה." />
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
