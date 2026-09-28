#!/usr/bin/env node
/**
 * Retry Google Indexing API URL_UPDATED for URLs blocked by daily quota.
 *
 * Requires AI Seo Agent/.env with GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET,
 * GOOGLE_REFRESH_TOKEN (indexing scope).
 *
 * Usage:
 *   node scripts/request-indexing-remaining.mjs
 *   node scripts/request-indexing-remaining.mjs scripts/data/indexing-retry-www.txt
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const envPath = path.join(root, "AI Seo Agent", ".env");
const listPath =
  process.argv[2] || path.join(root, "scripts/data/indexing-retry-www.txt");

function loadEnv(file) {
  const out = {};
  if (!fs.existsSync(file)) throw new Error(`Missing ${file}`);
  for (const line of fs.readFileSync(file, "utf8").split("\n")) {
    const s = line.trim();
    if (!s || s.startsWith("#") || !s.includes("=")) continue;
    const i = s.indexOf("=");
    out[s.slice(0, i).trim()] = s.slice(i + 1).trim().replace(/^["']|["']$/g, "");
  }
  return out;
}

async function refreshToken(env) {
  const body = new URLSearchParams({
    client_id: env.GOOGLE_CLIENT_ID,
    client_secret: env.GOOGLE_CLIENT_SECRET,
    refresh_token: env.GOOGLE_REFRESH_TOKEN,
    grant_type: "refresh_token",
  });
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  const data = await res.json();
  if (!res.ok || !data.access_token) {
    throw new Error(`OAuth refresh failed: ${JSON.stringify(data)}`);
  }
  return data.access_token;
}

async function publish(accessToken, url) {
  const res = await fetch(
    "https://indexing.googleapis.com/v3/urlNotifications:publish",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url, type: "URL_UPDATED" }),
    }
  );
  const text = await res.text();
  let data = {};
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = { raw: text.slice(0, 200) };
  }
  return { status: res.status, data };
}

const env = loadEnv(envPath);
const urls = fs
  .readFileSync(listPath, "utf8")
  .split("\n")
  .map((u) => u.trim())
  .filter(Boolean);

if (!urls.length) {
  console.log("No URLs left in", listPath);
  process.exit(0);
}

console.log(`Retrying ${urls.length} URLs from ${listPath}`);
const token = await refreshToken(env);
const requested = [];
const failed = [];

for (let i = 0; i < urls.length; i++) {
  const url = urls[i];
  const short = url.replace("https://www.ashvaksheik.com", "") || "/";
  const { status, data } = await publish(token, url);
  if (status === 200 || status === 201) {
    requested.push(url);
    console.log(`[${i + 1}/${urls.length}] REQUESTED ${short}`);
  } else if (status === 429) {
    failed.push(...urls.slice(i));
    console.log(`[${i + 1}/${urls.length}] QUOTA — stopped at ${short}`);
    break;
  } else {
    failed.push(url);
    const msg = data?.error?.message || JSON.stringify(data).slice(0, 120);
    console.log(`[${i + 1}/${urls.length}] FAIL ${status} ${short} ${msg}`);
  }
  await new Promise((r) => setTimeout(r, 300));
}

fs.writeFileSync(listPath, failed.length ? failed.join("\n") + "\n" : "");
console.log("\nRequested:", requested.length);
console.log("Remaining:", failed.length);
console.log("List updated:", listPath);
process.exit(failed.length ? 2 : 0);
