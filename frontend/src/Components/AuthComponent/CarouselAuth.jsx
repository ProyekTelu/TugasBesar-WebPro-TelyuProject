import React from "react";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ImgCarousel1 from "../../img/loginImage1.jpg";
import ImgCarousel2 from "../../img/loginImage2.png";
import ImgCarousel3 from "../../img/loginImage3.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
const images = [ImgCarousel1, ImgCarousel2, ImgCarousel3];

const CarouselAuth = () => {
  return (
    <div className="w-1/2 hidden p-8 xl:h-screen lg:block relative rounded-r-2xl">
      <Swiper
        modules={[Pagination, Autoplay]}
        className="h-full"
        spaceBetween={22}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="bg-cover">
            <img
              src={image}
              className="w-full h-full object-cover rounded-xl"
              alt={`${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselAuth;
