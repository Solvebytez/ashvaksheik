const BreadcumBanner = ({bgLogo,pageTitle,description,className,backGroundPostion}:{bgLogo?:string;pageTitle:string;description?:string;className?:string;backGroundPostion?:string}) => {
    const sectionStyle = {
        background: bgLogo? `url(${bgLogo?bgLogo:'https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/gyommycouuod40setpi0/rl-bg'})`:'#000',
        WebkitBackgroundSize: 'cover',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
       WebkitBackgroundPosition: backGroundPostion || '100% 60%',
  backgroundPosition: backGroundPostion || '100% 60%',
        color: 'rgba(255, 255, 255, 1)',
        backgroundColor: 'rgba(0, 0, 0, 1)',

      };
  return (
    <div
    style={sectionStyle}
    className={`relative text-white h-[42vh] md:h-[70vh] bg-cover ${className}`}
  >
    <div className="flex items-center justify-center h-full bg-black bg-opacity-40 w-full px-6 pt-20 pb-10">
      <div className="flex flex-col items-center space-y-4 md:space-y-6 max-w-4xl">
        <h1 className="text-2xl sm:text-3xl md:text-6xl font-tenor_Sans tracking-[2px] md:tracking-[6px] uppercase text-center leading-tight">{pageTitle}</h1>
        {description && <p className="font-tenor_Sans text-sm md:text-xl text-center px-1 leading-6 md:leading-8">{description}</p> }
      </div>
    </div>
  </div>
  )
}

export default BreadcumBanner
