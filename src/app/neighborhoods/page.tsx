import BreadcumBanner from "@/components/Global/BreadcumBanner";
import Container from "@/components/Global/Container";
import ImageCard2 from "@/components/ImageCard2";

const cards = [
    {
      imageSrc:
        "https://images.pexels.com/photos/259950/pexels-photo-259950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "PINERIDGE / WESTMINSTER WOODS",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "CLAIRFIELDS / HANLON BUSINESS PARK",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/27781512/pexels-photo-27781512/free-photo-of-the-palace-of-the-royal-palace-of-madrid.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "KORTRIGHT HILLS",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/259950/pexels-photo-259950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "PINERIDGE / WESTMINSTER WOODS",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "CLAIRFIELDS / HANLON BUSINESS PARK",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/27781512/pexels-photo-27781512/free-photo-of-the-palace-of-the-royal-palace-of-madrid.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "KORTRIGHT HILLS",
    },
  ];

const NeighborhoodsPage = () => {
  return (
    <div>
      <BreadcumBanner
        pageTitle="Neighborhoods"
        description="Browse our comprehensive neighborhood guides to learn more about your desired area."
        bgLogo="https://res.cloudinary.com/luxuryp/images/w_1920,c_limit,f_auto,q_auto/dndgngvjmvkv5j6l3nkt/shutterstock_1834368658"
      />
      <div className="bg-white pb-20">
        <div className="flex flex-col justify-center py-10 items-center ">
          <h2 className="text-center text-5xl font-tenor_Sans tracking-[5px] text-black py-10 uppercase">
            Neighborhoods
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-0">
        {cards.map((card, index) => (
          <ImageCard2 key={index} imageSrc={card.imageSrc} title={card.title} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default NeighborhoodsPage;
