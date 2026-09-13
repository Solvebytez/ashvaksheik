import BreadcumBanner from '@/components/Global/BreadcumBanner'
import Container from '@/components/Global/Container'
import { pageMetadata } from '@/lib/seo'
import React from 'react'

export const metadata = pageMetadata({
  title: "Press and Media",
  description:
    "Press inquiries for Ashvak Sheik, Realtor with Re/Max President Realty Brokerage. Email ashvak.realtor07@gmail.com.",
  path: "/press",
});

const PressMediaPage = () => {
  return (
    <div className="bg-black text-white">
    <BreadcumBanner
      pageTitle="Press & Media"     
      bgLogo="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/lejhcjvknr7hwl3ctzld/press-and-media"
    />
    <Container>
      <div className="py-20 text-center max-w-2xl mx-auto space-y-6">
        <h2 className="text-2xl md:text-3xl font-tenor_Sans tracking-[2px] md:tracking-[5px] uppercase px-2 leading-tight">As Seen With Ashvak</h2>
        <p className="text-white/70 leading-7">
          Media features and interviews will appear here. For press inquiries, email{" "}
          <a href="mailto:ashvak.realtor07@gmail.com" className="underline text-white">
            ashvak.realtor07@gmail.com
          </a>
          .
        </p>
      </div>
    </Container>
    </div>
  )
}

export default PressMediaPage