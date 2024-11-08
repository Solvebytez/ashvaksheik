"use client";

import LinkButton from "@/components/Global/Button";
// import Input from "@/components/Global/Input";
import ReactSelect, { OptioPropsType } from "@/components/Global/ReactSelect";
import SubmitButton from "@/components/Global/SubmitButton";
import Steps from "@/components/HomeValuation/Steps";
import { useState } from "react";
import { useForm,SubmitHandler, FieldValues} from "react-hook-form";
import GooglePlacesAutocomplete from "../MapAddress";


const options = [
  { value: "now", label: "I want to sell my home now" },
  { value: "3_months", label: "In the next 3 months" },
  { value: "12_months", label: "In the next 12 months" },
  { value: "curious", label: "I’m just curious about my home’s value" },
];

export enum STEPS {
  LOCATION_SEARCH = 0,
  MAIN_FORM = 1,
  LAST_MESSAGE = 2,
}

const StepForm = () => {
  const [isPending, setIspending] = useState(false as boolean);
  const [currentStep, setCurrentStep] = useState<number>(STEPS.LOCATION_SEARCH);

  const {register,handleSubmit,watch, setValue, } = useForm<FieldValues>({
    defaultValues:{
      propertyname:'',
      name:'',
      email:'',
      phone:'',
      time:null,
      terms:false
    }
  })


  const placeName=watch('propertyname');
  const time=watch('time');

  const onPlaceSelected=(address:string)=>{
   setValue('propertyname',address,{
    shouldValidate: true,
    shouldDirty: true,
    shouldTouch: true,
   });
  }

  const onTimeSelected=(value:OptioPropsType)=>{
    setValue('time',value,{
     shouldValidate: true,
     shouldDirty: true,
     shouldTouch: true,
    });
   }

  const onSubmit:SubmitHandler<FieldValues>=async (data)=>{
    setIspending(true);
     try {
      const response = await fetch('/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.status === 200) {
        const result = await response.json();
        console.log('API Response:', result);
        setIspending(false);
        // Handle success, e.g., show a success message or move to the next step
        setCurrentStep(STEPS.LAST_MESSAGE);
      } else {
        console.error('API call failed:', response.statusText);
        // Handle failure, e.g., show an error message
      }
     } catch (error) {
      console.error('Error submitting form:', error);
     }
  }

  const formNext = () => {
    if (currentStep === STEPS.LOCATION_SEARCH && placeName.length>5) {
      setCurrentStep(() => currentStep + 1);
    }
    return null;
  };

    


  return (
    <div className="w-full lg:w-[60rem] m-auto">
      <Steps currentStep={currentStep} />

      {}

      <div className="mt-16 flex flex-col items-center justify-center">
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          {currentStep === STEPS.LOCATION_SEARCH && (
            <div className="flex flex-col mt-[4rem] space-y-16 justify-center items-center">
              <h1 className="text-4xl font-tenor_Sans tracking-[4px] uppercase">
                Custom Tailored Pricing Proposal
              </h1>
              <div className="md:flex gap-4 w-full items-center justify-center">
                <div className="w-2/4 flex-col flex">
                  <label className="uppercase text-white text-lg font-bold">
                    PROPERTY ADDRESS
                  </label>
                  <GooglePlacesAutocomplete onPlaceSelected={onPlaceSelected}/>
                  <input
                  {...register("propertyname",{required:true})}
                    type="hidden"
                    id="propertyname"
                    name="propertyname"
                    value={placeName}
                    className={` bg-transparent border-b border-white text-white focus:border-white focus:outline-none leading-[4rem] focus:bg-transparent h-9`}
                  />
                </div>
                <button
                  type="button"
                  onClick={formNext}
                  disabled={placeName?false:true}
                  className={`hover:bg-white hover:text-black border-2 border-white font-bold tracking-[1.5px] text-[14px] uppercase  px-11 py-4 ${placeName.length<5?'cursor-not-allowed':''}`}
                >
                  continue
                </button>
              </div>
            </div>
          )}

          {currentStep === STEPS.MAIN_FORM && (
            <div className="flex flex-col mt-[0rem] justify-center items-center">
              <h3 className="text-xl font-bold tracking-[4px] uppercase">
                CONTACT INFORMATION
              </h3>
              <h1 className="text-4xl font-tenor_Sans tracking-[4px] uppercase my-8">
                Almost There! You’re 1 Step Away
              </h1>
              <div className="md:flex flex-col space-y-6 gap-4 w-full items-center justify-center !mt-10">
                <div className="w-2/4 flex-col flex">
                  <label className="uppercase text-white text-md font-bold">
                    FULL NAME:
                  </label>
                  <input
                   {...register("name",{required:true})}
                    type="text"
                    id="name"
                    name="name"
                    className={` bg-transparent border-b border-white text-white focus:border-white focus:outline-none leading-[4rem] focus:bg-transparent h-9`}
                  />
                </div>
                <div className="w-2/4 flex-col flex">
                  <label className="uppercase text-white text-md font-bold">
                    EMAIL ADDRESS:
                  </label>
                  <input
                   {...register("email",{required:true})}
                    type="text"
                    id="email"
                    name="email"
                    className={` bg-transparent border-b border-white text-white focus:border-white focus:outline-none leading-[4rem] focus:bg-transparent h-9`}
                  />
                </div>
                <div className="w-2/4 flex-col flex">
                  <label className="uppercase text-white text-md font-bold">
                    PHONE NUMBER:
                  </label>
                  <input
                   {...register("phone",{required:true})}
                    type="text"
                    id="phone"
                    name="phone"
                    className={` bg-transparent border-b border-white text-white focus:border-white focus:outline-none leading-[4rem] focus:bg-transparent h-9`}
                  />
                </div>

                <div className="w-2/4 flex-col flex">
                  <label className="uppercase text-white text-md font-bold">
                    TIME FRAME: (Optional):
                  </label>
                  <ReactSelect options={options}  {...register("time")} value={time} onChange={(value)=>onTimeSelected(value)}  />

                </div>

                <div className="w-2/4 flex-col flex">
                  <div className="text-xs text-gray-400 mb-4">
                  <input 
  type="checkbox" 
  className="mr-2" 
  required 
  {...register("terms", { required: true })} 
/>  
                    <span className="font-bold !text-justify">
                      By providing Rahul Luthra your contact information, you
                      acknowledge and agree to our{" "}
                      <a
                        href="/privacy-policy"
                        className="text-gray-300 underline"
                      >
                        Privacy Policy
                      </a>{" "}
                      and consent to receiving marketing communications,
                      including through automated calls, texts, and emails, some
                      of which may use artificial or prerecorded voices. This
                      consent isn’t necessary for purchasing any products or
                      services and you may opt out at any time. To opt out from
                      texts, you can reply, ‘stop’ at any time. To opt out from
                      emails, you can click on the unsubscribe link in the
                      emails. Message and data rates may apply.
                    </span>
                  </div>
                </div>

                <SubmitButton btnText="GET MY VALUATION" disabled={isPending} />
              </div>
            </div>
          )}

          {currentStep === STEPS.LAST_MESSAGE && (
            <div className="flex flex-col space-y-5 justify-center items-center">
              <h3 className="text-xl font-bold tracking-[4px] uppercase">
                Thank You
              </h3>
              <h1 className="text-4xl font-tenor_Sans tracking-[4px] uppercase my-1 text-center">
                I’m gathering your property information. I will be in touch with
                you soon!
              </h1>
              <div className="md:flex gap-4 w-full items-center justify-center">
                <LinkButton href="#" btnText="VIEW LISTINGS FOR SALE"/>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default StepForm;
