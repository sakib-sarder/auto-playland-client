import Banner from "./Banner";
import Category from "./Category";
import PhotoGallery from "./PhotoGallery";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner />
      <h1 className="text-orange-400 font-bold text-3xl uppercase tracking-widest">
        photo gallery
      </h1>
      <PhotoGallery />
      <h1 className="text-orange-400 font-bold text-3xl uppercase tracking-widest mb-8">
      Shop by category
      </h1>
      <Category />
    </div>
  );
};

export default Home;
