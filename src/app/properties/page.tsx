import BreadcumBanner from "@/components/Global/BreadcumBanner";
import Container from "@/components/Global/Container";
import LinkButton from "@/components/Global/Button";

const ProPertiesPage = () => {
  return (
    <div>
      <BreadcumBanner
        pageTitle="Portfolio"
        description="Serving buyers and sellers across the Greater Toronto Area with Re/Max President Realty Brokerage."
        bgLogo="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/gg5lqgxfs8n9uajak0pp/portfolio"
      />
      <div className="flex flex-col justify-center py-10 items-center ">
        <h2 className="text-center text-5xl font-tenor_Sans tracking-[5px] text-white py-10 uppercase">
          Featured Properties
        </h2>
      </div>
      <Container>
        <div className="text-white text-center space-y-6 pb-20">
          <p className="max-w-2xl mx-auto">
            Listings change quickly. Tell me what you are looking for and I will
            send matching GTA homes, including off-market opportunities.
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <LinkButton href="/home-search" btnText="Search Homes" />
            <LinkButton href="/pre-construction" btnText="Pre-Construction" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProPertiesPage;
