import PreconProjectPageView from "@/components/PreConstruction/PreconProjectPageView";
import {
  getPreconProject,
  preconProjectPath,
  preconProjects,
} from "@/lib/preconProjects";
import { pageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return preconProjects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getPreconProject(params.slug);
  if (!project) return {};
  return pageMetadata({
    title: project.title,
    description: project.description,
    path: preconProjectPath(project.slug),
    keywords: project.keywords,
  });
}

export default function PreconProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getPreconProject(params.slug);
  if (!project) notFound();
  return <PreconProjectPageView project={project} />;
}
