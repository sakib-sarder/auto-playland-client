import animation from "../../../assets/login.json";
import { Player } from "@lottiefiles/react-lottie-player";
import googleIcon from "../../../assets/google.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useTitle from "../../../Hooks/useTitle";

const Login = () => {
  const { signInWithGoogle, LoginWithEmailPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  useTitle("Login")

  const from = location.state?.from?.pathname || "/";

  // Google Login
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // Login with Email & Password
  const handleEmailPasswordLogin = (event) => {
    event.preventDefault();
    LoginWithEmailPassword(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        if (
          error.code === "auth/wrong-password" ||
          error.code === "auth/user-not-found"
        ) {
          setError("Invalid email or password");
          return;
        } else {
          setError("");
        }
      });
  };
  return (
    <div className="flex flex-col md:flex-row container mx-auto md:h-[calc(100vh-64px)] items-center justify-center">
      <div className=" w-full md:w-1/2 my-auto  p-4 md:p-0">
        <form
          onSubmit={handleEmailPasswordLogin}
          className="flex flex-col w-full lg:w-3/5 mx-auto space-y-3 px-3 md:px-0 border p-3 rounded-lg md:border-none"
        >
          <h1 className="text-4xl font-semibold tracking-wider">
            Please Login !
          </h1>
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
              type="password"
              className="py-2 px-3 border-blue-300 border-2 rounded-md"
              id="password"
              placeholder="Password"
            />
          </div>
          {error && (
            <p className="text-right text-sm pr-4 text-error">{error}</p>
          )}
          <input
            className="bg-[#2d0beef3] font-bold text-white py-2 rounded-lg cursor-pointer"
            type="submit"
            value="Login"
          />
        </form>
        <p className="text-sm lg:w-3/5 mx-auto w-full">
          Don&#39;t have an account?{" "}
          <Link to="/register" className="underline hover:text-blue-500">
            Register
          </Link>
        </p>
        <div className="divider lg:w-3/5 mx-auto w-full">OR</div>
        {/* Google Sign In Button  */}
        <div
          onClick={handleGoogleSignIn}
          className="flex justify-center gap-2 rounded-lg shadow-lg cursor-pointer bg-gray-100 py-2 lg:w-3/5 mx-auto w-full"
        >
          <img src={googleIcon} alt="google icon" className="w-8 " />
          <span className="text-center my-auto text-xl font-bold">
            Sign In With Google
          </span>
        </div>
      </div>

      {/* Animation */}
      <div className="md:w-1/2">
        <Player autoplay loop src={animation}></Player>
      </div>
    </div>
  );
};

export default Login;
