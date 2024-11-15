
'use client'
import Slider from "react-slick";
import Container from "../Global/Container";
import Image from "next/image";
const logos = [
    {imageUrl: "brookfield-residential-logo.png", name: "brookfield residential logo"},
    {imageUrl: "buildres1.png", name: "buildres1"},
    {imageUrl: "Caivan Homes.png", name: "Caivan Homes"},
    {imageUrl: "Danial Homes.jpg", name: "Danial Homes"},
    {imageUrl: "Deco Homes.jpg", name: "Deco Homes"},
    {imageUrl: "Empire Homes.png", name: "Empire Homes"},
    {imageUrl: "Fieldgate Homes.png", name: "Fieldgate Homes"},
    {imageUrl: "Great Gulf.png", name: "Great Gulf"},
    {imageUrl: "Greenpark-Group.png", name: "Greenpark Group"},
    {imageUrl: "Mattamy Homes.jpg", name: "Mattamy Homes"},
    {imageUrl: "Minto Group.jpg", name: "Minto Group"},
    {imageUrl: "Tamarack Homes.png", name: "Tamarack Homes"},
    {imageUrl: "Trdel Homes.png", name: "Trdel Homes"}
  ]


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
        arrows:false
      };

  return (
    <section  className="bg-[center_top_8rem] bg-fixed relative bg-cover bg-no-repeat " 
    style={{backgroundImage: "url('https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}>
         <div className="bg-black/90 text-white py-[7rem] flex flex-col ">
    <h2 className="text-center text-5xl  mb-12 tenor_Sans tracking-[6px]">Pre construction</h2>
    <Container>
    <div className="slider-container mb-20">
      <Slider {...settings} className="h-[2rem]">
      {logos.map((item) => (
          <div key={item.name} className=" !flex flex-col items-center justify-center h-[9rem] ">
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
  )
}

export default Builders