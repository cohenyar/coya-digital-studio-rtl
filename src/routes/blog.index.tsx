import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeader } from "../components/site/Section";
import { Breadcrumbs } from "../components/site/Breadcrumbs";
import { BLOG_CATEGORIES } from "../lib/blog";
import {
  buildMeta,
  canonicalLink,
  breadcrumbJsonLd,
  webPageJsonLd,
} from "../lib/seo";
import { ArrowLeft, BookOpen } from "lucide-react";

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
  return (
    <>
      <Breadcrumbs items={[{ name: "בלוג" }]} />
      <Section>
        <SectionHeader
          eyebrow="בלוג COYA"
          title="ידע מעשי לבעלי עסקים בעולם הדיגיטלי"
          subtitle="מדריכים בעברית, מבוססים על ניסיון בשטח — בלי באזוורדס. AI, אוטומציה, בניית אתרים, SEO ושיווק דיגיטלי."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {BLOG_CATEGORIES.map((c) => (
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
                <h2 className="font-display font-bold text-lg">{c.name}</h2>
              </div>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">{c.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm text-primary group-hover:gap-2 transition-all">
                לקטגוריה <ArrowLeft className="size-4" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
