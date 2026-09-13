import React from "react";
import Container from "../Global/Container";
import SectionTitle from "../Global/SectionTitle";
import Image from "next/image";
import LinkButton from "../Global/Button";
import Link from "next/link";

const AboutHome = ({openModal}:{openModal:()=>void;}) => {
  return (
    <Container>
      <SectionTitle
        titleNumber={0.2}
        title="Ashvak Sheik"
        description="MEET"
        bgLogo="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/gyommycouuod40setpi0/rl-bg"
      />
      <div className="flex flex-col lg:grid grid-cols-2 gap-6 pb-10">
        <div className="relative min-h-[320px] md:min-h-[420px] lg:min-h-[520px] w-full">
          <Image
            alt="Ashvak Sheik"
            sizes="(max-width: 1024px) 100vw, 50vw"
            fill
            className="object-cover object-top"
            src="/profile.jpeg"
          />
        </div>
        <div className="flex flex-col items-center justify-center text-center space-y-5 text-white px-1 md:px-8">
          <p className="text-[15px] md:text-[16px] leading-7 tracking-wide">
          Ashvak Sheik is a Telugu-speaking Hyderabadi Muslim realtor with Re/Max Millennium Real Estate in Brampton. Families looking for a{" "}
          <Link href="/telugu-realtor" className="underline">Telugu realtor</Link>,{" "}
          <Link href="/muslim-realtor" className="underline">Muslim realtor</Link>,{" "}
          <Link href="/brampton-realtor" className="underline">Brampton realtor</Link>,{" "}
          <Link href="/mississauga-realtor" className="underline">Mississauga realtor</Link>, or{" "}
          <Link href="/toronto-realtor" className="underline">Toronto realtor</Link>{" "}
          can work with him in Telugu or English.
          </p>
          <p className="text-[15px] md:text-[16px] leading-7 tracking-wide">
          With over a decade of experience in IT and real estate, Ashvak brings a unique blend of technical expertise and market insight. His analytical skills, honed through years in data-driven roles, empower his clients with informed decisions and innovative solutions. {"Ashvak’s"} transition into real estate was a natural progression, allowing him to leverage his strengths to deliver exceptional results for every client.

          </p>
          <div className="flex flex-col relative">
            <Image
              alt="Ashvak Sheik signature"
              className="object-cover"
              width={300}
              height={200}
              src="/signature.png"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
            <LinkButton btnText="Learn More" href="/about" />
            <LinkButton onClick={openModal} btnText="Let's Connect" href="#" className="bg-white text-black hover:bg-transparent hover:text-white" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutHome;
