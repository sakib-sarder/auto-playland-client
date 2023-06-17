import useTitle from "../../../Hooks/useTitle";
import Features from "../Features/Features";
import NewsLater from "../NewsLater/NewsLater";
import Review from "../Review/Review";
import Banner from "./Banner";
import Category from "./Category";
import PhotoGallery from "./PhotoGallery";
import Testimonials from "./Testimonials";
import TopRated from "./TopRated";

const Home = () => {
  useTitle("Home");
  return (
    <div className=" px-3 md:px-0">
      <Banner />
      <h1 className="font-bold text-3xl text-gradient tracking-widest text-center">
        photo gallery
      </h1>
      <PhotoGallery />
      <Features />
      <h1 className="font-bold text-3xl text-gradient tracking-widest text-center">
        Shop by category
      </h1>
      <Category />
      <TopRated />
      <Testimonials />
      <Review/>
      <NewsLater />
    </div>
  );
};

export default Home;
