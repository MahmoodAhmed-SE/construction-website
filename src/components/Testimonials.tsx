import { useEffect, useState } from "react";
import type { TestimonialObj } from "../models/testimonials";

export default function Testimonials({
  testimonials,
}: {
  testimonials: TestimonialObj[];
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonials-container">
      <h1>Testimonials</h1>
      <hr className="divider"></hr>
      {testimonials.map((testimonial, i) => (
        <div key={i} className={`testimonial ${i === index ? "active" : ""}`}>
          <p>{testimonial.para}</p>
          {testimonial.name && <h2>{testimonial.name}</h2>}
          {testimonial.work && <h3>{testimonial.work}</h3>}
        </div>
      ))}
    </div>
  );
}
