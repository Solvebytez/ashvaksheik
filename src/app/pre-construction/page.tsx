import Container from "@/components/Global/Container";
import PreConstruction from "@/components/PreConstruction/PreConstruction";

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
        className={`relative  text-white h-[calc(70vh)] bg-cover bg-no-repeat`}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-70 w-full px-6 pt-16 pb-16">
          <div className="flex flex-col items-center space-y-6">
            <h1 className="text-7xl font-tenor_Sans tracking-[6px] uppercase text-center">
              EXCLUSIVE PRECONSTRUCTION OPPORTUNITIES
            </h1>
            <Container>
              <p className="font-tenor_Sans text-xl text-center">
                As a Diamond Agent, I provide my clients with privileged access
                to premier preconstruction projects across the GTA, offering
                exclusive opportunities and priority access to top developments
                from trusted builders.
              </p>
            </Container>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center py-10 items-center ">
        <h2 className="text-center text-5xl font-tenor_Sans tracking-[5px] text-white py-10 uppercase">
          EXPLORE OUR EXCLUSIVE PROJECTS
        </h2>
        <p className="text-center text-white">Browse our selection of premier preconstruction developments and find your next investment. Express your interest to receive personalized project details.
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
