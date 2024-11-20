"use client"

import { Blog, BlogsResponse } from "@/@types/blog";
import LinkButton from "../Global/Button";
import Container from "../Global/Container";
import SectionTitle from "../Global/SectionTitle";
import { useQuery } from "@apollo/client";
import { HOME_PAGE_BLOG } from "@/lib/article-queries/queries";
import { formatDate } from "@/lib/utils";
import { BASE_URL } from "@/env";


const HomeNews = () => {

  const { loading, error, data } = useQuery<BlogsResponse>(HOME_PAGE_BLOG);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const blogs: Blog[] = data?.blogs.data ?? [];


  const firstItem = blogs[0].attributes;
  const lastTwo= blogs.slice(1);
 
  return (
    <div className="">
      <Container>
        <SectionTitle
          description="BROWSE MY AVAILABLE PROPERTIES"
          titleNumber={0.4}
          title="EXCLUSIVE LISTINGS"
          bgLogo="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/gyommycouuod40setpi0/rl-bg"
        />
 <div className="text-white px-0 md:p-4 min-h-max">
      <div className="space-y-4">
        {/* Full-width card */}
        {blogs.length && (
          <div
            key={firstItem.Title}
            className="group relative overflow-hidden w-full h-64 mb-1 bg-cover bg-center"
            style={{ backgroundImage: `url(${BASE_URL}${firstItem.Thumbnail.data.attributes.url})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 opacity-100 transition-opacity duration-300 group-hover:opacity-100">
              <div className="text-center transition-transform transform translate-y-10 group-hover:translate-y-0 duration-300">
                <h2 className="text-xl font-bold uppercase tracking-[5px]">{firstItem.Title}</h2>
                {firstItem.ShortDescription && (
                  <p className="text-lg mt-2 hidden group-hover:block opacity-0 transition-transform transform translate-y-full group-hover:translate-y-0 duration-300 group-hover:opacity-100">
                    {firstItem.ShortDescription.slice(0,90)}
                  </p>
                )}
                <p className="text-md uppercase font-bold mt-1 opacity-75">
                  {formatDate(firstItem.publishedAt)} | {"Ashvak Sheik"}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Half-width cards with horizontal gap */}
        <div className="flex-col flex md:flex-row gap-y-4 md:gap-y-4 md:gap-x-4">
          {lastTwo.map((card) => (
            <div
              key={card.id}
              className="group relative overflow-hidden w-full md:w-[calc(50%-12px)] h-64 bg-cover bg-center"
              style={{ backgroundImage: `url(${BASE_URL}${card.attributes.Thumbnail.data.attributes.url})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 opacity-100 transition-opacity duration-300 group-hover:opacity-100">
                <div className="text-center transition-transform transform translate-y-6 md:translate-y-10 group-hover:translate-y-0 duration-300">
                  <h2 className="text-xl font-bold uppercase tracking-[5px]">{card.attributes.Title}</h2>
                  {card.attributes.ShortDescription&& (
                    <p className="text-lg mt-2 hidden group-hover:block opacity-0 transition-transform transform translate-y-full group-hover:translate-y-0 duration-300 group-hover:opacity-100">
                      {card.attributes.ShortDescription.slice(0,90)}
                    </p>
                  )}
                  <p className="text-md uppercase font-bold mt-1 opacity-75">
                  {formatDate(card.attributes.publishedAt)} | {"Ashvak Sheik"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mb-[5rem]">
        <LinkButton href="/blog" btnText="Veiw All" className="text-white mt-14" />
      </div>
    </div>
      </Container>    
    </div>
  );
};

export default HomeNews;
