import LinkButton from "../Global/Button";
import Container from "../Global/Container";
import SectionTitle from "../Global/SectionTitle";
import ImageCard2 from "../ImageCard2";
import { getNeighborhood, neighborhoodPath } from "@/lib/neighborhoods";

const featuredSlugs = [
  "brampton",
  "mississauga",
  "toronto",
  "port-credit",
  "brampton-downtown",
  "oakville",
];

const AreaExpertise = () => {
  const cards = featuredSlugs
    .map((slug) => getNeighborhood(slug))
    .filter((area): area is NonNullable<typeof area> => Boolean(area));

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
        {cards.map((area) => (
          <ImageCard2
            key={area.slug}
            imageSrc={area.image}
            title={area.name}
            description={area.cardDescription}
            href={neighborhoodPath(area.slug)}
          />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <LinkButton href="/neighborhoods" btnText="View All" className="text-white mt-14" />
      </div>
    </div>
  );
};

export default AreaExpertise;
