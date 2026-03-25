
import { BASE_URL } from "@/env";
import BlogDetails from "./Detail";

export async function generateMetadata({ params }: { params: { documentId: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/blogs?filters[slug][$eq]=${params.documentId}&populate=*`,{
   
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  
   const jsonData = await res.json();
   const post = Array.isArray(jsonData.data) ? jsonData.data[0] : undefined;
   const thumbRaw =
     post?.thumbnail?.[0]?.formats?.medium?.url ?? post?.thumbnail?.[0]?.url;
   const ogImage =
     thumbRaw &&
     (thumbRaw.startsWith("http") ? thumbRaw : `${BASE_URL}${thumbRaw}`);

  return {
    title: post?.title ?? "Blog",
    description: post?.ShortDescription ?? undefined,
    openGraph: ogImage
      ? { images: [ogImage] }
      : undefined,
  };
}

const BlogDetailsPage = ({ params }: { params: { documentId: string } }) => {
  return (
    <>
     <BlogDetails params={params}/>
    </>
  );
};

export default BlogDetailsPage;
