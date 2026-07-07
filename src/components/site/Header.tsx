import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
const coyaLogo = { url: "/images/coya-logo.png" };
import { useI18n } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const WA_PHONE = "972545509927";
export const WA_MSG = encodeURIComponent(
  "היי, אשמח לשמוע פרטים על בניית אתר / דף נחיתה / אוטומציה לעסק שלי."
);
export const WA_LINK = `https://wa.me/${WA_PHONE}?text=${WA_MSG}`;

export function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  const nav = [
    { to: "/", label: t("nav.home") },
    { to: "/websites", label: t("nav.websites") },
    { to: "/landing", label: t("nav.landing") },
    { to: "/ai", label: t("nav.ai") },
    { to: "/blog", label: t("nav.blog") },
    { to: "/contact", label: t("nav.contact") },
  ];

  const serviceGroups = [
    {
      title: t("nav.services"),
      links: [
        { to: "/websites", label: t("nav.websites") },
        { to: "/landing", label: t("nav.landing") },
        { to: "/ai", label: t("nav.ai") },
      ],
    },
    {
      title: t("nav.allServices"),
      links: [
        { to: "/ai-systems", label: t("nav.aiForBusiness") },
        { to: "/ai-avatars", label: t("nav.aiAvatars") },
        { to: "/ai-ads", label: t("nav.aiAds") },
        { to: "/ai-videos", label: t("nav.aiVideos") },
        { to: "/ai", label: t("nav.automation") },
        { to: "/ai", label: t("nav.chatbots") },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 backdrop-blur-xl bg-background/70">
      <div className="container-x flex items-center justify-between h-16 gap-3">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={coyaLogo.url} alt="COYA AI Solutions" className="h-12 w-12 object-contain" />
          <span className="font-display font-bold text-xl tracking-tight">COYA</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 text-sm text-white/70 hover:text-white transition rounded-md"
              activeProps={{ className: "px-3 py-2 text-sm text-white rounded-md bg-white/5" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* End-of-row group: maps to top-left in RTL (he) and top-right in LTR (en). */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher className="hidden md:inline-flex" />
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex btn-primary !py-2 !px-4 text-sm"
          >
            <MessageCircle className="size-4" />
            {t("cta.whatsapp")}
          </a>
          <button
            className="md:hidden p-2 text-white"
            aria-label={t("aria.menu")}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container-x py-4 flex flex-col gap-4">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-md"
            >
              {t("nav.home")}
            </Link>
            {serviceGroups.map((group) => (
              <div key={group.title}>
                <p className="px-3 text-xs font-semibold uppercase tracking-wider text-white/40 mb-1">
                  {group.title}
                </p>
                <div className="flex flex-col gap-0.5">
                  {group.links.map((n) => (
                    <Link
                      key={n.label}
                      to={n.to}
                      onClick={() => setOpen(false)}
                      className="px-3 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-md"
                    >
                      {n.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div>
              <p className="px-3 text-xs font-semibold uppercase tracking-wider text-white/40 mb-1">
                {t("nav.blog")}
              </p>
              <Link
                to="/blog"
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-md block"
              >
                {t("nav.blog")}
              </Link>
            </div>
            <div>
              <p className="px-3 text-xs font-semibold uppercase tracking-wider text-white/40 mb-1">
                {t("nav.contact")}
              </p>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-md block"
              >
                {t("nav.contact")}
              </Link>
            </div>
            <div className="pt-3 border-t border-border/60">
              <LanguageSwitcher variant="mobile" />
            </div>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-primary mt-1">
              <MessageCircle className="size-4" /> {t("cta.whatsapp.long")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
