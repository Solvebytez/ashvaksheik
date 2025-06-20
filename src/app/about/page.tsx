import BreadcumBanner from "@/components/Global/BreadcumBanner";
import Container from "@/components/Global/Container";
import SocialProfile from "@/components/Global/SocialProfile";
import Brand from "@/components/Home/Brand";
import Builders from "@/components/Home/Builders";
import WorkWith from "@/components/Home/WorkWith";
import Image from "next/image";


const AboutPage = () => {
  return (
    <div>
      <BreadcumBanner
        pageTitle="About ASHVAK"
        bgLogo="/bg-ashvaik.jpg"
        className="bg-contain bg-no-repeat"
        backGroundPostion="center top"
      />
      <Container>
        <div className="lg:grid grid-cols-12 gap-28 py-20">
          <div className="col-span-5 ">
            <div className="relative w-full" style={{ aspectRatio: "16 / 20" }}>
              <Image
                alt=""
                src={"/profile.jpeg"}
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>
          <div className="col-span-6 text-white">
            <h1 className="text-5xl font-tenor_Sans tracking-[4px] mb-4 pt-16 lg:pt-0 uppercase">
            Ashvak Sheik
            </h1>
            <h2 className="text-lg font-tenor_Sans tracking-[3px] mb-8">
            REALTOR
            </h2>

            <div className="mb-6">
              <h3 className="text-sm font-semibold tracking-wider mb-1">
                PRIMARY PHONE
              </h3>
              <a
                href="tel:6478900982"
                className="text-lg font-bold underline hover:text-gray-300"
              >
                647-890-0982
              </a>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-semibold tracking-wider mb-1">
                EMAIL
              </h3>
              <a
                href="mailto:ashvak.realtor07@gmail.com"
                className="text-lg font-bold underline hover:text-gray-300"
              >
                ashvak.realtor07@gmail.com
              </a>
            </div>

            <div className="mb-14">
              <h3 className="text-md tracking-wider mb-1">ADDRESS</h3>
              <p className="text-lg font-bold">
              155 Salvation Rd, Brampton, ON L7A 0W7
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
            As a dedicated realtor in the Greater Toronto Area, I’ve had the privilege of witnessing our vibrant city grow and evolve, attracting families, professionals, and newcomers from all walks of life. I’m honored to be part of this journey, helping clients find not just a property, but a place they can truly call home.

            </p>
            <p className="mb-4">
            For me, home is more than just a location; {"it's"} a sense of comfort and belonging. I’m here to help you find that feeling, whether {"you're"} looking to plant roots or invest in your future within this diverse community.
            </p>
            <p className="mb-4">
            Representing GTA homeowners and future residents, I bring a commitment to integrity, resourcefulness, and understanding of my clients’ unique needs. I pride myself on listening carefully, paying attention to the details that matter most to you, and ensuring your real estate journey is as smooth and rewarding as possible.

            </p>
            <p className="mb-4">
            With a background rooted in customer service, I have a deep appreciation for the importance of clear communication and exceptional service. Transitioning into real estate allowed me to combine my skills and passion for helping others. {"There's"} nothing more fulfilling than seeing the satisfaction of clients who have found their ideal home, and {"I'm"} here to make that experience as positive as it can be for you.

            </p>
          </div>
          <hr className=" border-white/10 my-6" />
        </div>
        <div className="py-16 bg-black text-white w-full flex flex-col md:flex-row justify-between">
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
      <Builders/>
      <WorkWith />
    </div>
  );
};

export default AboutPage;
