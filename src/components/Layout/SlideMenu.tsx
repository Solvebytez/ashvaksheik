"use client";
import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const pages = [
  { url: "/", label: "HOME" },
  { url: "/about", label: "ABOUT RAHUL" },
  { url: "/properties", label: "PORTFOLIO" },
  { url: "/properties/sold", label: "PAST TRANSACTIONS" },
  { url: "/home-search", label: "HOME SEARCH" },
  { url: "/home-valuation", label: "HOME VALUATION" },
  { url: "/neighborhoods", label: "NEIGHBORHOODS" },
  {
    label: "RESOURCES",
    subMenu: [
      { url: "/buyers", label: "BUYER'S GUIDE" },
      { url: "/sellers", label: "SELLER'S GUIDE" },
    ],
  },
  { url: "/blog", label: "Blog" },
  { url: "/testimonials", label: "TESTIMONIALS" },
  { url: "/lets-connect", label: "LET'S CONNECT" },
  { url: "/my-search-portal", label: "MY SEARCH PORTAL" },
];

type subMenuProps = {
  isMenuOpen: boolean;
  onCLick: () => void;
};

const SlideMenu = ({ isMenuOpen, onCLick }: subMenuProps) => {
  const [isSubmenuOpen, setSubmenuOpen] = useState<string | null>(null);

   const handleSubmenuToggle = (label: string) => {
   console.log(label)
   setSubmenuOpen(isSubmenuOpen === label?null:label)
  };

  return (
    <div className="relative">
      {/* Menu Icon */}

      {/* Slide Navigation */}
      <div
        className={`fixed top-0 right-0 h-full w-[400px] bg-white text-black transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-40`}
      >
        {/* Close Button */}
        <button
          className="p-4 bg-transparent text-black absolute top-4 right-4"
          onClick={onCLick}
        >
          <X size={32} />
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col items-center mt-20 px-10 h-full">
          {pages.map((item) => {
           
            return (
              <span key={item.label} className="py-3 text-[21px] text-black tenor_Sans border-b w-full text-center">
                <Link
                  onClick={()=>item.subMenu && handleSubmenuToggle(item.label)}
                  href={item.url || "#"}
                  key={item.label}
                  className="py-3 text-[21px] text-black tenor_Sans  w-full text-center uppercase"
                >
                  {item.label}
                </Link>
                {item.subMenu && isSubmenuOpen === item.label  && (
                  <div className="mt-2 space-y-1">
                    {item.subMenu.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.url}
                        className="block text-sm text-gray-700"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </span>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default SlideMenu;
