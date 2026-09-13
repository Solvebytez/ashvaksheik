import BreadcumBanner from "@/components/Global/BreadcumBanner";
import Container from "@/components/Global/Container";
import SocialProfile from "@/components/Global/SocialProfile";
import Brand from "@/components/Home/Brand";
import Builders from "@/components/Home/Builders";
import WorkWith from "@/components/Home/WorkWith";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "GTA Realtor",
  description:
    "Ashvak Sheik is a Telugu-speaking Hyderabadi Muslim realtor in the GTA with Re/Max President Realty Brokerage. Helping buyers and sellers in Brampton, Mississauga, and Toronto.",
  keywords: [
    "Telugu realtor GTA",
    "Hyderabadi realtor Toronto",
    "Muslim realtor Brampton",
    "Indian realtor GTA",
  ],
  path: "/about",
});

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
        <div className="lg:grid grid-cols-12 gap-8 lg:gap-28 py-10 md:py-20">
          <div className="col-span-5 ">
            <div className="relative w-full" style={{ aspectRatio: "16 / 20" }}>
              <Image
                alt="Ashvak Sheik, Realtor at Re/Max President Realty Brokerage"
                src={"/profile.jpeg"}
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>
          <div className="col-span-6 text-white">
            <h2 className="text-3xl md:text-5xl font-tenor_Sans tracking-[2px] md:tracking-[4px] mb-4 pt-8 lg:pt-0 uppercase">
            Ashvak Sheik
            </h2>
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
          <h2 className="text-2xl md:text-4xl font-tenor_Sans tracking-[2px] md:tracking-[6px] mb-4 uppercase">
            Get To Know Me
          </h2>
          <hr className=" border-white/10 my-6" />
          <div>
            <p className="mb-4">
            I am a Telugu-speaking, Hyderabadi Muslim realtor in the Greater Toronto Area with Re/Max President Realty Brokerage. Families searching for a{" "}
            <Link href="/telugu-realtor" className="underline">Telugu realtor</Link>,{" "}
            <Link href="/hyderabadi-realtor" className="underline">Hyderabadi realtor</Link>,{" "}
            <Link href="/muslim-realtor" className="underline">Muslim realtor</Link>, or{" "}
            <Link href="/desi-realtor" className="underline">Indian / Desi realtor</Link>{" "}
            in Toronto, Brampton, or Mississauga can work with me in Telugu or English. I am listed on{" "}
            <a
              href="https://www.realtor.ca/agent/2199715/ashvak-sajidh-pash-sheik-81-zenway-blvd-25a-woodbridge-ontario-l4h0s5"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              realtor.ca as Ashvak Sajidh Pash Sheik
            </a>
            .
            </p>
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
        <div className="py-10 md:py-16 bg-black text-white w-full flex flex-col md:flex-row justify-between">
          <h2 className="text-2xl font-tenor_Sans tracking-wider text-left md:text-right md:mr-12 mb-6 w-full md:w-1/4">
            EXPERTISE
          </h2>
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
              <div className="text-sm font-bold">CONDOMINIUMS</div>
              <div className="text-sm font-bold">FORECLOSURE PROPERTY</div>
              <div className="text-sm font-bold">INVESTMENTS</div>
              <div className="text-sm font-bold">LUXURY HOMES</div>
              <div className="text-sm font-bold">NEW CONSTRUCTION</div>
              <div className="text-sm font-bold">POWER OF SALE</div>
              <div className="text-sm font-bold">RELOCATION</div>
              <div className="text-sm font-bold">RENTALS</div>
              <div className="text-sm font-bold">RESIDENTIAL ACREAGES</div>
              <div className="text-sm font-bold">TELUGU-SPEAKING CLIENTS</div>
              <div className="text-sm font-bold">HYDERABADI FAMILIES</div>
              <div className="text-sm font-bold">MUSLIM BUYERS AND SELLERS</div>
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
