import { Animated } from "react-animated-css";
import file from "../images/Резюме_Асель Акматова.pdf";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
SwiperCore.use([EffectFade, Autoplay]);

export default function Home() {
  return (
    <>
      <section className="home">
        <article className="home-cover">
          <div className="home-info">
            <Animated animationIn="slideInLeft" isVisible={true}>
              <h1 className="home-info__title">Asel AKMATOVA</h1>
            </Animated>
            <Animated animationIn="slideInRight" isVisible={true}>
              <h3 className="home-info__subtitle">Front-End Intern</h3>
            </Animated>
            <Animated animationIn="slideInLeft" isVisible={true}>
              <a href={file} download className="home-info__btn">
                Download CV
              </a>
            </Animated>
          </div>
          <Swiper
            className="home-carousel"
            effect={"fade"}
            autoplay={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className="home-carousel__slide home-carousel__slide-first"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="home-carousel__slide home-carousel__slide-second"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="home-carousel__slide home-carousel__slide-third"></div>
            </SwiperSlide>
          </Swiper>
        </article>
      </section>
    </>
  );
}
