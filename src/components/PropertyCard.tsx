import Image from "next/image";
import LinkButton from "./Global/Button";

type PropertyCardProps = {
  imageSrc: string;
  title: string;
  address?: string;
  description: string;
  price?: string;
  status?: string;
  date?: string;
  proPertylink?:string;
  postlink?:string;
};

const PropertyCard = ({
  imageSrc,
  title,
  address,
  description,
  price,
  status,
  date,
  proPertylink,
  postlink
}: PropertyCardProps) => {
  return (
    <div className="relative group overflow-hidden border border-white/15 bg-black">
      {/* Property Image */}
      <div className={`relative   overflow-hidden ${postlink?'h-[20rem]':'h-[30rem]'}`}>
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="transition-transform duration-500 ease-in-out transform group-hover:scale-110 object-cover z-0"
        />
      </div>

      {/* Status Label */}
      {status && <div
        className={`absolute top-0 right-0 px-4 py-2 text-xs font-bold uppercase bg-gray-900 text-white`}
      >
        {status}
      </div>}
      

      {/* Info Section */}
      <div className="p-10 relative z-1 bg-black text-center flex flex-col items-center justify-center space-y-2 ">
        <h3 className="text-xl tracking-[4px] track font-tenor_Sans text-white">
          {title}
        </h3>
        {address && (
          <p className="text-sm text-white/70 font-bold tracking-[1px]">
            {address}
          </p>
        )}

        <p className="text-sm text-white/70 font-bold tracking-[1px]">
          {description}
        </p>
        {price && (
          <p className="text-md font-bold mt-2 tracking-[3px] text-white">
            {price}
          </p>
        )}

        {date && (
          <p className="text-sm mt-2 tracking-[2px] text-white/50">
            Publish At: {date}
          </p>
        )}
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
      {proPertylink&& <LinkButton
          href={proPertylink}
          btnText=" View Property"
          className="px-4 py-2 font-semibold transition-colors duration-300 transform translate-y-full group-hover:translate-y-0"
        /> }
         {postlink&& <LinkButton
          href={postlink}
          btnText="View Post"
          className="px-4 py-2 font-semibold transition-colors duration-300 transform translate-y-full group-hover:translate-y-0"
        /> }
        
      </div>
    </div>
  );
};

export default PropertyCard;
