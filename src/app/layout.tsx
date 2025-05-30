import Header from "@/components/Layout/Header";
import "./globals.css";
import {  Tenor_Sans,Montserrat } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/Layout/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Metadata } from "next";
import { ApolloWrapper } from "./ApolloProvider";
import Script from "next/script";

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
  title: {
    template: "%s | Ashvak Sheik",
    absolute: "Ashvak Sheik",
  },
  description:
    "Serving the Greater Toronto Area (GTA), including Peel, Durham, Halton, York, and other surrounding regions.",
    keywords:["Hyderabadi realtor in Mississauga,  Experienced Hyderabadi realtor in Mississauga, Telugu realtor in Mississauga, Telugu realtor in Brampton,  Best South Indian property consultant in Mississauga, Telugu realtor in Burlington, Telugu realtor in Milton, Telugu realtor in Oakville, Top Telugu realtor in GTA, Best Hyderabadi real estate agent in GTA, Top Telugu realtor in Durham Region, Telugu realtor in Whitby, Hyderabadi real estate agent in Whitby, Telugu realtor in Oshawa"]
  
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetching the messages server-side
  return (
    <html>       
     
 <head>
        {/* Google Tag Manager - Head */}
    <meta name="google-site-verification" content="afTMMpDhrclb2UVVXLKFnSbbLlaqh1zBgHArdam4PcU" />
   
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5PR8C8D7');`,
        }}
      />
    </head>
      <ApolloWrapper>
      
        <body
          className={`${montserrat.variable} ${tenor_Sans.variable} ${montserrat.className} montserrat`}
        >
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-5PR8C8D7"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          <div className="bg-black ">
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
