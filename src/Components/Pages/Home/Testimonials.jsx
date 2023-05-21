import { Rating } from "@smastrom/react-rating";

const Testimonials = () => {
  return (
    <div className="my-12">
      <h1 className="text-gradient text-3xl font-bold ">
        Customer Reviews and Testimonials
      </h1>
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {/* First Card  */}
        <div className="card bg-gray-50 rounded-none shadow-xl">
          <div className="avatar mx-auto">
            <div className="w-28 rounded mt-4">
              <img src="https://i.ibb.co/PxGVgjS/1655904134350-01.jpg" />
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title">Sakib Sarder</h2>
            <p className="text-sm">
              <span className="font-bold">Purchased Toy:</span> Jada Toys:
              Disney Pixar Cars 1:24 Lightning McQueen XRS RC Remote Control Car{" "}
            </p>
            <p className="text-center font-semibold text-lg ">Toy Review</p>
            <p className="text-center text-xs">
              I love the Jada Toys Disney Pixar Cars 1:24 Lightning McQueen XRS
              RC Car! It is incredibly detailed, easy to control, and brings the
              beloved character to life. Highly recommended!
            </p>
            <Rating
              className="mx-auto"
              style={{ maxWidth: 120 }}
              value="4.5"
              readOnly
            />
          </div>
        </div>
        {/* Second Card  */}
        <div className="card bg-gray-50 rounded-none shadow-xl">
          <div className="avatar mx-auto">
            <div className="w-28 rounded mt-4">
              <img src="https://i.ibb.co/YL1tddF/IMG-20210214-235054.jpg" />
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title">Farhan Labib</h2>
            <p className="text-sm">
              <span className="font-bold">Purchased Toy:</span> Hot Wheels Marvel Spider-Man Web-Car{" "}
            </p>
            <p className="text-center font-semibold text-lg ">Toy Review</p>
            <p className="text-center text-xs">
            Hot Wheels Marvel Spider-Man Web-Car: Sleek design, durable build, compatible with Hot Wheels tracks. Versatile and captures the essence of Spider-Man.
            </p>
            <Rating
              className="mx-auto"
              style={{ maxWidth: 120 }}
              value="3.3"
              readOnly
            />
          </div>
        </div>
        {/* First Card  */}
        <div className="card bg-gray-50 rounded-none shadow-xl">
          <div className="avatar mx-auto">
            <div className="w-28 rounded mt-4">
              <img src="https://i.ibb.co/gwz0gqX/IMG-20211018-WA0001.jpg" />
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title">Sajidur Rahman</h2>
            <p className="text-sm">
              <span className="font-bold">Purchased Toy:</span> Jada Toys:
              Disney Pixar Cars 1:24 Lightning McQueen XRS RC Remote Control Car{" "}
            </p>
            <p className="text-center font-semibold text-lg ">Toy Review</p>
            <p className="text-center text-xs">
              I love the Jada Toys Disney Pixar Cars 1:24 Lightning McQueen XRS
              RC Car! It is incredibly detailed, easy to control, and brings the
              beloved character to life. Highly recommended!
            </p>
            <Rating
              className="mx-auto"
              style={{ maxWidth: 120 }}
              value="4.0"
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
