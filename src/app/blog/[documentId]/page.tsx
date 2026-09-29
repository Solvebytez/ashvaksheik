import JsonLd from "@/components/seo/JsonLd";
import { blogView, getBlog, getBlogs } from "@/lib/blogs";
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
  const view = post ? blogView(post) : undefined;
  const path = `/blog/${params.documentId}`;
  const meta = pageMetadata({
    title: view?.title ?? "Blog",
    description:
      view?.description ??
      "GTA real estate insight from Ashvak Sheik, Realtor at Re/Max Millennium Real Estate.",
    path,
    image: view?.image,
    keywords: view && view.keywords.length ? view.keywords : undefined,
  });
  const url = view?.canonical ?? `${SITE_URL}${path}`;

  return {
    ...meta,
    robots: view?.robots,
    alternates: { canonical: url },
    openGraph: {
      ...meta.openGraph,
      type: "article",
      url,
      title: view?.socialTitle ?? meta.openGraph?.title,
      description: view?.socialDescription ?? meta.openGraph?.description,
    },
  };
}

const BlogDetailsPage = async ({
  params,
}: {
  params: { documentId: string };
}) => {
  const post = await getBlog(params.documentId);
  const view = post ? blogView(post) : undefined;

  return (
    <>
      {post && view && (
        <JsonLd
          data={articleGraph({
            title: post.title,
            description: view.description,
            slug: post.slug ?? params.documentId,
            image: view.image,
            datePublished: post.publishedAt,
            dateModified: post.updatedAt,
          })}
        />
      )}
      {view?.structuredData && <JsonLd data={view.structuredData} />}
      <BlogDetails post={post} />
    </>
  );
};

export default BlogDetailsPage;
