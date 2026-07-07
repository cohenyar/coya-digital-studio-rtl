import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/site/Section";
import { WA_LINK } from "../components/site/Header";
import { MessageCircle, Mail, Calendar, Send } from "lucide-react";
import { useId, useState } from "react";
import { useTr } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "צור קשר — בניית אתרים ופתרונות AI לעסקים בישראל | COYA" },
      { name: "description", content: "מדברים על בניית אתרים, דפי נחיתה, אוטומציה לעסקים ופתרונות AI לעסקים בישראל. השאירו פרטים, שלחו וואטסאפ או מייל ל-cohenyar21@gmail.com." },
      { name: "keywords", content: "צור קשר, COYA Studio, בניית אתרים, פיתוח אתרים, אוטומציה לעסקים, פתרונות AI לעסקים, בישראל" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Contact | COYA Studio" },
      { property: "og:description", content: "Let's talk about your next project — WhatsApp, form, or email." },
      { property: "og:url", content: "https://www.coyastudioai.com/contact" },
      { property: "og:image", content: "https://www.coyastudioai.com/__l5e/assets-v1/ad34d32a-a11e-457e-ae39-ba36e30f33f5/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "COYA Studio" },
      { name: "twitter:image", content: "https://www.coyastudioai.com/__l5e/assets-v1/ad34d32a-a11e-457e-ae39-ba36e30f33f5/og-image.jpg" },
      { property: "og:site_name", content: "COYA Studio" },
      { property: "og:locale", content: "he_IL" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact | COYA" },
      { name: "twitter:description", content: "Let's talk about your next project." },
    ],
    links: [{ rel: "canonical", href: "https://www.coyastudioai.com/contact" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({
        "@context":"https://schema.org","@type":"WebPage",
        name:"צור קשר | COYA Studio", description:"בואו נדבר על הפרויקט הבא שלכם.",
        url:"https://www.coyastudioai.com/contact",
        inLanguage:"he-IL",
        isPartOf:{"@type":"WebSite",name:"COYA Studio",url:"https://www.coyastudioai.com"}
      }) },
      { type: "application/ld+json", children: JSON.stringify({
        "@context":"https://schema.org","@type":"BreadcrumbList",
        itemListElement:[
          {"@type":"ListItem",position:1,name:"בית",item:"https://www.coyastudioai.com/"},
          {"@type":"ListItem",position:2,name:"צור קשר",item:"https://www.coyastudioai.com/contact"}
        ]
      }) },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const tr = useTr();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "", type: "", message: "" });
  const typeId = useId();
  const messageId = useId();

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!emailRe.test(form.email.trim())) {
      setError(tr("נא להזין כתובת אימייל תקינה.", "Please enter a valid email address."));
      return;
    }
    setSending(true);
    try {
      const res = await fetch("/api/public/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const errBody = await res.text().catch(() => "");
        console.error("send-contact failed", res.status, errBody);
        throw new Error(`send_failed_${res.status}`);
      }
      setSent(true);
    } catch (err) {
      console.error(err);
      setError(tr("שליחה נכשלה. נסו שוב או פנו בוואטסאפ.", "Sending failed. Please try again or contact us on WhatsApp."));
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden pt-16 md:pt-24 pb-8">
        <div className="absolute inset-0 pointer-events-none" style={{background: "var(--gradient-hero)"}} />
        <div className="container-x relative text-center max-w-3xl mx-auto animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <span className="text-xs uppercase tracking-[0.2em] text-primary/90">{tr("צור קשר", "Contact")}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-gradient leading-[1.1]">{tr("בואו נדבר על הפרויקט שלכם", "Let's talk about your project")}</h1>
          <p className="mt-5 text-lg text-white/60">{tr("מלאו את הטופס, שלחו הודעה בוואטסאפ או קבעו שיחת ייעוץ ללא עלות.", "Fill out the form, message us on WhatsApp, or book a free consultation.")}</p>
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
                <h3 className="font-display font-bold text-xl mb-2">{tr("תודה!", "Thank you!")}</h3>
                <p className="text-white/60">{tr("קיבלנו את הפרטים במייל. נחזור אליכם בהקדם.", "We received your details by email. We'll get back to you shortly.")}</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label={tr("שם מלא", "Full name")} value={form.name} onChange={v => setForm({...form, name: v})} required />
                  <Field label={tr("טלפון", "Phone")} value={form.phone} onChange={v => setForm({...form, phone: v})} required type="tel" />
                </div>
                <Field label={tr("אימייל", "Email")} value={form.email} onChange={v => setForm({...form, email: v})} required type="email" />
                <div>
                  <label htmlFor={typeId} className="block text-sm font-medium mb-2 text-white/80">{tr("מה תרצו לבנות?", "What would you like to build?")}</label>
                  <select id={typeId} value={form.type} onChange={e => setForm({...form, type: e.target.value})} required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition">
                    <option value="" className="bg-background">{tr("בחרו שירות...", "Choose a service...")}</option>
                    <option value={tr("אתר", "Website")} className="bg-background">{tr("אתר עסקי", "Business website")}</option>
                    <option value={tr("דף נחיתה", "Landing page")} className="bg-background">{tr("דף נחיתה", "Landing page")}</option>
                    <option value={tr("AI/אוטומציה", "AI/Automation")} className="bg-background">{tr("AI ואוטומציות", "AI & Automation")}</option>
                    <option value={tr("אחר", "Other")} className="bg-background">{tr("אחר", "Other")}</option>
                  </select>
                </div>
                <div>
                  <label htmlFor={messageId} className="block text-sm font-medium mb-2 text-white/80">{tr("הודעה", "Message")}</label>
                  <textarea id={messageId} value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows={4} required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none" />
                </div>
                {error && <p className="text-sm text-destructive">{error}</p>}
                <button type="submit" disabled={sending} className="btn-primary w-full disabled:opacity-60">
                  <Send className="size-4" /> {sending ? tr("שולח...", "Sending...") : tr("שלח פנייה", "Send message")}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-4">
            <ContactCard icon={MessageCircle} title={tr("וואטסאפ", "WhatsApp")} desc={tr("המהיר ביותר. תגובה תוך שעות.", "Fastest. Reply within hours.")} href={WA_LINK} cta={tr("פתח וואטסאפ", "Open WhatsApp")} />
            <ContactCard icon={Mail} title={tr("אימייל", "Email")} desc="cohenyar21@gmail.com" href="mailto:cohenyar21@gmail.com" cta={tr("שלח מייל", "Send email")} />
            <ContactCard icon={Calendar} title={tr("שיחת ייעוץ", "Consultation call")} desc={tr("שיחה של 30 דקות ללא עלות.", "Free 30-minute call.")} href={WA_LINK} cta={tr("קבע שיחה", "Book a call")} />
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
