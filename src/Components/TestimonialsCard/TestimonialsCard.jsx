import { Rating } from "@smastrom/react-rating";

const TestimonialsCard = ({ review }) => {
  return (
    <div className="card bg-gray-50 rounded-none shadow-xl">
      <div className="mx-auto">
        <div className="w-20 h-20 rounded mt-4">
          <img src={review?.photo} />
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">Sakib Sarder</h2>
        <p className="text-center font-semibold text-lg border-b-[1px] border-black">Customer Review</p>
        <p className="text-center text-xs">{review?.review}</p>
        <Rating
          className="mx-auto"
          style={{ maxWidth: 120 }}
          value={review.rating}
          readOnly
        />
      </div>
    </div>
  );
};

export default TestimonialsCard;
