

const TestimonialCard = ({ initials, name, text, image }:{initials:string;name:string;text:string;image?:string}) => {
  return (
    <div className="flex flex-col space-y-4 my-8 p-6 gap-2">
      {/* Avatar */}
     <div className="flex items-center gap-4 font-tenor_Sans">
     <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 text-gray-800 text-xl font-bold">
        {image ? (
          <img src={image} alt={name} className="rounded-full w-full h-full object-cover" />
        ) : (
          <span>{initials}</span>
        )}
      </div>

      {/* Name */}
      <h3 className="text-4xl tracking-[4px] text-gray-800 uppercase">
        {name}
      </h3>
     </div>

      {/* Testimonial Text */}
      <p className="text-gray-600 text-sm">
        {text}
      </p>
    </div>
  );
};

export default TestimonialCard;
