import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import coyaLogo from "@/assets/coya-logo.png.asset.json";


const nav = [
  { to: "/", label: "בית" },
  { to: "/websites", label: "בניית אתרים" },
  { to: "/landing", label: "דפי נחיתה" },
  { to: "/ai", label: "AI ואוטומציות" },
  { to: "/contact", label: "צור קשר" },
];

export const WA_PHONE = "972545509927";
export const WA_MSG = encodeURIComponent(
  "היי, אשמח לשמוע פרטים על בניית אתר / דף נחיתה / אוטומציה לעסק שלי."
);
export const WA_LINK = `https://wa.me/${WA_PHONE}?text=${WA_MSG}`;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 backdrop-blur-xl bg-background/70">
      <div className="container-x flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={coyaLogo.url} alt="COYA AI Solutions" className="h-10 w-10 rounded-lg object-cover" />
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

        <div className="flex items-center gap-2">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex btn-primary !py-2 !px-4 text-sm"
          >
            <MessageCircle className="size-4" />
            וואטסאפ
          </a>
          <button
            className="md:hidden p-2 text-white"
            aria-label="תפריט"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container-x py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-md"
              >
                {n.label}
              </Link>
            ))}
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-primary mt-2">
              <MessageCircle className="size-4" /> דברו איתנו בוואטסאפ
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
