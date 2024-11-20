'use client'
import ContactModal from './ContactModal'

import Container from './Global/Container'
import FullScreenModal from './Global/Modal'
import useFullscreenhook from './Hook/useFullscreenhook'

const ConsultationModal = () => {
    const { closeModal, isOpen, openModal } = useFullscreenhook();
    
  return (
    <div
        className=" text-white bg-[center_top_8rem] bg-fixed relative bg-cover bg-no-repeat my-24"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/tl4a7tfvrx6vjrdwnzgc/buyers-goal')",
        }}
      >
        <div className="bg-black bg-opacity-70 text-white flex flex-col items-center justify-center py-16 w-full space-y-7 text-center">
          <Container>
            <div className="flex flex-col space-y-10 items-center justify-center">
              <h2 className="text-4xl tracking-[4px] font-tenor_Sans uppercase leading-[45px]">
                MY GOAL IS TO PROVIDE YOU WITH THE MOST PERSONALIZED SERVICE
                THAT IS DESIGNED TO HELP YOU BUY YOUR DREAM HOME.
              </h2>
              <button type='button' onClick={openModal} className={`hover:bg-white hover:text-black border-2 border-white font-bold tracking-[1.5px] text-[14px] uppercase px-11 py-4`}>Schedule A Consultation</button>
            </div>
          </Container>
        </div>
        <FullScreenModal
        isOpen={isOpen}
        closeModal={closeModal}
        bgImage="https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      >
         <ContactModal/>
      </FullScreenModal>
      </div>
  )
}

export default ConsultationModal