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

export default function Home() {
  return (
    <div className="bg-black">
      <HeroSection />
      <SettingStandrad />
      <Numbers/>
      <AboutHome/>
      {/* <PropertySlider/> */}
      <Clwantail/>
      <Brand/>
      <Builders/>
      <AreaExpertise/>
      {/* <ExclusiveList/> */}
      <ReceiveInbox/>
      <HomeNews/>
    </div>
  );
}
