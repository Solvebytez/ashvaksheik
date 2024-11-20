import Image from "next/image";
import LinkButton from "./Global/Button";
import { GET_BLOGS } from "@/lib/article-queries/queries";
import { useQuery } from "@apollo/client";
import { Blog, BlogsResponse } from "@/@types/blog";
import { BASE_URL } from "@/env";
import { formatDate } from "@/lib/utils";

const BlogCard = () => {
  const { loading, error, data } = useQuery<BlogsResponse>(GET_BLOGS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const blogs: Blog[] = data?.blogs.data ?? [];
 
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {blogs.map(({ id,attributes }: Blog) => (
        <div
          key={attributes.Title}
          className="relative group overflow-hidden shadow-md bg-white"
        >
          <div className={`relative w-full h-[20rem] overflow-hidden`}>
            <Image
              src={`${BASE_URL}${attributes.Thumbnail.data.attributes.url}`}
              alt={attributes.Title}
              fill
              className="transition-transform duration-500 ease-in-out transform group-hover:scale-110 object-cover z-0"
            />
          </div>
          {/* Info Section */}
          <div className="p-10 relative z-1 bg-white text-center flex flex-col items-center justify-center space-y-2 ">
            <h3 className="text-2xl tracking-[2px] track font-tenor_Sans text-black">
              {attributes.Title}
            </h3>

            <p className="text-sm text-black font-bold tracking-[1px]">
              {attributes.ShortDescription.slice(0, 100)}
            </p>

            {attributes.publishedAt && (
              <p className="text-sm mt-2 tracking-[2px] text-black">
                Publish at: {formatDate(attributes.publishedAt)}
              </p>
            )}
          </div>
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            {attributes.Slug && (
              <LinkButton
                href={`blog/${id}`}
                btnText="View Post"
                className="border-2 border-black px-4 py-2 font-semibold  transition-colors duration-300 transform translate-y-full group-hover:translate-y-0   hover:bg-black"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
