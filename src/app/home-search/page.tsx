import BreadcumBanner from "@/components/Global/BreadcumBanner";
import Container from "@/components/Global/Container";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import HomeSearchForm from "./HomeSearchForm";

export const metadata = pageMetadata({
  title: "Home Search in the GTA",
  description:
    "Tell Ashvak Sheik what you want to buy in Brampton, Mississauga, Toronto, or the GTA. He sends matching homes, including off-market listings when they fit.",
  path: "/home-search",
  keywords: [
    "home search GTA",
    "Brampton homes for sale",
    "Mississauga realtor",
    "Toronto realtor home search",
    "Telugu realtor home search",
  ],
});

const HomeSearchpage = () => {
  return (
    <div className="bg-black ">
      <BreadcumBanner
        pageTitle="Home Search"
        description="Ashvak Sheik helps buyers search homes across Brampton, Mississauga, Toronto, and the Greater Toronto Area."
        bgLogo="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/lejhcjvknr7hwl3ctzld/press-and-media"
      />
      <div className="flex flex-col justify-center py-10 items-center ">
        <h2 className="text-center text-2xl md:text-5xl font-tenor_Sans tracking-[2px] md:tracking-[5px] text-white py-6 md:py-10 uppercase px-4 leading-tight">
          Request Your Property
        </h2>
        <p className="text-center text-white/75 text-sm md:text-base max-w-3xl px-6 leading-7 mb-2">
          Looking for a{" "}
          <Link href="/brampton-realtor" className="underline text-white">
            Brampton realtor
          </Link>
          ,{" "}
          <Link href="/mississauga-realtor" className="underline text-white">
            Mississauga realtor
          </Link>
          , or{" "}
          <Link href="/toronto-realtor" className="underline text-white">
            Toronto realtor
          </Link>
          ? Complete the form and Ashvak Sheik at Re/Max Millennium Real Estate will send matching GTA listings. Telugu, Hyderabadi, Muslim, and Desi buyers can also see{" "}
          <Link href="/telugu-realtor" className="underline text-white">
            /telugu-realtor
          </Link>{" "}
          or call 647-890-0982.
        </p>
      </div>
      <Container>
        <HomeSearchForm />
      </Container>
    </div>
  );
};

export default HomeSearchpage;
