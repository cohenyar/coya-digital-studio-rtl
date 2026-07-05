import { Globe } from "lucide-react";
import { useI18n } from "@/lib/i18n";

type Props = {
  variant?: "desktop" | "mobile";
  className?: string;
};

export function LanguageSwitcher({ variant = "desktop", className = "" }: Props) {
  const { lang, setLang, t } = useI18n();
  const next = lang === "he" ? "en" : "he";
  const nextLabel = next === "he" ? "עברית" : "English";
  const shortLabel = next === "he" ? "עב" : "EN";

  if (variant === "mobile") {
    return (
      <button
        type="button"
        onClick={() => setLang(next)}
        aria-label={`${t("lang.switch")}: ${nextLabel}`}
        dir="ltr"
        className={[
          "inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm text-white/80 hover:text-white hover:bg-white/5 border border-border/60 self-start",
          className,
        ].join(" ")}
      >
        <Globe className="size-4" />
        <span>{nextLabel}</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLang(next)}
      aria-label={`${t("lang.switch")}: ${nextLabel}`}
      title={nextLabel}
      dir="ltr"
      className={[
        "inline-flex items-center gap-1 h-8 px-2 rounded-md text-xs text-white/70 hover:text-white hover:bg-white/5 border border-border/60 bg-white/[0.02] backdrop-blur transition",
        className,
      ].join(" ")}
    >
      <Globe className="size-3.5" />
      <span className="font-medium leading-none">{shortLabel}</span>
    </button>
  );
}
