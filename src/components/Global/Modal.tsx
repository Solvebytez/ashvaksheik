"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ModalType = {
  isOpen: boolean;
  bgImage?: string;
  closeModal: () => void;
  children: React.ReactNode;
};

const FullScreenModal = ({ isOpen, closeModal, children, bgImage }: ModalType) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const header = document.querySelector("header");
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };

    document.body.classList.add("overflow-hidden");
    header?.classList.add("invisible", "pointer-events-none");
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.classList.remove("overflow-hidden");
      header?.classList.remove("invisible", "pointer-events-none");
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, closeModal]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[200] overflow-y-auto bg-cover"
      style={{ backgroundImage: bgImage ? `url(${bgImage})` : undefined }}
      role="dialog"
      aria-modal="true"
    >
      <div className="relative min-h-full w-full bg-black/85 px-4 pb-10 pt-16 text-white md:p-6 md:pt-20">
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            closeModal();
          }}
          className="fixed right-4 top-4 z-[210] p-2 text-3xl text-white hover:text-gray-300 md:text-5xl"
          aria-label="Close"
        >
          ✕
        </button>
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default FullScreenModal;
