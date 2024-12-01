// ContactWidget.js
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
      <div className="fixed bottom-10 right-10 bg-white shadow-lg rounded-lg p-4 max-w-xs z-50">
        <div className="flex justify-center items-center text-center space-y-4 relative">
          <h2 className="text-gray-800 text-sm font-semibold">
            Do you have questions?
          </h2>
          <button onClick={handleClose} className="text-gray-400 hover:text-gray-600 absolute top-[-18px] -right-1">
            <X className="h-4 w-4" />
          </button>
        </div>
        <p className="text-gray-700 text-xs mt-1 text-center">
          Call or text today, we are here to help!
        </p>
        <div className="flex items-center text-blue-500 font-bold mt-2 justify-center">
          <Phone className="h-5 w-5 mr-1" />
          <span> 647-890-0982</span>
        </div>
        <p className="text-gray-500 text-[10px] mt-2 text-center">
          I agree to be contacted by theultragroup via text, call & email. To opt-out, reply {'stop'} or click unsubscribe.
        </p>
      </div>
    ):(
        <div onClick={handleClose} className='fixed bottom-10 right-10 bg-[#40a2d9] shadow-lg p-4 w-[55px] h-[55px] rounded-full z-50 cursor-pointer'>
            <div> <Phone className="h-6 w-6 mr-1" /></div>
        </div>
    )
  );
};

export default ContactWidget;
