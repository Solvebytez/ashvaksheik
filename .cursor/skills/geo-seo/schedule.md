# Daily ranking + weekly email

Recipient: ashvak.realtor07@gmail.com  
Site: https://ashvaksheik.com

## Budget hard cap — $25 USD / month

Ashvak’s max spend for this GEO/SEO ranking work is **$25/month**.

That means:

1. **Delete or pause the always-on Cursor Goal** (it auto-wakes and will blow past $25).
2. Run ranking **at most 2–3 short sessions per week** (or one short session every other day) — not all-day / not every hour.
3. Each session: **one** small change, build/push if needed, stop. Target ~10–20 minutes.
4. Monday: HTML weekly email only (cheap). Do not also do a big page build the same day unless budget allows.
5. Prefer Cloud Automation **twice weekly** (e.g. Tue + Fri 9 AM Eastern) over a persistent goal.
6. If monthly Cursor usage for SEO is approaching $25, **stop all ranking agents** until next month.

Rough fit under $25: ~8–12 short agent runs/month. Daily heavy runs will exceed the cap.

## Daily / weekly cadence (budget mode)

Preferred under $25/mo:

- **Tue 9 AM Eastern:** one ranking improvement, then stop  
- **Fri 9 AM Eastern:** one ranking improvement, then stop  
- **Mon 9 AM Eastern:** weekly HTML report email only  

Do **not** use an always-on goal.

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

**Credit / budget guard:** Hard cap **$25 USD/month** for SEO agents. At most one small ranking code change per session; prefer 2–3 sessions/week. If today’s change is already pushed, verify live and stop. **Never** use always-on goal wake-ups — they exceed the budget. Goal wake-ups do not authorize extra work.

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
