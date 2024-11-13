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
        title="Ashvak Sheik"
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
          Ashvak prides himself on being highly resourceful and deeply attuned to his {"clients'"} unique needs and aspirations. With a meticulous focus on every detail that matters most, he ensures a seamless experience from start to finish. Dedication, integrity, and honesty are the cornerstones of Ashvak’s business, guiding him in providing exceptional care and building long-lasting relationships with clients.{" "}
          </p>
          <p className="text-[16px] leading-7 tracking-wide">
          With over a decade of experience in IT and real estate, Ashvak brings a unique blend of technical expertise and market insight. His analytical skills, honed through years in data-driven roles, empower his clients with informed decisions and innovative solutions. {"Ashvak’s"} transition into real estate was a natural progression, allowing him to leverage his strengths to deliver exceptional results for every client.

          </p>
          <div className="flex flex-col relative">
            <Image
              alt=""
              className="object-cover"
              width={300}
              height={200}
              src="/signature.png"
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
