/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import LinkButton from "./Global/Button";
import { formatDate } from "@/lib/utils";
import { BASE_URL } from "@/env";

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

const BlogCard = async () => {
  let blogs: Blog[] = [];
  try {
    const response = await fetch(`${BASE_URL}/api/blogs?populate=*`, {
      next: { revalidate: 3600 },
    });
    if (response.ok) {
      const data: BlogResponse = await response.json();
      const list = Array.isArray(data.data) ? data.data : [];
      blogs = [...list].reverse();
    }
  } catch (err) {
    console.error("Error fetching blogs:", err);
  }

  if (!blogs.length) {
    return <p className="text-white/70">No posts published yet.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {blogs?.map((blog) => (
        <div
  key={blog.documentId}
  className="relative group overflow-hidden border border-white/15 bg-black"
>
  <div className="w-full overflow-hidden">
    {(() => {
      const raw =
        blog.thumbnail?.[0]?.formats?.medium?.url ?? blog.thumbnail?.[0]?.url;
      const src =
        raw && (raw.startsWith("http") ? raw : `${BASE_URL}${raw}`);
      return src ? (
    <Image
      alt={blog.title}
      src={src}
      width={800} // Or the actual image width
      height={500} // Or the actual image height
      priority
      className="w-full h-auto object-contain"
    />
      ) : (
        <div className="flex aspect-[8/5] w-full items-center justify-center bg-white/5 text-sm text-white/60">
          No image
        </div>
      );
    })()}
  </div>

  {/* Info Section */}
  <div className="p-6 md:p-10 relative z-1 bg-black text-center flex flex-col items-center justify-center space-y-2">
    <h3 className="text-xl md:text-2xl tracking-[1px] md:tracking-[2px] font-tenor_Sans text-white leading-snug">
      {blog.title}
    </h3>
    <p className="text-sm text-white/70 font-bold tracking-[1px]">
      {(blog.ShortDescription ?? "").slice(0, 100)}
    </p>
    {blog.publishedAt && (
      <p className="text-sm mt-2 tracking-[2px] text-white/50">
        Publish at: {formatDate(blog.publishedAt)}
      </p>
    )}
    <LinkButton
      href={`/blog/${blog.slug}`}
      btnText="View Post"
      className="mt-4 md:hidden"
    />
  </div>

  {/* Hover Overlay */}
  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 items-center justify-center hidden md:flex">
    <LinkButton
      href={`/blog/${blog.slug}`}
      btnText="View Post"
      className="border-2 border-white px-4 py-2 font-semibold bg-transparent transition-colors duration-300 transform translate-y-full group-hover:translate-y-0 hover:bg-white hover:text-black"
    />
  </div>
</div>
      ))}
    </div>
  );
};

export default BlogCard;
