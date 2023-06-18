import truck from "../../../assets/truck.png";
import jip from "../../../assets/jip.png";
import redCar from "../../../assets/red-car.png";
import yellowCar from "../../../assets/yellow-car.png";
import sportsCar from "../../../assets/sports-car.png";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="container mt-16 mx-auto">
      <h1 className="text-5xl border-s-4 mb-6 ps-4 border-[#F58B0E] py-4 font-bold">Fretures</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex bg-[#F7E7D7] px-3 py-6 rounded-md w-full" data-aos="fade-right">
          <div className="space-y-2">
            <h1 className="text-2xl lg:text-3xl font-bold text-[#F58B0E]">
              Truck toy
            </h1>
            <p>Toy excavator, crane truck</p>
            <Link to="/trucks">
              <button className="bg-[#F58B0E] px-2 py-2 font-semibold text-white rounded-md">
                Buy Now
              </button>
            </Link>
          </div>
          <img src={truck} className="w-36 lg:w-80" />
        </div>
        {/* 2nd Card */}
        <div className="flex bg-[#F7C400] px-3 py-6 rounded-md w-full" data-aos="fade-left">
          <div className="space-y-2">
            <h1 className="text-2xl lg:text-3xl text-[#ffffff] font-bold">
              Sports Car
            </h1>
            <p>Get your dream sports car</p>
            <Link to="/sports-car">
              <button className="bg-[#F58B0E] px-2 py-2 font-semibold text-white rounded-md">
                Buy Now
              </button>
            </Link>
          </div>
          <img src={sportsCar} className="w-36 lg:w-80" />
        </div>
      </div>
      <div className="bg-[#FDE0E4] mt-6 rounded-md flex justify-between px-4" data-aos="fade-up">
        <div className="my-auto space-y-1 py-4">
          <p className="text-xl lg:text-4xl font-bold text-[#F58B0E]">
            Sale 30%
          </p>
          <p className="text-lg mg:text-2xl font-semibold">Buy discount toys</p>
          <button className="bg-[#F58B0E] px-2 py-2 font-semibold text-white rounded-md">
            See More
          </button>
        </div>
        <img src={jip} className="w-20 md:w-40 lg:w-52" />
        <img src={redCar} className="w-20 md:w-40 lg:w-52" />
        <img src={yellowCar} className="w-20 md:w-40 lg:w-52" />
      </div>
    </div>
  );
};

export default Features;
