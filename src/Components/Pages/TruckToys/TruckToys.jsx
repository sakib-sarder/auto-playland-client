import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const TruckToys = () => {
  const trucks = useLoaderData();
  return (
    <div className="my-6 container mx-auto px-2 md:px-0">
      <h1 className="text-5xl font-semibold text-center">
        Buy Your Dream Truck
      </h1>
      <div className="grid grid-cols-2 mt-4 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {trucks.map((truck) => (
          <Card key={truck._id} car={truck} />
        ))}
      </div>
    </div>
  );
};

export default TruckToys;
