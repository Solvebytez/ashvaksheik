/* eslint-disable @next/next/no-img-element */
import ConsultationModal from "@/components/ConsultationModal";
import BreadcumBanner from "@/components/Global/BreadcumBanner";
import Container from "@/components/Global/Container";
import Clwantail from "@/components/Home/Clwantail";
import WorkWith from "@/components/Home/WorkWith";
import ImageCard1 from "@/components/ImageCard1";
import { seTtingsData } from "@/lib/Data/SettingSData";
import Image from "next/image";
import GuideDownloadForm from "@/components/Form/GuideDownloadForm";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "First-Time Buyer Guide",
  description:
    "A step-by-step Ontario buyer guide from Ashvak Sheik, Realtor at Re/Max Millennium Real Estate, covering the GTA home purchase process.",
  path: "/buyers",
});

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
      "Notice I said to decide on your budget—not determine how much the mortgage company will give you. In many cases, a mortgage company will pre-approve you for more than you’re comfortable spending, which is why you need to determine the monthly payment you feel comfortable with before talking to a lender. This likely includes doing a full household budget and taking into consideration what changes other than a mortgage payment will occur once you move into your new home. If you’ve lived in an apartment or with roommates, you may overlook new expenses like garbage, water, or HOA fees that could easily blow your budget.",
    image:
      "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/qrsgawei2jqspwpmi3vm/buyers2", // replace with the actual image path
  },
  {
    id: 3,
    title: "Get Prequalified",
    description:
      "Just because you think you can afford a certain payment every month doesn’t mean the mortgage company will agree. Just as they may approve you for too large of an amount, they may also approve you for a lesser amount or deny you a mortgage altogether. Lack of time at a job, insufficient credit, past bankruptcies, or other financial issues can cause major problems when trying to secure a mortgage. Before you get your heart set on a home, talk to a mortgage professional to find out what amount you can qualify for. This will also be an advantage when you make an offer on a home, as some sellers won’t entertain offers from those who aren’t already prequalified for a loan.",
    image:
      "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/qrsgawei2jqspwpmi3vm/buyers2", // replace with the actual image path
  },
  {
    id: 4,
    title: "Choose a Real Estate Agent",
    description:
      "Can you shop for, look at, and ultimately make an offer on a home without a real estate agent? Technically yes, but why would you when it costs you nothing for an agent like me to take much of the stress off your shoulders? Not only will I help identify properties you might be interested in, arrange showings, and ultimately handle the offer process, but I also have a knowledge of the market that you don’t possess. I may be able to steer you away from certain homes or neighborhoods, suggest hidden gems, or give you pointers that will help you find your dream home for the right price.",
    image:
      "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/qrsgawei2jqspwpmi3vm/buyers2", // replace with the actual image path
  },
];

const buyersSteps2 = [
  {
    id: 1,
    title: "Find the Right Home",
    description:
      "This should be the most enjoyable step of the entire process (other than moving in!). I will arrange showings of homes you’re interested in that are within your price range. Take notes about what you like and don’t like, and make sure to pay attention to details. Turn light switches on and off, open and close doors, and run the faucets in various rooms. Don’t limit your inspection to the home itself. Make sure to take time to explore the neighborhood and keep an eye on traffic at certain times of the day, the parking situation, and how close it is to necessities like schools and grocery stores.",
    image:
      "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/z2slyi8lfqzvap2ihwav/buyers1", // replace with the actual image path
  },
  {
    id: 2,
    title: "Make an Offer",
    description:
      "Once you have selected the perfect home, work with your agent to craft a fair offer based on the value of comparable homes on the market. Depending on what the home is listed at and whether the current environment is a buyer’s or seller’s market, your offer may be below, at, or even above the asking price. I will be able to help you negotiate if you receive a counteroffer and reach an agreement. At this point, the house will go into escrow.",
    image:
      "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/qrsgawei2jqspwpmi3vm/buyers2", // replace with the actual image path
  },
  {
    id: 3,
    title: "Have the Home Inspected",
    description:
      "In most cases, your offer will be contingent on having the home inspected to ensure there is no major structural damage or large repairs needed. I can help you arrange this, and you can schedule it within days of making an offer. If there are no major issues, the process goes to step eight. If there is, you can renegotiate your offer based on what needs to be fixed, or you can withdraw it.",
    image:
      "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/qrsgawei2jqspwpmi3vm/buyers2", // replace with the actual image path
  },
  {
    id: 4,
    title: "Select Your Loan",
    description:
      "Work with your lender to lock in a mortgage that fits your budget and closing timeline. Compare rates, review conditions, and send any documents they request quickly so financing does not delay your deal.",
    image:
      "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/qrsgawei2jqspwpmi3vm/buyers2", // replace with the actual image path
  },
  {
    id: 5,
    title: "Get a Home Appraisal",
    description:
      "Your lender will have your new home appraised so they have their independent value of it. The appraisal is to ensure that all parties involved are paying a fair price for the house.",
    image:
      "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/z2slyi8lfqzvap2ihwav/buyers1", // replace with the actual image path
  },
  {
    id: 6,
    title: "Finish Paperwork",
    description:
      "No one looks forward to all the paperwork involved in buying a home, but it’s a necessary part of the process. Fortunately, everything will be arranged by your lender and title company and, when you’re finished, you’ll know you are the legal owner of your new home.",
    image:
      "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/qrsgawei2jqspwpmi3vm/buyers2", // replace with the actual image path
  },
  
];

