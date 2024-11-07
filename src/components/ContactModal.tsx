'use client'

import { Mail, NotebookTabs,Map } from "lucide-react";
import SocialProfile from "./Global/SocialProfile";
import SubmitButton from "./Global/SubmitButton";
import Link from "next/link";
import { useEffect, useState } from "react";

const ContactModal = () => {


  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const username = "fka_14ESHTn27sUXTKaM5j931eKedZancWgjz2"; // Replace with your actual username
  const password = ""; // Replace with your actual password (store securely)

  // Consider using environment variables for username and password for better security
  const basicAuth = Buffer.from(`${username}:${password}`).toString('base64');

  const formHandleSubmit=async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
   // console.log(e.currentTarget);

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');

   console.log(formData)
  // return;

    try {
      const response = await fetch('https://api.followupboss.com/v1/events', {  
        method:"POST",     
        headers: {
          Authorization: `Basic ${basicAuth}`,
          'Content-Type': 'application/json' // Ensure Content-Type is specified for JSON
        },
        redirect: 'manual', // Prevent automatic redirects
        body:JSON.stringify({        
          "message": `${message}`,
          "person": {
              "firstName": `${name}`,
              "lastName":  `${name}`,
              "emails": [{"value": `${email}`}],
              "phones": [{"value": `${phone}`}]
          }
      })
      });

      if (!response.ok) {
        console.log(error)
      }

      const data = await response.json();
      console.log(data)

    } catch (err:any) {
      setError(err?.message);
    } finally {
      setIsLoading(false);
    }

  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://api.followupboss.com/v1/me', {
  //         headers: {
  //           Authorization: `Basic ${basicAuth}`,
  //         },
  //       });

  //       if (!response.ok) {
  //         throw new Error(`${response.status}`);
  //       }

  //       const data = await response.json();
  //       setUserData(data);
  //     } catch (err:any) {
  //       setError(err?.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  console.log('setUserData',setUserData)


  return (
    <div className="text-white flex items-start justify-center p-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-16 py-12">
        {/* Contact Details Section */}
        <div className="space-y-8 col-span-6">
          <h1 className="text-4xl font-tenor_Sans tracking-[4px] mb-4 pt-16 lg:pt-0 text-nowrap">
            CONTACT DETAILS
          </h1>
          <h2 className="text-2xl font-tenor_Sans tracking-[5px] mb-8">
            Rahul Luthra
          </h2>
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
                (519) 829-6165
              </p>
            </div>
          </div>
          <div className="flex items-start justify-center md:justify-start space-x-1 gap-4">
            <span className="material-icons">
              {" "}
              <Mail size={30} />
            </span>
            <div>
              <p className="text-sm tracking-[2px] font-bold uppercase">
                EMAIL
              </p>
              <p className="text-sm tracking-[2px] font-bold uppercase underline">
                RAHUL@THELUTHRAGROUP.COM
              </p>
            </div>
          </div>
          <h3 className="text-2xl tracking-[4px] font-tenor_Sans uppercase">The Luthra Group | Remax Real Estate Centre Inc.</h3>
         
          <div className="flex items-start justify-center md:justify-start gap-4">
            <span className="material-icons"><Map size={30}/></span>
           <div>
           <p className="text-sm tracking-[2px] font-bold uppercase">ADDRESS</p>
            <p className="text-sm tracking-[2px] font-bold uppercase">
              238 SPEEDVALE AVE W<br />
              GUELPH, ON N1H 1C4
            </p>
           </div>
          </div>
          {/* Social Media Links */}
          <SocialProfile />
        </div>

        {/* Submit a Message Section */}
        <div className="col-span-6 px-3 md:px-11 modalForm relative">
        <h1 className="text-4xl font-tenor_Sans tracking-[4px] mb-4 pt-16 lg:pt-0">SUBMIT A MESSAGE</h1>
          <form className="flex flex-col mt-9" onSubmit={formHandleSubmit}>          
                <div className="flex flex-col mt-10">
                  <label className="uppercase text-white text-md font-bold">
                    FULL NAME:
                  </label>
                  <input
                    type="text"
                    id="propertyname"
                    name="name"
                    className={` bg-transparent border-b border-white text-white focus:border-white focus:outline-none leading-[4rem] focus:bg-transparent h-9`}
                  />
                </div>
                <div className="flex flex-col mt-10">
                  <label className="uppercase text-white text-md font-bold">
                    EMAIL ADDRESS:
                  </label>
                  <input
                    type="text"
                    id="propertyname"
                    name="email"
                    className={` bg-transparent border-b border-white text-white focus:border-white focus:outline-none leading-[4rem] focus:bg-transparent h-9`}
                  />
                </div>
                <div className="flex flex-col mt-10">
                  <label className="uppercase text-white text-md font-bold">
                    PHONE NUMBER:
                  </label>
                  <input
                    type="text"
                    id="propertyname"
                    name="phone"
                    className={` bg-transparent border-b border-white text-white focus:border-white focus:outline-none leading-[4rem] focus:bg-transparent h-9`}
                  />
                </div>

                <div className="flex flex-col mt-10">
                  <label className="uppercase text-white text-md font-bold">
                  Message:
                  </label>
                  <textarea
                  name="message"
              placeholder="Message"
              rows={4}
              className="w-full bg-transparent p-3 mt-3 focus:outline-none ring-1 ring-white"
            ></textarea>
                </div>

                <div className="flex flex-col mt-8">
                  <div className="text-xs text-gray-400 mb-4">
                    <input type="checkbox" className="mr-2" />
                    <span className="font-bold !text-justify">
                      By providing Rahul Luthra your contact information, you
                      acknowledge and agree to our{" "}
                      <Link
                        href="/privacy-policy"
                        className="text-gray-300 underline"
                      >
                        Privacy Policy
                      </Link>{" "}
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
                <SubmitButton btnText="SUBMIT" />   
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
