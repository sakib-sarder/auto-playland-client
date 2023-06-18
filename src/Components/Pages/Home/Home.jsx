import useTitle from "../../../Hooks/useTitle";
import Features from "../Features/Features";
import NewsLater from "../NewsLater/NewsLetter";
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
      <PhotoGallery />
      <Features />
      <Category />
      <TopRated />
      <Testimonials />
      <Review/>
      <NewsLater />
    </div>
  );
};

export default Home;
