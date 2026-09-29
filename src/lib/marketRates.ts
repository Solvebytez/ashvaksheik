const DAY = 60 * 60 * 24;

type Observation = { d: string; [series: string]: { v: string } | string };

export type MarketRate = {
  label: string;
  value: string;
  asOf: string;
};

function latestValue(rows: Observation[], series: string) {
  let best: { value: string; asOf: string } | undefined;
  for (const row of rows) {
    const point = row[series];
    if (point && typeof point === "object" && point.v && (!best || row.d > best.asOf)) {
      best = { value: point.v, asOf: row.d };
    }
  }
  return best;
}

function formatMonth(iso: string) {
  const [year, month] = iso.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, 1)).toLocaleDateString("en-CA", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

function formatDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString("en-CA", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

function formatPercent(raw: string) {
  const number = Number(raw);
  if (!Number.isFinite(number)) return undefined;
  return `${number}%`;
}

export async function getMarketRates(): Promise<MarketRate[] | null> {
  try {
    const [policyRes, cpiRes] = await Promise.all([
      fetch(
        "https://www.bankofcanada.ca/valet/observations/V39079,V80691311,V80691335/json?recent=30",
        { next: { revalidate: DAY } }
      ),
      fetch("https://www.bankofcanada.ca/valet/observations/V41690973/json?recent=14", {
        next: { revalidate: DAY },
      }),
    ]);
    if (!policyRes.ok || !cpiRes.ok) return null;

    const policy = (await policyRes.json()) as { observations?: Observation[] };
    const cpi = (await cpiRes.json()) as { observations?: Observation[] };
    const rows = policy.observations ?? [];
    const cpiRows = cpi.observations ?? [];
    const overnight = latestValue(rows, "V39079");
    const prime = latestValue(rows, "V80691311");
    const fiveYear = latestValue(rows, "V80691335");
    const latestCpi = latestValue(cpiRows, "V41690973");
    const yearAgo = latestCpi
      ? cpiRows.find((row) => row.d === latestCpi.asOf.replace(/^(\d{4})/, (year) => String(Number(year) - 1)))
      : undefined;
    const yearAgoValue =
      yearAgo && typeof yearAgo.V41690973 === "object" ? Number(yearAgo.V41690973.v) : NaN;
    const inflation =
      latestCpi && Number.isFinite(yearAgoValue) && yearAgoValue > 0
        ? {
            value: (((Number(latestCpi.value) - yearAgoValue) / yearAgoValue) * 100).toFixed(1),
            asOf: latestCpi.asOf,
          }
        : undefined;

    const rates = [
      overnight && { label: "Bank of Canada rate", value: formatPercent(overnight.value), asOf: overnight.asOf },
      prime && { label: "Lender prime", value: formatPercent(prime.value), asOf: prime.asOf },
      fiveYear && { label: "Posted 5-year mortgage", value: formatPercent(fiveYear.value), asOf: fiveYear.asOf },
      inflation && { label: "Inflation", value: `${inflation.value}%`, asOf: inflation.asOf },
    ].filter((item): item is { label: string; value: string; asOf: string } => Boolean(item?.value));

    if (rates.length < 4) return null;
    return rates.map((item) => ({
      ...item,
      asOf: item.label === "Inflation" ? formatMonth(item.asOf) : formatDate(item.asOf),
    }));
  } catch {
    return null;
  }
}
