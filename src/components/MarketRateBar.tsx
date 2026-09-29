import Link from "next/link";
import type { MarketRate } from "@/lib/marketRates";

const shortLabel: Record<string, string> = {
  "Bank of Canada rate": "BoC",
  "Lender prime": "Prime",
  "Posted 5-year mortgage": "5-year",
  Inflation: "Inflation",
};

const MarketRateBar = ({ rates }: { rates: MarketRate[] }) => {
  if (!rates.length) return null;

  return (
    <Link
      href="/buyers"
      aria-label="Public home-buying rates from the Bank of Canada. Ashvak is the realtor, not the lender."
      className="block border-b border-white/15 bg-black/80 text-white backdrop-blur-md hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white"
    >
      <div className="mx-auto grid max-w-3xl grid-cols-2 gap-x-4 gap-y-1 px-4 pb-2 pt-[max(8px,env(safe-area-inset-top))] sm:flex sm:max-w-none sm:items-center sm:justify-center sm:gap-6">
        {rates.map((rate) => (
          <span
            key={rate.label}
            className="flex items-baseline justify-center gap-2 text-[11px] uppercase tracking-[1px] sm:text-xs"
          >
            <span className="text-white/65">{shortLabel[rate.label] ?? rate.label}</span>
            <span className="font-tenor_Sans text-sm normal-case tracking-normal">{rate.value}</span>
          </span>
        ))}
      </div>
    </Link>
  );
};

export default MarketRateBar;
