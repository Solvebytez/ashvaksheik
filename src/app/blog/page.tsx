'use client'
import BlogCard from "@/components/BlogCard";
import BreadcumBanner from "@/components/Global/BreadcumBanner";
import Container from "@/components/Global/Container";
import Sidebar from "@/components/Global/Sidebar";
import ReceiveInbox from "@/components/Home/ReceiveInbox";
import { Suspense } from "react";

const BlogPage = () => {


  return (
    <div>
      <BreadcumBanner pageTitle="Blog" bgLogo="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/gg5lqgxfs8n9uajak0pp/portfolio" />
      <div className="flex flex-col justify-center py-10 items-center ">
        <h2 className="text-center text-5xl font-tenor_Sans tracking-[5px] text-white py-10">
          Featured Posts
        </h2>
      </div>
      <Container>
        <div className="lg:grid lg:grid-cols-12 gap-5 mb-10">
          <div className="col-span-8 text-white">
            <Suspense fallback={'Loading.........'}>
            <BlogCard />
            </Suspense>
          </div>
          <div className="col-span-4">
            <Sidebar/>
          </div>
        </div>
      </Container>
      <ReceiveInbox/>
    </div>
  );
};

export default BlogPage;
