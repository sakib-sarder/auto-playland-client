import car from "../../assets/logo.png";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-base-200  mt-6">
      <div className="footer p-10 text-base-content">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Sell Toy</a>
          <a className="link link-hover">Affiliate Marketing</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Contact</span>
          <a className="link link-hover">+333 970 24</a>
          <a className="link link-hover">sakibsarder@gmail.com</a>
        </div>
        <div>
          <span className="footer-title">Address</span>
          <address>
            1535 Lorick Ave Columbia, <br /> South Carolina(SC), <br /> 29203
          </address>
        </div>
      </div>
      <div className="footer px-10 py-4 border-t text-base-content border-base-300">
        <div className="items-center">
          <img src={car} alt="logo" className="w-28" />
          <p>
            <span className="font-bold">Toy Playland.com</span> <br />
            Providing reliable toy car since 1998
          </p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4 text-2xl">
            <Link>
              <BsTwitter className="hover:text-blue-500" />
            </Link>
            <Link>
              <BsInstagram className="hover:text-pink-600" />
            </Link>
            <Link>
              <FaFacebookF className="hover:text-blue-500" />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-center text-sm font-bold pb-4">
        Copyright &copy; 2023 - All right reserved by Auto Playland.com
      </p>
    </footer>
  );
};

export default Footer;
