import BreadcumBanner from "@/components/Global/BreadcumBanner";
import LinkButton from "@/components/Global/Button";
import Container from "@/components/Global/Container";
import JsonLd from "@/components/seo/JsonLd";
import WorkWith from "@/components/Home/WorkWith";
import { communityPages, type CommunityPage } from "@/lib/communityPages";
import { faqGraph, pageMetadata } from "@/lib/seo";
import Link from "next/link";

export function communityMetadata(page: CommunityPage) {
  return pageMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
    keywords: page.keywords,
  });
}

const CommunityPageView = ({ page }: { page: CommunityPage }) => {
  const related = communityPages.filter((item) => item.path !== page.path);

  return (
    <div className="bg-black text-white">
      <JsonLd data={faqGraph(page.faqs)} />
      <BreadcumBanner
        pageTitle={page.banner}
        description={page.intro}
        bgLogo="/bg-ashvaik.jpg"
      />
      <Container>
        <article className="max-w-3xl mx-auto py-12 md:py-20 space-y-6">
          <h2 className="text-2xl md:text-3xl font-tenor_Sans tracking-[2px] uppercase leading-tight">
            {page.heading}
          </h2>
          {page.body.map((paragraph) => (
            <p key={paragraph} className="text-white/80 leading-7">
              {paragraph}
            </p>
          ))}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <LinkButton href="/home-search" btnText="Home Search" />
            <LinkButton href="/about" btnText="About Ashvak" />
          </div>
          <div className="pt-10 space-y-8">
            {page.faqs.map((item) => (
              <section key={item.question} className="border-t border-white/10 pt-6">
                <h3 className="text-lg md:text-xl font-tenor_Sans tracking-[1px] uppercase mb-3 leading-snug">
                  {item.question}
                </h3>
                <p className="text-white/75 leading-7">{item.answer}</p>
              </section>
            ))}
          </div>
          <p className="text-sm text-white/60 pt-6">
            Also search:{" "}
            {related.map((item, index) => (
              <span key={item.path}>
                <Link href={item.path} className="underline text-white">
                  {item.banner}
                </Link>
                {index < related.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
        </article>
      </Container>
      <WorkWith />
    </div>
  );
};

export default CommunityPageView;
