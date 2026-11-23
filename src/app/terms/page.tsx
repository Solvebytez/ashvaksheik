import BreadcumBanner from "@/components/Global/BreadcumBanner";
import Container from "@/components/Global/Container";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "Terms & Conditions",
  description:
    "Terms for using ashvaksheik.com. Listing information is for personal use, deemed reliable but not guaranteed, and should be independently verified.",
  path: "/terms",
});

const TermsPage = () => {
  return (
    <div className="bg-black text-white">
      <BreadcumBanner pageTitle="Terms & Conditions" bgLogo="/bg-ashvaik.jpg" />
      <Container>
        <div className="legal-copy max-w-4xl mx-auto py-20">
          <h2 className="text-left text-2xl md:text-4xl font-tenor_Sans tracking-[2px] md:tracking-[6px] text-white pb-8 uppercase leading-tight">
            Terms and Conditions for Using Ashvak Sheik’s Real Estate Website
          </h2>
          <p className="mb-12 text-white/60 text-sm tracking-[2px] uppercase">
            Last Updated: November 23, 2026
          </p>

          <h3 className="text-xl mb-4">Agreement to These Terms</h3>
          <p className="mb-10">
            These terms govern your use of ashvaksheik.com (the “Site”),
            operated by Ashvak Sheik, a real estate professional with{" "}
            <strong className="text-white">Re/Max Millennium Real Estate</strong>{" "}
            in Brampton, Ontario. By using the Site, you agree to these terms.
            If you do not agree, do not use the Site.
          </p>

          <h2 className="text-2xl mb-4">Use of the Site</h2>
          <p className="mb-10">
            You may use the Site to read about homes, neighbourhoods, and real
            estate services in the Greater Toronto Area, and to send an inquiry
            through the forms. You may not misuse the Site, attempt to break
            its security, copy it for a competing service, or use it in a way
            that breaks Ontario or Canadian law.
          </p>

          <h2 className="text-2xl mb-4">Listing Information</h2>
          <p className="mb-4">
            Listing information on this Site is for your personal, non-commercial
            use.
          </p>
          <p className="mb-10">
            Listing information is deemed reliable but not guaranteed and should
            be independently verified. Prices, availability, sizes, taxes, and
            property details can change. Confirm the details that matter to you
            before you rely on them.
          </p>

          <h2 className="text-2xl mb-4">MLS® and REALTOR®</h2>
          <p className="mb-4">
            The trademarks MLS®, Multiple Listing Service®, and the associated
            logos are owned by The Canadian Real Estate Association (CREA) and
            identify the quality of services provided by real estate
            professionals who are members of CREA.
          </p>
          <p className="mb-10">
            The trademarks REALTOR®, REALTORS®, and the REALTOR® logo are
            controlled by CREA and identify real estate professionals who are
            members of CREA. Use of these marks on the Site does not grant you
            any right to use them.
          </p>

          <h2 className="text-2xl mb-4">No Warranties</h2>
          <p className="mb-10">
            The Site and its content are provided as is. Ashvak Sheik and
            Re/Max Millennium Real Estate do not warrant that the Site will be
            error-free, uninterrupted, or fit for a particular purpose, or that
            listing information is complete or current.
          </p>

          <h2 className="text-2xl mb-4">Limitation of Liability</h2>
          <p className="mb-10">
            To the extent permitted by the laws of Ontario, Ashvak Sheik and
            Re/Max Millennium Real Estate are not liable for any loss or damage
            arising from your use of the Site or from a decision you make based
            on its content. This includes indirect or consequential loss. Some
            limits may not apply to you under Ontario law.
          </p>

          <h2 className="text-2xl mb-4">SMS / Text Messaging</h2>
          <p className="mb-4">
            Text messages are governed by our{" "}
            <Link href="/privacy" className="underline">
              Privacy Policy
            </Link>
            . If you choose to opt in on a form, that opt-in is optional and is
            not required to submit the form.
          </p>
          <p className="mb-10">
            Data will not be sold or shared with third parties for marketing or promotional purposes.
          </p>

          <h2 className="text-2xl mb-4">Governing Law</h2>
          <p className="mb-10">
            These terms are governed by the laws of the Province of Ontario and
            the federal laws of Canada that apply there. The courts of Ontario
            have jurisdiction over disputes about these terms.
          </p>

          <h2 className="text-2xl mb-4">Contact</h2>
          <p className="mb-4">Questions about these terms can be sent to:</p>
          <ul className="list-none mb-24 space-y-2 text-white">
            <li className="font-tenor_Sans tracking-[1px] md:tracking-[3px] uppercase">
              Ashvak Sheik
            </li>
            <li>Re/Max Millennium Real Estate</li>
            <li>5 Montpelier St Unit 310, Brampton, ON L6Y 6H4</li>
            <li>
              Email:{" "}
              <a href="mailto:ashvak.realtor07@gmail.com" className="underline">
                ashvak.realtor07@gmail.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:6478900982" className="underline">
                647-890-0982
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default TermsPage;
