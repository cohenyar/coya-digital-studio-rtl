## What's happening

The favicon files in `public/` (`favicon.ico` 48×48, `favicon.png`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`) already contain your new COYA logo, and `src/routes/__root.tsx` links to all of them correctly.

The colorful rainbow icon in your Google result screenshot is Google's **cached** favicon from before the update. Google re-crawls favicons on its own schedule (often 1–4 weeks) — it won't refresh just because we push code again. The most we can do from the codebase is make sure Google, when it does re-crawl, picks a crisp COYA icon.

## Plan

1. **Regenerate `public/favicon.ico` as a multi-size ICO (16, 32, 48)** from the COYA logo source. Google's guidelines prefer favicons that are a multiple of 48px and a real ICO with multiple sizes — a single 48×48 works but a multi-size ICO is safer.
2. **Add an explicit `<link rel="icon" sizes="96x96">`** in `src/routes/__root.tsx` pointing to a new `public/favicon-96.png` (96×96 is the size Google's crawler most often selects for SERP).
3. **Verify** `public/site.webmanifest` still references the COYA icons only (it currently does — no change expected unless we spot a stale entry).
4. **Do NOT touch** the header logo, `src/lib/seo.ts`, OG image, or any other branding — this is favicon-only.
5. **Tell you what to do outside the code**: after we deploy, request a recrawl via Google Search Console (URL Inspection → Request Indexing on the homepage). Without that, the SERP icon can take weeks to update even though the site is correct.

## Technical notes

- Source logo: `/mnt/user-uploads/image-4.png` (the COYA square you uploaded earlier), same one used for the current PNG icons.
- Generate with PIL: `Image.open(src).resize((N,N), LANCZOS).save(...)`; for the ICO, pass `sizes=[(16,16),(32,32),(48,48)]` to `save()`.
- New file: `public/favicon-96.png`. Overwritten file: `public/favicon.ico`.
- Root route edit: add one `links` entry, no other changes.
