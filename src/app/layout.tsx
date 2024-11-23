import Header from "@/components/Layout/Header";
import "./globals.css";
import { Montserrat, Tenor_Sans } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/Layout/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Metadata } from "next";
import { ApolloWrapper } from "./ApolloProvider";


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
      <ApolloWrapper>
        <body
          className={`${montserrat.variable} ${tenor_Sans.variable} ${montserrat.className} montserrat`}
        >
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
