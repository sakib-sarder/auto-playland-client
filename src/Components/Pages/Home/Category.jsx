import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "./Category.css";
import { useEffect, useState } from "react";

const Category = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("https://auto-playland-server.vercel.app/all-toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const sportsCategory = toys.filter((toy) => toy.subCategory === "Sports Car");
  console.log(sportsCategory);

  return (
    <div className="my-4">
      <Tabs>
        <TabList className="grid grid-cols-3 text-center my-tab-list gap-1 text-white">
          <Tab className="bg-blue-500 py-2 font-bold tracking-widest">
            Sports Car
          </Tab>
          <Tab className="bg-blue-500 py-2 font-bold tracking-widest">
            Truck
          </Tab>
          <Tab className="bg-blue-500 py-2 font-bold tracking-widest">
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
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
