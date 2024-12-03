'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ContactCard from '../ContactCard';


import { BASE_URL } from '@/env';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';
import { Blog, BlogResponse } from '../BlogCard';



const Sidebar = () => {

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/blogs?populate=*`);
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data: BlogResponse = await response.json();
        setBlogs(data.data);
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


  return (
    <div className="max-w-sm mx-auto   sticky top-12 space-y-6">
        <div className='bg-white/5'>
            <ContactCard cardType="black"/>
        </div>
      <div className="bg-white/5 p-4 pl-8">
      <h2 className="text-left text-white font-bold mb-4 pt-3 pb-4 font-tenor_Sans tracking-[2px]">Latest Posts <span className="border-t border-white w-16 mr-2 borer-3 inline-block"></span></h2>
      
      <div>
      {blogs.map((blog) => (
          <Link key={blog.id}  href={`/blog/${blog.slug}`}>
              <div  className="flex items-start relative mb-8">
            <Image
              src={ blog.thumbnail?.[0]?.formats?.medium?.url
                ? `${BASE_URL}${blog.thumbnail[0].formats.medium.url}`
                : "/default-thumbnail.jpg"}
                alt={blog.thumbnail?.[0]?.alternativeText || blog.title}
              width={100}
              height={100}
              className="w-16 h-16 object-cover mr-4"
            />
            <div className="flex-1 space-y-2">
              <h3 className="text-sm font-semibold text-white line-clamp-2 font-tenor_Sans tracking-[1px]" >{blog.title}</h3>        
              <p className="text-xs text-white/40">{formatDate(blog.publishedAt)}</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
