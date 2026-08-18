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
      className={`hover:bg-white hover:text-black border-2 border-white font-bold tracking-[1.5px] text-[14px] uppercase px-11 py-4 ${className}`}
    >
      {btnText}
    </Link>
  );
};

export default LinkButton;
