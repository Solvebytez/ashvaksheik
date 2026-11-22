import React from 'react'
import Container from '../Global/Container'


const Numbers = () => {
  return (
    <div 
    className="relative w-full bg-cover bg-center bg-no-repeat bg-fixed" 
    style={{backgroundImage: "url('https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}
    role="img"
    aria-label="Wooden structure over water"
  >
    <div className='bg-black bg-opacity-70'>
    <Container>
    <div className=" text-white py-[3rem] md:py-[4rem] flex flex-col justify-center items-center text-center">
      <h2 className="text-2xl md:text-4xl mb-4 tenor_Sans tracking-[2px] md:tracking-[6px]">HOW I WORK</h2>
      <p className="text-sm md:text-md mb-8 mt-4 px-1">Ashvak Sheik is a Telugu-speaking Hyderabadi Muslim realtor with Re/Max Millennium Real Estate in Brampton, serving buyers and sellers across the GTA.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-4 w-full max-w-3xl">
        <div className="text-center ">
          <h2 className="text-3xl md:text-4xl mb-2 tenor_Sans">GTA</h2>
          <p className="text-sm md:text-md">Brampton base · Peel, Halton, York, Durham, Toronto</p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl mb-2 tenor_Sans">2</h2>
          <p className="text-sm md:text-md">Languages · Telugu and English</p>
        </div>
        <div className="text-center ">
          <h2 className="text-3xl md:text-4xl mb-2 tenor_Sans">RE/MAX</h2>
          <p className="text-sm md:text-md">Millennium Real Estate</p>
        </div>
      </div>
    </div>
    </Container>
    </div>
  </div>
  )
}

export default Numbers
