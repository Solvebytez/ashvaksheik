import BreadcumBanner from "@/components/Global/BreadcumBanner";
import LinkButton from "@/components/Global/Button";
import Container from "@/components/Global/Container";
import SubmitButton from "@/components/Global/SubmitButton";
import Clwantail from "@/components/Home/Clwantail";

import WorkWith from "@/components/Home/WorkWith";
import ImageCard1 from "@/components/ImageCard1";
import Image from "next/image";

import StepForm from "@/components/Form/Step-Form/StepForm";


const images = [
    {
      title: 'HOME SEARCH',
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      title: 'HOME VALUATION',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      title: 'CONTACT US',
      image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
  ];

const buyersSteps = [
  {
    id: 1,
    title: "RESEARCH",
    description:
      "Do you already know where you want to buy? If you want a condo, townhome, or single-family home? Which features do you like and dislike? What’s available on the market now? If you answered no to any of these questions, now is the time to start researching. In addition to looking for homes that interest you, also take note of any changes in asking prices. This could give you valuable insight into housing trends in specific neighborhoods and help you when the time comes to make an offer.",
    image:
      "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/z2slyi8lfqzvap2ihwav/buyers1", // replace with the actual image path
  },
  {
    id: 2,
    title: "DECIDE ON YOUR BUDGET",
    description:
      "Do you already know where you want to buy? If you want a condo, townhome, or single-family home? Which features do you like and dislike? What’s available on the market now? If you answered no to any of these questions, now is the time to start researching. In addition to looking for homes that interest you, also take note of any changes in asking prices. This could give you valuable insight into housing trends in specific neighborhoods and help you when the time comes to make an offer.",
    image:
      "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/qrsgawei2jqspwpmi3vm/buyers2", // replace with the actual image path
  },
];

const SellersPage = () => {
  return (
    <div className="bg-white">
      <BreadcumBanner
        pageTitle="Seller's Guide"
        description="Everything you need to know about putting your home on the market, accepting an offer, and closing on your home."
        bgLogo="https://res.cloudinary.com/luxuryp/images/w_2560,c_limit,f_auto,q_auto/kmoxkafe9anaey0gulzc/5heedurq"
      />
      <div className="bg-black text-white py-16 text-center mb-16">
        <Container>
          <h2 className="text-5xl tracking-[5px] font-tenor_Sans uppercase">
          A Step-by-Step First Time Seller's Guide
          </h2>
          <p className="px-10 my-10">
          Putting your home on the market can be a stressful process, especially when you don’t know what to expect. Fortunately, with the help of an experienced agent  and this easy to follow  guide, you can smoothly complete the process. Following these steps  will help you prepare so you can get organized and sell your home for  the best price possible.​​​​​​​
          </p>
        </Container>
      </div>
      <Container>
        <div className="flex flex-col space-y-12 md:space-y-16">
          {buyersSteps.map((step, index) => (
            <div
              key={step.id}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } space-y-6 md:space-y-0 `}
            >
              <div className="md:w-1/2">
                <img
                  src={step.image}
                  alt={`Step ${step.id}`}
                  className="w-full"
                />
              </div>
              <div
                className={`md:w-1/2 space-y-4  ${
                  index % 2 === 0 ? "lg:pl-28" : "lg:pr-28"
                }`}
              >
                <h2 className="text-2xl tracking-[4px] font-tenor_Sans uppercase">
                  STEP {step.id}:
                </h2>
                <h3 className="text-4xl tracking-[4px] font-tenor_Sans uppercase">
                  {step.title}
                </h3>
                <p className="text-black">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <div className="bg-black text-white py-16 text-center mt-16">
        <Container>
          <h2 className="text-5xl tracking-[5px] font-tenor_Sans uppercase">
            Congratulations!
          </h2>
          <p className="px-10 my-10">
            After signing the final paperwork to complete the purchase, you are
            now the owner of a new house. It may take a few days for your loan
            to be funded once the paperwork has been returned to the lender, but
            once that check is delivered to the seller, you’ll be all set to
            move into the home of your dreams.
          </p>
        </Container>
      </div>
      <div
      className="relative overflow-hidden mb-16"
      id="home"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/luxuryp/images/w_2560,c_limit,f_auto,q_auto/xqkagi4absou6ymnzlbs/shutterstock_1315328237')",
      }}
    >
      <div className="bg-black bg-opacity-70 text-white py-[4rem] flex flex-col justify-center items-center h-full">
      <div className="flex flex-col items-center justify-center h-full mt-[120px]">
        <StepForm />
      </div>
      </div>
    </div>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="lg:grid grid-cols-10 pb-10 items-center justify-center gap-20">
            <div className="col-span-5">
              <h2 className="text-3xl uppercase tracking-[5px] font-tenor_Sans mb-8">
                Please complete the following form to download our Home Buyer's
                Guide.
              </h2>
              <form>
                <input
                  type="email"
                  placeholder="Name"
                  className="w-full bg-white border border-black  p-2 text-black mb-4 focus:outline-none h-[4rem]"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white border border-black  p-2 text-black mb-4 focus:outline-none h-[4rem]"
                />
                <div className="text-xs text-black mb-4">
                  <input type="checkbox" className="mr-2" />
                  <span className="!text-justify">
                    By providing Rahul Luthra your contact information, you
                    acknowledge and agree to our{" "}
                    <a href="/privacy-policy" className=" underline">
                      Privacy Policy
                    </a>{" "}
                    and consent to receiving marketing communications, including
                    through automated calls, texts, and emails, some of which
                    may use artificial or prerecorded voices. This consent isn’t
                    necessary for purchasing any products or services and you
                    may opt out at any time. To opt out from texts, you can
                    reply, ‘stop’ at any time. To opt out from emails, you can
                    click on the unsubscribe link in the emails. Message and
                    data rates may apply.
                  </span>
                </div>
                <SubmitButton btnText="Send" className="!border-black" />
              </form>
            </div>
            <div className="col-span-4">
              <div
                className="relative w-full"
                style={{ aspectRatio: "16 / 20" }}
              >
                <Image
                  alt=""
                  src="https://images.pexels.com/photos/28865272/pexels-photo-28865272/free-photo-of-cozy-indoor-garden-with-elegant-vintage-furniture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  layout="fill"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="bg-black">
      <Clwantail/>
      </div>     
     <Container className="mb-20">
     <div className="flex flex-col md:grid grid-cols-3 gap-6 mb-10 my-16">
      {images.map((item) => (
        <ImageCard1 key={item.title} imageUrl={item.image} title={item.title} />
      ))}
      </div>
    </Container>    
    <WorkWith/>
    </div>
  );
};

export default SellersPage;
