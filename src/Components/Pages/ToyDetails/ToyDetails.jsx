import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import useTitle from "../../../Hooks/useTitle";

const ToyDetails = () => {
  const toy = useLoaderData();
  useTitle("Toy Details");

  const {
    photoUrl,
    name,
    sellerName,
    sellerEmail,
    price,
    rating,
    details,
    availableQuantity,
  } = toy;
  return (
    <div
      className="hero container min-h-[70vh] mx-auto my-6"
      style={{
        backgroundImage: `url("${photoUrl}")`,
      }}
    >
      <div className="hero-overlay  bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="flex flex-col lg:flex-row my-10 glass ">
          <img src={photoUrl} alt="car" />
          <div className="px-2 py-2 text-left space-y-2">
            <h2 className="card-title ">{name}</h2>
            <p className="tracking-wider">
              <span className="font-thin">Seller Name:</span> {sellerName}
            </p>
            <p className="tracking-wider">
              <span className="font-thin">Seller Email:</span> {sellerEmail}
            </p>
            <p className="tracking-wider">
              <span className="font-thin ">Price:</span> $ {price}
            </p>
            <div className="tracking-wider flex items-center gap-2 font-thin">
              <p>Rating:</p>
              <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
            </div>
            <p className="tracking-wider">
              <span className="font-thin ">Available Quantity:</span>{" "}
              {availableQuantity}
            </p>
            <p className="tracking-wider">
              <span className="font-thin text-sm">Details:</span>
              <span className="text-xs text-gray-50">{details}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
