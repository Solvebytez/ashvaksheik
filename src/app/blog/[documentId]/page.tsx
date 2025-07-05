
import { BASE_URL } from "@/env";
import BlogDetails from "./Detail";

export async function generateMetadata({ params }: { params: { documentId: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/blogs?filters[slug][$eq]=${params.documentId}&populate=*`,{
   
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  
   const jsonData = await res.json(); 
   
   console.log("jsonData", jsonData.data[0].thumbnail[0].url);

  return {
    title: jsonData.data[0].title,
    description: jsonData.data[0].ShortDescription,
    openGraph:{
      images:[
        jsonData.data[0].thumbnail[0].url.startsWith('http')
                  ? jsonData.data[0].thumbnail[0].url
                  : `${BASE_URL}${jsonData.data[0].thumbnail[0].url}`
      ]
    }
  }
}

const BlogDetailsPage = ({ params }: { params: { documentId: string } }) => {
  console.log("params", params);

  
  return (
    <>
     <BlogDetails params={params}/>
    </>
  );
};

export default BlogDetailsPage;
