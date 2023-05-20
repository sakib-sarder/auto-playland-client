import { Link } from "react-router-dom";
import animation from "../../../assets/error-page.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { AiFillHome } from "react-icons/ai";
import useTitle from "../../../Hooks/useTitle";

const ErrorPage = () => {
  useTitle("Error Page")
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="">
        <Player autoplay loop src={animation} className="h-[60vh]"></Player>
        <div className="text-center">
          <Link to="/">
            <button className="btn btn-primary inline-flex items-center gap-2">
              <AiFillHome className="text-xl"/> <span>Back To Home</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
