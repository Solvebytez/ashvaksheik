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

      <div className="bg-black pb-20 pt-12">
        <Container>
          <div className="text-white text-center space-y-6 py-10">
            <p className="max-w-2xl mx-auto text-white/80">
              Want to see recent GTA results or get a home valuation? Reach out
              and I will walk you through comparable sales in your neighbourhood.
            </p>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              <LinkButton
                href="/home-valuation"
                btnText="Home Valuation"
              />
              <LinkButton
                href="/home-search"
                btnText="Search Homes"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SoldProperties;
