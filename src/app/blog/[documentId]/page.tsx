
import BlogDetails from "./Detail";

const BlogDetailsPage = ({ params }: { params: { documentId: string } }) => {
  console.log("params", params);

  
  return (
    <>
     <BlogDetails params={params}/>
    </>
  );
};

export default BlogDetailsPage;
