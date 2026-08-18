const TestimonialCard = ({ initials, name, text, image }:{initials:string;name:string;text:string;image?:string}) => {
  return (
    <div className="flex flex-col space-y-4 my-8 p-6 gap-2 border-b border-white/10">
      <div className="flex items-center gap-4 font-tenor_Sans">
     <div className="flex items-center justify-center w-16 h-16 rounded-full border border-white/40 text-white text-xl font-bold">
        {image ? (
          <img src={image} alt={name} className="rounded-full w-full h-full object-cover" />
        ) : (
          <span>{initials}</span>
        )}
      </div>

      <h3 className="text-3xl md:text-4xl tracking-[4px] text-white uppercase">
        {name}
      </h3>
     </div>

      <p className="text-white/75 text-sm leading-7 tracking-wide">
        {text}
      </p>
    </div>
  );
};

export default TestimonialCard;
