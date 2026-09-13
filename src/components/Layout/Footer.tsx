"use client";
import { Mail, NotebookTabs, Map, Milestone } from "lucide-react";
import Container from "../Global/Container";
import SubmitButton from "../Global/SubmitButton";
import Copyright from "./Copyright";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {  toast } from 'react-toastify';
import ContactWidget from "../Global/ContactWidget";

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
     if (response.ok) {
       toast("Thank You for your Interest!");
     } else {
       toast("Something went wrong. Please try again or call 647-890-0982.");
     }
    } catch (error) {
     console.error('Error submitting form:', error);
     toast("Something went wrong. Please try again or call 647-890-0982.");
    } finally {
      setIspending(false);
    }
  };

  return (
    <div className="bg-black text-white  p-0 md:p-8">
    
      <Container>
        <p className="text-3xl text-center md:text-left my-14 font-tenor_Sans tracking-[2px] uppercase">
        Ashvak Sheik
        </p>
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start">
          {/* Left Section */}
          <div className="mb-8 md:mb-0 w-full text-center md:text-left md:w-1/4 font-tenor_Sans">
            <div className="space-y-1">
              <p className="text-2xl tracking-[4px]">GTA</p>
              <p className="text-2xl tracking-[4px]">REAL</p>
              <p className="text-2xl tracking-[4px]">ESTATE</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left mb-8 md:mb-0 space-y-3 md:w-2/4 flex flex-wrap gap-6 2xl:mr-[3rem]">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start space-x-2 gap-4">
              <span className="material-icons">
                {" "}
                <Mail size={30} />
              </span>
              <div>
                <p className="text-sm tracking-[2px] font-bold uppercase">
                  EMAIL
                </p>
                <a href="mailto:ashvak.realtor07@gmail.com" className="text-sm tracking-[1px] md:tracking-[2px] font-bold uppercase underline break-all">
                ashvak.realtor07@gmail.com
                </a>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start space-x-2 gap-4 w-full md:w-auto">
              <span className="material-icons">
                {" "}
                <NotebookTabs size={30} />
              </span>
              <div>
                <p className="text-sm tracking-[2px] font-bold uppercase">
                  PHONE NUMBER
                </p>
                <a href="tel:6478900982" className="text-sm tracking-[2px] font-bold uppercase underline">
                647-890-0982
                </a>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start space-x-2 gap-4 w-full md:w-auto">
              <span className="material-icons">
                <Map size={30} />
              </span>
              <div>
                <p className="text-sm tracking-[2px] font-bold uppercase">
                  ADDRESS
                </p>
                <p className="text-sm tracking-[2px] font-bold uppercase">
                5 Montpelier St Unit 310, Brampton, ON L6Y 6H4
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
         
            <div className="text-center md:text-left md:w-1/4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-sm tracking-[2px] font-bold uppercase flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-3 mb-6">
                <Milestone size={30} className="shrink-0" /> <span>SIGN UP FOR EXCLUSIVE NEWS</span>
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
                <p className="font-semibold !text-left text-[13px] leading-5 tracking-[0.5px] md:tracking-[2px] text-white">
                By providing Ashvak with your contact information, you acknowledge and agree to our <Link className="underline" href="/privacy">Privacy Policy</Link> and consent to receive marketing communications, including automated calls, texts, and emails. You may opt out at any time. To stop receiving texts, reply ‘STOP’ at any time. Message and data rates may apply.
                </p>
              </div>
              <SubmitButton btnText="Subscribe" disabled={isPending} />
              </form>
            </div>
          
        </div>
        <nav className="flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-2 mt-12 text-xs tracking-[2px] uppercase">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/home-search" className="hover:underline">Home Search</Link>
          <Link href="/home-valuation" className="hover:underline">Home Valuation</Link>
          <Link href="/pre-construction" className="hover:underline">Pre-Construction</Link>
          <Link href="/neighborhoods" className="hover:underline">Neighborhoods</Link>
          <Link href="/neighborhoods/brampton" className="hover:underline">Brampton</Link>
          <Link href="/neighborhoods/mississauga" className="hover:underline">Mississauga</Link>
          <Link href="/neighborhoods/toronto" className="hover:underline">Toronto</Link>
          <Link href="/buyers" className="hover:underline">Buyers</Link>
          <Link href="/sellers" className="hover:underline">Sellers</Link>
          <Link href="/faq" className="hover:underline">FAQ</Link>
          <Link href="/telugu-realtor" className="hover:underline">Telugu Realtor</Link>
          <Link href="/hyderabadi-realtor" className="hover:underline">Hyderabadi Realtor</Link>
          <Link href="/muslim-realtor" className="hover:underline">Muslim Realtor</Link>
          <Link href="/desi-realtor" className="hover:underline">Desi Realtor</Link>
          <Link href="/brampton-realtor" className="hover:underline">Brampton Realtor</Link>
          <Link href="/mississauga-realtor" className="hover:underline">Mississauga Realtor</Link>
          <Link href="/toronto-realtor" className="hover:underline">Toronto Realtor</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <Link href="/testimonials" className="hover:underline">Testimonials</Link>
        </nav>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mt-12 md:mt-[7rem] pb-24 md:pb-0 text-center md:text-left">
          <Image src="/REMAX_logo.png" width={180} height={250} priority alt="RE/MAX logo" className="h-auto w-[140px] md:w-[180px]" />
         <div className="space-y-3">
         <p className="text-sm leading-6">All information deemed reliable but not guaranteed and should be independently reviewed and verified.</p>
         <Image src="/Realtor-logo.png" width={40} height={250} priority alt="Realtor logo" className="mx-auto md:mx-0" />
         </div>
        </div>
        <Copyright />
      </Container>
      <ContactWidget/>
    </div>
  );
};

export default Footer;
