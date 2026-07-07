import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeader } from "../components/site/Section";
import { WA_LINK } from "../components/site/Header";
import { Globe, Zap, ShieldCheck, Smartphone, Search, Palette, Code2, Send, Check, ArrowLeft, MessageCircle } from "lucide-react";
import { useTr } from "@/lib/i18n";

export const Route = createFileRoute("/websites")({
  head: () => ({
    meta: [
      { title: "בניית אתרים לעסקים בישראל | פיתוח אתרים מקצועי | COYA Studio" },
      { name: "description", content: "בניית אתרים ופיתוח אתרים לעסקים בישראל — בניית אתר לעסק מהיר, רספונסיבי, מעוצב לפי המותג ומותאם ל-SEO. אתר תדמית שמייצר אמון ולידים." },
      { name: "keywords", content: "בניית אתרים, בניית אתר לעסק, פיתוח אתרים, בניית אתרים לעסקים, אתר תדמית, עיצוב אתרים, קידום אתרים, בניית אתרים בישראל, COYA" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Website Development for Businesses | COYA Studio" },
      { property: "og:description", content: "Professional business websites — designed, fast, and ready to grow." },
      { property: "og:url", content: "https://www.coyastudioai.com/websites" },
      { property: "og:image", content: "https://www.coyastudioai.com/__l5e/assets-v1/ad34d32a-a11e-457e-ae39-ba36e30f33f5/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "COYA Studio" },
      { name: "twitter:image", content: "https://www.coyastudioai.com/__l5e/assets-v1/ad34d32a-a11e-457e-ae39-ba36e30f33f5/og-image.jpg" },
      { property: "og:site_name", content: "COYA Studio" },
      { property: "og:locale", content: "he_IL" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Website Development | COYA" },
      { name: "twitter:description", content: "Business websites that build trust and drive action." },
    ],
    links: [{ rel: "canonical", href: "https://www.coyastudioai.com/websites" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({
        "@context":"https://schema.org","@type":"WebPage",
        name:"בניית אתרים לעסקים | COYA Studio", description:"בניית אתרים מקצועיים לעסקים — מהירים, רספונסיביים ומותאמים ל-SEO.",
        url:"https://www.coyastudioai.com/websites",
        inLanguage:"he-IL",
        isPartOf:{"@type":"WebSite",name:"COYA Studio",url:"https://www.coyastudioai.com"}
      }) },
      { type: "application/ld+json", children: JSON.stringify({
        "@context":"https://schema.org","@type":"BreadcrumbList",
        itemListElement:[
          {"@type":"ListItem",position:1,name:"בית",item:"https://www.coyastudioai.com/"},
          {"@type":"ListItem",position:2,name:"בניית אתרים",item:"https://www.coyastudioai.com/websites"}
        ]
      }) },
    ],
  }),
  component: WebsitesPage,
});

function WebsitesPage() {
  const tr = useTr();

  const benefits = [
    { icon: Zap, title: tr("מהירות", "Speed"), desc: tr("אתרים שנטענים בפחות משנייה — חוויית משתמש מושלמת ודירוג טוב יותר בגוגל.", "Sites that load in under a second — perfect UX and better Google rankings.") },
    { icon: ShieldCheck, title: tr("אמינות ואמון", "Trust & Reliability"), desc: tr("עיצוב מקצועי שמייצר אמון מהשנייה הראשונה ומחזק את המותג שלכם.", "Professional design that builds trust from the first second and strengthens your brand.") },
    { icon: Smartphone, title: tr("מובייל-first", "Mobile-first"), desc: tr("כל אתר נבנה קודם למובייל, ואז מותאם לטאבלט ודסקטופ.", "Every site is built for mobile first, then adapted to tablet and desktop.") },
    { icon: Search, title: tr("בסיס SEO חזק", "Strong SEO foundation"), desc: tr("מבנה סמנטי, meta tags, sitemap ומהירות — כל מה שגוגל אוהב.", "Semantic structure, meta tags, sitemap, and speed — everything Google loves.") },
  ];

  const process = [
    { icon: Search, title: tr("אפיון", "Discovery") },
    { icon: Palette, title: tr("עיצוב", "Design") },
    { icon: Code2, title: tr("פיתוח", "Development") },
    { icon: Send, title: tr("השקה", "Launch") },
  ];

  const included = [
    tr("עיצוב מותאם אישית למותג", "Custom design for your brand"),
    tr("בין 4-8 עמודים ראשיים", "4–8 main pages"),
    tr("רספונסיביות מלאה", "Full responsiveness"),
    tr("SEO טכני בסיסי", "Core technical SEO"),
    tr("חיבור דומיין ו-SSL", "Domain + SSL setup"),
    tr("טפסי יצירת קשר", "Contact forms"),
    tr("כפתור וואטסאפ", "WhatsApp button"),
    tr("אנליטיקס וכלי מדידה", "Analytics & measurement tools"),
    tr("הצהרת נגישות", "Accessibility statement"),
    tr("תמיכה לאחר השקה", "Post-launch support"),
  ];

  return (
    <>
      <ServiceHero
        eyebrow={tr("בניית אתרים", "Website Development")}
        icon={Globe}
        title={tr("אתר שמרגיש כמו נכס עסקי, לא כמו כרטיס ביקור.", "A site that feels like a business asset — not a business card.")}
        subtitle={tr("בונים אתרים מקצועיים, מהירים ורספונסיביים לעסקים שרוצים להיראות טוב ולהניע פעולה. כל אתר מתחיל מהמותג ומהעסק — ולא מתבנית.", "We build professional, fast, responsive websites for businesses that want to look great and drive action. Every site starts from your brand and business — never from a template.")}
      />

      <Section>
        <SectionHeader eyebrow={tr("יתרונות", "Benefits")} title={tr("למה עסקים בוחרים בנו", "Why businesses choose us")} />
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
        <SectionHeader eyebrow={tr("תהליך", "Process")} title={tr("ארבעה שלבים מסודרים", "Four organized steps")} />
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
        <SectionHeader eyebrow={tr("מה כלול", "What's included")} title={tr("הכל בפנים. בלי הפתעות.", "Everything inside. No surprises.")} />
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
  const tr = useTr();
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
            <MessageCircle className="size-5" /> {tr("דברו איתנו", "Talk to us")}
          </a>
          <Link to="/contact" className="btn-ghost">{tr("טופס יצירת קשר", "Contact form")}</Link>
        </div>
      </div>
    </section>
  );
}

export function CTABlock() {
  const tr = useTr();
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/20 via-purple-500/10 to-transparent p-12 text-center">
        <h2 className="text-2xl md:text-4xl font-display font-bold text-gradient">{tr("מוכנים להתחיל?", "Ready to start?")}</h2>
        <p className="mt-4 text-white/60">{tr("שיחת ייעוץ ראשונית ללא עלות והצעת מחיר מותאמת.", "A free initial consultation and a tailored quote.")}</p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <Link to="/contact" className="btn-primary">
            {tr("בואו נתחיל", "Let's start")} <ArrowLeft className="size-5" />
          </Link>
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-ghost">
            <MessageCircle className="size-5" /> {tr("וואטסאפ", "WhatsApp")}
          </a>
        </div>
      </div>
    </Section>
  );
}
