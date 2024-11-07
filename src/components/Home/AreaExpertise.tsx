import LinkButton from "../Global/Button";
import Container from "../Global/Container";
import SectionTitle from "../Global/SectionTitle";
import ImageCard2 from "../ImageCard2";
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
      <div className="grid grid-cols-3 gap-0">
        {cards.map((card, index) => (
          <ImageCard2 key={index} imageSrc={card.imageSrc} title={card.title} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <LinkButton href="#" btnText="Veiw All" className="text-white mt-14" />
      </div>
    </div>
  );
};

export default AreaExpertise;
