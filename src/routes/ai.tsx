import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "../components/site/Section";
import { ServiceHero, CTABlock } from "./websites";
import { Bot, MessageCircle, FileSpreadsheet, Mail, Workflow, Clock, Users, Zap } from "lucide-react";

export const Route = createFileRoute("/ai")({
  head: () => ({
    meta: [
      { title: "AI ואוטומציות עסקיות | COYA Digital Studio" },
      { name: "description", content: "בוטים חכמים, אוטומציות עסקיות, חיבור וואטסאפ, CRM, מיילים ו-Google Sheets. פחות עבודה ידנית — יותר תוצאות." },
      { property: "og:title", content: "AI ואוטומציות | COYA" },
      { property: "og:description", content: "אוטומציות שחוסכות שעות בעסק." },
      { property: "og:url", content: "/ai" },
    ],
    links: [{ rel: "canonical", href: "/ai" }],
  }),
  component: AiPage,
});

const solutions = [
  { icon: MessageCircle, title: "אוטומציית וואטסאפ", desc: "מענה אוטומטי, ניתוב פניות, סיכומי שיחות ותזכורות ללקוחות." },
  { icon: Users, title: "טיפול בלידים", desc: "כל ליד מתקבל, מסווג, מוקצה ומתועד — בלי שאף פנייה תיפול בין הכיסאות." },
  { icon: Bot, title: "צ׳אטבוטים חכמים", desc: "בוטים מבוססי AI שעונים על שאלות נפוצות ומסייעים ללקוחות 24/7." },
  { icon: FileSpreadsheet, title: "חיבור Google Sheets ו-CRM", desc: "סנכרון אוטומטי של לידים, לקוחות ומכירות לגיליונות ולמערכות ניהול." },
  { icon: Mail, title: "אוטומציית מיילים", desc: "מיילים אוטומטיים אחרי טפסים, אישורים, מעקבים וטריגרים עסקיים." },
  { icon: Workflow, title: "תהליכים עסקיים", desc: "אוטומציה של תהליכים חוזרים בעסק — מהגשת בקשה ועד גביית תשלום." },
];

function AiPage() {
  return (
    <>
      <ServiceHero
        eyebrow="AI ואוטומציות"
        icon={Bot}
        title="פחות עבודה ידנית. יותר תוצאות עסקיות."
        subtitle="חיבור מערכות, בוטים חכמים ואוטומציות שחוסכים לכם שעות בשבוע ומייעלים את השירות ללקוחות."
      />

      <Section>
        <SectionHeader eyebrow="פתרונות" title="מה אנחנו יודעים לבנות" />
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
          <Stat icon={Clock} title="שעות" value="10+" desc="חיסכון בשבוע לעסק ממוצע" />
          <Stat icon={Zap} title="מהירות" value="24/7" desc="מענה אוטומטי סביב השעון" />
          <Stat icon={Users} title="פחות פניות אבודות" value="90%" desc="של הלידים מטופלים אוטומטית" />
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
