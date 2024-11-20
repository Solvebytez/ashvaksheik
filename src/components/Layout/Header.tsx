"use client";
import Link from "next/link";
import SlideMenu from "./SlideMenu";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AlignRight } from "lucide-react";
import FullScreenModal from "../Global/Modal";
import useFullscreenhook from "../Hook/useFullscreenhook";
import ContactModal from "../ContactModal";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [currentScroll, setCurrentScroll] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const prevScrollY = useRef(0);
  const { closeModal, isOpen, openModal } = useFullscreenhook();
  // Function to toggle the menu

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      console.log("currentScrollY", currentScrollY);
      setCurrentScroll(currentScrollY);
      if (currentScrollY === 0) {
        // When at the top of the page, hide the header
        setShowHeader(false);
      } else if (currentScrollY > prevScrollY.current) {
        // Scrolling down
        setShowHeader(false);
      } else {
        // Scrolling up
        setShowHeader(true);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`z-10 fixed w-full top-0 transition-transform duration-300 ${
          currentScroll > 0 ? "translate-y-[-100px]" : ""
        } ${showHeader ? "translate-y-[0px]" : ""}`}
      >
        <nav
          className={`z-10 w-full absolute px-4 md:px-6 top-0 md:top-0 ${
            showHeader ? "bg-black/40" : ""
          }`}
        >
          <div className="flex items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative">
            <div className="relative z-20 w-full flex justify-between lg:w-max md:px-0">
              <a
                href="/"
                aria-label="logo"
                className="flex space-x-2 items-center"
              >
                <Image
                  src="https://res.cloudinary.com/luxuryp/images/w_320,c_limit,f_auto,q_auto/sbjlmdqh1ta31qz2k1rq/rl-logo-light"
                  width="100"
                  height="100"
                  alt=""
                />
              </a>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-white lg:pr-4 lg:w-auto w-full lg:pt-0 font-light hidden lg:block">
                <ul className="tracking-wide flex-col flex lg:flex-row gap-4 lg:gap-0 uppercase items-center text-[13px]">
                  <li>
                    <Link
                      href="/home-valuation"
                      className="block md:px-4 transition hover:underline text-white tracking-[3px]"
                    >
                      <span>Home Valuation</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/home-search"
                      className="block md:px-4 transition hover:underline text-white tracking-[3px]"
                    >
                      <span>Home Search</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pre-construction"
                      className="block md:px-4 transition hover:underline text-white tracking-[3px]"
                    >
                      <span>Pre Construction</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="block md:px-4 transition hover:underline text-white tracking-[3px]"
                    >
                      <span>About Ashvak</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="block md:px-4 transition hover:underline text-white tracking-[3px]"
                    >
                      <span>Blog</span>
                    </Link>
                  </li>
                  <li onClick={openModal}>
                    <Link
                      href="#features"
                      className="block md:px-4 transition hover:underline text-white tracking-[3px]"
                    >
                      <span>{"Let's"} Connect</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-0 lg:mt-0 z-40">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-0 text-white"
                >
                  <AlignRight size={32} />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <FullScreenModal
        isOpen={isOpen}
        closeModal={closeModal}
        bgImage="https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      >
       <ContactModal/>
      </FullScreenModal>
      <SlideMenu
       openModal={openModal}
        isMenuOpen={isMenuOpen}
        onCLick={() => setIsMenuOpen(!isMenuOpen)}
      />
    </>
  );
};

export default Header;
