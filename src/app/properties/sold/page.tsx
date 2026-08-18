import BreadcumBanner from "@/components/Global/BreadcumBanner";
import Container from "@/components/Global/Container";
import LinkButton from "@/components/Global/Button";

const SoldProperties = () => {
  return (
    <div>
      <BreadcumBanner
        pageTitle="PAST TRANSACTIONS"
        description="Proudly representing buyers and sellers across the Greater Toronto Area with Re/Max President Realty Brokerage."
        bgLogo="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/ay4wxtapckx0qwydoh5v/img_2129"
      />

      <div className="bg-white pb-20 pt-12">
        <Container>
          <div className="text-black text-center space-y-6 py-10">
            <p className="max-w-2xl mx-auto">
              Want to see recent GTA results or get a home valuation? Reach out
              and I will walk you through comparable sales in your neighbourhood.
            </p>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              <LinkButton
                href="/home-valuation"
                btnText="Home Valuation"
                className="!border-black text-black"
              />
              <LinkButton
                href="/home-search"
                btnText="Search Homes"
                className="!border-black text-black"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SoldProperties;
