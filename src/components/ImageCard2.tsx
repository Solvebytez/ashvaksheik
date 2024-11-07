import Image from "next/image";
import LinkButton from "./Global/Button";

const ImageCard2 = ({
  imageSrc,
  title,
}: {
  imageSrc: string;
  title: string;
}) => {
  return (
    <div className="group relative overflow-hidden h-96">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="transition-transform duration-500 ease-in-out transform group-hover:scale-110 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-50 group-hover:opacity-100 transition duration-500 ease-in-out"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center  transition duration-500 ease-in-out text-center px-12">
        <h2 className="text-white text-3xl mb-4 transform group-hover:translate-y-[-30px] transition duration-500 tenor_Sans tracking-[6px]">
          {title}
        </h2>
        <LinkButton
          href="#"
          btnText="Learn More"
          className="text-white border border-white py-2 px-4 opacity-0 group-hover:opacity-100 hover:bg-white hover:text-black transform group-hover:translate-y-[-30px] transition duration-500"
        ></LinkButton>
      </div>
    </div>
  );
};

export default ImageCard2;
