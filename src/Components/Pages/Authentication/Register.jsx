import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../../../assets/login.json";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
const Register = () => {
  const { createUser, updateUserInfo, setReload } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  const navigate = useNavigate();
  
  // Handle Register
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    //  Validation
    if (password.length < 6) {
      setError("Password should be at least 6 chracter");
      return;
    }
    createUser(email, password)
    .then((result) => {
      console.log(result.user);
      //update user information
      updateUserInfo(name, photoURL)
      .then(() => {
        form.reset();
        setReload(true);
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
      });
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
              onChange={(event) => setName(event.target.value)}
              type="text"
              placeholder="Your Name"
              className="py-2 px-3 border-blue-300 border-2 rounded-md block"
              id="name"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Your Email"
              className="py-2 px-3 border-blue-300 border-2 rounded-md block"
              id="email"
              required
            />
          </div>

          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              onChange={(event) => setPassword(event.target.value)}
              className="py-2 px-3 border-blue-300 border-2 rounded-md"
              id="password"
              type="password"
              required
            />
          </div>

          <div className="form-control">
            <label htmlFor="photoURL">PhotoURL</label>
            <input
              onChange={(event) => setPhotoURL(event.target.value)}
              type="url"
              className="py-2 px-3 border-blue-300 border-2 rounded-md"
              id="photoURL"
              placeholder="photoURL"
              required
            />
          </div>
            <p className="text-error text-sm text-right pr-4">{error}</p>
          <input
            className="bg-[#2d0beef3] font-bold text-white py-2 rounded-lg cursor-pointer"
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
