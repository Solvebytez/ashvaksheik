# Agents

This site is Ashvak Sheik’s GTA real estate website (Re/Max Millennium Real Estate).

## Ranking agents

When the task is SEO, GEO, ranking, metadata, schema, FAQ, or local content, follow:

1. `.cursor/skills/geo-seo/SKILL.md` — technical SEO + structured data
2. `.cursor/skills/geo-content/SKILL.md` — citable copy AI engines can quote
3. `.cursor/rules/geo-seo.mdc` — always-on NAP and heading rules

Do not invent awards, license numbers, or press mentions. Run `npm run build` after crawl-facing changes.

## Schedule

- Daily 9:00–10:00 AM Eastern: Cloud Automation runs **one** ranking improvement from `.cursor/skills/geo-seo/schedule.md` (max one site change per Eastern day unless Ashvak asks)
- Priority keyword clusters (Muslim, Telugu, Hyderabadi, Halal mortgage, trusted/reliable/best-intent, first-time buyer, investment) are listed in that schedule — rotate through them
- Monday only: run `scripts/seo-weekly-report.mjs` and email ashvak.realtor07@gmail.com (not daily; script blocks mid-week sends unless `SEND_EMAIL=1`)
- GitHub Action: `.github/workflows/seo-weekly-report.yml` (needs `RESEND_API_KEY`; file may need manual add if OAuth lacks `workflow` scope)
