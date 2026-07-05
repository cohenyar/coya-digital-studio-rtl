import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section, SectionHeader } from "../components/site/Section";
import { Breadcrumbs } from "../components/site/Breadcrumbs";
import { BLOG_CATEGORIES, getCategory } from "../lib/blog";
import {
  buildMeta,
  canonicalLink,
  breadcrumbJsonLd,
  webPageJsonLd,
  faqJsonLd,
} from "../lib/seo";
import { WA_LINK } from "../components/site/Header";
import { ArrowLeft, Sparkles, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/blog/$category")({
  loader: ({ params }) => {
    const category = getCategory(params.category);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "קטגוריה לא נמצאה | בלוג COYA" },
          { name: "robots", content: "noindex, follow" },
        ],
      };
    }
    const { category } = loaderData;
    const path = `/blog/${params.category}`;
    return {
      meta: buildMeta({
        title: category.title,
        description: category.description,
        path,
        keywords: category.topics.join(", "),
      }),
      links: [canonicalLink(path)],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(webPageJsonLd(category.title, path, category.description)),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbJsonLd([
              { name: "בית", path: "/" },
              { name: "בלוג", path: "/blog" },
              { name: category.name, path },
            ])
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(faqJsonLd(category.faqs)),
        },
      ],
    };
  },
  component: CategoryPage,
  notFoundComponent: () => (
    <Section>
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-3xl font-display font-bold">קטגוריה לא נמצאה</h1>
        <p className="mt-3 text-white/60">הקטגוריה שחיפשתם אינה קיימת בבלוג שלנו.</p>
        <Link to="/blog" className="btn-primary mt-6 inline-flex">חזרה לבלוג</Link>
      </div>
    </Section>
  ),
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const otherCategories = BLOG_CATEGORIES.filter((c) => c.slug !== category.slug).slice(0, 6);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "בלוג", to: "/blog" },
          { name: category.name },
        ]}
      />

      <Section>
        <SectionHeader eyebrow={`בלוג · ${category.name}`} title={category.name} subtitle={category.intro} />

        <div className="mt-10 grid lg:grid-cols-[1fr_320px] gap-10">
          <article className="card-glass p-8">
            <h2 className="font-display font-bold text-xl mb-4">נושאים מרכזיים בקטגוריה</h2>
            <div className="flex flex-wrap gap-2">
              {category.topics.map((t: string) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-white/80"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 text-white/70 text-sm">
              <Sparkles className="size-4 text-primary" aria-hidden />
              <p>
                מאמרים חדשים בקטגוריה זו יפורסמו בקרוב. בינתיים — צרו קשר ונשמח לעזור באתגר הספציפי שלכם.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                בואו נדבר על הפרויקט שלכם
              </Link>
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-ghost">
                <MessageCircle className="size-4" /> וואטסאפ
              </a>
            </div>

            {category.faqs.length > 0 && (
              <div className="mt-10">
                <h2 className="font-display font-bold text-xl mb-4">שאלות נפוצות</h2>
                <div className="space-y-4">
                  {category.faqs.map((f: { q: string; a: string }) => (
                    <details key={f.q} className="rounded-lg border border-white/10 bg-white/5 p-4">
                      <summary className="cursor-pointer font-medium text-white">{f.q}</summary>
                      <p className="mt-2 text-sm text-white/70 leading-relaxed">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </article>

          <aside className="space-y-6">
            <div className="card-glass p-5">
              <h3 className="font-display font-bold mb-3">קטגוריות נוספות</h3>
              <ul className="space-y-2 text-sm">
                {otherCategories.map((c) => (
                  <li key={c.slug}>
                    <Link
                      to="/blog/$category"
                      params={{ category: c.slug }}
                      className="inline-flex items-center gap-1 text-white/70 hover:text-white transition"
                    >
                      <ArrowLeft className="size-3.5" aria-hidden />
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-glass p-5">
              <h3 className="font-display font-bold mb-3">שירותים קשורים</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/websites" className="text-white/70 hover:text-white">בניית אתרים לעסקים</Link></li>
                <li><Link to="/landing" className="text-white/70 hover:text-white">בניית דפי נחיתה</Link></li>
                <li><Link to="/ai" className="text-white/70 hover:text-white">AI ואוטומציות</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
