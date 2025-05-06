/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import LinkButton from "./Global/Button";
import { useEffect, useState } from "react";
import { formatDate } from "@/lib/utils";
import { API_TOKEN, BASE_URL } from "@/env";

export interface BlogResponse {
  data: Blog[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface Blog {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  ShortDescription: string;
  content: any[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  thumbnail: {
    url: string;
    id: number;
    formats: {
      medium: {
        url: string;
      };
    };
    alternativeText: string | null;
  }[];
  categories: any[];
}

const BlogCard = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/blogs?populate=*`,{
          // headers: {
          //   "Authorization": `Bearer ${API_TOKEN}`, // Include the JWT token in the Authorization header
          //   "Content-Type": "application/json", // Optional, but good practice
          // },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data: BlogResponse = await response.json();
        setBlogs(data.data.reverse());
      } catch (err) {
        setError((err as Error).message);
        console.error('Error fetching blogs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log("blogs",blogs[0]?.thumbnail[0]?.url)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {blogs?.map((blog) => (
        <div
  key={blog.documentId}
  className="relative group overflow-hidden shadow-md bg-white"
>
  <div className="w-full overflow-hidden">
    <Image
      alt={blog.title}
      src={blog.thumbnail[0]?.url|| ""}
      width={800} // Or the actual image width
      height={500} // Or the actual image height
      priority
      className="w-full h-auto object-contain"
    />
  </div>

  {/* Info Section */}
  <div className="p-10 relative z-1 bg-white text-center flex flex-col items-center justify-center space-y-2">
    <h3 className="text-2xl tracking-[2px] font-tenor_Sans text-black">
      {blog.title}
    </h3>
    <p className="text-sm text-black font-bold tracking-[1px]">
      {blog.ShortDescription.slice(0, 100)}
    </p>
    {blog.publishedAt && (
      <p className="text-sm mt-2 tracking-[2px] text-black">
        Publish at: {formatDate(blog.publishedAt)}
      </p>
    )}
  </div>

  {/* Hover Overlay */}
  <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
    <LinkButton
      href={`/blog/${blog.slug}`}
      btnText="View Post"
      className="border-2 !border-black px-4 py-2 font-semibold bg-black transition-colors duration-300 transform translate-y-full group-hover:translate-y-0 hover:bg-black"
    />
  </div>
</div>
      ))}
    </div>
  );
};

export default BlogCard;
