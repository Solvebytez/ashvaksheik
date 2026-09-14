"use client";
import { X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const pages = [
  { url: "/", label: "HOME" },
  { url: "/about", label: "ABOUT Ashvak" },
  { url: "/pre-construction", label: "Pre Construction" },
  { url: "/home-search", label: "HOME SEARCH" },
  { url: "/home-valuation", label: "HOME VALUATION" },
  { url: "/neighborhoods", label: "NEIGHBORHOODS" },
  {
    label: "GTA CITIES",
    subMenu: [
      { url: "/neighborhoods/brampton", label: "BRAMPTON" },
      { url: "/neighborhoods/mississauga", label: "MISSISSAUGA" },
      { url: "/neighborhoods/toronto", label: "TORONTO" },
      { url: "/neighborhoods/oakville", label: "OAKVILLE" },
      { url: "/neighborhoods/vaughan", label: "VAUGHAN" },
      { url: "/neighborhoods/markham", label: "MARKHAM" },
    ],
  },
  {
    label: "RESOURCES",
    subMenu: [
      { url: "/buyers", label: "BUYER'S GUIDE" },
      { url: "/sellers", label: "SELLER'S GUIDE" },
      { url: "/faq", label: "FAQ" },
      { url: "/telugu-realtor", label: "TELUGU REALTOR" },
      { url: "/hyderabadi-realtor", label: "HYDERABADI REALTOR" },
      { url: "/muslim-realtor", label: "MUSLIM REALTOR" },
      { url: "/hyderabadi-muslim-realtor", label: "HYDERABADI MUSLIM REALTOR" },
      { url: "/halal-mortgage-realtor", label: "HALAL MORTGAGE REALTOR" },
      { url: "/desi-realtor", label: "DESI REALTOR" },
      { url: "/trusted-realtor-gta", label: "TRUSTED REALTOR GTA" },
      { url: "/first-time-home-buyer-realtor", label: "FIRST-TIME BUYER REALTOR" },
      { url: "/investment-property-realtor", label: "INVESTMENT PROPERTY REALTOR" },
      { url: "/brampton-realtor", label: "BRAMPTON REALTOR" },
      { url: "/mississauga-realtor", label: "MISSISSAUGA REALTOR" },
      { url: "/toronto-realtor", label: "TORONTO REALTOR" },
      { url: "/oakville-realtor", label: "OAKVILLE REALTOR" },
      { url: "/vaughan-realtor", label: "VAUGHAN REALTOR" },
      { url: "/markham-realtor", label: "MARKHAM REALTOR" },
      { url: "/milton-realtor", label: "MILTON REALTOR" },
      { url: "/caledon-realtor", label: "CALEDON REALTOR" },
    ],
  },
  { url: "/blog", label: "Blog" },
  { url: "/testimonials", label: "TESTIMONIALS" },
];

type subMenuProps = {
  isMenuOpen: boolean;
  onCLick: () => void;
  openModal: () => void;
};

const SlideMenu = ({ isMenuOpen, onCLick, openModal }: subMenuProps) => {
  const [isSubmenuOpen, setSubmenuOpen] = useState<string | null>(null);

  const handleSubmenuToggle = (label: string) => {
    setSubmenuOpen(isSubmenuOpen === label ? null : label);
  };

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  return (
    <div className="relative">
      {isMenuOpen && (
        <button
          type="button"
          aria-label="Close menu overlay"
          className="fixed inset-0 z-30 bg-black/60"
          onClick={onCLick}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[320px] sm:max-w-[400px] bg-black text-white border-l border-white/20 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-40`}
      >
        <button
          className="p-4 bg-transparent text-white absolute top-2 right-2"
          onClick={onCLick}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>

        <nav className="flex flex-col items-center mt-16 px-6 pb-24 h-auto">
          {pages.map((item) => {
            return (
              <span
                key={item.label}
                className="py-3 text-lg md:text-[21px] text-white tenor_Sans border-b border-white/15 w-full text-center"
              >
                {item.subMenu ? (
                  <button
                    type="button"
                    onClick={() => handleSubmenuToggle(item.label)}
                    className="py-3 text-lg md:text-[21px] text-white tenor_Sans w-full text-center uppercase"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    onClick={onCLick}
                    href={item.url || "/"}
                    className="py-3 text-lg md:text-[21px] text-white tenor_Sans w-full text-center uppercase"
                  >
                    {item.label}
                  </Link>
                )}
                {item.subMenu && isSubmenuOpen === item.label && (
                  <div className="mt-2 space-y-1 pb-2">
                    {item.subMenu.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.url}
                        onClick={onCLick}
                        className="block text-sm text-white/70 tracking-[2px] uppercase py-2"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </span>
            );
          })}
          <span className="py-3 text-lg md:text-[21px] text-white tenor_Sans border-b border-white/15 w-full text-center">
            <button
              type="button"
              onClick={() => {
                onCLick();
                openModal();
              }}
              className="py-3 text-lg md:text-[21px] text-white tenor_Sans w-full text-center uppercase"
            >
              {"Let's"} Connect
            </button>
          </span>
        </nav>
      </div>
    </div>
  );
};

export default SlideMenu;
