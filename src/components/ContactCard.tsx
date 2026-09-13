'use client'
import Image from "next/image";
import FullScreenModal from "./Global/Modal";
import ContactModal from "./ContactModal";
import useFullscreenhook from "./Hook/useFullscreenhook";



const ContactCard = ({cardType}:{cardType?:string}) => {
  const { closeModal, isOpen, openModal } = useFullscreenhook();
    const IsWhite = cardType?"text-white":"text-gray-800";

  return (
    <div className="max-w-sm mx-auto  rounded-lg shadow-md p-4">
      <div className="flex items-center mb-4 gap-4">
       <div className="relative w-20 h-20 shrink-0">
       <Image
          src="/profile_pic.jpg"
          alt="Agent"
       fill
        sizes="17vw"
          className=" object-cover z-0 rounded-full"
        /> 
       </div>
      
        <div>
          <h2 className={`font-bold ${IsWhite} font-tenor_Sans`}>REALTOR</h2>
          <p className={`text-sm font-bold ${IsWhite} font-tenor_Sans mb-2`}>Ashvak Sheik </p>
          <p className={`text-xs ${IsWhite}`}>Re/Max Millennium Real Estate</p>
        </div>
      </div>     
      <hr className="my-2 border-white/10"  />
      <div className="flex justify-between mb-0 py-2">
        <span className={`text-xs ${IsWhite}`}>Mobile number:</span>
        <a href="tel:6478900982" className={`text-xs ${IsWhite} underline`}>647-890-0982</a>
      </div>
     
      <div className="mb-0 py-2 flex flex-col gap-1 sm:flex-row sm:justify-between">
        <span className={`text-xs ${IsWhite}`}>Email:</span>
        <a href="mailto:ashvak.realtor07@gmail.com" className={`text-xs ${IsWhite} underline break-all sm:text-right`}>ashvak.realtor07@gmail.com</a>
      </div>
      <div className="mb-4 py-2 flex flex-col gap-1 sm:flex-row sm:justify-between">
        <span className={`text-xs ${IsWhite}`}>Address:</span>
        <p className={`text-xs ${IsWhite} sm:text-right`}>
        5 Montpelier St Unit 310, Brampton, ON L6Y 6H4
          </p>
      </div>
      <hr className="my-2 border-white/10"  />
      <button onClick={openModal} className="w-full bg-white text-black font-tenor_Sans py-3 uppercase tracking-[2px]">
        Contact agent
      </button>   
      <FullScreenModal
        isOpen={isOpen}
        closeModal={closeModal}
        bgImage="https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      >
       <ContactModal/>
      </FullScreenModal>  
    </div>
  );
};

export default ContactCard;
