import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeader } from "../components/site/Section";
import { WA_LINK } from "../components/site/Header";
import ShaderBackground from "../components/ui/shader-background";
import {
  ArrowLeft, Check, X, MessageCircle, Globe, Rocket, Bot, Search, Layers,
  Palette, Code2, Send, TrendingUp, Sparkles, Zap, Workflow, Mail
} from "lucide-react";
import { Typewriter } from "../components/ui/typewriter-text";
import founderPhoto from "@/assets/founder.png.asset.json";
import coyaLogo from "@/assets/coya-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "COYA Digital Studio | בניית אתרים, דפי נחיתה ואוטומציות AI" },
      { name: "description", content: "סטודיו דיגיטלי לבניית אתרים, דפי נחיתה ואוטומציות AI לעסקים שרוצים להיראות מקצועיים, לחסוך זמן ולהגדיל פניות." },
      { name: "keywords", content: "בניית אתרים, דפי נחיתה, אוטומציות AI, סטודיו דיגיטלי, קידום אתרים, עיצוב אתרים, COYA" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "COYA Digital Studio | סטודיו דיגיטלי פרימיום" },
      { property: "og:description", content: "אתרים, דפי נחיתה ואוטומציות AI לעסקים שרוצים להיראות מקצועיים ולייצר יותר פניות." },
      { property: "og:url", content: "/" },
      { property: "og:site_name", content: "COYA Digital Studio" },
      { property: "og:locale", content: "he_IL" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "COYA Digital Studio" },
      { name: "twitter:description", content: "סטודיו דיגיטלי שבונה נוכחות שמביאה תוצאות." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "COYA Digital Studio",
          description: "סטודיו דיגיטלי לבניית אתרים, דפי נחיתה ואוטומציות AI לעסקים.",
          url: "/",
          email: "cohenyar21@gmail.com",
          areaServed: "IL",
          inLanguage: "he",
        }),
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function HeroMockup() {
  return (
    <div className="relative aspect-[4/3] w-full max-w-2xl mx-auto">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-purple-500/10 to-transparent blur-3xl animate-pulse-glow" />
      {/* laptop */}
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
      {/* phone */}
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
      {/* tablet corner */}
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

const services = [
  { icon: Globe, title: "בניית אתרים", desc: "אתרים מהירים, רספונסיביים ומעוצבים לעסקים שרוצים להיראות מקצועיים ולייצר אמון מהשנייה הראשונה.", to: "/websites" as const },
  { icon: Rocket, title: "בניית דפי נחיתה", desc: "דפי נחיתה ממוקדי המרה לקמפיינים, שירותים ומוצרים — עם מסר ברור, עיצוב חד וקריאה לפעולה חזקה.", to: "/landing" as const },
  { icon: Bot, title: "AI ואוטומציות", desc: "חיבור מערכות, בוטים חכמים, אוטומציות עסקיות ותהליכים שחוסכים זמן ומשפרים שירות לקוחות.", to: "/ai" as const },
];

const steps = [
  { icon: Search, title: "אפיון וגילוי", desc: "אנחנו מבינים את העסק, הקהל, השירותים והמטרה העסקית של האתר." },
  { icon: Layers, title: "אסטרטגיה ומבנה", desc: "בונים היררכיית תוכן, מסרים, מסע משתמש ומבנה שמוביל לפעולה." },
  { icon: Palette, title: "עיצוב וחוויית משתמש", desc: "יוצרים עיצוב נקי, מודרני, רספונסיבי ומותאם למותג." },
  { icon: Code2, title: "פיתוח והקמה", desc: "בונים אתר מהיר, יציב, נגיש ומוכן לפרסום." },
  { icon: Send, title: "השקה וחיבור דומיין", desc: "מחברים דומיין, SSL, אנליטיקס וכלים בסיסיים למדידה." },
  { icon: TrendingUp, title: "שיפור וצמיחה", desc: "בודקים ביצועים, משפרים המרות ומוסיפים אוטומציות לפי הצורך." },
];

const generic = ["עיצוב תבניתי", "מסר לא ממוקד", "מעט מחשבה על המרה", "בלי המשכיות טכנולוגית"];
const coya = ["עיצוב מותאם אישית", "חשיבה עסקית", "התאמה ל-SEO", "מוכנות לאוטומציות AI", "אתר שמרגיש כמו נכס עסקי"];

const faqs = [
  { q: "כמה זמן לוקח לבנות דף נחיתה?", a: "בדרך כלל בין כמה ימים לשבוע, תלוי בכמות התוכן, העיצוב והחיבורים הנדרשים." },
  { q: "האם אתם מחברים דומיין?", a: "כן. ניתן לחבר דומיין, SSL, Google Search Console וכלים בסיסיים ל-SEO." },
  { q: "האם האתר מותאם למובייל?", a: "כן. כל אתר נבנה בגישה רספונסיבית ומתאים למובייל, טאבלט ודסקטופ." },
  { q: "האם אפשר לחבר וואטסאפ או טופס לידים?", a: "כן. אפשר לחבר כפתור וואטסאפ, טפסים, מיילים, Google Sheets, CRM ואוטומציות נוספות." },
  { q: "האם אתם עושים גם AI ואוטומציות?", a: "כן. אפשר להוסיף בוטים, אוטומציות, חיבורי API ותהליכים שמייעלים את העבודה בעסק." },
];

function Home() {
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
              <Sparkles className="size-3.5" /> סטודיו דיגיטלי פרימיום
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.15] tracking-tight text-balance">
              COYA Digital Studio — בניית אתרים, דפי נחיתה ואוטומציות AI
            </h1>
            <p className="mt-5 text-base md:text-lg text-white/60 leading-relaxed max-w-xl">
              עיצוב מודרני, חוויית משתמש חדה, ודף שמוביל אנשים להשאיר פרטים.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-primary">
                אני רוצה אתר כזה <ArrowLeft className="size-5" />
              </a>
              <Link to="/websites" className="btn-ghost">
                צפו בשירותים <ArrowLeft className="size-4" />
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-xs text-white/40">
              <div>⚡ טעינה מהירה</div>
              <div>📱 מובייל-first</div>
              <div>🔒 מאובטח</div>
              <div>🤖 מוכן ל-AI</div>
            </div>
          </div>
          <div className="animate-fade-up" style={{animationDelay: "0.15s"}}>
            <HeroMockup />
          </div>
        </div>
      </section>

      {/* Services */}
      <Section>
        <SectionHeader eyebrow="שירותים" title="שלושה עולמות. כל מה שהעסק שלכם צריך." subtitle="פתרונות דיגיטליים מקצה לקצה — מהאסטרטגיה ועד לאוטומציה שרצה ברקע." />
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link key={s.title} to={s.to} className="group glass-card rounded-2xl p-8 hover:border-primary/40 transition-all hover:-translate-y-1 duration-300">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                <s.icon className="size-6 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{s.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm">{s.desc}</p>
              <div className="mt-6 flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                לפרטים נוספים <ArrowLeft className="size-4" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent">
        <SectionHeader eyebrow="תהליך העבודה" title="שישה שלבים. תוצאה שמרגישה כמו נכס עסקי." subtitle="תהליך מסודר, שקוף, ומדוד — כדי שתדעו בכל רגע איפה הפרויקט עומד." />
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
        <SectionHeader eyebrow="השוואה" title="למה לעבוד עם COYA ולא עם פתרון גנרי?" />
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="glass-card rounded-2xl p-8 opacity-70">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center">
                <X className="size-5 text-white/40" />
              </div>
              <h3 className="font-display font-bold text-lg">פתרון גנרי</h3>
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
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient leading-[1.1]">היתרון של AI בתוך תהליך הבנייה</h2>
            <p className="mt-6 text-white/60 text-lg leading-relaxed">
              אנחנו לא רק בונים אתר. אנחנו חושבים איך האתר יכול להתחבר לתהליכים עסקיים חכמים: טפסים, לידים, CRM, וואטסאפ, מיילים, סיכומי פניות, בוטים ואוטומציות.
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
              {/* connections */}
              {[
                [200,200,80,80],[200,200,320,80],[200,200,80,320],[200,200,320,320],
                [200,200,60,200],[200,200,340,200],[200,200,200,60],[200,200,200,340],
              ].map(([x1,y1,x2,y2],i) => (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#grad)" strokeWidth="1" opacity="0.4" />
              ))}
              {/* nodes */}
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
                  alt="מייסד COYA Digital Studio"
                  loading="lazy"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-primary/80 mb-4">מי אנחנו</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient leading-tight">מי עומד מאחורי COYA?</h2>
            <p className="mt-5 text-white/70 leading-relaxed text-lg whitespace-pre-line">
              היי אני ירין כהן ואני בניתי את האתר הזה מאפס מאמץ ומאה אחוזים נתינה
              {"\n"}COYA&nbsp;נבנתה מתוך מטרה לעזור לעסקים קטנים ובינוניים להיראות גדולים יותר, לעבוד חכם יותר ולהשתמש בטכנולוגיה בצורה פרקטית. המיקוד שלנו הוא לא רק עיצוב יפה, אלא תוצאה עסקית: יותר אמון, יותר פניות, פחות עבודה ידנית.
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeader eyebrow="שאלות נפוצות" title="הכל מה שרציתם לדעת" />
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
              רוצים אתר שמרגיש מקצועי מהקליק הראשון?
            </h2>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link to="/contact" className="btn-primary">
                בואו נתחיל <ArrowLeft className="size-5" />
              </Link>
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-ghost">
                <MessageCircle className="size-5" /> וואטסאפ
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



import { useState } from "react";
import { ChevronDown } from "lucide-react";
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
