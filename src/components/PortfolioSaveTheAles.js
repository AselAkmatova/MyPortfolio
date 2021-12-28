import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/thumbs/thumbs.min.css";
import SwiperCore, { Thumbs } from "swiper";
import { useState } from "react";
SwiperCore.use([Thumbs]);

export default function PortfolioSaveTheAles() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <article className="savetheales">
        <div className="savetheales-carousel">
          <Swiper
            loop={true}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            className="mySwiper2"
          >
            <SwiperSlide className="slider-main__slide slider-main__slide-one"></SwiperSlide>
            <SwiperSlide className="slider-main__slide slider-main__slide-two"></SwiperSlide>
            <SwiperSlide className="slider-main__slide slider-main__slide-three"></SwiperSlide>
            <SwiperSlide className="slider-main__slide slider-main__slide-four"></SwiperSlide>
            <SwiperSlide className="slider-main__slide slider-main__slide-five"></SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={5}
            watchSlidesProgress={true}
            className="mySwiper"
          >
            <SwiperSlide className="slider-small__slide slider-small__slide-one"></SwiperSlide>
            <SwiperSlide className="slider-small__slide slider-small__slide-two"></SwiperSlide>
            <SwiperSlide className="slider-small__slide slider-small__slide-three"></SwiperSlide>
            <SwiperSlide className="slider-small__slide slider-small__slide-four"></SwiperSlide>
            <SwiperSlide className="slider-small__slide slider-small__slide-five"></SwiperSlide>
          </Swiper>
        </div>

        <p className="savetheales-text">
          This is an online food ordering app made for the bar
          <b> Save The Ales.</b> Realized at the end of IT-Academy course. You
          can check it on{" "}
          <a
            className="savetheales-text__link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/AselAkmatova/SaveTheAles-2021"
          >
            GitHub
          </a>
        </p>
      </article>
    </>
  );
}
