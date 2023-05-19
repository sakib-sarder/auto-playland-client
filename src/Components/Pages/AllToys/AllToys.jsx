import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [searchInput, setSearchInput] = useState("");
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    fetch(`https://auto-playland-server.vercel.app/all-toys`)
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);
  const handleSearch = () => {
    fetch(
      `https://auto-playland-server.vercel.app/toySearchByName/${searchInput}`
    )
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  };

  return (
    <div>
      <div className="h-20">
        <h1 className="my-4 text-4xl tracking-widest text-center text-gradient font-bold">
          All Toys
        </h1>
      </div>
      <div className="form-control">
        <div className="input-group flex justify-center ">
          <input
            onChange={(event) => setSearchInput(event.target.value)}
            type="text"
            placeholder="Search…"
            className="border border-slate-400 w-full md:w-2/6 ps-3 text-lg"
          />
          <button onClick={handleSearch} className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto container mx-auto mt-8">
        <table className=" table  w-full text-center">
          {/* head */}
          <thead>
            <tr>
              <th>Photo</th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="">
            {/* row 1 */}
            {allToys.map((toy) => (
              <tr key={toy._id}>
                <td>
                  <img src={toy?.photoUrl} alt="Toy Photo" className="w-40" />
                </td>
                <td>{toy?.sellerName}</td>
                <td>{toy?.name}</td>
                <td>{toy?.subCategory}</td>
                <td className="font-medium">${toy?.price}</td>
                <td>{toy?.availableQuantity}</td>
                <td>
                  <Link to={`/toy-details/${toy?._id}`}>
                    <button className="bg-slate-300 py-1 px-2 rounded-md font-medium hover:bg-gray-400 hover:text-white">
                      Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
