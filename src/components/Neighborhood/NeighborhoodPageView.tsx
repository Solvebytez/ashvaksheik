import BreadcumBanner from "@/components/Global/BreadcumBanner";
import LinkButton from "@/components/Global/Button";
import Container from "@/components/Global/Container";
import WorkWith from "@/components/Home/WorkWith";
import JsonLd from "@/components/seo/JsonLd";
import {
  cityGuides,
  neighborhoodFaqs,
  neighborhoodPath,
  neighborhoodTitle,
  type NeighborhoodGuide,
} from "@/lib/neighborhoods";
import { breadcrumbGraph, faqGraph } from "@/lib/seo";
import Link from "next/link";

const NeighborhoodPageView = ({ area }: { area: NeighborhoodGuide }) => {
  const faqs = neighborhoodFaqs(area);
  const related = cityGuides().filter((item) => item.slug !== area.slug).slice(0, 6);

  return (
    <div className="bg-black text-white">
      <JsonLd data={faqGraph(faqs)} />
      <JsonLd
        data={breadcrumbGraph([
          { name: "Home", path: "/" },
          { name: "Neighborhoods", path: "/neighborhoods" },
          { name: neighborhoodTitle(area), path: neighborhoodPath(area.slug) },
        ])}
      />
      <BreadcumBanner
        pageTitle={neighborhoodTitle(area)}
        description={area.intro}
        bgLogo={area.image}
        className="bg-cover"
      />
      <Container>
        <article className="max-w-3xl mx-auto py-12 md:py-20 space-y-6">
          <nav className="text-sm text-white/55">
            <Link href="/" className="underline text-white/80">
              Home
            </Link>
            {" / "}
            <Link href="/neighborhoods" className="underline text-white/80">
              Neighborhoods
            </Link>
            {" / "}
            <span>{area.name}</span>
          </nav>
          <p className="text-white/80 leading-7">{area.intro}</p>
          <h2 className="text-2xl md:text-3xl font-tenor_Sans tracking-[2px] uppercase leading-tight pt-4">
            Housing in {area.name}
          </h2>
          <p className="text-white/80 leading-7">{area.housing}</p>
          <h2 className="text-2xl md:text-3xl font-tenor_Sans tracking-[2px] uppercase leading-tight pt-4">
            Who {area.name} suits
          </h2>
          <p className="text-white/80 leading-7">{area.whoItSuits}</p>
          <p className="text-white/80 leading-7">Nearby areas: {area.nearby}</p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <LinkButton href="/home-search" btnText="Home Search" />
            <LinkButton href="/home-valuation" btnText="Home Valuation" />
          </div>
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
            Also see:{" "}
            {related.map((item, index) => (
              <span key={item.slug}>
                <Link href={neighborhoodPath(item.slug)} className="underline text-white">
                  {item.name} real estate
                </Link>
                {index < related.length - 1 ? " · " : ""}
              </span>
            ))}
            {" · "}
            <Link href="/telugu-realtor" className="underline text-white">
              Telugu realtor
            </Link>
          </p>
        </article>
      </Container>
      <WorkWith />
    </div>
  );
};

export default NeighborhoodPageView;
