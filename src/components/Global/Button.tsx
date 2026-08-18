"use client";

import Link from "next/link";
import type { MouseEvent } from "react";

type LinkButtonPropsType = {
  href: string;
  btnText?: string;
  title?: string;
  className?: string;
  onClick?: () => void;
  variant?: string;
  children?: React.ReactNode;
};

const LinkButton = ({
  btnText,
  href = "#",
  title,
  className,
  onClick,
}: LinkButtonPropsType) => {
  const handleClick =
    onClick &&
    ((e: MouseEvent<HTMLAnchorElement>) => {
      if (!href || href === "#") e.preventDefault();
      onClick();
    });

  return (
    <Link
      href={href}
      title={title}
      onClick={handleClick}
      className={`inline-flex items-center justify-center text-center hover:bg-white hover:text-black border-2 border-white font-bold tracking-[1.5px] text-[12px] md:text-[14px] uppercase px-6 md:px-11 py-3 md:py-4 ${className}`}
    >
      {btnText}
    </Link>
  );
};

export default LinkButton;
