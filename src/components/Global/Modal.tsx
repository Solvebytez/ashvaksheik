'use client'
import React, { useEffect } from "react";

type ModalType = {
  isOpen: boolean;
 bgImage?:string;
  closeModal: () => void;
  children:React.ReactNode
};

const FullScreenModal = ({ isOpen, closeModal,children,bgImage }: ModalType) => {

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Optional cleanup if the component unmounts
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]); // Runs every time `isOpen` changes

  return (
    <>
    {isOpen && (
        <div className="fixed inset-0 z-[100] left-0 top-0 overflow-y-auto bg-cover"  style={{
          backgroundImage:
            `url(${bgImage})`,
        }}>
          <div className="relative w-[100%] p-0 md:p-6 bg-black bg-opacity-85 text-white h-auto md:h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-900 text-5xl"
            >
              ✕
            </button>
           <div>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default FullScreenModal;
