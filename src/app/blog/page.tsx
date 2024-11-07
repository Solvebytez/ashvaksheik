import BlogCard from "@/components/BlogCard";
import BreadcumBanner from "@/components/Global/BreadcumBanner";
import Container from "@/components/Global/Container";
import Sidebar from "@/components/Global/Sidebar";
import ReceiveInbox from "@/components/Home/ReceiveInbox";

const posts = [
  {
    imageSrc:
      "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "First Item",
    description: "This is the description for the first item.",
    date: "2024-10-26",
  },
  {
    imageSrc:
      "https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Second Item",
    description: "This is the description for the second item.",
    date: "2024-10-26",
  },
  {
    imageSrc:
      "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Third Item",
    description: "This is the description for the third item.",
    date: "2024-09-15",
  },
  {
    imageSrc:
      "https://images.pexels.com/photos/1500459/pexels-photo-1500459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Fourth Item",
    description: "This is the description for the fourth item.",
    date: "2024-10-26",
  },
];

const BlogPage = () => {
  return (
    <div>
      <BreadcumBanner pageTitle="Blog" bgLogo="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/gg5lqgxfs8n9uajak0pp/portfolio" />
      <div className="flex flex-col justify-center py-10 items-center ">
        <h2 className="text-center text-5xl font-tenor_Sans tracking-[5px] text-white py-10">
          Featured Posts
        </h2>
      </div>
      <Container>
        <div className="lg:grid lg:grid-cols-12 gap-5 mb-10">
          <div className="col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {posts.map((post, index) => (
                <BlogCard key={index} {...post} postlink="#" />
              ))}
            </div>
          </div>
          <div className="col-span-4">
            <Sidebar/>
          </div>
        </div>
      </Container>
      <ReceiveInbox/>
    </div>
  );
};

export default BlogPage;
