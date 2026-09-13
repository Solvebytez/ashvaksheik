import ContactCard from "../ContactCard";
import { formatDate } from "@/lib/utils";
import { getBlogs } from "@/lib/blogs";
import Image from "next/image";
import Link from "next/link";

const Sidebar = async () => {
  const blogs = await getBlogs();

  return (
    <div className="max-w-sm mx-auto sticky top-12 space-y-6">
      <div className="bg-white/5">
        <ContactCard cardType="black" />
      </div>
      <div className="bg-white/5 p-4 pl-8">
        <h2 className="text-left text-white font-bold mb-4 pt-3 pb-4 font-tenor_Sans tracking-[2px]">
          Latest Posts <span className="border-t border-white w-16 mr-2 borer-3 inline-block"></span>
        </h2>
        <div>
          {blogs.map((blog) => {
            const raw =
              blog.thumbnail?.[0]?.formats?.medium?.url ?? blog.thumbnail?.[0]?.url;
            const src = raw && (raw.startsWith("http") ? raw : raw);
            return (
              <Link key={blog.id} href={`/blog/${blog.slug}`}>
                <div className="flex items-start relative mb-8">
                  <Image
                    src={src || "/profile.jpeg"}
                    alt={blog.thumbnail?.[0]?.alternativeText || blog.title}
                    width={100}
                    height={100}
                    className="w-16 h-16 object-cover mr-4"
                  />
                  <div className="flex-1 space-y-2">
                    <h3 className="text-sm font-semibold text-white line-clamp-2 font-tenor_Sans tracking-[1px]">
                      {blog.title}
                    </h3>
                    <p className="text-xs text-white/40">{formatDate(blog.publishedAt)}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
