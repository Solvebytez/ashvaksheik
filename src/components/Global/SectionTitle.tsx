'use client'



type SectionTitleProps = {
  title: string;
  description: string;
  bgLogo?: string;
  titleNumber: number;
};

const SectionTitle = ({ bgLogo, description, title,titleNumber }: SectionTitleProps) => {
    const sectionStyle = {
        background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)), url(${bgLogo?bgLogo:'https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/gyommycouuod40setpi0/rl-bg'})`,
        WebkitBackgroundSize: 'contain',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        WebkitBackgroundPosition: '100% 60%',
        backgroundPosition: '100% 60%',
        color: 'rgba(255, 255, 255, 1)',
        backgroundColor: 'rgba(0, 0, 0, 1)',

      };

  return (
  
     <div
      style={sectionStyle}
      className="relative bg-black text-white  px-6 pt-16 pb-12"
    >
      {/* Top line with numbering and description */}
      <div className="flex items-center text-sm mb-4 tracking-[1px] leading-6">
       <p className="text-[16px] mb-0 md:mb-5">
       <span className="mr-2">{titleNumber}</span>
       <span className="border-t border-white w-16 mr-2 borer-3 inline-block"></span> {description}
       </p>
       
      </div>

      {/* Main heading */}
      <h1 className="text-3xl sm:text-3xl md:text-[43px] font-light tracking-[6px] uppercase mb-4 tenor_Sans">
        {title}
      </h1>
    </div>

  );
};

export default SectionTitle;
