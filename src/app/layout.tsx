import Header from "@/components/Layout/Header";
import "./globals.css";
import { Montserrat,Tenor_Sans } from 'next/font/google'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/Layout/Footer";

const montserrat = Montserrat({ 
  subsets: ['latin','cyrillic',"latin-ext"],
  variable:'--font-montserrat' }
)

const tenor_Sans = Tenor_Sans({ 
  subsets: ["latin","cyrillic","latin-ext"],
  weight: ["400"],
  style: ['normal',],
  variable:'--font-tenor-sans' }
)



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetching the messages server-side
  return (
    <html>
      <body className={`${montserrat.variable} ${tenor_Sans.variable} montserrat`}>      
        <div className="bg-black ">
          <Header/>
          {children}
          <Footer/>
          </div>
      </body>
    </html>
  );
}
