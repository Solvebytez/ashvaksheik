import Container from "@/components/Global/Container";
import PreConstruction from "@/components/PreConstruction/PreConstruction";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "GTA Pre-Construction Homes",
  description:
    "Browse GTA pre-construction projects with Ashvak Sheik, Realtor at Re/Max President Realty Brokerage. Confirm availability and request packages.",
  path: "/pre-construction",
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
        <p className="text-center text-white max-w-3xl px-4 text-sm md:text-base">
          Browse current GTA pre-construction developments. Occupancy dates and
          availability change — click Interested and I will confirm what is still
          open and send you the latest packages.
        </p>
        <p className="font-tenor_Sans text-base md:text-xl text-center px-4 mt-4 leading-7">
                As a Diamond Agent, I provide my clients with privileged access
                to premier preconstruction projects across the GTA, offering
                exclusive opportunities and priority access to top developments
                from trusted builders.
              </p>
      </div>
      <div>
       <Container>
         <PreConstruction/>
       </Container>
      </div>
    </div>
  );
};

export default PreConstructionPage;
