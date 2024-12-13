import React from "react";
import '../styles/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Stonepedia exceeded my expectations. The quality is unmatched!",
      name: "Alice Johnson",
      image: "/images/testimonial-1.png", // Correct path
    },
    {
      text: "Amazing service and a fantastic selection of stones.",
      name: "Mark Smith",
      image: "/images/testimonial-2.png", // Correct path
    },
    {
      text: "Their team guided me through every step. Highly recommend!",
      name: "Sophia Lee",
      image: "/images/testimonial-3.png", // Correct path
    },
    {
      text: "I found the perfect stone for my project. Thanks, Stonepedia!",
      name: "David Brown",
      image: "/images/testimonial-4.png", // Correct path
    },
    {
      text: "Excellent customer service and a wide variety of choices.",
      name: "Emma White",
      image: "/images/testimonial-5.png", // Correct path for new image
    },
    {
      text: "The stones were exactly as described, and delivery was prompt.",
      name: "John Taylor",
      image: "/images/testimonial-6.png", // Correct path for new image
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
