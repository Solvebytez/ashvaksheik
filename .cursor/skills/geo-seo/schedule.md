# Daily ranking + weekly email

Recipient: ashvak.realtor07@gmail.com  
Site: https://ashvaksheik.com

## Daily (ranking agent)

Do one concrete ranking improvement, then stop. Do not invent awards.

Rotation:

1. Technical gaps from the latest weekly report
2. One neighborhood or city landing page
3. FAQ / GEO answer that AI engines can cite
4. Blog metadata, author, Article schema
5. Internal links from footer, menu, and related pages
6. Alt text, H1s, sitemap, llms.txt

After a change: `npm run build`. Commit and push only if the user already asked for deploys on this program.

## Weekly (Monday report)

Run:

```bash
SITE_URL=https://ashvaksheik.com REPORT_TO=ashvak.realtor07@gmail.com node scripts/seo-weekly-report.mjs
```

Email the output to ashvak.realtor07@gmail.com. If `RESEND_API_KEY` is set, the script sends it. GitHub Action `.github/workflows/seo-weekly-report.yml` runs this every Monday at 9 AM Eastern.

Report must include: pages checked, missing titles/descriptions/canonicals, H1 counts, JSON-LD presence, sitemap/robots/llms.txt status, and next week's 5 priorities.
