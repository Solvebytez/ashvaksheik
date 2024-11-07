import React from "react";
import Container from "../Global/Container";
import SectionTitle from "../Global/SectionTitle";
import Image from "next/image";
import LinkButton from "../Global/Button";

const AboutHome = () => {
  return (
    <Container>
      <SectionTitle
        titleNumber={0.2}
        title="RAHUL LUTHRA"
        description="MEET"
        bgLogo="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/gyommycouuod40setpi0/rl-bg"
      />
      <div className="flex lg:grid grid-cols-2 gap-6 pb-10">
        <div className="flex flex-col relative">
          <Image
            alt=""
            sizes="25vw"
            fill
            className="object-cover"
            src="https://res.cloudinary.com/luxuryp/images/w_960,c_limit,f_auto,q_auto/dk3wq2r0ykydqls8pdhb/dsc09335"
          />
        </div>
        <div className="flex flex-col items-center justify-center text-center space-y-5 text-white px-8">
          <p className="text-[16px] leading-7 tracking-wide">
            He prides himself on being resourceful and empathetic to your needs
            and desires, all whilst focusing on the small details that matter
            most. Dedication, integrity, and honesty are at the forefront of
            Rahul’s business and are fundamental in ensuring you receive the
            best care every step of the way.{" "}
          </p>
          <p className="text-[16px] leading-7 tracking-wide">
            In the world of customer service, Rahul is a seasoned professional.
            Through his several managerial positions previously held in the
            hospitality sector, Rahul always knew a transition into Real Estate
            would allow him to utilize his strengths in the most meaningful way
            possible.
          </p>
          <div className="flex flex-col relative">
            <Image
              alt=""
              className="object-cover"
              width={300}
              height={200}
              src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/xjqsphatl7ffgt7n1tw9/rahul-luthra"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <LinkButton btnText="Learn More" href="#" />
            <LinkButton btnText="Let's Connect" href="#" className="bg-white text-black hover:bg-black hover:text-black" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutHome;
