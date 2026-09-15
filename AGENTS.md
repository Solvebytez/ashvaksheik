# Agents

This site is Ashvak Sheik’s GTA real estate website (Re/Max Millennium Real Estate).

## Ranking agents

When the task is SEO, GEO, ranking, metadata, schema, FAQ, or local content, follow:

1. `.cursor/skills/geo-seo/SKILL.md` — technical SEO + structured data
2. `.cursor/skills/geo-content/SKILL.md` — citable copy AI engines can quote
3. `.cursor/rules/geo-seo.mdc` — always-on NAP and heading rules

Do not invent awards, license numbers, or press mentions. Run `npm run build` after crawl-facing changes.

## Schedule

- Budget: **max $25/month** for GEO/SEO agents — pause/delete always-on goals; use 2–3 short sessions/week (see `.cursor/skills/geo-seo/schedule.md`)
- Tue/Fri ~9 AM Eastern: one small ranking improvement each (not daily heavy runs)
- Monday only: run `scripts/seo-weekly-report.mjs` and email ashvak.realtor07@gmail.com (not mid-week; script blocks mid-week sends unless `SEND_EMAIL=1`)
- GitHub Action: `.github/workflows/seo-weekly-report.yml` (needs `RESEND_API_KEY`; file may need manual add if OAuth lacks `workflow` scope)
