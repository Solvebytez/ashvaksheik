'use client'

import { ChevronLeft, ChevronRight } from "lucide-react";

export type PaginationProps = {
  totalPages:number;
  currentPage:number;
  setCurrentPage:(pageNumber:number)=>void;
}
const Pagination = ({totalPages,currentPage,setCurrentPage}:PaginationProps) => {

   
  return (
    <div className="flex items-center space-x-4">
    <button
      className={`p-2 ${currentPage === 1 ? 'text-white/30' : 'text-white'}`}
      onClick={() => setCurrentPage(currentPage - 1)}
      disabled={currentPage === 1}
    >
      <ChevronLeft />
    </button>
    {[...Array(totalPages)].map((_, index) => {
      const page = index + 1;
      return (
        <button
          key={page}
          className={`p-2 font-bold tracking-[2px] ${currentPage === page ? 'bg-white text-black px-5' : 'text-white'}`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      );
    })}
    <button
      className={`p-2 ${currentPage === totalPages ? 'text-white/30' : 'text-white'}`}
      onClick={() => setCurrentPage(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      <ChevronRight />
    </button>
  </div>
  )
}

export default Pagination