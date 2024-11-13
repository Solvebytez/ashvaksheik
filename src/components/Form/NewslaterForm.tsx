"use client";

import { useForm } from "react-hook-form";
import Input from "../Global/Input";
import SubmitButton from "../Global/SubmitButton";
import { useState } from "react";
import LinkButton from "../Global/Button";
import { toast } from "react-toastify";
import Link from "next/link";

interface FormValue {
  name: string;
  email: string;
  accept: boolean; // Add new field to FormValue
}

const UseNewslaterForm = () => {
  const [isPending, setIspending] = useState(false as boolean);
  const [isShowForm, setisShowForm] = useState(false as boolean);
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const { register, handleSubmit } = useForm<FormValue>({
    defaultValues: {
      name: "",
      email: "",
      accept: false, // Add new field to FormValue
    },
  });

  const submitSubscribe = async (data: FormValue) => {
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
       setIspending(false);       // Handle success, e.g., show a success message or move to the next step
       setisShowForm(true)
       toast("Thank You for your Interest!");
     } else {
       console.error('API call failed:', response.statusText);
       // Handle failure, e.g., show an error message
     }
    } catch (error) {
     console.error('Error submitting form:', error);
    }
  };

  return (
    <>
       {
          !isShowForm?( <form  onSubmit={handleSubmit(submitSubscribe)} className="w-full lg:w-2/5 px-4 md:px-0 space-y-4" >
          <div className="flex flex-col md:flex-row gap-3 items-end justify-center ">
         
          <div className="w-2/5"> {/* Adjust width as needed */}
          <Input type="text" id="name" placeholder="Name" register={register} />
          </div>
          <div className="w-2/5">
          <Input
              type="email"
              id="email"
              placeholder="Email"
              register={register}
            />
          </div>
          <SubmitButton btnText="Submit" disabled={isPending} />
          </div>
          <div className="w-2xl p-4 bg-opacity-80 text-white text-sm">
          <label className="flex items-start space-x-3 cursor-pointer">
            <div className="relative flex items-center justify-center w-5 h-5 mt-0.5">
              <input
              {...register('accept')}
                name="accept"
                type="checkbox"           
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="absolute w-full h-full opacity-0 cursor-pointer"
              />
              <div className={`w-4 h-4 border ${isChecked ? 'bg-white' : 'bg-transparent'} transition-colors duration-200 ease-in-out`}>
                {isChecked && (
                  <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                )}
              </div>
            </div>
            <span className="flex-1">
            By providing Ashvak with your contact information, you acknowledge and agree to our{' '}
              <Link href="#" className="underline">Privacy Policy</Link>and consent to receive marketing communications, including automated calls, texts, and emails. You may opt out at any time. To stop receiving texts, reply ‘STOP’ at any time. Message and data rates may apply.
            </span>
          </label>
        </div>
        </form>):(<div className="flex flex-col space-y-5 justify-center items-center">
              <h3 className="text-xl font-bold tracking-[4px] uppercase">
                Thank You
              </h3>
              <h1 className="text-xl font-tenor_Sans tracking-[4px] uppercase my-1 text-center">
                I’m gathering your property information. I will be in touch with
                you soon!
              </h1>
              <div className="md:flex gap-4 w-full items-center justify-center">
                <LinkButton href="#" btnText="VIEW LISTINGS FOR SALE"/>
              </div>
            </div>)
        }
    </>
   
  );
};

export default UseNewslaterForm;
