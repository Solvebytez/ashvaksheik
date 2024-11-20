import LinkButton from "../Global/Button";
import Container from "../Global/Container";
import SectionTitle from "../Global/SectionTitle";
import ImageCard2 from "../ImageCard2";
const cards = [
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
];

const AreaExpertise = () => {
  return (
    <div className="pb-8">
      <Container>
        <SectionTitle
          description="LEARN ABOUT MY EXCLUSIVE NEIGHBOURHOODS"
          titleNumber={0.3}
          title="Area of Expertise"
          bgLogo="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/gyommycouuod40setpi0/rl-bg"
        />
      </Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {cards.map((card, index) => (
          <ImageCard2 key={index} imageSrc={card.imageURL} title={card.title} description={card.description} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <LinkButton href="#" btnText="Veiw All" className="text-white mt-14" />
      </div>
    </div>
  );
};

export default AreaExpertise;
