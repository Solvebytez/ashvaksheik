import BreadcumBanner from "@/components/Global/BreadcumBanner";
import Container from "@/components/Global/Container";
import { pageMetadata } from "@/lib/seo";
import React from "react";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for Ashvak Sheik, Realtor with Re/Max President Realty Brokerage, covering how contact information is collected and used.",
  path: "/privacy",
});

const PrivacyPage = () => {
  return (
    <div className="bg-black text-white">
      <BreadcumBanner pageTitle="Privacy Policy" bgLogo="/bg-ashvaik.jpg" />
      <Container>
        <div className="legal-copy max-w-4xl mx-auto py-20">
          <h2 className="text-left text-2xl md:text-4xl font-tenor_Sans tracking-[2px] md:tracking-[6px] text-white pb-8 uppercase leading-tight">
            Privacy Policy for Individuals Interacting with Ashvak Sheik’s Real
            Estate Services
          </h2>
          <p className="mb-12 text-white/60 text-sm tracking-[2px] uppercase">
            Last Updated: November 12, 2024
          </p>
          <h3 className="text-xl mb-4">Introduction</h3>
          <p className="mb-10">
            This Privacy Policy outlines the practices of Ashvak Sheik, a real
            estate professional with{" "}
            <strong className="text-white">Re/Max President Realty Brokerage</strong>{" "}
            ({"we,"} {"us,"} or {"our"}), regarding the collection, use, and
            disclosure of your personal information when you interact with
            Ashvak Sheik’s website (the “Site”) and services.
          </p>

          <h2 className="text-2xl mb-4">Personal Information We Collect</h2>
          <p className="mb-4">
            We collect information from you in several ways when you use the
            Site or interact with our services:
          </p>

          <h3 className="text-lg mb-3">Information You Provide Directly</h3>
          <ul className="list-disc list-inside mb-8 space-y-2">
            <li>
              <strong className="text-white">Contact Information:</strong> When
              you submit inquiries or subscribe, you may provide your name,
              email address, and phone number.
            </li>
            <li>
              <strong className="text-white">Feedback and Correspondence:</strong>{" "}
              Information provided when contacting us with questions, feedback,
              or inquiries.
            </li>
            <li>
              <strong className="text-white">Marketing Preferences:</strong>{" "}
              Preferences for receiving marketing communications and information
              on engagement with communications.
            </li>
          </ul>

          <h3 className="text-lg mb-3">Information from Third Parties</h3>
          <ul className="list-disc list-inside mb-8 space-y-2">
            <li>
              <strong className="text-white">Social Media:</strong> Privacy
              policies of platforms like Facebook or Instagram apply. Information
              shared through these platforms will be handled in accordance with
              this Privacy Policy.
            </li>
            <li>
              <strong className="text-white">Other Sources:</strong> Personal
              information may come from third parties, like analytics providers,
              public sources, and marketing partners.
            </li>
          </ul>

          <h3 className="text-lg mb-3">Automatic Data Collection</h3>
          <p className="mb-4">
            We, along with our advertising partners and service providers, may
            automatically collect information about your interactions on the
            Site:
          </p>
          <ul className="list-disc list-inside mb-10 space-y-2">
            <li>
              <strong className="text-white">Device Data:</strong> Details about
              your computer or mobile device, such as IP address, browser type,
              and location.
            </li>
            <li>
              <strong className="text-white">Online Activity Data:</strong>{" "}
              Information about visits, pages viewed, time spent, and navigation
              paths.
            </li>
          </ul>

          <h2 className="text-2xl mb-4">How We Use Your Personal Information</h2>
          <ul className="list-disc list-inside mb-10 space-y-2">
            <li>
              <strong className="text-white">To Operate Our Services:</strong>{" "}
              Provide, operate, and improve our services, respond to inquiries,
              and communicate updates.
            </li>
            <li>
              <strong className="text-white">For Legal Compliance:</strong> To
              comply with laws, requests, and legal processes.
            </li>
            <li>
              <strong className="text-white">Marketing:</strong> If you provide
              contact information, we may send marketing communications. You may
              opt out anytime.
            </li>
            <li>
              <strong className="text-white">
                For Compliance, Fraud Prevention, and Safety:
              </strong>{" "}
              To protect rights, privacy, and enforce terms and conditions.
            </li>
            <li>
              <strong className="text-white">To Create Anonymous Data:</strong>{" "}
              For research, analysis, and service improvement.
            </li>
          </ul>

          <h2 className="text-2xl mb-4">How We Share Your Personal Information</h2>
          <ul className="list-disc list-inside mb-10 space-y-2">
            <li>
              <strong className="text-white">
                With Re/Max President Realty Brokerage:
              </strong>{" "}
              For real estate interactions and services.
            </li>
            <li>
              <strong className="text-white">Service Providers:</strong>{" "}
              Companies that assist in operating our business, like hosting and
              analytics providers.
            </li>
            <li>
              <strong className="text-white">Professional Advisors:</strong>{" "}
              Shared as necessary for services by advisors like attorneys and
              auditors.
            </li>
            <li>
              <strong className="text-white">
                Compliance, Fraud Prevention, and Safety:
              </strong>{" "}
              As required to meet these purposes.
            </li>
            <li>
              <strong className="text-white">Business Transfers:</strong> In case
              of a merger, acquisition, or transfer, with efforts for continued
              privacy protection.
            </li>
          </ul>

          <h2 className="text-2xl mb-4">Privacy Choices</h2>
          <p className="mb-4">You have options for controlling your information:</p>
          <ul className="list-disc list-inside mb-10 space-y-2">
            <li>
              <strong className="text-white">Opt-Out of Online Tracking:</strong>{" "}
              Adjust browser settings to block cookies or use privacy plug-ins.
            </li>
            <li>
              <strong className="text-white">Platform Opt-Outs:</strong> Use
              Google, Facebook, or Twitter settings for ad preferences.
            </li>
            <li>
              <strong className="text-white">Advertising Industry Tools:</strong>{" "}
              Use Digital Advertising Alliance or Network Advertising Initiative
              options.
            </li>
          </ul>

          <h2 className="text-2xl mb-4">Security</h2>
          <p className="mb-10">
            We take measures to secure personal information, but no system is
            foolproof. We cannot guarantee the security of all data.
          </p>

          <h2 className="text-2xl mb-4">Changes to This Privacy Policy</h2>
          <p className="mb-10">
            We may update this Privacy Policy. Significant changes will be
            indicated by updating the date at the top of this policy.
          </p>

          <h2 className="text-2xl mb-4">How to Contact Us</h2>
          <p className="mb-4">
            For questions regarding this Privacy Policy, contact:
          </p>
          <ul className="list-none mb-24 space-y-2 text-white">
            <li className="font-tenor_Sans tracking-[1px] md:tracking-[3px] uppercase">
              Ashvak Sheik
            </li>
            <li>Re/Max President Realty Brokerage</li>
            <li>
              Email:{" "}
              <a
                href="mailto:ashvak.realtor07@gmail.com"
                className="underline"
              >
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

export default PrivacyPage;
