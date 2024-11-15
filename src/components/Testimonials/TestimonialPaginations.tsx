'use client'

import { testimonials } from "@/lib/Data/testimonialData";
import Container from "../Global/Container";
import TestimonialCard from "../TestimonialsCard";
import { useState } from "react";
import Pagination from "../Global/Pagination";

// This is a server component by default in Next.js


export interface TestimonialsProps{
    name: string;
    quote: string
}

export default function TestimonialsPagination() {
  const itemsPerPage = 7;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  // Calculate the current items to show
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTestimonials:TestimonialsProps[] = testimonials.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>      
  <div className="bg-white-100 py-8 px-4 md:px-8 lg:px-16 xl:px-36 2xl:px-72 flex flex-col justify-center items-center">
        <Container className="">
          {currentTestimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              initials={testimonial.name.slice(0, 2)}
              name={testimonial.name}
              text={testimonial.quote}              
            />
          ))}
        </Container>
        <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </div>
    </div>
  );
}
