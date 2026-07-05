import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/site/Section";
import { WA_LINK } from "../components/site/Header";
import { MessageCircle, Mail, Calendar, Send } from "lucide-react";
import { useId, useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "צור קשר | COYA Digital Studio" },
      { name: "description", content: "רוצים להתחיל פרויקט? השאירו פרטים, דברו איתנו בוואטסאפ או שלחו מייל ל‑cohenyar21@gmail.com. נחזור אליכם במהירות." },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "צור קשר | COYA Digital Studio" },
      { property: "og:description", content: "בואו נדבר על הפרויקט הבא שלכם — וואטסאפ, טופס או מייל." },
      { property: "og:url", content: "/contact" },
      { property: "og:site_name", content: "COYA Digital Studio" },
      { property: "og:locale", content: "he_IL" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "צור קשר | COYA" },
      { name: "twitter:description", content: "בואו נדבר על הפרויקט הבא שלכם." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", type: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `שם: ${form.name}%0Aטלפון: ${form.phone}%0Aאימייל: ${form.email}%0Aמעוניין ב: ${form.type}%0Aהודעה: ${form.message}`;
    window.open(`https://wa.me/972545509927?text=${body}`, "_blank");
    setSent(true);
  };

  return (
    <>
      <section className="relative overflow-hidden pt-16 md:pt-24 pb-8">
        <div className="absolute inset-0 pointer-events-none" style={{background: "var(--gradient-hero)"}} />
        <div className="container-x relative text-center max-w-3xl mx-auto animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <span className="text-xs uppercase tracking-[0.2em] text-primary/90">צור קשר</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-gradient leading-[1.1]">בואו נדבר על הפרויקט שלכם</h1>
          <p className="mt-5 text-lg text-white/60">מלאו את הטופס, שלחו הודעה בוואטסאפ או קבעו שיחת ייעוץ ללא עלות.</p>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-[1fr_360px] gap-8 max-w-6xl mx-auto">
          <div className="glass-card rounded-2xl p-8">
            {sent ? (
              <div className="text-center py-10">
                <div className="h-14 w-14 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto mb-4">
                  <Send className="size-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">תודה!</h3>
                <p className="text-white/60">פתחנו לכם וואטסאפ עם ההודעה. נחזור אליכם בהקדם.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="שם מלא" value={form.name} onChange={v => setForm({...form, name: v})} required />
                  <Field label="טלפון" value={form.phone} onChange={v => setForm({...form, phone: v})} required type="tel" />
                </div>
                <Field label="אימייל" value={form.email} onChange={v => setForm({...form, email: v})} required type="email" />
                <div>
                  <label htmlFor={typeId} className="block text-sm font-medium mb-2 text-white/80">מה תרצו לבנות?</label>
                  <select id={typeId} value={form.type} onChange={e => setForm({...form, type: e.target.value})} required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition">
                    <option value="" className="bg-background">בחרו שירות...</option>
                    <option value="אתר" className="bg-background">אתר עסקי</option>
                    <option value="דף נחיתה" className="bg-background">דף נחיתה</option>
                    <option value="AI/אוטומציה" className="bg-background">AI ואוטומציות</option>
                    <option value="אחר" className="bg-background">אחר</option>
                  </select>
                </div>
                <div>
                  <label htmlFor={messageId} className="block text-sm font-medium mb-2 text-white/80">הודעה</label>
                  <textarea id={messageId} value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows={4} required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none" />
                </div>
                <button type="submit" className="btn-primary w-full">
                  <Send className="size-4" /> שלח פנייה
                </button>
              </form>
            )}
          </div>

          <div className="space-y-4">
            <ContactCard icon={MessageCircle} title="וואטסאפ" desc="המהיר ביותר. תגובה תוך שעות." href={WA_LINK} cta="פתח וואטסאפ" />
            <ContactCard icon={Mail} title="אימייל" desc="cohenyar21@gmail.com" href="mailto:cohenyar21@gmail.com" cta="שלח מייל" />
            <ContactCard icon={Calendar} title="שיחת ייעוץ" desc="שיחה של 30 דקות ללא עלות." href={WA_LINK} cta="קבע שיחה" />
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({ label, value, onChange, type = "text", required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-2 text-white/80">{label}{required && <span className="text-primary"> *</span>}</label>
      <input id={id} type={type} value={value} onChange={e => onChange(e.target.value)} required={required}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition" />
    </div>
  );
}

function ContactCard({ icon: Icon, title, desc, href, cta }: any) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="block glass-card rounded-2xl p-6 hover:border-primary/40 transition group">
      <div className="h-11 w-11 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-3">
        <Icon className="size-5 text-primary" />
      </div>
      <div className="font-display font-bold">{title}</div>
      <div className="text-white/60 text-sm mt-1">{desc}</div>
      <div className="mt-3 text-primary text-sm font-medium group-hover:underline">{cta} ←</div>
    </a>
  );
}
