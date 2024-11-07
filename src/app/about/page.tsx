import BreadcumBanner from "@/components/Global/BreadcumBanner";
import Container from "@/components/Global/Container";
import SocialProfile from "@/components/Global/SocialProfile";
import Brand from "@/components/Home/Brand";
import ExclusiveList from "@/components/Home/ExclusiveList";
import WorkWith from "@/components/Home/WorkWith";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div>
      <BreadcumBanner
        pageTitle="About Ashfaq"
        bgLogo="https://res.cloudinary.com/luxuryp/images/w_2560,c_limit,f_auto,q_auto/swtxreapht0btdonzuh9/dsc09636"
      />
      <Container>
        <div className="lg:grid grid-cols-12 gap-28 py-20">
          <div className="col-span-5 ">
            <div className="relative w-full" style={{ aspectRatio: "16 / 20" }}>
              <Image
                alt=""
                src="https://res.cloudinary.com/luxuryp/images/w_960,c_limit,f_auto,q_auto/twdhe35e2omkntpirxju/rahul"
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>
          <div className="col-span-6 text-white">
            <h1 className="text-5xl font-tenor_Sans tracking-[4px] mb-4 pt-16 lg:pt-0">
              RAHUL LUTHRA
            </h1>
            <h2 className="text-lg font-tenor_Sans tracking-[3px] mb-8">
              BROKER
            </h2>

            <div className="mb-6">
              <h3 className="text-sm font-semibold tracking-wider mb-1">
                PRIMARY PHONE
              </h3>
              <a
                href="tel:5198296165"
                className="text-lg font-bold underline hover:text-gray-300"
              >
                (519) 829-6165
              </a>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-semibold tracking-wider mb-1">
                EMAIL
              </h3>
              <a
                href="mailto:rahul@theluthragroup.com"
                className="text-lg font-bold underline hover:text-gray-300"
              >
                rahul@theluthragroup.com
              </a>
            </div>

            <div className="mb-14">
              <h3 className="text-md tracking-wider mb-1">ADDRESS</h3>
              <p className="text-lg font-bold">
                238 Speedvale Ave W, <br />
                Guelph, ON N1H 1C4
              </p>
            </div>
            <SocialProfile />
          </div>
        </div>

        <div className="text-white">
          <h1 className="text-4xl font-tenor_Sans tracking-[6px] mb-4 uppercase">
            Get To Know Me
          </h1>
          <hr className=" border-white/10 my-6" />
          <div>
            <p className="mb-4">
              As a first-generation born and raised Guelphite, Rahul has
              witnessed Guelph transform from a small town to a highly
              sought-after community for families and young working
              professionals.
            </p>
            <p className="mb-4">
              Home is a feeling, rather than a place, and Rahul is committed to
              helping you find that feeling, in the city which he has had the
              pleasure of calling home for years on end.
            </p>
            <p className="mb-4">
              Representing Guelph and Tri-city homeowners, both current and
              future, Rahul has an unmatched devotion to his clients. He prides
              himself on being resourceful and empathetic to your needs and
              desires, all whilst focusing on the small details that matter
              most. Dedication, integrity, and honesty are at the forefront of
              Rahul’s business and are fundamental in ensuring you receive the
              best care every step of the way.
            </p>
            <p className="mb-4">
              In the world of customer service, Rahul is a seasoned
              professional. Through his several managerial positions previously
              held in the hospitality sector, Rahul always knew a transition
              into Real Estate would allow him to utilize his strengths in the
              most meaningful way possible. Nothing means more to Rahul than
              putting a smile on his clients’ faces, only now it is a smile that
              comes from helping his clients find their feeling of home.
            </p>
          </div>
          <hr className=" border-white/10 my-6" />
        </div>
        <div className="py-16 bg-black text-white w-full flex justify-between">
          <h2 className="text-2xl font-tenor_Sans tracking-wider text-right mr-24 mb-6 w-1/4">
            EXPERTISE
          </h2>
          <div className=" w-3/4">
            <div className="grid grid-cols-2 gap-y-8 gap-x-16 ">
              <div className="text-sm font-bold">CONDOMINIUMS</div>
              <div className="text-sm font-bold">FORECLOSURE PROPERTY</div>
              <div className="text-sm font-bold">INVESTMENTS</div>
              <div className="text-sm font-bold">LUXURY HOMES</div>
              <div className="text-sm font-bold">NEW CONSTRUCTION</div>
              <div className="text-sm font-bold">POWER OF SALE</div>
              <div className="text-sm font-bold">RELOCATION</div>
              <div className="text-sm font-bold">RENTALS</div>
              <div className="text-sm font-bold">RESIDENTIAL ACREAGES</div>
            </div>
          </div>
        </div>
      </Container>
      <Brand />
      <ExclusiveList />
      <WorkWith />
    </div>
  );
};

export default AboutPage;
