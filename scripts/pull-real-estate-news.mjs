/**
 * Pull the saved real-estate feeds and write a consolidated headline file.
 * Usage: node scripts/pull-real-estate-news.mjs
 * Output: scripts/data/real-estate-news-latest.json
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "data");
const feeds = JSON.parse(readFileSync(join(root, "real-estate-feeds.json"), "utf8")).feeds;
const housing = /hous|home|mortgage|rent|tenant|real estate|listing|condo|rate|boc|bank of canada|cmhc|trreb|crea|gta|toronto|brampton|mississauga/i;

function textOf(xml, tag) {
  const match = xml.match(new RegExp(`<${tag}[^>]*>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${tag}>`, "i"));
  return match ? match[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim() : "";
}

function itemsFrom(xml) {
  const chunks = xml.split(/<item\b|<entry\b/i).slice(1);
  return chunks.map((chunk) => {
    const title = textOf(chunk, "title");
    const linkTag = chunk.match(/<link[^>]*href="([^"]+)"/i);
    const link = linkTag ? linkTag[1] : textOf(chunk, "link");
    const date = textOf(chunk, "pubDate") || textOf(chunk, "updated") || textOf(chunk, "dc:date");
    return { title, link, date };
  }).filter((item) => item.title && item.link);
}

const consolidated = [];
for (const feed of feeds) {
  try {
    const response = await fetch(feed.url, {
      headers: { "User-Agent": "ashvaksheik-news-pull/1.0" },
      signal: AbortSignal.timeout(25000),
    });
    if (!response.ok) {
      consolidated.push({ feed: feed.id, error: response.status, items: [] });
      continue;
    }
    const xml = await response.text();
    const items = itemsFrom(xml).slice(0, 12).map((item) => ({
      ...item,
      feed: feed.id,
      source: feed.name,
      housing: housing.test(`${item.title}`),
    }));
    consolidated.push({ feed: feed.id, source: feed.name, count: items.length, items });
  } catch (error) {
    consolidated.push({ feed: feed.id, error: String(error.message || error), items: [] });
  }
}

const latest = consolidated
  .flatMap((group) => group.items || [])
  .filter((item) => item.housing)
  .slice(0, 40);

const output = {
  pulledAt: new Date().toISOString(),
  feeds: consolidated.map(({ items, ...rest }) => rest),
  housingHeadlines: latest,
};
writeFileSync(join(root, "real-estate-news-latest.json"), JSON.stringify(output, null, 2));
console.log(`Wrote ${latest.length} housing headlines from ${feeds.length} feeds.`);
