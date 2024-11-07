import Container from "../Global/Container";
import SectionTitle from "../Global/SectionTitle";
import ImageCard1 from "../ImageCard1";

const images = [
    {
      title: 'HOME SEARCH',
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      title: 'HOME VALUATION',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      title: 'CONTACT US',
      image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
  ];
  


const SettingStandrad = () => {
  return (
    <Container>
      <SectionTitle
        titleNumber={0.1}
        title="SETTING THE STANDARD IN REAL ESTATE"
        description="REPRESENTING GUELPH AND TRI-CITY HOMEOWNERS, BOTH CURRENT AND FUTURE, RAHUL HAS AN UNMATCHED DEVOTION TO HIS CLIENTS."
        bgLogo="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/gyommycouuod40setpi0/rl-bg"
      />
       <div className="flex flex-col md:grid grid-cols-3 gap-6 mb-10">
      {images.map((item) => (
        <ImageCard1 key={item.title} imageUrl={item.image} title={item.title} />
      ))}
    </div>
    </Container>
  );
};

export default SettingStandrad;
