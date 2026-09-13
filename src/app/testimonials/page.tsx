import BreadcumBanner from "@/components/Global/BreadcumBanner";
import WorkWith from "@/components/Home/WorkWith";
import TestimonialPaginations from "@/components/Testimonials/TestimonialPaginations";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Client Testimonials",
  description:
    "Read what GTA buyers and sellers say about working with Ashvak Sheik, Realtor at Re/Max Millennium Real Estate.",
  path: "/testimonials",
});

const TestimonialsPage = () => {
  return (
    <div className="bg-black text-white">
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
