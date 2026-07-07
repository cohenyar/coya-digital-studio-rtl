## 1. Fix contact form ("שליחה נכשלה")

The `/api/public/send-contact` route requires two env vars: `LOVABLE_API_KEY` and `GOOGLE_MAIL_API_KEY`. On the live site (Vercel) at least one is missing, so it returns 500 → "שליחה נכשלה".

Steps:

- Check server logs for the endpoint to confirm the exact failure (missing env vs Gmail API error).
- If it's the missing env on Vercel: the Gmail connector was set up in Lovable Cloud, but Vercel doesn't have those secrets. Fix options:
  - **A (recommended)**: switch the send route to use Resend (or another SMTP service) with a single `RESEND_API_KEY` secret added to both Lovable and Vercel — simpler and doesn't depend on the Lovable gateway.
  - **B**: keep Gmail gateway, and add `LOVABLE_API_KEY` + `GOOGLE_MAIL_API_KEY` as environment variables in the Vercel project settings.
- Add clearer client-side error surfacing (show server error text in dev) to debug faster next time.

I need one input from you before implementing — see clarifying question at the end.

## 2. Add two new service cards on the homepage

In `src/routes/index.tsx` (the `services` array, line 141), add two cards below "AI ואוטומציות":

- **הטמעת מערכות AI לעסק** / "AI Systems for Business" — icon `Cpu` or `Workflow`, short bilingual description (integrating GPT/AI tools into internal workflows, CRM, support, content). Links to `/ai`.
  &nbsp;

Layout stays the same grid; it will flow to a 2×2 (or wrap) on desktop automatically.

## 3. SEO content (site-wide)

The site already has strong SEO infrastructure (`src/lib/seo.ts`, per-route metadata, JSON-LD, sitemap). What I'll add:

- Bilingual copy for the new SEO service card + a small feature block on the homepage highlighting SEO capabilities.
- No new route unless you want a dedicated `/seo` page (see question).

## Clarifying questions

1. **Contact form fix** — do you want me to switch to **Resend** (you give me one API key, works everywhere) or **keep Gmail** and you'll add the two secrets in Vercel yourself?
2. **SEO card** — should it link to the existing `/websites` page, or should I create a new dedicated `**/seo**` route with full content + metadata?