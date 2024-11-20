'use client'

import { BlogPostData } from "@/@types/SingleBlog";
import Breadcrumb from "@/components/Global/BreadcrumbLinks";
import LinkButton from "@/components/Global/Button";
import Sidebar from "@/components/Global/Sidebar";
import ReceiveInbox from "@/components/Home/ReceiveInbox";
import { BASE_URL } from "@/env";
import { GET_BLOG_BY_ID } from "@/lib/article-queries/queries";
import { formatDate } from "@/lib/utils";
import { useQuery } from "@apollo/client";
import Image from "next/image";
// import Link from "next/link";
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Markdown from "react-markdown";

const BlogDetails = ({ params }: { params: { id: string } }) => {

  const { id } = params;



  const { loading, error, data } = useQuery<BlogPostData>(GET_BLOG_BY_ID,{
    variables: { id }, // Pass the blog ID to the query
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log("data?.attributes",data?.blog.data.attributes)
  if (!data?.blog.data) return <div className="h-[calc(90vh-50px)] relative z-0 px-4 md:px-8 lg:px-16 xl:px-36 2xl:px-72 lg:pt-32 overflow-hidden">
    <div className="flex flex-col items-center h-full justify-center text-white gap-4">Blog post not found.<LinkButton btnText="Go to Blog Page" href="/blog"/></div>
    
  </div>;

   const {Content,Title,ShortDescription,publishedAt,Thumbnail} = data?.blog.data.attributes

  const breadrcum = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: `${Title}`,
      href: "#",   
    },
  ]

  return (
    <>
      <div className="h-[calc(90vh-50px)] relative z-0 px-4 md:px-8 lg:px-16 xl:px-36 2xl:px-72 lg:pt-32 overflow-hidden">
        <Breadcrumb LinkItem={breadrcum} />
        <h1 className="text-white font-tenor_Sans text-4xl tracking-[2px] mt-8">
          {Title}
        </h1>
        <p className="text-white my-5">
          {ShortDescription}
        </p>
        <div className="h-full xl:w-full xl:h-full relative">
          <Image
            src={`${BASE_URL}${Thumbnail.data.attributes.url}`}
            fill
            priority
            className="object-cover"
            alt=""
          />
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-12 gap-5 mb-10  px-4 md:px-8 lg:px-14 xl:px-32 2xl:px-64 lg:pt-[2rem]">
        <div className="col-span-8 pl-3 md:pl-7">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <p className="text-xs text-white">{formatDate(publishedAt)}</p>
              <p className="text-xs text-white">by Admin</p>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {/* <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-black hover:bg-white w-8 h-8 ring-1 ring-white rounded-full flex flex-col items-center justify-center"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-black hover:bg-white w-8 h-8 ring-1 ring-white rounded-full flex flex-col items-center justify-center"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-black hover:bg-white w-8 h-8 ring-1 ring-white rounded-full flex flex-col items-center justify-center"
              >
                <FaLinkedinIn />
              </Link> */}
            </div>
          </div>
          <hr className="my-2 border-white/10 mt-4 font-tenor_Sans"></hr>
          <div className="BlogDetails">
            <Markdown>
              {Content}
            </Markdown>
          
          </div>
        </div>
        <div className="col-span-4">
          <Sidebar />
        </div>
      </div>
      <ReceiveInbox/>
    </>
  );
};

export default BlogDetails;
