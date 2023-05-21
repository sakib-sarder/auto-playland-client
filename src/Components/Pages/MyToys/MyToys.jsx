import { FiEdit } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";

const MyToys = () => {
  const options = ["price-acending", "price-decending"];
  const { user } = useContext(AuthContext);
  const [selected, setSelected] = useState(options[0]);
  const [toys, setToys] = useState([]);
  useTitle("My Toy");

  useEffect(() => {
    fetch(`https://auto-playland-server.vercel.app/toys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [user]);

  // Sort Method
  useEffect(() => {
    const [value, type] = selected
      .split("-")
      .map((item) => item.toLocaleLowerCase());
    fetch(
      `https://auto-playland-server.vercel.app/all-toys?value=${value}&type=${type}`
    )
      .then((res) => res.json())
      .then((data) => {
        const sortedData = data.filter((toy) => toy.sellerEmail === user.email);
        setToys(sortedData);
      });
  }, [selected, toys, user]);

  console.log(toys);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://auto-playland-server.vercel.app/my-toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = toys.filter((toy) => toy._id !== id);
              setToys(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto pt-6">
      <div>
        <h1 className="text-gradient text-5xl my-3 font-bold">My Toys</h1>
      </div>
      <select
        className="w-40 border mx-auto font-semibold px-3 py-2 rounded-md"
        onChange={(e) => setSelected(e.target.value)}
      >
        {options.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
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
                <td>{toy?.name.slice(0, 15)}....</td>
                <td>{toy?.subCategory}</td>
                <td className="font-medium">${toy?.price}</td>
                <td>{toy?.availableQuantity}</td>
                <td>
                  <div className="flex justify-center gap-2 items-center">
                    <Link to={`/update-toy/${toy?._id}`}>
                      <button
                        htmlFor="update-modal"
                        className="flex items-center gap-1 bg-slate-300 hover:bg-gray-400 hover:text-white px-2 py-1 rounded-md font-medium"
                      >
                        <FiEdit />
                        <span>Edit</span>
                      </button>
                    </Link>
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
