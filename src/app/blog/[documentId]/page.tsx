import { BASE_URL } from "@/env";
import JsonLd from "@/components/seo/JsonLd";
import { getBlog, getBlogs } from "@/lib/blogs";
import { articleGraph, pageMetadata, SITE_URL } from "@/lib/seo";
import BlogDetails from "./Detail";

export async function generateStaticParams() {
  const posts = await getBlogs();
  return posts
    .filter((post) => post.slug)
    .map((post) => ({ documentId: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { documentId: string };
}) {
  const post = await getBlog(params.documentId);
  const thumbRaw =
    post?.thumbnail?.[0]?.formats?.medium?.url ?? post?.thumbnail?.[0]?.url;
  const ogImage =
    thumbRaw && (thumbRaw.startsWith("http") ? thumbRaw : `${BASE_URL}${thumbRaw}`);
  const meta = pageMetadata({
    title: post?.title ?? "Blog",
    description:
      post?.ShortDescription ??
      "GTA real estate insight from Ashvak Sheik, Realtor at Re/Max Millennium Real Estate.",
    path: `/blog/${params.documentId}`,
    image: ogImage,
  });

  return {
    ...meta,
    openGraph: {
      ...meta.openGraph,
      type: "article",
      url: `${SITE_URL}/blog/${params.documentId}`,
    },
  };
}

const BlogDetailsPage = async ({
  params,
}: {
  params: { documentId: string };
}) => {
  const post = await getBlog(params.documentId);
  const thumbRaw =
    post?.thumbnail?.[0]?.formats?.medium?.url ?? post?.thumbnail?.[0]?.url;
  const image =
    thumbRaw && (thumbRaw.startsWith("http") ? thumbRaw : `${BASE_URL}${thumbRaw}`);

  return (
    <>
      {post && (
        <JsonLd
          data={articleGraph({
            title: post.title,
            description: post.ShortDescription,
            slug: post.slug ?? params.documentId,
            image,
            datePublished: post.publishedAt,
            dateModified: post.updatedAt,
          })}
        />
      )}
      <BlogDetails post={post} />
    </>
  );
};

export default BlogDetailsPage;
