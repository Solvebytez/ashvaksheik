import { BASE_URL } from "@/env";

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
  thumbnail: {
    url: string;
    id: number;
    formats: {
      medium: {
        url: string;
      };
    };
    alternativeText: string | null;
  }[];
  categories: unknown[];
};

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
