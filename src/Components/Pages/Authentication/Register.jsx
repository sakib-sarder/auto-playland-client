import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../../../assets/login.json";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  //   console.log({name, email, password, photoURL});

  // Handle Register
  const handleRegister = (event) => {
    event.preventDefault();
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex flex-col md:flex-row container mx-auto md:h-[calc(100vh-64px)] items-center justify-center">
      <div className=" w-full md:w-1/2 my-auto  p-4 md:p-0">
        <form
          onSubmit={handleRegister}
          className="flex flex-col w-full lg:w-3/5 mx-auto space-y-3 px-3 md:px-0 border p-3 rounded-lg md:border-none"
        >
          <h1 className="text-4xl font-semibold tracking-wider">
            Please Register !
          </h1>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input
              onChange={() => setName(event.target.value)}
              type="text"
              placeholder="Your Name"
              className="py-2 px-3 border-blue-300 border-2 rounded-md block"
              id="name"
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              onChange={() => setEmail(event.target.value)}
              type="email"
              placeholder="Your Email"
              className="py-2 px-3 border-blue-300 border-2 rounded-md block"
              id="email"
            />
          </div>

          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              onChange={() => setPassword(event.target.value)}
              className="py-2 px-3 border-blue-300 border-2 rounded-md"
              id="password"
              placeholder="Password"
            />
          </div>

          <div className="form-control">
            <label htmlFor="photoURL">PhotoURL</label>
            <input
              onChange={() => setPhotoURL(event.target.value)}
              type="url"
              className="py-2 px-3 border-blue-300 border-2 rounded-md"
              id="photoURL"
              placeholder="photoURL"
            />
          </div>

          <input
            className="bg-[#2d0beef3] font-bold text-white py-2 rounded-lg"
            type="submit"
            value="Register"
          />
          <p className="text-sm">
            Already have an account?{" "}
            <Link to="/login" className="underline hover:text-blue-500">
              Login
            </Link>
          </p>
        </form>
      </div>
      {/* Animation  */}
      <div className="md:w-1/2">
        <Player autoplay loop src={animation}></Player>
      </div>
    </div>
  );
};

export default Register;
