import { getBlogs } from "@/lib/blogs";
import { neighborhoodGuides, neighborhoodPath } from "@/lib/neighborhoods";
import { SITE_URL } from "@/lib/seo";
import type { MetadataRoute } from "next";

const staticRoutes: MetadataRoute.Sitemap = [
  { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
  { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  { url: `${SITE_URL}/home-search`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
  { url: `${SITE_URL}/home-valuation`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  { url: `${SITE_URL}/pre-construction`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
  { url: `${SITE_URL}/neighborhoods`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  { url: `${SITE_URL}/buyers`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  { url: `${SITE_URL}/sellers`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  { url: `${SITE_URL}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  { url: `${SITE_URL}/telugu-realtor`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
  { url: `${SITE_URL}/hyderabadi-realtor`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
  { url: `${SITE_URL}/muslim-realtor`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
  { url: `${SITE_URL}/desi-realtor`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  { url: `${SITE_URL}/brampton-realtor`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  { url: `${SITE_URL}/mississauga-realtor`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  { url: `${SITE_URL}/toronto-realtor`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
  { url: `${SITE_URL}/testimonials`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  { url: `${SITE_URL}/properties`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.5 },
  { url: `${SITE_URL}/properties/sold`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
  { url: `${SITE_URL}/press`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  { url: `${SITE_URL}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ...neighborhoodGuides.map((area) => ({
    url: `${SITE_URL}${neighborhoodPath(area.slug)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: area.kind === "city" ? 0.75 : 0.55,
  })),
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogs();
  const postEntries: MetadataRoute.Sitemap = posts
    .filter((post) => post.slug)
    .map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    }));

  return [...staticRoutes, ...postEntries];
}
