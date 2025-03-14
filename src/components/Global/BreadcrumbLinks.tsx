import React from "react";
import Link from "next/link"; // or 'next/link' if using Next.js

type breadcrumbItemsPrps = {
  name: string;
  href?: string;
};

const Breadcrumb = ({LinkItem}:{LinkItem:breadcrumbItemsPrps[]}) => {

  return (
    <nav className="flex text-gray-600 mb-4" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {LinkItem.map((item, index) => (
          <li key={index} className="inline-flex items-center text-xs">
            {index !== LinkItem.length - 1 ? (
              <>
                <Link href={item.href??'#'} className="text-white/40 hover:underline">
                  {item.name}
                </Link>
                <span className="mx-2 text-gray-500">/</span>
              </>
            ) : (
              <span className="text-gray-500">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
