import { useEffect, useState } from "react";
import TestimonialsCard from "../../TestimonialsCard/TestimonialsCard";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://auto-playland-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="container mt-16 mx-auto">
      <h1 className="text-5xl border-s-4  ps-4 border-[#F58B0E] py-4 font-bold mb-6">
        Customers Testimonials
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {reviews.slice(0, 3).map((review) => (
          <TestimonialsCard key={review._id} review={review} />
        ))}
      </div>
      {reviews.length > 2 && (
        <div className="text-center mt-5">
          <button className="primary-btn">See More</button>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
