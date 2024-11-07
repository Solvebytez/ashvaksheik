import StepForm from "@/components/Form/Step-Form/StepForm";
import React from "react";

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
      <div className="bg-black bg-opacity-70 text-white py-[4rem] flex flex-col justify-center items-center h-full">
      <div className="flex flex-col items-center justify-center h-full mt-[120px]">
        <StepForm />
      </div>
      </div>
    </div>
  );
};

export default HomeValidation;
