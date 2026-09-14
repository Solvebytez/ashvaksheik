/**
 * Weekly GEO/SEO health check for ashvaksheik.com
 * Usage: node scripts/seo-weekly-report.mjs
 * Optional env: SITE_URL, RESEND_API_KEY, REPORT_TO, REPORT_FROM, SEND_EMAIL
 */

const SITE_URL = (process.env.SITE_URL || "https://ashvaksheik.com").replace(/\/$/, "");
const REPORT_TO = process.env.REPORT_TO || "ashvak.realtor07@gmail.com";
const FROM_CANDIDATES = [
  process.env.REPORT_FROM,
  "Ashvak Sheik <reports@ashvaksheik.com>",
  "Ashvak Sheik <reports@inthefinals.ai>",
].filter((value, index, list) => value && list.indexOf(value) === index);

const pages = [
  "/",
  "/about",
  "/faq",
  "/telugu-realtor",
  "/hyderabadi-realtor",
  "/muslim-realtor",
  "/desi-realtor",
  "/brampton-realtor",
  "/mississauga-realtor",
  "/toronto-realtor",
  "/oakville-realtor",
  "/vaughan-realtor",
  "/markham-realtor",
  "/milton-realtor",
  "/caledon-realtor",
  "/home-search",
  "/home-valuation",
  "/pre-construction",
  "/pre-construction/five-oaks-oakville",
  "/pre-construction/aura-lakeview-village",
  "/pre-construction/riverview-oakville",
  "/pre-construction/bravo-condos-vaughan",
  "/pre-construction/cornerstone-brampton",
  "/neighborhoods",
  "/neighborhoods/brampton",
  "/neighborhoods/mississauga",
  "/neighborhoods/toronto",
  "/buyers",
  "/sellers",
  "/blog",
  "/testimonials",
  "/privacy",
];

const PRIORITIES = [
  "Fix any pages marked Needs work above.",
  "Add or improve one GTA neighborhood landing page.",
  "Keep FAQ answers specific enough for ChatGPT, Perplexity, and Google AI Overviews to cite.",
  "Confirm Google Business Profile NAP matches the website.",
  "Publish or refresh one blog post and make sure it is in the sitemap.",
];

