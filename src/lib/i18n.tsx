import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "he" | "en";

type Dict = Record<string, { he: string; en: string }>;

export const translations: Dict = {
  // Nav
  "nav.home": { he: "בית", en: "Home" },
  "nav.websites": { he: "בניית אתרים", en: "Websites" },
  "nav.landing": { he: "דפי נחיתה", en: "Landing Pages" },
  "nav.ai": { he: "AI ואוטומציות", en: "AI & Automation" },
  "nav.blog": { he: "בלוג", en: "Blog" },
  "nav.contact": { he: "צור קשר", en: "Contact" },

  // Header CTAs
  "cta.whatsapp": { he: "וואטסאפ", en: "WhatsApp" },
  "cta.whatsapp.long": { he: "דברו איתנו בוואטסאפ", en: "Chat with us on WhatsApp" },
  "aria.menu": { he: "תפריט", en: "Menu" },

  // Language switcher
  "lang.hebrew": { he: "עברית", en: "Hebrew" },
  "lang.english": { he: "אנגלית", en: "English" },
  "lang.switch": { he: "החלפת שפה", en: "Change language" },

  // Footer
  "footer.tagline": {
    he: "סטודיו דיגיטלי לבניית אתרים, דפי נחיתה ואוטומציות AI לעסקים שרוצים להיראות מקצועיים ולייצר תוצאות.",
    en: "Digital studio building websites, landing pages, and AI automation for businesses that want to look professional and drive results.",
  },
  "footer.services": { he: "שירותים", en: "Services" },
  "footer.blog": { he: "בלוג", en: "Blog" },
  "footer.info": { he: "מידע", en: "Info" },
  "footer.contact": { he: "יצירת קשר", en: "Contact" },
  "footer.allPosts": { he: "כל הפוסטים", en: "All posts" },
  "footer.terms": { he: "תנאי שימוש", en: "Terms" },
  "footer.privacy": { he: "מדיניות פרטיות", en: "Privacy Policy" },
  "footer.accessibility": { he: "הצהרת נגישות", en: "Accessibility" },
  "footer.rights": { he: "כל הזכויות שמורות.", en: "All rights reserved." },
  "footer.israel": { he: "ישראל", en: "Israel" },
};

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof translations) => string;
  dir: "rtl" | "ltr";
};

const I18nContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "coya.lang";

function detectInitial(): Lang {
  if (typeof window === "undefined") return "he";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "he" || stored === "en") return stored;
  } catch {}
  const browser = (navigator.language || "he").toLowerCase();
  return browser.startsWith("he") ? "he" : "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("he");

  // Hydrate from storage/browser once mounted (client-only).
  useEffect(() => {
    const initial = detectInitial();
    setLangState(initial);
  }, []);

  // Reflect on <html>.
  useEffect(() => {
    if (typeof document === "undefined") return;
    const dir = lang === "he" ? "rtl" : "ltr";
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", dir);
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { window.localStorage.setItem(STORAGE_KEY, l); } catch {}
  };

  const value = useMemo<Ctx>(() => ({
    lang,
    setLang,
    dir: lang === "he" ? "rtl" : "ltr",
    t: (key) => translations[key]?.[lang] ?? String(key),
  }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): Ctx {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    // Safe fallback so components don't crash if used outside provider (e.g., SSR shell).
    return {
      lang: "he",
      setLang: () => {},
      dir: "rtl",
      t: (key) => translations[key]?.he ?? String(key),
    };
  }
  return ctx;
}
