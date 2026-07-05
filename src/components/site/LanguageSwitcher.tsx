import { useI18n, type Lang } from "@/lib/i18n";

type Props = {
  variant?: "desktop" | "mobile";
  className?: string;
};

export function LanguageSwitcher({ variant = "desktop", className = "" }: Props) {
  const { lang, setLang, t } = useI18n();

  const Option = ({ code, flag, label }: { code: Lang; flag: string; label: string }) => {
    const active = lang === code;
    return (
      <button
        type="button"
        onClick={() => setLang(code)}
        aria-pressed={active}
        aria-label={`${t("lang.switch")}: ${label}`}
        className={[
          "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-sm transition",
          active
            ? "bg-white/10 text-white shadow-[inset_0_0_0_1px_hsl(var(--border))]"
            : "text-white/60 hover:text-white hover:bg-white/5",
        ].join(" ")}
      >
        <span aria-hidden className="text-base leading-none">{flag}</span>
        <span className={active ? "font-medium" : ""}>{label}</span>
      </button>
    );
  };

  return (
    <div
      role="group"
      aria-label={t("lang.switch")}
      dir="ltr"
      className={[
        "inline-flex items-center gap-0.5 rounded-lg border border-border/60 bg-white/[0.02] backdrop-blur px-1 py-0.5",
        variant === "mobile" ? "self-start" : "",
        className,
      ].join(" ")}
    >
      <Option code="he" flag="🇮🇱" label="עברית" />
      <span aria-hidden className="text-white/20 text-xs">|</span>
      <Option code="en" flag="🇺🇸" label="English" />
    </div>
  );
}
