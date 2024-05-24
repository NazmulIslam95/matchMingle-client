import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { EffectFade, Pagination, Autoplay } from "swiper/modules";

import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import img6 from "../../assets/6.jpg";
import img7 from "../../assets/7.jpg";

const Banner = () => {
  return (
    <div className="mb-10">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // effect={"fade"}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[EffectFade, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" className="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" className="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" className="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" className="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" className="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="" className="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="" className="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
