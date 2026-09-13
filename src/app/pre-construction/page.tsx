import Container from "@/components/Global/Container";
import PreConstruction from "@/components/PreConstruction/PreConstruction";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "GTA Pre-Construction Homes",
  description:
    "Browse GTA pre-construction in Brampton, Mississauga, Oakville, Milton, and Toronto with Ashvak Sheik, Realtor at Re/Max Millennium Real Estate.",
  path: "/pre-construction",
  keywords: [
    "GTA pre-construction",
    "Brampton pre-construction",
    "Mississauga pre-construction",
    "Toronto pre-construction realtor",
    "Hyderabadi realtor pre-construction",
  ],
});

const PreConstructionPage = () => {
  const sectionStyle = {
    background:
      "url('https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
    WebkitBackgroundSize: "cover",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    WebkitBackgroundPosition: "100% 60%",
    backgroundPosition: "100% 60%",
    color: "rgba(255, 255, 255, 1)",
    backgroundColor: "rgba(0, 0, 0, 1)",
  };
  return (
    <div>
      <div
        style={sectionStyle}
        className={`relative  text-white h-[42vh] md:h-[calc(70vh)] bg-cover bg-no-repeat`}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-70 w-full px-6 pt-20 pb-10">
          <div className="flex flex-col items-center space-y-6">
            <Container>
              <h1 className="text-2xl md:text-6xl font-tenor_Sans tracking-[2px] md:tracking-[6px] uppercase text-center leading-tight">
                EXCLUSIVE PRECONSTRUCTION
              </h1>
            </Container>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center py-10 items-center ">
        <h2 className="text-center text-2xl md:text-5xl font-tenor_Sans tracking-[2px] md:tracking-[5px] text-white py-6 md:py-10 uppercase px-4 leading-tight">
          EXPLORE OUR EXCLUSIVE PROJECTS
        </h2>
        <p className="text-center text-white/80 max-w-3xl px-4 text-sm md:text-base leading-7">
          Ashvak Sheik helps buyers with GTA pre-construction in{" "}
          <Link href="/neighborhoods/brampton" className="underline text-white">
            Brampton
          </Link>
          ,{" "}
          <Link href="/neighborhoods/mississauga" className="underline text-white">
            Mississauga
          </Link>
          ,{" "}
          <Link href="/neighborhoods/oakville" className="underline text-white">
            Oakville
          </Link>
          ,{" "}
          <Link href="/neighborhoods/milton" className="underline text-white">
            Milton
          </Link>
          , and{" "}
          <Link href="/neighborhoods/toronto" className="underline text-white">
            Toronto
          </Link>
          . Occupancy dates and availability change — tap Interested and he confirms what is still open. Telugu, Hyderabadi, Muslim, and Desi buyers can also start at{" "}
          <Link href="/hyderabadi-realtor" className="underline text-white">
            /hyderabadi-realtor
          </Link>{" "}
          or call 647-890-0982.
        </p>
        <p className="font-tenor_Sans text-base md:text-xl text-center px-4 mt-4 leading-7 text-white/90 max-w-3xl">
          As a Diamond Agent, Ashvak provides clients with privileged access to
          premier pre-construction projects across the GTA from trusted builders.
        </p>
      </div>
      <div>
        <Container>
          <PreConstruction />
        </Container>
      </div>
    </div>
  );
};

export default PreConstructionPage;
