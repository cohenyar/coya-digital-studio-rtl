import { MessageCircle } from "lucide-react";
import { WA_LINK } from "./Header";

export function WhatsAppFloat() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="פתח וואטסאפ"
      className="fixed bottom-6 left-6 z-40 h-14 w-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_10px_40px_-5px_rgba(37,211,102,0.6)] hover:scale-110 transition"
    >
      <MessageCircle className="size-7 text-white" />
    </a>
  );
}
