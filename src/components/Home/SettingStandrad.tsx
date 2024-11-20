import { seTtingsData } from "@/lib/Data/SettingSData";
import Container from "../Global/Container";
import SectionTitle from "../Global/SectionTitle";
import ImageCard1 from "../ImageCard1";
import Link from "next/link";
import Image from "next/image";

  


const SettingStandrad = ({openModal}:{openModal:()=>void;}) => {
  return (
    <Container>
      <SectionTitle
        titleNumber={0.1}
        title="SETTING THE STANDARD IN GTA REAL ESTATE"
        description="REPRESENTING GTA HOMEOWNERS, BOTH CURRENT AND FUTURE, ASHVAK BRINGS AN UNMATCHED COMMITMENT TO EXCELLENCE IN REAL ESTATE."
        bgLogo='as-logoBg.png'
      />
       <div className="flex flex-col md:grid grid-cols-3 gap-6 mb-10">
      {seTtingsData.map((item) => (
        <ImageCard1 key={item.title} imageUrl={item.image} title={item.title} link={item.link} />
      ))}
       <Link onClick={openModal} href={'#'}>
      <div className="group relative overflow-hidden h-80">
        <Image
          src="https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="contack"
          fill
          className="transition-transform duration-500 ease-in-out transform group-hover:scale-110 grayscale-0 group-hover:grayscale object-cover"
        />
        <div className="space-y-4 absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-100">
          <h3 className="text-white text-2xl tracking-[3px] transition-transform duration-300 ease-in-out transform group-hover:-translate-y-10 tenor_Sans">
          CONTACT US
          </h3>
          <span className="border-t border-white w-12 mr-2 border-2 inline-block opacity-100 group-hover:opacity-35"></span>
        </div>
      </div>
      </Link>
    </div>
    </Container>
  );
};

export default SettingStandrad;
