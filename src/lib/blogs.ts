import { BASE_URL } from "@/env";

export type BlogMedia = {
  url?: string;
  id?: number;
  alternativeText?: string | null;
  formats?: {
    medium?: {
      url?: string;
    };
  };
};

export type BlogSeo = {
  metaTitle?: string | null;
  metaDescription?: string | null;
  keywords?: string | null;
  metaRobots?: string | null;
  structuredData?: unknown;
  canonicalURL?: string | null;
  metaImage?: BlogMedia | null;
  metaSocial?: {
    socialNetwork?: string | null;
    title?: string | null;
    description?: string | null;
  }[] | null;
};

export type Blog = {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  ShortDescription: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  thumbnail?: BlogMedia[] | null;
  categories?: unknown[];
  blogSeo?: BlogSeo | null;
};

const SITE_HOST = "https://www.ashvaksheik.com";

export function mediaUrl(media?: BlogMedia | null): string | undefined {
  const raw = media?.formats?.medium?.url ?? media?.url;
  if (!raw) return undefined;
  return raw.startsWith("http") ? raw : `${BASE_URL}${raw}`;
}

export function blogView(post: Blog) {
  const seo = post.blogSeo;
  const thumb = post.thumbnail?.[0];
  const image = mediaUrl(seo?.metaImage) ?? mediaUrl(thumb);
  const canonical =
    seo?.canonicalURL && seo.canonicalURL.startsWith(SITE_HOST)
      ? seo.canonicalURL
      : undefined;
  const keywords = (seo?.keywords ?? "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
  const robots = (seo?.metaRobots ?? "").toLowerCase();
  const social = seo?.metaSocial?.find((item) => item.title || item.description);

  return {
    title: seo?.metaTitle?.trim() || post.title,
    description: seo?.metaDescription?.trim() || post.ShortDescription,
    image,
    imageAlt: seo?.metaImage?.alternativeText || thumb?.alternativeText || post.title,
    canonical,
    keywords,
    robots: seo?.metaRobots
      ? { index: !robots.includes("noindex"), follow: !robots.includes("nofollow") }
      : undefined,
    socialTitle: social?.title?.trim() || undefined,
    socialDescription: social?.description?.trim() || undefined,
    structuredData:
      seo?.structuredData && typeof seo.structuredData === "object"
        ? (seo.structuredData as Record<string, unknown>)
        : undefined,
  };
}

export type BlogResponse = {
  data: Blog[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

const revalidate = 3600;

export async function getBlogs(): Promise<Blog[]> {
  try {
    const response = await fetch(`${BASE_URL}/api/blogs?populate=*`, {
      next: { revalidate },
    });
    if (!response.ok) return [];
    const data: BlogResponse = await response.json();
    const list = Array.isArray(data.data) ? data.data : [];
    return [...list].reverse();
  } catch {
    return [];
  }
}

export async function getBlog(slug: string): Promise<Blog | undefined> {
  try {
    const response = await fetch(
      `${BASE_URL}/api/blogs?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`,
      { next: { revalidate } }
    );
    if (!response.ok) return undefined;
    const data: BlogResponse = await response.json();
    return Array.isArray(data.data) ? data.data[0] : undefined;
  } catch {
    return undefined;
  }
}
