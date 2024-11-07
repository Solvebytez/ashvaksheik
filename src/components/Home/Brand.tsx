
'use client'
import Slider from "react-slick";
import Container from "../Global/Container";
import Image from "next/image";
const logos = [
    { name: "Top 30 Under 30", imageUrl: "https://res.cloudinary.com/luxuryp/images/w_320,c_limit,f_auto,q_auto/kj7eqhttu4kdimfizbfx/top_30_under_30-logo" },
    { name: "Platinum 2023", imageUrl: "https://res.cloudinary.com/luxuryp/images/w_320,c_limit,f_auto,q_auto/f2vkhd7sbuibckqvalyl/platinum_2023-logo" },
    { name: "Executive 2020", imageUrl: "https://res.cloudinary.com/luxuryp/images/w_320,c_limit,f_auto,q_auto/h4adtuonnsl22tlaovez/executive_2020-logo" },
    { name: "Top 30 Under 30", imageUrl: "https://res.cloudinary.com/luxuryp/images/w_320,c_limit,f_auto,q_auto/kj7eqhttu4kdimfizbfx/top_30_under_30-logo" },
    { name: "Platinum 2023", imageUrl: "https://res.cloudinary.com/luxuryp/images/w_320,c_limit,f_auto,q_auto/f2vkhd7sbuibckqvalyl/platinum_2023-logo" },
    { name: "Executive 2020", imageUrl: "https://res.cloudinary.com/luxuryp/images/w_320,c_limit,f_auto,q_auto/h4adtuonnsl22tlaovez/executive_2020-logo" },
    { name: "Top 30 Under 30", imageUrl: "https://res.cloudinary.com/luxuryp/images/w_320,c_limit,f_auto,q_auto/kj7eqhttu4kdimfizbfx/top_30_under_30-logo" },
    { name: "Platinum 2023", imageUrl: "https://res.cloudinary.com/luxuryp/images/w_320,c_limit,f_auto,q_auto/f2vkhd7sbuibckqvalyl/platinum_2023-logo" },
    { name: "Executive 2020", imageUrl: "https://res.cloudinary.com/luxuryp/images/w_320,c_limit,f_auto,q_auto/h4adtuonnsl22tlaovez/executive_2020-logo" }
  ];


const Brand = () => {

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
    style={{backgroundImage: "url('https://res.cloudinary.com/luxuryp/images/w_2560,c_limit,f_auto,q_auto/fo1wyecnstjssy0xb2yo/rahul-23-1')"}}>
         <div className="bg-black bg-opacity-70 text-white py-[7rem] flex flex-col">
    <h2 className="text-center text-5xl  mb-12 tenor_Sans tracking-[6px]">As Seen In</h2>
    <Container>
    <div className="slider-container">
      <Slider {...settings}>
      {logos.map((item) => (
          <div key={item.name} className="border-r border-white/10 flex flex-col items-center justify-center">
            <Image
                width={150}
                height={200}
              alt={item.name}
              src={item.imageUrl}             
              className="object-cover m-auto"
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

export default Brand