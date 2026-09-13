import BreadcumBanner from "@/components/Global/BreadcumBanner";
import WorkWith from "@/components/Home/WorkWith";
import JsonLd from "@/components/seo/JsonLd";
import TestimonialPaginations from "@/components/Testimonials/TestimonialPaginations";
import { testimonials } from "@/lib/Data/testimonialData";
import { pageMetadata, reviewsGraph } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Client Testimonials",
  description:
    "Read what GTA buyers and sellers say about working with Ashvak Sheik, Realtor at Re/Max Millennium Real Estate in Brampton, Mississauga, and Toronto.",
  path: "/testimonials",
});

const TestimonialsPage = () => {
  return (
    <div className="bg-black text-white">
      <JsonLd data={reviewsGraph(testimonials)} />
      <BreadcumBanner
        pageTitle="Testimonials"
        description="What GTA buyers and sellers say about working with Ashvak Sheik at Re/Max Millennium Real Estate."
        bgLogo="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <TestimonialPaginations />
      <WorkWith />
    </div>
  );
};

export default TestimonialsPage;
