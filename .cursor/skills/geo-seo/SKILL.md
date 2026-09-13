---
name: geo-seo
description: Implements GEO (Generative Engine Optimization) and SEO so Ashvak Sheik ranks in Google and AI answers (ChatGPT, Perplexity, Gemini, AI Overviews). Use when the user mentions SEO, GEO, ranking, schema, metadata, sitemap, llms.txt, FAQ, local landing pages, or "make the site rank."
---

# GEO + SEO for Ashvak Sheik

Ashvak Sheik is a GTA realtor with Re/Max Millennium Real Estate. Optimize so Google and AI engines can cite him as the local expert.

## Always read first

- Entity facts and title templates: [reference.md](reference.md)
- Daily work + Monday email: [schedule.md](schedule.md)

This agent runs as a daily ranking program. Every Monday, email a GEO/SEO report to ashvak.realtor07@gmail.com.

## Ranking rules

1. Every public route needs unique `title`, `description`, and `alternates.canonical` via `pageMetadata()` in `src/lib/seo.ts`.
2. One H1 per page. Footer and section titles are never H1.
3. Keep JSON-LD in `src/components/seo/JsonLd.tsx`. Do not invent awards, license numbers, or sales stats that are not already on the site.
4. NAP must stay exact: Ashvak Sheik, 647-890-0982, ashvak.realtor07@gmail.com, 5 Montpelier St Unit 310, Brampton, ON L6Y 6H4, Re/Max Millennium Real Estate.
5. New pages go in `src/app/sitemap.ts` and get a footer/menu link.
6. Prefer Server Components so crawlers and AI bots see HTML, not "Loading...".
7. After SEO/GEO edits, run `npm run build`.

## When asked to rank the site

Work in this order:

1. Technical: metadata, canonicals, sitemap, robots, H1s, alt text
2. Entity: JSON-LD (`RealEstateAgent`, `Person`, `LocalBusiness`, `WebSite`, `FAQPage`, `Article`, `BreadcrumbList`)
3. GEO files: keep `public/llms.txt` accurate
4. Citable content: FAQ answers, neighborhood pages, blog author = Ashvak Sheik
5. Local landings: `/neighborhoods/[slug]` for GTA cities when asked to go deeper

## Do not

- Change brokerage name away from Re/Max Millennium Real Estate
- Add fake reviews, fake press, or unverifiable "#1" claims
- Commit `.env`
- Push unless the user asks
