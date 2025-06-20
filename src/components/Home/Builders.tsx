"use client";
import Slider from "react-slick";
import Container from "../Global/Container";
import Image from "next/image";
const logos = [
  {
    imageUrl: "brookfield-residential-logo.png",
    name: "brookfield residential logo",
  },
  { imageUrl: "buildres1.png", name: "buildres1" },
  { imageUrl: "Caivan Homes.png", name: "Caivan Homes" },
  { imageUrl: "Danial Homes.jpg", name: "Danial Homes" },
  { imageUrl: "Deco Homes.jpg", name: "Deco Homes" },
  { imageUrl: "Empire Homes.png", name: "Empire Homes" },
  { imageUrl: "Fieldgate Homes.png", name: "Fieldgate Homes" },
  { imageUrl: "Great Gulf.png", name: "Great Gulf" },
  { imageUrl: "Greenpark-Group.png", name: "Greenpark Group" },
  { imageUrl: "Mattamy Homes.jpg", name: "Mattamy Homes" },
  { imageUrl: "Minto Group.jpg", name: "Minto Group" },
  { imageUrl: "Tamarack Homes.png", name: "Tamarack Homes" },
  { imageUrl: "Trdel Homes.png", name: "Trdel Homes" },
];

const Builders = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section
      className="bg-[center_top_8rem] bg-fixed relative bg-cover bg-no-repeat "
      style={{
        backgroundImage:
          "url('/bg-ashvaik.jpg')",
      }}
    >
      <div className="bg-black/90 text-white py-[7rem] flex flex-col ">
        <div className="flex flex-col items-center justify-center py-16 w-full space-y-7 px-4 md:px-8 lg:px-16 xl:px-36 2xl:px-72">
          <h2 className="font-tenor_Sans tracking-[6px] text-4xl text-center">
            RECEIVE EXCLUSIVE OFF-MARKET LISTINGS IN YOUR INBOX.
          </h2>
          <p className="text-center">
            Are you interested in buying a home? Discover exclusive listings
            before they hit the market by working with one of {"GTA's"} top real
            estate professionals. Ashvak specializes in estate sales, first-time
            homebuyers, multifamily investments, and luxury leases.
          </p>
        </div>
        <Container>
          <div className="slider-container mb-20">
            <Slider {...settings} className="h-[2rem]">
              {logos.map((item) => (
                <div
                  key={item.name}
                  className=" !flex flex-col items-center justify-center h-[9rem] "
                >
                  <Image
                    width={150}
                    height={200}
                    alt={item.name}
                    src={`/Builders/${item.imageUrl}`}
                    className=" object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Builders;
