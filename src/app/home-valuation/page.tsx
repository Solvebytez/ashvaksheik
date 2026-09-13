import StepForm from "@/components/Form/Step-Form/StepForm";
import { pageMetadata } from "@/lib/seo";
import React from "react";

export const metadata = pageMetadata({
  title: "Home Valuation in the GTA",
  description:
    "Request a custom home valuation from Ashvak Sheik, Realtor with Re/Max Millennium Real Estate, for properties across the Greater Toronto Area.",
  path: "/home-valuation",
});

const HomeValidation = () => {
  return (
    <div
      className="relative overflow-hidden "
      id="home"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/luxuryp/images/w_2560,c_limit,f_auto,q_auto/c5pmosfc4vfwmrp7coku/shutterstock_1248600844')",
      }}
    >
      <div className="bg-black bg-opacity-70 text-white py-[4rem] flex flex-col justify-center items-center h-full px-4">
        <div className="flex flex-col items-center justify-center h-full mt-[80px] md:mt-[120px] w-full max-w-4xl">
          <h1 className="text-2xl md:text-5xl font-tenor_Sans tracking-[2px] md:tracking-[5px] uppercase text-center leading-tight mb-4 md:mb-6">
            Home Valuation in the GTA
          </h1>
          <p className="text-center text-sm md:text-base text-white/80 max-w-2xl mb-8 md:mb-10 leading-7 px-2">
            Ashvak Sheik prepares a custom pricing proposal for Brampton, Mississauga, Toronto, and the GTA — not a generic online estimate. Enter your address below or call 647-890-0982.
          </p>
          <StepForm />
        </div>
      </div>
    </div>
  );
};

export default HomeValidation;