function extract(html, regex) {
  const match = html.match(regex);
  return match ? match[1].replace(/\s+/g, " ").trim() : "";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
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
  const description =
    extract(
      page.text,
      /<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i
    ) ||
    extract(
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

function buildTextReport({ date, results, failing, sitemap, robots, llms }) {
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
    lines.push(
      `- ${page.path} [${mark}] ${page.status} | H1s: ${page.h1Count} | JSON-LD: ${page.hasJsonLd ? "yes" : "no"}`
    );
    lines.push(`  title: ${page.title || "(none)"}`);
    if (issues.length) lines.push(`  issues: ${issues.join(", ")}`);
  }

  lines.push("", "This week's ranking priorities");
  PRIORITIES.forEach((item, index) => {
    lines.push(`${index + 1}. ${item}`);
  });
  lines.push(
    "",
    "Notes",
    "This agent does not invent awards or license numbers. Contact for leads remains 647-890-0982.",
    ""
  );

  return lines.join("\n");
}

function statusPill(ok) {
  if (ok) {
    return `<span style="display:inline-block;padding:3px 10px;border-radius:999px;background:#e8f5e9;color:#1b5e20;font-size:12px;font-weight:700;letter-spacing:0.04em;">OK</span>`;
  }
  return `<span style="display:inline-block;padding:3px 10px;border-radius:999px;background:#fdecea;color:#8a1f11;font-size:12px;font-weight:700;letter-spacing:0.04em;">Needs work</span>`;
}

function buildHtmlReport({ date, results, failing, sitemap, robots, llms }) {
  const crawlRows = [
    ["Sitemap", sitemap.ok],
    ["robots.txt", robots.ok],
    ["llms.txt", llms.ok],
  ]
    .map(
      ([label, ok]) => `
      <tr>
        <td style="padding:10px 12px;border-bottom:1px solid #ececec;font-size:14px;color:#222;">${escapeHtml(label)}</td>
        <td style="padding:10px 12px;border-bottom:1px solid #ececec;">${statusPill(ok)}</td>
      </tr>`
    )
    .join("");

  const pageRows = results
    .map((page) => {
      const issues = page.error ? [page.error] : issueLine(page);
      const ok = issues.length === 0;
      const issueHtml = issues.length
        ? `<div style="margin-top:4px;font-size:12px;color:#8a1f11;">${escapeHtml(issues.join(", "))}</div>`
        : "";
      return `
      <tr>
        <td style="padding:12px;border-bottom:1px solid #ececec;vertical-align:top;">
          <a href="${escapeHtml(SITE_URL + page.path)}" style="color:#111;font-weight:600;text-decoration:none;">${escapeHtml(page.path)}</a>
          <div style="margin-top:4px;font-size:12px;color:#666;line-height:1.4;">${escapeHtml(page.title || "(no title)")}</div>
          ${issueHtml}
        </td>
        <td style="padding:12px;border-bottom:1px solid #ececec;vertical-align:top;white-space:nowrap;">${statusPill(ok)}</td>
        <td style="padding:12px;border-bottom:1px solid #ececec;vertical-align:top;font-size:13px;color:#444;">${page.status}</td>
        <td style="padding:12px;border-bottom:1px solid #ececec;vertical-align:top;font-size:13px;color:#444;">${page.h1Count}</td>
        <td style="padding:12px;border-bottom:1px solid #ececec;vertical-align:top;font-size:13px;color:#444;">${page.hasJsonLd ? "Yes" : "No"}</td>
      </tr>`;
    })
    .join("");

  const priorityItems = PRIORITIES.map(
    (item) =>
      `<li style="margin:0 0 10px;font-size:14px;line-height:1.5;color:#222;">${escapeHtml(item)}</li>`
  ).join("");

  const healthColor = failing.length === 0 ? "#1b5e20" : "#8a1f11";
  const healthLabel =
    failing.length === 0
      ? "All checked pages look healthy"
      : `${failing.length} page${failing.length === 1 ? "" : "s"} need attention`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Weekly GEO/SEO report — ${escapeHtml(date)}</title>
</head>
<body style="margin:0;padding:0;background:#f3f3f3;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#111;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f3f3;padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:680px;background:#ffffff;border:1px solid #e5e5e5;">
          <tr>
            <td style="background:#0a0a0a;padding:28px 28px 24px;">
              <div style="font-size:12px;letter-spacing:0.16em;text-transform:uppercase;color:#c8c8c8;">Ashvak Sheik · Weekly ranking report</div>
              <h1 style="margin:10px 0 8px;font-size:26px;line-height:1.25;color:#ffffff;font-weight:600;">GEO / SEO health check</h1>
              <div style="font-size:14px;color:#bdbdbd;">${escapeHtml(date)} · <a href="${escapeHtml(SITE_URL)}" style="color:#ffffff;text-decoration:underline;">${escapeHtml(SITE_URL.replace(/^https?:\/\//, ""))}</a></div>
            </td>
          </tr>

          <tr>
            <td style="padding:24px 28px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #ececec;">
                <tr>
                  <td style="padding:16px;width:33.33%;border-right:1px solid #ececec;">
                    <div style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#777;">Pages checked</div>
                    <div style="margin-top:6px;font-size:28px;font-weight:700;color:#111;">${results.length}</div>
                  </td>
                  <td style="padding:16px;width:33.33%;border-right:1px solid #ececec;">
                    <div style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#777;">Needs work</div>
                    <div style="margin-top:6px;font-size:28px;font-weight:700;color:${healthColor};">${failing.length}</div>
                  </td>
                  <td style="padding:16px;width:33.33%;">
                    <div style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#777;">Status</div>
                    <div style="margin-top:10px;font-size:14px;font-weight:600;color:${healthColor};line-height:1.35;">${escapeHtml(healthLabel)}</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:20px 28px 8px;">
              <h2 style="margin:0 0 12px;font-size:16px;letter-spacing:0.08em;text-transform:uppercase;color:#111;">Crawl files</h2>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #ececec;">
                ${crawlRows}
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:24px 28px 8px;">
              <h2 style="margin:0 0 12px;font-size:16px;letter-spacing:0.08em;text-transform:uppercase;color:#111;">Page audit</h2>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #ececec;">
                <tr style="background:#fafafa;">
                  <th align="left" style="padding:10px 12px;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#666;border-bottom:1px solid #ececec;">Page</th>
                  <th align="left" style="padding:10px 12px;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#666;border-bottom:1px solid #ececec;">Status</th>
                  <th align="left" style="padding:10px 12px;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#666;border-bottom:1px solid #ececec;">HTTP</th>
                  <th align="left" style="padding:10px 12px;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#666;border-bottom:1px solid #ececec;">H1s</th>
                  <th align="left" style="padding:10px 12px;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#666;border-bottom:1px solid #ececec;">JSON-LD</th>
                </tr>
                ${pageRows}
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:24px 28px 8px;">
              <h2 style="margin:0 0 12px;font-size:16px;letter-spacing:0.08em;text-transform:uppercase;color:#111;">This week's priorities</h2>
              <ol style="margin:0;padding-left:20px;">
                ${priorityItems}
              </ol>
            </td>
          </tr>

          <tr>
            <td style="padding:20px 28px 28px;">
              <div style="padding:16px;background:#f7f7f7;border:1px solid #ececec;font-size:13px;line-height:1.5;color:#555;">
                Prepared for ${escapeHtml(REPORT_TO)}. This agent does not invent awards or license numbers.
                Lead contact stays <a href="tel:6478900982" style="color:#111;">647-890-0982</a>.
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
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

  const sitemap = await fetchText("/sitemap.xml").catch(() => ({
    status: 0,
    text: "",
    ok: false,
  }));
  const robots = await fetchText("/robots.txt").catch(() => ({
    status: 0,
    text: "",
    ok: false,
  }));
  const llms = await fetchText("/llms.txt").catch(() => ({
    status: 0,
    text: "",
    ok: false,
  }));
  const date = new Date().toISOString().slice(0, 10);

  const failing = results.filter((page) => {
    page.ok = page.status === 200;
    return page.error || issueLine(page).length > 0;
  });

  const payload = { date, results, failing, sitemap, robots, llms };
  const report = buildTextReport(payload);
  const htmlReport = buildHtmlReport(payload);
  console.log(report);

  if (process.env.GITHUB_STEP_SUMMARY) {
    const fs = await import("node:fs/promises");
    await fs.appendFile(
      process.env.GITHUB_STEP_SUMMARY,
      `\`\`\`\n${report}\n\`\`\`\n`
    );
  }

  const weekdayEt = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Toronto",
    weekday: "short",
  }).format(new Date());
  const forceEmail =
    process.env.SEND_EMAIL === "1" || process.env.SEND_EMAIL === "true";
  const isMonday = weekdayEt === "Mon";
  const shouldEmail = forceEmail || isMonday;

  if (process.env.RESEND_API_KEY && shouldEmail) {
    let lastError = "No sender addresses to try.";
    let sentFrom = "";
    for (const from of FROM_CANDIDATES) {
      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [REPORT_TO],
          subject: `Ashvak weekly GEO/SEO report — ${date}`,
          text: report,
          html: htmlReport,
        }),
      });
      if (emailResponse.ok) {
        sentFrom = from;
        break;
      }
      lastError = await emailResponse.text();
    }
    if (!sentFrom) {
      throw new Error(`Resend failed: ${lastError}`);
    }
    console.log(`Emailed HTML report to ${REPORT_TO} from ${sentFrom}`);
  } else if (process.env.RESEND_API_KEY && !shouldEmail) {
    console.log(
      "Report printed only (email sends on Mondays Eastern, or with SEND_EMAIL=1)."
    );
  } else {
    console.log("RESEND_API_KEY not set — report printed only.");
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
