import truck from "../../../assets/truck.png";
import jip from "../../../assets/jip.png"
import redCar from "../../../assets/red-car.png"
import yellowCar from "../../../assets/yellow-car.png"

const Features = () => {
  return (
      <div className="container mx-auto">
          <h1 className="text-5xl text-center py-4 font-bold">Fretures</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex bg-[#F7E7D7] px-3 py-6 rounded-md w-full">
          <div className="space-y-2">
            <h1 className="text-2xl lg:text-3xl font-bold text-[#F58B0E]">Orange truck toy</h1>
            <p>Toy excavator, crane truck</p>
            <button className="bg-[#F58B0E] px-2 py-2 font-semibold text-white rounded-md">
              Buy Now
            </button>
          </div>
          <img src={truck} className="w-44 lg:w-96" />
        </div>
        {/* 2nd Card */}
        <div className="flex bg-[#F7C400] px-3 py-6 rounded-md w-full">
          <div className="space-y-2">
            <h1 className="text-2xl lg:text-3xl text-[#ffffff] font-bold">Orange truck toy</h1>
            <p>Toy excavator, crane truck</p>
            <button className="bg-[#F58B0E] px-2 py-2 font-semibold text-white rounded-md">
              Buy Now
            </button>
          </div>
          <img src={truck} className="w-44 lg:w-96" />
        </div>
      </div>
          <div className="bg-[#FDE0E4] mt-6 rounded-md flex justify-between px-4">
              <div className="my-auto space-y-1 py-4">
                  <p className="text-xl lg:text-4xl font-bold text-[#F58B0E]">Sale 30%</p>
                  <p className="text-lg mg:text-2xl font-semibold">Stuffed toy animals</p>
                  <button className="bg-[#F58B0E] px-2 py-2 font-semibold text-white rounded-md">See More</button>
              </div>
            <img src={jip} className="w-20 md:w-40 lg:w-52"/>
            <img src={redCar} className="w-20 md:w-40 lg:w-52"/>
            <img src={yellowCar} className="w-20 md:w-40 lg:w-52"/>
      </div>
    </div>
  );
};

export default Features;
