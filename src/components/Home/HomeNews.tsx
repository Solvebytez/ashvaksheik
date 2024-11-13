"use client"

import LinkButton from "../Global/Button";
import Container from "../Global/Container";
import SectionTitle from "../Global/SectionTitle";
import WorkWith from "./WorkWith";

const cardsData = [
  {
    id: 1,
    title: "Celebrating a Milestone Together: GTA’s #1 Realtor",
    subtitle: " GTA’s #1 Realtor",
    date: "03/31/24",
    author: "Ashvak Sheik",
    imageUrl: "https://images.pexels.com/photos/27781517/pexels-photo-27781517/free-photo-of-the-building-is-surrounded-by-trees-and-a-fountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with actual image URL
    isFullWidth: true,
  },
  {
    id: 2,
    title: "How to Generate Passive Income From Your Primary Residence?",
    subtitle: " GTA’s #1 Realtor",
    date: "09/1/22",
    author: "Ashvak Sheik",
    imageUrl: "https://images.pexels.com/photos/27781517/pexels-photo-27781517/free-photo-of-the-building-is-surrounded-by-trees-and-a-fountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with actual image URL
    isFullWidth: false,
  },
  {
    id: 3,
    title: "Ready to Buy Your First Home in the GTA?",
    date: "11/12/24",
    author: "Ashvak Sheik",
    imageUrl: "https://images.pexels.com/photos/27781517/pexels-photo-27781517/free-photo-of-the-building-is-surrounded-by-trees-and-a-fountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with actual image URL
    isFullWidth: false,
  },
];

const HomeNews = () => {
 
  return (
    <div className="">
      <Container>
        <SectionTitle
          description="BROWSE MY AVAILABLE PROPERTIES"
          titleNumber={0.4}
          title="EXCLUSIVE LISTINGS"
          bgLogo="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/gyommycouuod40setpi0/rl-bg"
        />
 <div className="text-white p-4 min-h-max">
      <div className="space-y-4">
        {/* Full-width card */}
        {cardsData[0].isFullWidth && (
          <div
            key={cardsData[0].id}
            className="group relative overflow-hidden w-full h-64 mb-1 bg-cover bg-center"
            style={{ backgroundImage: `url(${cardsData[0].imageUrl})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 opacity-100 transition-opacity duration-300 group-hover:opacity-100">
              <div className="text-center transition-transform transform translate-y-10 group-hover:translate-y-0 duration-300">
                <h2 className="text-xl font-bold uppercase tracking-[5px]">{cardsData[0].title}</h2>
                {cardsData[0].subtitle && (
                  <p className="text-lg mt-2 hidden group-hover:block opacity-0 transition-transform transform translate-y-full group-hover:translate-y-0 duration-300 group-hover:opacity-100">
                    {cardsData[0].subtitle}
                  </p>
                )}
                <p className="text-md uppercase font-bold mt-1 opacity-75">
                  {cardsData[0].date} | {cardsData[0].author}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Half-width cards with horizontal gap */}
        <div className="flex gap-x-4">
          {cardsData.slice(1).map((card) => (
            <div
              key={card.id}
              className="group relative overflow-hidden w-[calc(50%-12px)] h-64 bg-cover bg-center"
              style={{ backgroundImage: `url(${card.imageUrl})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 opacity-100 transition-opacity duration-300 group-hover:opacity-100">
                <div className="text-center transition-transform transform translate-y-10 group-hover:translate-y-0 duration-300">
                  <h2 className="text-xl font-bold uppercase tracking-[5px]">{card.title}</h2>
                  {card.subtitle && (
                    <p className="text-lg mt-2 hidden group-hover:block opacity-0 transition-transform transform translate-y-full group-hover:translate-y-0 duration-300 group-hover:opacity-100">
                      {card.subtitle}
                    </p>
                  )}
                  <p className="text-md uppercase font-bold mt-1 opacity-75">
                    {card.date} | {card.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mb-[5rem]">
        <LinkButton href="/blog" btnText="Veiw All" className="text-white mt-14" />
      </div>
    </div>
      </Container>    

      <WorkWith/>
    </div>
  );
};

export default HomeNews;
