import BreadcumBanner from "@/components/Global/BreadcumBanner";
import Container from "@/components/Global/Container";
import WorkWith from "@/components/Home/WorkWith";
import TestimonialCard from "@/components/TestimonialsCard";

const testimonialsData = [
  {
    initials: "BA",
    name: "Brad & Amy",
    text: "Rahul was very knowledgeable with the housing market in February of 2021. Through the midst of the housing market surge, and the affects of Covid 19, Rahul still made the journey enjoyable, and in the end, very successful. I would recommend Rahul for any future housing endeavours you may have.",
  },
  {
    initials: "C",
    name: "Celine",
    text: "Rahul Luthra is a great real estate agent and a successful negotiator. I've been wanting to buy a condo in a specific building in the south end of Guelph, where listings are rare. When one unit became available, on the same day I contacted Rahul who has excellent knowledge of the market at that location. In the 2021 pandemic era, hot housing market competing for a property needed a great negotiator like Rahul, who successfully got it for me. Highly recommended!",
  },
  {
    initials: "CJ",
    name: "Colin & Jordan",
    text: "Rahul did an absolutely amazing job helping us with the purchase of our first home! From continuously setting up meetings and viewings that fit our complicated schedule to making sure that we were comfortable and understood every step of the process, he was consistently there for us and always prepared to go to battle on our behalf. We have been in our house for several months now and Rahul has continued to follow up to ensure that we are happy with our purchase and help in any way he can with renovations, updates etc. We could not recommend him and his team more, especially for first-time buyers who are unclear about the process, and consider him a lifelong friend after all that he has done to help us secure a future in a city that we both love!",
    image:
      "https://images.pexels.com/photos/27427385/pexels-photo-27427385/free-photo-of-a-man-in-a-white-shirt-and-jeans.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // replace with the actual path if image exists
  },
];

const TestimonialsPage = () => {
  return (
    <div className="bg-white">
      <BreadcumBanner
        pageTitle="Testimonials"
        description="Browse what my clients have to say about me."
        bgLogo="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/t4img5spmgkyawk7rmm4/testimonials"
      />

      <div className="bg-white-100 py-8 px-4 md:px-8 lg:px-16 xl:px-36 2xl:px-72">
        <Container className="">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              initials={testimonial.initials}
              name={testimonial.name}
              text={testimonial.text}
              image={testimonial.image}
            />
          ))}
        </Container>
      </div>
      <WorkWith />
    </div>
  );
};

export default TestimonialsPage;
