
const BreadcumBanner = ({bgLogo,pageTitle,description}:{bgLogo?:string;pageTitle:string;description?:string}) => {
    const sectionStyle = {
        background: bgLogo? `url(${bgLogo?bgLogo:'https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/gyommycouuod40setpi0/rl-bg'})`:'#000',
        WebkitBackgroundSize: 'cover',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        WebkitBackgroundPosition: '100% 60%',
        backgroundPosition: '100% 60%',
        color: 'rgba(255, 255, 255, 1)',
        backgroundColor: 'rgba(0, 0, 0, 1)',

      };
  return (
    <div
    style={sectionStyle}
    className="relative  text-white h-[calc(70vh)]"
  >
    <div className="flex items-center justify-center h-full bg-black bg-opacity-40 w-full px-6 pt-16 pb-16">
      <div className="flex flex-col items-center space-y-6">
        <h1 className="text-7xl font-tenor_Sans tracking-[6px] uppercase">{pageTitle}</h1>
        {description && <p className="font-tenor_Sans text-xl">{description}</p> }
      </div>
    </div>
  </div>
  )
}

export default BreadcumBanner