import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeader } from "../components/site/Section";
import { WA_LINK } from "../components/site/Header";
import { Globe, Zap, ShieldCheck, Smartphone, Search, Palette, Code2, Send, Check, ArrowLeft, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/websites")({
  head: () => ({
    meta: [
      { title: "בניית אתרים לעסקים | COYA Digital Studio" },
      { name: "description", content: "בניית אתרים מקצועיים לעסקים — מהירים, רספונסיביים, מותאמים ל-SEO ומעוצבים לפי המותג שלכם. אתר שמרגיש כמו נכס עסקי." },
      { name: "keywords", content: "בניית אתרים, אתרים לעסקים, עיצוב אתרים, קידום אתרים, אתר תדמית, COYA" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "בניית אתרים לעסקים | COYA Digital Studio" },
      { property: "og:description", content: "אתרי עסקים מעוצבים, מהירים ומוכנים לצמיחה — מהאסטרטגיה ועד ההשקה." },
      { property: "og:url", content: "https://coya-digital-studio-rtl.lovable.app/websites" },
      { property: "og:image", content: "https://coya-digital-studio-rtl.lovable.app/__l5e/assets-v1/ad34d32a-a11e-457e-ae39-ba36e30f33f5/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "COYA Digital Studio" },
      { name: "twitter:image", content: "https://coya-digital-studio-rtl.lovable.app/__l5e/assets-v1/ad34d32a-a11e-457e-ae39-ba36e30f33f5/og-image.jpg" },
      { property: "og:site_name", content: "COYA Digital Studio" },
      { property: "og:locale", content: "he_IL" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "בניית אתרים לעסקים | COYA" },
      { name: "twitter:description", content: "אתרי עסקים מעוצבים ומהירים שבונים אמון ומניעים לפעולה." },
    ],
    links: [{ rel: "canonical", href: "https://coya-digital-studio-rtl.lovable.app/websites" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({
        "@context":"https://schema.org","@type":"WebPage",
        name:"בניית אתרים לעסקים | COYA Digital Studio", description:"בניית אתרים מקצועיים לעסקים — מהירים, רספונסיביים ומותאמים ל-SEO.",
        url:"https://coya-digital-studio-rtl.lovable.app/websites",
        inLanguage:"he-IL",
        isPartOf:{"@type":"WebSite",name:"COYA Digital Studio",url:"https://coya-digital-studio-rtl.lovable.app"}
      }) },
      { type: "application/ld+json", children: JSON.stringify({
        "@context":"https://schema.org","@type":"BreadcrumbList",
        itemListElement:[
          {"@type":"ListItem",position:1,name:"בית",item:"https://coya-digital-studio-rtl.lovable.app/"},
          {"@type":"ListItem",position:2,name:"בניית אתרים",item:"https://coya-digital-studio-rtl.lovable.app/websites"}
        ]
      }) },
    ],
  }),
  component: WebsitesPage,
});

const benefits = [
  { icon: Zap, title: "מהירות", desc: "אתרים שנטענים בפחות משנייה — חוויית משתמש מושלמת ודירוג טוב יותר בגוגל." },
  { icon: ShieldCheck, title: "אמינות ואמון", desc: "עיצוב מקצועי שמייצר אמון מהשנייה הראשונה ומחזק את המותג שלכם." },
  { icon: Smartphone, title: "מובייל-first", desc: "כל אתר נבנה קודם למובייל, ואז מותאם לטאבלט ודסקטופ." },
  { icon: Search, title: "בסיס SEO חזק", desc: "מבנה סמנטי, meta tags, sitemap ומהירות — כל מה שגוגל אוהב." },
];

const process = [
  { icon: Search, title: "אפיון" },
  { icon: Palette, title: "עיצוב" },
  { icon: Code2, title: "פיתוח" },
  { icon: Send, title: "השקה" },
];

const included = [
  "עיצוב מותאם אישית למותג",
  "בין 4-8 עמודים ראשיים",
  "רספונסיביות מלאה",
  "SEO טכני בסיסי",
  "חיבור דומיין ו-SSL",
  "טפסי יצירת קשר",
  "כפתור וואטסאפ",
  "אנליטיקס וכלי מדידה",
  "הצהרת נגישות",
  "תמיכה לאחר השקה",
];

function WebsitesPage() {
  return (
    <>
      <ServiceHero
        eyebrow="בניית אתרים"
        icon={Globe}
        title="אתר שמרגיש כמו נכס עסקי, לא כמו כרטיס ביקור."
        subtitle="בונים אתרים מקצועיים, מהירים ורספונסיביים לעסקים שרוצים להיראות טוב ולהניע פעולה. כל אתר מתחיל מהמותג ומהעסק — ולא מתבנית."
      />

      <Section>
        <SectionHeader eyebrow="יתרונות" title="למה עסקים בוחרים בנו" />
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
        <SectionHeader eyebrow="תהליך" title="ארבעה שלבים מסודרים" />
        <div className="grid md:grid-cols-4 gap-4">
          {process.map((p, i) => (
            <div key={p.title} className="glass-card rounded-2xl p-6 text-center relative">
              <div className="absolute top-3 left-3 text-4xl font-display font-black text-white/[0.05]">0{i+1}</div>
              <div className="h-12 w-12 mx-auto rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center mb-3">
                <p.icon className="size-6 text-white" />
              </div>
              <div className="font-display font-bold">{p.title}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="מה כלול" title="הכל בפנים. בלי הפתעות." />
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

export function ServiceHero({ eyebrow, icon: Icon, title, subtitle }: { eyebrow: string; icon: any; title: string; subtitle: string }) {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-24 pb-16">
      <div className="absolute inset-0 pointer-events-none" style={{background: "var(--gradient-hero)"}} />
      <div className="container-x relative text-center max-w-4xl mx-auto animate-fade-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
          <Icon className="size-4 text-primary" />
          <span className="text-xs uppercase tracking-[0.2em] text-primary/90">{eyebrow}</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-gradient leading-[1.1]">{title}</h1>
        <p className="mt-6 text-lg text-white/60 leading-relaxed">{subtitle}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-primary">
            <MessageCircle className="size-5" /> דברו איתנו
          </a>
          <Link to="/contact" className="btn-ghost">טופס יצירת קשר</Link>
        </div>
      </div>
    </section>
  );
}

export function CTABlock() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/20 via-purple-500/10 to-transparent p-12 text-center">
        <h2 className="text-2xl md:text-4xl font-display font-bold text-gradient">מוכנים להתחיל?</h2>
        <p className="mt-4 text-white/60">שיחת ייעוץ ראשונית ללא עלות והצעת מחיר מותאמת.</p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <Link to="/contact" className="btn-primary">
            בואו נתחיל <ArrowLeft className="size-5" />
          </Link>
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-ghost">
            <MessageCircle className="size-5" /> וואטסאפ
          </a>
        </div>
      </div>
    </Section>
  );
}
