import Banner from "./Banner";
import Category from "./Category";
import PhotoGallery from "./PhotoGallery";

const Home = () => {
  return (
    <div className="container mx-auto">
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
