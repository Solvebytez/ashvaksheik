import BreadcumBanner from "@/components/Global/BreadcumBanner";
import ImageCard2 from "@/components/ImageCard2";
import JsonLd from "@/components/seo/JsonLd";
import {
  cityGuides,
  communityGuides,
  neighborhoodPath,
  neighborhoodTitle,
} from "@/lib/neighborhoods";
import { itemListGraph, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "GTA Neighborhoods",
  description:
    "Brampton, Mississauga, Toronto, and GTA neighborhood guides from Ashvak Sheik, Realtor at Re/Max Millennium Real Estate.",
  path: "/neighborhoods",
});

const NeighborhoodsPage = () => {
  const cities = cityGuides();
  const neighborhoods = communityGuides();
  const listItems = [...cities, ...neighborhoods].map((area) => ({
    name: neighborhoodTitle(area),
    path: neighborhoodPath(area.slug),
  }));

  return (
    <div>
      <JsonLd data={itemListGraph("GTA real estate guides by Ashvak Sheik", listItems)} />
      <BreadcumBanner
        pageTitle="Neighborhoods"
        description="City and neighborhood guides for buyers comparing Brampton, Mississauga, Toronto, and the rest of the GTA."
        bgLogo="https://res.cloudinary.com/luxuryp/images/w_1920,c_limit,f_auto,q_auto/dndgngvjmvkv5j6l3nkt/shutterstock_1834368658"
      />
      <div className="bg-black pb-20">
        <div className="flex flex-col justify-center py-10 items-center flex-wrap">
          <h2 className="text-center text-2xl md:text-5xl font-tenor_Sans tracking-[2px] md:tracking-[5px] text-white py-6 md:py-10 uppercase px-4">
            GTA cities
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {cities.map((area) => (
            <ImageCard2
              key={area.slug}
              imageSrc={area.image}
              title={area.name}
              description={area.cardDescription}
              href={neighborhoodPath(area.slug)}
            />
          ))}
        </div>
        <div className="flex flex-col justify-center py-10 items-center flex-wrap">
          <h2 className="text-center text-2xl md:text-5xl font-tenor_Sans tracking-[2px] md:tracking-[5px] text-white py-6 md:py-10 uppercase px-4">
            Neighborhoods
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {neighborhoods.map((area) => (
            <ImageCard2
              key={area.slug}
              imageSrc={area.image}
              title={area.name}
              description={area.cardDescription}
              href={neighborhoodPath(area.slug)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NeighborhoodsPage;
