import LinkButton from "../Global/Button";
import Container from "../Global/Container";
import { Quote } from 'lucide-react';

const testimonials = [
    {
      name: "PIYUSH",
      quote: "As first-time homebuyers, we were looking for someone who can understand our requirements and budget and help us to find the perfect home. Rahul is very professional, he guided us with the complete process in our first meeting and asked us to do things in the right order. He is very responsive, professional and of course great negotiator.",
    },
    {
      name: "AMY",
      quote: "Rahul was very knowledgeable about the housing market in February of 2021. Through the midst of the housing market surge, and the effects of Covid 19, Rahul still made the journey enjoyable, and in the end, very successful. I would recommend Rahul for any future housing endeavors you may have.",
    },
    {
      name: "VANESSA",
      quote: "My husband and I would like to thank Rahul who made our search for the perfect family home enjoyable and fun! His professionalism and hard work ethic did not disappoint. We couldn’t thank Rahul enough for his guidance throughout our home search process and thoroughly enjoyed working with him!",
    },
  ];

const Clwantail = () => {
    
  return (
   <Container>
     <section className="bg-black text-white py-16 px-8">
    <h2 className="text-center text-5xl  mb-12 tenor_Sans tracking-[6px]">FROM MY CLIENTELE</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="flex flex-col items-center my-5">
          <div className="text-6xl text-gray-400 mb-4"> <Quote size={85} /></div>
          <p className="text-md leading-relaxed tracking-[1px] italic mb-6">{testimonial.quote}</p>
          <p className="tracking-[2px] tenor_Sans text-xl">- {testimonial.name}</p>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-12">
      <LinkButton btnText="View All" href="#"  />
    </div>
  </section>
   </Container>
  )
}

export default Clwantail