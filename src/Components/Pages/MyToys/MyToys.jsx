import { FiEdit } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`https://auto-playland-server.vercel.app/toys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [user]);

  const handleDelete = (id) => {
    fetch(`https://auto-playland-server.vercel.app/my-toys/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="container mx-auto pt-6">
      <div>
        <h1 className="text-gradient text-5xl my-3 font-bold">My Toys</h1>
      </div>
      <div className="overflow-x-auto">
        <table className=" table  w-full text-center">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Toy Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="">
            {toys.map((toy) => (
              <tr key={toy._id}>
                <td>
                  <img src={toy?.photoUrl} alt="Toy Photo" className="w-40" />
                </td>
                <td>{toy?.name}</td>
                <td>{toy?.subCategory}</td>
                <td className="font-medium">${toy?.price}</td>
                <td>{toy?.availableQuantity}</td>
                <td>
                  <div className="flex justify-center gap-2 items-center">
                    <label
                      htmlFor="update-modal"
                      className="flex items-center gap-1 bg-slate-300 hover:bg-gray-400 hover:text-white px-2 py-1 rounded-md font-medium"
                    >
                      <FiEdit />
                      <span>Edit</span>
                    </label>
                    <button
                      onClick={() => handleDelete(toy?._id)}
                      className="flex items-center gap-1 bg-slate-300 hover:bg-gray-400 hover:text-white px-2 py-1 rounded-md font-medium"
                    >
                      <FaTrash />
                      <span>Delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
