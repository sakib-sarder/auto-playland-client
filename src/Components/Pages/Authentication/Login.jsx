import animation from "../../../assets/login.json";
import { Player } from "@lottiefiles/react-lottie-player";
import googleIcon from "../../../assets/google.png";

const Login = () => {
  return (
      <div className="flex flex-col md:flex-row container mx-auto h-[calc(100vh-64px)] items-center justify-center">
        <div className=" w-full md:w-1/2 my-auto  p-4 md:p-0">
              <form className="flex flex-col w-full lg:w-3/5 mx-auto space-y-3 px-3 md:px-0 border p-3 rounded-lg md:border-none">
              <h1 className="text-4xl font-semibold tracking-wider">Please Login !</h1>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input
                placeholder="Your Name"
                className="py-2 px-3 border-blue-300 border-2 rounded-md block"
                id="email"
              />
            </div>

            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input
                className="py-2 px-3 border-blue-300 border-2 rounded-md"
                id="password"
                placeholder="Password"
              />
            </div>

            <input
              className="bg-[#2d0beef3] font-bold text-white py-2 rounded-lg"
              type="submit"
              value="Login"
            />
          </form>
          <div className="divider lg:w-3/5 mx-auto w-full">OR</div>

          <div className="flex justify-center gap-2 rounded-lg shadow-lg cursor-pointer bg-gray-100 py-2 lg:w-3/5 mx-auto w-full">
            <img src={googleIcon} alt="google icon" className="w-8 " />
            <span className="text-center my-auto text-xl font-bold">
              Sign In With Google
            </span>
          </div>
        </div>

        {/* Animation */}
        <div className=" md:flex w-1/2">
          <Player autoplay loop src={animation} className=""></Player>
        </div>
      </div>
  );
};

export default Login;
