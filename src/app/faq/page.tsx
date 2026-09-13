import BreadcumBanner from "@/components/Global/BreadcumBanner";
import Container from "@/components/Global/Container";
import JsonLd from "@/components/seo/JsonLd";
import { faqItems } from "@/lib/faqData";
import { faqGraph, pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "GTA Real Estate FAQ",
  description:
    "Answers about buying, selling, and pre-construction in the GTA with Ashvak Sheik, Realtor at Re/Max President Realty Brokerage.",
  path: "/faq",
});

const FaqPage = () => {
  return (
    <div className="bg-black text-white">
      <JsonLd data={faqGraph(faqItems)} />
      <BreadcumBanner
        pageTitle="FAQ"
        description="Clear answers about working with Ashvak Sheik across the Greater Toronto Area."
        bgLogo="/bg-ashvaik.jpg"
      />
      <Container>
        <div className="max-w-3xl mx-auto py-12 md:py-20 space-y-10">
          {faqItems.map((item) => (
            <article key={item.question} className="border-b border-white/10 pb-8">
              <h2 className="text-xl md:text-2xl font-tenor_Sans tracking-[2px] uppercase mb-4 leading-tight">
                {item.question}
              </h2>
              <p className="text-white/80 leading-7">{item.answer}</p>
            </article>
          ))}
          <p className="text-white/70 leading-7">
            Still have a question?{" "}
            <Link href="/home-search" className="underline text-white">
              Start a home search
            </Link>{" "}
            or call{" "}
            <a href="tel:6478900982" className="underline text-white">
              647-890-0982
            </a>
            .
          </p>
        </div>
      </Container>
    </div>
  );
};

export default FaqPage;
