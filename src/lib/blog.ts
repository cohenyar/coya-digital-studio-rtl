// Blog taxonomy — categories rendered as SEO landing pages.
// Articles are shipped later; each category route already links to
// its future articles list via a placeholder empty state.

export interface LocalizedBlogCategory {
  slug: string;
  name: { he: string; en: string };
  title: { he: string; en: string };
  description: { he: string; en: string };
  intro: { he: string; en: string };
  topics: { he: string[]; en: string[] };
  faqs: { q: { he: string; en: string }; a: { he: string; en: string } }[];
}

// Consumer-facing (post localization) shape
export interface BlogCategory {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  topics: string[];
  faqs: { q: string; a: string }[];
}

export const BLOG_CATEGORIES_I18N: LocalizedBlogCategory[] = [
  {
    slug: "ai",
    name: { he: "AI לעסקים", en: "AI for Business" },
    title: {
      he: "AI לעסקים — מדריכים, פתרונות ותובנות | בלוג COYA",
      en: "AI for Business — Guides, Solutions & Insights | COYA Blog",
    },
    description: {
      he: "כל מה שצריך לדעת על שילוב בינה מלאכותית בעסק: כלים, מקרי בוחן, ROI, ומתי AI באמת משתלם.",
      en: "Everything you need to know about integrating AI into your business: tools, case studies, ROI, and when AI is really worth it.",
    },
    intro: {
      he: "מדריכים פרקטיים ליישום AI בעסק — מזיהוי הזדמנויות ועד הטמעה מלאה של סוכנים חכמים, RAG ותהליכי עבודה מבוססי מודלים.",
      en: "Practical guides for applying AI in business — from spotting opportunities to fully deploying smart agents, RAG, and model-driven workflows.",
    },
    topics: {
      he: ["סוכני AI", "RAG", "OpenAI", "Claude", "אוטומציה מבוססת LLM", "כלי AI לעסקים קטנים"],
      en: ["AI Agents", "RAG", "OpenAI", "Claude", "LLM automation", "AI tools for SMBs"],
    },
    faqs: [
      {
        q: { he: "האם AI מתאים לעסק קטן?", en: "Is AI suitable for a small business?" },
        a: {
          he: "בהחלט. פתרונות AI מודרניים זמינים בעלויות נמוכות ומספקים ערך מיידי בטיפול בלידים, מענה ראשוני ואוטומציה של משימות חוזרות.",
          en: "Absolutely. Modern AI solutions are affordable and deliver immediate value in lead handling, first-touch responses, and repetitive-task automation.",
        },
      },
      {
        q: { he: "כמה זמן לוקח להטמיע AI בעסק?", en: "How long does it take to implement AI?" },
        a: {
          he: "פרויקטים קלים (בוט וואטסאפ, סיווג לידים) עולים לאוויר תוך 1–2 שבועות. פרויקטים מורכבים יותר יכולים לקחת 4–8 שבועות.",
          en: "Light projects (WhatsApp bot, lead classification) go live in 1–2 weeks. More complex projects take 4–8 weeks.",
        },
      },
    ],
  },
  {
    slug: "website-development",
    name: { he: "בניית אתרים", en: "Website Development" },
    title: {
      he: "בניית אתרים — טכניקות, סטק וארכיטקטורה | בלוג COYA",
      en: "Website Development — Techniques, Stack & Architecture | COYA Blog",
    },
    description: {
      he: "מדריכי בניית אתרים לעסקים: React, TanStack Start, Next.js, ביצועים, אבטחה, וארכיטקטורה שמחזיקה לאורך זמן.",
      en: "Web development guides for businesses: React, TanStack Start, Next.js, performance, security, and durable architecture.",
    },
    intro: {
      he: "פרקטיקות מודרניות לבניית אתרים מהירים, בטוחים וניתנים לתחזוקה — מהעקרונות ועד המימוש בפועל.",
      en: "Modern practices for building fast, secure, maintainable websites — from principles to real-world implementation.",
    },
    topics: {
      he: ["React 19", "TanStack Start", "SSR", "Core Web Vitals", "TypeScript", "Tailwind"],
      en: ["React 19", "TanStack Start", "SSR", "Core Web Vitals", "TypeScript", "Tailwind"],
    },
    faqs: [
      {
        q: { he: "כמה עולה בניית אתר לעסק?", en: "How much does a business website cost?" },
        a: {
          he: "אתר תדמית איכותי מתחיל סביב 4,000–8,000 ₪ ומעלה, בהתאם להיקף, מספר עמודים ושילוב אוטומציות.",
          en: "A quality corporate site starts around ₪4,000–8,000+, depending on scope, page count, and automation integrations.",
        },
      },
      {
        q: { he: "אתר וורדפרס או פיתוח קוד?", en: "WordPress or custom-coded site?" },
        a: {
          he: "וורדפרס מתאים לתוכן פשוט. פיתוח בקוד מומלץ כשצריך ביצועים גבוהים, אינטגרציות מותאמות או חוויית משתמש ייחודית.",
          en: "WordPress fits simple content sites. Custom code is recommended when you need high performance, tailored integrations, or a unique UX.",
        },
      },
    ],
  },
  {
    slug: "landing-pages",
    name: { he: "דפי נחיתה", en: "Landing Pages" },
    title: {
      he: "דפי נחיתה שממירים — מדריכים ומקרי בוחן | בלוג COYA",
      en: "Landing Pages That Convert — Guides & Case Studies | COYA Blog",
    },
    description: {
      he: "כל מה שצריך כדי לבנות דפי נחיתה שממירים: מסרים, מבנה, CTA, טעינה מהירה ואופטימיזציית קמפיינים.",
      en: "Everything you need to build converting landing pages: messaging, structure, CTA, fast loading, and campaign optimization.",
    },
    intro: {
      he: "מדפי נחיתה בסיסיים ועד עמודי הצעה מבוססי נתונים — כלים ועקרונות שמעלים את שיעור ההמרה.",
      en: "From basic landing pages to data-driven offer pages — the tools and principles that raise conversion rates.",
    },
    topics: {
      he: ["Conversion Rate Optimization", "A/B Testing", "Copywriting", "Above the Fold", "CTA"],
      en: ["Conversion Rate Optimization", "A/B Testing", "Copywriting", "Above the Fold", "CTA"],
    },
    faqs: [
      {
        q: { he: "מה שיעור המרה טוב לדף נחיתה?", en: "What's a good conversion rate for a landing page?" },
        a: {
          he: "ממוצע השוק הוא 2–5%. דפי נחיתה מותאמים היטב יכולים להגיע ל-8–15% ואף מעבר.",
          en: "The market average is 2–5%. Well-optimized pages can reach 8–15% and beyond.",
        },
      },
      {
        q: { he: "כמה זמן לוקח לבנות דף נחיתה?", en: "How long does it take to build a landing page?" },
        a: {
          he: "דף נחיתה מקצועי מוכן לאוויר בדרך כלל תוך 5–10 ימי עבודה, כולל עיצוב, פיתוח ואינטגרציה.",
          en: "A professional landing page is ready in 5–10 business days, including design, development, and integration.",
        },
      },
    ],
  },
  {
    slug: "business-automation",
    name: { he: "אוטומציה עסקית", en: "Business Automation" },
    title: {
      he: "אוטומציה עסקית — תהליכים, כלים ו-ROI | בלוג COYA",
      en: "Business Automation — Processes, Tools & ROI | COYA Blog",
    },
    description: {
      he: "מדריכי אוטומציה עסקית: מיפוי תהליכים, בחירת כלים, אינטגרציה עם CRM ומדידת החזר ההשקעה.",
      en: "Business automation guides: process mapping, tool selection, CRM integration, and ROI measurement.",
    },
    intro: {
      he: "איך לבנות שרשרת אוטומציות שחוסכת שעות בשבוע — משיטות המחקר של תהליכים ועד המימוש הטכני.",
      en: "How to build an automation stack that saves hours a week — from process research methods to the technical implementation.",
    },
    topics: {
      he: ["Process Mining", "Zapier", "n8n", "Make", "CRM Automation", "Sales Automation"],
      en: ["Process Mining", "Zapier", "n8n", "Make", "CRM Automation", "Sales Automation"],
    },
    faqs: [
      {
        q: { he: "מאיפה מתחילים באוטומציה עסקית?", en: "Where do you start with business automation?" },
        a: {
          he: "מתחילים ממיפוי תהליכים חוזרים ומדידה של הזמן שהם צורכים. מכאן בוחרים את התהליך עם ה-ROI הגבוה ביותר.",
          en: "Start by mapping repeat processes and measuring the time they consume. From there, pick the process with the highest ROI.",
        },
      },
      {
        q: { he: "אוטומציה תחליף את הצוות שלי?", en: "Will automation replace my team?" },
        a: {
          he: "לא — היא תשחרר את הצוות ממשימות חוזרות ותאפשר להם להתמקד במה שדורש שיפוט אנושי ויצירתיות.",
          en: "No — it frees the team from repetitive tasks so they can focus on work that requires human judgment and creativity.",
        },
      },
    ],
  },
  {
    slug: "chatbots",
    name: { he: "צ׳אטבוטים", en: "Chatbots" },
    title: {
      he: "צ׳אטבוטים חכמים — WhatsApp, אתר וסוכני AI | בלוג COYA",
      en: "Smart Chatbots — WhatsApp, Web & AI Agents | COYA Blog",
    },
    description: {
      he: "מדריכים לבניית צ׳אטבוטים מבוססי AI לוואטסאפ, אתר ו-CRM. איך להימנע מטעויות, לתחזק ולמדוד ביצועים.",
      en: "Guides for building AI chatbots for WhatsApp, the web, and CRM. How to avoid mistakes, maintain, and measure performance.",
    },
    intro: {
      he: "כל מה שצריך כדי לבנות ולתחזק צ׳אטבוט אמין — מבוט FAQ פשוט ועד סוכן AI שמנהל שיחות מלאות.",
      en: "Everything you need to build and maintain a reliable chatbot — from a simple FAQ bot to an AI agent that runs full conversations.",
    },
    topics: {
      he: ["WhatsApp Business API", "GPT Chatbots", "Voice Agents", "Intent Recognition", "Handover"],
      en: ["WhatsApp Business API", "GPT Chatbots", "Voice Agents", "Intent Recognition", "Handover"],
    },
    faqs: [
      {
        q: { he: "צ׳אטבוט יכול להחליף נציג שירות?", en: "Can a chatbot replace a support rep?" },
        a: {
          he: "בטיפול בפניות רוטיניות — כן. בפניות מורכבות, הבוט מסייע בסיווג ומעביר לנציג עם כל ההקשר.",
          en: "For routine inquiries — yes. For complex ones the bot classifies and hands off to a rep with full context.",
        },
      },
      {
        q: { he: "מה עדיף — בוט חוקים או בוט GPT?", en: "Rule-based bot or GPT bot — which is better?" },
        a: {
          he: "משולב. בוט חוקים לתהליכים דטרמיניסטיים (הזמנת תור, סטטוס משלוח) ו-GPT לשאלות פתוחות.",
          en: "A hybrid. Rule-based for deterministic flows (booking, order status) and GPT for open-ended questions.",
        },
      },
    ],
  },
  {
    slug: "n8n",
    name: { he: "n8n", en: "n8n" },
    title: {
      he: "n8n — מדריכים, workflows ואינטגרציות | בלוג COYA",
      en: "n8n — Guides, Workflows & Integrations | COYA Blog",
    },
    description: {
      he: "מדריכי n8n מעשיים: בניית workflows, אינטגרציות API, שילוב עם AI וניהול Self-Hosted.",
      en: "Practical n8n guides: building workflows, API integrations, AI integration, and self-hosted management.",
    },
    intro: {
      he: "n8n היא פלטפורמת האוטומציה הגמישה ביותר לעסקים טכניים. במדריכים כאן — איך לבנות תהליכים מהירים, בטוחים וניתנים לתחזוקה.",
      en: "n8n is the most flexible automation platform for technical businesses. These guides cover fast, safe, maintainable workflows.",
    },
    topics: {
      he: ["n8n Workflows", "Self-Hosting", "Webhooks", "API Integrations", "Error Handling", "n8n + AI"],
      en: ["n8n Workflows", "Self-Hosting", "Webhooks", "API Integrations", "Error Handling", "n8n + AI"],
    },
    faqs: [
      {
        q: { he: "n8n או Make — מה עדיף?", en: "n8n or Make — which is better?" },
        a: {
          he: "n8n מתאים לצוותים טכניים שרוצים שליטה מלאה ו-self-hosting. Make ידידותי יותר למי שרוצה פחות קוד.",
          en: "n8n fits technical teams that want full control and self-hosting. Make is friendlier for lower-code users.",
        },
      },
      {
        q: { he: "n8n מתאים לפרודקשן?", en: "Is n8n production-ready?" },
        a: {
          he: "כן — עם הגדרות נכונות של queue mode, PostgreSQL ומעקב שגיאות, n8n משרתת אלפי workflows בפרודקשן.",
          en: "Yes — with the right queue mode, PostgreSQL, and error tracking, n8n serves thousands of production workflows.",
        },
      },
    ],
  },
  {
    slug: "make",
    name: { he: "Make", en: "Make" },
    title: {
      he: "Make (Integromat) — מדריכים ותרחישים | בלוג COYA",
      en: "Make (Integromat) — Guides & Scenarios | COYA Blog",
    },
    description: {
      he: "מדריכי Make מעשיים לבניית תרחישי אוטומציה — CRM, מיילים, שיווק, WhatsApp ו-Google Workspace.",
      en: "Practical Make guides for building automation scenarios — CRM, email, marketing, WhatsApp, and Google Workspace.",
    },
    intro: {
      he: "Make הופכת אוטומציה לפשוטה ונגישה. המדריכים כאן מתמקדים בתרחישים אמיתיים שעסקים מפעילים בפרודקשן.",
      en: "Make makes automation simple and accessible. These guides focus on real scenarios businesses run in production.",
    },
    topics: {
      he: ["Make Scenarios", "Data Stores", "Error Handlers", "Webhooks", "Iterators", "Aggregators"],
      en: ["Make Scenarios", "Data Stores", "Error Handlers", "Webhooks", "Iterators", "Aggregators"],
    },
    faqs: [
      {
        q: { he: "כמה תרחישים אפשר להריץ בו זמנית?", en: "How many scenarios can run in parallel?" },
        a: {
          he: "תלוי בתוכנית. בתוכניות בתשלום ניתן להריץ עשרות תרחישים במקביל עם תזמון גמיש.",
          en: "Depends on the plan. Paid plans run dozens of scenarios in parallel with flexible scheduling.",
        },
      },
      {
        q: { he: "האם Make יקר?", en: "Is Make expensive?" },
        a: {
          he: "לרוב העסקים העלות נמוכה משעה של עבודה ידנית בחודש — ה-ROI מיידי.",
          en: "For most businesses it costs less than an hour of manual work per month — the ROI is immediate.",
        },
      },
    ],
  },
  {
    slug: "marketing",
    name: { he: "שיווק דיגיטלי", en: "Digital Marketing" },
    title: {
      he: "שיווק דיגיטלי לעסקים — מדריכים ואסטרטגיות | בלוג COYA",
      en: "Digital Marketing for Business — Guides & Strategies | COYA Blog",
    },
    description: {
      he: "אסטרטגיות שיווק דיגיטלי לעסקים קטנים ובינוניים — פרסום ממומן, תוכן, מיילים, וניתוח נתונים.",
      en: "Digital marketing strategies for small and mid-sized businesses — paid ads, content, email, and analytics.",
    },
    intro: {
      he: "מדריכי שיווק שמבוססים על נתונים, לא על באזוורדס. איך לבנות משפך שמייצר לידים איכותיים בעלות סבירה.",
      en: "Marketing guides based on data, not buzzwords. How to build a funnel that generates quality leads at a reasonable cost.",
    },
    topics: {
      he: ["Meta Ads", "Google Ads", "Email Marketing", "Content Marketing", "Attribution", "GA4"],
      en: ["Meta Ads", "Google Ads", "Email Marketing", "Content Marketing", "Attribution", "GA4"],
    },
    faqs: [
      {
        q: { he: "איפה להתחיל בשיווק דיגיטלי?", en: "Where should I start with digital marketing?" },
        a: {
          he: "בדרך כלל SEO + Google Ads על ביטויים מסחריים נותנים את ה-ROI המהיר ביותר לעסקים חדשים.",
          en: "Usually SEO + Google Ads on commercial keywords deliver the fastest ROI for new businesses.",
        },
      },
      {
        q: { he: "כמה תקציב שיווק מתאים לעסק קטן?", en: "How much marketing budget fits a small business?" },
        a: {
          he: "כלל אצבע: 5–10% מהמחזור. הצעד החשוב יותר הוא מעקב אחרי CAC ו-LTV, לא רק סך ההוצאה.",
          en: "Rule of thumb: 5–10% of revenue. More important than total spend is tracking CAC and LTV.",
        },
      },
    ],
  },
  {
    slug: "seo",
    name: { he: "SEO", en: "SEO" },
    title: {
      he: "קידום אתרים אורגני (SEO) — מדריכים ואסטרטגיות | בלוג COYA",
      en: "Organic SEO — Guides & Strategies | COYA Blog",
    },
    description: {
      he: "מדריכי SEO טכניים ותכניים לעסקים: בניית תוכן, קידום מקומי, Core Web Vitals ומדידת תוצאות.",
      en: "Technical and content SEO guides for businesses: content building, local SEO, Core Web Vitals, and measurement.",
    },
    intro: {
      he: "SEO הוא ההשקעה הכי משתלמת בשיווק דיגיטלי. במדריכים כאן — טכניקות מוכחות לקידום אורגני שמחזיק לאורך שנים.",
      en: "SEO is the highest-ROI investment in digital marketing. These guides cover proven techniques for organic growth that lasts years.",
    },
    topics: {
      he: ["Technical SEO", "Content SEO", "Local SEO", "Backlinks", "Core Web Vitals", "Schema Markup"],
      en: ["Technical SEO", "Content SEO", "Local SEO", "Backlinks", "Core Web Vitals", "Schema Markup"],
    },
    faqs: [
      {
        q: { he: "כמה זמן לוקח לראות תוצאות SEO?", en: "How long does SEO take to show results?" },
        a: {
          he: "בדרך כלל 3–6 חודשים לביטויים בינוניים, 6–12 חודשים לביטויים תחרותיים. תוצאות מקומיות מגיעות מהר יותר.",
          en: "Usually 3–6 months for mid-competition keywords, 6–12 months for competitive ones. Local results appear faster.",
        },
      },
      {
        q: { he: "האם SEO עדיין רלוונטי בעידן AI?", en: "Is SEO still relevant in the AI era?" },
        a: {
          he: "יותר מתמיד. מנועי חיפוש מבוססי AI (SGE, Perplexity) עדיין מסתמכים על תוכן איכותי ומבנה טכני נכון.",
          en: "More than ever. AI-powered search (SGE, Perplexity) still relies on quality content and sound technical structure.",
        },
      },
    ],
  },
];

// Backwards-compat: Hebrew default export (used by SSR head() functions).
export const BLOG_CATEGORIES: BlogCategory[] = BLOG_CATEGORIES_I18N.map((c) => ({
  slug: c.slug,
  name: c.name.he,
  title: c.title.he,
  description: c.description.he,
  intro: c.intro.he,
  topics: c.topics.he,
  faqs: c.faqs.map((f) => ({ q: f.q.he, a: f.a.he })),
}));

export function getCategory(slug: string) {
  return BLOG_CATEGORIES.find((c) => c.slug === slug);
}

export function getCategoryI18n(slug: string) {
  return BLOG_CATEGORIES_I18N.find((c) => c.slug === slug);
}

/** Localize a category for the given lang. */
export function localizeCategory(c: LocalizedBlogCategory, lang: "he" | "en"): BlogCategory {
  return {
    slug: c.slug,
    name: c.name[lang],
    title: c.title[lang],
    description: c.description[lang],
    intro: c.intro[lang],
    topics: c.topics[lang],
    faqs: c.faqs.map((f) => ({ q: f.q[lang], a: f.a[lang] })),
  };
}
