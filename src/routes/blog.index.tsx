import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeader } from "../components/site/Section";
import { Breadcrumbs } from "../components/site/Breadcrumbs";
import { BLOG_CATEGORIES, BLOG_CATEGORIES_I18N } from "../lib/blog";
import {
  buildMeta,
  canonicalLink,
  breadcrumbJsonLd,
  webPageJsonLd,
} from "../lib/seo";
import { ArrowLeft, BookOpen } from "lucide-react";
import { useI18n, useTr } from "@/lib/i18n";

const PATH = "/blog";
const TITLE = "בלוג COYA — AI, בניית אתרים, אוטומציות ו-SEO לעסקים";
const DESCRIPTION =
  "מדריכים, מקרי בוחן וכלים פרקטיים לבעלי עסקים: בינה מלאכותית, בניית אתרים, דפי נחיתה, אוטומציה עסקית, n8n, Make, שיווק דיגיטלי ו-SEO.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: buildMeta({
      title: TITLE,
      description: DESCRIPTION,
      path: PATH,
      keywords:
        "בלוג AI, בלוג בניית אתרים, אוטומציה עסקית, n8n, Make, SEO, שיווק דיגיטלי, צ׳אטבוטים",
    }),
    links: [canonicalLink(PATH)],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(webPageJsonLd(TITLE, PATH, DESCRIPTION)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([{ name: "בית", path: "/" }, { name: "בלוג", path: PATH }])
        ),
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const { lang } = useI18n();
  const tr = useTr();
  return (
    <>
      <Breadcrumbs items={[{ name: tr("בלוג", "Blog") }]} />
      <Section>
        <SectionHeader
          eyebrow={tr("בלוג COYA", "COYA Blog")}
          title={tr("ידע מעשי לבעלי עסקים בעולם הדיגיטלי", "Practical knowledge for business owners in the digital world")}
          subtitle={tr(
            "מדריכים בעברית, מבוססים על ניסיון בשטח — בלי באזוורדס. AI, אוטומציה, בניית אתרים, SEO ושיווק דיגיטלי.",
            "Field-tested guides — no buzzwords. AI, automation, website development, SEO, and digital marketing."
          )}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {BLOG_CATEGORIES_I18N.map((c) => {
            const original = BLOG_CATEGORIES.find(x => x.slug === c.slug)!;
            return (
              <Link
                key={c.slug}
                to="/blog/$category"
                params={{ category: c.slug }}
                className="group card-glass p-6 hover:border-primary/50 transition"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                    <BookOpen className="size-5 text-primary" aria-hidden />
                  </div>
                  <h2 className="font-display font-bold text-lg">{c.name[lang]}</h2>
                </div>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">{c.description[lang]}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-primary group-hover:gap-2 transition-all">
                  {tr("לקטגוריה", "View category")} <ArrowLeft className="size-4" aria-hidden />
                </span>
                {/* Preserve original for SSR fallback */}
                <span className="sr-only">{original.name}</span>
              </Link>
            );
          })}
        </div>
      </Section>
    </>
  );
}
