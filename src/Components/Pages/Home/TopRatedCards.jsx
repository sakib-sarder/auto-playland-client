import { Rating } from "@smastrom/react-rating";

const TopRatedCards = ({ toy }) => {
  return (
    <div className="h-full border p-4">
      <img src={toy.photoUrl} alt="car" className="h-3/4 my-auto " />
      <div className="flex gap-1 mt-1">
        <Rating
          value={toy.rating}
          style={{ maxWidth: 80 }}
          readOnly
          className=""
        />
        <p className="text-sm font-semibold">({parseFloat(toy.rating)})</p>
      </div>
    </div>
  );
};

export default TopRatedCards;
