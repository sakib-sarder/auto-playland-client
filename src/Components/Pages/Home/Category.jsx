import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "./Category.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("https://auto-playland-server.vercel.app/all-toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const sportsCategory = toys.filter((toy) => toy.subCategory === "Sports Car");
  // console.log(sportsCategory);
  const trucksCategory = toys.filter((toy) => toy.subCategory === "Truck");
  // console.log(trucksCategory);
  const regularCarCategory = toys.filter(
    (toy) => toy.subCategory === "Regular Car"
  );
  console.log(regularCarCategory);

  return (
    <div className="my-4">
      <Tabs>
        <TabList className="grid grid-cols-3 text-center my-tab-list gap-1 text-white">
          <Tab className="bg-blue-500 py-2 font-bold tracking-widest cursor-pointer">
            Sports Car
          </Tab>
          <Tab className="bg-blue-500 py-2 font-bold tracking-widest cursor-pointer">
            Truck
          </Tab>
          <Tab className="bg-blue-500 py-2 font-bold tracking-widest cursor-pointer">
            Regular Car
          </Tab>
        </TabList>

        <TabPanel className="mt-12">
          {sportsCategory.map((sportsToy) => (
            <div key={sportsToy._id} className="card bg-base-100 shadow-xl">
              <figure>
                <img src={sportsToy?.photoUrl} alt={sportsToy?.name} />
              </figure>
              <div className="card-body">
                <h1 className="text-left text-3xl tracking-wide font-bold">
                  {sportsToy?.name}
                </h1>
                <p className="font-bold">Price: ${sportsToy?.price}</p>
              </div>
            </div>
          ))}
        </TabPanel>
        <TabPanel>
          {trucksCategory.map((truckToy) => (
            <div key={truckToy._id} className="card bg-base-100 shadow-xl">
              <figure>
                <img src={truckToy?.photoUrl} alt={truckToy?.name} />
              </figure>
              <div className="card-body">
                <h1 className="text-left text-3xl tracking-wide font-bold">
                  {truckToy?.name}
                </h1>
                <p className="font-bold">Price: ${truckToy?.price}</p>
              </div>
            </div>
          ))}
        </TabPanel>
        <TabPanel className="md:grid grid-cols-2 lg:grid-cols-3 gap-3">
          {regularCarCategory.map((regularCarToy) => (
            <div key={regularCarToy._id} className="card bg-base-100 shadow-xl">
                <img src={regularCarToy?.photoUrl} alt={regularCarToy?.name} className="h-full"/>
              <div className="card-body">
                <h1 className="text-left text-3xl tracking-wide font-bold">
                  {regularCarToy?.name}
                </h1>
                <p className="font-bold">Price: ${regularCarToy?.price}</p>
                <Link to={`/toy-details/${regularCarToy._id}`}><button className="btn btn-primary">View Details</button></Link>
              </div>
            </div>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
