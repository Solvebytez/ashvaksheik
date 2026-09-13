import Breadcrumb from "@/components/Global/BreadcrumbLinks";
import LinkButton from "@/components/Global/Button";
import Sidebar from "@/components/Global/Sidebar";
import ReceiveInbox from "@/components/Home/ReceiveInbox";
import type { Blog } from "@/components/BlogCard";
import { BASE_URL } from "@/env";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import RenderContent from "./renderContent";

const BlogDetails = ({ post }: { post?: Blog }) => {
  if (!post) {
    return (
      <div className="h-[calc(90vh-50px)] relative z-0 px-4 md:px-8 lg:px-16 xl:px-36 2xl:px-72 lg:pt-32 overflow-hidden">
        <div className="flex flex-col items-center h-full justify-center text-white gap-4">
          Blog post not found.
          <LinkButton btnText="Go to Blog Page" href="/blog" />
        </div>
      </div>
    );
  }

  const raw = post.thumbnail?.[0]?.formats?.medium?.url ?? post.thumbnail?.[0]?.url;
  const imageSrc = raw && (raw.startsWith("http") ? raw : `${BASE_URL}${raw}`);

  return (
    <>
      <div className="min-h-[55vh] md:h-[calc(90vh-50px)] relative z-0 px-4 md:px-8 lg:px-16 xl:px-36 2xl:px-72 pt-24 md:pt-32 pb-8 overflow-hidden">
        <Breadcrumb
          LinkItem={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: post.title, href: "#" },
          ]}
        />
        <h1 className="text-white font-tenor_Sans text-2xl md:text-4xl tracking-[1px] md:tracking-[2px] mt-6 md:mt-8 leading-tight">
          {post.title}
        </h1>
        <p className="text-white my-5">{post.ShortDescription}</p>
        <div className="h-full xl:w-full xl:h-full relative">
          {imageSrc && (
            <Image
              src={imageSrc}
              fill
              priority
              className="object-cover"
              alt={post.title || "Ashvak Sheik GTA real estate article"}
            />
          )}
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-12 gap-5 mb-10  px-4 md:px-8 lg:px-14 xl:px-32 2xl:px-64 lg:pt-[2rem]">
        <div className="col-span-8 pl-0 md:pl-7">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <p className="text-xs text-white">{formatDate(post.publishedAt)}</p>
              <p className="text-xs text-white">by Ashvak Sheik</p>
            </div>
          </div>
          <hr className="my-2 border-white/10 mt-4 font-tenor_Sans"></hr>
          <div className="BlogDetails">
            {post.content && <RenderContent content={post.content} />}
          </div>
        </div>
        <div className="col-span-4">
          <Sidebar />
        </div>
      </div>
      <ReceiveInbox />
    </>
  );
};

export default BlogDetails;
