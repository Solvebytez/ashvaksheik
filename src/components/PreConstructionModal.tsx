"use client";

import { Mail, NotebookTabs, Map } from "lucide-react";
import SocialProfile from "./Global/SocialProfile";
import SubmitButton from "./Global/SubmitButton";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Container from "./Global/Container";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
  terms: boolean; // Add new field to FormValues
};

const ContactModal = ({prijectName}:{prijectName:string}) => {
  const [isPending, setIspending] = useState(false as boolean);
  const [isShowForm, setisShowForm] = useState(false as boolean);

  const { register, handleSubmit } = useForm<FormValues>();

  const formHandleSubmit = async (data: FormValues) => {
    setIspending(true);
    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setisShowForm(true);
        toast("Thank You for your Interest!");
      } else {
        toast("Something went wrong. Please try again or call 647-890-0982.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast("Something went wrong. Please try again or call 647-890-0982.");
    } finally {
      setIspending(false);
    }
  };

  console.log('prijectName',prijectName)

  return (
    <div className="text-white flex items-start justify-center p-4">
      {!isShowForm ? (
        <div className="md:max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 py-6 md:py-12">
          {/* Contact Details Section */}
          <div className="space-y-8 col-span-6">
            <h2 className="text-2xl md:text-4xl font-tenor_Sans tracking-[2px] md:tracking-[4px] mb-4 pt-4 lg:pt-0 text-center md:text-left">
              CONTACT DETAILS
            </h2>
            <h2 className="text-xl md:text-2xl font-tenor_Sans tracking-[2px] md:tracking-[5px] mb-8 uppercase text-center md:text-left">
            Ashvak Sheik
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start  gap-4">
              <span className="material-icons">
                {" "}
                <NotebookTabs size={30} />
              </span>
              <div>
                <p className="text-sm tracking-[2px] font-bold uppercase text-center md:text-left">
                  PHONE NUMBER
                </p>
                <a
                  href="tel:6478900982"
                  className="text-sm tracking-[2px] font-bold uppercase underline text-center md:text-left"
                >
                647-890-0982
                </a>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start  gap-4">
              <span className="material-icons">
                {" "}
                <Mail size={30} />
              </span>
              <div>
                <p className="text-sm tracking-[2px] font-bold uppercase text-center md:text-left">
                  EMAIL
                </p>
                <a
                  href="mailto:ashvak.realtor07@gmail.com"
                  className="text-sm tracking-[2px] font-bold uppercase underline text-center md:text-left"
                >
                ashvak.realtor07@gmail.com
                </a>
              </div>
            </div>
            <h3 className="text-xl md:text-2xl tracking-[2px] md:tracking-[4px] font-tenor_Sans uppercase text-center md:text-left">
            Re/Max Millennium Real Estate
            </h3>

            <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start  gap-4">
              <span className="material-icons">
                <Map size={30} />
              </span>
              <div>
                <p className="text-sm tracking-[2px] font-bold uppercase text-center md:text-left">
                  ADDRESS
                </p>
                <p className="text-sm tracking-[2px] font-bold uppercase text-center md:text-left">
                5 Montpelier St Unit 310, Brampton, ON L6Y 6H4
                </p>
              </div>
            </div>
            {/* Social Media Links */}
            <div className="flex flex-col items-center md:items-start">
            <SocialProfile />
            </div>
          </div>

          {/* Submit a Message Section */}
          <div className="col-span-6 px-0 md:px-11 modalForm relative">
            <h2 className="text-2xl md:text-4xl font-tenor_Sans tracking-[2px] md:tracking-[4px] mb-4 pt-4 lg:pt-0 text-center">
              SUBMIT A MESSAGE
            </h2>
            <form
              className="flex flex-col mt-9"
              onSubmit={handleSubmit(formHandleSubmit)}
            >
              <div className="flex flex-col mt-10">
                <label className="uppercase text-white text-md font-bold">
                  FULL NAME:
                </label>
                <input
                  type="text"
                  id="precon-name"
                  {...register("name", { required: true })}
                  className={` bg-transparent border-b border-white text-white focus:border-white focus:outline-none leading-[4rem] focus:bg-transparent h-9`}
                />
              </div>
              <div className="flex flex-col mt-10">
                <label className="uppercase text-white text-md font-bold">
                  EMAIL ADDRESS:
                </label>
                <input
                  type="email"
                  id="precon-email"
                  {...register("email", { required: true })}
                  className={` bg-transparent border-b border-white text-white focus:border-white focus:outline-none leading-[4rem] focus:bg-transparent h-9`}
                />
              </div>
              <div className="flex flex-col mt-10">
                <label className="uppercase text-white text-md font-bold">
                  PHONE NUMBER:
                </label>
                <input
                  type="tel"
                  id="precon-phone"
                  {...register("phone", { required: true })}
                  className={` bg-transparent border-b border-white text-white focus:border-white focus:outline-none leading-[4rem] focus:bg-transparent h-9`}
                />
              </div>

              <div className="flex flex-col mt-10">
                <label className="uppercase text-white text-md font-bold">
                Additional comments or questions:
                </label>
                <textarea
                  placeholder="Message"
                  rows={4}
                  {...register("message")}
                  className="w-full bg-transparent p-3 mt-3 focus:outline-none ring-1 ring-white"
                ></textarea>
              </div>

              <div className="flex flex-col mt-8">
                <div className="text-xs text-gray-400 mb-4">
                  <input
                    type="checkbox"
                    className="mr-2"
                    required
                    {...register("terms", { required: true })}
                  />
                  <span className="font-bold !text-justify">
                  By providing Ashvak with your contact information, you acknowledge and agree to our <Link className="underline" href="/privacy">Privacy Policy</Link> and consent to receive marketing communications, including automated calls, texts, and emails. You may opt out at any time. To stop receiving texts, reply ‘STOP’ at any time. Message and data rates may apply.
                  </span>
                </div>
              </div>

              <SubmitButton btnText="SUBMIT" disabled={isPending} />
            </form>
          </div>
        </div>
      ) : (
        <Container>
        <div className="h-full">
         
         <div className="flex flex-col space-y-5 justify-center items-center h-[calc(100vh)]">
         <h3 className="text-xl font-bold tracking-[4px] uppercase">
          Thank You for Your Interest!
          </h3>
          <h2 className="text-xl font-tenor_Sans tracking-[4px] uppercase my-1 text-center">
          Thank you for expressing interest in <b className="underline">{prijectName}</b>. We’ve received your request, and our team will contact you shortly with personalized details and next steps. Keep an eye on your inbox or phone for updates!
          </h2>
          <div className="md:flex gap-4 w-full items-center justify-center italic">
          If you have any further questions, feel free to reach out directly.

          </div>
         </div>
        
        </div>
        </Container>
      )}
    </div>
  );
};

export default ContactModal;
