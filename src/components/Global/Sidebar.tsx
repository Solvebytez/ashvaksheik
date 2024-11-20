'use client'
import Image from 'next/image';
import React from 'react';
import ContactCard from '../ContactCard';
import { Blog, BlogsResponse } from '@/@types/blog';
import { useQuery } from '@apollo/client';
import {  SIDEBAR_LIST } from '@/lib/article-queries/queries';
import { BASE_URL } from '@/env';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';



const Sidebar = () => {

  const { loading, error, data } = useQuery<BlogsResponse>(SIDEBAR_LIST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const blogs: Blog[] = data?.blogs.data ?? [];

  return (
    <div className="max-w-sm mx-auto   sticky top-12 space-y-6">
        <div className='bg-white/5'>
            <ContactCard cardType="black"/>
        </div>
      <div className="bg-white/5 p-4 pl-8">
      <h2 className="text-left text-white font-bold mb-4 pt-3 pb-4 font-tenor_Sans tracking-[2px]">Latest Posts <span className="border-t border-white w-16 mr-2 borer-3 inline-block"></span></h2>
      
      <div>
      {blogs.map(({id, attributes }: Blog) => (
          <Link key={attributes.Title}  href={`/blog/${id}`}>
              <div  className="flex items-start relative mb-8">
            <Image
              src={`${BASE_URL}${attributes.Thumbnail.data.attributes.url}`}
              alt={attributes.Title}
              width={100}
              height={100}
              className="w-16 h-16 object-cover mr-4"
            />
            <div className="flex-1 space-y-2">
              <h3 className="text-sm font-semibold text-white line-clamp-2 font-tenor_Sans tracking-[1px]" >{attributes.Title}</h3>        
              <p className="text-xs text-white/40">{formatDate(attributes.publishedAt)}</p>
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
