import { useEffect, useState } from "react";
import { Accessibility, X, RotateCcw } from "lucide-react";

type Settings = {
  size: "small" | "normal" | "large" | "xlarge";
  contrast: boolean;
  invert: boolean;
  dyslexia: boolean;
};

const DEFAULT: Settings = { size: "normal", contrast: false, invert: false, dyslexia: false };

function apply(s: Settings) {
  const html = document.documentElement;
  html.classList.remove("a11y-small", "a11y-large", "a11y-xlarge", "a11y-contrast", "a11y-invert", "a11y-dyslexia");
  if (s.size === "small") html.classList.add("a11y-small");
  if (s.size === "large") html.classList.add("a11y-large");
  if (s.size === "xlarge") html.classList.add("a11y-xlarge");
  if (s.contrast) html.classList.add("a11y-contrast");
  if (s.invert) html.classList.add("a11y-invert");
  if (s.dyslexia) html.classList.add("a11y-dyslexia");
}

export function AccessibilityPanel() {
  const [open, setOpen] = useState(false);
  const [s, setS] = useState<Settings>(DEFAULT);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("coya_a11y");
      if (saved) {
        const parsed = JSON.parse(saved);
        setS(parsed);
        apply(parsed);
      }
    } catch {}
  }, []);

  const update = (n: Settings) => {
    setS(n);
    apply(n);
    try { localStorage.setItem("coya_a11y", JSON.stringify(n)); } catch {}
  };

  const sizes: Settings["size"][] = ["small", "normal", "large", "xlarge"];
  const sizeIdx = sizes.indexOf(s.size);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label="פאנל נגישות"
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-primary flex items-center justify-center shadow-[0_10px_40px_-5px_rgba(124,58,237,0.7)] hover:scale-110 transition"
      >
        {open ? <X className="size-6 text-white" /> : <Accessibility className="size-6 text-white" />}
      </button>
      {open && (
        <div className="fixed bottom-24 right-6 z-40 w-80 glass-card rounded-2xl p-5 shadow-2xl">
          <h3 className="font-display font-bold mb-4">הגדרות נגישות</h3>
          <div className="space-y-3">
            <div className="flex gap-2">
              <button
                disabled={sizeIdx >= sizes.length - 1}
                onClick={() => update({ ...s, size: sizes[Math.min(sizeIdx + 1, sizes.length - 1)] })}
                className="flex-1 btn-ghost !py-2 text-sm disabled:opacity-40"
              >הגדל טקסט</button>
              <button
                disabled={sizeIdx <= 0}
                onClick={() => update({ ...s, size: sizes[Math.max(sizeIdx - 1, 0)] })}
                className="flex-1 btn-ghost !py-2 text-sm disabled:opacity-40"
              >הקטן טקסט</button>
            </div>
            <button onClick={() => update({ ...s, contrast: !s.contrast })} className={`w-full btn-ghost !py-2 text-sm ${s.contrast ? "!border-primary !bg-primary/20" : ""}`}>ניגודיות גבוהה</button>
            <button onClick={() => update({ ...s, invert: !s.invert })} className={`w-full btn-ghost !py-2 text-sm ${s.invert ? "!border-primary !bg-primary/20" : ""}`}>ניגודיות הפוכה</button>
            <button onClick={() => update({ ...s, dyslexia: !s.dyslexia })} className={`w-full btn-ghost !py-2 text-sm ${s.dyslexia ? "!border-primary !bg-primary/20" : ""}`}>גופן ידידותי לדיסלקציה</button>
            <button onClick={() => update(DEFAULT)} className="w-full flex items-center justify-center gap-2 text-sm text-white/60 hover:text-white pt-2">
              <RotateCcw className="size-4" /> איפוס הגדרות
            </button>
          </div>
        </div>
      )}
    </>
  );
}
