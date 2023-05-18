import animation from "../../../assets/car.json";
import { Player } from "@lottiefiles/react-lottie-player";

const Banner = () => {
  return (
    <div className="flex-col lg:flex-row flex items-center justify-between mt-8 lg:mt-2">
      <div className=" w-full lg:w-1/2 space-y-3 text-center lg:text-left px-2 lg:px-0" data-aos="fade-right">
        <h1 className="text-4xl font-bold">
          Fuel Your Imagination with Car Toys from Auto Playland
        </h1>
        <p className="text-sm">
          Unleash the Power of Possibilities, Ignite Your Imagination, and Fuel
          the Fun with Exhilarating Car Toys from Auto Playland
        </p>
        <button className="btn btn-primary">Buy Now</button>
      </div>
      <div>
        <Player autoplay loop src={animation} className=""></Player>
      </div>
    </div>
  );
};

export default Banner;
