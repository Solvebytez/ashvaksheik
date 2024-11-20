'use client'
import { testimonials } from "@/lib/Data/testimonialData";
import LinkButton from "../Global/Button";
import Container from "../Global/Container";
import { Quote } from 'lucide-react';
import Slider from "react-slick";


const Clwantail = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
   <Container>
     <section className="bg-black text-white py-16 px-8 overflow-hidden md:overflow-auto">
    <h2 className="text-center text-5xl  mb-12 tenor_Sans tracking-[6px]">FROM MY CLIENTELE</h2>
    <div className=" text-center">
    <div className="slider-container">
    <Slider {...settings}>
      {testimonials.slice(0, 12).map((testimonial, index) => (
        <div key={index} className="flex flex-col items-center justify-center my-5">
          <div className="text-6xl text-gray-400 mb-4 w-full text-center"> <Quote size={85} className="m-auto" /></div>
          <p className="text-md leading-relaxed tracking-[1px] italic mb-6">{testimonial.quote}</p>
          <p className="tracking-[2px] tenor_Sans text-xl">- {testimonial.name}</p>
        </div>
      ))}
      </Slider>
      </div>
    </div>
    <div className="flex justify-center mt-12">
      <LinkButton btnText="View All" href="/testimonials"  />
    </div>
  </section>
   </Container>
  )
}

export default Clwantail