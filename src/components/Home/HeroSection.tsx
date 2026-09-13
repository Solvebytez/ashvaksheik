import LinkButton from "../Global/Button";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden min-h-[100svh] md:h-[calc(90vh-50px)]" id="home">
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
        <div className="flex flex-col justify-center items-center text-white max-w-3xl">
          <h3 className="text-xs md:text-base tracking-[3px]">WELCOME TO</h3>
          <h1 className="text-[32px] leading-tight sm:text-[40px] md:text-[70px] tenor_Sans tracking-[2px] md:tracking-[6px] text-center my-3 md:my-8 uppercase">
            Ashvak Sheik
          </h1>
          <strong className="italic text-center text-sm md:text-base px-2">
            Re/Max Millennium Real Estate
          </strong>
          <p className="my-4 md:my-6 text-center text-sm md:text-base px-2">
            Setting the standard in Real Estate. Just as intended.
          </p>
          <LinkButton btnText="Home Search" href="/home-search" className="mt-8 md:mt-14" />
        </div>
      </div>
      <div
        className="video-container"
        style={{
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <video
          className=""
          poster="https://images.unsplash.com/photo-1605146769289-440113cc3d00?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
          loop
          muted
          autoPlay
          playsInline
        >
          <source src="/realState.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
