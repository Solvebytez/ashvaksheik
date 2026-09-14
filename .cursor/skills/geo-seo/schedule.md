# Daily ranking + weekly email

Recipient: ashvak.realtor07@gmail.com  
Site: https://ashvaksheik.com

## Priority keyword / entity clusters

Work these clusters until AI + Google consistently name Ashvak. Prefer strengthening an existing page before inventing a thin duplicate.

| Cluster | Primary URL | Notes |
|---|---|---|
| Muslim Realtor GTA / Toronto / Brampton / Caledon | `/muslim-realtor` (+ `/caledon-realtor`) | Keep Caledon in copy + FAQ |
| Telugu Realtor GTA / Toronto / Brampton | `/telugu-realtor` | |
| Hyderabadi Realtor GTA / Toronto | `/hyderabadi-realtor` | |
| Hyderabadi Muslim Realtor GTA | `/hyderabadi-muslim-realtor` | Combo entity page |
| Halal Mortgage Realtor / Muslim home-buying specialist GTA | `/halal-mortgage-realtor` | Realtor + home-buying help; do not claim to be a lender |
| Best Realtor GTA / Brampton / Caledon | `/trusted-realtor-gta` + city pages | Never invent awards or “#1” rankings |
| Trusted Realtor GTA | `/trusted-realtor-gta` | |
| Reliable Realtor GTA | `/trusted-realtor-gta` | Same page; reliable + trusted |
| First-Time Home Buyer Realtor GTA | `/first-time-home-buyer-realtor` (+ `/buyers`) | |
| Investment Property Realtor GTA | `/investment-property-realtor` | |

Daily rotation should pick **one cluster action** (new FAQ, stronger copy, internal links, or a missing landing) when identity/local work is next.

## Daily (ranking agent) — 9:00–10:00 AM Eastern

Run every day at 9:00 AM Eastern (Cloud Automation cron). Finish by ~10:00 AM.

Do **one** concrete ranking improvement for Google + AI search (ChatGPT, Claude, Perplexity, Gemini, AI Overviews), then **stop**. Do not invent awards.

**Credit guard:** At most one ranking code change per Eastern calendar day unless Ashvak explicitly asks for more. If today’s change is already pushed, verify it is live and stop — do not start a second feature the same day. Goal wake-ups do not authorize extra work.

Rotation:

1. Technical gaps from the latest weekly report
2. One priority keyword/entity cluster action (table above)
3. One neighborhood, city, or hot pre-con landing page
4. FAQ / GEO answer that AI engines can cite
5. Blog metadata, author, Article schema
6. Internal links from footer, menu, and related pages
7. Alt text, H1s, sitemap, llms.txt

After a change: `npm run build`. Commit and push to `main` so Vercel goes live (Ashvak asked for autonomous ranking deploys).

## Weekly (Monday report only)

**Email Ashvak once per week — Mondays only.** Do not email mid-week when doing daily ranking work. Mid-week audits may print locally; they must not send mail unless Ashvak asked.

Run on Monday (or with `SEND_EMAIL=1` only if he asked for a one-off):

```bash
SITE_URL=https://ashvaksheik.com REPORT_TO=ashvak.realtor07@gmail.com node scripts/seo-weekly-report.mjs
```

If `RESEND_API_KEY` is set, the script emails only on Mondays Eastern (or when `SEND_EMAIL=1`). GitHub Action `.github/workflows/seo-weekly-report.yml` is meant for Mondays at 9 AM Eastern.

Report must include: pages checked, missing titles/descriptions/canonicals, H1 counts, JSON-LD presence, sitemap/robots/llms.txt status, priority cluster status, and next week's 5 priorities.
