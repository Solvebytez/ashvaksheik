
import BlogDetails from "./Detail";

const BlogDetailsPage = ({ params }: { params: { id: string } }) => {
  console.log("params", params);

  
  return (
    <>
     <BlogDetails params={params}/>
    </>
  );
};

export default BlogDetailsPage;
