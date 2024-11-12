"use client";
import { Mail, NotebookTabs, Map, Milestone } from "lucide-react";
import Container from "../Global/Container";
import SubmitButton from "../Global/SubmitButton";
import Copyright from "./Copyright";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type FormValue = {
  email: string;
  terms: boolean; // Add new field to FormValue
};

const Footer = () => {
  const [isPending, setIspending] = useState(false as boolean);
  const { handleSubmit, register } = useForm<FormValue>({
    defaultValues: {
      email: "",
      terms: false, // Add new field to FormValue
    },
  });

  const onSubmit: SubmitHandler<FormValue> = async(data) => {
    // Submit form data here
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
       
     } else {
       console.error('API call failed:', response.statusText);
       // Handle failure, e.g., show an error message
     }
    } catch (error) {
     console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="bg-black text-white p-8">
      <Container>
        <h1 className="text-3xl my-14 font-tenor_Sans tracking-[2px] uppercase">
        Ashvak Sheik
        </h1>
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start">
          {/* Left Section */}
          <div className="mb-8 md:mb-0 md:text-left w-1/4 font-tenor_Sans">
            <div className="space-y-1">
              <p className="text-xl tracking-[2px]">GUELPH</p>
              <p className="text-xl tracking-[2px]">REAL</p>
              <p className="text-xl tracking-[2px]">ESTATE</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left mb-8 md:mb-0 space-y-3 w-2/4 flex flex-wrap gap-6 2xl:mr-[3rem]">
            <div className="flex items-start justify-center md:justify-start space-x-2 gap-4">
              <span className="material-icons">
                {" "}
                <Mail size={30} />
              </span>
              <div>
                <p className="text-sm tracking-[2px] font-bold uppercase">
                  EMAIL
                </p>
                <p className="text-sm tracking-[2px] font-bold uppercase underline">
                ashvak.realtor07@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-start justify-center md:justify-start  gap-4">
              <span className="material-icons">
                {" "}
                <NotebookTabs size={30} />
              </span>
              <div>
                <p className="text-sm tracking-[2px] font-bold uppercase">
                  PHONE NUMBER
                </p>
                <p className="text-sm tracking-[2px] font-bold uppercase underline">
                647-890-0982
                </p>
              </div>
            </div>
            <div className="flex items-start justify-center md:justify-start gap-4">
              <span className="material-icons">
                <Map size={30} />
              </span>
              <div>
                <p className="text-sm tracking-[2px] font-bold uppercase">
                  ADDRESS
                </p>
                <p className="text-sm tracking-[2px] font-bold uppercase">
                25 Van Kirk Dr Brampton,<br/> ON L7A 1A4
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
         
            <div className="text-center md:text-left w-1/4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-sm tracking-[2px] font-bold uppercase flex gap-4 mb-6">
                <Milestone size={30} /> SIGN UP FOR EXCLUSIVE NEWS
              </h2>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-black border-b border-gray-500 text-white p-2 mb-4 focus:outline-none"
                {...register("email", { required: true })}
              />
              <div className="text-xs text-gray-400 mb-4">
                <input
                  type="checkbox"
                  className="mr-2"
                  required
                  {...register("terms", { required: true })}
                />
                <p className="font-semibold !text-justify text-[14px] leading-5 tracking-[3px] text-white">
                  By providing Rahul Luthra your contact information, you
                  acknowledge and agree to our{" "}
                  <Link href="/privacy-policy" className="text-gray-300 underline">
                    Privacy Policy
                  </Link>{" "}
                  and consent to receiving marketing communications, including
                  through automated calls, texts, and emails, some of which may
                  use artificial or prerecorded voices. This consent isn’t
                  necessary for purchasing any products or services and you may
                  opt out at any time. To opt out from texts, you can reply,
                  ‘stop’ at any time. To opt out from emails, you can click on
                  the unsubscribe link in the emails. Message and data rates may
                  apply.
                </p>
              </div>
              <SubmitButton btnText="Subscribe" disabled={isPending} />
              </form>
            </div>
          
        </div>
        <div className="flex items-center gap-10 mt-[7rem]">
          <Image src="/21_logo2.png" width={90} height={250} priority alt="century 21 logo" />
         <div className="space-y-12">
         <p>All information deemed reliable but not guaranteed and should be independently reviewed and verified.</p>
         <Image src="/Realtor-logo.png" width={90} height={250} priority alt="century 21 logo" />
         </div>
        </div>
        <Copyright />
      </Container>
    </div>
  );
};

export default Footer;
