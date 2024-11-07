"use client";

import { useForm } from "react-hook-form";
import Input from "../Global/Input";
import SubmitButton from "../Global/SubmitButton";
import { useState } from "react";

interface FormValue {
  name: string;
  email: string;
  accept: boolean; // Add new field to FormValue
}

const UseNewslaterForm = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const { register, handleSubmit } = useForm<FormValue>({
    defaultValues: {
      name: "",
      email: "",
      accept: false, // Add new field to FormValue
    },
  });

  const submitSubscribe = (data: FormValue) => {
    console.log(data); // to send data to server or API. This is just a mockup.
    // You should replace this with your own logic. For example, sending data to a server using fetch API or axios.
    // fetch('/api/subscribe', {
  };

  return (
    <form  onSubmit={handleSubmit(submitSubscribe)} className="w-full lg:w-2/5 px-4 md:px-0 space-y-4" >
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
      <SubmitButton btnText="Submit" disabled={false} />
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
          By providing Rahul Luthra your contact information, you acknowledge and agree to our{' '}
          <a href="#" className="underline">Privacy Policy</a> and consent to receiving marketing communications, including through automated calls, texts, and emails, some of which may use artificial or prerecorded voices. This consent {"isn't"} necessary for purchasing any products or services and you may opt out at any time. To opt out from texts, you can reply {'stop'} at any time. To opt out from emails, you can click on the unsubscribe link in the emails. Message and data rates may apply.
        </span>
      </label>
    </div>
    </form>
  );
};

export default UseNewslaterForm;
