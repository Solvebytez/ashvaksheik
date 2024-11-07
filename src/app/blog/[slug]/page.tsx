import Breadcrumb from "@/components/Global/BreadcrumbLinks";
import Sidebar from "@/components/Global/Sidebar";
import ReceiveInbox from "@/components/Home/ReceiveInbox";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const BlogDetails = ({ params }: { params: { slug: string } }) => {
  console.log("params", params);
  return (
    <>
      <div className="h-[calc(90vh-50px)] relative z-0 px-4 md:px-8 lg:px-16 xl:px-36 2xl:px-72 lg:pt-32 overflow-hidden">
        <Breadcrumb />
        <h1 className="text-white font-tenor_Sans text-4xl tracking-[2px] mt-8">
          Elevating Everyday Moments with Simple Yet Profound Changes
        </h1>
        <p className="text-white my-5">
          In the Age of Information, news media faces both unprecedented
          opportunities and significant challenges.
        </p>
        <div className="h-full xl:w-full xl:h-full relative">
          <Image
            src="https://res.cloudinary.com/luxuryp/images/w_1920,c_limit,f_auto,q_auto/yuirgutg10d3g4ftb3fn/66hume4-twilight"
            fill
            priority
            className="object-cover"
            alt=""
          />
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-12 gap-5 mb-10  px-4 md:px-8 lg:px-14 xl:px-32 2xl:px-64 lg:pt-[2rem]">
        <div className="col-span-8 pl-3 md:pl-7">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <p className="text-xs text-white">Aug 19, 2023</p>
              <p className="text-xs text-white">by Joanna Wellick</p>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-black hover:bg-white w-8 h-8 ring-1 ring-white rounded-full flex flex-col items-center justify-center"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-black hover:bg-white w-8 h-8 ring-1 ring-white rounded-full flex flex-col items-center justify-center"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-black hover:bg-white w-8 h-8 ring-1 ring-white rounded-full flex flex-col items-center justify-center"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
          <hr className="my-2 border-white/10 mt-4 font-tenor_Sans"></hr>
          <div className="BlogDetails">
            <p className="">
              The modern lifestyle is a vibrant tapestry woven from various
              threads including technology, wellness, fashion, and travel. Each
              element plays a pivotal role in shaping our daily experiences and
              personal growth. As we navigate through this dynamic landscape,
              staying informed and inspired is key. For a deeper dive into how
              these trends are influencing contemporary life and culture, check
              out insights from leading thinkers and lifestyle experts at The
              New York Times.
            </p>

            <p className="">
              The modern lifestyle is a vibrant tapestry woven from various
              threads including technology, wellness, fashion, and travel. Each
              element plays a pivotal role in shaping our daily experiences and
              personal growth. As we navigate through this dynamic landscape,
              staying informed and inspired is key. For a deeper dive into how
              these trends are influencing contemporary life and culture, check
              out insights from leading thinkers and lifestyle experts at The
              New York Times.
            </p>
            <h2>Blog Excerpts</h2>
            <p>
              Wellness is more than just a trend; it’s a lifestyle essential
              that encompasses physical health, mental well-being, and emotional
              balance. Incorporating regular physical activity, mindful
              meditation, and balanced nutrition into our routines can
              significantly improve quality of life. As we become more attuned
              to our bodies’ needs, we also learn to value moments of rest and
              recovery, essential for long-term health.
            </p>
            <p className="">
              The modern lifestyle is a vibrant tapestry woven from various
              threads including technology, wellness, fashion, and travel. Each
              element plays a pivotal role in shaping our daily experiences and
              personal growth. As we navigate through this dynamic landscape,
              staying informed and inspired is key. For a deeper dive into how
              these trends are influencing contemporary life and culture, check
              out insights from leading thinkers and lifestyle experts at The
              New York Times.
            </p>
            <h2>A Balanced Approach to Wellness</h2>
            <ul>
              <li>
                <strong>Frodo -</strong> A young well-to-do hobbit. When he
                discovers that the magic ring left to him by his eccentric{" "}
                {"Uncle"} Bilbo is the One Ring, he reluctantly takes on the
                quest to destroy it. Often referred to as the Ringbearer.
              </li>
              <li>
                <strong>Gandalf the Grey -</strong> A wizard best known among
                hobbits for his fireworks and mischievous sense of humor, but
                actually one of the greatest powers of Middle-earth. He reveals
                the truth about the Ring to Frodo and acts as a guide and
                counselor. The leader of the Fellowship. Other names: Stormcrow,
                Mithrandir, the Grey Pilgrim, the White Rider, Tharkûn, Olórin,
                Incánus, and Gandalf the White.
              </li>
              <li>
                <strong>Aragorn -</strong> The heir of Isildur and the rightful
                king of Gondor, a mighty warrior and healer. He was raised by
                the elves of Rivendell and now lives in exile as leader of the
                Dúnedain, the Rangers of the North. The time has now come for
                him to reclaim the throne. He leads the Fellowship after
                {" Gandalf's"} fall. Other names: Strider, Elessar, Elfstone,
                Dúnadan.
              </li>
            </ul>
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
