import { useEffect, useState } from "react";

export function CookiesNotice() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem("coya_cookies")) setShow(true);
  }, []);
  if (!show) return null;
  const decide = (v: string) => {
    localStorage.setItem("coya_cookies", v);
    setShow(false);
  };
  return (
    <div className="fixed bottom-6 right-6 left-6 md:left-auto md:right-6 md:max-w-md z-40 glass-card rounded-2xl p-5 shadow-2xl">
      <p className="text-sm text-white/80 leading-relaxed mb-4">
        אנחנו משתמשים בעוגיות כדי לשפר את חוויית השימוש באתר.
      </p>
      <div className="flex gap-2">
        <button onClick={() => decide("accept")} className="btn-primary !py-2 !px-4 text-sm">מאשר</button>
        <button onClick={() => decide("decline")} className="btn-ghost !py-2 !px-4 text-sm">לא עכשיו</button>
      </div>
    </div>
  );
}
