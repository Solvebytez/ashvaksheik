import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "GTA Real Estate Blog",
  description:
    "GTA market articles and buyer-seller advice from Ashvak Sheik, Realtor at Re/Max President Realty Brokerage.",
  path: "/blog",
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
