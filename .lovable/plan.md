Plan: Create dedicated AI service pages

1. Scope & URLs
   - Create 4 new shareable routes so every AI service card leads to its own page instead of the generic `/ai` automation page:
     - `/ai-systems` — הטמעת מערכות AI לעסק
     - `/ai-avatars` — בניית דמויות AI
     - `/ai-ads` — פרסומות AI
     - `/ai-videos` — סרטוני AI
   - Keep the existing `/ai` page as the automation overview.

2. Content
   - Write professional Hebrew/English copy for each page: hero, key benefits, what’s included, process/approach, and CTA.
   - Reuse the existing `ServiceHero` and `CTABlock` components from `websites.tsx` to maintain the current design.

3. SEO & metadata per page
   - Unique title, description, keywords, og:title, og:description, og:url, canonical, and JSON-LD (WebPage + BreadcrumbList).
   - Keep the existing shared `og:image` unless a unique image is requested later.

4. Navigation updates
   - Update homepage service cards so each card links to its own dedicated page.
   - Update the mobile menu and footer service lists to point to the new routes.
   - Add internal links from `/ai` to the new pages so users can still discover them from the overview.

5. Sitemap
   - Add the 4 new URLs to `src/routes/sitemap[.]xml.ts` with priority 0.9.

6. Verification
   - Build the app in dev mode and navigate to each new route to confirm rendering, links, and metadata.

No design overhaul — the new pages will reuse the existing glass-card, gradient, and button styles.