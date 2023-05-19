import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast } from "react-toastify";
import "./AddToy.css";
import "react-toastify/dist/ReactToastify.css";

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoURL.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const availableQuantity = form.availableQuantity.value;
    const details = form.details.value;
    const newToy = {
      name,
      photoUrl,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      availableQuantity,
      details,
    };
    console.log(newToy);

    //Mongodb Post
    fetch("https://auto-playland-server.vercel.app/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast("successfully done");
        }
      });
  };
  return (
    <div className="mt-4 md:mt-12 px-3 md:px-0">
      <div className="add-toy rounded-lg h-[20vh]  bg-cover mx-auto container flex items-center justify-center">
        <h1 className="text-center text-gradient text-6xl font-bold ">
          Add A Toy
        </h1>
      </div>
      <form onSubmit={handleAddToy} className="container mx-auto">
        <div className=" flex justify-center items-center">
          <div className="md:grid grid-cols-2 w-full gap-2">
            <div>
              <label htmlFor="name" className="label">
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                id="name"
                className="input input-bordered input-info w-full "
              />
            </div>
            <div>
              <label htmlFor="photoURL" className="label">
                Photo URL
              </label>
              <input
                name="photoURL"
                type="url"
                placeholder="Photo URL"
                id="photoURL"
                className="input input-bordered input-info w-full "
              />
            </div>
            <div>
              <label htmlFor="sellerName" className="label">
                Seller Name
              </label>
              <input
                name="sellerName"
                type="text"
                placeholder="Seller Name"
                id="sellerName"
                defaultValue={user?.displayName || ""}
                className="input input-bordered input-info w-full "
              />
            </div>
            <div>
              <label htmlFor="email" className="label">
                Seller Email
              </label>
              <input
                type="email"
                placeholder="Seller Email"
                id="email"
                name="sellerEmail"
                defaultValue={user?.email || ""}
                className="input input-bordered input-info w-full "
              />
            </div>
            <div>
              <label htmlFor="category" className="label">
                Sub Category
              </label>
              <select
                name="subCategory"
                className="input input-bordered input-info w-full"
              >
                <option value="Sports Car">Sports Car</option>
                <option value="Truck">Truck</option>
                <option value="Regular Car">Regular Car</option>
              </select>
            </div>
            <div>
              <label htmlFor="price" className="label">
                Price
              </label>
              <input
                type="number"
                placeholder="Price"
                id="price"
                className="input input-bordered input-info w-full "
              />
            </div>
            <div>
              <label htmlFor="rating" className="label">
                Rating
              </label>
              <input
                type="text"
                name="rating"
                placeholder="Rating"
                id="rating"
                className="input input-bordered input-info w-full "
              />
            </div>
            <div>
              <label htmlFor="quantity" className="label">
                Available Quantity
              </label>
              <input
                name="availableQuantity"
                type="number"
                placeholder="Available Quantity"
                id="quantity"
                className="input input-bordered input-info w-full "
              />
            </div>
            <div>
              <label htmlFor="details" className="label">
                Detail Description
              </label>
              <textarea
                name="details"
                id="details"
                className="input input-bordered input-warning container  py-2"
                placeholder="Detail Description"
              ></textarea>
            </div>
          </div>
        </div>
        <input
          type="submit"
          value="Submit"
          className="btn btn-info btn-block mt-4"
        />
      </form>
    </div>
  );
};

export default AddToy;
