"use client";


import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

const listings = [
  {
    imageUrl:
      "https://dlajgvw9htjpb.cloudfront.net/cms/be9bafe7-1e19-4b9d-a79f-e120d4fda4b4/40642669/5973590047825296586.jpg",
    status: "Sold",
    title: "FEATURED LISTING",
    price: "$3,999,990",
    name: "66 Hume Road",
    address: "66 Hume Road, Puslinch, ON N0B 2J0",
    features: {
      bedrooms: "4 BD",
      bathrooms: "3.5 BA",
      area: "3,141 Sq.Ft.",
    },
    link: "/properties/66-hume-road-puslinch-on-n0b-2j0-40438991",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/luxuryp/images/w_1920,c_limit,f_auto,q_auto/sqjpushwhponyfvmzo7r/002-image-12",
    status: "Sold",
    title: "FEATURED LISTING",
    price: "$3,999,990",
    name: "66 Hume Road",
    address: "66 Hume Road, Puslinch, ON N0B 2J0",
    features: {
      bedrooms: "4 BD",
      bathrooms: "3.5 BA",
      area: "3,141 Sq.Ft.",
    },
    link: "/properties/66-hume-road-puslinch-on-n0b-2j0-40438991",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/luxuryp/images/w_1920,c_limit,f_auto,q_auto/yuirgutg10d3g4ftb3fn/66hume4-twilight",
    status: "For Sale",
    title: "FEATURED LISTING",
    price: "$3,999,990",
    name: "66 Hume Road",
    address: "66 Hume Road, Puslinch, ON N0B 2J0",
    features: {
      bedrooms: "4 BD",
      bathrooms: "3.5 BA",
      area: "3,141 Sq.Ft.",
    },
    link: "/properties/66-hume-road-puslinch-on-n0b-2j0-40438991",
  },
];

const PropertySlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-white h-[calc(100vh)] overflow-hidden ">
      <Slider {...settings}>
        {listings.map((item) => (
          <div key={item.name} className="h-[calc(100vh)] relative flex flex-col justify-end">
            <Image
              alt={item.title}
              src={item.imageUrl}
              fill
              priority
              className="object-cover w-full h-[100%] absolute -z-10"
            />
            <div className="flex flex-col justify-end relative top-[-38rem] items-end w-full align- h-full opacity-100 text-right pr-5 z-40">
              <div className=" bg-black text-md px-10 py-2 text-white w-max relative right-[-20px]">Sold</div>
              <div className="text-white text-sm tracking-[2px] font-bold mt-[6rem]">FEATURED LISTING</div>
              <div className="text-white text-sm tracking-[2px] font-bold">$1,850,000 CAD</div>
              <div className="tenor_Sans text-3xl text-white leading-[5rem]">1 Hayward Cres</div>
              <div className="text-white text-[1rem] tracking-[2px]">1 Hayward Cres, Guelph, ON N1G 5A5</div>

              <div className="text-white text-[1rem] tracking-[2px]">
                <span>4 BD</span>

                <span>2,500 Sq.Ft.</span>
              </div>
              <Link
                className="uppercase tracking-[1px] text-xs text-white underline mt-4 inline-block"
                href="/properties/1-hayward-cres-guelph-on-n1g-5a5-x5502170"
               
              >
                learn more
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PropertySlider;
