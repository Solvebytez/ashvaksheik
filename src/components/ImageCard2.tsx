import Image from "next/image";
import LinkButton from "./Global/Button";

const ImageCard2 = ({
  imageSrc,
  title,
  description,
  href = "/neighborhoods",
}: {
  imageSrc: string;
  title: string;
  description: string;
  href?: string;
}) => {
  return (
    <div className="group relative overflow-hidden h-96">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="transition-transform duration-500 ease-in-out transform group-hover:scale-110 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-70 md:opacity-50 md:group-hover:opacity-100 transition duration-500 ease-in-out"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center transition duration-500 ease-in-out text-center px-5 md:px-12">
        <h2 className="text-white text-xl md:text-3xl mb-3 md:mb-4 transform md:group-hover:translate-y-[-30px] transition duration-500 tenor_Sans tracking-[2px] md:tracking-[6px] leading-snug">
          {title}
          <span className="text-white text-sm md:text-lg block mt-2 tracking-normal font-normal normal-case leading-6">{description}</span>
        </h2>
       
        <LinkButton
          href={href}
          btnText="Learn More"
          className="text-white border border-white py-2 px-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 hover:bg-white hover:text-black transform md:group-hover:translate-y-[-30px] transition duration-500"
        ></LinkButton>
      </div>
    </div>
  );
};

export default ImageCard2;
