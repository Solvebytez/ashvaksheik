import BreadcumBanner from "@/components/Global/BreadcumBanner";
import Container from "@/components/Global/Container";
import React from "react";

const PrivacyPage = () => {
  return (
    <div className="bg-white">
      <BreadcumBanner pageTitle="Privacy Policy" bgLogo="" />
      <Container>
        <div className="flex flex-col justify-center py-16 items-center bg-white">
          <h2 className="text-left text-4xl font-tenor_Sans tracking-[8px] text-black py-10 uppercase">
            Privacy Policy for Individuals Interacting with Ashvak Sheik’s Real
            Estate Services
          </h2>
          <h3 className="my-12 text-black text-xl font-bold text-left w-full">Last Updated: November 12, 2024</h3>
          <h3 className="text-black text-xl font-bold text-left w-full">Introduction</h3>
        </div>
        <div className="">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-6">
        This Privacy Policy outlines the practices of Ashvak Sheik, a real estate professional with <strong>CENTURY 21 Property Zone Realty Inc.</strong> ({"we,"} {"us," }or{ "our"}), regarding the collection, use, and disclosure of your personal information when you interact with Ashvak Sheik’s website (the “Site”) and services.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Personal Information We Collect</h2>
      <p className="mb-4">We collect information from you in several ways when you use the Site or interact with our services:</p>
      
      <h3 className="text-lg font-semibold mb-2">Information You Provide Directly</h3>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li><strong>Contact Information:</strong> When you submit inquiries or subscribe, you may provide your name, email address, and phone number.</li>
        <li><strong>Feedback and Correspondence:</strong> Information provided when contacting us with questions, feedback, or inquiries.</li>
        <li><strong>Marketing Preferences:</strong> Preferences for receiving marketing communications and information on engagement with communications.</li>
      </ul>
      
      <h3 className="text-lg font-semibold mb-2">Information from Third Parties</h3>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li><strong>Social Media:</strong> Privacy policies of platforms like Facebook or Instagram apply. Information shared through these platforms will be handled in accordance with this Privacy Policy.</li>
        <li><strong>Other Sources:</strong> Personal information may come from third parties, like analytics providers, public sources, and marketing partners.</li>
      </ul>
      
      <h3 className="text-lg font-semibold mb-2">Automatic Data Collection</h3>
      <p className="mb-4">We, along with our advertising partners and service providers, may automatically collect information about your interactions on the Site:</p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li><strong>Device Data:</strong> Details about your computer or mobile device, such as IP address, browser type, and location.</li>
        <li><strong>Online Activity Data:</strong> Information about visits, pages viewed, time spent, and navigation paths.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mb-3">How We Use Your Personal Information</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li><strong>To Operate Our Services:</strong> Provide, operate, and improve our services, respond to inquiries, and communicate updates.</li>
        <li><strong>For Legal Compliance:</strong> To comply with laws, requests, and legal processes.</li>
        <li><strong>Marketing:</strong> If you provide contact information, we may send marketing communications. You may opt out anytime.</li>
        <li><strong>For Compliance, Fraud Prevention, and Safety:</strong> To protect rights, privacy, and enforce terms and conditions.</li>
        <li><strong>To Create Anonymous Data:</strong> For research, analysis, and service improvement.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">How We Share Your Personal Information</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li><strong>With CENTURY 21 Property Zone Realty Inc.:</strong> For real estate interactions and services.</li>
        <li><strong>Service Providers:</strong> Companies that assist in operating our business, like hosting and analytics providers.</li>
        <li><strong>Professional Advisors:</strong> Shared as necessary for services by advisors like attorneys and auditors.</li>
        <li><strong>Compliance, Fraud Prevention, and Safety:</strong> As required to meet these purposes.</li>
        <li><strong>Business Transfers:</strong> In case of a merger, acquisition, or transfer, with efforts for continued privacy protection.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Privacy Choices</h2>
      <p className="mb-4">You have options for controlling your information:</p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li><strong>Opt-Out of Online Tracking:</strong> Adjust browser settings to block cookies or use privacy plug-ins.</li>
        <li><strong>Platform Opt-Outs:</strong> Use Google, Facebook, or Twitter settings for ad preferences.</li>
        <li><strong>Advertising Industry Tools:</strong> Use Digital Advertising Alliance or Network Advertising Initiative options.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Security</h2>
      <p className="mb-6">We take measures to secure personal information, but no system is foolproof. We cannot guarantee the security of all data.</p>

      <h2 className="text-2xl font-semibold mb-3">Changes to This Privacy Policy</h2>
      <p className="mb-6">We may update this Privacy Policy. Significant changes will be indicated by updating the date at the top of this policy.</p>

      <h2 className="text-2xl font-semibold mb-3">How to Contact Us</h2>
      <p className="mb-4">For questions regarding this Privacy Policy, contact:</p>
      <ul className="list-disc list-inside mb-6 space-y-2 pb-[6rem]">
        <li><strong>Ashvak Sheik</strong></li>
        <li>CENTURY 21 Property Zone Realty Inc.</li>
        <li>Email: ashvak.realtor07@gmail.com</li>
        <li>Phone: 647-890-0982</li>
      </ul>
    </div>
      </Container>
    </div>
  );
};

export default PrivacyPage;
