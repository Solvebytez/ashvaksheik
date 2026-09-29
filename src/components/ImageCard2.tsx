import Image from "next/image";
import Link from "next/link";

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
    <Link
      href={href}
      className="group relative block h-96 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white"
    >
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/55 transition duration-500 group-hover:bg-black/65" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <h2 className="tenor_Sans text-xl leading-snug tracking-[2px] text-white md:text-3xl">
          {title}
        </h2>
        <p className="mt-3 max-w-xs text-sm leading-6 text-white md:max-w-sm md:text-base">
          {description}
        </p>
        <span className="mt-6 inline-flex items-center justify-center border border-white px-6 py-3 text-[12px] font-bold uppercase tracking-[1.5px] text-white transition group-hover:bg-white group-hover:text-black">
          Learn More
        </span>
      </div>
    </Link>
  );
};

export default ImageCard2;
