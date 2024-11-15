import BreadcumBanner from "@/components/Global/BreadcumBanner";
import Container from "@/components/Global/Container";
// import Pagination from "@/components/Global/Pagination";
import PropertyCard from "@/components/PropertyCard";

const properties = [
  {
    imageSrc:
      "https://images.pexels.com/photos/27781517/pexels-photo-27781517/free-photo-of-the-building-is-surrounded-by-trees-and-a-fountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "84 Old Ruby Lane",
    address: "84 OLD RUBY LANE, PUSLINCH, ON N0B 2J0",
    description: "5 BD | 5 BA | 4,513 SQ.FT.",
    price: "$3,299,900",
    status: "For Sale",
  },
  {
    imageSrc:
      "https://images.pexels.com/photos/29088985/pexels-photo-29088985/free-photo-of-modern-manhattan-skyline-with-iconic-skyscrapers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "150 Alma Street N",
    address: "150 ALMA STREET N, GUELPH, ON N1H 5X4",
    description: "3 BD | 1 BA | 1,291 SQ.FT.",
    price: "$950,000 CAD",
    status: "Pending",
  },
];

const ProPertiesPage = () => {
  return (
    <div>
      <BreadcumBanner
        pageTitle="Portfolio"
        description="Consistently recognized as a top producing agent in The Wellington County."
        bgLogo="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/gg5lqgxfs8n9uajak0pp/portfolio"
      />
      <div className="flex flex-col justify-center py-10 items-center ">
        <h2 className="text-center text-5xl font-tenor_Sans tracking-[5px] text-white py-10 uppercase">
          Featured Properties
        </h2>
      </div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} proPertylink="#" />
          ))}
        </div>
      </Container>
      <div className="bg-white pb-20">
      <div className="flex flex-col justify-center py-10 items-center ">
        <h2 className="text-center text-5xl font-tenor_Sans tracking-[5px] text-black py-10 uppercase">
        Past Transactions
        </h2>
      </div>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 ">
            {properties.map((property, index) => (
              <PropertyCard key={index} {...property} proPertylink="#" />
            ))}
          </div>
          
        </Container>
       <div className="flex items-center justify-center mt-20">
       {/* <Pagination pageNumber={8}/> */}
       </div>
      </div>
     
    </div>
  );
};

export default ProPertiesPage;
