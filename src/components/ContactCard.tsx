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
       <div className="relative w-32 h-20">
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
          <p className="text-white text-xs">The Alliance Realty Group | Re/Max President Realty Brokerage</p>
        </div>
      </div>     
      <hr className="my-2 border-white/10"  />
      <div className="flex justify-between mb-0 py-2">
        <span className={`text-xs ${IsWhite}`}>Mobile number:</span>
        <span className={`text-xs ${IsWhite}`}>647-890-0982</span>
      </div>
     
      <div className="mb-0 py-2 flex justify-between">
        <span className={`text-xs ${IsWhite}`}>Email:</span>
        <p className={`text-xs ${IsWhite}`}>ashvak.realtor07@gmail.com</p>
      </div>
      <div className="mb-4 py-2 flex justify-between">
        <span className={`text-xs ${IsWhite}`}>Address:</span>
        <p className={`text-xs ${IsWhite} text-right`}>
        155 Salvation Rd, Brampton, ON L7A 0W7
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
