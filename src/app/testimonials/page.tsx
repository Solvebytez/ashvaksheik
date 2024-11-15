import BreadcumBanner from "@/components/Global/BreadcumBanner";

import WorkWith from "@/components/Home/WorkWith";
import TestimonialPaginations from "@/components/Testimonials/TestimonialPaginations";


const TestimonialsPage = () => {
  return (
    <div className="bg-white">
      <BreadcumBanner
        pageTitle="Testimonials"
        description="Browse what my clients have to say about me."
        bgLogo="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <TestimonialPaginations/>
      <WorkWith />
    </div>
  );
};

export default TestimonialsPage;
