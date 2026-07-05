import { useEffect, useRef } from "react";
import { useRouterState } from "@tanstack/react-router";
import { gtagEvent, trackPageView } from "@/lib/analytics";
import { useI18n } from "@/lib/i18n";

export function Analytics() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { lang } = useI18n();
  const lastPath = useRef<string | null>(null);
  const lastLang = useRef<string | null>(null);

  // SPA page views
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (lastPath.current === pathname) return;
    lastPath.current = pathname;
    // Defer to allow document.title updates from head()
    const id = window.setTimeout(() => trackPageView(pathname), 60);
    return () => window.clearTimeout(id);
  }, [pathname]);

  // Language switch
  useEffect(() => {
    if (lastLang.current === null) {
      lastLang.current = lang;
      return;
    }
    if (lastLang.current !== lang) {
      gtagEvent("language_switch", { from: lastLang.current, to: lang });
      lastLang.current = lang;
    }
  }, [lang]);

  // Delegated click + submit tracking
  useEffect(() => {
    if (typeof window === "undefined") return;
    const host = window.location.hostname;

    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (!target) return;

      const anchor = target.closest("a") as HTMLAnchorElement | null;
      if (anchor && anchor.href) {
        const href = anchor.href;
        // WhatsApp
        if (/wa\.me|api\.whatsapp\.com/i.test(href)) {
          gtagEvent("whatsapp_click", {
            link_url: href,
            link_text: (anchor.textContent || "").trim().slice(0, 120),
            link_location: anchor.getAttribute("aria-label") || undefined,
          });
          return;
        }
        // Outbound
        try {
          const url = new URL(href);
          if (url.hostname && url.hostname !== host && url.protocol.startsWith("http")) {
            gtagEvent("outbound_click", {
              link_url: href,
              link_domain: url.hostname,
              link_text: (anchor.textContent || "").trim().slice(0, 120),
            });
          }
        } catch {
          /* ignore */
        }
      }

      // CTA buttons (primary/ghost/etc. tagged via class or data attribute)
      const cta = target.closest<HTMLElement>(
        "[data-analytics-cta], .btn-primary, .btn-ghost",
      );
      if (cta) {
        gtagEvent("cta_click", {
          cta_label:
            cta.getAttribute("data-analytics-cta") ||
            (cta.textContent || "").trim().slice(0, 120),
          cta_location: window.location.pathname,
        });
      }
    };

    const onSubmit = (e: SubmitEvent) => {
      const form = e.target as HTMLFormElement | null;
      if (!form) return;
      gtagEvent("form_submit", {
        form_id: form.id || undefined,
        form_name: form.getAttribute("name") || undefined,
        form_location: window.location.pathname,
      });
    };

    document.addEventListener("click", onClick, { capture: true });
    document.addEventListener("submit", onSubmit, { capture: true });
    return () => {
      document.removeEventListener("click", onClick, { capture: true } as EventListenerOptions);
      document.removeEventListener("submit", onSubmit, { capture: true } as EventListenerOptions);
    };
  }, []);

  return null;
}
