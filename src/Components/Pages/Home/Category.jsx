import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "./Category.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

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
        <TabList className="grid grid-cols-3 text-center my-tab-list gap-1 text-white w-5/6 md:w-3/6 mx-auto">
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

        <TabPanel className="mt-12 grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {sportsCategory.map((sportsToy) => (
            <div
              key={sportsToy._id}
              className="card p-5 bg-base-100 shadow-lg border rounded-none"
            >
              <img
                src={sportsToy?.photoUrl}
                alt={sportsToy?.name}
                className="h-full"
              />
              <div className="pt-2 ">
                <h1 className="text-left text-lg tracking-wide font-bold">
                  {sportsToy?.name}
                </h1>
                <p className="font-medium">Price: ${sportsToy?.price}</p>
                <div className="tracking-wider flex items-center gap-2">
                  <p>Rating:</p>
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={sportsToy.rating}
                    readOnly
                  />
                </div>
                <div className="text-end">
                  <Link>
                    <button className="btn btn-primary">View Details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </TabPanel>
        <TabPanel className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {trucksCategory.map((truckToy) => (
            <div
              key={truckToy._id}
              className="card p-5 bg-base-100 shadow-lg border rounded-none"
            >
              <img
                src={truckToy?.photoUrl}
                alt={truckToy?.name}
                className="h-full"
              />
              <div className="pt-2 ">
                <h1 className="text-left text-lg tracking-wide font-bold">
                  {truckToy?.name}
                </h1>
                <p className="font-medium">Price: ${truckToy?.price}</p>
                <div className="tracking-wider flex items-center gap-2">
                  <p>Rating:</p>
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={truckToy.rating}
                    readOnly
                  />
                </div>
                <div className="text-end">
                  <Link>
                    <button className="btn btn-primary">View Details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </TabPanel>
        <TabPanel className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {regularCarCategory.map((regularCarToy) => (
            <div
              key={regularCarToy._id}
              className="card p-5 bg-base-100 shadow-lg border rounded-none"
            >
              <img
                src={regularCarToy?.photoUrl}
                alt={regularCarToy?.name}
                className="h-full"
              />
              <div className="pt-2 ">
                <h1 className="text-left text-lg tracking-wide font-bold">
                  {regularCarToy?.name}
                </h1>
                <p className="font-medium">Price: ${regularCarToy?.price}</p>
                <div className="tracking-wider flex items-center gap-2">
                  <p>Rating:</p>
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={regularCarToy.rating}
                    readOnly
                  />
                </div>
                <div className="text-end">
                  <Link>
                    <button className="btn btn-primary">View Details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
