import BreadcumBanner from "@/components/Global/BreadcumBanner";
import ImageCard2 from "@/components/ImageCard2";

type NeighborhoodsTypes={
  title: string;
  description: string;
  imageURL:string;
}

const neighborhoods:NeighborhoodsTypes[] = [
  {
    title: "Mississauga City Centre",
    description: "Known for its vibrant urban lifestyle with plenty of shopping, dining, and entertainment.",
    imageURL: "https://images.pexels.com/photos/8142972/pexels-photo-8142972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Port Credit",
    description: "A beautiful lakeside community with a charming, small-town feel and a popular waterfront.",
    imageURL: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Streetsville",
    description: "Known as 'The Village in the City,' it offers a cozy, community vibe with historic charm.",
    imageURL: "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Meadowvale",
    description: "Family-friendly with plenty of parks, trails, and schools.",
    imageURL: "https://images.pexels.com/photos/2968141/pexels-photo-2968141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Brampton Downtown",
    description: "A rapidly growing urban area with diverse communities and cultural events.",
    imageURL: "https://images.pexels.com/photos/7937225/pexels-photo-7937225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Pickering Village",
    description: "A historic area with a mix of quaint shops, cafes, and restaurants.",
    imageURL: "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Ajax Waterfront",
    description: "Ideal for nature lovers, with scenic views and walking trails along the lake.",
    imageURL: "https://images.pexels.com/photos/772177/pexels-photo-772177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Whitby Shores",
    description: "A popular lakeside neighborhood known for its family-friendly environment.",
    imageURL: "https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Brooklin",
    description: "A charming small town within Whitby, featuring a historic main street.",
    imageURL: "https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Oshawa Centre",
    description: "Offers a blend of suburban life and urban amenities, with great shopping and dining options.",
    imageURL: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Markham Unionville",
    description: "Famous for its heritage buildings, upscale shops, and a lively main street.",
    imageURL: "https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Richmond Hill Bayview Hill",
    description: "A well-established area with beautiful homes and excellent schools.",
    imageURL: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Vaughan Metropolitan Centre",
    description: "A growing urban area with high-rise condos, offices, and entertainment.",
    imageURL: "https://images.pexels.com/photos/313691/pexels-photo-313691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Aurora Village",
    description: "Known for its historic homes, parks, and community-centered atmosphere.",
    imageURL: "https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Newmarket Downtown",
    description: "A family-friendly area with a charming main street and various events.",
    imageURL: "https://images.pexels.com/photos/9716284/pexels-photo-9716284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Oakville Downtown",
    description: "A picturesque lakeside community with upscale shopping and dining.",
    imageURL: "https://images.pexels.com/photos/7937294/pexels-photo-7937294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Bronte Creek",
    description: "Known for its beautiful trails, parks, and natural scenery.",
    imageURL: "https://images.pexels.com/photos/12300254/pexels-photo-12300254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Burlington Aldershot",
    description: "Offers a mix of suburban living with easy access to the waterfront and natural spaces.",
    imageURL: "https://images.pexels.com/photos/9150621/pexels-photo-9150621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Milton Escarpment View",
    description: "A serene area with breathtaking views and great outdoor activities.",
    imageURL: "https://images.pexels.com/photos/12891324/pexels-photo-12891324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Georgetown",
    description: "A small-town charm with plenty of green space and community activities.",
    imageURL: "https://images.pexels.com/photos/17095081/pexels-photo-17095081/free-photo-of-residential-houses-in-cityscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "The Beaches",
    description: "A popular neighborhood with sandy beaches, boardwalks, and charming shops.",
    imageURL: "https://images.pexels.com/photos/18604178/pexels-photo-18604178/free-photo-of-a-view-of-a-city-at-sunset-with-buildings-and-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Liberty Village",
    description: "A trendy area with modern condos, tech startups, and a lively social scene.",
    imageURL: "https://images.pexels.com/photos/7078500/pexels-photo-7078500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Yorkville",
    description: "Upscale shopping, dining, and luxury condos in one of Toronto’s most prestigious neighborhoods.",
    imageURL: "https://images.pexels.com/photos/667221/pexels-photo-667221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Leslieville",
    description: "Known for its art galleries, coffee shops, and a family-friendly atmosphere.",
    imageURL: "https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "High Park",
    description: "A green oasis with a mix of historic homes, modern condos, and Toronto’s largest park.",
    imageURL: "https://images.pexels.com/photos/7078851/pexels-photo-7078851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
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
        {neighborhoods.map((card, index) => (
          <ImageCard2 key={index} imageSrc={card.imageURL} title={`${card.title} - ${card.description}`} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default NeighborhoodsPage;
