import Image from "next/image";
import LinkButton from "./Global/Button";

type PropertyCardProps = {
  imageSrc: string;
  title: string;
 
  description: string;

  date?: string;

  postlink?:string;
};

const BlogCard = ({
  imageSrc,
  title,
  description, 
  date,
  postlink
}: PropertyCardProps) => {
  return (
    <div className="relative group overflow-hidden shadow-md bg-white">
      {/* Property Image */}
      <div className={`relative   overflow-hidden ${postlink?'h-[20rem]':'h-[30rem]'}`}>
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="transition-transform duration-500 ease-in-out transform group-hover:scale-110 object-cover z-0"
        />
      </div>
      

      {/* Info Section */}
      <div className="p-10 relative z-1 bg-white text-center flex flex-col items-center justify-center space-y-2 ">
        <h3 className="text-2xl tracking-[2px] track font-tenor_Sans">
          {title}
        </h3>
        

        <p className="text-sm text-black font-bold tracking-[1px]">
          {description}
        </p>       

        {date && (
          <p className="text-sm mt-2 tracking-[2px] text-black">
            Publish At: {date}
          </p>
        )}
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">     
         {postlink&& <LinkButton
          href={postlink}
          btnText="View Post"
          className="border-2 border-black px-4 py-2 font-semibold  transition-colors duration-300 transform translate-y-full group-hover:translate-y-0   hover:bg-black"
        /> }
        
      </div>
    </div>
  );
};

export default BlogCard;
