import LinkButton from "../Global/Button"
import Container from "../Global/Container"
import SectionTitle from "../Global/SectionTitle"
import PropertyCard from "../PropertyCard";

const properties = [
    {
      imageSrc: 'https://images.pexels.com/photos/27781517/pexels-photo-27781517/free-photo-of-the-building-is-surrounded-by-trees-and-a-fountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: '84 Old Ruby Lane',
      address: '84 OLD RUBY LANE, PUSLINCH, ON N0B 2J0',
      description: '5 BD | 5 BA | 4,513 SQ.FT.',
      price: '$3,299,900',
      status: 'For Sale',
    },
    {
      imageSrc: 'https://images.pexels.com/photos/29088985/pexels-photo-29088985/free-photo-of-modern-manhattan-skyline-with-iconic-skyscrapers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: '150 Alma Street N',
      address: '150 ALMA STREET N, GUELPH, ON N1H 5X4',
      description: '3 BD | 1 BA | 1,291 SQ.FT.',
      price: '$950,000 CAD',
      status: 'Pending',
    },
  ];

const ExclusiveList = () => {
  return (
    <div className="pb-8">
      <Container>
        <SectionTitle
          description="BROWSE MY AVAILABLE PROPERTIES"
          titleNumber={0.4}
          title="EXCLUSIVE LISTINGS"
          bgLogo="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/gyommycouuod40setpi0/rl-bg"
        />
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {properties.map((property, index) => (
        <PropertyCard key={index} {...property} proPertylink="#" />
      ))}
    </div>
      </Container>
     
      <div className="flex justify-center items-center">
        <LinkButton href="#" btnText="Veiw All" className="text-white mt-14" />
      </div>
    </div>
  )
}

export default ExclusiveList