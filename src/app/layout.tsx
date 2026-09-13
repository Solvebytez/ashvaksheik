import Header from "@/components/Layout/Header";
import "./globals.css";
import { Tenor_Sans, Montserrat } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/Layout/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Metadata } from "next";
import { ApolloWrapper } from "./ApolloProvider";
import Script from "next/script";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, siteGraph } from "@/lib/seo";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic", "latin-ext"],
  variable: "--font-montserrat",
});

const tenor_Sans = Tenor_Sans({
  subsets: ["latin", "cyrillic", "latin-ext"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-tenor-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Ashvak Sheik",
    absolute: "Ashvak Sheik | Re/Max President Realty Brokerage",
  },
  description:
    "Ashvak Sheik is a Telugu-speaking Hyderabadi Muslim realtor with Re/Max President Realty Brokerage in the Greater Toronto Area, including Peel, Durham, Halton, and York.",
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Ashvak Sheik | Re/Max President Realty Brokerage",
    description:
      "GTA realtor helping buyers and sellers across Peel, Durham, Halton, and York.",
    url: SITE_URL,
    siteName: "Ashvak Sheik",
    images: [
      {
        url: "/profile.jpeg",
        width: 800,
        height: 1000,
        alt: "Ashvak Sheik, Realtor at Re/Max President Realty Brokerage",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashvak Sheik | Re/Max President Realty Brokerage",
    description:
      "GTA realtor helping buyers and sellers across Peel, Durham, Halton, and York.",
    images: ["/profile.jpeg"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetching the messages server-side
  return (
    <html lang="en-CA">
      <head>
        {/* Google Tag Manager - Head */}
        <meta
          name="google-site-verification"
          content="GjX6gHbLyBIDJ8ylCsxc994yiwb7pskrtcpY0FWBSOw"
        />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N6J6862H');`,
          }}
        />
      </head>
      <ApolloWrapper>
        <body
          className={`${montserrat.variable} ${tenor_Sans.variable} ${montserrat.className} montserrat bg-black text-white`}
        >
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-N6J6862H"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          {/* End Google Tag Manager (noscript) */}
          <div className="bg-black ">
            <JsonLd data={siteGraph()} />
            <Header />
            {children}
            <Footer />
          </div>
          <ToastContainer />
        </body>
      </ApolloWrapper>
    </html>
  );
}
