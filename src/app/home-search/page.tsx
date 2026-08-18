import BreadcumBanner from "@/components/Global/BreadcumBanner";
import Container from "@/components/Global/Container";
import HomeSearchForm from "./HomeSearchForm";

const HomeSearchpage = () => {
  return (
    <div className="bg-black ">
      <BreadcumBanner
        pageTitle="Home Search"
        bgLogo="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/lejhcjvknr7hwl3ctzld/press-and-media"
      />
      <div className="flex flex-col justify-center py-10 items-center ">
        <h2 className="text-center text-2xl md:text-5xl font-tenor_Sans tracking-[2px] md:tracking-[5px] text-white py-6 md:py-10 uppercase px-4 leading-tight">
          Request Your Property
        </h2>
      </div>
      <Container>
        <HomeSearchForm />
      </Container>
    </div>
  );
};

export default HomeSearchpage;