const BuyersPage = () => {
  return (
    <div className="bg-black text-white">
      <BreadcumBanner
        pageTitle="Buyer's Guide"
        description="Everything you need to know about the process of buying a new home."
        bgLogo="https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="bg-cover"
      />
      <div className="bg-black text-white py-16 text-center mb-16">
        <Container>
          <h2 className="text-2xl md:text-5xl tracking-[2px] md:tracking-[5px] font-tenor_Sans uppercase leading-tight px-2">
            A Step-by-Step First Time <br className="hidden md:block" /> {"Buyer's"} Guide
          </h2>
          <p className="px-2 md:px-10 my-8 md:my-10 text-sm md:text-base leading-7">
            Buying a home in{" "}
            <Link href="/neighborhoods/brampton" className="underline">Brampton</Link>,{" "}
            <Link href="/neighborhoods/mississauga" className="underline">Mississauga</Link>, or{" "}
            <Link href="/neighborhoods/toronto" className="underline">Toronto</Link>{" "}
            is easier when you know the Ontario process. This first-time buyer’s guide from Ashvak Sheik at Re/Max Millennium Real Estate walks you through each step. Telugu, Hyderabadi, Muslim, and Desi buyers can also start at{" "}
            <Link href="/telugu-realtor" className="underline">/telugu-realtor</Link>,{" "}
            <Link href="/faq" className="underline">/faq</Link>, or{" "}
            <Link href="/home-search" className="underline">/home-search</Link>.
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
                <h2 className="text-xl md:text-2xl text-white tracking-[2px] md:tracking-[4px] font-tenor_Sans uppercase">
                  STEP {step.id}:
                </h2>
                <h3 className="text-2xl md:text-4xl text-white tracking-[2px] md:tracking-[4px] font-tenor_Sans uppercase leading-tight">
                  {step.title}
                </h3>
                <p className="text-white/80 leading-7">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
     <ConsultationModal/>

      <Container>
        <div className="flex flex-col space-y-12 md:space-y-16">
          {buyersSteps2.map((step, index) => (
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
                <h2 className="text-xl md:text-2xl text-white tracking-[2px] md:tracking-[4px] font-tenor_Sans uppercase">
                  STEP {step.id+4}:
                </h2>
                <h3 className="text-2xl md:text-4xl text-white tracking-[2px] md:tracking-[4px] font-tenor_Sans uppercase leading-tight">
                  {step.title}
                </h3>
                <p className="text-white/80 leading-7">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <div className="bg-black text-white py-16 text-center my-16">
        <Container>
          <h2 className="text-2xl md:text-5xl tracking-[2px] md:tracking-[5px] font-tenor_Sans uppercase">
            Congratulations!
          </h2>
          <p className="px-2 md:px-10 my-8 md:my-10 text-sm md:text-base leading-7">
            After signing the final paperwork to complete the purchase, you are
            now the owner of a new house. It may take a few days for your loan
            to be funded once the paperwork has been returned to the lender, but
            once that check is delivered to the seller, you’ll be all set to
            move into the home of your dreams.
          </p>
        </Container>
      </div>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="lg:grid grid-cols-10 pb-10 items-center justify-center gap-20">
            <div className="col-span-5">
              <h2 className="text-2xl md:text-3xl text-white uppercase tracking-[2px] md:tracking-[5px] font-tenor_Sans mb-8 leading-tight">
                Please complete the following form to download our Home Buyer{"'"}s
                Guide.
              </h2>
              <GuideDownloadForm guideName="Home Buyer's Guide" />
            </div>
            <div className="col-span-4">
              <div
                className="relative w-full"
                style={{ aspectRatio: "16 / 20" }}
              >
                <Image
                  alt="Home buyer's guide cover"
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

export default BuyersPage;
