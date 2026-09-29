"use client";
import SettingStandrad from "@/components/Home/SettingStandrad";
import HeroSection from "@/components/Home/HeroSection";
import Numbers from "@/components/Home/Numbers";
import AboutHome from "@/components/Home/AboutHome";
import Clwantail from "@/components/Home/Clwantail";
import Brand from "@/components/Home/Brand";
import AreaExpertise from "@/components/Home/AreaExpertise";
import ReceiveInbox from "@/components/Home/ReceiveInbox";
import Builders from "@/components/Home/Builders";
import useFullscreenhook from "@/components/Hook/useFullscreenhook";
import FullScreenModal from "@/components/Global/Modal";
import ContactModal from "@/components/ContactModal";
import WorkWith from "@/components/Home/WorkWith";
import Container from "@/components/Global/Container";

export default function HomePage({ rates }: { rates?: React.ReactNode }) {
  const { closeModal, isOpen, openModal } = useFullscreenhook();
  return (
    <div className="bg-black">
      <HeroSection />
      {rates ? (
        <div className="bg-black py-10 md:py-16">
          <Container>
            {rates}
          </Container>
        </div>
      ) : null}
      <SettingStandrad openModal={openModal} />
      <Numbers />
      <AboutHome openModal={openModal} />
      <Clwantail />
      <Brand />
      <Builders />
      <AreaExpertise />
      <ReceiveInbox />
      <WorkWith />
      <FullScreenModal
        isOpen={isOpen}
        closeModal={closeModal}
        bgImage="https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      >
        <ContactModal />
      </FullScreenModal>
    </div>
  );
}
