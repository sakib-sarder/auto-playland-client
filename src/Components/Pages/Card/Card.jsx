const Card = ({ car }) => {
  return (
    <div className="group px-3 py-2 flex flex-col">
      <figure className=" h-40 m-3 md:w-3/4 mx-auto">
        <img
          src={car?.photoUrl}
          alt="car toy"
          className="w-full h-full group-hover:scale-110 transition"
        />
      </figure>
      <div className="space-y-2 ">
        <p className="md:text-lg font-bold">{car.name}</p>
        <p className="text-[#F7C400] font-bold text-lg">
          Price: ${car.price}
        </p>
      </div>
      <button className="primary-btn w-full mt-auto hover:bg-white border border-[#F7C400] hover:text-[#F7C400]">Buy Now</button>
    </div>
  );
};

export default Card;
