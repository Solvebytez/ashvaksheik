import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Phone } from 'lucide-react';
const ContactWidget = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = () => {
    setIsVisible((prev)=>!prev);
  };

  return (
    isVisible ? (
      <div className="fixed bottom-10 right-10 bg-black border border-white/30 p-5 max-w-xs z-50">
        <div className="flex justify-center items-center text-center space-y-4 relative">
          <h2 className="text-white text-sm font-tenor_Sans tracking-[2px] uppercase">
            Do you have questions?
          </h2>
          <button onClick={handleClose} className="text-white/50 hover:text-white absolute top-[-18px] -right-1">
            <X className="h-4 w-4" />
          </button>
        </div>
        <p className="text-white/70 text-xs mt-3 text-center tracking-wide">
          Call or text today, we are here to help!
        </p>
        <a href="tel:6478900982" className="flex items-center text-white font-bold mt-3 justify-center underline tracking-[1px]">
          <Phone className="h-5 w-5 mr-1" />
          <span>647-890-0982</span>
        </a>
        <p className="text-white/40 text-[10px] mt-3 text-center leading-4">
          I agree to be contacted by Ashvak Sheik, Re/Max President Realty Brokerage via text, call & email. To opt-out, reply {'stop'} or click unsubscribe.
        </p>
      </div>
    ):(
        <div onClick={handleClose} className='fixed bottom-10 right-10 bg-black border border-white text-white p-4 w-[55px] h-[55px] z-50 cursor-pointer flex items-center justify-center'>
            <Phone className="h-6 w-6" />
        </div>
    )
  );
};

export default ContactWidget;
