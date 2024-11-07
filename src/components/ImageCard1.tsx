import Image from 'next/image';


type ImageCardType={
    imageUrl: string;
    title: string;
}

const ImageCard1 = ({ imageUrl, title }:ImageCardType) => {
    return (
      <div className="group relative overflow-hidden h-80">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="transition-transform duration-500 ease-in-out transform group-hover:scale-110 grayscale-0 group-hover:grayscale object-cover"
        />
        <div className="space-y-4 absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-100">
          <h3 className="text-white text-2xl tracking-[3px] transition-transform duration-300 ease-in-out transform group-hover:-translate-y-10 tenor_Sans">
            {title}
          </h3>
          <span className="border-t border-white w-12 mr-2 border-2 inline-block opacity-100 group-hover:opacity-35"></span>
        </div>
      </div>
    );
  };

export default ImageCard1