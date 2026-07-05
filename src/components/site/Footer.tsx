import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { WA_LINK } from "./Header";
import coyaLogo from "@/assets/coya-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border mt-24 bg-[#08080a]">
      <div className="container-x py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={coyaLogo.url} alt="COYA AI Solutions" className="h-12 w-12 object-contain" />
            <span className="font-display font-bold text-xl">COYA</span>
          </div>
          <p className="text-sm text-white/60 leading-relaxed">
            סטודיו דיגיטלי לבניית אתרים, דפי נחיתה ואוטומציות AI לעסקים שרוצים להיראות מקצועיים ולייצר תוצאות.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/50">שירותים</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/websites" className="text-white/70 hover:text-white">בניית אתרים</Link></li>
            <li><Link to="/landing" className="text-white/70 hover:text-white">דפי נחיתה</Link></li>
            <li><Link to="/ai" className="text-white/70 hover:text-white">AI ואוטומציות</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/50">מידע</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact" className="text-white/70 hover:text-white">צור קשר</Link></li>
            <li><Link to="/terms" className="text-white/70 hover:text-white">תנאי שימוש</Link></li>
            <li><Link to="/privacy" className="text-white/70 hover:text-white">מדיניות פרטיות</Link></li>
            <li><Link to="/accessibility" className="text-white/70 hover:text-white">הצהרת נגישות</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/50">יצירת קשר</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white">
                <MessageCircle className="size-4 text-primary" /> וואטסאפ
              </a>
            </li>
            <li>
              <a href="mailto:cohenyar21@gmail.com" className="flex items-center gap-2 text-white/70 hover:text-white">
                <Mail className="size-4 text-primary" /> cohenyar21@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2 text-white/70">
              <MapPin className="size-4 text-primary" /> ישראל
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} COYA Studio Ai. כל הזכויות שמורות.
      </div>
    </footer>
  );
}
