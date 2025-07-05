import { BlogResponse } from "@/components/BlogCard";
import { BASE_URL } from "@/env";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const response = await fetch(`${BASE_URL}/api/blogs?populate=*`, {});
  if (!response.ok) {
    throw new Error("Failed to fetch blogs");
  }
  const data: BlogResponse = await response.json();
  const postEntries: MetadataRoute.Sitemap = data.data.map((post) => ({
    url: `https://ashvaksheik.com/blog/${post.slug}`,
    lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
    changeFrequency: "weekly", // ✅ Still valid as it's one of the allowed union types
    priority: 0.5,
  }));

  return [...postEntries];
}
