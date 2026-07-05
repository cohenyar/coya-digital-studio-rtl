import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { WA_LINK } from "./Header";
import coyaLogo from "@/assets/coya-logo.png.asset.json";
import { BLOG_CATEGORIES_I18N } from "@/lib/blog";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t, lang } = useI18n();
  return (
    <footer className="border-t border-border mt-24 bg-[#08080a]">
      <div className="container-x py-16 grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <img src={coyaLogo.url} alt="COYA Digital Studio" className="h-12 w-12 object-contain" />
            <span className="font-display font-bold text-xl">COYA</span>
          </div>
          <p className="text-sm text-white/60 leading-relaxed">{t("footer.tagline")}</p>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/50">{t("footer.services")}</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/websites" className="text-white/70 hover:text-white">{t("nav.websites")}</Link></li>
            <li><Link to="/landing" className="text-white/70 hover:text-white">{t("nav.landing")}</Link></li>
            <li><Link to="/ai" className="text-white/70 hover:text-white">{t("nav.ai")}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/50">{t("footer.blog")}</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/blog" className="text-white/70 hover:text-white">{t("footer.allPosts")}</Link></li>
            {BLOG_CATEGORIES_I18N.slice(0, 5).map((c) => (
              <li key={c.slug}>
                <Link to="/blog/$category" params={{ category: c.slug }} className="text-white/70 hover:text-white">
                  {c.name[lang]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/50">{t("footer.info")}</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact" className="text-white/70 hover:text-white">{t("nav.contact")}</Link></li>
            <li><Link to="/terms" className="text-white/70 hover:text-white">{t("footer.terms")}</Link></li>
            <li><Link to="/privacy" className="text-white/70 hover:text-white">{t("footer.privacy")}</Link></li>
            <li><Link to="/accessibility" className="text-white/70 hover:text-white">{t("footer.accessibility")}</Link></li>
          </ul>
        </div>
      </div>

      <div className="container-x pb-8">
        <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/50">{t("footer.contact")}</h3>
        <ul className="flex flex-wrap gap-6 text-sm">
          <li>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white" aria-label={t("cta.whatsapp.long")}>
              <MessageCircle className="size-4 text-primary" aria-hidden /> {t("cta.whatsapp")}
            </a>
          </li>
          <li>
            <a href="mailto:cohenyar21@gmail.com" className="flex items-center gap-2 text-white/70 hover:text-white">
              <Mail className="size-4 text-primary" aria-hidden /> cohenyar21@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-2 text-white/70">
            <MapPin className="size-4 text-primary" aria-hidden /> {t("footer.israel")}
          </li>
        </ul>
      </div>

      <div className="border-t border-border py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} &nbsp;COYA Studio Ai. {t("footer.rights")}
      </div>
    </footer>
  );
}
