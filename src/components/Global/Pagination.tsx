'use client'

import { ChevronLeft, ChevronRight } from "lucide-react";
import { SetStateAction, useState } from "react";

const Pagination = ({pageNumber}:{pageNumber:number}) => {

    const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (page: SetStateAction<number>) => {
    setCurrentPage(page);
  };
  
  return (
    <div className="flex items-center space-x-4">
    <button
      className={`p-2 ${currentPage === 1 ? 'text-gray-400' : 'text-black'}`}
      onClick={() => handlePageClick(currentPage - 1)}
      disabled={currentPage === 1}
    >
      <ChevronLeft />
    </button>
    {[...Array(pageNumber)].map((_, index) => {
      const page = index + 1;
      return (
        <button
          key={page}
          className={`p-2 font-bold ${currentPage === page ? 'bg-black text-white px-5' : 'text-black'}`}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </button>
      );
    })}
    <button
      className={`p-2 ${currentPage === pageNumber ? 'text-gray-400' : 'text-black'}`}
      onClick={() => handlePageClick(currentPage + 1)}
      disabled={currentPage === pageNumber}
    >
      <ChevronRight />
    </button>
  </div>
  )
}

export default Pagination