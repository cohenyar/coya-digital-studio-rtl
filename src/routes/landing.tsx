import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "../components/site/Section";
import { ServiceHero, CTABlock } from "./websites";
import { Rocket, Target, Zap, Smartphone, MessageSquare, Check } from "lucide-react";

export const Route = createFileRoute("/landing")({
  head: () => ({
    meta: [
      { title: "בניית דפי נחיתה ממוקדי המרה | COYA Digital Studio" },
      { name: "description", content: "דפי נחיתה לקמפיינים, מוצרים ושירותים — מסר ברור, עיצוב חד, ומבנה שנועד להמיר." },
      { property: "og:title", content: "בניית דפי נחיתה | COYA" },
      { property: "og:description", content: "דפי נחיתה שממירים גולשים ללידים." },
      { property: "og:url", content: "/landing" },
    ],
    links: [{ rel: "canonical", href: "/landing" }],
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
