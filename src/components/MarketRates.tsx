import { getMarketRates } from "@/lib/marketRates";

const MarketRates = async () => {
  const rates = await getMarketRates();
  if (!rates) return null;

  return (
    <section aria-label="Current home-buying rates" className="border border-white/15 p-5 md:p-8">
      <h2 className="text-xl md:text-2xl font-tenor_Sans tracking-[1px] md:tracking-[2px] uppercase leading-tight">
        What it costs to borrow right now
      </h2>
      <p className="mt-3 text-sm md:text-base text-white/75 leading-7">
        These public rates change what a buyer in Brampton, Mississauga, and the rest of the GTA can afford. They refresh from the Bank of Canada. Ashvak Sheik is the realtor, not the lender.
      </p>
      <dl className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        {rates.map((rate) => (
          <div key={rate.label} className="border-t border-white/15 pt-3">
            <dt className="text-xs uppercase tracking-[1px] text-white/60">{rate.label}</dt>
            <dd className="mt-2 text-2xl md:text-3xl font-tenor_Sans">{rate.value}</dd>
            <dd className="mt-1 text-xs text-white/50">{rate.asOf}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default MarketRates;
