import React from "react";
import '../styles/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Stonepedia exceeded my expectations. The quality is unmatched!",
      name: "Alice Johnson",
      image: "/images/testimonial-1.png", 
    },
    {
      text: "Amazing service and a fantastic selection of stones.",
      name: "Mark Smith",
      image: "/images/testimonial-2.png",
    },
    {
      text: "Their team guided me through every step. Highly recommend!",
      name: "Sophia Lee",
      image: "/images/testimonial-3.png", 
    },
    {
      text: "I found the perfect stone for my project. Thanks, Stonepedia!",
      name: "David Brown",
      image: "/images/testimonial-4.png", 
    },
    {
      text: "Excellent customer service and a wide variety of choices.",
      name: "Emma White",
      image: "/images/testimonial-5.png", 
    },
    {
      text: "The stones were exactly as described, and delivery was prompt.",
      name: "John Taylor",
      image: "/images/testimonial-6.png", 
    },
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <img
              src={testimonial.image}
              alt={`Testimonial from ${testimonial.name}`}
              className="testimonial-image"
            />
            <p>{testimonial.text}</p>
            <div className="client-name">{testimonial.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
