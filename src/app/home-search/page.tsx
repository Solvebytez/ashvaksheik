import BreadcumBanner from "@/components/Global/BreadcumBanner";
import Container from "@/components/Global/Container";
import HomeSearchForm from "./HomeSearchForm";

const HomeSearchpage = () => {
  return (
    <div className="bg-white ">
      <BreadcumBanner
        pageTitle="Home Search"
        bgLogo="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/lejhcjvknr7hwl3ctzld/press-and-media"
      />
      <div className="flex flex-col justify-center py-10 items-center ">
        <h2 className="text-center text-5xl font-tenor_Sans tracking-[5px] text-black py-10 uppercase">
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
