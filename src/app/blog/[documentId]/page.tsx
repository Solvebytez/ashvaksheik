import { BASE_URL } from "@/env";
import JsonLd from "@/components/seo/JsonLd";
import { articleGraph, pageMetadata, SITE_URL } from "@/lib/seo";
import BlogDetails from "./Detail";

async function getPost(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=*`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) return undefined;
  const jsonData = await res.json();
  return Array.isArray(jsonData.data) ? jsonData.data[0] : undefined;
}

export async function generateMetadata({
  params,
}: {
  params: { documentId: string };
}) {
  const post = await getPost(params.documentId);
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
  const post = await getPost(params.documentId);
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
      <BlogDetails params={params} />
    </>
  );
};

export default BlogDetailsPage;
