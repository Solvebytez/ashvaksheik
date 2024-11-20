import BreadcumBanner from "@/components/Global/BreadcumBanner";
import Container from "@/components/Global/Container";
import SubmitButton from "@/components/Global/SubmitButton";
import Clwantail from "@/components/Home/Clwantail";
import WorkWith from "@/components/Home/WorkWith";
import ImageCard1 from "@/components/ImageCard1";
import Image from "next/image";
import StepForm from "@/components/Form/Step-Form/StepForm";
import { seTtingsData } from "@/lib/Data/SettingSData";



const buyersSteps = [
  {
    id: 1,
    title: "Understand Why You're Selling",
    description:
      "What do you want to accomplish with the sale of your home? Do you want to make a certain amount of money that you can put toward a larger or nicer home? Do you need to sell it as soon as possible to facilitate a move to a new city or area? Once you understand your needs, you can better craft your offer. For example, if you need to sell quickly, you might want to price your home lower than if your goal is to make a certain profit margin. Make sure you convey these needs to your realtor once you choose one so he or she can adjust your selling price accordingly.",
    image:
      "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/z2slyi8lfqzvap2ihwav/buyers1", // replace with the actual image path
  },
  {
    id: 2,
    title: "Determine Selling Price",
    description:
      "Knowing how to price your home is one of the most important parts of the selling process. When you set a fair price in the beginning, you’ll get the most interest from other real estate agents and prospective buyers. Overpricing your home could lead to reduced interest, and underpricing leads to receiving less than what your home is worth. Working with a real estate agent is the best way to determine the right selling price for your home. An agent with experience can determine what other comparable homes are selling for, evaluate the current market, and may even suggest a home appraisal.",
    image:
      "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/qrsgawei2jqspwpmi3vm/buyers2", // replace with the actual image path
  },
  {
    id: 3,
    title: "Start Preparations",
    description:
      "If you’ve kept your home in showroom condition since you’ve lived in it, you’re in the minority of homeowners. Once you price your home, it’s time to start getting it ready to be shown to potential buyers. This includes getting rid of clutter, depersonalizing the space so that buyers can envision themselves in the space, making any small repairs, and doing a deep clean to make sure your home is in pristine condition.",
    image:
      "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/omj9qa6nybgq0rzsrq8k/sellers-3", // replace with the actual image path
  },
  {
    id: 4,
    title: "Develop a Marketing Strategy",
    description:
      "I will develop a marketing strategy that is perfect for advertising your home. This involves listing the home and then driving the right people to that listing through social media campaigns, agent-to-agent referrals, traditional media, or SEO advertising. My team creates a marketing campaign that aims to get the most possible traffic to your listing in the first three weeks after becoming a client.",
    image:
      "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/bxiqswplj6kfrfuovfcy/sellers-4", // replace with the actual image path
  },
  {
    id: 5,
    title: "Evaluate Offers",
    description:
      "Receiving an offer is an exciting part of the process, but it doesn’t mean the journey is over. We will evaluate each offer and make sure the party making the offer is prequalified or pre-approved by a mortgage lender and that their offer is acceptable to you. If the offer is too low, you can make a counter-offer or offer other ways to bridge the gap, such as covering some or all of the closing costs, making repairs, adjusting the move-in date, or leaving some appliances or fixtures for the new buyer.",
    image:
      "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/knsfbv1s84ah8y8i6sgv/sellers-5", // replace with the actual image path
  },
  {
    id: 6,
    title: "Accept an Offer",
    description:
      "Once we deem the offer is acceptable, we will review the proposed contract to make sure it’s all in order and includes the necessary components such as deposit amount, down payment, financing, inspection rights and repair allowances, contingencies, settlement date, and a list of fees and who will pay them. When both parties have agreed to the term, a final contract will be prepared by your agent.",
    image:
      "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/qrsgawei2jqspwpmi3vm/buyers2", // replace with the actual image path
  },
  {
    id: 7,
    title: "Get Ready to Close",
    description:
      "You have accepted an offer and are now very close to the end of your selling journey. But first, you and the buyer must make a list of what needs to be done before closing. In some cases, your home may need to be formally inspected, surveyed, and appraised. In other cases, major or minor repairs will need to be made before the house can close. I will head up efforts to develop and execute this list, get each action item paid for by the correct party, and make sure everything is in order by the closing date. A few days before the closing date, we will call the company closing the transaction to make sure everything is ready to go. If you haven’t done so already, you also need to make arrangements to move out of the home so the new buyer can take possession.",
    image:
      "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/z2slyi8lfqzvap2ihwav/buyers1", // replace with the actual image path
  },
  {
    id: 8,
    title: "Accept an Offer",
    description:
      "You’ve reached the last step in the seller’s process. When you close on a home you are selling, you are legally transferring ownership of the property to the new buyer. We will meet with the company closing the transaction to sign the final paperwork and go over any issues that have not yet been taken care of. During this time, you can also make plans with your realtor to handle final details such as canceling utilities, cable, and lawn or trash services, changing the name on accounts that the new owner is retaining and ensuring the new owner has instructions for all appliances that will remain in the home.",
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
        bgLogo="https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="bg-cover"
      />
      <div className="bg-black text-white py-16 text-center mb-16">
        <Container>
          <h2 className="text-5xl tracking-[5px] font-tenor_Sans uppercase">
          A Step-by-Step First Time {"Seller's"} Guide
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
                Please complete the following form to download our Home {"Buyer's"}
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
                    By providing  Ashvak Sheik your contact information, you
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
      {seTtingsData.map((item) => (
        <ImageCard1 key={item.title} imageUrl={item.image} title={item.title} link={item.link} />
      ))}
      </div>
    </Container>    
    <WorkWith/>
    </div>
  );
};

export default SellersPage;
