/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import Breadcrumb from "@/components/Global/BreadcrumbLinks";
import LinkButton from "@/components/Global/Button";
import Sidebar from "@/components/Global/Sidebar";
import ReceiveInbox from "@/components/Home/ReceiveInbox";
import { BASE_URL } from "@/env";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Markdown from "react-markdown";
import { useEffect, useState } from "react";

const BlogDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        setLoading(true);
        // Using the exact API endpoint structure
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/blogs?id=${id}&populate=*`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch blog post: ${response.statusText}`);
        }
        
        const jsonData = await response.json();
        console.log('API Response:', jsonData);

        // Check if we have data
        if (!jsonData.data || jsonData.data.length === 0) {
          throw new Error('Blog post not found');
        }

        const post = jsonData.data[0]; // Get the first post since we're querying by ID
        const blogData = {
          blog: {
            data: {
              id: post.id,
              attributes: {
                Title: post.title,
                Content: post.content,
                ShortDescription: post.ShortDescription,
                Slug: post.slug,
                publishedAt: post.publishedAt,
                Thumbnail: {
                  data: {
                    id: post.thumbnail?.[0]?.id,
                    attributes: {
                      url: post.thumbnail?.[0]?.formats?.medium?.url || post.thumbnail?.[0]?.url,
                      alternativeText: post.thumbnail?.[0]?.alternativeText
                    }
                  }
                }
              }
            }
          }
        };

        console.log('Transformed Blog Data:', blogData);
        setData(blogData);
        
      } catch (err) {
        console.error('Error fetching blog:', err);
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };
  
    fetchBlogPost();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!data?.blog.data) return (
    <div className="h-[calc(90vh-50px)] relative z-0 px-4 md:px-8 lg:px-16 xl:px-36 2xl:px-72 lg:pt-32 overflow-hidden">
      <div className="flex flex-col items-center h-full justify-center text-white gap-4">
        Blog post not found.
        <LinkButton btnText="Go to Blog Page" href="/blog"/>
      </div>
    </div>
  );

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
      name: data.blog.data.attributes.Title,
      href: "#",   
    },
  ];

  return (
    <>
      <div className="h-[calc(90vh-50px)] relative z-0 px-4 md:px-8 lg:px-16 xl:px-36 2xl:px-72 lg:pt-32 overflow-hidden">
        <Breadcrumb LinkItem={breadrcum} />
        <h1 className="text-white font-tenor_Sans text-4xl tracking-[2px] mt-8">
          {data.blog.data.attributes.Title}
        </h1>
        <p className="text-white my-5">
          {data.blog.data.attributes.ShortDescription}
        </p>
        <div className="h-full xl:w-full xl:h-full relative">
          {data.blog.data.attributes.Thumbnail?.data?.attributes?.url && (
            <Image
              src={data.blog.data.attributes.Thumbnail.data.attributes.url.startsWith('http') 
                ? data.blog.data.attributes.Thumbnail.data.attributes.url 
                : `${BASE_URL}${data.blog.data.attributes.Thumbnail.data.attributes.url}`}
              fill
              priority
              className="object-cover"
              alt={data.blog.data.attributes.Thumbnail.data.attributes.alternativeText || data.blog.data.attributes.Title}
            />
          )}
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-12 gap-5 mb-10  px-4 md:px-8 lg:px-14 xl:px-32 2xl:px-64 lg:pt-[2rem]">
        <div className="col-span-8 pl-3 md:pl-7">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <p className="text-xs text-white">{formatDate(data.blog.data.attributes.publishedAt)}</p>
              <p className="text-xs text-white">by Admin</p>
            </div>
          </div>
          <hr className="my-2 border-white/10 mt-4 font-tenor_Sans"></hr>
          <div className="BlogDetails">
            <Markdown className="prose prose-invert max-w-none">
              {Array.isArray(data.blog.data.attributes.Content) 
                ? data.blog.data.attributes.Content.map((block: { children: any[]; }) => 
                    block.children?.map((child: { text: any; }) => child.text).join('')
                  ).join('\n\n')
                : data.blog.data.attributes.Content}
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
