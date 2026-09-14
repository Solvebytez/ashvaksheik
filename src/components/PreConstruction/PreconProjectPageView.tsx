import BreadcumBanner from "@/components/Global/BreadcumBanner";
import LinkButton from "@/components/Global/Button";
import Container from "@/components/Global/Container";
import WorkWith from "@/components/Home/WorkWith";
import JsonLd from "@/components/seo/JsonLd";
import {
  preconProjectPath,
  preconProjects,
  type PreconProject,
} from "@/lib/preconProjects";
import { breadcrumbGraph, faqGraph } from "@/lib/seo";
import Link from "next/link";

const PreconProjectPageView = ({ project }: { project: PreconProject }) => {
  const related = preconProjects.filter((item) => item.slug !== project.slug);
  const faqs = project.faqs;

  return (
    <div className="bg-black text-white">
      <JsonLd data={faqGraph(faqs)} />
      <JsonLd
        data={breadcrumbGraph([
          { name: "Home", path: "/" },
          { name: "Pre-Construction", path: "/pre-construction" },
          { name: project.name, path: preconProjectPath(project.slug) },
        ])}
      />
      <BreadcumBanner
        pageTitle={project.name}
        description={project.intro}
        bgLogo="/bg-ashvaik.jpg"
      />
      <Container>
        <article className="max-w-3xl mx-auto py-12 md:py-20 space-y-6">
          <p className="text-sm tracking-[2px] uppercase text-white/55">
            {project.builder} · {project.city} · {project.status}
          </p>
          <h2 className="text-2xl md:text-3xl font-tenor_Sans tracking-[2px] uppercase leading-tight">
            {project.heading}
          </h2>
          <ul className="text-white/75 text-sm md:text-base space-y-2 leading-7 list-disc pl-5">
            <li>Home types: {project.homeTypes}</li>
            <li>Location: {project.locationNote}</li>
            <li>Occupancy: {project.occupancyNote}</li>
          </ul>
          {project.body.map((paragraph) => (
            <p key={paragraph} className="text-white/80 leading-7">
              {paragraph}
            </p>
          ))}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <LinkButton href="/pre-construction" btnText="All Pre-Construction" />
            <LinkButton href="/home-search" btnText="Home Search" />
          </div>
          <p className="text-sm text-white/60">
            {project.cityRealtorPath && (
              <>
                City page:{" "}
                <Link href={project.cityRealtorPath} className="underline text-white">
                  {project.city} realtor
                </Link>
                {project.neighborhoodPath ? " · " : ""}
              </>
            )}
            {project.neighborhoodPath && (
              <>
                Area guide:{" "}
                <Link href={project.neighborhoodPath} className="underline text-white">
                  {project.city} neighbourhoods
                </Link>
              </>
            )}
          </p>
          <div className="pt-10 space-y-8">
            {faqs.map((item) => (
              <section key={item.question} className="border-t border-white/10 pt-6">
                <h3 className="text-lg md:text-xl font-tenor_Sans tracking-[1px] uppercase mb-3 leading-snug">
                  {item.question}
                </h3>
                <p className="text-white/75 leading-7">{item.answer}</p>
              </section>
            ))}
          </div>
          <p className="text-sm text-white/60 pt-6">
            Other hot GTA pre-construction:{" "}
            {related.map((item, index) => (
              <span key={item.slug}>
                <Link
                  href={preconProjectPath(item.slug)}
                  className="underline text-white"
                >
                  {item.name}
                </Link>
                {index < related.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
          <p className="text-xs text-white/45 pt-2 leading-6">
            Pricing, incentives, occupancy, and availability change without notice.
            Ashvak confirms the current builder package before you reserve. E.&amp;O.E.
          </p>
        </article>
      </Container>
      <WorkWith />
    </div>
  );
};

export default PreconProjectPageView;
