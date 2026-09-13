# Agents

This site is Ashvak Sheik’s GTA real estate website (Re/Max President Realty Brokerage).

## Ranking agents

When the task is SEO, GEO, ranking, metadata, schema, FAQ, or local content, follow:

1. `.cursor/skills/geo-seo/SKILL.md` — technical SEO + structured data
2. `.cursor/skills/geo-content/SKILL.md` — citable copy AI engines can quote
3. `.cursor/rules/geo-seo.mdc` — always-on NAP and heading rules

Do not invent awards, license numbers, or press mentions. Run `npm run build` after crawl-facing changes.

## Schedule

- Daily: one ranking improvement from `.cursor/skills/geo-seo/schedule.md`
- Monday: run `scripts/seo-weekly-report.mjs` and email ashvak.realtor07@gmail.com
- GitHub Action: `.github/workflows/seo-weekly-report.yml` (needs `RESEND_API_KEY` to send the email)
