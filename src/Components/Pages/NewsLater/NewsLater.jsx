import { RxTwitterLogo } from "react-icons/rx";
import { TiSocialLinkedin, TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { SiMinutemailer } from "react-icons/si";

const NewsLater = () => {
  return (
    <div className="flex items-center lg:flex-row space-y-3 flex-col justify-between container mx-auto">
      <div className="flex items-center gap-3">
        <SiMinutemailer className="text-3xl text-[#F58B0E]" />
        <p className="md:text-3xl font-bold">Subscribe to Newsletter</p>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          name=""
          className="border  rounded-md px-2 py-2 md:w-96 text-sm "
          placeholder="Your Email"
        />
        <button className="bg-[#F58B0E] px-2 py-2 font-semibold text-white rounded-md">
          Subscribe
        </button>
      </div>
      <div className="flex gap-3">
        <div className="w-8 h-8 border rounded-full text-2xl hover:bg-orange-300 hover:text-white font-bold flex items-center justify-center">
          <RxTwitterLogo className="text-lg" />
        </div>
        <div className="w-8 h-8 border rounded-full text-2xl hover:bg-orange-300 hover:text-white font-bold flex items-center justify-center">
          <TiSocialFacebook className="text-lg" />
        </div>
        <div className="w-8 h-8 border rounded-full text-2xl hover:bg-orange-300 hover:text-white font-bold flex items-center justify-center">
        <TiSocialLinkedin className="text-lg" />
        </div>
        <div className="w-8 h-8 border rounded-full text-2xl hover:bg-orange-300 hover:text-white font-bold flex items-center justify-center">
        <SlSocialInstagram className="text-lg" />
        </div>
      </div>
    </div>
  );
};

export default NewsLater;
