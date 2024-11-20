'use client'
import SettingStandrad from "@/components/Home/SettingStandrad";
import HeroSection from "../components/Home/HeroSection";
import Numbers from "@/components/Home/Numbers";
import AboutHome from "@/components/Home/AboutHome";
import Clwantail from "@/components/Home/Clwantail";
import Brand from "@/components/Home/Brand";
import AreaExpertise from "@/components/Home/AreaExpertise";


import ReceiveInbox from "@/components/Home/ReceiveInbox";
import HomeNews from "@/components/Home/HomeNews";
import Builders from "@/components/Home/Builders";
import useFullscreenhook from "@/components/Hook/useFullscreenhook";
import FullScreenModal from "@/components/Global/Modal";
import ContactModal from "@/components/ContactModal";
import WorkWith from "@/components/Home/WorkWith";

export default function Home() {
 const {closeModal,isOpen,openModal} = useFullscreenhook()
  return (
    <div className="bg-black">
      <HeroSection />
      <SettingStandrad openModal={openModal} />
      <Numbers/>
      <AboutHome openModal={openModal}/>
      {/* <PropertySlider/> */}
      <Clwantail/>
      <Brand/>
      <Builders/>
      <AreaExpertise/>
      {/* <ExclusiveList/> */}
      <ReceiveInbox/>
      <HomeNews/>
      <WorkWith/>
      <FullScreenModal
        isOpen={isOpen}
        closeModal={closeModal}
        bgImage="https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      >
       <ContactModal/>
      </FullScreenModal>
    </div>
  );
}
