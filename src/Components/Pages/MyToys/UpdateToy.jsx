import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateToy = () => {
  const id = useParams().id;
  const [toy, setToy] = useState({});

  useEffect(() => {
    fetch(`https://auto-playland-server.vercel.app/all-toys/${id}`)
      .then((res) => res.json())
      .then((data) => setToy(data));
  }, [id]);

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const quantity = form.availableQuantity.value;
    const details = form.details.value;
    const updatedInfo = { price, quantity, details };
    fetch(`https://auto-playland-server.vercel.app/my-toy/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="container mx-auto mt-6">
      <div className="bg-gray-100 py-9">
        <h1 className="text-5xl text-gradient font-bold">Update Toy</h1>
        <form onSubmit={handleUpdate} className="mx-auto w-4/5 lg:w-3/5">
          <div>
            <label htmlFor="price" className="label">
              Price
            </label>
            <input
              defaultValue={toy.price}
              type="text"
              placeholder="Price"
              id="price"
              name="price"
              className="input input-bordered input-info w-full "
            />
          </div>
          <div>
            <label htmlFor="quantity" className="label">
              Available Quantity
            </label>
            <input
              defaultValue={toy.availableQuantity}
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
              defaultValue={toy?.details}
              name="details"
              id="details"
              className="input input-bordered input-warning container  py-2"
              placeholder="Detail Description"
            ></textarea>
          </div>
          <input
            type="submit"
            value="Submit"
            className="btn btn-info btn-block mt-4"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateToy;
