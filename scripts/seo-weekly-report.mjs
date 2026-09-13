/**
 * Weekly GEO/SEO health check for ashvaksheik.com
 * Usage: node scripts/seo-weekly-report.mjs
 * Optional env: SITE_URL, RESEND_API_KEY, REPORT_TO, REPORT_FROM
 */

const SITE_URL = (process.env.SITE_URL || "https://ashvaksheik.com").replace(/\/$/, "");
const REPORT_TO = process.env.REPORT_TO || "ashvak.realtor07@gmail.com";
const REPORT_FROM = process.env.REPORT_FROM || "Ashvak SEO Agent <beth.t@example.com>";

const pages = [
  "/",
  "/about",
  "/faq",
  "/telugu-realtor",
  "/hyderabadi-realtor",
  "/muslim-realtor",
  "/desi-realtor",
  "/home-search",
  "/home-valuation",
  "/pre-construction",
  "/neighborhoods",
  "/buyers",
  "/sellers",
  "/blog",
  "/testimonials",
  "/privacy",
];

function extract(html, regex) {
  const match = html.match(regex);
  return match ? match[1].replace(/\s+/g, " ").trim() : "";
}

async function fetchText(path) {
  const url = path.startsWith("http") ? path : `${SITE_URL}${path}`;
  const response = await fetch(url, {
    headers: { "user-agent": "AshvakSEOAgent/1.0" },
    redirect: "follow",
  });
  const text = await response.text();
  return { url, status: response.status, text, ok: response.ok };
}

async function auditPage(path) {
  const page = await fetchText(path);
  const title = extract(page.text, /<title[^>]*>([\s\S]*?)<\/title>/i);
  const description = extract(
    page.text,
    /<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i
  ) || extract(
    page.text,
    /<meta[^>]+content=["']([^"']+)["'][^>]+name=["']description["']/i
  );
  const canonical = extract(
    page.text,
    /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i
  );
  const hasJsonLd = page.text.includes("application/ld+json");
  const h1Count = (page.text.match(/<h1\b/gi) || []).length;
  return {
    path,
    status: page.status,
    title,
    description,
    canonical,
    hasJsonLd,
    h1Count,
  };
}

function issueLine(page) {
  const issues = [];
  if (!page.ok && page.status !== 200) issues.push(`HTTP ${page.status}`);
  if (!page.title) issues.push("missing title");
  if (!page.description) issues.push("missing description");
  if (!page.canonical) issues.push("missing canonical");
  if (page.h1Count !== 1) issues.push(`${page.h1Count} H1s`);
  return issues;
}

async function main() {
  const results = [];
  for (const path of pages) {
    try {
      results.push(await auditPage(path));
    } catch (error) {
      results.push({
        path,
        status: 0,
        title: "",
        description: "",
        canonical: "",
        hasJsonLd: false,
        h1Count: 0,
        error: error.message,
      });
    }
  }

  const sitemap = await fetchText("/sitemap.xml").catch(() => ({ status: 0, text: "", ok: false }));
  const robots = await fetchText("/robots.txt").catch(() => ({ status: 0, text: "", ok: false }));
  const llms = await fetchText("/llms.txt").catch(() => ({ status: 0, text: "", ok: false }));
  const date = new Date().toISOString().slice(0, 10);

  const failing = results.filter((page) => {
    page.ok = page.status === 200;
    return page.error || issueLine(page).length > 0;
  });

  const lines = [
    `Weekly GEO/SEO report — ${date}`,
    `Site: ${SITE_URL}`,
    `Prepared for: ${REPORT_TO}`,
    "",
    "Summary",
    `- Pages checked: ${results.length}`,
    `- Pages needing work: ${failing.length}`,
    `- Sitemap: ${sitemap.ok ? "OK" : `HTTP ${sitemap.status}`}`,
    `- robots.txt: ${robots.ok ? "OK" : `HTTP ${robots.status}`}`,
    `- llms.txt: ${llms.ok ? "OK" : `HTTP ${llms.status}`}`,
    "",
    "Page audit",
  ];

  for (const page of results) {
    const issues = page.error ? [page.error] : issueLine(page);
    const mark = issues.length ? "NEEDS WORK" : "OK";
    lines.push(`- ${page.path} [${mark}] ${page.status} | H1s: ${page.h1Count} | JSON-LD: ${page.hasJsonLd ? "yes" : "no"}`);
    lines.push(`  title: ${page.title || "(none)"}`);
    if (issues.length) lines.push(`  issues: ${issues.join(", ")}`);
  }

  lines.push(
    "",
    "This week's ranking priorities",
    "1. Fix any NEEDS WORK pages above.",
    "2. Add or improve one GTA neighborhood landing page.",
    "3. Keep FAQ answers specific enough for ChatGPT, Perplexity, and Google AI Overviews to cite.",
    "4. Confirm Google Business Profile NAP matches the website.",
    "5. Publish or refresh one blog post and make sure it is in the sitemap.",
    "",
    "Notes",
    "This agent does not invent awards or license numbers. Contact for leads remains 647-890-0982.",
    ""
  );

  const report = lines.join("\n");
  console.log(report);

  if (process.env.GITHUB_STEP_SUMMARY) {
    const fs = await import("node:fs/promises");
    await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, `\`\`\`\n${report}\n\`\`\`\n`);
  }

  if (process.env.RESEND_API_KEY) {
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: REPORT_FROM,
        to: [REPORT_TO],
        subject: `Ashvak weekly GEO/SEO report — ${date}`,
        text: report,
      }),
    });
    if (!emailResponse.ok) {
      const body = await emailResponse.text();
      throw new Error(`Resend failed (${emailResponse.status}): ${body}`);
    }
    console.log(`Emailed report to ${REPORT_TO}`);
  } else {
    console.log("RESEND_API_KEY not set — report printed only.");
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
