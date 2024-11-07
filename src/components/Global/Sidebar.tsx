import Image from 'next/image';
import React from 'react';
import ContactCard from '../ContactCard';

const posts = [
  {
    imageSrc: "https://images.pexels.com/photos/28720925/pexels-photo-28720925/free-photo-of-minimalist-diagonal-stairway-against-white-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Basic Inner Workings Vintage Beauty in De...",
    category: "LIFESTYLE",
    date: "MAY 15, 2016",
  },
  {
    imageSrc: "https://images.pexels.com/photos/28704263/pexels-photo-28704263/free-photo-of-outdoor-book-market-at-saint-sulpice-paris.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Vintage Beauty in De Vintage Beauty in De...",
    category: "LIFESTYLE",
    date: "MAY 15, 2016",
  },
  {
    imageSrc: "https://images.pexels.com/photos/28720925/pexels-photo-28720925/free-photo-of-minimalist-diagonal-stairway-against-white-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "My Shiny New Backpa Vintage Beauty in De...",
    category: "FASHION",
    date: "MAY 15, 2016",
  },
  {
    imageSrc: "https://images.pexels.com/photos/28704263/pexels-photo-28704263/free-photo-of-outdoor-book-market-at-saint-sulpice-paris.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Pros & Cons of Bein Vintage Beauty in De...",
    category: "FASHION",
    date: "MAY 15, 2016",
  },
];

const Sidebar = () => {
  return (
    <div className="max-w-sm mx-auto   sticky top-12 space-y-6">
        <div className='bg-white/5'>
            <ContactCard cardType="black"/>
        </div>
      <div className="bg-white/5 p-4 pl-8">
      <h2 className="text-left text-white font-bold mb-4 pt-3 pb-4 font-tenor_Sans tracking-[2px]">Latest Posts <span className="border-t border-white w-16 mr-2 borer-3 inline-block"></span></h2>
      
      <div>
        {posts.map((post, index) => (
          <div key={index} className="flex items-start relative mb-8">
            <Image
              src={post.imageSrc}
              alt={post.title}
              width={100}
              height={100}
              className="w-16 h-16 object-cover mr-4"
            />
            <div className="flex-1 space-y-2">
              <h3 className="text-sm font-semibold text-white line-clamp-2 font-tenor_Sans tracking-[1px]" >{post.title}</h3>        
              <p className="text-xs text-white/40">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
