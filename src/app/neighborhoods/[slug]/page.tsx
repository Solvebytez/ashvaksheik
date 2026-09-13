import NeighborhoodPageView from "@/components/Neighborhood/NeighborhoodPageView";
import {
  getNeighborhood,
  neighborhoodDescription,
  neighborhoodGuides,
  neighborhoodKeywords,
  neighborhoodPath,
  neighborhoodTitle,
} from "@/lib/neighborhoods";
import { pageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return neighborhoodGuides.map((area) => ({ slug: area.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const area = getNeighborhood(params.slug);
  if (!area) return {};
  return pageMetadata({
    title: neighborhoodTitle(area),
    description: neighborhoodDescription(area),
    path: neighborhoodPath(area.slug),
    keywords: neighborhoodKeywords(area),
  });
}

export default function NeighborhoodGuidePage({
  params,
}: {
  params: { slug: string };
}) {
  const area = getNeighborhood(params.slug);
  if (!area) notFound();
  return <NeighborhoodPageView area={area} />;
}
