import { Player } from "@lottiefiles/react-lottie-player";
import reviewAnimation from "../../../assets/review.json";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Rating } from "@smastrom/react-rating";
import { toast } from "react-toastify";

const Review = () => {
  const [rating, setRating] = useState(0);
  const { user } = useContext(AuthContext);
  const handleSaveReview = (event) => {
    event.preventDefault();
    const review = event.target.review.value;
    const name = event.target.name.value;
    const userReview = {
      review,
      name,
      rating,
      email: user?.email,
      photo: user?.photoURL,
    };
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Review added successfully");
          event.target.reset();
        }
      });
  };
  return (
    <div className="flex mt-12 flex-col md:flex-row items-center container mx-auto">
      <div className="w-full md:w-1/2">
        <form className="space-y-2" onSubmit={handleSaveReview}>
          <p className="text-3xl font-bold">Leave Your Review</p>
          <div>
            <label htmlFor="name" className="block text-sm">
              Name
            </label>
            <input
              type="text"
              id="name"
              defaultValue={user?.displayName}
              className="w-full md:w-3/4 border px-3 py-[8px] rounded-md border-[#F7C400] text-gray-400"
              readOnly
            />
          </div>
          <div>
            <span className="text-sm">Give Review</span>
            <Rating
              style={{ maxWidth: 120 }}
              value={rating}
              onChange={setRating}
            />
          </div>
          <div>
            <label htmlFor="review" className="block text-sm">
              Review
            </label>
            <textarea
              name="review"
              id="review"
              cols="20"
              rows="5"
              className="w-full md:w-3/4 border px-3 py-[8px] rounded-md border-[#F7C400] text-black bg-gray-100"
            ></textarea>
          </div>
          <div>
            <button className="primary-btn">Submit</button>
          </div>
        </form>
      </div>
      <div className="md:w-1/2 lg:w-1/3">
        <Player src={reviewAnimation} autoplay loop />
      </div>
    </div>
  );
};

export default Review;
