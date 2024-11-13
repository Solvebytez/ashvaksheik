import React from 'react'
import Container from '../Global/Container'


const Numbers = () => {
  return (
    <div 
    className="relative w-full bg-cover bg-center bg-no-repeat" 
    style={{backgroundImage: "url('https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/zplo68n8zvcle5hkia7o/by-the-numbers')"}}
    role="img"
    aria-label="Wooden structure over water"
  >
    <div className='bg-black bg-opacity-70'>
    <Container>
    <div className=" text-white py-[4rem] flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl mb-4 tenor_Sans tracking-[6px]">BY THE NUMBERS</h1>
      <p className="text-md mb-8 mt-4">Rahul is reliable, consistent, and a successful negotiator. He is highly valued by his clients for his integrity and tenacity.</p>
      <p className="text-md mb-8 mt-4">Ashvak is known for his dedication, professionalism, and exceptional negotiation skills. Clients value his integrity, persistence, and commitment to achieving the best results.
      </p>
      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="text-center ">
          <h2 className="text-3xl mb-2 tenor_Sans">#1</h2>
          <p className="text-md">GTA Realtor 2023    </p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl mb-2 tenor_Sans">$10M</h2>
          <p className="text-md">Sales Volume 2025</p>
        </div>
        <div className="text-center ">
          <h2 className="text-3xl mb-2 tenor_Sans">#1</h2>
          <p className="text-md">Brokerage in Canada</p>
        </div>
      </div>
    </div>
    </Container>
    </div>
  </div>
  )
}

export default Numbers