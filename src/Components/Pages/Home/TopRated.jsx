import { useEffect, useState } from "react";
import TopRatedCards from "./TopRatedCards";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";

const TopRated = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`https://auto-playland-server.vercel.app/all-toys`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const topRatedToy = toys.filter((toy) => toy.rating > 4.8);
  return (
    <div>
      <h1 className="text-gradient text-3xl font-bold">Our Top Rated Toys</h1>
      <div className="my-8">
        <Swiper
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={14}
          modules={[Autoplay]}
          className="mySwiper h-[20vh] md:h-[30vh]"
        >
          {topRatedToy.map((toy) => (
            <SwiperSlide  key={toy._id}>
              <TopRatedCards toy={toy}></TopRatedCards>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopRated;
