# Daily ranking + weekly email

Recipient: ashvak.realtor07@gmail.com  
Site: https://ashvaksheik.com

## Daily (ranking agent) — 9:00–10:00 AM Eastern

Run every day at 9:00 AM Eastern (Cloud Automation cron). Finish by ~10:00 AM.

Do one concrete ranking improvement for Google + AI search (ChatGPT, Claude, Perplexity, Gemini, AI Overviews), then stop. Do not invent awards.

Rotation:

1. Technical gaps from the latest weekly report
2. One neighborhood or city landing page
3. FAQ / GEO answer that AI engines can cite
4. Blog metadata, author, Article schema
5. Internal links from footer, menu, and related pages
6. Alt text, H1s, sitemap, llms.txt

After a change: `npm run build`. Commit and push to `main` so Vercel goes live (Ashvak asked for autonomous ranking deploys).

## Weekly (Monday report only)

**Email Ashvak once per week — Mondays only.** Do not email mid-week when doing daily ranking work. Mid-week audits may print locally; they must not send mail unless Ashvak asked.

Run on Monday (or with `SEND_EMAIL=1` only if he asked for a one-off):

```bash
SITE_URL=https://ashvaksheik.com REPORT_TO=ashvak.realtor07@gmail.com node scripts/seo-weekly-report.mjs
```

If `RESEND_API_KEY` is set, the script emails only on Mondays Eastern (or when `SEND_EMAIL=1`). GitHub Action `.github/workflows/seo-weekly-report.yml` is meant for Mondays at 9 AM Eastern.

Report must include: pages checked, missing titles/descriptions/canonicals, H1 counts, JSON-LD presence, sitemap/robots/llms.txt status, and next week's 5 priorities.
