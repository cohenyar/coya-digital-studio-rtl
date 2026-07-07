import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeader } from "../components/site/Section";
import { WA_LINK } from "../components/site/Header";
import ShaderBackground from "../components/ui/shader-background";
import {
  ArrowLeft, Check, X, MessageCircle, Globe, Rocket, Bot, Search, Layers,
  Palette, Code2, Send, TrendingUp, Sparkles, Zap, Workflow, ChevronDown,
  UserSquare, Megaphone, Clapperboard
} from "lucide-react";
const founderPhoto = { url: "/images/branding/founder.jpg" };
const coyaLogo = { url: "/images/coya-logo.png" };
import { useState } from "react";
import { useTr } from "@/lib/i18n";

// Hero service tags used in both the page and meta tags so they stay identical.
const HERO_SERVICES_HE = [
  "בניית אתרים",
  "דפי נחיתה",
  "אוטומציות AI",
  "סוכני AI / בוטים",
  "דמויות AI",
  "פרסומות AI",
  "סרטוני AI",
];

const HERO_SERVICES_EN = [
  "Websites",
  "Landing pages",
  "AI automation",
  "AI agents / bots",
  "AI avatars",
  "AI ads",
  "AI videos",
];

const HERO_TAGLINE_HE = "סטודיו דיגיטלי ל" + HERO_SERVICES_HE.join(", ") + " לעסקים שרוצים להיראות מקצועיים, לחסוך זמן ולהגדיל פניות.";
const HERO_TAGLINE_EN = "Digital studio for " + HERO_SERVICES_EN.join(", ") + " for businesses that want to look professional, save time, and generate more leads.";
const HERO_TITLE_HE = "COYA Studio | " + HERO_SERVICES_HE.join(", ");
const HERO_TITLE_EN = "COYA Studio | " + HERO_SERVICES_EN.join(", ");


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "COYA Studio | בניית אתרים, דפי נחיתה, אוטומציות AI, סוכני AI, דמויות AI, פרסומות וסרטוני AI" },
      { name: "description", content: "סטודיו דיגיטלי לבניית אתרים, דפי נחיתה, אוטומציות AI, סוכני AI ובוטים, דמויות AI, פרסומות AI וסרטוני AI לעסקים שרוצים להיראות מקצועיים, לחסוך זמן ולהגדיל פניות." },
      { name: "keywords", content: "בניית אתרים, דפי נחיתה, אוטומציות AI, סוכני AI, בוטים, דמויות AI, אווטארים דיגיטליים, פרסומות AI, סרטוני AI, וידאו גנרטיבי, סטודיו דיגיטלי, COYA" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "COYA Studio | Websites, Landing Pages, AI Automation, AI Agents, Avatars, Ads & Videos" },
      { property: "og:description", content: "Websites, landing pages, AI automation, AI agents & bots, AI avatars, AI ads and AI videos for businesses that want to look professional and generate more leads." },
      { property: "og:url", content: "https://www.coyastudioai.com/" },
      { property: "og:image", content: "https://www.coyastudioai.com/__l5e/assets-v1/ad34d32a-a11e-457e-ae39-ba36e30f33f5/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "COYA Studio" },
      { name: "twitter:image", content: "https://www.coyastudioai.com/__l5e/assets-v1/ad34d32a-a11e-457e-ae39-ba36e30f33f5/og-image.jpg" },
      { property: "og:site_name", content: "COYA Studio" },
      { property: "og:locale", content: "he_IL" },
      { property: "og:locale:alternate", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "COYA Studio" },
      { name: "twitter:description", content: "A digital studio that builds a presence that drives results." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "COYA Studio",
          description: "Digital studio building websites, landing pages, and AI automation for businesses.",
          url: "https://www.coyastudioai.com/",
          image: "https://www.coyastudioai.com/__l5e/assets-v1/ad34d32a-a11e-457e-ae39-ba36e30f33f5/og-image.jpg",
          logo: "https://www.coyastudioai.com/icon-512.png",
          email: "cohenyar21@gmail.com",
          telephone: "+972545509927",
          areaServed: { "@type": "Country", name: "Israel" },
          inLanguage: ["he", "en"],
          priceRange: "$$",
          serviceType: [
            "Website Development",
            "Landing Pages",
            "AI Automation",
            "AI Systems Integration",
            "AI Avatars",
            "AI Advertising Creatives",
            "AI Video Production",
            "Chatbots",
            "n8n / Make Integrations",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "COYA Studio | Websites, Landing Pages & AI Automation",
          url: "https://www.coyastudioai.com/",
          inLanguage: "he-IL",
          isPartOf: {
            "@type": "WebSite",
            name: "COYA Studio",
            url: "https://www.coyastudioai.com",
          },
        }),
      },
    ],
    links: [{ rel: "canonical", href: "https://www.coyastudioai.com/" }],
  }),
  component: Home,
});

