import LinkButton from "../Global/Button";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden min-h-[100vh] md:h-[calc(90vh-50px)]" id="home">
      <div className="absolute left-0 md:left-[34%] top-[38%] z-10">
      <div className="flex flex-col justify-center items-center text-white">
        <h3>WELCOME TO</h3>
        <h1 className="text-[40px] leading-[3.5rem] md:text-[70px] tenor_Sans tracking-[6px] text-center my-0 md:my-8 uppercase">Ashvak Sheik</h1>
        <strong className="italic">#1 Remax Agent in Guelph</strong>
        <p className="!my-6 text-center">Setting the standard in Real Estate. Just as intended.</p>
        <LinkButton btnText="Home Search" href="#" className="!mt-14"/>
      </div>
      </div>
      <div
      className="video-container"
      style={{
        height: '100vh', // Full viewport height
        width: '100%',   // Full width
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <video
        className=""
        poster="https://images.unsplash.com/photo-1605146769289-440113cc3d00?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        style={{
          height: '100%',  // Full height of the parent container
          width: '100%',   // Full width
          objectFit: 'cover', // Ensures video covers container without losing aspect ratio
        }}
        loop
        muted
        autoPlay
        playsInline
      >       
      </video>
    </div>
           
    </div>
  );
};

export default HeroSection;
