import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { WhatsAppFloat } from "../components/site/WhatsAppFloat";
import { CookiesNotice } from "../components/site/CookiesNotice";
import { AccessibilityPanel } from "../components/site/AccessibilityPanel";
import { OG_IMAGE_URL, SITE_URL, organizationJsonLd, websiteJsonLd } from "../lib/seo";

function NotFoundComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-24">
        <div className="text-center max-w-lg">
          <h1 className="text-8xl md:text-9xl font-display font-bold text-gradient">404</h1>
          <h2 className="mt-6 text-2xl font-display font-bold">הדף לא נמצא</h2>
          <p className="mt-3 text-white/60">הדף שחיפשתם לא קיים או הועבר למקום אחר.</p>
          <div className="mt-8">
            <Link to="/" className="btn-primary">חזרה לדף הבית</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-display font-bold">משהו השתבש</h1>
        <p className="mt-2 text-white/60">אנא נסו לרענן את הדף.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-primary">נסה שוב</button>
          <a href="/" className="btn-ghost">חזרה לבית</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "COYA Digital Studio | בניית אתרים, דפי נחיתה ואוטומציות AI" },
      { name: "description", content: "סטודיו דיגיטלי לבניית אתרים, דפי נחיתה ואוטומציות AI לעסקים שרוצים להיראות מקצועיים, לחסוך זמן ולהגדיל פניות." },
      { name: "theme-color", content: "#050505" },
      { property: "og:title", content: "COYA Digital Studio | בניית אתרים, דפי נחיתה ואוטומציות AI" },
      { property: "og:description", content: "סטודיו דיגיטלי לבניית אתרים, דפי נחיתה ואוטומציות AI לעסקים." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "COYA Digital Studio" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppFloat />
        <AccessibilityPanel />
        <CookiesNotice />
      </div>
    </QueryClientProvider>
  );
}