function HeroMockup() {
  return (
    <div className="relative aspect-[4/3] w-full max-w-2xl mx-auto">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-purple-500/10 to-transparent blur-3xl animate-pulse-glow" />
      <div className="absolute inset-x-4 top-6 bottom-16 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0f0f14] to-[#1a1a22] shadow-2xl overflow-hidden animate-float">
        <div className="h-6 flex items-center gap-1.5 px-3 border-b border-white/5">
          <div className="h-2 w-2 rounded-full bg-red-500/60" />
          <div className="h-2 w-2 rounded-full bg-yellow-500/60" />
          <div className="h-2 w-2 rounded-full bg-green-500/60" />
        </div>
        <div className="p-6 space-y-3">
          <div className="h-2 w-32 rounded bg-primary/60" />
          <div className="h-6 w-48 rounded bg-white/80" />
          <div className="h-2 w-full rounded bg-white/10" />
          <div className="h-2 w-4/5 rounded bg-white/10" />
          <div className="pt-4 grid grid-cols-3 gap-3">
            {[0,1,2].map(i => (
              <div key={i} className="h-16 rounded-lg bg-gradient-to-br from-primary/30 to-purple-500/10 border border-primary/20" />
            ))}
          </div>
          <div className="pt-2 flex gap-2">
            <div className="h-8 w-24 rounded-md bg-gradient-to-r from-primary to-purple-400" />
            <div className="h-8 w-20 rounded-md border border-white/10" />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-2 -left-2 w-36 h-64 rounded-3xl border-4 border-white/10 bg-gradient-to-br from-[#0f0f14] to-[#1a1a22] shadow-2xl overflow-hidden rotate-[-8deg]" style={{animation:'float-slow 7s ease-in-out infinite'}}>
        <div className="p-3 space-y-2">
          <div className="h-1.5 w-16 mx-auto rounded bg-white/20 mt-1" />
          <div className="h-2 w-20 rounded bg-primary/60 mt-4" />
          <div className="h-4 w-full rounded bg-white/80" />
          <div className="h-1.5 w-full rounded bg-white/10" />
          <div className="h-1.5 w-3/4 rounded bg-white/10" />
          <div className="mt-4 h-24 rounded-lg bg-gradient-to-br from-primary/40 to-purple-500/10 border border-primary/30" />
          <div className="h-6 w-full rounded bg-gradient-to-r from-primary to-purple-400" />
        </div>
      </div>
      <div className="absolute -top-2 -right-2 w-40 h-52 rounded-xl border border-white/10 bg-gradient-to-br from-[#0f0f14] to-[#1a1a22] shadow-2xl overflow-hidden rotate-[6deg]" style={{animation:'float-slow 8s ease-in-out infinite'}}>
        <div className="p-3 space-y-2">
          <div className="h-2 w-16 rounded bg-primary/60" />
          <div className="h-3 w-24 rounded bg-white/80" />
          <div className="h-1.5 w-full rounded bg-white/10" />
          <div className="h-1.5 w-2/3 rounded bg-white/10" />
          <div className="mt-2 grid grid-cols-2 gap-1.5">
            <div className="h-10 rounded bg-primary/20 border border-primary/30" />
            <div className="h-10 rounded bg-white/5 border border-white/10" />
            <div className="h-10 rounded bg-white/5 border border-white/10" />
            <div className="h-10 rounded bg-primary/20 border border-primary/30" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const tr = useTr();

  const services = [
    { icon: Globe, title: tr("בניית אתרים", "Website Development"), desc: tr("אתרים מהירים, רספונסיביים ומעוצבים לעסקים שרוצים להיראות מקצועיים ולייצר אמון מהשנייה הראשונה.", "Fast, responsive, well-designed websites for businesses that want to look professional and build trust from the first second."), to: "/websites" as const },
    { icon: Rocket, title: tr("בניית דפי נחיתה", "Landing Pages"), desc: tr("דפי נחיתה ממוקדי המרה לקמפיינים, שירותים ומוצרים — עם מסר ברור, עיצוב חד וקריאה לפעולה חזקה.", "Conversion-focused landing pages for campaigns, services and products — with a clear message, sharp design and a strong CTA."), to: "/landing" as const },
    { icon: Bot, title: tr("AI ואוטומציות", "AI & Automation"), desc: tr("חיבור מערכות, בוטים חכמים, אוטומציות עסקיות ותהליכים שחוסכים זמן ומשפרים שירות לקוחות.", "Systems integration, smart bots, business automation, and processes that save time and improve customer service."), to: "/ai" as const },
    { icon: Workflow, title: tr("הטמעת מערכות AI לעסק", "AI Systems for Business"), desc: tr("שילוב כלי AI בתהליכי העבודה של העסק — CRM, שירות לקוחות, מכירות ותוכן — עם ליווי מלא מהאפיון ועד ההטמעה.", "Embedding AI tools into your business workflows — CRM, customer service, sales and content — with full guidance from planning to deployment."), to: "/ai-systems" as const },
    { icon: UserSquare, title: tr("בניית דמויות AI", "AI Avatars"), desc: tr("יצירת דמויות דיגיטליות מבוססות AI — Avatars מציאותיים לוידאו, מצגות ותוכן שיווקי, עם קול, מיתוג ואופי אחיד למותג.", "Photorealistic AI-generated avatars for video, presentations, and marketing content — with consistent voice, branding, and character across every asset."), to: "/ai-avatars" as const },
    { icon: Megaphone, title: tr("פרסומות AI", "AI-Generated Ads"), desc: tr("הפקת קריאייטיבים גנרטיביים לקמפיינים במטא, גוגל, טיקטוק ויוטיוב — תמונות, וידאו וקופי שמותאמים לפלטפורמה ולקהל היעד.", "Generative ad creatives for Meta, Google, TikTok, and YouTube — images, video, and copy tailored to each platform and audience."), to: "/ai-ads" as const },
    { icon: Clapperboard, title: tr("סרטוני AI", "AI Video Production"), desc: tr("הפקת סרטוני שיווק, הסבר וסושיאל עם כלים מתקדמים כמו Sora, Runway ו־HeyGen — תוכן ויזואלי איכותי בזמן קצר ובעלות אפקטיבית.", "Marketing, explainer, and social videos produced with cutting-edge tools like Sora, Runway, and HeyGen — high-quality visual content at speed and scale."), to: "/ai-videos" as const },
  ];

  const steps = [
    { icon: Search, title: tr("אפיון וגילוי", "Discovery"), desc: tr("אנחנו מבינים את העסק, הקהל, השירותים והמטרה העסקית של האתר.", "We understand your business, audience, services, and the site's business goal.") },
    { icon: Layers, title: tr("אסטרטגיה ומבנה", "Strategy & Structure"), desc: tr("בונים היררכיית תוכן, מסרים, מסע משתמש ומבנה שמוביל לפעולה.", "We map content hierarchy, messaging, user journey, and a structure that drives action.") },
    { icon: Palette, title: tr("עיצוב וחוויית משתמש", "Design & UX"), desc: tr("יוצרים עיצוב נקי, מודרני, רספונסיבי ומותאם למותג.", "We craft clean, modern, responsive design tailored to your brand.") },
    { icon: Code2, title: tr("פיתוח והקמה", "Development"), desc: tr("בונים אתר מהיר, יציב, נגיש ומוכן לפרסום.", "We build a fast, stable, accessible site ready to launch.") },
    { icon: Send, title: tr("השקה וחיבור דומיין", "Launch & Domain"), desc: tr("מחברים דומיין, SSL, אנליטיקס וכלים בסיסיים למדידה.", "We connect the domain, SSL, analytics, and core measurement tools.") },
    { icon: TrendingUp, title: tr("שיפור וצמיחה", "Growth & Optimization"), desc: tr("בודקים ביצועים, משפרים המרות ומוסיפים אוטומציות לפי הצורך.", "We monitor performance, improve conversions, and add automation as needed.") },
  ];

  const generic = [
    tr("עיצוב תבניתי", "Template-based design"),
    tr("מסר לא ממוקד", "Unfocused messaging"),
    tr("מעט מחשבה על המרה", "Little thought about conversion"),
    tr("בלי המשכיות טכנולוגית", "No tech continuity"),
  ];
  const coya = [
    tr("עיצוב מותאם אישית", "Custom-made design"),
    tr("חשיבה עסקית", "Business thinking"),
    tr("מוכנות לגילוי וחשיפה", "Discoverability-ready"),
    tr("מוכנות לאוטומציות AI", "Ready for AI automation"),
    tr("אתר שמרגיש כמו נכס עסקי", "A site that feels like a business asset"),
  ];

  const faqs = [
    { q: tr("כמה זמן לוקח לבנות דף נחיתה?", "How long does it take to build a landing page?"), a: tr("בדרך כלל בין כמה ימים לשבוע, תלוי בכמות התוכן, העיצוב והחיבורים הנדרשים.", "Usually a few days to a week, depending on content volume, design, and required integrations.") },
    { q: tr("האם אתם מחברים דומיין?", "Do you connect the domain?"), a: tr("כן. ניתן לחבר דומיין, SSL, Google Search Console וכלים בסיסיים למדידה וגילוי ברשת.", "Yes. We connect the domain, SSL, Google Search Console, and basic measurement and discovery tools.") },
    { q: tr("האם האתר מותאם למובייל?", "Is the site mobile-friendly?"), a: tr("כן. כל אתר נבנה בגישה רספונסיבית ומתאים למובייל, טאבלט ודסקטופ.", "Yes. Every site is built responsively for mobile, tablet, and desktop.") },
    { q: tr("האם אפשר לחבר וואטסאפ או טופס לידים?", "Can you connect WhatsApp or a lead form?"), a: tr("כן. אפשר לחבר כפתור וואטסאפ, טפסים, מיילים, Google Sheets, CRM ואוטומציות נוספות.", "Yes. WhatsApp buttons, forms, emails, Google Sheets, CRM, and more automations.") },
    { q: tr("האם אתם עושים גם AI ואוטומציות?", "Do you also do AI & automation?"), a: tr("כן. אפשר להוסיף בוטים, אוטומציות, חיבורי API ותהליכים שמייעלים את העבודה בעסק.", "Yes. We add bots, automations, API integrations, and processes that streamline business work.") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="absolute inset-0 pointer-events-none opacity-60">
          <ShaderBackground />
        </div>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 pointer-events-none" style={{background: "var(--gradient-hero)"}} />
        <div className="container-x relative grid lg:grid-cols-2 gap-14 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-xs text-primary/90 mb-6">
              <Sparkles className="size-3.5" /> {tr("סטודיו דיגיטלי פרימיום", "Premium digital studio")}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.15] tracking-tight text-balance">
              <span className="block text-gradient">COYA Studio</span>
              <span className="block mt-2 text-white/90">
                {tr("נוכחות דיגיטלית ופתרונות AI לעסקים", "Digital presence & AI solutions for business")}
              </span>
            </h1>
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                tr("בניית אתרים", "Websites"),
                tr("דפי נחיתה", "Landing pages"),
                tr("אוטומציות AI", "AI automation"),
                tr("סוכני AI / בוטים", "AI agents / bots"),
                tr("דמויות AI", "AI avatars"),
                tr("פרסומות AI", "AI ads"),
                tr("סרטוני AI", "AI videos"),
              ].map((label) => (
                <span
                  key={label}
                  className="px-3 py-1 rounded-full text-xs md:text-sm border border-white/10 bg-white/[0.03] text-white/75 backdrop-blur-sm"
                >
                  {label}
                </span>
              ))}
            </div>
            <p className="mt-5 text-base md:text-lg text-white/60 leading-relaxed max-w-xl">
              {tr("עיצוב מודרני, חוויית משתמש חדה, ודף שמוביל אנשים להשאיר פרטים.", "Modern design, sharp UX, and a page that gets people to leave their details.")}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-primary">
                {tr("אני רוצה אתר כזה", "I want a site like this")} <ArrowLeft className="size-5" />
              </a>
              <Link to="/websites" className="btn-ghost">
                {tr("צפו בשירותים", "View services")} <ArrowLeft className="size-4" />
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-xs text-white/40">
              <div>⚡ {tr("טעינה מהירה", "Fast loading")}</div>
              <div>📱 {tr("מובייל-first", "Mobile-first")}</div>
              <div>🔒 {tr("מאובטח", "Secure")}</div>
              <div>🤖 {tr("מוכן ל-AI", "AI-ready")}</div>
            </div>
          </div>
          <div className="animate-fade-up" style={{animationDelay: "0.15s"}}>
            <HeroMockup />
          </div>
        </div>
      </section>

      {/* Services */}
      <Section>
        <SectionHeader
          eyebrow={tr("שירותים", "Services")}
          title={tr("שבעה עולמות. כל מה שהעסק שלכם צריך.", "Seven disciplines. Everything your business needs.")}
          subtitle={tr("פתרונות דיגיטליים מקצה לקצה — מהאסטרטגיה ועד לאוטומציה שרצה ברקע.", "End-to-end digital solutions — from strategy to the automation running in the background.")}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link key={s.title} to={s.to} className="group glass-card rounded-2xl p-8 hover:border-primary/40 transition-all hover:-translate-y-1 duration-300">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                <s.icon className="size-6 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{s.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm">{s.desc}</p>
              <div className="mt-6 flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                {tr("לפרטים נוספים", "Learn more")} <ArrowLeft className="size-4" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent">
        <SectionHeader
          eyebrow={tr("תהליך העבודה", "Our Process")}
          title={tr("שישה שלבים. תוצאה שמרגישה כמו נכס עסקי.", "Six steps. A result that feels like a business asset.")}
          subtitle={tr("תהליך מסודר, שקוף, ומדוד — כדי שתדעו בכל רגע איפה הפרויקט עומד.", "An organized, transparent, measurable process — so you always know where the project stands.")}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="relative glass-card rounded-2xl p-8 hover:border-primary/30 transition group">
              <div className="absolute top-6 left-6 text-6xl font-display font-black text-white/[0.04] group-hover:text-primary/20 transition">
                0{i+1}
              </div>
              <div className="relative">
                <div className="h-11 w-11 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                  <s.icon className="size-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Comparison */}
      <Section>
        <SectionHeader
          eyebrow={tr("השוואה", "Comparison")}
          title={tr("למה לעבוד עם COYA ולא עם פתרון גנרי?", "Why work with COYA instead of a generic solution?")}
        />
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="glass-card rounded-2xl p-8 opacity-70">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center">
                <X className="size-5 text-white/40" />
              </div>
              <h3 className="font-display font-bold text-lg">{tr("פתרון גנרי", "Generic solution")}</h3>
            </div>
            <ul className="space-y-3">
              {generic.map(item => (
                <li key={item} className="flex items-start gap-3 text-white/50">
                  <X className="size-5 shrink-0 mt-0.5 text-red-500/60" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl p-8 border-2 border-primary/40 bg-gradient-to-br from-primary/10 to-purple-500/5 shadow-[0_0_60px_-15px_rgba(124,58,237,0.5)]">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <Check className="size-5 text-white" />
              </div>
              <h3 className="font-display font-bold text-lg text-gradient">COYA</h3>
            </div>
            <ul className="space-y-3">
              {coya.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="size-5 shrink-0 mt-0.5 text-primary" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* AI Advantage */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-xs text-primary/90 mb-4">
              <Zap className="size-3.5" /> AI Advantage
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient leading-[1.1]">{tr("היתרון של AI בתוך תהליך הבנייה", "The AI advantage inside the build process")}</h2>
            <p className="mt-6 text-white/60 text-lg leading-relaxed">
              {tr("אנחנו לא רק בונים אתר. אנחנו חושבים איך האתר יכול להתחבר לתהליכים עסקיים חכמים: טפסים, לידים, CRM, וואטסאפ, מיילים, סיכומי פניות, בוטים ואוטומציות.", "We don't just build a website. We think about how the site plugs into smart business processes: forms, leads, CRM, WhatsApp, email, inquiry summaries, bots, and automations.")}
            </p>
          </div>
          <div className="relative aspect-square max-w-md mx-auto w-full">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
            <svg viewBox="0 0 400 400" className="relative w-full h-full">
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#7C3AED" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
              {[
                [200,200,80,80],[200,200,320,80],[200,200,80,320],[200,200,320,320],
                [200,200,60,200],[200,200,340,200],[200,200,200,60],[200,200,200,340],
              ].map(([x1,y1,x2,y2],i) => (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#grad)" strokeWidth="1" opacity="0.4" />
              ))}
              {[[80,80],[320,80],[80,320],[320,320],[60,200],[340,200],[200,60],[200,340]].map(([x,y],i)=>(
                <circle key={i} cx={x} cy={y} r="12" fill="#141414" stroke="#7C3AED" strokeWidth="2" />
              ))}
              <circle cx="200" cy="200" r="40" fill="url(#grad)" />
              <text x="200" y="207" textAnchor="middle" fill="white" fontSize="16" fontWeight="700" fontFamily="Space Grotesk">AI</text>
            </svg>
            {[
              { name: "HubSpot", slug: "hubspot", color: "FF7A59", pos: "top-0 right-0", delay: "0s" },
              { name: "WhatsApp", slug: "whatsapp", color: "25D366", pos: "top-0 left-0", delay: "0.6s" },
              { name: "Gmail", slug: "gmail", color: "EA4335", pos: "bottom-0 right-0", delay: "1.2s" },
              { name: "Google Sheets", slug: "googlesheets", color: "34A853", pos: "bottom-0 left-0", delay: "1.8s" },
            ].map((b) => (
              <div
                key={b.slug}
                className={`absolute ${b.pos} group cursor-default`}
                style={{ animation: `float-slow 6s ease-in-out ${b.delay} infinite` }}
              >
                <div className="relative h-14 w-14 md:h-16 md:w-16 rounded-full backdrop-blur-xl bg-white/5 border border-white/15 shadow-[0_8px_32px_rgba(124,58,237,0.25)] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10 group-hover:border-white/25 group-hover:shadow-[0_8px_40px_rgba(124,58,237,0.55)]">
                  <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                  <img
                    src={`https://cdn.simpleicons.org/${b.slug}/${b.color}`}
                    alt={`${b.name} logo`}
                    loading="lazy"
                    className="relative h-7 w-7 md:h-9 md:w-9 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Founder */}
      <Section>
        <div className="grid lg:grid-cols-[300px_1fr] gap-10 items-center max-w-4xl mx-auto">
          <div className="mx-auto">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/40 blur-2xl" />
              <div className="relative h-56 w-56 rounded-full bg-gradient-to-br from-primary/40 via-purple-500/20 to-transparent border border-primary/30 p-1">
                <img
                  src={founderPhoto.url}
                  alt={tr("מייסד COYA Studio", "Founder of COYA Studio")}
                  loading="lazy"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-primary/80 mb-4">{tr("מי אנחנו", "Who we are")}</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient leading-tight">{tr("מי עומד מאחורי COYA?", "Who is behind COYA?")}</h2>
            <p className="mt-5 text-white/70 leading-relaxed text-lg whitespace-pre-line">
              {tr(
                "היי אני ירין כהן ואני בניתי את האתר הזה מאפס מאמץ ומאה אחוזים נתינה\nCOYA\u00a0נבנתה מתוך מטרה לעזור לעסקים קטנים ובינוניים להיראות גדולים יותר, לעבוד חכם יותר ולהשתמש בטכנולוגיה בצורה פרקטית. המיקוד שלנו הוא לא רק עיצוב יפה, אלא תוצאה עסקית: יותר אמון, יותר פניות, פחות עבודה ידנית.",
                "Hi, I'm Yarin Cohen — I built this site from scratch with effort and 100% dedication.\nCOYA\u00a0was built to help small and mid-sized businesses look bigger, work smarter, and use technology in a practical way. Our focus isn't only beautiful design, but business outcomes: more trust, more inquiries, less manual work."
              )}
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeader eyebrow={tr("שאלות נפוצות", "FAQ")} title={tr("הכל מה שרציתם לדעת", "Everything you wanted to know")} />
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/20 via-purple-500/10 to-transparent p-12 md:p-20 text-center">
          <div className="absolute inset-0 opacity-40" style={{background: "radial-gradient(ellipse at center, rgba(124,58,237,0.4), transparent 60%)"}} />
          <div className="relative">
            <Workflow className="size-12 mx-auto text-primary mb-6" />
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient leading-tight">
              {tr("רוצים אתר שמרגיש מקצועי מהקליק הראשון?", "Want a site that feels professional from the first click?")}
            </h2>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link to="/contact" className="btn-primary">
                {tr("בואו נתחיל", "Let's start")} <ArrowLeft className="size-5" />
              </Link>
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-ghost">
                <MessageCircle className="size-5" /> {tr("וואטסאפ", "WhatsApp")}
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Big Logo */}
      <Section>
        <div className="flex justify-center">
          <img src={coyaLogo.url} alt="COYA" className="w-64 md:w-96 h-auto" />
        </div>
      </Section>
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-right hover:bg-white/[0.02] transition">
        <span className="font-medium">{q}</span>
        <ChevronDown className={`size-5 text-primary shrink-0 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-5 pb-5 text-white/60 leading-relaxed animate-fade-up">{a}</div>}
    </div>
  );
}
