import React from 'react';
import Testimonial from './Testimonial';
import testimonialImage1 from "../assets/img/testimonial/testimonial-img-1.jpg"
import testimonialImage2 from "../assets/img/testimonial/testimonial-img-2.jpg"
import testimonialImage3 from "../assets/img/testimonial/testimonial-img-4.jpg"
import testimonialImage4 from "../assets/img/testimonial/testimonial-img-3.jpg"

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Luna John",
      role: "UX Designer",
      text: "We were so impressed with the work they did for us. They were able to take our vision and turn it into a reality, and they did it all on time and within budget. We would highly recommend them to anyone looking for a reliable partner.",
      image: testimonialImage1,  // Add image path
      rating: 5
    },
    {
      name: "Mark Smith",
      role: "Marketing Specialist",
      text: "We were looking for a company that could help us develop a new website that was both visually appealing and user-friendly. We are so happy with the results, and we would highly recommend them to anyone looking for a new website.",
      image: testimonialImage2,  // Add image path
      rating: 4
    },
    {
      name: "Luke Reeves",
      role: "Sales Manager",
      text: "We were looking for a company that could help us with our branding. We needed a website and marketing materials. They were able to create a brand identity that we loved. They worked with us to develop a logo that represented our company.",
      image: testimonialImage3,  // Add image path
      rating: 5
    }
  ];

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">We believe in client <br/>
            <span>satisfaction</span>. Here are <br/>
            some testimonials by our <br/>
            worthy clients.</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            name={testimonial.name}
            role={testimonial.role}
            text={testimonial.text}
            image={testimonial.image}
            rating={testimonial.rating}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
