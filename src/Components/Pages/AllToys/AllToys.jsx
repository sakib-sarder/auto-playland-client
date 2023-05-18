import { Link, useLoaderData } from "react-router-dom";

const AllToys = () => {
  const allToys = useLoaderData();
  return (
      <div className="overflow-x-auto container mx-auto mt-8">
          <h1 className="my-4 text-4xl tracking-widest text-center">All Toys</h1>
      <table className=" table table-zebra w-full text-center">
        {/* head */}
        <thead>
          <tr className="bg-black">
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
              <td>{toy.sellerName}</td>
              <td>{toy.name}</td>
              <td>{toy.subCategory}</td>
              <td>{toy.price}</td>
              <td>{toy.availableQuantity}</td>
              <td>
                <Link>
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
  );
};

export default AllToys;
