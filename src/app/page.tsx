import SettingStandrad from "@/components/Home/SettingStandrad";
import HeroSection from "../components/Home/HeroSection";
import Numbers from "@/components/Home/Numbers";
import AboutHome from "@/components/Home/AboutHome";
import PropertySlider from "@/components/Home/PropertySlider";
import Clwantail from "@/components/Home/Clwantail";
import Brand from "@/components/Home/Brand";
import AreaExpertise from "@/components/Home/AreaExpertise";
import ExclusiveList from "@/components/Home/ExclusiveList";
import ReceiveInbox from "@/components/Home/ReceiveInbox";
import HomeNews from "@/components/Home/HomeNews";

export default function Home() {
  return (
    <div className="bg-black">
      <HeroSection />
      <SettingStandrad />
      <Numbers/>
      <AboutHome/>
      <PropertySlider/>
      <Clwantail/>
      <Brand/>
      <AreaExpertise/>
      <ExclusiveList/>
      <ReceiveInbox/>
      <HomeNews/>
    </div>
  );
}
