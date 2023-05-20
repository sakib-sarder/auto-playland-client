import useTitle from "../../../Hooks/useTitle";
import Banner from "./Banner";
import Category from "./Category";
import PhotoGallery from "./PhotoGallery";

const Home = () => {
  useTitle("Home")
  return (
    <div className="container mx-auto px-3 md:px-0">
      <Banner />
      <h1 className="font-bold text-3xl text-gradient tracking-widest">
        photo gallery
      </h1>
      <PhotoGallery />
      <h1 className="font-bold text-3xl text-gradient tracking-widest">
      Shop by category
      </h1>
      <Category />
    </div>
  );
};

export default Home;
